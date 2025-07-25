import { useState, Suspense, lazy, useCallback, useEffect } from "react";
import Header from "./components/common/Header";
import TypingEffect from "./components/TypingEffect";
import { fileSystemData } from "./data/fileSystemData";
import type { FileNode, TabInfo } from "./types/fileSystem";
import { performanceMonitor, createMemoryManager } from "./utils/performance";
import "./styles/global.scss";
import "./styles/pages/index.scss";

// 동적 임포트로 코드 스플리팅
const FileTree = lazy(() => import("./components/layout/FileTree"));
const CodeEditor = lazy(() => import("./components/layout/CodeEditor"));
const SimpleTerminalSearch = lazy(() => import('./components/SimpleTerminalSearch'));

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [tabs, setTabs] = useState<TabInfo[]>([]);
    const [activeTab, setActiveTab] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");

    // 메모리 관리자 생성
    const memoryManager = createMemoryManager();

    useEffect(() => {
        performanceMonitor.startTimer("app-mount");

        return () => {
            const mountTime = performanceMonitor.endTimer("app-mount");
            console.log(`App mounted in ${mountTime.toFixed(2)}ms`);
            memoryManager.cleanup();
        };
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDarkTheme(!isDarkTheme);
    }, [isDarkTheme]);

    const handleFileSelect = useCallback(
        (file: FileNode) => {
            performanceMonitor.startTimer("file-select");

            if (file.type === "file" && file.content) {
                // 이미 열린 탭인지 확인
                const existingTab = tabs.find((tab) => tab.path === file.path);

                if (existingTab) {
                    // 기존 탭 활성화
                    setActiveTab(existingTab.id);
                } else {
                    // 새 탭 생성
                    const newTab: TabInfo = {
                        id: file.id,
                        name: file.name,
                        path: file.path,
                        type: file.extension || "text",
                        isActive: true,
                        isDirty: false,
                        content: file.content,
                    };

                    // 기존 탭들의 active 상태 해제
                    const updatedTabs = tabs.map((tab) => ({
                        ...tab,
                        isActive: false,
                    }));
                    setTabs([...updatedTabs, newTab]);
                    setActiveTab(newTab.id);
                }

                setSelectedFile(file.path);
            }

            const selectTime = performanceMonitor.endTimer("file-select");
            if (selectTime > 100) {
                console.warn(`Slow file selection: ${selectTime.toFixed(2)}ms`);
            }
        },
        [tabs]
    );

    const handleTabSelect = (tabId: string) => {
        const updatedTabs = tabs.map((tab) => ({
            ...tab,
            isActive: tab.id === tabId,
        }));
        setTabs(updatedTabs);
        setActiveTab(tabId);
    };

    const handleTabClose = (tabId: string) => {
        const updatedTabs = tabs.filter((tab) => tab.id !== tabId);
        setTabs(updatedTabs);

        if (activeTab === tabId) {
            // 닫은 탭이 활성 탭이었다면 다른 탭 활성화
            if (updatedTabs.length > 0) {
                const newActiveTab = updatedTabs[updatedTabs.length - 1];
                setActiveTab(newActiveTab.id);
                setSelectedFile(newActiveTab.path);
            } else {
                setActiveTab("");
                setSelectedFile("");
            }
        }
    };

    const handleTerminalCommand = useCallback(
        (_command: string, targetFile?: FileNode) => {
            if (targetFile) {
                handleFileSelect(targetFile);
            }
        },
        [handleFileSelect]
    );

    return (
        <div
            className={`container ${
                isDarkTheme ? "dark-theme" : "light-theme"
            }`}
        >
            <div className="portfolio-container">
                <div
                    className="portfolio-app"
                    role="application"
                    aria-label="웹 퍼블리셔 포트폴리오 - VSCode 스타일 인터페이스"
                >
                    <Header
                        isDarkTheme={isDarkTheme}
                        onToggleTheme={toggleTheme}
                    />

                    <div className="portfolio-layout">
                        <nav className="file-explorer" aria-label="파일 탐색">
                            <Suspense
                                fallback={
                                    <div className="loading-spinner">
                                        Loading...
                                    </div>
                                }
                            >
                                <FileTree
                                    nodes={fileSystemData.children || []}
                                    onFileSelect={handleFileSelect}
                                    selectedFile={selectedFile}
                                />
                            </Suspense>
                        </nav>

                        <main className="code-editor-main" role="main">
                            <Suspense
                                fallback={
                                    <div className="loading-spinner">
                                        Loading...
                                    </div>
                                }
                            >
                                <CodeEditor
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    onTabSelect={handleTabSelect}
                                    onTabClose={handleTabClose}
                                />
                            </Suspense>
                        </main>
                    </div>

                    <footer className="portfolio-terminal" role="contentinfo">
                        <div className="terminal-header">
                            <label
                                htmlFor="terminal-input"
                                className="terminal-label"
                            >
                                Terminal
                            </label>
                        </div>
                        <div
                            className="terminal-body"
                            style={{ position: "relative" }}
                        >
                            <Suspense
                                fallback={
                                    <div className="loading-spinner">
                                        Loading...
                                    </div>
                                }
                            >
                                <SimpleTerminalSearch
                                    value={inputValue}
                                    onChange={setInputValue}
                                    onCommand={handleTerminalCommand}
                                    placeholder={
                                        <TypingEffect
                                            text="> 에디터 컨셉의 페이지입니다. 왼쪽 폴더를 클릭하면 저의 이야기가 펼쳐집니다."
                                            typeSpeed={80}
                                            delay={1000}
                                        />
                                    }
                                />
                            </Suspense>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;

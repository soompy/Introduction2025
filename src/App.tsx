import React, { useState } from "react";
import Header from "./components/common/Header";
import FileTree from "./components/layout/FileTree";
import CodeEditor from "./components/layout/CodeEditor";
import TypingEffect from "./components/TypingEffect";
import { fileSystemData } from "./data/fileSystemData";
import type { FileNode, TabInfo } from "./types/fileSystem";
import "./styles/global.scss";
import "./styles/pages/index.scss";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [tabs, setTabs] = useState<TabInfo[]>([]);
    const [activeTab, setActiveTab] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>('');

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const handleFileSelect = (file: FileNode) => {
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
    };

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
                            <FileTree
                                nodes={fileSystemData.children || []}
                                onFileSelect={handleFileSelect}
                                selectedFile={selectedFile}
                            />
                        </nav>

                        <main className="code-editor-main" role="main">
                            <CodeEditor
                                tabs={tabs}
                                activeTab={activeTab}
                                onTabSelect={handleTabSelect}
                                onTabClose={handleTabClose}
                            />
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
                         <div className="terminal-body" style={{ position: 'relative' }}>
                            {inputValue === '' && (
                                <div className="terminal-placeholder">
                                    <TypingEffect 
                                        texts={[
                                            "> 이수민 포트폴리오 모음 페이지 방문을 환영합니다.",
                                            "> 이 포트폴리오는 코드 에디터처럼 구성되어 있어요.",
                                            "> 좌측에서 폴더를 클릭하면",
                                            "> 저에 대한 소개와 개인 토이 프로젝트 작업물을 볼 수 있습니다.",
                                        ]}
                                        typeSpeed={80}
                                        eraseSpeed={40}
                                        delay={1000}
                                        pauseTime={2500}
                                    />
                                </div>
                            )}
                            <input
                                type="text"
                                id="terminal-input"
                                className="terminal-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                aria-label="터미널 입력창"
                                style={{ background: 'transparent' }}
                            />
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;

import React, { useState } from "react";
import type { TabInfo } from "../../types/fileSystem";
import LivePreview from "../LivePreview";
import "./CodeEditor.scss";

interface CodeEditorProps {
    tabs: TabInfo[];
    activeTab: string;
    onTabSelect: (tabId: string) => void;
    onTabClose: (tabId: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    tabs,
    activeTab,
    onTabSelect,
    onTabClose,
}) => {
    const [showPreview, setShowPreview] = useState(true);
    const currentTab = tabs.find((tab) => tab.id === activeTab);

    const getLanguageFromExtension = (path: string) => {
        const extension = path.split(".").pop();
        switch (extension) {
            case "html":
                return "html";
            case "css":
                return "css";
            case "scss":
                return "scss";
            case "js":
                return "javascript";
            case "ts":
                return "typescript";
            case "tsx":
                return "tsx";
            case "json":
                return "json";
            case "md":
                return "markdown";
            default:
                return "text";
        }
    };

    // 코드 포맷팅 함수는 추후 구현 예정

    const getFileIcon = (path: string) => {
        const extension = path.split(".").pop();
        switch (extension) {
            case "html":
                return "🌐";
            case "css":
                return "🎨";
            case "scss":
                return "🎨";
            case "js":
                return "⚡";
            case "ts":
                return "🔷";
            case "tsx":
                return "⚛️";
            case "json":
                return "📋";
            case "md":
                return "📝";
            case "pdf":
                return "📄";
            default:
                return "📄";
        }
    };

    return (
        <div className="code-editor">
            <div className="editor-tabs">
                {tabs.map((tab) => {
                    const isHtmlFile = tab.name.toLowerCase().endsWith(".html");
                    return (
                        <div
                            key={tab.id}
                            className={`editor-tab ${
                                tab.isActive ? "active" : ""
                            } ${isHtmlFile ? "html-file" : ""}`}
                            onClick={() => onTabSelect(tab.id)}
                        >
                            <span className="tab-icon">
                                {getFileIcon(tab.path)}
                            </span>
                            <span className="tab-name">{tab.name}</span>
                            {tab.isDirty && (
                                <span className="tab-dirty">●</span>
                            )}
                            {isHtmlFile && !tab.isActive && (
                                <div className="preview-hint">
                                    <span className="hint-icon">🔴</span>
                                    <span className="hint-text">
                                        클릭하여 라이브 미리보기
                                    </span>
                                </div>
                            )}
                            <button
                                className="tab-close"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onTabClose(tab.id);
                                }}
                                aria-label={`${tab.name} 탭 닫기`}
                            >
                                ×
                            </button>
                        </div>
                    );
                })}
                {currentTab && (
                    <div className="editor-controls">
                        <button
                            className={`preview-toggle ${
                                showPreview ? "active" : ""
                            }`}
                            onClick={() => setShowPreview(!showPreview)}
                            title={
                                showPreview ? "코드만 보기" : "라이브 미리보기"
                            }
                        >
                            <span className="preview-icon">
                                {showPreview ? (
                                    <>
                                        <span className="icon">📝</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="icon">🔴</span>
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                )}
            </div>

            <div className="editor-content">
                {currentTab ? (
                    <div
                        className={`code-editor-layout ${
                            showPreview ? "split-view" : "code-only"
                        }`}
                    >
                        <div className="code-panel">
                            <div className="code-container">
                                <div className="code-header">
                                    <div className="file-path">
                                        {currentTab.path}
                                    </div>
                                    <div className="file-info">
                                        <span className="language">
                                            {getLanguageFromExtension(
                                                currentTab.path
                                            )}
                                        </span>
                                        <span className="file-size">
                                            {currentTab.content.length}{" "}
                                            characters
                                        </span>
                                    </div>
                                </div>
                                <div className="code-body">
                                    <div className="line-numbers">
                                        {currentTab.content
                                            .split("\n")
                                            .map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="line-number"
                                                >
                                                    {index + 1}
                                                </div>
                                            ))}
                                    </div>
                                    <div className="code-lines">
                                        <pre
                                            className={`language-${getLanguageFromExtension(
                                                currentTab.path
                                            )}`}
                                        >
                                            <code>{currentTab.content}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showPreview && (
                            <div className="preview-panel">
                                <LivePreview currentTab={currentTab} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="welcome-screen">
                        <div className="welcome-content">
                            <h2>Space 이수민</h2>
                            <p>폴더를 선택하여 확인해보세요!</p>
                            <div className="welcome-shortcuts">
                                <div className="shortcut">
                                    <kbd>Ctrl</kbd> + <kbd>P</kbd> - 파일 빠른
                                    열기
                                </div>
                                <div className="shortcut">
                                    <kbd>Ctrl</kbd> + <kbd>`</kbd> - 터미널 토글
                                </div>
                                <div className="shortcut">
                                    <kbd>Ctrl</kbd> + <kbd>B</kbd> - 사이드바
                                    토글
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodeEditor;

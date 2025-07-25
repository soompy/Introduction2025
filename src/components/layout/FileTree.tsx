import React, { useState, useCallback, memo, useMemo } from "react";
import type { FileNode } from "../../types/fileSystem";
import ProjectPreview from "./ProjectPreview";
import { projectsInfo } from "../../data/fileSystemData";
import "./FileTree.scss";

interface FileTreeProps {
    nodes: FileNode[];
    onFileSelect: (file: FileNode) => void;
    selectedFile?: string;
}

interface FileTreeItemProps {
    node: FileNode;
    onFileSelect: (file: FileNode) => void;
    selectedFile?: string;
    level?: number;
    onProjectPreview?: (projectId: string) => void;
}

// 파일 아이콘 맵핑을 객체로 변경하여 성능 최적화
const FILE_ICON_MAP: Record<string, string> = {
    folder: "📁",
    html: "🌐",
    css: "🎨",
    scss: "🎨",
    js: "⚡",
    ts: "🔷",
    tsx: "⚛️",
    json: "📋",
    md: "📝",
    pdf: "📄",
    png: "🖼️",
    jpg: "🖼️",
    jpeg: "🖼️",
    gif: "🖼️",
    svg: "🖼️",
};

const getFileIcon = (extension?: string, type?: string): string => {
    if (type === "folder") return FILE_ICON_MAP.folder;
    return FILE_ICON_MAP[extension || ""] || "📄";
};

const FileTreeItem: React.FC<FileTreeItemProps> = memo(
    ({ node, onFileSelect, selectedFile, level = 0, onProjectPreview }) => {
        const [isExpanded, setIsExpanded] = useState(node.isExpanded || false);

        const handleToggle = useCallback(() => {
            const isProjectFolder =
                node.path.startsWith("/portfolio/") &&
                node.type === "folder" &&
                level === 1;

            if (isProjectFolder && onProjectPreview) {
                // 프로젝트 폴더인 경우 바로 미리보기 열기
                const projectId = node.id.replace("project-", "");
                onProjectPreview(projectId);
            } else if (node.type === "folder") {
                setIsExpanded(!isExpanded);
            } else {
                onFileSelect(node);
            }
        }, [node, onFileSelect, onProjectPreview, level, isExpanded]);

        const isSelected = selectedFile === node.path;
        const isProjectFolder =
            node.path.startsWith("/portfolio/") &&
            node.type === "folder" &&
            level === 1;

        return (
            <div className="file-tree-item">
                <div
                    className={`file-tree-node ${
                        isSelected ? "selected" : ""
                    } ${isProjectFolder ? "project-folder" : ""}`}
                    style={{ paddingLeft: `${level * 20 + 8}px` }}
                    onClick={handleToggle}
                >
                    <span className="file-icon">
                        {node.type === "folder" && (
                            <span
                                className={`folder-toggle ${
                                    isExpanded ? "expanded" : ""
                                }`}
                            >
                                ▶
                            </span>
                        )}
                        {getFileIcon(node.extension, node.type)}
                    </span>
                    <span className="file-name">{node.name}</span>

                    {isProjectFolder && (
                        <div className="project-indicator">
                            <span
                                className="preview-hint"
                                title="클릭하여 프로젝트 미리보기"
                            >
                                ⭐️
                            </span>
                        </div>
                    )}
                </div>

                {node.type === "folder" && isExpanded && node.children && (
                    <div className="file-tree-children">
                        {node.children.map((child) => (
                            <FileTreeItem
                                key={child.id}
                                node={child}
                                onFileSelect={onFileSelect}
                                selectedFile={selectedFile}
                                level={level + 1}
                                onProjectPreview={onProjectPreview}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

const FileTree: React.FC<FileTreeProps> = memo(
    ({ nodes, onFileSelect, selectedFile }) => {
        const [previewProject, setPreviewProject] = useState<string | null>(
            null
        );

        const handleProjectPreview = useCallback((projectId: string) => {
            setPreviewProject(projectId);
        }, []);

        const closePreview = useCallback(() => {
            setPreviewProject(null);
        }, []);

        const currentProject = useMemo(
            () =>
                previewProject
                    ? projectsInfo.find((p) => p.id === previewProject)
                    : null,
            [previewProject]
        );

        return (
            <div className="file-tree">
                <div className="file-tree-header">
                    <h3>탐색기</h3>
                </div>
                <div className="file-tree-content">
                    {nodes.map((node) => (
                        <FileTreeItem
                            key={node.id}
                            node={node}
                            onFileSelect={onFileSelect}
                            selectedFile={selectedFile}
                            onProjectPreview={handleProjectPreview}
                        />
                    ))}
                </div>

                {currentProject && (
                    <ProjectPreview
                        project={currentProject}
                        isOpen={!!previewProject}
                        onClose={closePreview}
                    />
                )}
            </div>
        );
    }
);

export default FileTree;

import React, { useState } from 'react';
import type { FileNode } from '../../types/fileSystem';
import ProjectPreview from './ProjectPreview';
import { projectsInfo } from '../../data/fileSystemData';
import './FileTree.scss';

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

const getFileIcon = (extension?: string, type?: string) => {
    if (type === 'folder') return '📁';
    
    switch (extension) {
        case 'html': return '🌐';
        case 'css': return '🎨';
        case 'scss': return '🎨';
        case 'js': return '⚡';
        case 'ts': return '🔷';
        case 'tsx': return '⚛️';
        case 'json': return '📋';
        case 'md': return '📝';
        case 'pdf': return '📄';
        case 'png': 
        case 'jpg': 
        case 'jpeg': 
        case 'gif': 
        case 'svg': return '🖼️';
        default: return '📄';
    }
};

const FileTreeItem: React.FC<FileTreeItemProps> = ({ 
    node, 
    onFileSelect, 
    selectedFile, 
    level = 0,
    onProjectPreview
}) => {
    const [isExpanded, setIsExpanded] = useState(node.isExpanded || false);
    
    const handleToggle = () => {
        if (node.type === 'folder') {
            setIsExpanded(!isExpanded);
        } else {
            onFileSelect(node);
        }
    };
    
    const isSelected = selectedFile === node.path;
    const isProjectFolder = node.path.startsWith('/portfolio/') && 
                           node.type === 'folder' && 
                           level === 1;
    
    const handleProjectPreview = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onProjectPreview) {
            const projectId = node.id.replace('project-', '');
            onProjectPreview(projectId);
        }
    };
    
    return (
        <div className="file-tree-item">
            <div 
                className={`file-tree-node ${isSelected ? 'selected' : ''} ${isProjectFolder ? 'project-folder' : ''}`}
                style={{ paddingLeft: `${level * 20 + 8}px` }}
                onClick={handleToggle}
            >
                <span className="file-icon">
                    {node.type === 'folder' && (
                        <span className={`folder-toggle ${isExpanded ? 'expanded' : ''}`}>
                            ▶
                        </span>
                    )}
                    {getFileIcon(node.extension, node.type)}
                </span>
                <span className="file-name">{node.name}</span>
                
                {isProjectFolder && (
                    <div className="project-actions">
                        <button
                            className="preview-button"
                            onClick={handleProjectPreview}
                            title="프로젝트 미리보기"
                            aria-label={`${node.name} 프로젝트 미리보기`}
                        >
                            👁️
                        </button>
                    </div>
                )}
            </div>
            
            {node.type === 'folder' && isExpanded && node.children && (
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
};

const FileTree: React.FC<FileTreeProps> = ({ nodes, onFileSelect, selectedFile }) => {
    const [previewProject, setPreviewProject] = useState<string | null>(null);
    
    const handleProjectPreview = (projectId: string) => {
        setPreviewProject(projectId);
    };
    
    const closePreview = () => {
        setPreviewProject(null);
    };
    
    const currentProject = previewProject 
        ? projectsInfo.find(p => p.id === previewProject)
        : null;
    
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
};

export default FileTree;
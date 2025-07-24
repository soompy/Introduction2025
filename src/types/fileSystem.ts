// =============================================================================
// FILE SYSTEM TYPES - 웹 퍼블리셔 포트폴리오용
// =============================================================================

export interface FileNode {
    id: string;
    name: string;
    type: 'file' | 'folder';
    extension?: string;
    icon?: string;
    isExpanded?: boolean;
    content?: string;
    children?: FileNode[];
    path: string;
}

export interface ProjectInfo {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    period: string;
    role: string;
    url?: string;
    github?: string;
    image?: string;
    features?: string[];
    challenges?: string[];
    achievements?: string[];
}

export interface TabInfo {
    id: string;
    name: string;
    path: string;
    type: string;
    isActive: boolean;
    isDirty: boolean;
    content: string;
}
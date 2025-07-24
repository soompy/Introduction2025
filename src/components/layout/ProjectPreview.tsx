import React, { useState } from 'react';
import type { ProjectInfo } from '../../types/fileSystem';
import './ProjectPreview.scss';

interface ProjectPreviewProps {
    project: ProjectInfo;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'demo' | 'code'>('overview');
    
    if (!isOpen) return null;
    
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    return (
        <div className="project-preview-overlay" onClick={handleOverlayClick}>
            <div className="project-preview-modal">
                <div className="modal-header">
                    <div className="modal-title">
                        <h2>{project.title}</h2>
                        <span className="project-period">{project.period}</span>
                    </div>
                    <button 
                        className="modal-close"
                        onClick={onClose}
                        aria-label="프로젝트 미리보기 닫기"
                    >
                        ×
                    </button>
                </div>
                
                <div className="modal-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        개요
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'demo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('demo')}
                    >
                        화면보기
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'code' ? 'active' : ''}`}
                        onClick={() => setActiveTab('code')}
                    >
                        소스코드
                    </button>
                </div>
                
                <div className="modal-content">
                    {activeTab === 'overview' && (
                        <div className="overview-content">
                            <div className="project-info">
                                <div className="info-section">
                                    <h3>프로젝트 설명</h3>
                                    <p>{project.description}</p>
                                </div>
                                
                                <div className="info-section">
                                    <h3>담당 역할</h3>
                                    <p>{project.role}</p>
                                </div>
                                
                                <div className="info-section">
                                    <h3>기술 스택</h3>
                                    <div className="tech-stack">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="info-section">
                                    <h3>프로젝트 링크</h3>
                                    <div className="project-links">
                                        {project.url && (
                                            <a 
                                                href={project.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="link-button demo-link"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="link-button github-link"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-preview-image">
                                <div className="preview-placeholder">
                                    <div className="browser-frame">
                                        <div className="browser-header">
                                            <div className="browser-controls">
                                                <span className="control red"></span>
                                                <span className="control yellow"></span>
                                                <span className="control green"></span>
                                            </div>
                                            <div className="browser-url">
                                                {project.url || 'https://example.com'}
                                            </div>
                                        </div>
                                        <div className="browser-content">
                                            <div className="preview-content">
                                                📱 반응형 웹사이트<br/>
                                                🎨 모던 UI/UX<br/>
                                                ⚡ 최적화된 성능<br/>
                                                ♿ 웹 접근성 준수
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'demo' && (
                        <div className="demo-content">
                            {project.url ? (
                                <div className="iframe-container">
                                    <div className="iframe-header">
                                        <span className="iframe-url">{project.url}</span>
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="open-external"
                                        >
                                            🔗 새 창에서 열기
                                        </a>
                                    </div>
                                    <iframe 
                                        src={project.url}
                                        title={`${project.title} Live Demo`}
                                        className="demo-iframe"
                                        sandbox="allow-scripts allow-same-origin"
                                    />
                                </div>
                            ) : (
                                <div className="demo-placeholder">
                                    <div className="placeholder-content">
                                        <h3>🚧 Live Demo 준비 중</h3>
                                        <p>현재 이 프로젝트의 라이브 데모는 준비 중입니다.</p>
                                        <p>GitHub 저장소에서 소스 코드를 확인하실 수 있습니다.</p>
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="link-button github-link"
                                            >
                                                🐙 GitHub에서 보기
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    {activeTab === 'code' && (
                        <div className="code-content">
                            <div className="code-info">
                                <h3>📂 Repository Information</h3>
                                
                                <div className="repo-details">
                                    <div className="repo-item">
                                        <strong>Repository:</strong>
                                        {project.github ? (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="repo-link"
                                            >
                                                {project.github.replace('https://github.com/', '')}
                                            </a>
                                        ) : (
                                            <span>Private Repository</span>
                                        )}
                                    </div>
                                    
                                    <div className="repo-item">
                                        <strong>Technologies:</strong>
                                        <div className="tech-list">
                                            {project.techStack.map((tech, index) => (
                                                <span key={index} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="repo-item">
                                        <strong>Development Period:</strong>
                                        <span>{project.period}</span>
                                    </div>
                                </div>
                                
                                <div className="code-features">
                                    <h4>🔧 주요 구현 사항</h4>
                                    <ul className="feature-list">
                                        <li>📱 반응형 웹 디자인 구현</li>
                                        <li>♿ 웹 접근성 가이드라인 준수</li>
                                        <li>⚡ 성능 최적화 및 번들 사이즈 최소화</li>
                                        <li>🌐 크로스 브라우저 호환성</li>
                                        <li>🎨 컴포넌트 기반 아키텍처</li>
                                        <li>📊 SEO 최적화</li>
                                    </ul>
                                </div>
                                
                                {project.github && (
                                    <div className="repo-actions">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-button primary"
                                        >
                                            GitHub에서 코드 보기
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
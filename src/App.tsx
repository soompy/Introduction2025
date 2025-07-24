import React, { useState } from 'react';
import './styles/pages/index.scss';

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="portfolio-container">
            <div
                className="portfolio-app"
                role="application"
                aria-label="2025 이수민 포트폴리오 인터페이스"
            >
                <header className="portfolio-header" role="banner">
                    <h1 className="portfolio-title">2025 이수민 포트폴리오</h1>
                </header>

                <div className="portfolio-layout">
                    <nav className="file-explorer" aria-label="파일 탐색">
                        <h2 className="visually-hidden">탐색기</h2>
                        <ul className="file-tree">
                            <li className="file-item">
                                <button className="file-button" type="button">
                                    index.html
                                </button>
                            </li>
                            <li className="file-item">
                                <button className="file-button" type="button">
                                    about-me.md
                                </button>
                            </li>
                            <li className="file-item">
                                <button className="file-button" type="button">
                                    skills.tsx
                                </button>
                            </li>
                            <li className="file-item">
                                <button
                                    className="file-button folder-button"
                                    type="button"
                                    aria-expanded="true"
                                    aria-controls="project-files"
                                >
                                    projects/
                                </button>
                                <ul id="project-files" className="file-tree file-tree--nested">
                                    <li className="file-item">
                                        <button className="file-button" type="button">
                                            project-a.html
                                        </button>
                                    </li>
                                    <li className="file-item">
                                        <button className="file-button" type="button">
                                            project-b.html
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <li className="file-item">
                                <button className="file-button" type="button">
                                    API-Goal.md
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <main
                        className="code-editor"
                        role="main"
                        aria-labelledby="active-tab"
                    >
                        <div className="editor-tabs">
                            <button 
                                id="active-tab" 
                                className="editor-tab editor-tab--active"
                                type="button"
                                aria-selected="true"
                            >
                                index.html
                            </button>
                        </div>
                        
                        <section className="editor-content" aria-label="index.html 내용">
                            <div className="content-wrapper">
                                <h2 className="greeting">안녕하세요.</h2>
                                <p className="intro-text">
                                    프론트엔드 개발자로의 성장을 위해 열정을 가지고
                                    배우고 있습니다.
                                </p>

                                <section className="skills-section" aria-labelledby="skills-heading">
                                    <h3 id="skills-heading" className="section-title">Skills</h3>
                                    <ul className="skills-list">
                                        <li className="skill-item" aria-label="HTML">HTML</li>
                                        <li className="skill-item" aria-label="CSS">CSS</li>
                                        <li className="skill-item" aria-label="JavaScript">JS</li>
                                        <li className="skill-item" aria-label="React">React</li>
                                        <li className="skill-item" aria-label="SCSS">SCSS</li>
                                        <li className="skill-item" aria-label="Next.js">Next.js</li>
                                    </ul>
                                </section>

                                <section className="projects-section" aria-labelledby="projects-heading">
                                    <h3 id="projects-heading" className="section-title">Projects</h3>
                                    
                                    <article className="project-card">
                                        <h4 className="project-title">
                                            SafePay – 사용자 인증 기반 가상 결제 서비스
                                        </h4>
                                        <ul className="project-features">
                                            <li className="project-feature">
                                                사용자 안정성을 강화하는 인증 기능과
                                                프론트엔드 결제 애플리케이션 개발
                                            </li>
                                        </ul>
                                    </article>
                                    
                                    <article className="project-card">
                                        <h4 className="project-title">RESTful API 학습</h4>
                                        <p className="project-description">
                                            RESTful API 설계 및 데이터 통신을
                                            학습하고자 합니다.
                                        </p>
                                    </article>
                                </section>
                            </div>
                        </section>
                    </main>
                </div>

                <footer className="portfolio-terminal" role="contentinfo">
                    <div className="terminal-header">
                        <label htmlFor="terminal-input" className="terminal-label">
                            Terminal
                        </label>
                    </div>
                    <div className="terminal-body">
                        <input
                            type="text"
                            id="terminal-input"
                            className="terminal-input"
                            placeholder="> 명령어를 입력하세요..."
                            aria-label="터미널 입력창"
                        />
                    </div>
                </footer>
            </div>
        </div>
        </div>
    );
}

export default App;
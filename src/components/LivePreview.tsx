import React, { useMemo } from "react";
import type { TabInfo } from "../types/fileSystem";

interface LivePreviewProps {
    currentTab: TabInfo | undefined;
}

const LivePreview: React.FC<LivePreviewProps> = ({ currentTab }) => {
    const renderHTMLPreview = (content: string) => {
        const htmlWithStyles = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .profile {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            margin: 1rem 0;
          }
          .profile-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #e9ecef;
          }
          .name {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
          }
          .title {
            color: #3498db;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
          .experience {
            color: #7f8c8d;
            font-size: 1.1rem;
          }
          .intro-section, .core-competencies, .work-philosophy {
            margin: 2rem 0;
          }
          .intro-section h3, .core-competencies h3, .work-philosophy h3 {
            color: #2c3e50;
            font-size: 1.4rem;
            margin-bottom: 1rem;
            border-left: 4px solid #3498db;
            padding-left: 1rem;
          }
          .slogan {
            font-size: 1.2rem;
            font-weight: 600;
            color: #e74c3c;
            margin: 1rem 0;
            padding: 1rem;
            background: #fff5f5;
            border-left: 4px solid #e74c3c;
            border-radius: 4px;
          }
          .competency-list {
            list-style: none;
            padding: 0;
          }
          .competency-list li {
            margin: 1rem 0;
            padding: 1rem;
            background: white;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .competency-list strong {
            color: #2c3e50;
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.5rem;
          }
          .competency-list span {
            color: #666;
          }
          blockquote {
            background: #f8f9fa;
            border-left: 4px solid #17a2b8;
            margin: 1rem 0;
            padding: 1rem 2rem;
            font-style: italic;
          }
          blockquote p {
            margin: 0.5rem 0;
            font-size: 1.05rem;
            line-height: 1.7;
          }
          
          /* Career Page Styles - Modern Design */
          .career {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 0;
            margin: 0;
          }
          .career-header {
            text-align: center;
            padding: 4rem 2rem 3rem;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            margin-bottom: 0;
            border-bottom: none;
          }
          .career-header h1 {
            color: var(--primary-500);
            font-size: 2.6rem;
            font-weight: 800;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .total-experience {
            font-size: 1.3rem;
            color: #64748b;
            font-weight: 500;
          }
          .total-experience strong {
            background: linear-gradient(135deg, #f093fb, #f5576c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            font-size: 1.5rem;
            font-weight: 700;
          }
          
          /* Timeline Styles - Modern */
          .timeline-section {
            background: rgba(255, 255, 255, 0.98);
            margin: 0;
            padding: 1rem 2rem;
            backdrop-filter: blur(20px);
          }
          .timeline-section h2 {
            text-align: center;
            font-size: 2rem;
            font-weight: 700;      
            margin-bottom: 2rem;
            position: relative;
          }
          .timeline-container {
            position: relative;
            max-width: 1100px;
            margin: 0 auto;
          }
          .timeline-item {
            display: flex;
            margin-bottom: 4rem;
            position: relative;
            opacity: 0;
            animation: slideInUp 0.8s ease forwards;
          }
          .timeline-item:nth-child(1) { animation-delay: 0.1s; }
          .timeline-item:nth-child(2) { animation-delay: 0.2s; }
          .timeline-item:nth-child(3) { animation-delay: 0.3s; }
          .timeline-item:nth-child(4) { animation-delay: 0.4s; }
          
          @keyframes slideInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
            from {
              opacity: 0;
              transform: translateY(30px);
            }
          }
          
          .timeline-marker {
            position: relative;
            margin-right: 3rem;
            flex-shrink: 0;
            margin-top: 1rem;
          }
          .timeline-dot {
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2), 0 8px 24px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
          }
          .timeline-dot:hover {
            transform: scale(1.2);
            box-shadow: 0 0 0 6px rgba(102, 126, 234, 0.3), 0 12px 32px rgba(102, 126, 234, 0.4);
          }
          .timeline-line {
            position: absolute;
            left: 50%;
            top: 20px;
            bottom: -4rem;
            width: 3px;
            background: linear-gradient(180deg, rgba(102, 126, 234, 0.3), rgba(102, 126, 234, 0.1));
            transform: translateX(-50%);
            border-radius: 2px;
          }
          .timeline-item:last-child .timeline-line {
            display: none;
          }
          .timeline-content {
            flex: 1;
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.8);
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12), 0 12px 24px rgba(0, 0, 0, 0.08);
          }
          
          .job-period-badge {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #f093fb, #f5576c);
            color: #fff;
            padding: 0.6rem 1.2rem;
            border-radius: 18px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
          .job-period-badge::before {
            margin-right: 0.5rem;
          }
          
          .company-name {
            font-size: 1.8rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 0.5rem;
            letter-spacing: -0.01em;
          }
          .job-title {
            font-size: 1.2rem;
            color: #64748b;
            margin-bottom: 2rem;
            font-weight: 500;
          }
          
          .work-details {
            margin: 2rem 0;
          }
          .work-details h4 {
            color: #1e293b;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 2rem;
            padding-bottom: 0.8rem;
            border-bottom: 2px solid #f1f5f9;
            position: relative;
          }
          .work-details h4::before {
            margin-right: 0.8rem;
          }
          
          .work-item {
            margin: 2rem 0;
            padding: 1.8rem;
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            border-radius: 16px;
            border-left: 4px solid transparent;
            background-clip: padding-box;
            position: relative;
            transition: all 0.3s ease;
          }
          .work-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(135deg, #10b981, #059669);
            border-radius: 2px;
          }
          .work-item:hover {
            transform: translateX(8px);
            background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          }
          
          .work-item h5 {
            color: #1e293b;
            font-size: 1.2rem;
            margin-bottom: 0.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
          }
          .work-item h5::before {
            margin-right: 0.6rem;
          }
          .work-item p {
            color: #475569;
            margin-bottom: 1.2rem;
            line-height: 1.7;
            font-size: 1rem;
          }
          
          .task-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
          }
          .task-list li {
            padding: 0.6rem 0;
            padding-left: 2rem;
            position: relative;
            color: #475569;
            font-size: 0.95rem;
            line-height: 1.6;
            transition: color 0.2s ease;
          }
          .task-list li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0.6rem;
          }
          .task-list li:hover {
            color: #1e293b;
          }
          
          .achievements {
            list-style: none;
            padding: 0;
          }
          .achievements li {
            padding: 0.7rem 0;
            padding-left: 2.2rem;
            position: relative;
            color: #92400e;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.2s ease;
          }
          .achievements li::before {
            position: absolute;
            left: 0;
            top: 0.7rem;
          }
          .achievements li:hover {
            transform: translateX(4px);
            color: #78350f;
          }
          
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #e2e8f0;
          }
          .tech-tag {
            background: #61dafb;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
          }
          .tech-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
          }
          
          /* Education Section - Clean Design */
          .education-section {
            background: #f8fafc;
            padding: 4rem 2rem;
          }
          .education-section h2 {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 3rem;
            position: relative;
          }
          .education-list {
            max-width: 800px;
            margin: 0 auto;
          }
          .education-item {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            border-left: 4px solid #10b981;
            transition: all 0.3s ease;
            margin: 1rem 0;
          }
          .education-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }
          .education-item h3 {
            color: #1e293b;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
          }
          .education-item h3::before {
            content: '🎓';
            margin-right: 0.8rem;
            font-size: 1.8rem;
          }
          .education-item .institution {
            color: #10b981;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .education-item .period {
            color: #64748b;
            font-size: 1rem;
            margin-bottom: 1rem;
            background: #f1f5f9;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            display: inline-block;
          }
          .education-item .description {
            color: #475569;
            line-height: 1.7;
            font-size: 1rem;
          }

          /* Skills Page Styles - Clean Design */
          .skills {
            background: #f8fafc;
            min-height: 100vh;
            padding: 4rem 2rem;
          }
          .skills h1 {
            text-align: center;
            font-size: 3rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .skills-intro {
            text-align: center;
            font-size: 1.3rem;
            color: #64748b;
            margin-bottom: 4rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .skill-category {
            background: white;
            margin: 3rem 0;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            border-left: 5px solid #2563eb;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
          }
          .skill-category h2 {
            color: #1e293b;
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            position: relative;
          }
          .skill-category h2::before {
            content: '🚀';
            margin-right: 1rem;
            font-size: 2.5rem;
          }
          .skill-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2.5rem;
          }
          .skill-item {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
            position: relative;
          }
          .skill-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(37, 99, 235, 0.1);
            border-color: #2563eb;
          }
          .skill-item h3 {
            color: #1e293b;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .skill-level {
            background: #e2e8f0;
            height: 8px;
            border-radius: 4px;
            margin: 1rem 0;
            position: relative;
            overflow: hidden;
          }
          .skill-bar {
            height: 100%;
            background: linear-gradient(90deg, #2563eb, #3b82f6);
            border-radius: 4px;
            transition: width 2s ease-in-out;
            position: relative;
          }
          .skill-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 2s infinite;
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .skill-item[data-level="100"] .skill-bar { width: 100%; }
          .skill-item[data-level="90"] .skill-bar { width: 90%; }
          .skill-item[data-level="80"] .skill-bar { width: 80%; }
          .skill-item[data-level="70"] .skill-bar { width: 70%; }
          .skill-item[data-level="60"] .skill-bar { width: 60%; }
          
          .proficiency {
            color: #2563eb;
            font-size: 0.9rem;
            font-weight: 700;
            background: #eff6ff;
            padding: 0.2rem 0.6rem;
            border-radius: 12px;
            margin-left: 0.5rem;
          }
          
          .skill-item p {
            color: #475569;
            line-height: 1.6;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }
          .skill-item .experience {
            color: #2563eb;
            font-size: 0.9rem;
            font-weight: 600;
            background: #eff6ff;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            display: inline-block;
          }

          /* Contact Page Styles - Clean Design */
          .contact {
            background: #f8fafc;
            min-height: 100vh;
            padding: 4rem 2rem;
          }
          .contact h1 {
            text-align: center;
            font-size: 3rem;
            font-weight: 800;
            color: #1e293b;
            margin-bottom: 4rem;
            letter-spacing: -0.02em;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }
          .contact-item {
            background: white;
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            border-top: 4px solid #2563eb;
            transition: all 0.3s ease;
          }
          .contact-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 32px rgba(37, 99, 235, 0.15);
          }
          .contact-item:nth-child(2) {
            border-top-color: #10b981;
          }
          .contact-item:nth-child(2):hover {
            box-shadow: 0 12px 32px rgba(16, 185, 129, 0.15);
          }
          .contact-item:nth-child(3) {
            border-top-color: #7c3aed;
          }
          .contact-item:nth-child(3):hover {
            box-shadow: 0 12px 32px rgba(124, 58, 237, 0.15);
          }
          .contact-item:nth-child(4) {
            border-top-color: #f59e0b;
          }
          .contact-item:nth-child(4):hover {
            box-shadow: 0 12px 32px rgba(245, 158, 11, 0.15);
          }
          .contact-item h3 {
            color: #1e293b;
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          .contact-item a {
            background: #2563eb;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
          }
          .contact-item:nth-child(2) a {
            background: #10b981;
          }
          .contact-item:nth-child(3) a {
            background: #7c3aed;
          }
          .contact-item:nth-child(4) a {
            background: #f59e0b;
          }
          .contact-item a:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `;

        return (
            <iframe
                srcDoc={htmlWithStyles}
                className="preview-iframe"
                title="HTML Preview"
                sandbox="allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-scripts"
            />
        );
    };

    const renderCSSPreview = (content: string) => {
        return (
            <div className="css-preview">
                <div className="preview-header">
                    <h3>CSS 스타일 미리보기</h3>
                </div>
                <div className="css-demo">
                    <div
                        className="demo-box"
                        style={{ fontSize: "14px", fontFamily: "monospace" }}
                    >
                        <div
                            style={{
                                padding: "20px",
                                background: "#f8f9fa",
                                borderRadius: "8px",
                            }}
                        >
                            <h4
                                style={{
                                    color: "#2c3e50",
                                    marginBottom: "16px",
                                }}
                            >
                                CSS 규칙들:
                            </h4>
                            {content
                                .split("}")
                                .slice(0, 5)
                                .map((rule, index) => {
                                    const cleanRule = rule.trim();
                                    if (cleanRule) {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    marginBottom: "12px",
                                                    padding: "8px",
                                                    background: "white",
                                                    borderRadius: "4px",
                                                    borderLeft:
                                                        "3px solid #3498db",
                                                }}
                                            >
                                                <code>{cleanRule + "}"}</code>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderDefaultPreview = (tab: TabInfo) => {
        return (
            <div className="default-preview">
                <div className="preview-header">
                    <h3>📄 {tab.name}</h3>
                    <p>파일 내용 미리보기</p>
                </div>
                <div className="file-stats">
                    <div className="stat">
                        <span className="stat-label">파일 크기:</span>
                        <span className="stat-value">
                            {tab.content.length} 문자
                        </span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">줄 수:</span>
                        <span className="stat-value">
                            {tab.content.split("\n").length} 줄
                        </span>
                    </div>
                    <div className="stat">
                        <span className="stat-label">확장자:</span>
                        <span className="stat-value">
                            {tab.path.split(".").pop()}
                        </span>
                    </div>
                </div>
                <div className="content-preview">
                    <h4>내용 요약:</h4>
                    <p>{tab.content.substring(0, 200)}...</p>
                </div>
            </div>
        );
    };

    const previewContent = useMemo(() => {
        if (!currentTab) return null;

        const extension = currentTab.path.split(".").pop();

        switch (extension) {
            case "html":
                return renderHTMLPreview(currentTab.content);
            case "css":
            case "scss":
                return renderCSSPreview(currentTab.content);
            default:
                return renderDefaultPreview(currentTab);
        }
    }, [currentTab]);

    if (!currentTab) {
        return (
            <div className="preview-empty">
                <div className="empty-content">
                    <h3>🎯 라이브 미리보기</h3>
                    <p>파일을 선택하면 실시간 미리보기가 표시됩니다</p>
                    <div className="supported-formats">
                        <h4>지원 형식:</h4>
                        <ul>
                            <li>🌐 HTML - 실시간 웹페이지</li>
                            <li>🎨 CSS - 스타일 미리보기</li>
                            <li>📄 기타 - 파일 정보</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="live-preview">
            <div className="preview-header">
                <div className="preview-title">
                    <span className="preview-icon">🔴</span>
                    <span>라이브 미리보기</span>
                </div>
                <div className="preview-file">{currentTab.name}</div>
            </div>
            <div className="preview-content">{previewContent}</div>
        </div>
    );
};

export default LivePreview;

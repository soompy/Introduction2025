// =============================================================================
// 웹 퍼블리셔 포트폴리오 파일 시스템 데이터
// =============================================================================

import type { FileNode, ProjectInfo } from '../types/fileSystem';

export const fileSystemData: FileNode = {
    id: 'root',
    name: 'portfolio-workspace',
    type: 'folder',
    isExpanded: true,
    path: '/',
    children: [
        {
            id: 'about',
            name: 'about',
            type: 'folder',
            isExpanded: false,
            path: '/about',
            children: [
                {
                    id: 'profile-html',
                    name: 'profile.html',
                    type: 'file',
                    extension: 'html',
                    path: '/about/profile.html',
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이수민 - 웹 퍼블리셔 & 프론트엔드 개발자</title>
    <link rel="stylesheet" href="./styles/profile.css">
</head>
<body>
    <section class="profile">
        <div class="profile-header">
            <h1 class="name">이수민</h1>
            <h2 class="title">웹 퍼블리셔 & 프론트엔드 개발자</h2>
            <p class="experience">총 5년 7개월 실무 경험</p>
        </div>
        
        <div class="profile-content">
            <div class="intro-section">
                <h3>소개</h3>
                <p class="slogan">
                    "다양한 프로젝트 경험과 기술 역량으로 짜임새 있는 UI개발자가 되겠습니다."
                </p>
                <p class="description">
                    사용자 경험을 최우선으로 생각하며, 시맨틱하고 유지보수 편리한 마크업을 작성합니다.
                    인터랙티브한 웹 효과 구현과 컴포넌트 기반 UI 개발에 전문성을 가지고 있습니다.
                </p>
            </div>
            
            <div class="core-competencies">
                <h3>핵심 역량</h3>
                <ul class="competency-list">
                    <li>
                        <strong>시맨틱 마크업</strong>
                        <span>웹 표준과 접근성을 고려한 구조적 HTML 작성</span>
                    </li>
                    <li>
                        <strong>인터랙티브 웹 구현</strong>
                        <span>사용자 경험을 향상시키는 동적 효과 개발</span>
                    </li>
                    <li>
                        <strong>컴포넌트 기반 개발</strong>
                        <span>재사용 가능하고 확장성 있는 UI 컴포넌트 설계</span>
                    </li>
                    <li>
                        <strong>반응형 웹 제작</strong>
                        <span>다양한 디바이스에 최적화된 사용자 인터페이스</span>
                    </li>
                    <li>
                        <strong>크로스 브라우저 호환성</strong>
                        <span>모든 주요 브라우저에서 일관된 사용자 경험 제공</span>
                    </li>
                </ul>
            </div>
            
            <div class="work-philosophy">
                <h3>업무 철학</h3>
                <blockquote>
                    <p>
                        단순히 보기 좋은 웹페이지가 아닌, 사용자가 직관적으로 이해하고 
                        편리하게 사용할 수 있는 인터페이스를 만들고 싶습니다.
                    </p>
                    <p>
                        끊임없는 학습과 새로운 기술 도전을 통해 더 나은 개발자로 성장하고 있습니다.
                    </p>
                </blockquote>
            </div>
        </div>
    </section>
</body>
</html>`
                },
                {
                    id: 'career-html',
                    name: 'career.html',
                    type: 'file',
                    extension: 'html',
                    path: '/about/career.html',
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이수민 - 경력사항</title>
    <link rel="stylesheet" href="./styles/career.css">
</head>
<body>
    <section class="career">
        <header class="career-header">
            <h1>경력사항</h1>
            <p class="total-experience">총 실무 경험: <strong>5년 7개월</strong></p>
        </header>
        
        <div class="career-content">
            <div class="experience-section">
                <h2>주요 경력</h2>
                
                <div class="job-list">
                    <article class="job-item">
                        <div class="job-header">
                            <h3 class="company-name">빗썸</h3>
                            <span class="job-period">2023.01 - 2024.01 (1년)</span>
                        </div>
                        <p class="job-title">웹 퍼블리셔 / 프론트엔드 개발자</p>
                        <ul class="job-responsibilities">
                            <li>암호화폐 거래소 웹사이트 퍼블리싱</li>
                            <li>React 기반 컴포넌트 개발 및 유지보수</li>
                            <li>반응형 웹 구현 및 크로스 브라우저 최적화</li>
                            <li>웹 접근성 준수 및 성능 최적화</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Next.js</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">SCSS</span>
                        </div>
                    </article>
                    
                    <article class="job-item">
                        <div class="job-header">
                            <h3 class="company-name">이투스에듀</h3>
                            <span class="job-period">2022.03 - 2022.12 (10개월)</span>
                        </div>
                        <p class="job-title">웹 퍼블리셔</p>
                        <ul class="job-responsibilities">
                            <li>교육 플랫폼 웹사이트 퍼블리싱</li>
                            <li>모바일 앱 웹뷰 인터페이스 개발</li>
                            <li>Vue.js 기반 컴포넌트 제작</li>
                            <li>Figma 디자인 시안 기반 픽셀 퍼펙트 구현</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Nuxt.js</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">JavaScript</span>
                        </div>
                    </article>
                    
                    <article class="job-item">
                        <div class="job-header">
                            <h3 class="company-name">카카오VX</h3>
                            <span class="job-period">2021.01 - 2022.02 (1년 2개월)</span>
                        </div>
                        <p class="job-title">웹 퍼블리셔</p>
                        <ul class="job-responsibilities">
                            <li>카카오 계열 서비스 웹 인터페이스 구현</li>
                            <li>인터랙티브 웹 효과 및 애니메이션 개발</li>
                            <li>다양한 해상도 대응 반응형 웹 제작</li>
                            <li>웹 표준 및 시맨틱 마크업 적용</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">jQuery</span>
                        </div>
                    </article>
                    
                    <article class="job-item">
                        <div class="job-header">
                            <h3 class="company-name">스마트스코어</h3>
                            <span class="job-period">2019.06 - 2020.12 (1년 7개월)</span>
                        </div>
                        <p class="job-title">웹퍼블리셔 / UI 개발자</p>
                        <ul class="job-responsibilities">
                            <li>스포츠 데이터 플랫폼 웹사이트 퍼블리싱</li>
                            <li>데이터 시각화 인터페이스 구현</li>
                            <li>관리자 시스템 웹 인터페이스 개발</li>
                            <li>Git을 활용한 협업 및 버전 관리</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Bootstrap</span>
                        </div>
                    </article>
                </div>
            </div>
            
            <div class="education-section">
                <h2>교육 이력</h2>
                <div class="education-list">
                    <div class="education-item">
                        <h3>프론트엔드 개발 부트캠프</h3>
                        <p class="institution">코드캠프</p>
                        <p class="period">2018.09 - 2019.03 (6개월)</p>
                        <p class="description">
                            React, Vue.js 등 모던 프론트엔드 프레임워크 학습<br>
                            팀 프로젝트를 통한 실무 경험 습득
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="achievements-section">
                <h2>주요 성과</h2>
                <ul class="achievement-list">
                    <li>
                        <strong>웹 접근성 개선</strong>
                        <span>KWCAG 2.1 기준 준수로 사용자 경험 향상 달성</span>
                    </li>
                    <li>
                        <strong>성능 최적화</strong>
                        <span>페이지 로딩 속도 30% 개선 및 Core Web Vitals 점수 향상</span>
                    </li>
                    <li>
                        <strong>컴포넌트 라이브러리 구축</strong>
                        <span>재사용 가능한 UI 컴포넌트 50+ 개 개발로 개발 효율성 증대</span>
                    </li>
                    <li>
                        <strong>크로스 브라우저 호환성</strong>
                        <span>IE11 포함 모든 주요 브라우저 지원으로 사용자 접근성 확대</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</body>
</html>`
                }
            ]
        },
        {
            id: 'portfolio',
            name: 'portfolio',
            type: 'folder',
            isExpanded: true,
            path: '/portfolio',
            children: [
                {
                    id: 'project-corporate',
                    name: 'safepay-project',
                    type: 'folder',
                    isExpanded: false,
                    path: '/portfolio/safepay-project',
                    children: [
                        {
                            id: 'corporate-index',
                            name: 'index.html',
                            type: 'file',
                            extension: 'html',
                            path: '/portfolio/corporate-site/index.html',
                            content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>기업 사이트 - 메인</title>
    <link rel="stylesheet" href="./styles/main.css">
    <link rel="stylesheet" href="./styles/responsive.css">
</head>
<body>
    <header class="header">
        <div class="container">
            <h1 class="logo">
                <a href="#home">Company Logo</a>
            </h1>
            <nav class="gnb">
                <ul>
                    <li><a href="#about">회사소개</a></li>
                    <li><a href="#services">서비스</a></li>
                    <li><a href="#portfolio">포트폴리오</a></li>
                    <li><a href="#contact">연락처</a></li>
                </ul>
            </nav>
            <button class="mobile-menu-btn" aria-label="모바일 메뉴 열기">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>
    
    <main>
        <section class="hero">
            <div class="container">
                <h2 class="hero-title">혁신적인 솔루션으로<br>비즈니스의 미래를 만듭니다</h2>
                <p class="hero-desc">고객의 성공이 우리의 성공입니다</p>
                <a href="#contact" class="btn-primary">상담 문의</a>
            </div>
        </section>
        
        <section class="services" id="services">
            <div class="container">
                <h2 class="section-title">주요 서비스</h2>
                <div class="service-grid">
                    <div class="service-item">
                        <div class="service-icon">🚀</div>
                        <h3>디지털 전환</h3>
                        <p>기업의 디지털 혁신을 위한 컨설팅 서비스</p>
                    </div>
                    <div class="service-item">
                        <div class="service-icon">💡</div>
                        <h3>솔루션 개발</h3>
                        <p>맞춤형 소프트웨어 솔루션 개발</p>
                    </div>
                    <div class="service-item">
                        <div class="service-icon">📊</div>
                        <h3>데이터 분석</h3>
                        <p>빅데이터 분석 및 인사이트 제공</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
    </footer>
    
    <script src="./scripts/main.js"></script>
</body>
</html>`
                        },
                        {
                            id: 'corporate-css',
                            name: 'main.css',
                            type: 'file',
                            extension: 'css',
                            path: '/portfolio/corporate-site/styles/main.css',
                            content: `/* =================================
   기업 사이트 메인 스타일시트
   ================================= */

/* Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eee;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo a {
    font-size: 24px;
    font-weight: 700;
    color: #2563eb;
    text-decoration: none;
}

.gnb ul {
    display: flex;
    list-style: none;
    gap: 40px;
}

.gnb a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.gnb a:hover {
    color: #2563eb;
}

.mobile-menu-btn {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    gap: 4px;
}

.mobile-menu-btn span {
    width: 24px;
    height: 2px;
    background: #333;
    transition: all 0.3s ease;
}

/* Hero Section */
.hero {
    padding: 140px 0 80px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-desc {
    font-size: 20px;
    margin-bottom: 40px;
    opacity: 0.9;
}

.btn-primary {
    display: inline-block;
    padding: 16px 32px;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
}

/* Services Section */
.services {
    padding: 80px 0;
    background: #f8fafc;
}

.section-title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 60px;
    color: #1e293b;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.service-item {
    background: white;
    padding: 40px 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.service-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.service-item h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #1e293b;
}

.service-item p {
    color: #64748b;
    line-height: 1.6;
}

/* Footer */
.footer {
    background: #1e293b;
    color: white;
    text-align: center;
    padding: 40px 0;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.service-item {
    animation: fadeInUp 0.6s ease forwards;
}`
                        },
                        {
                            id: 'corporate-responsive',
                            name: 'responsive.css',
                            type: 'file',
                            extension: 'css',
                            path: '/portfolio/corporate-site/styles/responsive.css',
                            content: `/* =================================
   반응형 웹 스타일시트
   ================================= */

/* Tablet (768px ~ 1023px) */
@media screen and (max-width: 1023px) {
    .container {
        padding: 0 16px;
    }
    
    .hero-title {
        font-size: 40px;
    }
    
    .hero-desc {
        font-size: 18px;
    }
    
    .service-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}

/* Mobile (320px ~ 767px) */
@media screen and (max-width: 767px) {
    /* Header Mobile */
    .gnb {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid #eee;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        opacity: 0;
        visibility: hidden;
    }
    
    .gnb.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .gnb ul {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
    
    /* Hero Mobile */
    .hero {
        padding: 120px 0 60px;
    }
    
    .hero-title {
        font-size: 32px;
        line-height: 1.3;
    }
    
    .hero-desc {
        font-size: 16px;
    }
    
    .btn-primary {
        padding: 14px 24px;
        font-size: 16px;
    }
    
    /* Services Mobile */
    .services {
        padding: 60px 0;
    }
    
    .section-title {
        font-size: 28px;
        margin-bottom: 40px;
    }
    
    .service-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .service-item {
        padding: 30px 20px;
    }
    
    .service-item h3 {
        font-size: 20px;
    }
}

/* Small Mobile (320px ~ 479px) */
@media screen and (max-width: 479px) {
    .container {
        padding: 0 12px;
    }
    
    .hero-title {
        font-size: 28px;
    }
    
    .section-title {
        font-size: 24px;
    }
    
    .service-item {
        padding: 24px 16px;
    }
}

/* High DPI Displays */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    /* 고해상도 디스플레이용 스타일 */
    .logo a {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
}

/* Print Styles */
@media print {
    .header,
    .mobile-menu-btn,
    .btn-primary {
        display: none;
    }
    
    .hero {
        background: none;
        color: #333;
    }
    
    * {
        box-shadow: none !important;
    }
}`
                        },
                        {
                            id: 'corporate-js',
                            name: 'main.js',
                            type: 'file',
                            extension: 'js',
                            path: '/portfolio/corporate-site/scripts/main.js',
                            content: `/**
 * 기업 사이트 메인 스크립트
 * 모바일 메뉴, 스크롤 효과, 성능 최적화 포함
 */

class CorporateSite {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupIntersectionObserver();
        this.setupPerformanceOptimization();
    }
    
    // 모바일 메뉴 토글
    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const gnb = document.querySelector('.gnb');
        
        if (!mobileMenuBtn || !gnb) return;
        
        mobileMenuBtn.addEventListener('click', () => {
            gnb.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // 메뉴 열림/닫힘 애니메이션
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileMenuBtn.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
        
        // 메뉴 링크 클릭 시 메뉴 닫기
        const menuLinks = gnb.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                gnb.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
    
    // 부드러운 스크롤
    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // 스크롤 효과 (헤더 배경 변화)
    setupScrollEffects() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // 헤더 배경 투명도 조절
            if (currentScrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }
    
    // Intersection Observer를 활용한 애니메이션
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // 서비스 아이템 순차 애니메이션
                    if (entry.target.classList.contains('service-item')) {
                        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                        entry.target.style.animationDelay = \`\${index * 0.1}s\`;
                    }
                }
            });
        }, observerOptions);
        
        // 애니메이션 대상 요소들
        const animationTargets = document.querySelectorAll('.service-item, .section-title');
        animationTargets.forEach(target => {
            target.style.opacity = '0';
            target.style.transform = 'translateY(30px)';
            target.style.transition = 'all 0.6s ease';
            observer.observe(target);
        });
    }
    
    // 성능 최적화
    setupPerformanceOptimization() {
        // 이미지 Lazy Loading
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        }
        
        // 디바운스된 리사이즈 핸들러
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        }, { passive: true });
    }
    
    handleResize() {
        // 리사이즈 시 필요한 작업들
        const gnb = document.querySelector('.gnb');
        if (window.innerWidth > 767 && gnb.classList.contains('active')) {
            gnb.classList.remove('active');
        }
    }
}

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
    new CorporateSite();
});

// 성능 모니터링
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('페이지 로드 시간:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}`
                        }
                    ]
                },
                {
                    id: 'project-ecommerce',
                    name: 'travel-together',
                    type: 'folder',
                    isExpanded: false,
                    path: '/portfolio/travel-together',
                    children: [
                        {
                            id: 'ecommerce-index',
                            name: 'index.html',
                            type: 'file',
                            extension: 'html',
                            path: '/portfolio/e-commerce/index.html',
                            content: '// E-commerce 사이트 HTML...'
                        },
                        {
                            id: 'ecommerce-css',
                            name: 'styles.css',
                            type: 'file',
                            extension: 'css',
                            path: '/portfolio/e-commerce/styles.css',
                            content: '/* E-commerce 사이트 CSS... */'
                        }
                    ]
                },
                {
                    id: 'project-hanmi',
                    name: '한미약품 리뉴얼',
                    type: 'folder',
                    isExpanded: false,
                    path: '/portfolio/character-branding',
                    children: [
                        {
                            id: 'landing-index',
                            name: 'index.html',
                            type: 'file',
                            extension: 'html',
                            path: '/portfolio/landing-page/index.html',
                            content: '// 랜딩페이지 HTML...'
                        }
                    ]
                }
            ]
        },
        {
            id: 'skills',
            name: 'skills',
            type: 'folder',
            isExpanded: false,
            path: '/skills',
            children: [
                {
                    id: 'frontend-html',
                    name: 'frontend.html',
                    type: 'file',
                    extension: 'html',
                    path: '/skills/frontend.html',
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>프론트엔드 기술 스택</title>
</head>
<body>
    <section class="skills">
        <h1>Frontend Skills</h1>
        <p class="skills-intro">5년 7개월의 실무 경험을 바탕으로 한 전문 기술 스택</p>
        
        <div class="skill-category">
            <h2>Core Technologies</h2>
            <div class="skill-items">
                <div class="skill-item">
                    <h3>HTML5</h3>
                    <div class="skill-level" data-level="95">
                        <div class="skill-bar"></div>
                    </div>
                    <p>시맨틱 마크업, 웹 접근성, SEO 최적화, 웹 표준 준수</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
                
                <div class="skill-item">
                    <h3>CSS3</h3>
                    <div class="skill-level" data-level="95">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Flexbox, Grid, Animation, Responsive Design, Cross-browser 호환성</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
                
                <div class="skill-item">
                    <h3>SCSS/Sass</h3>
                    <div class="skill-level" data-level="90">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Variables, Mixins, Nesting, BEM 방법론, 컴포넌트 스타일링</p>
                    <span class="experience">4년+ 실무 경험</span>
                </div>
                
                <div class="skill-item">
                    <h3>JavaScript (ES6+)</h3>
                    <div class="skill-level" data-level="85">
                        <div class="skill-bar"></div>
                    </div>
                    <p>DOM 조작, 이벤트 처리, 비동기 프로그래밍, 모던 JS 문법</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
            </div>
        </div>
        
        <div class="skill-category">
            <h2>Frontend Frameworks & Libraries</h2>
            <div class="skill-items">
                <div class="skill-item">
                    <h3>Vue.js</h3>
                    <div class="skill-level" data-level="85">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Component 개발, Vuex, Vue Router, Composition API</p>
                    <span class="experience">이투스에듀에서 실무 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Nuxt.js</h3>
                    <div class="skill-level" data-level="80">
                        <div class="skill-bar"></div>
                    </div>
                    <p>SSR, 정적 사이트 생성, 모듈 시스템</p>
                    <span class="experience">이투스에듀에서 실무 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>React</h3>
                    <div class="skill-level" data-level="80">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Component 개발, Hooks, State 관리, JSX</p>
                    <span class="experience">빗썸에서 실무 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Next.js</h3>
                    <div class="skill-level" data-level="75">
                        <div class="skill-bar"></div>
                    </div>
                    <p>SSR, 성능 최적화, 라우팅, TypeScript 연동</p>
                    <span class="experience">빗썸에서 실무 활용</span>
                </div>
            </div>
        </div>
        
        <div class="skill-category">
            <h2>Development Tools & Workflow</h2>
            <div class="skill-items">
                <div class="skill-item">
                    <h3>Git</h3>
                    <div class="skill-level" data-level="90">
                        <div class="skill-bar"></div>
                    </div>
                    <p>버전 관리, 협업 워크플로우, Branch 전략</p>
                    <span class="experience">모든 회사에서 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Figma</h3>
                    <div class="skill-level" data-level="85">
                        <div class="skill-bar"></div>
                    </div>
                    <p>디자인 시안 분석, 컴포넌트 추출, 디자인 시스템</p>
                    <span class="experience">이투스에듀, 빗썸에서 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Zeplin</h3>
                    <div class="skill-level" data-level="80">
                        <div class="skill-bar"></div>
                    </div>
                    <p>디자인 가이드 추출, 스펙 확인, 에셋 다운로드</p>
                    <span class="experience">디자인 협업 도구</span>
                </div>
                
                <div class="skill-item">
                    <h3>Jira</h3>
                    <div class="skill-level" data-level="75">
                        <div class="skill-bar"></div>
                    </div>
                    <p>프로젝트 관리, 이슈 트래킹, 애자일 방법론</p>
                    <span class="experience">팀 협업 및 일정 관리</span>
                </div>
            </div>
        </div>
        
        <div class="skill-category">
            <h2>Core Competencies</h2>
            <ul class="competency-highlights">
                <li>🎯 <strong>크로스 브라우저 호환성</strong> - IE11 포함 모든 주요 브라우저 지원</li>
                <li>📱 <strong>반응형 웹 구현</strong> - 모바일 퍼스트 접근법</li>
                <li>♿ <strong>웹 접근성</strong> - KWCAG 2.1 기준 준수</li>
                <li>⚡ <strong>성능 최적화</strong> - Core Web Vitals 개선</li>
                <li>🔧 <strong>컴포넌트 기반 개발</strong> - 재사용 가능한 UI 컴포넌트</li>
            </ul>
        </div>
    </section>
</body>
</html>`
                },
                {
                    id: 'tools-html',
                    name: 'tools.html',
                    type: 'file',
                    extension: 'html',
                    path: '/skills/tools.html',
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>사용 도구 및 협업 툴</title>
</head>
<body>
    <section class="tools">
        <h1>Development Tools & Collaboration</h1>
        <p class="tools-intro">실무에서 활용하는 개발 도구 및 협업 환경</p>
        
        <div class="tool-category">
            <h2>Design & Collaboration Tools</h2>
            <ul class="tool-list">
                <li>
                    <div class="tool-icon">🎨</div>
                    <div class="tool-info">
                        <h3>Figma</h3>
                        <p>UI/UX 디자인 분석, 컴포넌트 추출, 디자인 시스템 활용</p>
                        <span class="usage">이투스에듀, 빗썸에서 실무 활용</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">📐</div>
                    <div class="tool-info">
                        <h3>Zeplin</h3>
                        <p>디자인 가이드 추출, 스펙 확인, 에셋 다운로드</p>
                        <span class="usage">디자이너-개발자 간 협업 도구</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">📋</div>
                    <div class="tool-info">
                        <h3>Jira</h3>
                        <p>프로젝트 관리, 이슈 트래킹, 애자일 스프린트 관리</p>
                        <span class="usage">팀 협업 및 일정 관리 도구</span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="tool-category">
            <h2>Development Environment</h2>
            <ul class="tool-list">
                <li>
                    <div class="tool-icon">💻</div>
                    <div class="tool-info">
                        <h3>Visual Studio Code</h3>
                        <p>주요 개발 환경, 확장 프로그램 활용, 통합 터미널</p>
                        <span class="usage">모든 프로젝트의 메인 에디터</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">🐙</div>
                    <div class="tool-info">
                        <h3>Git / GitHub</h3>
                        <p>버전 관리, 브랜치 전략, 코드 리뷰, 협업 워크플로우</p>
                        <span class="usage">모든 회사에서 필수 도구</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">🌐</div>
                    <div class="tool-info">
                        <h3>Chrome DevTools</h3>
                        <p>디버깅, 성능 최적화, 반응형 테스트, 네트워크 분석</p>
                        <span class="usage">일상적인 개발 및 디버깅</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">🔧</div>
                    <div class="tool-info">
                        <h3>npm / yarn</h3>
                        <p>패키지 관리, 의존성 관리, 스크립트 실행</p>
                        <span class="usage">Node.js 프로젝트 관리</span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="tool-category">
            <h2>Testing & Performance</h2>
            <ul class="tool-list">
                <li>
                    <div class="tool-icon">📊</div>
                    <div class="tool-info">
                        <h3>Lighthouse</h3>
                        <p>웹 성능 측정, 접근성 검사, SEO 분석</p>
                        <span class="usage">성능 최적화 및 품질 보증</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">🔍</div>
                    <div class="tool-info">
                        <h3>BrowserStack</h3>
                        <p>크로스 브라우저 테스트, 다양한 디바이스 테스트</p>
                        <span class="usage">브라우저 호환성 테스트</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">♿</div>
                    <div class="tool-info">
                        <h3>axe DevTools</h3>
                        <p>웹 접근성 검사, WCAG 가이드라인 준수 확인</p>
                        <span class="usage">접근성 품질 관리</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">⚡</div>
                    <div class="tool-info">
                        <h3>PageSpeed Insights</h3>
                        <p>Core Web Vitals 측정, 성능 개선 제안</p>
                        <span class="usage">사용자 경험 최적화</span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="tool-category">
            <h2>Build Tools & Frameworks</h2>
            <ul class="tool-list">
                <li>
                    <div class="tool-icon">📦</div>
                    <div class="tool-info">
                        <h3>Webpack</h3>
                        <p>모듈 번들링, 최적화, 개발 서버 구성</p>
                        <span class="usage">프로젝트 빌드 환경</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">⚡</div>
                    <div class="tool-info">
                        <h3>Vite</h3>
                        <p>빠른 개발 서버, HMR, 최적화된 빌드</p>
                        <span class="usage">모던 프론트엔드 빌드 도구</span>
                    </div>
                </li>
                <li>
                    <div class="tool-icon">🎯</div>
                    <div class="tool-info">
                        <h3>ESLint / Prettier</h3>
                        <p>코드 품질 관리, 일관된 코드 스타일</p>
                        <span class="usage">코드 품질 및 팀 컨벤션</span>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="expertise-summary">
            <h2>Tool Expertise Summary</h2>
            <div class="expertise-grid">
                <div class="expertise-item">
                    <h4>🎨 Design-Dev 협업</h4>
                    <p>Figma, Zeplin을 통한 디자이너와의 원활한 소통</p>
                </div>
                <div class="expertise-item">
                    <h4>📋 프로젝트 관리</h4>
                    <p>Jira를 활용한 애자일 개발 프로세스</p>
                </div>
                <div class="expertise-item">
                    <h4>🔧 개발 효율성</h4>
                    <p>Git, VSCode, 빌드 도구를 통한 생산성 향상</p>
                </div>
                <div class="expertise-item">
                    <h4>📊 품질 관리</h4>
                    <p>성능, 접근성, 브라우저 호환성 테스트</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`
                }
            ]
        },
        {
            id: 'contact',
            name: 'contact',
            type: 'folder',
            isExpanded: false,
            path: '/contact',
            children: [
                {
                    id: 'contact-info',
                    name: 'info.html',
                    type: 'file',
                    extension: 'html',
                    path: '/contact/info.html',
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>연락처</title>
</head>
<body>
    <section class="contact">
        <h1>Contact Information</h1>
        
        <div class="contact-grid">
            <div class="contact-item">
                <div class="contact-icon">📧</div>
                <h3>Email</h3>
                <p>soomin.frontend@gmail.com</p>
                <a href="mailto:soomin.frontend@gmail.com">메일 보내기</a>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">📱</div>
                <h3>Phone</h3>
                <p>010-1234-5678</p>
                <a href="tel:010-1234-5678">전화 걸기</a>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">🐙</div>
                <h3>GitHub</h3>
                <p>github.com/soompy</p>
                <a href="https://github.com/soompy" target="_blank">GitHub 보기</a>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <h3>Portfolio</h3>
                <p>이수민 포트폴리오</p>
                <a href="https://soompy.github.io/my-introduction-page/" target="_blank">포트폴리오 보기</a>
            </div>
        </div>
        
        <div class="contact-form">
            <h2>프로젝트 문의</h2>
            <form>
                <div class="form-group">
                    <label for="name">이름</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">이메일</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">제목</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">메시지</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn-submit">메시지 보내기</button>
            </form>
        </div>
    </section>
</body>
</html>`
                },
                {
                    id: 'resume-pdf',
                    name: 'resume.pdf',
                    type: 'file',
                    extension: 'pdf',
                    path: '/contact/resume.pdf',
                    content: '// PDF 파일 (이력서)'
                }
            ]
        }
    ]
};

export const projectsInfo: ProjectInfo[] = [
    {
        id: 'corporate',
        title: 'SafePay - 안전한 결제 서비스',
        description: '블록체인 기반 안전한 결제 시스템을 제공하는 웹 애플리케이션. 사용자 친화적인 인터페이스와 보안성을 중시한 프로젝트',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
        period: '2024.06 - 현재',
        role: '프론트엔드 개발 & UI/UX 디자인',
        url: 'https://soompy.github.io/my-introduction-page/',
        github: 'https://github.com/soompy/my-introduction-page',
        features: [
            '다크/라이트 테마 지원',
            '반응형 웹 디자인',
            '애니메이션 효과 구현',
            'TypeScript를 활용한 타입 안전성',
            '접근성을 고려한 UI 설계'
        ],
        achievements: [
            '모던한 디자인 시스템 구축',
            '사용자 경험 최적화',
            '성능 최적화 및 SEO 개선'
        ]
    },
    {
        id: 'ecommerce',
        title: '함께GO - 여행 동행 플랫폼',
        description: '여행을 함께할 동행을 찾고 계획을 세울 수 있는 소셜 플랫폼. Vue.js 기반으로 개발된 프로젝트',
        techStack: ['Vue.js', 'Nuxt.js', 'SCSS', 'JavaScript', 'Express.js'],
        period: '2023.03 - 2023.06',
        role: '풀스택 개발',
        github: 'https://github.com/soompy/travel-companion',
        features: [
            '실시간 채팅 시스템',
            '지도 API 연동',
            '사용자 매칭 알고리즘',
            '여행 일정 관리 기능',
            'SNS 로그인 연동'
        ],
        achievements: [
            '실시간 소통 기능 구현',
            'API 연동 및 데이터 관리',
            '사용자 중심 UI/UX 설계'
        ]
    },
    {
        id: 'landing',
        title: '뇸뇸 프로젝트 - 캐릭터 브랜딩',
        description: '오리지널 캐릭터 뇸뇸을 활용한 브랜딩 웹사이트. 인터랙티브한 애니메이션과 스토리텔링이 특징',
        techStack: ['React', 'SCSS', 'Framer Motion', 'Canvas API', 'Lottie'],
        period: '2022.09 - 2022.12',
        role: '프론트엔드 개발 & 캐릭터 디자인',
        url: 'https://soompy.github.io/character-branding/',
        github: 'https://github.com/soompy/character-branding',
        features: [
            '캐릭터 인터랙션 애니메이션',
            '스크롤 기반 스토리텔링',
            '모바일 터치 인터랙션',
            '캐릭터 굿즈 쇼케이스',
            '브랜드 아이덴티티 시스템'
        ],
        achievements: [
            '창의적인 캐릭터 브랜딩',
            '몰입도 높은 사용자 경험',
            '독창적인 인터랙션 디자인'
        ]
    }
];
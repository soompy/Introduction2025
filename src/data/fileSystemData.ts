// =============================================================================
// 웹 퍼블리셔 포트폴리오 파일 시스템 데이터
// =============================================================================

import type { FileNode, ProjectInfo } from "../types/fileSystem";

export const fileSystemData: FileNode = {
    id: "root",
    name: "portfolio-workspace",
    type: "folder",
    isExpanded: true,
    path: "/",
    children: [
        {
            id: "about",
            name: "소개",
            type: "folder",
            isExpanded: false,
            path: "/about",
            children: [
                {
                    id: "profile-html",
                    name: "profile.html",
                    type: "file",
                    extension: "html",
                    path: "/about/profile.html",
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
            <p class="experience">실무 경력 총 5년 7개월</p>
        </div>
        
        <div class="profile-content">
            <div class="intro-section">
                <h3>소개</h3>
                <p class="slogan">
                    "퍼포먼스와 사용자 경험을 만드는 6년 차 UI 개발자입니다."
                </p>
                <p class="description">
                    사용자 경험을 최우선으로 생각하며 시맨틱하고 유지보수 편리한 마크업을 작성합니다.
                    인터랙티브한 웹 효과 구현과 컴포넌트 기반 UI 개발 특장점을 가지고 있습니다.
                </p>
            </div>
            
            <div class="core-competencies">
                <h3>핵심 역량</h3>
                <ul class="competency-list">
                    <li>
                        <strong>시맨틱 마크업</strong>
                        <span>웹 표준과 접근성을 고려한 구조적 마크업을 작성합니다.</span>
                    </li>
                    <li>
                        <strong>인터랙티브 웹 구현</strong>
                        <span>GSAP과 Framer Motion을 활용하여 사용자 경험을 향상시키는 동적 효과 개발이 가능합니다.</span>
                    </li>
                    <li>
                        <strong>컴포넌트 기반 개발</strong>
                        <span>재사용 가능하고 확장성 있는 UI 컴포넌트 설계가 가능합니다.</span>
                    </li>
                    <li>
                        <strong>반응형 웹 제작</strong>
                        <span>다양한 디바이스에 최적화된 사용자 인터페이스를 구현합니다.</span>
                    </li>
                    <li>
                        <strong>크로스 브라우저 호환성</strong>
                        <span>모든 주요 브라우저에서 일관된 사용자 경험을 제공합니다.</span>
                    </li>
                </ul>
            </div>
            
            <div class="work-philosophy">
                <h3>업무 철학</h3>
                <blockquote>
                    <p>
                        단순히 보기 좋은 웹페이지가 아닌 사용자가 직관적으로 이해하고 
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
</html>`,
                },
                {
                    id: "career-html",
                    name: "career.html",
                    type: "file",
                    extension: "html",
                    path: "/about/career.html",
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
            <div class="timeline-section">
                <h2>경력 타임라인</h2>
                
                <div class="timeline-container">
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                            <div class="timeline-line"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2025.03.24~2025.06.17</div>
                            <h3 class="company-name">빗썸</h3>
                            <p class="job-title">웹 퍼블리셔 / 프론트엔드 개발자</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>빗썸 시장동향 페이지 성능개선
</h5>
                                    <p>2025.04.07~2025.06.13</p>
                                    <ul class="task-list">
                                        <li>React 기반 페이지의 초기 렌더링 성능을 최적화하여 Lighthouse 기준 LCP 성능을 최대 50% 향상</li>
                                        <li>불필요한 렌더링 제거 및 코드 분할 전략 적용을 통해 사용자 체감 속도 개선</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>법인서류접수, 법인계좌연결</h5>
                                    <p>2025.04.07~2025.05.15</p>
                                    <ul class="task-list">
                                        <li>React 기반으로 전반적인 화면 퍼블리싱 및 컴포넌트 구현 담당</li>
                                        <li>다양한 법인 유형(일반 법인, 비영리 법인 등)에 따라 요구되는 제출 서류를 명확히 안내하기 위한 구조화된 정보 테이블 설계</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>빗썸</h5>
                                    <p>2025.03.24~2025.06.13</p>
                                    <ul class="task-list">
                                        <li>빗썸 PC/Mobile 적응형 웹 페이지 운영(React 환경)</li>
                                        <li>React 기반 서비스의 UI 일관성을 유지하며 지속적인 유지보수 및 개선 업무 수행</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Next.js</span>
                                <span class="tech-tag">TypeScript</span>
                                <span class="tech-tag">SCSS</span>
                                <span class="tech-tag">Storybook</span>
                                <span class="tech-tag">Webpack</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                            <div class="timeline-line"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2024.10.28~2025.01.27</div>
                            <h3 class="company-name">이투스에듀(프리랜서)</h3>
                            <p class="job-title">웹 퍼블리셔</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>LMS 개편</h5>
                                    <p>2024.11.21~2024.11.25</p>
                                    <ul class="task-list">
                                        <li>지점별 고객 문의 응대 효율성을 높이기 위해 LMS 내 질의응답 페이지의 UI/UX 구조 전면 개선</li>
                                        <li>반복되는 인터페이스 요소를 공통 컴포넌트로 분리하여 유지보수성과 재사용성 향상</li>
                                    </ul>
                                </div>

                                <div class="work-item">
                                    <h5>청솔학원</h5>
                                    <p>2024.10.24~2025.01.27</p>
                                    <ul class="task-list">
                                        <li>O2O서비스 운영 및 Nuxt 환경에서 GSAP을 활용한 인터렉티브 프로모션 페이지 제작(Nuxt 환경)</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">Vue.js</span>
                                <span class="tech-tag">Nuxt.js</span>
                                <span class="tech-tag">SCSS</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Git</span>
                                <span class="tech-tag">Figma</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                            <div class="timeline-line"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2021.01 - 2022.02</div>
                            <h3 class="company-name">카카오VX</h3>
                            <p class="job-title">웹 퍼블리셔</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>사내 복지 서비스 Hello 사이트 개편</h5>
                                    <p>2023.04.03~2023.05.08</p>
                                    <ul class="task-list">
                                        <li>기존 Google Form 기반의 예약 프로세스를 대체하여, 달력 UI 기반의 직관적인 예약 페이지로 개편</li>
                                        <li>공지사항 및 문의사항 게시판에 탭/아코디언 UI를 적용하여 정보 접근성과 사용 편의성 개선</li>
                                        <li>웹 표준 및 웹 접근성 가이드라인을 준수하며, 다양한 디바이스와 브라우저에서 정상 작동하는 크로스 브라우징 대응 작업 수행</li>
                                        <li>Git을 활용해 신규 프로젝트를 초기 세팅하고 협업 워크플로우를 정립하여, 팀 내 효율적인 작업 분담 및 코드 관리 체계화</li>
                                        <li>Gulp를 통한 번들링/빌드 환경 구성 및 M1 Mac 환경에서 발생한 빌드 오류를 주도적으로 해결</li>
                                        <li>해당 문제 해결 과정을 구글링 및 커뮤니티 자료 분석을 통해 직접 해결책을 도출</li>
                                        <li>팀원들과 공유할 수 있도록 회고록 작성 및 지식 전파 진행</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>프렌즈스크린 앱 내 웹뷰 이벤트 페이지 작업</h5>
                                    <p>2023.02.01~2023.09.29</p>
                                    <ul class="task-list">
                                        <li>프렌즈스크린 앱 내 이벤트 페이지 반응형 및 시각 효과 구현</li>
                                        <li>갤럭시 폴드 등 와이드 디바이스 대응을 위해 px 단위를 vw로 전환하고, SCSS 기반으로 반응형 웹뷰 콘텐츠 구현</li>
                                        <li>SCSS와 JavaScript를 활용하여 계절/이벤트별로 꽃잎 낙하, 나뭇잎 흔들림 등의 애니메이션 효과를 적용해 사용자 흥미 유도</li>
                                        <li>디자인 요구에 맞는 애니메이션 연출을 위해 CodePen 등 플랫폼을 참고하고, 유사 사례 분석을 통해 구현 난이도 및 퍼포먼스 최적화 문제 해결</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>카카오골프예약 웹뷰 UI 및 서비스 페이지 작업</h5>
                                    <p>2021.11.01~2023.09.29</p>
                                    <ul class="task-list">
                                        <li>카오골프예약 웹뷰 서비스 내 동적 이벤트 구현 및 이슈 관리</li>
                                        <li>해외투어, 멤버십, 선결제, 예약매니저, 셀프 체크인, 이벤트 등 웹뷰 기반 서비스에서 마크업 및 JavaScript를 활용해 UI 인터랙션 구현</li>
                                        <li>클릭 시 스크롤 이동, 아코디언 헤드 클릭 시 바디 오픈 등 사용자 편의성을 높이는 동적 이벤트 개발</li>
                                        <li>Jira의 이슈 티켓, 타임라인, 에픽 기능을 활용해 서비스별 업무 흐름을 구조화하고, 팀 간 커뮤니케이션 및 이슈 관리를 원활히 조율</li>
                                    </ul>
                                </div>

                                 <div class="work-item">
                                    <h5>관제 어드민/모니터링 업데이트</h5>
                                    <p>2021.11.01~2023.02.14</p>
                                    <ul class="task-list">
                                        <li>관제 어드민 UI 컴포넌트화 및 대형 화면 대응 반응형 설계</li>
                                        <li>데이터 입력, 사진 등록, 버튼 동작 등 주요 기능의 UI 요소를 컴포넌트화하여 재사용성과 유지보수 효율성 강화</li>
                                        <li>카트 모니터링 및 대기 카트 화면을 최대 46인치의 대형 디스플레이에서도 안정적으로 표시되도록 반응형 레이아웃 설계 및 퍼블리싱 수행</li>
                                    </ul>
                                </div>

                                 <div class="work-item">
                                    <h5>카카오브이엑스 공식 홈페이지 리뉴얼 개편</h5>
                                    <p>2021.11.01~2022.03.09</p>
                                    <ul class="task-list">
                                        <li>SEO 및 UX 강화를 위한 공식 홈페이지 개편 프로젝트 참여
                                        <li>구조화된 콘텐츠 설계 및 접근성 중심 UI, 인터렉션 적용을 통해 SEO 향상 및 채용 페이지 전환율 개선 유도</li>
                                        <li>반응형 퍼블리싱과 인터랙션 효과 적용으로 다양한 디바이스 환경에서 UX 일관성 확보</li>
                                        <li>Jira·Confluence 기반의 협업 프로세스를 통해 팀 간 이슈 관리 및 커뮤니케이션 효율화 주도</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">javascript</span>
                                <span class="tech-tag">GSAP</span>
                                <span class="tech-tag">Gulp</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2020.07.13~2021.10.29</div>
                            <h3 class="company-name">스마트스코어</h3>
                            <p class="job-title">웹퍼블리셔 / UI 개발자</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>계열사 신규 홈페이지 구축</h5>
                                    <p>2021.04.19~2025.06.25</p>
                                    <ul class="task-list">
                                        <li>골프용품 브랜드 ‘퍼블핀’과 보험사 ‘위드리치’의 웹사이트 신규구축</li>
                                        <li>시맨틱 마크업을 통해 검색 최적화(SEO)와 웹 접근성 강화</li>
                                        <li>인터렉션 요소 리디자인 및 크로스 브라우징 호환성 확보를 통해 사용자 경험 전반 개선</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>스마트스코어 공식 홈페이지 UI 유지보수</h5>
                                    <p>2021.03.09~2021.04.22</p>
                                    <ul class="task-list">
                                        <li>Vue 기반 UI 사용성 개선</li>
                                        <li>팝업 및 마켓 레이아웃 전반의 UI를 사용자 흐름에 맞게 개편하여 사용성 향상</li>
                                        <li>Vue 컴포넌트 구조 내에서 직관적인 인터페이스 구현 및 UX 최적화</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>맥케이슨 쇼핑몰 신규 구축</h5>
                                    <p>2020.12.03~2021.01.27</p>
                                    <ul class="task-list">
                                        <li>Vue 기반 골프웨어 쇼핑몰 UI 개선 및 컴포넌트화 작업</li>
                                        <li>쇼핑몰 전반에 걸친 반응형 UI 구현 및 사용자 흐름에 최적화된 쇼핑 UI 컴포넌트 설계</li>
                                        <li>Vue 환경에 맞춘 컴포넌트 구조화를 통해 유지보수성과 재사용성 강화</li>
                                    </ul>
                                </div>

                                 <div class="work-item">
                                    <h5>스마트스코어 개인앱</h5>
                                    <p>2020.07.13~2021.10.29</p>
                                    <ul class="task-list">
                                        <li>Vue 기반 UI 컴포넌트화 작업 수행</li>
                                        <li>중고마켓, 골프매거진, 하우스/마샬캐디, 선물하기, 조인 등 다양한 서비스 작업 페이지에 사용될 UI 요소를 공통 컴포넌트로 구조화</li>
                                        <li>유지보수성과 재사용성을 고려한 컴포넌트 설계로 프로젝트 전체의 개발 효율성 및 UI 일관성 강화에 기여</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Vue</span>
                                <span class="tech-tag">Zeplin</span>
                                <span class="tech-tag">Git</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2020.03.09~2020.06.08</div>
                            <h3 class="company-name">메가스터디교육</h3>
                            <p class="job-title">웹퍼블리셔</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>공무원 교육 플랫폼(메가공무원 외) 웹 퍼블리싱 및 운영 지원</h5>
                                    <p>2020.03.09~2020.06.08</p>
                                    <ul class="task-list">
                                        <li>메가공무원, 메가소방, 난공소방학원 등 복수 교육 서비스의 ASP 기반 웹사이트에서 이벤트/기획전 페이지 제작 및 반응형 UI 적용</li>
                                        <li>HTML/CSS 및 JS를 기반으로 한 퍼블리싱 업무와 크로스 브라우징 이슈 대응</li>
                                        <li>서비스 운영 중 발생하는 콘텐츠 유지보수 및 UI 개선 작업 수행</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">jQuery</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2018.10.01~2019.10.24</div>
                            <h3 class="company-name">엔라이튼</h3>
                            <p class="job-title">웹퍼블리셔</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>발전왕 UI 커스터마이징</h5>
                                    <p>2019.07.30~2019.09.30</p>
                                    <ul class="task-list">
                                        <li>Ionic 환경에서의 UI 구조 개선 및 컴포넌트화</li>
                                        <li>Angular 기반 Ionic 앱 내에서 월별 데이터 조회, 내비게이션 메뉴, 랭킹 리스트 UI를 사용자 경험 중심으로 개선</li>
                                        <li>디자인 커스터마이징 및 컴포넌트화 작업을 통해 앱 전반의 UI 일관성과 개발 효율성 강화</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>솔라브리지 및 P2P 서비스 반응형 레이아웃 개선 및 운영</h5>
                                    <p>2019.05.16~2019.08.02</p>
                                    <ul class="task-list">
                                        <li>솔라브리지 웹사이트의 반응형 레이아웃 전반을 개선하고 다양한 디바이스 환경에 맞춰 UI 일관성 유지 및 유지보수 수행</li>
                                        <li>P2P 금융 서비스의 반응형 화면 최적화 작업과 함께 A/B 테스트 기반의 UI 개선 진행</li>
                                        <li>사용자 반응 데이터를 바탕으로 페이지 구조와 인터페이스 요소를 반복 개선하여 사용자 경험 향상에 기여</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>솔라커넥트 · 비즈솔라커넥트 웹 퍼블리싱 및 유지보수</h5>
                                    <p>2018.10.01~2019.10.24</p>
                                    <ul class="task-list">
                                        <li>Ruby 기반 태양광 발전 사업자 대상 서비스의 웹 퍼블리싱 담당</li>
                                        <li>Bootstrap 기반 반응형 UI 구현 및 SEO 최적화 작업 수행</li>
                                        <li>Git 저장소에서 코드 구조 파악 및 효율적인 유지보수 진행</li>
                                        <li>Jira · Confluence 활용하여 개발팀·디자인팀 간 협업 및 이슈 관리 주도</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Bootstrap</span>
                                <span class="tech-tag">ionic</span>
                                <span class="tech-tag">Zeplin</span>
                                <span class="tech-tag">Git</span>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-marker">
                            <div class="timeline-dot"></div>
                        </div>
                        <div class="timeline-content">
                            <div class="job-period-badge">2018.03.19~2018.08.17</div>
                            <h3 class="company-name">모은넷</h3>
                            <p class="job-title">웹퍼블리셔</p>
                            
                            <div class="work-details">
                                <h4>주요 업무</h4>
                                <div class="work-item">
                                    <h5>모은넷 홈페이지 리뉴얼</h5>
                                    <p>2018.05.28~2018.07.18</p>
                                    <ul class="task-list">
                                        <li>워드프레스 기반 기업 홈페이지를 반응형 웹으로 개편</li>
                                        <li>기획부터 디자인, 퍼블리싱까지 전담하여 리뉴얼 오픈 완료</li>
                                        <li>다양한 디바이스에서도 안정적으로 작동하는 구조 설계</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>보길몰 해산물 쇼핑몰 제작</h5>
                                    <p>2018.05.15~2018.08.30</p>
                                    <ul class="task-list">
                                        <li>카페24 기반 자사 쇼핑몰 기획 및 구축</li>
                                        <li>제품 사진 촬영부터 디자인, 퍼블리싱까지 전 과정 작업</li>
                                        <li>사용자 중심 UI 설계 및 전반적인 쇼핑 흐름 최적화</li>
                                    </ul>
                                </div>
                                
                                <div class="work-item">
                                    <h5>CTI 화면 UI 개발</h5>
                                    <p>2018.03.19~2018.04.11</p>
                                    <ul class="task-list">
                                        <li>HTML, CSS, JavaScript를 활용한 고객센터 CTI 화면 구현</li>
                                        <li>상담 효율성을 고려한 실시간 인터페이스 구성</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="tech-stack">
                                <span class="tech-tag">HTML</span>
                                <span class="tech-tag">CSS</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">jQuery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="education-section">
                <h2>교육 이력</h2>
                <div class="education-list">
                    <div class="education-item">
                        <h3>프론트엔드 개발 부트캠프</h3>
                        <p class="institution">인프런</p>
                        <p class="period">2023.10 - 2024.03 (6개월)</p>
                        <p class="description">
                            React, Vue.js 등 모던 프론트엔드 프레임워크 학습
                        </p>
                    </div>

                    <div class="education-item">
                        <h3>웹퍼블리싱 완전 정복 : 모션 디자인으로 완성</h3>
                        <p class="institution">패스트캠퍼스강남학원</p>
                        <p class="period">2023. 11 ~ 2024. 01 (3개월)</p>
                        <p class="description">
                            2D Canvas, 3D Three.js 대표 라이브러리를 활용한 심화 인터랙티브 웹 개발
                        </p>
                    </div>

                    <div class="education-item">
                        <h3>ncs 디지털컨버전스웹&앱융합콘텐츠제작</h3>
                        <p class="institution">더조은컴퓨터아트학원</p>
                        <p class="period">2017. 02 ~ 2017. 07 (6개월)</p>
                        <p class="description">
                            html5 css3 jquery를 이용한 하드코딩, 포토샵 일러스트를 활용한 디자인
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`,
                },
            ],
        },
        {
            id: "portfolio",
            name: "포트폴리오 작업물",
            type: "folder",
            isExpanded: true,
            path: "/portfolio",
            children: [
                {
                    id: "project-pay",
                    name: "safepay 간편결제 토이 프로젝트",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/safepay-project",
                },
                {
                    id: "project-nyomnyom",
                    name: "nyomnyom 그라운드 토이 프로젝트",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/nyomnyom",
                },
                 {
                    id: "project-tire",
                    name: "Nexen 인터렉티브 프로모션 페이지",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/Nexen",
                },
                {
                    id: "project-hanmi",
                    name: "한미약품 리뉴얼",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/hanmi",
                },
                {
                    id: "project-magazine",
                    name: "더메거진 리뉴얼",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/magazine",
                },
                {
                    id: "project-canvasConfetti",
                    name: "캔버스 효과",
                    type: "folder",
                    isExpanded: false,
                    path: "/portfolio/canvasConfetti",
                },
            ],
        },
        {
            id: "skills",
            name: "스킬",
            type: "folder",
            isExpanded: false,
            path: "/skills",
            children: [
                {
                    id: "frontend-html",
                    name: "frontend.html",
                    type: "file",
                    extension: "html",
                    path: "/skills/frontend.html",
                    content: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>프론트엔드 기술 스택</title>
</head>
<body>
    <section class="skills">
        <h1>Skills</h1>
        <p class="skills-intro">5년 7개월의 실무 경험을 바탕으로 한 기술 스택</p>
        
        <div class="skill-category">
            <h2>Core Technologies</h2>
            <div class="skill-items">
                <div class="skill-item" data-level="100">
                    <h3>HTML5 <span class="proficiency">100%</span></h3>
                    <div class="skill-level" data-level="100">
                        <div class="skill-bar"></div>
                    </div>
                    <p>시맨틱 마크업, 웹 접근성, SEO 최적화, 웹 표준 준수</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
                
                <div class="skill-item" data-level="100">
                    <h3>CSS3 <span class="proficiency">100%</span></h3>
                    <div class="skill-level" data-level="100">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Flexbox, Grid, Animation, Responsive Design, Cross-browser 호환성</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
                
                <div class="skill-item" data-level="100">
                    <h3>SCSS/Sass <span class="proficiency">100%</span></h3>
                    <div class="skill-level" data-level="100">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Variables, Mixins, Nesting, BEM 방법론, 컴포넌트 스타일링</p>
                    <span class="experience">5년+ 실무 경험</span>
                </div>
                
                <div class="skill-item" data-level="80">
                    <h3>JavaScript (ES6+) <span class="proficiency">80%</span></h3>
                    <div class="skill-level" data-level="80">
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
                <div class="skill-item" data-level="70">
                    <h3>Vue.js <span class="proficiency">70%</span></h3>
                    <div class="skill-level" data-level="70">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Component 개발, Vuex, Vue Router, Composition API</p>
                    <span class="experience">스마트스코어, 이투스에듀에서 실무 활용</span>
                </div>
                
                <div class="skill-item" data-level="70">
                    <h3>Nuxt.js <span class="proficiency">70%</span></h3>
                    <div class="skill-level" data-level="70">
                        <div class="skill-bar"></div>
                    </div>
                    <p>SSR, 정적 사이트 생성, 모듈 시스템</p>
                    <span class="experience">개인 토이 프로젝트, 이투스에듀에서 실무 활용</span>
                </div>
                
                <div class="skill-item" data-level="60">
                    <h3>React <span class="proficiency">60%</span></h3>
                    <div class="skill-level" data-level="60">
                        <div class="skill-bar"></div>
                    </div>
                    <p>Component 개발, Hooks, State 관리, JSX</p>
                    <span class="experience">빗썸에서 실무 활용</span>
                </div>
                
                <div class="skill-item" data-level="60">
                    <h3>Next.js <span class="proficiency">60%</span></h3>
                    <div class="skill-level" data-level="60">
                        <div class="skill-bar"></div>
                    </div>
                    <p>SSR, 성능 최적화, 라우팅, TypeScript 연동</p>
                    <span class="experience">개인 토이 프로젝트에서 활용</span>
                </div>
            </div>
        </div>
        
        <div class="skill-category">
            <h2>Development Tools & Workflow</h2>
            <div class="skill-items">
                <div class="skill-item" data-level="90">
                    <h3>Git <span class="proficiency">90%</span></h3>
                    <div class="skill-level" data-level="90">
                        <div class="skill-bar"></div>
                    </div>
                    <p>버전 관리, 협업 워크플로우, Branch 전략</p>
                    <span class="experience">모든 회사에서 활용</span>
                </div>

                <div class="skill-item" data-level="80">
                    <h3>Jira <span class="proficiency">80%</span></h3>
                    <div class="skill-level" data-level="80">
                        <div class="skill-bar"></div>
                    </div>
                    <p>프로젝트 관리, 이슈 트래킹, 애자일 방법론</p>
                    <span class="experience">엔라이튼, 스마트스코어, 카카오VX, 이투스에듀, 빗썸에서 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Figma</h3>
                    <p>디자인 시안 분석, 컴포넌트 추출, 디자인 시스템</p>
                    <span class="experience">카카오VX, 이투스에듀, 빗썸에서 활용</span>
                </div>
                
                <div class="skill-item">
                    <h3>Zeplin</h3>
                    <p>디자인 가이드 추출, 스펙 확인, 에셋 다운로드</p>
                    <span class="experience">엔라이튼에서 활용</span>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`,
                },
            ],
        },
        {
            id: "contact",
            name: "연락처",
            type: "folder",
            isExpanded: false,
            path: "/contact",
            children: [
                {
                    id: "contact-info",
                    name: "info.html",
                    type: "file",
                    extension: "html",
                    path: "/contact/info.html",
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
                <h3>링크드인</h3>
                <a href="https://www.linkedin.com/in/%EC%88%98%EB%AF%BC-%EC%9D%B4-019a61305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">링크드인 방문하기</a>
            </div>
            
            <div class="contact-item">
                <h3>블로그</h3>
                <a href="https://suri-blog.vercel.app/" target="_blank">개발 블로그 방문하기</a>
            </div>
            
            <div class="contact-item">
                <h3>GitHub</h3>
                <a href="https://github.com/soompy" target="_blank">GitHub 저장소 방문하기</a>
            </div>
        </div>
    </section>
</body>
</html>`,
                },
            ],
        },
    ],
};

export const projectsInfo: ProjectInfo[] = [
    {
        id: "pay",
        title: "SafePay - 안전한 결제 서비스",
        description:
            "블록체인 기반 안전한 결제 시스템을 제공하는 웹 애플리케이션 컨셉으로 설계하고 작업한 토이 프로젝트입니다. 사용자 친화적인 인터페이스와 보안성을 고려하여 작업했습니다.",
        techStack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "React Hook Form",
        ],
        period: "2024.07 (3주 소요)",
        role: "프론트엔드 개발 & UI/UX 디자인",
        url: "https://safepay-rho.vercel.app/",
        github: "https://github.com/soompy/pf25_pay",
        features: [
            "다크/라이트 테마 지원",
            "반응형 웹",
            "애니메이션 효과 구현",
            "TypeScript를 활용한 타입 안전성",
            "접근성을 고려한 UI 설계",
        ],
        achievements: [
            "모던한 디자인 시스템 구축",
            "사용자 경험 최적화",
            "성능 최적화 및 SEO 개선",
        ],
    },
    {
        id: "landing",
        title: "뇸뇸 그라운드 프로젝트",
        description:
            "Nuxt로 구현한 음식에 진심인 사람을 위한 서비스라는 컨셉으로 작업한 뇸뇸 그라운드 웹사이트입니다.",
        techStack: ["React", "SCSS", "Framer Motion", "Canvas API", "Lottie"],
        period: "2022.09 - 2023.12",
        role: "프론트엔드 개발 & 캐릭터 디자인",
        url: "https://toy-3-nuxt-nyomnyom.vercel.app/",
        github: "https://github.com/soompy/toy_3_nuxt_nyomnyom",
        features: [
            "CRUD 구현",
            "모바일 터치 인터랙션",
            "커뮤니티 컨셉 아이덴티티 시스템",
        ],
        achievements: [
            "창의적인 캐릭터 브랜딩",
            "몰입도 높은 사용자 경험",
            "독창적인 인터랙션 디자인",
        ],
    },
    {
        id: "nyomnyom",
        title: "뇸뇸 그라운드 프로젝트",
        description:
            "Nuxt로 구현한 음식에 진심인 사람을 위한 서비스라는 컨셉으로 작업한 뇸뇸 그라운드 웹사이트입니다.",
        techStack: ["Nuxt", "Vite", "SCSS", "JavaScript"],
        period: "2022.09 - 2023.12",
        role: "프론트, 퍼블리싱",
        url: "https://toy-3-nuxt-nyomnyom.vercel.app/",
        github: "https://github.com/soompy/toy_3_nuxt_nyomnyom",
        features: [
            "CRUD 구현",
            "마이크로 인터랙션 적용",
            "커뮤니티 컨셉 아이덴티티 시스템",
        ],
        achievements: [
            "로그인, 회원가입 시스템 적용",
            "회원정보와 불일치 시 에러 메시지 노출",
        ],
    },
    {
        id: "tire",
        title: "인터렉티브효과 페이지",
        description:
            "넥센타이어 스크롤 인터렉티브 효과를 적용한 개인 작업물입니다.",
        techStack: ["Vite", "SCSS", "JavaScript", "Html", "GSAP"],
        period: "2023.12 (한달 소요)",
        role: "프론트, 퍼블리싱",
        url: "https://pf-2023-interactive-vanilla.vercel.app/",
        github: "https://github.com/soompy/PF2023_interactiveVanilla",
        features: ["스크롤 인터렉션을 적용한 프로모션 페이지"],
        achievements: ["유저 친화적인 인터페이스"],
    },
    {
        id: "hanmi",
        title: "한미약품 리뉴얼 페이지",
        description:
            "한미약품 홈페이지를 다크모드와 부트스트랩을 활용한 디자인 시스템을 적용하여 작업한 반응형 웹사이트입니다.",
        techStack: ["Vite", "SCSS", "JavaScript", "Html", "Bootstrap"],
        period: "2024.07 (보름 소요)",
        role: "퍼블리싱",
        url: "",
        github: "https://github.com/soompy/PF2024_hanmi",
    },
    {
        id: "magazine",
        title: "더매거진 리뉴얼 페이지",
        description:
            "더매거진 홈페이지를 Matter.js와 GSAP으로 인터렉티브 효과를 추가해 작업한 반응형 개인 작업물입니다.",
        techStack: ["Vite", "SCSS", "JavaScript", "Html", "GSAP", "Matter.js"],
        period: "2024.03 ~ 2024.04",
        role: "퍼블리싱",
        url: "https://pf-2024-magazine.vercel.app/",
        github: "https://github.com/soompy/PF2024_magazine",
    },
    {
        id: "canvasConfetti",
        title: "캔버스 효과 페이지",
        description:
            "카운트 다운 효과가 끝나면 3초 후 폭죽 터지는 효과가 나타나는 캔버스로 구현한 개인 작업물입니다.",
        techStack: ["Vite", "SCSS", "JavaScript", "Html"],
        period: "2024.01",
        role: "퍼블리싱",
        url: "https://pf-2023-canvas.vercel.app/",
        github: "https://github.com/soompy/PF2023_canvas",
    },
];

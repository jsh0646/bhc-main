<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHC 치킨 - 반응형 웹 Layout</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>

    <!-- 현재 화면 너비 실시간 확인용 뱃지 -->
    <div id="screen-size-badge">화면 너비: <span id="window-width">0</span>px</div>

    <div class="page-wrapper">
        <!-- 1. 사이드바 (1600px 이상에서 왼쪽 15% 배치) -->
        <aside class="sidebar-left">
            <div class="logo">bhc<span>.</span></div>
            <nav class="side-nav">
                <ul>
                    <li><a href="#">브랜드 소개</a></li>
                    <li><a href="#">대표 메뉴</a></li>
                    <li><a href="#">매장 찾기</a></li>
                    <li><a href="#">이벤트/혜택</a></li>
                </ul>
            </nav>
        </aside>

        <!-- 2. 메인 컨텐츠 영력 -->
        <main class="main-content">
            
            <!-- 모바일/태블릿용 상단 헤더 -->
            <header class="top-header">
                <div class="logo">bhc<span>.</span></div>
                <div class="menu-toggle">☰</div>
            </header>

            <!-- 히어로 메인 배너 (85% / 100%) -->
            <section class="hero-banner">
                <div class="hero-text">
                    <span class="sub-title">Taste the Best!</span>
                    <h1>뿌링클부터 맛초킹까지<br>BHC 대표 메뉴 시리즈</h1>
                    <p>고올레산 해바라기유로 바삭하게 튀겨낸 고품격 치킨</p>
                </div>
                <div class="hero-img">
                    <div class="img-box">BHC 대표 치킨 비주얼</div>
                </div>
            </section>

            <!-- 치킨 메뉴 그리드 섹션 -->
            <section class="menu-section">
                <h2>BHC 시그니처 메뉴</h2>
                <div class="menu-grid">
                    
                    <div class="card card-40">
                        <div class="card-img">뿌링클 이미지</div>
                        <div class="card-info">
                            <h3>뿌링클</h3>
                            <p>21,000원</p>
                        </div>
                    </div>

                    <div class="card card-20">
                        <div class="card-img">맛초킹 이미지</div>
                        <div class="card-info">
                            <h3>맛초킹</h3>
                            <p>21,000원</p>
                        </div>
                    </div>

                    <div class="card card-20">
                        <div class="card-img">골드킹 이미지</div>
                        <div class="card-info">
                            <h3>골드킹</h3>
                            <p>20,000원</p>
                        </div>
                    </div>

                    <div class="card card-20">
                        <div class="card-img">치즈볼 이미지</div>
                        <div class="card-info">
                            <h3>달콤바삭 치즈볼</h3>
                            <p>5,000원</p>
                        </div>
                    </div>

                    <div class="card card-30">
                        <div class="card-img">뿌링치즈볼</div>
                        <div class="card-info">
                            <h3>뿌링 치즈볼</h3>
                            <p>6,000원</p>
                        </div>
                    </div>

                    <div class="card card-30">
                        <div class="card-img">뿌링감자</div>
                        <div class="card-info">
                            <h3>뿌링 감자</h3>
                            <p>4,500원</p>
                        </div>
                    </div>

                </div>
            </section>

            <!-- 하단 푸터 -->
            <footer class="site-footer">
                <p><strong>BHC 치킨 고객센터: 1577-5577</strong></p>
                <p>&copy; 2026 BHC Chicken. All Rights Reserved.</p>
            </footer>

        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHC 치킨 Layout</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>

    <div class="container">
        <!-- 1. 좌측 15%: 구매 등 링크 기능 사이드바 -->
        <aside class="sidebar-15">
            <div class="logo">bhc<span>.</span></div>
            <p class="sidebar-title">구매 등 링크 기능</p>
            <nav class="side-menu">
                <ul>
                    <li><a href="#">온라인 주문</a></li>
                    <li><a href="#">E-쿠폰 등록</a></li>
                    <li><a href="#">매장 찾기</a></li>
                    <li><a href="#">이벤트 안내</a></li>
                </ul>
            </nav>
        </aside>

        <!-- 2. 우측 85%: 메인 그리드 컨텐츠 영역 -->
        <main class="main-85">
            
            <!-- ROW 1: 메인 후라이드 배너 (치킨 사진 60% + BHC 글 40%) -->
            <div class="row row-main">
                <div class="cell w-60 bg-chicken-main">
                    <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80" alt="후라이드 치킨 메인">
                    <div class="overlay-text">치킨 사진 60%</div>
                </div>
                <div class="cell w-40 bg-text">
                    <div class="text-content">
                        <h2>BHC 글 40%</h2>
                        <p>바삭함의 정석, BHC 후라이드 치킨 시리즈</p>
                    </div>
                </div>
            </div>

            <!-- ROW 2: 후라이드 섹션 (20% | 40% | 20% | 20%) -->
            <div class="row">
                <div class="cell w-20 bg-blue">
                    <p>20%</p>
                </div>
                <div class="cell w-40 bg-white">
                    <p>40%</p>
                </div>
                <div class="cell w-20 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" alt="후라이드 치킨">
                    <div class="overlay-text">후라이드 사진 20%</div>
                </div>
                <div class="cell w-20 bg-white">
                    <div class="text-content">
                        <h3>글 20%</h3>
                        <p>고소하고 바삭한 기본 후라이드</p>
                    </div>
                </div>
            </div>

            <!-- ROW 3: 양념 치킨 섹션 (20% | 40% | 20% | 20%) -->
            <div class="row">
                <div class="cell w-20 bg-blue">
                    <p>20%</p>
                </div>
                <div class="cell w-40 bg-white">
                    <p>40%</p>
                </div>
                <div class="cell w-20 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=400&q=80" alt="양념 치킨">
                    <div class="overlay-text">양념 20%</div>
                </div>
                <div class="cell w-20 bg-white">
                    <div class="text-content">
                        <h3>글 20%</h3>
                        <p>매콤달콤 특제 양념 소스</p>
                    </div>
                </div>
            </div>

            <!-- ROW 4: 뿌링클 치킨 섹션 (40% | 20% | 20% | 20%) -->
            <div class="row">
                <div class="cell w-40 bg-blue">
                    <p>40%</p>
                </div>
                <div class="cell w-20 bg-blue">
                    <p>20%</p>
                </div>
                <div class="cell w-20 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" alt="뿌링클 치킨">
                    <div class="overlay-text">뿌링클 사진 20%</div>
                </div>
                <div class="cell w-20 bg-blue">
                    <div class="text-content">
                        <h3>글 20%</h3>
                        <p>시즈닝과 뿌링뿌링 소스의 조합</p>
                    </div>
                </div>
            </div>

        </main>
    </div>

    <script src="script.js"></script>
</body>
</html>

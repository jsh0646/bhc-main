<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHC 치킨 Layout - 메뉴 확장형</title>
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

        <!-- 2. 우측 85%: 메인 메뉴 전면 배치 영역 -->
        <main class="main-85">
            
            <!-- ROW 1: 메인 후라이드 배너 (치킨 사진 60% + BHC 글 40%) -->
            <div class="row row-main">
                <div class="cell w-60 bg-chicken-main">
                    <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1000&q=80" alt="후라이드 치킨 메인">
                    <div class="overlay-text">BHC 시그니처 (60%)</div>
                </div>
                <div class="cell w-40 bg-text">
                    <div class="text-content large">
                        <h2>BHC 브랜드 (40%)</h2>
                        <p>바삭함의 정석, BHC 대표 치킨 시리즈를 확대된 이미지와 설명으로 만나보세요.</p>
                    </div>
                </div>
            </div>

            <!-- ROW 2: 후라이드 치킨 (사진 50% + 글 50%로 확대) -->
            <div class="row row-menu">
                <div class="cell w-50 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80" alt="후라이드 치킨">
                    <div class="overlay-text">후라이드 치킨 사진 (50%)</div>
                </div>
                <div class="cell w-50 bg-white">
                    <div class="text-content menu-desc">
                        <h3>후라이드 치킨</h3>
                        <p class="price">20,000원</p>
                        <p>깨끗한 고올레산 해바라기유로 튀겨내어 고소하고 바삭한 BHC 대표 기본 후라이드 치킨입니다.</p>
                    </div>
                </div>
            </div>

            <!-- ROW 3: 양념 치킨 (사진 50% + 글 50%로 확대) -->
            <div class="row row-menu">
                <div class="cell w-50 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80" alt="양념 치킨">
                    <div class="overlay-text">양념 치킨 사진 (50%)</div>
                </div>
                <div class="cell w-50 bg-white">
                    <div class="text-content menu-desc">
                        <h3>양념 치킨</h3>
                        <p class="price">21,000원</p>
                        <p>매콤달콤한 BHC만의 특제 양념 소스가 듬뿍 버무려진 남녀노소 즐기는 시그니처 양념 치킨입니다.</p>
                    </div>
                </div>
            </div>

            <!-- ROW 4: 뿌링클 치킨 (사진 50% + 글 50%로 확대) -->
            <div class="row row-menu">
                <div class="cell w-50 bg-chicken">
                    <img src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80" alt="뿌링클 치킨">
                    <div class="overlay-text">뿌링클 사진 (50%)</div>
                </div>
                <div class="cell w-50 bg-white">
                    <div class="text-content menu-desc">
                        <h3>뿌링클 치킨</h3>
                        <p class="price">21,000원</p>
                        <p>갓 튀겨낸 치킨에 크런치한 시즈닝과 상큼한 뿌링뿌링 소스의 만남! BHC 최고 인기 대표 메뉴입니다.</p>
                    </div>
                </div>
            </div>

        </main>
    </div>

</body>
</html>

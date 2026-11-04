<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHC 치킨 - 메인 레이아웃</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
</head>
<body>

    <div class="wrapper">
        <!-- 좌측 15% 사이드바 -->
        <aside class="sidebar">
            <div class="logo">bhc<span>.</span></div>
            <div class="side-title">구매 등 링크 기능</div>
            <nav class="nav-menu">
                <ul>
                    <li><a href="#">온라인 주문</a></li>
                    <li><a href="#">E-쿠폰 등록</a></li>
                    <li><a href="#">매장 찾기</a></li>
                    <li><a href="#">이벤트 안내</a></li>
                </ul>
            </nav>
        </aside>

        <!-- 우측 85% 메인 콘텐츠 영역 -->
        <main class="main-content">
            
            <!-- ROW 1: 메인 배너 (치킨 사진 60% + BHC 글 40%) -->
            <div class="row row-hero">
                <div class="col w-60 image-col">
                    <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=80" alt="BHC 치킨 메인">
                    <span class="label">치킨 사진 60%</span>
                </div>
                <div class="col w-40 text-col hero-text">
                    <h2>BHC 브랜드 40%</h2>
                    <p>바삭함의 정석, BHC 대표 치킨 시리즈를 만나보세요.</p>
                </div>
            </div>

            <!-- ROW 2: 후라이드 치킨 (사진 50% + 글 50%) -->
            <div class="row row-item">
                <div class="col w-50 image-col">
                    <img src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80" alt="후라이드 치킨">
                    <span class="label">후라이드 사진 50%</span>
                </div>
                <div class="col w-50 text-col">
                    <h3>후라이드 치킨</h3>
                    <span class="price">20,000원</span>
                    <p>깨끗한 고올레산 해바라기유로 튀겨내어 고소하고 바삭한 기본 후라이드 치킨입니다.</p>
                </div>
            </div>

            <!-- ROW 3: 양념 치킨 (사진 50% + 글 50%) -->
            <div class="row row-item">
                <div class="col w-50 image-col">
                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80" alt="양념 치킨">
                    <span class="label">양념 사진 50%</span>
                </div>
                <div class="col w-50 text-col">
                    <h3>양념 치킨</h3>
                    <span class="price">21,000원</span>
                    <p>매콤달콤한 특제 양념 소스가 듬뿍 버무려진 남녀노소 즐기는 양념 치킨입니다.</p>
                </div>
            </div>

            <!-- ROW 4: 뿌링클 치킨 (사진 50% + 글 50%) -->
            <div class="row row-item">
                <div class="col w-50 image-col">
                    <img src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80" alt="뿌링클 치킨">
                    <span class="label">뿌링클 사진 50%</span>
                </div>
                <div class="col w-50 text-col">
                    <h3>뿌링클 치킨</h3>
                    <span class="price">21,000원</span>
                    <p>갓 튀겨낸 치킨에 크런치한 시즈닝과 뿌링뿌링 소스의 시그니처 조합입니다.</p>
                </div>
            </div>

        </main>
    </div>

</body>
</html>

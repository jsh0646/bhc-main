<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BHC 브랜드 페이지</title>
  <style>
    /* 1. 기본 스타일 */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;
    }
    html, body {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background-color: #fff;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    /* 2. 전체 앱 컨테이너 (화면 높이 100% 채움) */
    .app-container {
      display: flex;
      width: 100vw;
      height: 100vh;
    }

    /* 3. 좌측 고정 사이드바 (노란색 세로 배치) */
    .sidebar {
      width: 220px;
      height: 100%;
      background-color: #ffff00; /* BHC 노란색 */
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border-right: 1px solid #e5e500;
      flex-shrink: 0;
    }
    .logo {
      color: #e60012;
      font-size: 36px;
      font-weight: 900;
      margin-bottom: 40px;
      letter-spacing: -1px;
    }
    .menu-group {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .menu-title {
      font-weight: 700;
      font-size: 15px;
      line-height: 1.4;
      color: #111;
      margin-bottom: 5px;
    }
    .sidebar ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .sidebar ul li a {
      font-size: 14px;
      color: #222;
      font-weight: 500;
      transition: color 0.2s;
    }
    .sidebar ul li a:hover {
      color: #e60012;
    }

    /* 4. 우측 메인 그리드 영역 (화면 높이 100% 분할) */
    .main-content {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* 각 행(Row) - 높이 비율 분할 */
    .grid-row {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #eee;
    }
    
    /* PC 전체 화면 기준 행 높이 배분 */
    .row-hero { height: 28%; }
    .row-item { height: 24%; }

    /* 타일 공통 스타일 */
    .tile {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 25px 35px;
      position: relative;
      overflow: hidden;
    }

    /* 이미지 타일 */
    .tile-img {
      background-size: cover;
      background-position: center;
    }

    /* 비율 클래스 */
    .w-60 { width: 60%; }
    .w-50 { width: 50%; }
    .w-40 { width: 40%; }

    /* 텍스트 스타일 */
    .tile h2 {
      font-size: 26px;
      color: #111;
      margin-bottom: 8px;
      font-weight: 700;
    }
    .tile h3 {
      font-size: 22px;
      color: #111;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .tile .price {
      color: #ff3b30;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .tile p.desc {
      color: #666;
      font-size: 14px;
      line-height: 1.5;
    }

    /* 5. 반응형 미디어 쿼리 (창 크기 변동 시) */
    @media (max-width: 1024px) {
      html, body { height: auto; }
      .app-container {
        flex-direction: column;
        height: auto;
      }
      .sidebar {
        width: 100%;
        height: auto;
        padding: 15px 20px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .logo { margin-bottom: 0; font-size: 28px; }
      .menu-group { flex-direction: row; align-items: center; gap: 20px; }
      .menu-title { margin-bottom: 0; }
      .sidebar ul { flex-direction: row; gap: 12px; }

      .row-hero, .row-item { height: 260px; }
    }

    @media (max-width: 640px) {
      .sidebar {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .sidebar ul { flex-wrap: wrap; gap: 8px; }
      .grid-row {
        flex-direction: column;
        height: auto;
      }
      .w-60, .w-50, .w-40 {
        width: 100%;
      }
      .tile-img { height: 200px; }
      .tile { padding: 20px; }
    }
  </style>
</head>
<body>

  <div class="app-container">
    <!-- 1. 좌측 노란색 세로 사이드바 -->
    <aside class="sidebar">
      <h1 class="logo">bhc.</h1>
      <div class="menu-group">
        <p class="menu-title">구매 등<br>링크 기능</p>
        <ul>
          <li><a href="#">- 온라인 주문</a></li>
          <li><a href="#">- E-쿠폰 등록</a></li>
          <li><a href="#">- 매장 찾기</a></li>
          <li><a href="#">- 이벤트 안내</a></li>
        </ul>
      </div>
    </aside>

    <!-- 2. 우측 치킨 그리드 (화면 전체 100vh 꽉 차게) -->
    <main class="main-content">

      <!-- 메인 브랜드 섹션 (60% : 40%) -->
      <div class="grid-row row-hero">
        <!-- 메인 사진 경로 바꾸는 곳 -->
        <div class="tile tile-img w-60" style="background-image: url('images/main.jpg');"></div>
        <div class="tile w-40">
          <h2>BHC 브랜드</h2>
          <p class="desc">바삭함의 정석, BHC 대표 치킨 시리즈</p>
        </div>
      </div>

      <!-- 후라이드 치킨 섹션 (50% : 50%) -->
      <div class="grid-row row-item">
        <!-- 후라이드 사진 경로 바꾸는 곳 -->
        <div class="tile tile-img w-50" style="background-image: url('images/fried.png');"></div>
        <div class="tile w-50">
          <h3>후라이드 치킨</h3>
          <p class="price">20,000원</p>
          <p class="desc">고소하고 바삭한 BHC 대표 기본 후라이드</p>
        </div>
      </div>

      <!-- 양념 치킨 섹션 (50% : 50%) -->
      <div class="grid-row row-item">
        <!-- 양념 치킨 사진 경로 바꾸는 곳 -->
        <div class="tile tile-img w-50" style="background-image: url('images/yangnyeom.jpg');"></div>
        <div class="tile w-50">
          <h3>양념 치킨</h3>
          <p class="price">21,000원</p>
          <p class="desc">매콤달콤 특제 양념 소스의 조합</p>
        </div>
      </div>

      <!-- 뿌링클 치킨 섹션 (50% : 50%) -->
      <div class="grid-row row-item">
        <!-- 뿌링클 치킨 사진 경로 바꾸는 곳 -->
        <div class="tile tile-img w-50" style="background-image: url('images/bburing.jpg');"></div>
        <div class="tile w-50">
          <h3>뿌링클 치킨</h3>
          <p class="price">21,000원</p>
          <p class="desc">시즈닝과 뿌링뿌링 소스의 시그니처 대표 메뉴</p>
        </div>
      </div>

    </main>
  </div>

</body>
</html>

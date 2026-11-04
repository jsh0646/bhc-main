document.addEventListener('DOMContentLoaded', () => {
    // 메뉴 카드 클릭 시 간단한 알림 이벤트 예시
    const menuCards = document.querySelectorAll('.menu-card');

    menuCards.forEach(card => {
        card.addEventListener('click', () => {
            const menuName = card.querySelector('h3').innerText;
            console.log(`선택한 메뉴: ${menuName}`);
        });
    });

    // 네비게이션 스무스 스크롤
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
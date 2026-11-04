document.addEventListener('DOMContentLoaded', () => {
    const widthSpan = document.getElementById('window-width');

    function updateWidth() {
        const currentWidth = window.innerWidth;
        if (widthSpan) {
            widthSpan.textContent = currentWidth;
        }
    }

    // 초기 실행 및 리사이즈 이벤트 바인딩
    updateWidth();
    window.addEventListener('resize', updateWidth);
});

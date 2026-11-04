document.addEventListener('DOMContentLoaded', () => {
    // 셀 클릭 시 선택 안내 인터랙션 예시
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, idx) => {
        cell.addEventListener('click', () => {
            const label = cell.innerText.trim() || '이미지 영역';
            console.log(`[선택된 셀 ${idx + 1}]: ${label}`);
        });
    });
});

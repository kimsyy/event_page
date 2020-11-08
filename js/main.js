/**
 * 스크롤시 양쪽 사이드 코인 움직임
 */
const sideCoins = document.querySelectorAll('.wrap-side-coin .side');
window.addEventListener('scroll', (e) => {
    sideCoins.forEach((coin) => {
        const ratio = coin.getAttribute('data-ratio');
        const num = -(this.scrollY * ratio);
        coin.style.top = `${num}px`;
    });
});

/**
 * 참여하기 버튼 클릭시 레이어 노출
 */
const elBody = document.querySelector('body');
document.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    elBody.classList.add('show-layer');
});

/**
 * 레이어 닫기버튼 클릭시 레이어 비노출
 */
document.querySelector('#btnCloseLayer').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    elBody.classList.remove('show-layer');
});
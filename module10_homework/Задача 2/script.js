const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    alert(`Ширина экрана: ${window.screen.width}px, высота экрана: ${window.screen.height}px`);
});
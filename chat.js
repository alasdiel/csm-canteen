// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('selected');
            alert(`You selected: ${item.querySelector('h3').innerText}`);
        });
    });

    const heroText = document.querySelector('.hero h1');
    heroText.style.animation = 'fade-in 2s ease-in';
});

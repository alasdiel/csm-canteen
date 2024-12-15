// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    keyboard: true,
});

// Modal Functionality
function openModal(title, description) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Dynamic Counters
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.textContent = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.textContent;
        const increment = target / 200;

        if (current < target) {
            counter.textContent = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.textContent = target;
        }
    };
    updateCounter();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

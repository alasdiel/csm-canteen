document.addEventListener('DOMContentLoaded', function () {

    // Smooth Scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Modal functionality for booking
    const bookButton = document.querySelector('#home button');
    const modal = document.createElement('div');
    const modalContent = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Clarify Availability of a Date</h2>
            <form id="bookingForm">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="date" placeholder="Reservation Date" required />
                <input type="time" placeholder="Reservation Time" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    `;
    
    modal.innerHTML = modalContent;
    modal.classList.add('modal');
    document.body.appendChild(modal);
    
    // Show the modal when the user clicks the button
    bookButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Close the modal when the user clicks the 'X'
    modal.querySelector('.close').addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission handling (you can add your server-side logic here)
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('We have received your inquiry on your specified date!');
        modal.style.display = 'none';
    });

    // Scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    // Check if the element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }

    // Add animations to the elements as they scroll into view
    function handleScrollAnimations() {
        animateOnScrollElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Initialize the scroll animations
    window.addEventListener('scroll', handleScrollAnimations);

    // Run once on load
    handleScrollAnimations();
});

// Smooth scroll for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Button hover effect
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

function goToPage() {
    // Redirect to another page, e.g., "learn-more.html"
    window.location.href = "index.html";
}

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const contactForm = document.querySelector('.contact-form');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const footer = document.querySelector('.footer');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll to section when nav link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();

    // Show/hide scroll to top button
    toggleScrollToTopButton();

    // Animate elements on scroll
    animateOnScroll();
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .tool-item, .blog-card');

    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial animations
    setTimeout(() => {
        animateOnScroll();
        updateActiveNavLink();
        toggleScrollToTopButton();
    }, 100);

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

            // Reset form
            this.reset();
        });
    }

    // Create placeholder images folder
    createPlaceholderImages();
});

// Function to create placeholder images folder
function createPlaceholderImages() {
    // This is just a placeholder function to remind that you need to create an assets folder
    // with profile.jpg and project1.jpg, project2.jpg, project3.jpg images
    console.log('Remember to create an assets folder with necessary images');
}

// Scroll to top functionality
function toggleScrollToTopButton() {
    if (!scrollToTopBtn) return;

    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Show button when user is near the footer
    if (footerPosition < windowHeight * 1.2) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

// Scroll to top when button is clicked
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
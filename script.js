
// Premium Toast Notification System
class ToastNotification {
    static init() {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        this.container = container;
    }

    static show(title, message, type = 'success', duration = 5000) {
        if (!this.container) {
            this.init();
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconClass = 'fas fa-check-circle';
        if (type === 'error') iconClass = 'fas fa-exclamation-circle';
        if (type === 'info') iconClass = 'fas fa-info-circle';

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">&times;</button>
        `;

        this.container.appendChild(toast);

        // Slide in animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        const closeBtn = toast.querySelector('.toast-close');
        const dismissToast = () => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        };

        closeBtn.addEventListener('click', dismissToast);

        // Auto dismiss
        if (duration > 0) {
            setTimeout(dismissToast, duration);
        }
    }
}

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
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


    // Email link obfuscation handler to prevent scraping
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', function (e) {
            e.preventDefault();
            // Dynamically construct email on click
            const user = "adarshkumar9172641";
            const domain = "gmail.com";
            window.location.href = `mailto:${user}@${domain}`;
        });
    }

    // Desktop Mail Client Button Handler
    const desktopMailBtn = document.getElementById('desktop-mail-btn');
    if (desktopMailBtn) {
        desktopMailBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const user = "adarshkumar9172641";
            const domain = "gmail.com";
            window.location.href = `mailto:${user}@${domain}?subject=Message%20from%20Portfolio`;
        });
    }

    // Copy Email Address Button Handler with Toast Feedback
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function () {
            const user = "adarshkumar9172641";
            const domain = "gmail.com";
            const email = `${user}@${domain}`;
            
            navigator.clipboard.writeText(email).then(() => {
                ToastNotification.show(
                    "Email Copied!",
                    "My email address has been copied to your clipboard.",
                    "success"
                );
            }).catch(err => {
                console.error("Failed to copy:", err);
                ToastNotification.show(
                    "Copy Failed",
                    `Please copy manually: ${email}`,
                    "error"
                );
            });
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
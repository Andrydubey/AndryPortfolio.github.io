// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Log form data (replace with actual form submission)
        console.log('Form submitted:', data);
        
        // Show thank you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.className = 'thank-you-message';
        thankYouMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        contactForm.appendChild(thankYouMessage);
        
        // Clear form
        contactForm.reset();
        
        // Remove thank you message after 5 seconds
        setTimeout(() => {
            thankYouMessage.remove();
        }, 5000);
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// More robust Circular Progress Animation
document.addEventListener('DOMContentLoaded', function() {
    const progressCircles = document.querySelectorAll('.progress-ring-circle');
    
    progressCircles.forEach(circle => {
        // Get the parent skill-progress element
        const skillProgress = circle.closest('.skill-progress');
        const percent = skillProgress.getAttribute('data-progress');
        
        // Calculate the circle's properties
        const radius = circle.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        
        // Set the stroke-dasharray and stroke-dashoffset
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        // Force recalculation to trigger animation
        circle.getBoundingClientRect();
        
        // Immediately set initial state again to ensure animation runs
        requestAnimationFrame(() => {
            circle.style.strokeDashoffset = circumference;
            
            // Then animate the progress with a slight delay
            setTimeout(() => {
                const offset = circumference - (percent / 100) * circumference;
                circle.style.strokeDashoffset = offset;
                
                // Update the text to match the animation
                const textElement = skillProgress.querySelector('.progress-text');
                if (textElement) {
                    let count = 0;
                    const interval = setInterval(() => {
                        count += 1;
                        if (count <= percent) {
                            textElement.textContent = `${count}%`;
                        } else {
                            clearInterval(interval);
                        }
                    }, 2000 / percent);
                }
            }, 300);
        });
    });
});

// Email Copy Button
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const emailText = document.querySelector('.email-text').textContent;
        navigator.clipboard.writeText(emailText).then(() => {
            const originalIcon = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                this.innerHTML = originalIcon;
            }, 2000);
        });
    });
} 
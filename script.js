document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Language Toggle System ---
    const langBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // Load saved language
    const currentLang = localStorage.getItem('language');
    if (currentLang === 'en') {
        body.classList.add('en-mode');
        langBtn.textContent = 'TH';
    } else {
        langBtn.textContent = 'EN';
    }

    // Toggle click event
    langBtn.addEventListener('click', () => {
        body.classList.toggle('en-mode');
        
        if (body.classList.contains('en-mode')) {
            localStorage.setItem('language', 'en');
            langBtn.textContent = 'TH';
        } else {
            localStorage.setItem('language', 'th');
            langBtn.textContent = 'EN';
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

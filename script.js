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

    // --- 2. Mobile Menu Toggle (สำคัญมากสำหรับมือถือ) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // สลับคลาส active เพื่อโชว์/ซ่อน
            
            // เปลี่ยนไอคอน (ถ้าอยากให้ดูโปร)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // เปลี่ยนเป็นกากบาท
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // กดลิงก์แล้วให้เมนูหุบเก็บเอง
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});

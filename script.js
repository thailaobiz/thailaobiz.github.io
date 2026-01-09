document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ระบบสลับภาษา (Fixed Logic) ---
    const langBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // ตรวจสอบภาษาที่บันทึกไว้
    if (localStorage.getItem('language') === 'en') {
        body.classList.add('en-mode');
        langBtn.textContent = 'TH';
    }

    langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('en-mode');
        
        if (body.classList.contains('en-mode')) {
            localStorage.setItem('language', 'en');
            langBtn.textContent = 'TH';
        } else {
            localStorage.setItem('language', 'th');
            langBtn.textContent = 'EN';
        }
    });

   // --- 2. ระบบเมนูมือถือ (CLEAN & SAFE VERSION) ---
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // คลิกที่ลิงก์แล้วให้เมนูปิดตัวลงเอง
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

}


    // --- 3. Google Sheets Form (เดิม) ---
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyK5s6IukfFynzbpIJxqpm7UN0yEwKnYkhDTJcRoacWSj8XovVyq9z_gQuzCezufsY9/exec'; // ใส่ URL เดิมของคุณ
    const form = document.getElementById('google-sheet-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const successMsg = document.getElementById('form-success');
            btn.disabled = true;
            btn.innerText = 'Sending...';

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    btn.style.display = 'none';
                    successMsg.style.display = 'block';
                    form.reset();
                })
                .catch(error => {
                    btn.disabled = false;
                    btn.innerText = 'Try Again';
                });
        });
    }
});

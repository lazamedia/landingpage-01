// Perintah Untuk Mengaktifkan Hamburger
const hamburger = document.querySelector('.hamburger');

const navLinks = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        navMenu.classList.toggle('showMenu');
    });
});

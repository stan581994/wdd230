document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.addEventListener('click', function () {
        if (mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
            hamburger.classList.remove('is-active');
            hamburger.innerHTML = "&#9776;"; // Change back to hamburger icon
        } else {
            mobileNav.style.display = "block";
            hamburger.classList.add('is-active');
            hamburger.innerHTML = "X"; // Change to "X"
        }
    });
});
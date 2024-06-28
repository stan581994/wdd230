document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(darkModeToggle.textContent==="🔆"){
        darkModeToggle.textContent = "🕶️";
    }else{
        darkModeToggle.textContent = "🔆";
    }
});
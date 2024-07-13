document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.hero span').classList.toggle('menu-active');
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


document.getElementById('rpass').addEventListener('focusout', function() {
    var password = document.getElementById('pass');
    var repeatPassword = document.getElementById('rpass');
    
    if (password.value !== repeatPassword.value) {
        alert('Passwords do not match. Please try again.');
        password.value = ''; // Clear the password field
        repeatPassword.value = ''; // Clear the repeat password field
        password.focus(); // Set focus back to the password field
    }
});


// VISIT COUNTER
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

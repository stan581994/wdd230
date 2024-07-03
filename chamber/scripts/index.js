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

// Step 1: Retrieve the last visit date from localStorage
const lastVisit = localStorage.getItem('lastVisitDate');
const currentDate = new Date();
let message = "";

// Step 2: Check if the user has visited before
if (lastVisit === null) {
  // This is the user's first visit
  message = "Welcome! Let us know if you have any questions.";
} else {
  // Parse the last visit date and calculate the difference in days
  const lastVisitDate = new Date(lastVisit);
  const differenceInTime = currentDate.getTime() - lastVisitDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // Step 3: Determine the message based on the time difference
  if (differenceInDays < 1) {
    // The visit is within the same day
    message = "Back so soon! Awesome!";
  } else {
    // The visit is on different days
    // Adjust the message for singular or plural days
    const dayWord = differenceInDays === 1 ? "day" : "days";
    message = `You last visited ${differenceInDays} ${dayWord} ago.`;
  }
}

// Step 4: Display the message in the specific <p> tag inside the .userVisit div
document.querySelector('.userVisit p').innerText = message;

// Step 5: Update the last visit date in localStorage
localStorage.setItem('lastVisitDate', currentDate.toISOString());
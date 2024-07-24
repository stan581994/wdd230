const events = [
  { title: "Community Clean-Up", description: "Join us this Saturday for a community clean-up event at the local park." },
  { title: "Charity Bake Sale", description: "Support our local charity by buying some delicious homemade treats." },
  { title: "Outdoor Concert", description: "Enjoy an evening of live music at the downtown plaza this Friday." },
  { title: "Art Exhibition", description: "Explore the latest art exhibition featuring local artists at the city gallery." },
  { title: "Tech Workshop", description: "Learn about the latest in technology at our free workshop next week." }
];


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

// Call the function to display events
displayEvents();

generateAds();  

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

document.getElementById('timestamp').value = new Date().toISOString();


document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().getDay();
    var banner = document.getElementById('meetGreetBanner');
    
    // Hide the banner if it's not Monday (1), Tuesday (2), or Wednesday (3)
    if (today < 1 || today > 3) {
        banner.style.display = 'none';
    }
});

function closeBanner() {
    document.getElementById('meetGreetBanner').style.display = 'none';
}
// Assuming this is added after the closeBanner function
async function generateAds() {
    try {
        // Fetch data from members.json
        const response = await fetch('https://stan581994.github.io/wdd230/chamber/data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const eligibleCompanies = data.filter(company => 
            company.membershipLevel === "Silver Membership" || 
            company.membershipLevel === "Gold Membership"
        );
        const shuffledCompanies = shuffleArray(eligibleCompanies);
        populateCompanies(shuffledCompanies.slice(0, 3));
    } catch (error) {
        console.error("Failed to fetch and process members.json:", error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function populateCompanies(companies) {
    const container = document.getElementById('companySpotlights'); // Ensure this ID matches your HTML container
    container.innerHTML = ''; // Clear existing content

    companies.forEach(company => {
        const companyHTML = `
            <div class="company">
                <h4>${company.name}</h4>
                <p>${company.description}</p>
                <p>${company.phone}</p>
                <p><a href=#>${company.website}</a></p>
            </div>
        `;
        container.innerHTML += companyHTML;
    });
}


// Function to generate random events
function generateRandomEvents(numEvents) {
  const shuffled = events.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, numEvents); // Get the first `numEvents` items
}

// Function to display events
function displayEvents() {
  const eventsContainer = document.getElementById('events-container');
  const randomEvents = generateRandomEvents(2); // Generate 2 random events

  randomEvents.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.innerHTML = `<h4>${event.title}</h4><p>${event.description}</p><hr>`;
      eventsContainer.appendChild(eventElement);
  });
}



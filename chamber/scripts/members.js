async function fetchMembers() {
  // Fetch data from member.json
  const response = await fetch('https://stan581994.github.io/wdd230/chamber/data/members.json');
  const members = await response.json();

  // Select the container where the cards will be displayed
  const container = document.getElementById('membersContainer');

  // Loop through each member in the JSON data
  members.forEach(member => {
	// Create a card element
	const card = document.createElement('div');
	card.className = 'member-card';

	// Create an image element and set the source
	const image = document.createElement('img');
	image.src = member.image;
	image.alt = 'Member Image';
	image.className = 'member-image';

	// Create a paragraph for the name
	const name = document.createElement('p');
	name.textContent = member.name;
	name.className = 'member-name';

	// Create a paragraph for the address
	const address = document.createElement('p');
	address.textContent = `Address: ${member.address}`;
	address.className = 'member-address';

	// Create a paragraph for the phone number
	const phone = document.createElement('p');
	phone.textContent = `Phone: ${member.phone}`;
	phone.className = 'member-phone';

	// Create a paragraph for other details (optional)
	const details = document.createElement('p');
	details.textContent = `Details: ${member.details}`;
	details.className = 'member-details';

     // Create a paragraph for the membership level
     const membershipLevel = document.createElement('p');
     membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
     membershipLevel.className = 'member-membership-level';

	// Append elements to the card
	card.appendChild(image);
	card.appendChild(name);
	card.appendChild(address);
	card.appendChild(phone);
	card.appendChild(details);
    card.appendChild(membershipLevel);

	// Append the card to the container
	container.appendChild(card);
  });
}

fetchMembers();
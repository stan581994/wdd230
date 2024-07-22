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

    // Create a div for the image
    const imageDiv = document.createElement('div');
    imageDiv.className = 'member-image-div';

    // Create an image element and set the source
    const image = document.createElement('img');
    image.src = member.image;
    image.alt = 'Member Image';
    image.className = 'member-image';
    imageDiv.appendChild(image); // Append image to the imageDiv

    // Create a div for details
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'member-details-div';

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
    details.textContent = `Details: ${member.description}`;
    details.className = 'member-details';

    // Create a paragraph for the membership level
    const membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    membershipLevel.className = 'member-membership-level';

    // Append text details to the detailsDiv
    detailsDiv.appendChild(name);
    detailsDiv.appendChild(address);
    detailsDiv.appendChild(phone);
    detailsDiv.appendChild(details);
    detailsDiv.appendChild(membershipLevel);

    // Append imageDiv and detailsDiv to the card
    card.appendChild(imageDiv);
    card.appendChild(detailsDiv);

    // Append the card to the container
    container.appendChild(card);
  });
}

fetchMembers();

async function fetchMembersAndDisplayInTable() {
  // Fetch data from members.json
  const response = await fetch('https://stan581994.github.io/wdd230/chamber/data/members.json');
  const members = await response.json();

  // Select the container where the table will be displayed
  const container = document.getElementById('membersContainerText');

  // Create a table element
  const table = document.createElement('table');
  table.className = 'members-table';

  // Create a table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['Name', 'Membership Level', 'Phone Number'];
  headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create a table body
  const tbody = document.createElement('tbody');

  // Loop through each member in the JSON data
  members.forEach(member => {
    // Create a row for each member
    const row = document.createElement('tr');

    // Create and append the name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = member.name;
    row.appendChild(nameCell);

    // Create and append the membership level cell
    const membershipLevelCell = document.createElement('td');
    membershipLevelCell.textContent = member.membershipLevel;
    row.appendChild(membershipLevelCell);

    // Create and append the phone number cell
    const phoneCell = document.createElement('td');
    phoneCell.textContent = member.phone;
    row.appendChild(phoneCell);

    // Append the row to the tbody
    tbody.appendChild(row);
  });

  // Append the tbody to the table
  table.appendChild(tbody);

  // Append the table to the container
  container.appendChild(table);
}

fetchMembersAndDisplayInTable();

// Add event listener to the toggle view button
document.getElementById('toggleViewBtn').addEventListener('click', function () {
  const container = document.getElementById('membersContainer');
  const containerText = document.getElementById('membersContainerText');

  // Check if the container currently has the class for grid view
  if (container.classList.contains('grid-view')) {
    container.classList.remove('grid-view'); // Remove grid view class
    container.style.display = 'none'; // Hide grid container
    containerText.style.display = ''; // Show text container
  } else {
    container.classList.add('grid-view'); // Add grid view class
    container.style.display = ''; // Show grid container
    containerText.style.display = 'none'; // Hide text container
  }
});
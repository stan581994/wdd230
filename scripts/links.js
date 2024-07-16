const baseURL = "https://stan581994.github.io/wdd230/";
const linksURL = "https://stan581994.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);  
    displayLinks(data);
  }

  getLinks();

  const listContainer = document.getElementById('learningActivitiesList'); 
  

  const displayLinks = (data) => { 
    console.log(data);
    data.weeks.forEach(week => {
        console.log(week);
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week + ': ';
        
        week.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            
            weekItem.appendChild(linkElement);
            
            // Add a comma for all but the last link
            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(', '));
            }
        });

        listContainer.appendChild(weekItem);
    });
  }
function setFooterDates() {
    const footer = document.querySelector('footer');
    // Create paragraph elements for the dates
    const currentYearPara = document.createElement('p');
    const lastModifiedPara = document.createElement('p');

    // Get the current year
    const currentYear = new Date().getFullYear();
    currentYearPara.innerHTML = `©️ ${currentYear} ⭐ Steven Tan  ⭐ Philippines`;

    // Get the last modified date
    const lastModified = document.lastModified;
    lastModifiedPara.textContent = `Last Modified: ${lastModified}`;

    // Create an image element for the flag
    const flagImg = document.createElement('img');
    flagImg.src = 'images/ph_flag.png';
    flagImg.width = '75';
    flagImg.height = '50';

    // Append the paragraphs to the footer
    footer.appendChild(currentYearPara);
    footer.appendChild(flagImg);
    footer.appendChild(lastModifiedPara);

    console.log("testing if JS is running");
}
    // Run the function once the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', setFooterDates);
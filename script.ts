// Select all navigation links
const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("nav a");

// Loop through links
links.forEach((link: HTMLAnchorElement) => {

    // Add click event
    link.addEventListener("click", (): void => {
        alert("Navigating to section");
    });

});

// Console message
console.log("Welcome to Renu Sree's Portfolio");
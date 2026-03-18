var links = document.querySelectorAll("nav a");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        alert("Navigating to section");
    });
});
console.log("Welcome to Renu Sree's Portfolio");
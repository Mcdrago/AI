console.log("Portfolio Loaded");

// Example small interaction
document.querySelectorAll("section").forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.style.opacity = 0.8;
    });

    section.addEventListener("mouseleave", () => {
        section.style.opacity = 1;
    });
});

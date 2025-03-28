document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded Successfully!");

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Image Hover Effect for Work Section
    const workImages = document.querySelectorAll(".work-container img");

    workImages.forEach(img => {
        img.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        img.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm)

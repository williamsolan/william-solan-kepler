document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        if (this.getAttribute('href').startsWith("#")) {
            event.preventDefault(); // Stop default anchor jump
            let target = document.querySelector(this.getAttribute('href'));

            // If targeting #form-section, adjust to its <h2>
            if (target && target.id === "form-section") {
                target = target.querySelector("h2");
            }

            let navbar = document.querySelector('.navbar-collapse');

            // Collapse navbar if open
            if (navbar.classList.contains('show')) {
                new bootstrap.Collapse(navbar).hide();
            }

            // Scroll smoothly to the target
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed navbar height
                behavior: "smooth"
            });
        }
    });
});
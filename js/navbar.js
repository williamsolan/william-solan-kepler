document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        // Check if it's an internal link
        if (this.getAttribute('href').startsWith("#")) {
            event.preventDefault(); // Prevent default jump behavior
            let target = document.querySelector(this.getAttribute('href'));
            let navbar = document.querySelector('.navbar-collapse');

            // Collapse navbar
            if (navbar.classList.contains('show')) {
                new bootstrap.Collapse(navbar).hide();
            }

            // Scroll to the target section smoothly
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed navbar height
                behavior: "smooth"
            });
        }
    });
});
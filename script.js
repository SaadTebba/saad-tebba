// TODO ========================= Sticky Header ==============================


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});


// TODO ========================= Scroll To Top Button ==============================


const scrollToTopButton = document.getElementById("backToTopBtn");
if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        scrollToTopButton.blur();
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight / 2) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
        let scrollPos = window.scrollY + window.innerHeight / 2;

    });
}



// TODO ========================= Navbar items style ==============================


const navButtons = document.querySelectorAll(".ul_list_navbar, .navbar-nav .styled-button-link");
// Include all sections that should be tracked
const sections = document.querySelectorAll("section, #home, #services, #portfolio, #skills");

function updateActiveNav() {
    // 1. Check if we are at the bottom of the page => Activate Contact
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        navButtons.forEach(btn => btn.classList.remove("active"));
        const contactBtn = document.querySelector('a[href*="contact"] .ul_list_navbar, a[href*="contact"].styled-button-link, .navbar-nav a[href*="contact"] .styled-button-link');
        if (contactBtn) contactBtn.classList.add("active");
        return;
    }

    // 2. Page Specific Logic
    if (window.location.pathname.includes("portfolio.html")) {
        // On Portfolio Page: Default to 'Portfolio' active, unless at bottom (handled above)
        navButtons.forEach(btn => btn.classList.remove("active"));
        const portfolioBtn = document.querySelector('a[href*="portfolio"] .ul_list_navbar, a[href*="portfolio"].styled-button-link');
        if (portfolioBtn) portfolioBtn.classList.add("active");

    } else {
        // On Index Page: Standard Scroll Spy
        let current = "";
        sections.forEach((sec) => {
            const sectionTop = sec.offsetTop;
            // Use a large offset to trigger early (e.g., when section is near top of viewport)
            if (window.scrollY >= sectionTop - 150) {
                const id = sec.getAttribute("id");
                if (id) current = id;
            }
        });

        navButtons.forEach((btn) => {
            btn.classList.remove("active");
            const parentLink = btn.closest("a");
            if (current && parentLink && parentLink.getAttribute("href").includes(current)) {
                btn.classList.add("active");
            }
        });

        // Handle Home active state at very top explicitly
        if (window.scrollY < 100) {
            const homeBtn = document.querySelector('a[href="#home"] .ul_list_navbar, a[href="index.html"] .ul_list_navbar');
            if (homeBtn) {
                navButtons.forEach(btn => btn.classList.remove("active"));
                homeBtn.classList.add("active");
            }
        }
    }
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


// TODO ========================= Send Mail ==============================


function sendMail() {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_e83sk0f", "template_j8fxfah", parms)
        .then(res => {
            alert("Success! " + res.status);
        })
        .catch(err => {
            alert("Error: " + err.text);
        });
}

(function () {
    // Only init if emailjs is available
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "UObm9ayr9BB7Cx7kb",
        });
    }
})();

// TODO ========================= Smooth Scrolling ==============================


$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            var target = $(hash);
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {
                    window.location.hash = hash;
                });
            }
        }
    });

    // Projects initialized in projects.js

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});


// TODO ========================= Mobile Menu Toggle ==============================

const checkbox = document.getElementById('checkbox');
if (checkbox) {
    checkbox.addEventListener('change', function () {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (this.checked) {
            navbarCollapse.classList.add('show');
        } else {
            navbarCollapse.classList.remove('show');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const toggleLabel = document.querySelector('label[for="checkbox"]');
        const checkbox = document.getElementById('checkbox');

        if (navbarCollapse.classList.contains('show') &&
            !navbarCollapse.contains(event.target) &&
            !toggleLabel.contains(event.target) &&
            event.target !== checkbox) {

            navbarCollapse.classList.remove('show');
            checkbox.checked = false;
        }
    });

    document.querySelectorAll('.nav-link, .submit-button a').forEach(link => {
        link.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            checkbox.checked = false;
            navbarCollapse.classList.remove('show');
        });
    });
}


// Logic moved to projects.js to avoid duplication


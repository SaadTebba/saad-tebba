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

    // Initialize Projects Rendering
    initProjects();

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


// TODO ========================= Dynamic Projects Rendering ==============================

function initProjects() {
    // Check if we are on index.html or portfolio.html
    const indexContainer = document.getElementById("portfolio-countr");
    const portfolioContainer = document.getElementById("portfolio-container-all");
    const loadMoreBtn = document.getElementById("load-more-btn");

    if (indexContainer) {
        // Render first 3 projects as requested
        renderProjects(projects.slice(0, 3), indexContainer);
    }

    if (portfolioContainer) {
        let currentCount = 0;
        const perPage = 6;

        // Initial render
        const initialBatch = projects.slice(0, perPage);
        renderProjects(initialBatch, portfolioContainer);
        currentCount += perPage;

        if (currentCount >= projects.length) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        }

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                const nextBatch = projects.slice(currentCount, currentCount + perPage);
                renderProjects(nextBatch, portfolioContainer);
                currentCount += perPage;

                if (currentCount >= projects.length) {
                    loadMoreBtn.style.display = 'none';
                }
            });
        }
    }
}

function renderProjects(projectList, container) {
    projectList.forEach((project, index) => {
        // Create column div
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 col-12 cursor-pointer-portfolio mb-4"; // Reverted to col-lg-4 as per user request to display 3 items per row

        // Add AOS Animation
        col.setAttribute("data-aos", "fade-up");
        col.setAttribute("data-aos-delay", (index % 3) * 100); // Stagger delay

        // Create card div
        const card = document.createElement("div");
        card.className = "cardy h-100 d-flex flex-column";
        card.setAttribute("data-bs-toggle", "modal");
        card.setAttribute("data-bs-target", "#project-modal");

        // HTML Content
        card.innerHTML = `
            <div class="img-wrapper overflow-hidden rounded mb-3">
                <img src="${project.image1}" alt="${project.title}" class="portfolio-img w-100" style="height: 200px; object-fit: cover;" loading="lazy" decoding="async">
            </div>
            <p class="card-titles mb-2">${project.title}</p>
            <p class="card-bodies mb-3 flex-grow-1">${project.description.substring(0, 100)}...</p>
            <div class="mt-auto">
                 <button class="custom-read-more-btn">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15px" width="15px" class="icon">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" stroke="#6428E3" d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"></path>
                  </svg>
                </button>
            </div>
        `;

        // Add Click Event to Populate Modal
        card.addEventListener("click", () => populateModal(project));

        col.appendChild(card);
        container.appendChild(col);
    });
}

function populateModal(project) {
    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-img1").src = project.image1;
    document.getElementById("modal-img2").src = project.image2;
    document.getElementById("modal-overview").innerText = project.overview;
    document.getElementById("modal-description").innerText = project.description;

    // Tech Stack
    const techList = document.getElementById("modal-tech-list");
    techList.innerHTML = "";
    project.tech.forEach(tech => {
        const li = document.createElement("li");
        li.innerText = tech;
        techList.appendChild(li);
    });

    // Features (assuming features is an array, if string handle accordingly)
    const featuresEl = document.getElementById("modal-features");
    if (Array.isArray(project.features)) {
        featuresEl.innerHTML = project.features.map(f => `<br>• ${f}`).join("");
    } else {
        featuresEl.innerText = project.features;
    }

    document.getElementById("modal-process").innerText = project.process;
    document.getElementById("modal-impact").innerText = project.impact;

    // Details List (Role, Date, etc.)
    const detailsList = document.getElementById("modal-details-list");
    detailsList.innerHTML = `
        <li>👤 Role — ${project.role}</li>
        <li>🗓️ Date & Timeline — ${project.date}</li>
        <li>🎯 Sector — ${project.sector}</li>
        <li>👥 Team Size — ${project.team}</li>
    `;
}


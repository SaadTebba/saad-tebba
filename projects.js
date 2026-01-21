const projects = [
    {
        id: "espresso",
        title: "Espresso Essence - Landing Pages",
        category: "Coffee / Service",
        image1: "Images/Portfolio/espresso-essence1.webp",
        image2: "Images/Portfolio/espresso-essence2.webp",
        description: "Developed two landing pages — one for the brand and one for a specific service — with high‑impact visuals and straightforward messaging.",
        role: "Web Developer",
        date: "December 2025 · 2 weeks",
        sector: "Coffee / Service",
        overview: "Developed two high‑impact landing pages for a specialty coffee brand, one for the overall brand presence, and one focused on a key service offering. The goal was to showcase the brand’s identity, attract new customers, and increase engagement. I crafted clean, visually appealing layouts with clear calls-to-action, ensuring visitors could easily understand the brand story and take action. The pages were fully responsive, fast-loading, and optimized for desktop and mobile audiences.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Clean conversion‑focused layouts", "Integrated with Mailerlite forms", "Fast load and responsive design"],
        process: "Designed and implemented high-conversion landing pages focusing on brand aesthetics and user engagement.",
        impact: "Increased engagement and lead capture through simplified, attractive landing experiences."
    },
    {
        id: "chickendelight",
        title: "Chicken Delight – Restaurant Website",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/chicken-delight1.webp",
        image2: "Images/Portfolio/chicken-delight2.webp",
        description: "Redesigned the Chicken Delight websites to modernize their online presence, improve usability, and create a responsive, engaging experience for customers.",
        role: "Web Designer & Front‑End Developer",
        date: "January 2026 · 3 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Redesigned the Chicken Delight websites to modernize their online presence, improve usability, and create a responsive, engaging experience for customers. Converted a static HTML design into a custom WordPress theme, integrating WooCommerce and custom plugins to streamline ordering and content management.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "WordPress", "WooCommerce"],
        features: ["Fully responsive design for desktop and mobile", "Modern layout with clear menu and ordering flow", "Custom WordPress theme with integrated WooCommerce", "Smooth navigation and interactive elements"],
        process: "Focused on translating a static HTML design into a functional WordPress site while maintaining fast load times, clean code, and easy content management for the client. Implemented custom plugins to enhance functionality and user experience.",
        impact: "Enhanced online visibility, improved customer experience, and simplified backend management for the restaurant. Visitors can easily view menus, place orders, and navigate the site on any device."
    },
    {
        id: "rentalx",
        title: "RentalX – Real Estate Platform ",
        category: "Real Estate",
        image1: "Images/Portfolio/rentalx1.webp",
        image2: "Images/Portfolio/rentalx2.webp",
        description: "Complex real estate site with listings, search filters, and backend integration. Converted to WordPress for easy content management.",
        role: "Full Stack Developer",
        date: "October 2025 · 1 month",
        sector: "Real Estate",
        overview: "Complex real estate site with listings, search filters, and backend integration. Converted to WordPress for easy content management.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "WordPress"],
        features: ["Property listing modules", "Search and filtering", "Admin content control"],
        process: "Developed a custom property management solution and integrated it into a user-friendly WordPress theme.",
        impact: "Improved client’s ability to manage properties and user discovery experience."
    },
    {
        id: "abrakadabra",
        title: "Abrakadabra – Kindergarten",
        category: "Education / Preschool",
        image1: "Images/Portfolio/abrakadabra1.webp",
        image2: "Images/Portfolio/abrakadabra2.webp",
        description: "Redesigned the kindergarten’s online presence to improve clarity, layout, and branding.",
        role: "Web Designer & Front‑End Developer",
        date: "September 2025 · 3 weeks",
        sector: "Education / Preschool",
        overview: "Redesigned the kindergarten’s online presence to improve clarity, layout, and branding. The focus was on creating a friendly, readable, and accessible one‑page layout that reflects a child‑centric institution.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Clean, responsive layout for all devices", "Updated visual hierarchy and typography", "Smooth interactions and navigation"],
        process: "Focused on creating a child-friendly and accessible design while ensuring information is easy to find for parents.",
        impact: "Improved user experience and presentation for parents and visitors by making key information easily accessible."
    },
    {
        id: "techcare",
        title: "TechCare – Healthcare Dashboard",
        category: "Healthcare Tech",
        image1: "Images/Portfolio/techcare1.webp",
        image2: "Images/Portfolio/techcare2.webp",
        description: "Developed a comprehensive dashboard for doctors to track appointments, patients, schedules, messages, and transactions.",
        role: "Full Stack Developer",
        date: "August 2025 · 2 months",
        sector: "Healthcare Tech",
        overview: "Developed a comprehensive dashboard for doctors to track appointments, patients, schedules, messages, and transactions with custom WordPress plugins and React components.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "React JS", "PHP", "WordPress"],
        features: ["Appointment & schedule management", "Messaging system", "Patient tracking"],
        process: "Built a robust dashboard to streamline clinic operations and improve data visibility for healthcare professionals.",
        impact: "Streamlined clinic operations and improved data visibility for healthcare professionals."
    },
    {
        id: "globewide",
        title: "GlobeWide – Travel / Services",
        category: "Travel / Services",
        image1: "Images/Portfolio/globewide1.webp",
        image2: "Images/Portfolio/globewide2.webp",
        description: "Built a responsive showcase site emphasizing travel services and key offerings.",
        role: "Web Developer",
        date: "November 2025 · 1 week",
        sector: "Travel / Services",
        overview: "Built a responsive showcase site emphasizing travel services and key offerings.",
        tech: ["HTML5", "CSS3", "JS", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Service overview"],
        process: "Designed a visually appealing platform to highlight travel destinations and services.",
        impact: "Improved discoverability and engagement for travel services."
    },
    {
        id: "wheatsheaf",
        title: "Whatshelf Brands",
        category: "Corporate",
        image1: "Images/Portfolio/wheatsheafbrands1.webp",
        image2: "Images/Portfolio/wheatsheafbrands2.webp",
        description: "Developed a responsive showcase site to highlight the brand and services.",
        role: "Front‑End Developer",
        date: "September 2025 · 4 weeks",
        sector: "[Use public info if available]",
        overview: "Developed a responsive showcase site to highlight the brand and services.",
        tech: ["HTML5", "CSS3", "JS", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Service highlights"],
        process: "Created a modern and responsive design to effectively communicate the brand's value proposition.",
        impact: "Improved brand presentation and user accessibility online."
    },
    {
        id: "macbookstore",
        title: "MacBook Store",
        category: "E-Commerce",
        image1: "Images/Portfolio/macbookstore1.webp",
        image2: "Images/Portfolio/macbookstore2.webp",
        description: "Specialized e-commerce store for Apple products and accessories.",
        role: "E-Commerce Developer",
        date: "2024",
        sector: "Retail",
        overview: "Niche store for MacBook users.",
        tech: ["WooCommerce"],
        features: ["Product configuration", "Apple-style aesthetics", "Secure checkout"],
        process: "Recreated the premium feel of Apple's digital experience.",
        impact: "Captured niche market sales for accessories."
    },
    {
        id: "marzouk",
        title: "Marzouk Formation",
        category: "WordPress Website",
        image1: "Images/Portfolio/marzouk formation 1.webp",
        image2: "Images/Portfolio/marzouk formation 2.webp",
        description: "A multilingual WordPress site for a training agency helping people secure jobs in Germany.",
        role: "Full Stack Developer, UX/UI Designer",
        date: "April 2024 · 3 weeks",
        sector: "Education / Vocational Training",
        overview: "Marzouk Formation is a WordPress website built entirely by me. The site offers services to help people secure work contracts in Germany.",
        tech: ["Figma", "WordPress", "PHP", "HTML5/CSS3", "JavaScript"],
        features: ["Multilingual content (AR/FR/DE)", "Eight vocational domains", "Responsive design"],
        process: "Started with discovery phase, developed site structure, sketched wireframes, and built custom WordPress theme.",
        impact: "Client was very satisfied with design and speed. Helps potential students clearly see their options."
    },
    {
        id: "berlincafe",
        title: "Berlin Cafe – Restaurant Showcase",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/berlincafe1.webp",
        image2: "Images/Portfolio/berlincafe2.webp",
        description: "Built a showcase website to present the café’s offerings, atmosphere, and contact details with a focus on visual appeal and cross‑device performance.",
        role: "Web Developer",
        date: "January 2026 · 1 week",
        sector: "Café / Hospitality",
        overview: "Built a showcase website to present the café’s offerings, atmosphere, and contact details with a focus on visual appeal and cross‑device performance.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout for all screens", "Highlighted services and menus", "Contact and location focus"],
        process: "Developed a visually engaging layout to showcase the cafe's atmosphere and menu options.",
        impact: "Improved discoverability and visitor interaction by providing a clear, professional online presence."
    },
    {
        id: "labasta",
        title: "La Basta – Restaurant",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/la-basta1.webp",
        image2: "Images/Portfolio/la-basta2.webp",
        description: "Created a responsive showcase site for the Amsterdam restaurant, emphasizing menu, ambiance, and reservations info for local and visiting diners.",
        role: "Front‑End Developer",
        date: "December 2025 · 4 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Created a responsive showcase site for the Amsterdam restaurant, emphasizing menu, ambiance, and reservations info for local and visiting diners.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile‑optimized design", "Highlight sections for menu and ambience", "Contact and reservation info"],
        process: "Focused on creating an inviting online atmosphere that mirrors the restaurant's physical ambiance.",
        impact: "Improved online engagement and helped users quickly access essential restaurant details."
    },
    {
        id: "atoca",
        title: "Atoca – Restaurant Website",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/atoca1.webp",
        image2: "Images/Portfolio/atoca2.webp",
        description: "Developed a fully responsive site to showcase the restaurant’s menu, story, and ambiance.",
        role: "Front‑End Developer",
        date: "October 2025 · 2 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Developed a fully responsive site to showcase the restaurant’s menu, story, and ambiance. The design emphasizes readability and user engagement for both diners and search traffic.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile‑first responsive design", "Menu highlights with clear calls to action", "Fast‑loading performance"],
        process: "Implemented a mobile-first approach to ensure a seamless experience for users on all devices.",
        impact: "Enhanced online visibility and helped potential customers quickly find key information, improving conversions from browsing to booking."
    },
    {
        id: "foray",
        title: "Foray Club – Café / Eatery",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/foray-club1.webp",
        image2: "Images/Portfolio/foray-club2.webp",
        description: "Built a responsive showcase site to present the café’s offerings and atmosphere, with emphasis on visuals and ease of navigation.",
        role: "Front‑End Developer",
        date: "September 2025 · 1 month",
        sector: "Café / Hospitality",
        overview: "Built a responsive showcase site to present the café’s offerings and atmosphere, with emphasis on visuals and ease of navigation.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Clear service descriptions", "Fast, lightweight pages"],
        process: "Created a clean and efficient layout to enhance content readability and site performance.",
        impact: "Strengthened the café’s online presence and accessibility for customers."
    },
    {
        id: "caffenaopli",
        title: "Cafe Napoli – Italy",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/caffe-naopli1.webp",
        image2: "Images/Portfolio/caffe-naopli2.webp",
        description: "Developed a responsive showcase site tailored for the café’s brand and local visitor needs.",
        role: "Web Developer",
        date: "August 2025 · 3 weeks",
        sector: "Café / Hospitality",
        overview: "Developed a responsive showcase site tailored for the café’s brand and local visitor needs.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile‑friendly layout", "Highlight of specialties and atmosphere", "Contact info focus"],
        process: "Designed a site that captures the local charm and brand identity of Cafe Napoli.",
        impact: "Enhanced discoverability and ease of use for potential customers."
    },
    {
        id: "palacess",
        title: "Palacess – Nigerian Food Restaurant",
        category: "Restaurant / Cultural Cuisine",
        image1: "Images/Portfolio/palacess1.webp",
        image2: "Images/Portfolio/palacess2.webp",
        description: "Showcase site for a UK restaurant specializing in Nigerian cuisine, focusing on menu and cultural experience.",
        role: "Front‑End Developer",
        date: "November 2025 · 2 weeks",
        sector: "Restaurant / Cultural Cuisine",
        overview: "Showcase site for a UK restaurant specializing in Nigerian cuisine, focusing on menu and cultural experience.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Menu and culture focus", "Visual branding"],
        process: "Developed a visually rich site that highlights the cultural heritage and culinary offerings.",
        impact: "Helped present the restaurant’s offerings to a wider audience and improved user engagement."
    },
    {
        id: "callanswering",
        title: "Call Answering – Landing Page",
        category: "Service/Communications",
        image1: "Images/Portfolio/callanswering1.webp",
        image2: "Images/Portfolio/callanswering2.webp",
        description: "Landing page promoting call answering services with clear messaging and contact focus.",
        role: "Front‑End Developer",
        date: "January 2026 · 3 days",
        sector: "Service/Communications",
        overview: "Landing page promoting call answering services with clear messaging and contact focus.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Quick info delivery", "Responsive layout"],
        process: "Focused on clear communication and a streamlined user journey for potential clients.",
        impact: "Improved lead capture and service visibility."
    },
    {
        id: "elite",
        title: "Elite Taekwondo & Fitness – Club",
        category: "Fitness / Sports",
        image1: "Images/Portfolio/elite1.webp",
        image2: "Images/Portfolio/elite2.webp",
        description: "Built a responsive site to present class info, schedules, and club details for the fitness community.",
        role: "Web Developer",
        date: "October 2025 · 1 week",
        sector: "Fitness / Sports",
        overview: "Built a responsive site to present class info, schedules, and club details for the fitness community.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile‑friendly layout", "Service info focus"],
        process: "Designed an informative and energetic site to attract new members and keep current ones informed.",
        impact: "Improved club visibility and member engagement."
    },
    {
        id: "gastoreserve",
        title: "Gusto Reserve – WordPress Restaurant",
        category: "Restaurant / Reservations",
        image1: "Images/Portfolio/gastoreserve1.webp",
        image2: "Images/Portfolio/gastoreserve2.webp",
        description: "Developed a restaurant site with Elementor including reservation system, menu admin, and login/signup features.",
        role: "WordPress Developer",
        date: "September 2025 · 2 weeks",
        sector: "Restaurant / Reservations",
        overview: "Developed a restaurant site with Elementor including reservation system, menu admin, and login/signup features.",
        tech: ["WordPress", "Elementor", "JS", "Tailwind", "Bootstrap"],
        features: ["Reservations", "Menu management"],
        process: "Leveraged WordPress and Elementor to build a flexible and easy-to-manage restaurant site.",
        impact: "Provided a functional restaurant website with backend control."
    },
    {
        id: "formaxis",
        title: "Formaxis – Language + Work Abroad Center (Tangier)",
        category: "Education / Services",
        image1: "Images/Portfolio/formaxis1.webp",
        image2: "Images/Portfolio/formaxis2.webp",
        description: "Responsive site for a language and work placement center to highlight services and programs.",
        role: "Web Developer",
        date: "August 2025 · 1 month",
        sector: "Education / Services",
        overview: "Responsive site for a language and work placement center to highlight services and programs.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Service overview", "Contact focus"],
        process: "Created a clear and professional online presence to effectively communicate the center's services.",
        impact: "Improved visibility and accessibility for prospective students."
    },
    {
        id: "tangiertours",
        title: "Tangier Tours – Tourism Services",
        category: "Tourism",
        image1: "Images/Portfolio/tangiertours1.webp",
        image2: "Images/Portfolio/tangiertours2.webp",
        description: "Showcase site for tourism services in Tangier with responsive layout and clear service descriptions.",
        role: "Web Developer",
        date: "December 2025 · 1 week",
        sector: "Tourism",
        overview: "Showcase site for tourism services in Tangier with responsive layout and clear service descriptions.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile‑friendly layout", "Tour highlight sections"],
        process: "Designed a site to showcase the beauty of Tangier and make booking tours easy.",
        impact: "Enhanced online presence and service discovery."
    },
    {
        id: "rebajas",
        title: "Rebajas Tangier – Handicraft Store Showcase",
        category: "Retail / Artisan",
        image1: "Images/Portfolio/rebajas1.webp",
        image2: "Images/Portfolio/rebajas2.webp",
        description: "Showcase site for a local handicrafts store, highlighting products and store identity.",
        role: "Web Developer",
        date: "November 2025 · 3 weeks",
        sector: "Retail / Artisan",
        overview: "Showcase site for a local handicrafts store, highlighting products and store identity.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Lightweight, responsive layout", "Product showcases"],
        process: "Built a showcase site to highlight the unique craftsmanship and products of the store.",
        impact: "Increased local visibility and easy user browsing."
    },
    {
        id: "healthhub",
        title: "Health Hub",
        category: "Web Application",
        image1: "Images/Portfolio/healthhub 1.webp",
        image2: "Images/Portfolio/healthhub 2.webp",
        description: "A full-stack PHP & MySQL web app that helps users find nearby doctors, view schedules, and read reviews.",
        role: "Full Stack Developer & Web Designer",
        date: "June 2023 · 2 months",
        sector: "Healthcare / Local Services",
        overview: "This web application helps users in my city and country find doctors nearby, check their availability schedules, read reviews, and access detailed information about their practice locations.",
        tech: ["Figma", "PHP (OOP)", "MySQL", "Bootstrap", "jQuery"],
        features: ["Search dentists by location", "View real-time availability", "Access detailed profiles"],
        process: "Collaborated with a practicing dentist to understand user needs. Designed database schema and developed backend with PHP OOP.",
        impact: "Streamlined the process for patients to find and choose dentists. Enhanced local healthcare access."
    },
    {
        id: "feathers",
        title: "Feathers Nest",
        category: "E-Commerce",
        image1: "Images/Portfolio/birdy store 1.webp",
        image2: "Images/Portfolio/birdy store 2.webp",
        description: "A bright, pet-focused e-commerce front-end for food, toys, and accessories.",
        role: "Front-End Developer & Web Designer",
        date: "September 2024 · 1 month",
        sector: "E-Commerce / Pets",
        overview: "Feathers Nest is a front-end e-commerce website focused on selling pet supplies. Includes a blog section.",
        tech: ["Figma", "Canva", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
        features: ["Clean responsive design", "Attractive product sections", "Blog area"],
        process: "Brand identity research, visual concept in Figma, responsive front-end development with Bootstrap/Tailwind.",
        impact: "Strengthened portfolio with creative front-end project. Provided client with scalable web interface."
    },
    {
        id: "souqsaad",
        title: "Souq Saad",
        category: "E-Commerce",
        image1: "Images/Portfolio/souq saad 1.webp",
        image2: "Images/Portfolio/souq saad 2.webp",
        description: "A lifestyle e-commerce store built on YouCan with a custom brand identity.",
        role: "E-Commerce Owner & Store Designer",
        date: "December 2023 · 2 weeks",
        sector: "Online Retail",
        overview: "Souq Saad is an e-commerce website I built using YouCan. Designed to offer a clean, modern shopping experience.",
        tech: ["YouCan", "Canva", "Photoshop", "Figma"],
        features: ["Personalized color palette", "Custom logo and banners", "Mobile-friendly"],
        process: "Planned structure, designed brand elements, customized YouCan theme, uploaded optimized visuals.",
        impact: "Gained hands-on e-commerce experience. Created consistent online identity."
    }
];

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
    const modalTitle = document.getElementById("modal-title");
    const modalImg1 = document.getElementById("modal-img1");
    const modalImg2 = document.getElementById("modal-img2");
    const modalOverview = document.getElementById("modal-overview");
    const modalDescription = document.getElementById("modal-description");
    const featuresEl = document.getElementById("modal-features");
    const modalProcess = document.getElementById("modal-process");
    const modalImpact = document.getElementById("modal-impact");
    const detailsList = document.getElementById("modal-details-list");
    const techList = document.getElementById("modal-tech-list");

    if (modalTitle) modalTitle.innerText = project.title;
    if (modalImg1) modalImg1.src = project.image1;
    if (modalImg2) modalImg2.src = project.image2;
    if (modalOverview) modalOverview.innerText = project.overview;
    if (modalDescription) modalDescription.innerText = project.description;

    // Tech Stack
    if (techList) {
        techList.innerHTML = "";

        // Icon and Color Mapping
        const techData = {
            "HTML5": { icon: "fa-brands fa-html5", color: "#E34F26" },
            "CSS3": { icon: "fa-brands fa-css3-alt", color: "#1572B6" },
            "JavaScript": { icon: "fa-brands fa-js", color: "#F7DF1E" },
            "JS": { icon: "fa-brands fa-js", color: "#F7DF1E" },
            "jQuery": { icon: "fa-solid fa-code", color: "#0769AD" },
            "Bootstrap": { icon: "fa-brands fa-bootstrap", color: "#7952B3" },
            "Tailwind": { icon: "fa-solid fa-wind", color: "#06B6D4" },
            "React JS": { icon: "fa-brands fa-react", color: "#61DAFB" },
            "Node JS": { icon: "fa-brands fa-node-js", color: "#339933" },
            "PHP": { icon: "fa-brands fa-php", color: "#777BB4" },
            "WordPress": { icon: "fa-brands fa-wordpress", color: "#21759B" },
            "WooCommerce": { icon: "fa-solid fa-cart-shopping", color: "#96588a" },
            "MySQL": { icon: "fa-solid fa-database", color: "#4479A1" },
            "Figma": { icon: "fa-brands fa-figma", color: "#F24E1E" },
            "Canva": { icon: "fa-solid fa-palette", color: "#00C4CC" },
            "Photoshop": { icon: "fa-solid fa-image", color: "#31A8FF" },
            "Elementor": { icon: "fa-brands fa-elementor", color: "#92003B" },
            "YouCan": { icon: "fa-solid fa-store", color: "#563595" },
            "Mailerlite": { icon: "fa-solid fa-envelope-open-text", color: "#00A154" },
            "Python": { icon: "fa-brands fa-python", color: "#3776AB" },
            "Git/GitHub": { icon: "fa-brands fa-git-alt", color: "#F05032" }
        };

        project.tech.forEach(tech => {
            const li = document.createElement("li");
            // Check if we have data for this tech, otherwise use defaults
            const data = techData[tech] || { icon: "fa-solid fa-layer-group", color: "#6c757d" };

            li.innerHTML = `<i class="${data.icon}" style="width: 20px; text-align: center; margin-right: 8px; color: ${data.color};"></i>${tech}`;
            techList.appendChild(li);
        });
    }

    // Features
    if (featuresEl) {
        featuresEl.innerHTML = "";
        if (Array.isArray(project.features)) {
            project.features.forEach(feature => {
                const li = document.createElement("li");
                li.innerText = feature;
                featuresEl.appendChild(li);
            });
        } else {
            featuresEl.innerText = project.features;
        }
    }

    if (modalProcess) modalProcess.innerText = project.process;
    if (modalImpact) modalImpact.innerText = project.impact;

    // Details List (Role, Date, etc.)
    if (detailsList) {
        detailsList.innerHTML = `
            <li>👤 Role — ${project.role}</li>
            <li>🗓️ Date & Timeline — ${project.date}</li>
            <li>🎯 Sector — ${project.sector}</li>
        `;
    }
}

// Initialize on load
$(document).ready(function () {
    initProjects();
});

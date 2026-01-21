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
        overview: "Developed two high‑impact landing pages for a specialty coffee brand, one for overall brand presence and one focused on a key service. I crafted visually striking layouts with clear calls-to-action, fully responsive and optimized for both desktop and mobile users. The pages highlight the brand identity and simplify user engagement, making it easy for visitors to interact and convert.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Conversion-focused layouts", "Fully responsive design", "Clear CTAs and messaging", "Fast-loading and smooth interactions"],
        process: "Collaborated with the client to understand the brand story and objectives. Designed wireframes, implemented layouts with modern front-end techniques, and iterated for usability and aesthetics.",
        impact: "Enhanced online brand presence, increased visitor engagement, and provided a professional, lead-capturing landing experience."
    },
    {
        id: "chickendelight",
        title: "Chicken Delight – Restaurant Website",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/chicken-delight1.webp",
        image2: "Images/Portfolio/chicken-delight2.webp",
        description: "Redesigned the Chicken Delight website to modernize its appearance, improve usability, and enhance customer experience.",
        role: "Web Designer & Front-End Developer",
        date: "January 2026 · 3 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Redesigned the restaurant website with a focus on visual appeal, menu accessibility, and clear contact information. Created a responsive, modern layout that makes browsing the menu, checking location, and placing orders seamless for customers.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "WordPress", "WooCommerce"],
        features: ["Responsive design for all devices", "Modern, clean layout", "Clear navigation and menu display", "WooCommerce integration for ordering"],
        process: "Converted existing content into a custom WordPress site, designed clean interfaces, and optimized interactions for desktop and mobile users.",
        impact: "Improved customer experience, streamlined ordering flow, and strengthened the restaurant’s online presence."
    },
    {
        id: "rentalx",
        title: "RentalX – Real Estate Platform",
        category: "Real Estate",
        image1: "Images/Portfolio/rentalx1.webp",
        image2: "Images/Portfolio/rentalx2.webp",
        description: "Developed a user-friendly real estate platform with property listings, search filters, and easy content management.",
        role: "Full Stack Developer",
        date: "October 2025 · 1 month",
        sector: "Real Estate",
        overview: "Built a dynamic real estate website featuring property listings, search and filter functionalities, and admin control over content. Designed for usability and clarity to ensure buyers and renters can easily find relevant listings.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "PHP", "MySQL", "WordPress"],
        features: ["Property listings with filters", "Admin content management", "Search and sorting tools", "Responsive design"],
        process: "Created a custom WordPress theme, integrated dynamic listing modules, and optimized for fast loading and smooth navigation.",
        impact: "Enhanced property discoverability, simplified admin content updates, and improved user experience for buyers and renters."
    },
    {
        id: "abrakadabra",
        title: "Abrakadabra – Kindergarten",
        category: "Education / Preschool",
        image1: "Images/Portfolio/abrakadabra1.webp",
        image2: "Images/Portfolio/abrakadabra2.webp",
        description: "Redesigned the kindergarten website to enhance clarity, layout, and accessibility.",
        role: "Web Designer & Front-End Developer",
        date: "September 2025 · 3 weeks",
        sector: "Education / Preschool",
        overview: "Redesigned the kindergarten’s online presence with a friendly and accessible layout. The focus was on easy navigation, clear information for parents, and a visually playful style to match the school’s identity.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive, mobile-friendly layout", "Child-centric visuals", "Easy-to-read typography", "Accessible navigation"],
        process: "Worked closely with the client to identify parent priorities and school branding. Designed a visually engaging interface that balances professionalism and playfulness.",
        impact: "Improved accessibility for parents, reinforced the kindergarten’s brand identity, and presented key information clearly."
    },
    {
        id: "techcare",
        title: "TechCare – Healthcare Dashboard",
        category: "Healthcare Tech",
        image1: "Images/Portfolio/techcare1.webp",
        image2: "Images/Portfolio/techcare2.webp",
        description: "Developed a comprehensive dashboard for doctors to manage appointments, patients, and schedules efficiently.",
        role: "Full Stack Developer",
        date: "August 2025 · 2 months",
        sector: "Healthcare Tech",
        overview: "Created a feature-rich dashboard for healthcare professionals to track appointments, manage patients, and view schedules. Designed with usability and efficiency in mind, the dashboard simplifies clinic operations and enhances workflow visibility.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "React JS", "PHP", "WordPress"],
        features: ["Appointment management", "Patient tracking", "Schedule overview", "Message system"],
        process: "Built interactive components using React, integrated backend with PHP, and optimized data flows for real-time updates.",
        impact: "Streamlined clinic operations, reduced scheduling errors, and enhanced data management for healthcare staff."
    },
    {
        id: "aurum",
        title: "Aurum – Plumber Website",
        category: "Services / Small Business",
        image1: "Images/Portfolio/aurum1.webp",
        image2: "Images/Portfolio/aurum2.webp",
        description: "Developed a professional, responsive website for a plumbing service, focusing on usability and lead generation.",
        role: "Web Designer & Developer",
        date: "January 2026 · 2 weeks",
        sector: "Plumbing / Services",
        overview: "Built a fully responsive website for a plumbing service to provide a clean, easy-to-navigate experience. Focused on clear information hierarchy, intuitive navigation, and accessible contact forms to help visitors quickly get in touch.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design for all devices", "Lead capture via contact forms", "Clean layout with service highlights", "Optimized performance and fast load times"],
        process: "Worked closely with the client to map out key services and contact points, then designed and developed a website that is simple, professional, and effective at converting visitors into leads.",
        impact: "Enhanced the client’s online presence, improved user experience, and made contacting the plumbing service straightforward for potential customers."
    },
    {
        id: "globewide",
        title: "GlobeWide – Travel / Services",
        category: "Travel / Services",
        image1: "Images/Portfolio/globewide1.webp",
        image2: "Images/Portfolio/globewide2.webp",
        description: "Built a responsive showcase site highlighting travel services and key destinations.",
        role: "Web Developer",
        date: "November 2025 · 1 week",
        sector: "Travel / Services",
        overview: "Created a responsive travel services website emphasizing destinations, packages, and customer services. Designed for clarity, visual appeal, and easy booking navigation.",
        tech: ["HTML5", "CSS3", "JS", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Destination showcase", "Service overview sections"],
        process: "Designed a clean layout to guide visitors through services and offerings while keeping the interface intuitive.",
        impact: "Enhanced discoverability of travel services and improved visitor engagement."
    },
    {
        id: "wheatsheaf",
        title: "Whatshelf Brands",
        category: "Corporate",
        image1: "Images/Portfolio/wheatsheafbrands1.webp",
        image2: "Images/Portfolio/wheatsheafbrands2.webp",
        description: "Developed a corporate showcase site emphasizing brand identity and service offerings.",
        role: "Front-End Developer",
        date: "September 2025 · 4 weeks",
        sector: "Corporate",
        overview: "Built a professional corporate website highlighting services, values, and company story. Designed with clean layouts and engaging visuals to enhance the brand’s online credibility.",
        tech: ["HTML5", "CSS3", "JS", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Service and brand highlights", "Clear navigation"],
        process: "Focused on brand storytelling and professional visual presentation to improve corporate image online.",
        impact: "Strengthened brand identity and increased online trust among potential clients."
    },
    {
        id: "macbookstore",
        title: "MacBook Store",
        category: "E-Commerce",
        image1: "Images/Portfolio/macbookstore1.webp",
        image2: "Images/Portfolio/macbookstore2.webp",
        description: "Created a niche e-commerce store focused on Apple products and accessories.",
        role: "E-Commerce Developer",
        date: "2024",
        sector: "Retail",
        overview: "Developed a specialized online store for Apple products with a sleek, brand-focused layout. Simplified navigation and purchasing experience for tech enthusiasts.",
        tech: ["WooCommerce"],
        features: ["Product showcase", "Apple-style aesthetic", "Secure checkout"],
        process: "Designed and implemented a clean e-commerce interface, focusing on usability and brand identity.",
        impact: "Attracted niche buyers and streamlined product discovery and purchases."
    },
    {
        id: "marzouk",
        title: "Marzouk Formation",
        category: "WordPress Website",
        image1: "Images/Portfolio/marzouk formation 1.webp",
        image2: "Images/Portfolio/marzouk formation 2.webp",
        description: "A multilingual WordPress site for a training agency helping people secure work abroad.",
        role: "Full Stack Developer, UX/UI Designer",
        date: "April 2024 · 3 weeks",
        sector: "Education / Vocational Training",
        overview: "Built a fully multilingual WordPress website to showcase vocational programs and training services. Designed for clarity and easy navigation to help students find relevant courses quickly.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind", "PHP", "MySQL", "Figma", "WordPress"],
        features: ["Multilingual content", "Responsive design", "Course and service highlights"],
        process: "Designed wireframes, built a custom WordPress theme, and implemented multilingual support for seamless user experience.",
        impact: "Enhanced student engagement and simplified navigation for users seeking international training opportunities."
    },
    {
        id: "berlincafe",
        title: "Berlin Cafe – Restaurant Showcase",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/berlincafe1.webp",
        image2: "Images/Portfolio/berlincafe2.webp",
        description: "Showcase website for a café highlighting menu, ambiance, and contact details.",
        role: "Web Developer",
        date: "January 2026 · 1 week",
        sector: "Café / Hospitality",
        overview: "Created a responsive showcase site to present the café’s menu, ambiance, and contact information. Designed for readability, visual appeal, and cross-device performance.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Menu highlights", "Contact & location info"],
        process: "Focused on clear visual hierarchy, intuitive navigation, and highlighting key offerings.",
        impact: "Improved visitor engagement and enhanced the café’s online visibility."
    },
    {
        id: "labasta",
        title: "La Basta – Restaurant",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/la-basta1.webp",
        image2: "Images/Portfolio/la-basta2.webp",
        description: "Responsive showcase website highlighting menu, ambiance, and reservations.",
        role: "Front-End Developer",
        date: "December 2025 · 4 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Developed a mobile-friendly site to showcase restaurant menus, ambiance, and booking information. Focused on visual storytelling and a smooth browsing experience.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile optimized", "Menu & ambiance sections", "Reservation info"],
        process: "Designed layouts to reflect the physical dining experience and easy menu navigation.",
        impact: "Increased user engagement and improved online reservation clarity."
    },
    {
        id: "atoca",
        title: "Atoca – Restaurant Website",
        category: "Restaurant / Hospitality",
        image1: "Images/Portfolio/atoca1.webp",
        image2: "Images/Portfolio/atoca2.webp",
        description: "Showcase website presenting menu, story, and ambiance with responsive design.",
        role: "Front-End Developer",
        date: "October 2025 · 2 weeks",
        sector: "Restaurant / Hospitality",
        overview: "Developed a responsive restaurant site highlighting the menu, brand story, and ambiance. Prioritized readability and navigation for visitors and search engines.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile-first responsive design", "Menu highlights", "Fast-loading pages"],
        process: "Implemented responsive layouts and interactive elements for a seamless experience.",
        impact: "Enhanced online presence and facilitated quick access to essential restaurant info."
    },
    {
        id: "foray",
        title: "Foray Club – Café / Eatery",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/foray-club1.webp",
        image2: "Images/Portfolio/foray-club2.webp",
        description: "Responsive showcase site presenting café offerings and atmosphere.",
        role: "Front-End Developer",
        date: "September 2025 · 1 month",
        sector: "Café / Hospitality",
        overview: "Built a clean, responsive showcase site highlighting the café’s menu, ambiance, and services. Emphasized visual clarity and user-friendly navigation.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Menu highlights", "Fast performance"],
        process: "Focused on readability, lightweight design, and smooth interactions.",
        impact: "Improved online discoverability and customer engagement."
    },
    {
        id: "caffenaopli",
        title: "Cafe Napoli – Italy",
        category: "Café / Hospitality",
        image1: "Images/Portfolio/caffe-naopli1.webp",
        image2: "Images/Portfolio/caffe-naopli2.webp",
        description: "Showcase website tailored for the café’s brand and local audience.",
        role: "Web Developer",
        date: "August 2025 · 3 weeks",
        sector: "Café / Hospitality",
        overview: "Created a responsive site reflecting Cafe Napoli’s unique offerings and local charm. Focused on clear display of specialties and essential info for visitors.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile-friendly layout", "Highlight specialties", "Contact information focus"],
        process: "Developed layouts emphasizing brand identity and usability for local customers.",
        impact: "Improved online presence and customer engagement."
    },
    {
        id: "palacess",
        title: "Palacess – Nigerian Food Restaurant",
        category: "Restaurant / Cultural Cuisine",
        image1: "Images/Portfolio/palacess1.webp",
        image2: "Images/Portfolio/palacess2.webp",
        description: "Showcase site for a UK restaurant specializing in Nigerian cuisine, emphasizing menu and culture.",
        role: "Front-End Developer",
        date: "November 2025 · 2 weeks",
        sector: "Restaurant / Cultural Cuisine",
        overview: "Developed a website highlighting the restaurant’s Nigerian culinary offerings and cultural experience. Emphasized readability and visual presentation for users.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Menu and culture focus", "Visual branding"],
        process: "Focused on presenting menu items and cultural elements effectively online.",
        impact: "Improved audience understanding and engagement with the restaurant’s offerings."
    },
    {
        id: "callanswering",
        title: "Call Answering – Landing Page",
        category: "Service/Communications",
        image1: "Images/Portfolio/callanswering1.webp",
        image2: "Images/Portfolio/callanswering2.webp",
        description: "Landing page promoting call answering services with clear messaging and responsive design.",
        role: "Front-End Developer",
        date: "January 2026 · 3 days",
        sector: "Service/Communications",
        overview: "Developed a concise landing page to promote call answering services. Focused on fast load, clear messaging, and mobile-friendly interactions for potential clients.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive layout", "Clear service messaging", "Quick access to contact info"],
        process: "Designed a compact, conversion-focused layout highlighting essential service details.",
        impact: "Enhanced visibility and improved lead capture for the service provider."
    },
    {
        id: "elite",
        title: "Elite Taekwondo & Fitness – Club",
        category: "Fitness / Sports",
        image1: "Images/Portfolio/elite1.webp",
        image2: "Images/Portfolio/elite2.webp",
        description: "Responsive site presenting classes, schedules, and club information for members and visitors.",
        role: "Web Developer",
        date: "October 2025 · 1 week",
        sector: "Fitness / Sports",
        overview: "Created a responsive website showcasing class schedules, membership info, and club activities. Prioritized clear layout and easy navigation for potential members.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile-friendly layout", "Class schedules and info", "Clear navigation for users"],
        process: "Designed with simplicity and user engagement in mind, emphasizing club information and member accessibility.",
        impact: "Improved club visibility and provided an efficient platform for member interaction."
    },
    {
        id: "gastoreserve",
        title: "Gusto Reserve – WordPress Restaurant",
        category: "Restaurant / Reservations",
        image1: "Images/Portfolio/gastoreserve1.webp",
        image2: "Images/Portfolio/gastoreserve2.webp",
        description: "WordPress site with Elementor, including menu and reservation functionality.",
        role: "WordPress Developer",
        date: "September 2025 · 2 weeks",
        sector: "Restaurant / Reservations",
        overview: "Developed a fully responsive restaurant site using WordPress and Elementor. Integrated reservation systems, menu management, and login/signup features to improve customer interaction.",
        tech: ["WordPress", "Elementor", "JS", "Tailwind", "Bootstrap"],
        features: ["Reservation system", "Menu management", "User login features"],
        process: "Leveraged WordPress flexibility and Elementor to build a scalable and easy-to-manage site.",
        impact: "Improved operational efficiency and enhanced the online booking experience."
    },
    {
        id: "formaxis",
        title: "Formaxis – Language + Work Abroad Center (Tangier)",
        category: "Education / Services",
        image1: "Images/Portfolio/formaxis1.webp",
        image2: "Images/Portfolio/formaxis2.webp",
        description: "Responsive site highlighting services and programs for a language and work placement center.",
        role: "Web Developer",
        date: "August 2025 · 1 month",
        sector: "Education / Services",
        overview: "Created a responsive website showcasing programs, services, and student guidance for the center. Focused on clarity and accessibility for prospective students.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Service overview", "Responsive layout", "Contact focus"],
        process: "Structured content to ensure easy navigation and designed visually appealing sections for student engagement.",
        impact: "Improved center visibility and simplified access to program information."
    },
    {
        id: "tangiertours",
        title: "Tangier Tours – Tourism Services",
        category: "Tourism",
        image1: "Images/Portfolio/tangiertours1.webp",
        image2: "Images/Portfolio/tangiertours2.webp",
        description: "Showcase site for tourism services in Tangier with clear service descriptions.",
        role: "Web Developer",
        date: "December 2025 · 1 week",
        sector: "Tourism",
        overview: "Developed a responsive website to highlight Tangier tour offerings. Prioritized service clarity and smooth navigation for tourists seeking activities and packages.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Mobile-friendly layout", "Tour highlights", "Service info clarity"],
        process: "Designed content sections for quick discovery of available tours and packages.",
        impact: "Enhanced local tourism engagement and improved online visibility."
    },
    {
        id: "rebajas",
        title: "Rebajas Tangier – Handicraft Store Showcase",
        category: "Retail / Artisan",
        image1: "Images/Portfolio/rebajas1.webp",
        image2: "Images/Portfolio/rebajas2.webp",
        description: "Showcase website highlighting handcrafted products and store identity.",
        role: "Web Developer",
        date: "November 2025 · 3 weeks",
        sector: "Retail / Artisan",
        overview: "Built a responsive site to showcase the unique handicrafts available in the store. Emphasized product visuals, store branding, and ease of navigation for customers.",
        tech: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Product showcases", "Clear store info"],
        process: "Focused on visually highlighting products and creating a user-friendly browsing experience.",
        impact: "Increased local awareness and improved product discoverability."
    },
    {
        id: "healthhub",
        title: "Health Hub",
        category: "Web Application",
        image1: "Images/Portfolio/healthhub 1.webp",
        image2: "Images/Portfolio/healthhub 2.webp",
        description: "Full-stack web app helping users find nearby doctors, check schedules, and read reviews.",
        role: "Full Stack Developer & Web Designer",
        date: "June 2023 · 2 months",
        sector: "Healthcare / Local Services",
        overview: "Developed a PHP & MySQL web app allowing users to search for doctors, view schedules, and read reviews. Prioritized clean UI, responsive design, and efficient data handling.",
        tech: ["Figma", "PHP (OOP)", "MySQL", "Bootstrap", "jQuery"],
        features: ["Doctor search by location", "Real-time availability", "Profile details access"],
        process: "Collaborated with local healthcare professionals to understand user needs and implemented a functional, responsive solution.",
        impact: "Streamlined access to local healthcare information and improved user experience."
    },
    {
        id: "feathers",
        title: "Feathers Nest",
        category: "E-Commerce",
        image1: "Images/Portfolio/birdy store 1.webp",
        image2: "Images/Portfolio/birdy store 2.webp",
        description: "Front-end e-commerce store for pet supplies, toys, and accessories.",
        role: "Front-End Developer & Web Designer",
        date: "September 2024 · 1 month",
        sector: "E-Commerce / Pets",
        overview: "Created a visually appealing, responsive online store for pet products. Focused on product visibility, clear navigation, and brand identity.",
        tech: ["Figma", "Canva", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
        features: ["Responsive design", "Attractive product sections", "Blog integration"],
        process: "Designed branding elements and developed responsive layouts for smooth user experience.",
        impact: "Enhanced product visibility and provided the client with a scalable store interface."
    },
    {
        id: "souqsaad",
        title: "Souq Saad",
        category: "E-Commerce",
        image1: "Images/Portfolio/souq saad 1.webp",
        image2: "Images/Portfolio/souq saad 2.webp",
        description: "Lifestyle e-commerce store with a clean, modern interface and custom branding.",
        role: "E-Commerce Owner & Store Designer",
        date: "December 2023 · 2 weeks",
        sector: "Online Retail",
        overview: "Built a lifestyle store on YouCan with custom branding and streamlined shopping experience. Focused on mobile optimization and aesthetic consistency.",
        tech: ["YouCan", "Canva", "Photoshop", "Figma"],
        features: ["Custom logo and banners", "Mobile-friendly design", "Personalized brand palette"],
        process: "Structured store layout, designed visuals, and uploaded optimized content for seamless shopping.",
        impact: "Delivered a visually consistent online store and improved user shopping experience."
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

// Projects data
const projects = [
    {
        title: "Vogue Vista - Elegant Jewelry Landing Page",
        description: "A luxurious and elegant landing page design for a high-end jewelry brand, featuring modern aesthetics and seamless user experience.",
        image: "1st project.png",
        link: "https://www.behance.net/gallery/219647771/Vogue-Vista-Elegant-Jewelry-Landing-Page",
        tags: ["UI Design", "Landing Page", "Figma"]
    },
    {
        title: "Food Ordering & Delivery App Design",
        description: "A modern and intuitive mobile app design for food ordering and delivery, focusing on user experience and seamless navigation.",
        image: "2nd project .png",
        link: "https://www.behance.net/gallery/220799041/Food-Ordering-Delivery-App-Design",
        tags: ["UI/UX Design", "Mobile App", "Figma"]
    },
    {
        title: "The Viral Egg - Cracking the Internet",
        description: "An innovative social media campaign design that explores viral marketing strategies and creative content creation.",
        image: "3rd project.png",
        link: "https://www.behance.net/gallery/220595791/The-Viral-Egg-Cracking-the-Internet",
        tags: ["Social Media", "Branding", "Canva"]
    },
    {
        title: "Juicy Delights - Fresh & Healthy Landing Page",
        description: "A vibrant and refreshing landing page design for a healthy juice brand, emphasizing freshness and wellness through modern design elements.",
        image: "Yellow Juice.jpg",
        link: "https://www.behance.net/gallery/219647145/Juicy-Delights-Fresh-Healthy-Landing-Page",
        tags: ["UI Design", "Landing Page", "Figma"]
    }
];

function createProjectCard(project) {
    return `
        <a href="${project.link}" class="project-card glass" data-aos="fade-up" target="_blank">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function updatePortfolioProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Update projects when the page loads
document.addEventListener('DOMContentLoaded', updatePortfolioProjects); 

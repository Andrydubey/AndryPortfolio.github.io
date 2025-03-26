// Behance API Integration
const BEHANCE_API_KEY = 'YOUR_BEHANCE_API_KEY'; // You'll need to get this from Behance
const BEHANCE_USERNAME = 'AndryDubey'; // Your Behance username

async function fetchBehanceProjects() {
    try {
        const response = await fetch(`https://api.behance.net/v2/users/${BEHANCE_USERNAME}/projects?api_key=${BEHANCE_API_KEY}`);
        const data = await response.json();
        return data.projects;
    } catch (error) {
        console.error('Error fetching Behance projects:', error);
        return [];
    }
}

function createProjectCard(project) {
    return `
        <a href="${project.url}" class="project-card glass" data-aos="fade-up" target="_blank">
            <div class="project-image">
                <img src="${project.covers.original}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.fields.map(field => `<span class="tag">${field}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

async function updatePortfolioProjects() {
    const projects = await fetchBehanceProjects();
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }
}

// Update projects when the page loads
document.addEventListener('DOMContentLoaded', updatePortfolioProjects); 
// Component Generators
const Components = {
    // Generate Experience Timeline
    generateExperience() {
        const timeline = Utils.$('#experience-timeline');
        if (!timeline) {
            console.error('Timeline element not found');
            return;
        }
        
        timeline.innerHTML = CONFIG.experience.map(job => `
            <div class="timeline-item" data-aos="fade-up">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="job-header">
                        <h3 class="job-title">${job.position}</h3>
                        <div class="job-meta">
                            <span class="company">${job.company}</span>
                            <span class="location">${job.location}</span>
                            <span class="duration">${job.duration}</span>
                        </div>
                    </div>
                    <ul class="achievements">
                        ${job.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                    <div class="technologies">
                        ${job.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    // Generate Skills Grid
    generateSkills() {
        const skillsGrid = Utils.$('#skills-grid');
        if (!skillsGrid) {
            console.error('Skills grid element not found');
            return;
        }
        
        const skillCategories = [
            { title: 'Programming Languages', skills: CONFIG.skills.languages, icon: 'code' },
            { title: 'AI & Automation', skills: CONFIG.skills.ai, icon: 'robot' },
            { title: 'Backend Technologies', skills: CONFIG.skills.backend, icon: 'server' },
            { title: 'Cloud & DevOps', skills: [...CONFIG.skills.cloud, ...CONFIG.skills.devops], icon: 'cloud' },
            { title: 'Databases', skills: CONFIG.skills.databases, icon: 'database' },
            { title: 'Soft Skills', skills: CONFIG.skills.soft, icon: 'users' }
        ];
        
        skillsGrid.innerHTML = skillCategories.map(category => `
            <div class="skill-category" data-aos="fade-up">
                <div class="skill-header">
                    <i class="icon-${category.icon}"></i>
                    <h3>${category.title}</h3>
                </div>
                <div class="skill-list">
                    ${category.skills.map(skill => `
                        <span class="skill-item">${skill}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },
    
    // Generate Contact Details
    generateContact() {
        const contactDetails = Utils.$('#contact-details');
        if (!contactDetails) {
            console.error('Contact details element not found');
            return;
        }
        
        contactDetails.innerHTML = `
            <div class="contact-detail-item">
                <strong>Email:</strong>
                <a href="mailto:${CONFIG.personal.email}">${CONFIG.personal.email}</a>
            </div>
            <div class="contact-detail-item">
                <strong>Phone:</strong>
                <a href="tel:${CONFIG.personal.phone}">${CONFIG.personal.phone}</a>
            </div>
            <div class="contact-detail-item">
                <strong>Location:</strong>
                <span>${CONFIG.personal.location}</span>
            </div>
            <div class="contact-detail-item">
                <strong>LinkedIn:</strong>
                <a href="${CONFIG.personal.linkedin}" target="_blank">LinkedIn Profile</a>
            </div>
            <div class="contact-detail-item">
                <strong>GitHub:</strong>
                <a href="${CONFIG.personal.github}" target="_blank">GitHub Profile</a>
            </div>
        `;
    },

    // Generate Projects Grid
    generateProjects() {
        const projectsGrid = Utils.$('#projects-grid');
        if (!projectsGrid) {
            console.error('Projects grid element not found');
            return;
        }
        
        projectsGrid.innerHTML = CONFIG.projects.map(project => `
            <div class="project-card" data-aos="fade-up">
                <div class="project-header">
                    <span class="project-type">${project.type}</span>
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-impact">
                    <span class="impact-label">Impact:</span>
                    <span class="impact-value">${project.impact}</span>
                </div>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    // Generate all dynamic content
    generateAll() {
        console.log('Starting content generation...');
        console.log('CONFIG:', CONFIG);
        
        try {
            this.generateExperience();
            console.log('Experience generated');
            
            this.generateSkills();
            console.log('Skills generated');
            
            this.generateProjects();
            console.log('Projects generated');
            
            this.generateContact();
            console.log('Contact generated');
        } catch (error) {
            console.error('Error generating content:', error);
        }
    }
}; 
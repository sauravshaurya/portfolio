// Enhanced Component Generators with Inline Styling
const EnhancedComponents = {
    // Generate Professional Experience Timeline
    generateExperience() {
        const timeline = document.querySelector('#experience-timeline');
        if (!timeline) {
            console.error('Timeline element not found');
            return;
        }
        
        const timelineHTML = CONFIG.experience.map((job, index) => `
            <div class="timeline-item" style="position: relative; margin-bottom: 3rem; padding-left: 4rem; opacity: 0; animation: slideIn 0.6s ease-out ${index * 0.2}s forwards;">
                <div class="timeline-marker" style="
                    position: absolute;
                    left: -8px;
                    top: 0;
                    width: 16px;
                    height: 16px;
                    background: linear-gradient(135deg, #1a4d3a, #2d6b4f);
                    border-radius: 50%;
                    border: 4px solid white;
                    box-shadow: 0 2px 8px rgba(26, 77, 58, 0.3);
                    z-index: 2;
                "></div>
                
                <div class="timeline-content" style="
                    background: white;
                    border-radius: 16px;
                    padding: 2rem;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                    border: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                    position: relative;
                " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.1)'">
                    
                    <div class="job-header" style="margin-bottom: 1.5rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 1rem;">
                        <h3 style="
                            font-size: 1.25rem;
                            font-weight: 600;
                            color: #1f2937;
                            margin: 0 0 0.5rem 0;
                            line-height: 1.3;
                        ">${job.position}</h3>
                        
                        <div class="job-meta" style="display: flex; flex-direction: column; gap: 0.25rem;">
                            <span class="company" style="
                                font-weight: 600;
                                color: #1a4d3a;
                                font-size: 1rem;
                            ">${job.company}</span>
                            <span class="location" style="
                                font-size: 0.875rem;
                                color: #6b7280;
                            ">${job.location}</span>
                            <span class="duration" style="
                                font-size: 0.875rem;
                                color: #6b7280;
                                font-weight: 500;
                            ">${job.duration}</span>
                        </div>
                    </div>
                    
                    <ul class="achievements" style="
                        list-style: none;
                        margin: 0 0 1.5rem 0;
                        padding: 0;
                    ">
                        ${job.achievements.map(achievement => `
                            <li style="
                                margin-bottom: 0.75rem;
                                padding-left: 1.5rem;
                                position: relative;
                                color: #4b5563;
                                line-height: 1.6;
                                font-size: 0.95rem;
                            ">
                                <span style="
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 0.5rem;
                                    width: 6px;
                                    height: 6px;
                                    background: #1a4d3a;
                                    border-radius: 50%;
                                    display: inline-block;
                                ">•</span>
                                ${achievement}
                            </li>
                        `).join('')}
                    </ul>
                    
                    <div class="technologies" style="
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    ">
                        ${job.technologies.map(tech => `
                            <span style="
                                background: linear-gradient(135deg, #1a4d3a, #2d6b4f);
                                color: white;
                                padding: 0.375rem 0.75rem;
                                border-radius: 20px;
                                font-size: 0.75rem;
                                font-weight: 500;
                                display: inline-block;
                                box-shadow: 0 2px 4px rgba(26, 77, 58, 0.3);
                            ">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        timeline.innerHTML = `
            <style>
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 30px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #1a4d3a, #2d6b4f);
                    z-index: 1;
                }
            </style>
            ${timelineHTML}
        `;
        
        console.log('Experience timeline generated successfully');
    },

    // Generate Skills Grid
    generateSkills() {
        const skillsGrid = document.querySelector('#skills-grid');
        if (!skillsGrid) {
            console.error('Skills grid element not found');
            return;
        }
        
        const skillCategories = [
            { title: 'Programming Languages', skills: CONFIG.skills.languages, icon: '💻', color: '#3b82f6' },
            { title: 'AI & Automation', skills: CONFIG.skills.ai, icon: '🤖', color: '#8b5cf6' },
            { title: 'Backend Technologies', skills: CONFIG.skills.backend, icon: '⚙️', color: '#10b981' },
            { title: 'Cloud & DevOps', skills: [...CONFIG.skills.cloud, ...CONFIG.skills.devops], icon: '☁️', color: '#f59e0b' },
            { title: 'Databases', skills: CONFIG.skills.databases, icon: '🗄️', color: '#ef4444' },
            { title: 'Soft Skills', skills: CONFIG.skills.soft, icon: '👥', color: '#6366f1' }
        ];
        
        const skillsHTML = skillCategories.map((category, index) => `
            <div class="skill-category" style="
                background: white;
                border-radius: 16px;
                padding: 2rem;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                border: 1px solid #f1f5f9;
                transition: all 0.3s ease;
                opacity: 0;
                animation: slideIn 0.6s ease-out ${index * 0.1}s forwards;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 16px 48px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.1)'">
                
                <div style="
                    position: absolute;
                    top: -20px;
                    right: -20px;
                    width: 80px;
                    height: 80px;
                    background: ${category.color};
                    opacity: 0.1;
                    border-radius: 50%;
                "></div>
                
                <div class="skill-header" style="
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                ">
                    <span style="
                        font-size: 2rem;
                        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
                    ">${category.icon}</span>
                    <h3 style="
                        font-size: 1.125rem;
                        font-weight: 600;
                        color: #1f2937;
                        margin: 0;
                    ">${category.title}</h3>
                </div>
                
                <div class="skill-list" style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                ">
                    ${category.skills.map(skill => `
                        <span style="
                            background: ${category.color}15;
                            color: ${category.color};
                            border: 1px solid ${category.color}30;
                            padding: 0.5rem 1rem;
                            border-radius: 25px;
                            font-size: 0.875rem;
                            font-weight: 500;
                            transition: all 0.2s ease;
                        " onmouseover="this.style.background='${category.color}'; this.style.color='white'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='${category.color}15'; this.style.color='${category.color}'; this.style.transform='translateY(0)'">${skill}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        skillsGrid.innerHTML = skillsHTML;
        console.log('Skills grid generated successfully');
    },

    // Generate Projects Grid
    generateProjects() {
        const projectsGrid = document.querySelector('#projects-grid');
        if (!projectsGrid) {
            console.error('Projects grid element not found');
            return;
        }
        
        const projectsHTML = CONFIG.projects.map((project, index) => `
            <div class="project-card" style="
                background: white;
                border-radius: 20px;
                padding: 2rem;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                border: 1px solid #f1f5f9;
                transition: all 0.3s ease;
                opacity: 0;
                animation: slideIn 0.6s ease-out ${index * 0.2}s forwards;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.transform='translateY(-8px) rotate(1deg)'; this.style.boxShadow='0 20px 48px rgba(0, 0, 0, 0.15)'" onmouseout="this.style.transform='translateY(0) rotate(0deg)'; this.style.boxShadow='0 8px 32px rgba(0, 0, 0, 0.1)'">
                
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #1a4d3a, #2d6b4f, #10b981);
                "></div>
                
                <div class="project-header" style="margin-bottom: 1.5rem;">
                    <div style="
                        display: inline-block;
                        padding: 0.375rem 1rem;
                        background: linear-gradient(135deg, #1a4d3a, #2d6b4f);
                        color: white;
                        font-size: 0.75rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                        border-radius: 20px;
                        margin-bottom: 1rem;
                        box-shadow: 0 2px 8px rgba(26, 77, 58, 0.3);
                    ">${project.type}</div>
                    
                    <h3 style="
                        font-size: 1.375rem;
                        font-weight: 700;
                        color: #1f2937;
                        margin: 0;
                        line-height: 1.3;
                    ">${project.title}</h3>
                </div>
                
                <p style="
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                ">${project.description}</p>
                
                <div style="
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                    padding: 1rem;
                    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                ">
                    <span style="
                        font-size: 1.5rem;
                    ">📈</span>
                    <div>
                        <span style="
                            font-weight: 600;
                            color: #374151;
                            font-size: 0.875rem;
                        ">Impact:</span>
                        <span style="
                            color: #1a4d3a;
                            font-weight: 700;
                            margin-left: 0.5rem;
                        ">${project.impact}</span>
                    </div>
                </div>
                
                <div style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                ">
                    ${project.technologies.map(tech => `
                        <span style="
                            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
                            color: #0369a1;
                            border: 1px solid #7dd3fc;
                            padding: 0.375rem 0.75rem;
                            border-radius: 15px;
                            font-size: 0.75rem;
                            font-weight: 500;
                            transition: all 0.2s ease;
                        " onmouseover="this.style.background='#0369a1'; this.style.color='white'" onmouseout="this.style.background='linear-gradient(135deg, #f0f9ff, #e0f2fe)'; this.style.color='#0369a1'">${tech}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        projectsGrid.innerHTML = projectsHTML;
        console.log('Projects grid generated successfully');
    },

    // Generate Contact Details
    generateContact() {
        const contactDetails = document.querySelector('#contact-details');
        if (!contactDetails) {
            console.error('Contact details element not found');
            return;
        }
        
        const contactItems = [
            { label: 'Email', value: CONFIG.personal.email, href: `mailto:${CONFIG.personal.email}`, icon: '📧' },
            { label: 'Phone', value: CONFIG.personal.phone, href: `tel:${CONFIG.personal.phone}`, icon: '📱' },
            { label: 'Location', value: CONFIG.personal.location, href: null, icon: '📍' },
            { label: 'LinkedIn', value: 'LinkedIn Profile', href: CONFIG.personal.linkedin, icon: '💼' },
            { label: 'GitHub', value: 'GitHub Profile', href: CONFIG.personal.github, icon: '🐙' }
        ];
        
        const contactHTML = contactItems.map((item, index) => `
            <div style="
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1.25rem;
                background: white;
                border-radius: 12px;
                border: 1px solid #f1f5f9;
                margin-bottom: 1rem;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                transition: all 0.3s ease;
                opacity: 0;
                animation: slideIn 0.4s ease-out ${index * 0.1}s forwards;
            " onmouseover="this.style.transform='translateX(8px)'; this.style.boxShadow='0 8px 24px rgba(0, 0, 0, 0.1)'" onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.05)'">
                
                <span style="
                    font-size: 1.25rem;
                    width: 40px;
                    text-align: center;
                ">${item.icon}</span>
                
                <div style="flex: 1;">
                    <strong style="
                        color: #374151;
                        font-weight: 600;
                        font-size: 0.875rem;
                        display: block;
                        margin-bottom: 0.25rem;
                    ">${item.label}:</strong>
                    ${item.href ? `
                        <a href="${item.href}" style="
                            color: #1a4d3a;
                            text-decoration: none;
                            font-weight: 500;
                            transition: color 0.2s ease;
                        " onmouseover="this.style.color='#2d6b4f'" onmouseout="this.style.color='#1a4d3a'" ${item.href.startsWith('http') ? 'target="_blank"' : ''}>${item.value}</a>
                    ` : `
                        <span style="color: #4b5563;">${item.value}</span>
                    `}
                </div>
            </div>
        `).join('');
        
        contactDetails.innerHTML = contactHTML;
        console.log('Contact details generated successfully');
    },

    // Generate all content
    generateAll() {
        console.log('Starting enhanced content generation...');
        
        // Add global styles
        if (!document.querySelector('#enhanced-styles')) {
            const style = document.createElement('style');
            style.id = 'enhanced-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                .timeline {
                    position: relative;
                }
                
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 30px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #1a4d3a, #2d6b4f);
                    z-index: 1;
                }
                
                @media (max-width: 768px) {
                    .timeline::before {
                        left: 15px;
                    }
                    .timeline-item {
                        padding-left: 2.5rem !important;
                    }
                    .timeline-marker {
                        left: 7px !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        try {
            this.generateExperience();
            this.generateSkills();
            this.generateProjects();
            this.generateContact();
            console.log('All enhanced content generated successfully!');
        } catch (error) {
            console.error('Error generating enhanced content:', error);
        }
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced components initializing...');
    EnhancedComponents.generateAll();
}); 
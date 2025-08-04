# Portfolio Website Requirements - Saurav Shaurya
## Inspired by Modern Academic Portfolio Design

## Project Overview
Create a sophisticated, modern portfolio website for Saurav Shaurya, following the elegant academic portfolio design pattern with dark green hero section, clean typography, and professional layout. Deploy on GitHub Pages with zero cost.

## Design Inspiration & Visual Requirements

### Color Scheme
```css
:root {
    /* Primary Colors */
    --primary-green: #1a4d3a;          /* Dark forest green for hero */
    --primary-green-light: #2d6b4f;    /* Lighter green for accents */
    --primary-green-dark: #0f2e21;     /* Darker green for depth */
    
    /* Neutral Colors */
    --white: #ffffff;
    --text-primary: #1f2937;           /* Dark gray for main text */
    --text-secondary: #6b7280;         /* Medium gray for secondary text */
    --text-light: #9ca3af;             /* Light gray for subtle text */
    --bg-light: #f9fafb;               /* Light background */
    --bg-white: #ffffff;               /* Pure white background */
    --border-light: #e5e7eb;           /* Light borders */
    
    /* Accent Colors */
    --accent-blue: #3b82f6;            /* For links and interactive elements */
    --accent-gray: #4b5563;            /* For buttons and secondary elements */
}
```

### Typography System
```css
:root {
    /* Font Families */
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
    --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
    
    /* Font Sizes */
    --text-xs: 0.75rem;    /* 12px */
    --text-sm: 0.875rem;   /* 14px */
    --text-base: 1rem;     /* 16px */
    --text-lg: 1.125rem;   /* 18px */
    --text-xl: 1.25rem;    /* 20px */
    --text-2xl: 1.5rem;    /* 24px */
    --text-3xl: 1.875rem;  /* 30px */
    --text-4xl: 2.25rem;   /* 36px */
    --text-5xl: 3rem;      /* 48px */
    
    /* Font Weights */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
}
```

## Technical Architecture

### Project Structure
```
saurav-portfolio/
├── index.html                 # Single page application
├── css/
│   ├── reset.css             # CSS reset
│   ├── variables.css         # Design system variables
│   ├── base.css              # Base typography & layout
│   ├── components.css        # Reusable components
│   ├── sections.css          # Page sections
│   └── responsive.css        # Mobile responsiveness
├── js/
│   ├── config.js             # Data configuration
│   ├── components.js         # Dynamic components
│   ├── navigation.js         # Navigation logic
│   ├── animations.js         # Scroll animations
│   └── main.js               # Main application
├── assets/
│   ├── images/
│   │   ├── profile.webp      # Professional headshot
│   │   └── icons/            # Social media icons
│   ├── files/
│   │   └── Saurav_Shaurya_Resume.pdf
│   └── fonts/                # Custom fonts (if needed)
└── README.md
```

## HTML Structure Specification

### Complete HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Saurav Shaurya - Senior Software Engineer specializing in Microservices, Cloud Architecture, and DevOps">
    <meta name="keywords" content="Senior Software Engineer, Microservices, Spring Boot, Apache Kafka, DevOps, AWS, Kubernetes, Backend Development">
    <meta name="author" content="Saurav Shaurya">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Saurav Shaurya - Senior Software Engineer">
    <meta property="og:description" content="6+ years of experience in Microservices, Cloud Architecture, and DevOps">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sauravshaurya.github.io">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/sections.css">
    <link rel="stylesheet" href="css/responsive.css">
    
    <title>Saurav Shaurya - Senior Software Engineer</title>
</head>

<body>
    <!-- Navigation Header -->
    <header class="header" id="header">
        <nav class="nav-container">
            <div class="nav-brand">
                <a href="#home" class="brand-link">Saurav Shaurya</a>
            </div>
            
            <ul class="nav-menu" id="nav-menu">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#education" class="nav-link">Education</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            
            <div class="nav-actions">
                <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
                    <span class="theme-icon">🌙</span>
                </button>
                <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Hero Section (Dark Green Background) -->
    <section class="hero" id="home">
        <div class="hero-container">
            <!-- Profile Section -->
            <div class="profile-section">
                <div class="profile-image-container">
                    <img src="assets/images/profile.webp" alt="Saurav Shaurya" class="profile-image">
                    <div class="profile-status">
                        <span class="status-indicator"></span>
                    </div>
                </div>
                
                <div class="profile-info">
                    <h1 class="profile-name">
                        Saurav Shaurya
                        <span class="name-secondary">सौरव शौर्य</span>
                    </h1>
                    <h2 class="profile-title">Senior Software Engineer</h2>
                    <p class="profile-company">Torry Harris Business Solutions</p>
                    
                    <!-- Social Links -->
                    <div class="social-links">
                        <a href="mailto:sauravshaurya@gmail.com" class="social-link" aria-label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/sauravshaurya" class="social-link" target="_blank" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/sauravshaurya" class="social-link" target="_blank" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="tel:+918867717231" class="social-link" aria-label="Phone">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- About Me Content -->
            <div class="about-content">
                <h2 class="about-title">About Me</h2>
                <p class="about-description">
                    Experienced Senior Software Engineer with 6+ years of expertise in Microservices, 
                    Multi-tier architectures, and cloud-based platforms. I specialize in Spring Boot, 
                    Event-Driven Architecture, and have a proven track record of delivering secure, 
                    high-quality code while leading development teams and enhancing system scalability. 
                    I thrive in solving complex problems and am adaptable to drive innovation and 
                    efficiency in high-stakes environments.
                </p>
                
                <div class="download-cv">
                    <a href="assets/files/Saurav_Shaurya_Resume.pdf" class="btn-download" target="_blank">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                        </svg>
                        Download CV
                    </a>
                </div>
                
                <!-- Key Stats -->
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">6+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">2M+</span>
                        <span class="stat-label">Events/Day</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">99.9%</span>
                        <span class="stat-label">System Uptime</span>
                    </div>
                </div>
            </div>
            
            <!-- Interests & Education Side Panel -->
            <div class="side-panels">
                <div class="interests-panel">
                    <h3 class="panel-title">Interests</h3>
                    <ul class="interests-list">
                        <li>Microservices Architecture</li>
                        <li>Event-Driven Systems</li>
                        <li>Cloud Native Development</li>
                        <li>DevOps & Automation</li>
                        <li>System Scalability</li>
                    </ul>
                </div>
                
                <div class="education-panel">
                    <h3 class="panel-title">Education</h3>
                    <div class="education-item">
                        <div class="education-icon">🎓</div>
                        <div class="education-details">
                            <h4>BE Electrical & Electronics</h4>
                            <p>Sir M. Visvesvaraya Institute Of Technology</p>
                            <span class="education-year">2014-2018</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content Sections -->
    <main class="main-content">
        <!-- Experience Section -->
        <section class="section" id="experience">
            <div class="container">
                <h2 class="section-title">Professional Experience</h2>
                <div class="timeline" id="experience-timeline">
                    <!-- Dynamic content will be inserted here -->
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="section section-alt" id="skills">
            <div class="container">
                <h2 class="section-title">Skills & Technologies</h2>
                <div class="skills-grid" id="skills-grid">
                    <!-- Dynamic content will be inserted here -->
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section" id="projects">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid" id="projects-grid">
                    <!-- Dynamic content will be inserted here -->
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section section-alt" id="contact">
            <div class="container">
                <h2 class="section-title">Let's Connect</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <h3>Get in touch</h3>
                        <p>I'm always interested in discussing new opportunities and challenging projects.</p>
                        <div class="contact-details" id="contact-details">
                            <!-- Dynamic content will be inserted here -->
                        </div>
                    </div>
                    <form class="contact-form" id="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 Saurav Shaurya. Built with passion for clean code and great design.</p>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/config.js"></script>
    <script src="js/components.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/animations.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

## CSS Implementation Guidelines

### Hero Section Styling (sections.css)
```css
/* Hero Section - Dark Green Background */
.hero {
    background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-dark) 100%);
    color: var(--white);
    min-height: 100vh;
    padding: 120px 0 80px;
    position: relative;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 300px 1fr 280px;
    gap: 4rem;
    align-items: start;
}

/* Profile Section */
.profile-section {
    text-align: center;
}

.profile-image-container {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
}

.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.05);
}

.profile-status {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: var(--white);
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.status-indicator {
    display: block;
    width: 12px;
    height: 12px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.profile-name {
    font-size: var(--text-3xl);
    font-weight: var(--font-bold);
    margin-bottom: 0.5rem;
    line-height: 1.2;
}

.name-secondary {
    display: block;
    font-size: var(--text-lg);
    font-weight: var(--font-normal);
    opacity: 0.8;
    margin-top: 0.25rem;
}

.profile-title {
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
}

.profile-company {
    font-size: var(--text-base);
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
}

/* Social Links */
.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* About Content */
.about-content {
    padding-top: 2rem;
}

.about-title {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    margin-bottom: 2rem;
    line-height: 1.1;
}

.about-description {
    font-size: var(--text-lg);
    line-height: 1.7;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
}

.btn-download {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    color: var(--white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: var(--font-medium);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 3rem;
}

.btn-download:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.stat-item {
    text-align: center;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
    display: block;
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--white);
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Side Panels */
.side-panels {
    space-y: 3rem;
}

.interests-panel,
.education-panel {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
}

.panel-title {
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    margin-bottom: 1.5rem;
    color: var(--white);
}

.interests-list {
    list-style: none;
    padding: 0;
}

.interests-list li {
    padding: 0.75rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: var(--text-base);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.interests-list li:last-child {
    border-bottom: none;
}

.interests-list li:before {
    content: "•";
    color: rgba(255, 255, 255, 0.5);
    margin-right: 0.75rem;
}

.education-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.education-icon {
    font-size: 1.5rem;
    margin-top: 0.25rem;
}

.education-details h4 {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--white);
    margin-bottom: 0.25rem;
}

.education-details p {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
}

.education-year {
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
    }
    
    .stats-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .hero {
        padding: 100px 0 60px;
    }
    
    .hero-container {
        padding: 0 1rem;
        gap: 2rem;
    }
    
    .profile-image {
        width: 150px;
        height: 150px;
    }
    
    .about-title {
        font-size: var(--text-3xl);
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
```

## JavaScript Configuration

### Updated config.js with Projects Data
```javascript
const CONFIG = {
    // Personal Information
    personal: {
        name: "Saurav Shaurya",
        nameSecondary: "सौरव शौर्य",
        title: "Senior Software Engineer",
        company: "Torry Harris Business Solutions",
        email: "sauravshaurya@gmail.com",
        phone: "+91-8867717231",
        linkedin: "https://linkedin.com/in/sauravshaurya",
        github: "https://github.com/sauravshaurya",
        location: "Bangalore, India"
    },
    
    // About Me
    about: {
        description: "Experienced Senior Software Engineer with 6+ years of expertise in Microservices, Multi-tier architectures, and cloud-based platforms. I specialize in Spring Boot, Event-Driven Architecture, and have a proven track record of delivering secure, high-quality code while leading development teams and enhancing system scalability. I thrive in solving complex problems and am adaptable to drive innovation and efficiency in high-stakes environments.",
        interests: [
            "Microservices Architecture",
            "Event-Driven Systems", 
            "Cloud Native Development",
            "DevOps & Automation",
            "System Scalability"
        ],
        stats: [
            { number: "6+", label: "Years Experience" },
            { number: "2M+", label: "Events/Day" },
            { number: "99.9%", label: "System Uptime" }
        ]
    },
    
    // Work Experience
    experience: [
        {
            id: 1,
            position: "Senior Software Engineer (Backend and DevOps)",
            company: "Torry Harris Business Solutions",
            location: "Bangalore, India",
            duration: "Oct 2022 – Present",
            current: true,
            achievements: [
                "Developed cutting-edge microservices CI/CD architecture using GitHub Actions, ArgoCD, ArgoRollouts, Helm Charts, and Terraform improving deployment time by 70%",
                "Implemented comprehensive monitoring solutions using Grafana, Prometheus, and Logzio ensuring 99.9% system uptime",
                "Built event processing platform handling 2 million events per day with sub-200ms response times",
                "Led team of 5 members developing Customer Master Data Management System using Spring Boot and Apache Kafka"
            ],
            technologies: ["Spring Boot", "Apache Kafka", "GitHub Actions", "ArgoCD", "Helm", "Terraform", "Grafana", "Prometheus", "AWS", "Kubernetes"]
        },
        {
            id: 2,
            position: "Software Engineer",
            company: "Torry Harris Business Solutions", 
            location: "Bangalore, India",
            duration: "Jan 2020 – Oct 2022",
            achievements: [
                "Developed 2 proof of concepts for Microservices Architecture using Apache Kafka and Spring Cloud",
                "Established microservices platform foundation reducing
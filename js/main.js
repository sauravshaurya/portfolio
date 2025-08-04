// Main Application Logic
class Portfolio {
    constructor() {
        this.activeSection = 'home';
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        try {
            console.log('Starting portfolio initialization...');
            
            // Generate dynamic content
            console.log('Generating dynamic content...');
            Components.generateAll();
            
            // Initialize navigation
            console.log('Initializing navigation...');
            Navigation.init();
            
            // Initialize animations
            console.log('Initializing animations...');
            Animations.init();
            
            // Initialize contact form
            console.log('Initializing contact form...');
            this.initContactForm();
            
            console.log('Portfolio initialized successfully');
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }



    initContactForm() {
        const contactForm = Utils.$('#contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(contactForm);
        });
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            this.showFormMessage('success', 'Thank you! Your message has been sent successfully.');
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showFormMessage(type, message) {
        const existingMessage = Utils.$('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message--${type}`;
        messageEl.textContent = message;
        
        const form = Utils.$('#contact-form');
        form.appendChild(messageEl);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }



    // Utility method to update theme (for future dark mode toggle)
    updateTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        CONFIG.ui.theme = theme;
        localStorage.setItem('portfolio-theme', theme);
    }

    // Load saved theme preference
    loadThemePreference() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            this.updateTheme(savedTheme);
        }
    }
}

// Initialize the portfolio when script loads
const portfolio = new Portfolio(); 
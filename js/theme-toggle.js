// Enhanced Theme Toggle System
const ThemeToggle = {
    // Theme options
    themes: {
        light: {
            name: 'light',
            icon: '🌞',
            label: 'Light Mode'
        },
        dark: {
            name: 'dark', 
            icon: '🌙',
            label: 'Dark Mode'
        },
        auto: {
            name: 'auto',
            icon: '🌗',
            label: 'Auto (System)'
        }
    },

    // Current theme index for cycling
    currentThemeIndex: 0,
    themeOrder: ['light', 'dark', 'auto'],

    // Initialize theme system
    init() {
        console.log('Initializing enhanced theme toggle...');
        
        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.currentThemeIndex = this.themeOrder.indexOf(savedTheme);
        
        // Apply initial theme
        this.applyTheme(savedTheme);
        
        // Setup theme toggle button
        this.setupThemeToggle();
        
        // Listen for system theme changes
        this.listenForSystemThemeChanges();
        
        console.log(`Theme system initialized with: ${savedTheme}`);
    },

    // Setup the theme toggle button functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) {
            console.error('Theme toggle button not found');
            return;
        }

        // Update button appearance
        this.updateToggleButton(themeToggle);

        // Add click listener
        themeToggle.addEventListener('click', () => {
            this.cycleTheme();
        });

        // Add keyboard support
        themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.cycleTheme();
            }
        });

        console.log('Theme toggle button configured');
    },

    // Cycle through themes
    cycleTheme() {
        // Move to next theme
        this.currentThemeIndex = (this.currentThemeIndex + 1) % this.themeOrder.length;
        const newTheme = this.themeOrder[this.currentThemeIndex];
        
        // Apply the new theme
        this.applyTheme(newTheme);
        
        // Save preference
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Update button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            this.updateToggleButton(themeToggle);
        }

        // Show theme change notification
        this.showThemeNotification(newTheme);
        
        console.log(`Theme changed to: ${newTheme}`);
    },

    // Apply theme to document
    applyTheme(themeName) {
        const html = document.documentElement;
        
        // Remove existing theme classes
        this.themeOrder.forEach(theme => {
            html.classList.remove(`theme-${theme}`);
        });
        
        // Set data-theme attribute
        html.setAttribute('data-theme', themeName);
        
        // Add theme class for additional styling if needed
        html.classList.add(`theme-${themeName}`);
        
        // Handle auto theme
        if (themeName === 'auto') {
            this.handleAutoTheme();
        }

        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: themeName }
        }));
    },

    // Handle automatic theme based on system preference
    handleAutoTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const html = document.documentElement;
        
        if (prefersDark) {
            html.classList.add('auto-dark');
        } else {
            html.classList.remove('auto-dark');
        }
    },

    // Update the toggle button appearance
    updateToggleButton(button) {
        const currentTheme = this.themeOrder[this.currentThemeIndex];
        const themeData = this.themes[currentTheme];
        
        // Add changing animation
        button.classList.add('changing');
        
        // Update icon after a short delay for animation effect
        setTimeout(() => {
            const iconElement = button.querySelector('.theme-icon');
            if (iconElement) {
                iconElement.textContent = themeData.icon;
            }
        }, 150);
        
        // Remove changing class after animation
        setTimeout(() => {
            button.classList.remove('changing');
        }, 600);
        
        // Update aria-label
        button.setAttribute('aria-label', `Switch to next theme (current: ${themeData.label})`);
        
        // Update title
        button.setAttribute('title', `Current: ${themeData.label}. Click to cycle themes.`);
    },

    // Show theme change notification
    showThemeNotification(themeName) {
        // Remove existing notification
        const existingNotification = document.querySelector('.theme-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-green);
                color: white;
                padding: 12px 20px;
                border-radius: 25px;
                font-size: 14px;
                font-weight: 500;
                box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 8px;
                animation: slideInRight 0.3s ease-out forwards;
                opacity: 0;
                transform: translateX(100px);
            ">
                <span>${this.themes[themeName].icon}</span>
                <span>${this.themes[themeName].label} activated</span>
            </div>
        `;

        // Add styles for animation
        if (!document.querySelector('#theme-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'theme-notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideOutRight {
                    from {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            const notificationDiv = notification.querySelector('div');
            notificationDiv.style.opacity = '1';
            notificationDiv.style.transform = 'translateX(0)';
        }, 10);

        // Remove after delay
        setTimeout(() => {
            const notificationDiv = notification.querySelector('div');
            notificationDiv.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    },

    // Listen for system theme changes
    listenForSystemThemeChanges() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        mediaQuery.addEventListener('change', (e) => {
            // Only update if current theme is auto
            const currentTheme = this.themeOrder[this.currentThemeIndex];
            if (currentTheme === 'auto') {
                this.handleAutoTheme();
                this.showThemeNotification('auto');
            }
        });
    },

    // Get current theme
    getCurrentTheme() {
        return this.themeOrder[this.currentThemeIndex];
    },

    // Set specific theme
    setTheme(themeName) {
        if (this.themeOrder.includes(themeName)) {
            this.currentThemeIndex = this.themeOrder.indexOf(themeName);
            this.applyTheme(themeName);
            localStorage.setItem('portfolio-theme', themeName);
            
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                this.updateToggleButton(themeToggle);
            }
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    ThemeToggle.init();
});

// Export for use in other modules
window.ThemeToggle = ThemeToggle; 
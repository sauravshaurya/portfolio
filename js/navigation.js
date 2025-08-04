// Navigation and Theme Management
const Navigation = {
    // Initialize navigation functionality
    init() {
        this.initSmoothScroll();
        this.initActiveNavigation();
        this.initMobileMenu();
        this.initThemeToggle();
        this.initScrollHeader();
    },

    // Smooth scroll navigation
    initSmoothScroll() {
        const navLinks = Utils.$$('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetSection = Utils.$(`#${targetId}`);
                
                if (targetSection) {
                    const headerHeight = Utils.$('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                }
            });
        });
    },

    // Active navigation highlighting
    initActiveNavigation() {
        const sections = Utils.$$('section[id]');
        const navLinks = Utils.$$('.nav-link');
        
        const observer = Utils.createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const sectionId = entry.target.id;
                    
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current section link
                    const activeLink = Utils.$(`a[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => {
            observer.observe(section);
        });
    },

    // Mobile menu functionality
    initMobileMenu() {
        const mobileToggle = Utils.$('#mobile-toggle');
        const navMenu = Utils.$('#nav-menu');
        
        if (!mobileToggle || !navMenu) return;

        mobileToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Close menu when clicking on nav links
        const navLinks = Utils.$$('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    },

    toggleMobileMenu() {
        const mobileToggle = Utils.$('#mobile-toggle');
        const navMenu = Utils.$('#nav-menu');
        
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    },

    closeMobileMenu() {
        const mobileToggle = Utils.$('#mobile-toggle');
        const navMenu = Utils.$('#nav-menu');
        
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    },

    // Theme toggle functionality
    initThemeToggle() {
        const themeToggle = Utils.$('#theme-toggle');
        const themeIcon = Utils.$('.theme-icon');
        
        if (!themeToggle) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        this.setTheme(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        });
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        
        const themeIcon = Utils.$('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    },

    // Header scroll effects
    initScrollHeader() {
        const header = Utils.$('.header');
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateHeader = () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }
}; 
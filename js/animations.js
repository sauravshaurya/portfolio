// Animations and Interactions
const Animations = {
    // Initialize scroll animations
    initScrollAnimations() {
        const animatedElements = Utils.$$('[data-aos]');
        
        const observer = Utils.createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.getAttribute('data-aos');
                    entry.target.classList.add('fade-in');
                    
                    // Add specific animation class based on data-aos attribute
                    if (animationType === 'fade-up') {
                        entry.target.classList.add('slide-up');
                    }
                }
            });
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    },

    // Navbar scroll effect
    initNavbarScroll() {
        const navbar = Utils.$('#navbar');
        let lastScrollY = window.scrollY;

        const handleScroll = Utils.throttle(() => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        }, 16);

        window.addEventListener('scroll', handleScroll);
    },

    // Animate stats counters
    animateStats() {
        const statNumbers = Utils.$$('.stat-number');
        
        const observer = Utils.createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    
                    // Extract number and suffix
                    const matches = finalValue.match(/^(\d+(?:\.\d+)?)(.*)/);
                    if (matches) {
                        const number = parseFloat(matches[1]);
                        const suffix = matches[2];
                        
                        this.animateNumber(target, 0, number, suffix, 2000);
                        observer.unobserve(target);
                    }
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    },

    // Animate number counting
    animateNumber(element, start, end, suffix, duration) {
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            
            element.textContent = Math.floor(current) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = end + suffix;
            }
        };
        
        requestAnimationFrame(updateNumber);
    },

    // Typing animation for hero title
    initTypingAnimation() {
        const heroTitle = Utils.$('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 500);
    },

    // Parallax effect for hero section
    initParallax() {
        const hero = Utils.$('.hero');
        if (!hero) return;

        const handleScroll = Utils.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }, 16);

        window.addEventListener('scroll', handleScroll);
    },

    // Initialize all animations
    init() {
        this.initScrollAnimations();
        this.initNavbarScroll();
        this.animateStats();
        this.initTypingAnimation();
        this.initParallax();
    }
}; 
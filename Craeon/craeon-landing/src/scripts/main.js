document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeFilters();
        initializeHeaderScroll();
        initializeSmoothScroll();
        initializeScrollAnimations();
    } catch (error) {
        console.error('Error initializing page:', error);
    }
});

function initializeSmoothScroll() {
    try {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing smooth scroll:', error);
    }
}

function initializeScrollAnimations() {
    try {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const spotlightsSection = document.querySelector('.spotlights-section');
        if (spotlightsSection) {
            observer.observe(spotlightsSection);
        }

        document.querySelectorAll('.spotlight-card').forEach(card => {
            observer.observe(card);
        });
    } catch (error) {
        console.error('Error initializing scroll animations:', error);
    }
}

function initializeFilters() {
    try {
        const filters = document.querySelectorAll('.filter');
        const spotlights = document.querySelectorAll('.spotlight-card');

        if (!filters.length || !spotlights.length) return;

        filterSpotlights('all');

        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                try {
                    handleFilterClick(filter, filters);
                    const spotlightsSection = document.querySelector('.spotlights-section');
                    if (spotlightsSection) {
                        spotlightsSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    console.error('Error handling filter click:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error initializing filters:', error);
    }
}

function handleFilterClick(selectedFilter, allFilters) {
    if (!selectedFilter || !allFilters) return;

    try {
        const category = selectedFilter.dataset.category;
        
        // Handle protocol button click
        if (category === 'protocol') {
            window.location.href = 'pages/protocol.html';
            return;
        }
        
        allFilters.forEach(f => f.classList.remove('active'));
        selectedFilter.classList.add('active');
        
        filterSpotlights(category);
    } catch (error) {
        console.error('Error handling filter click:', error);
    }
}

function filterSpotlights(category) {
    try {
        const spotlights = document.querySelectorAll('.spotlight-card');
        if (!spotlights.length) return;
        
        spotlights.forEach(spotlight => {
            const shouldShow = category === 'all' || spotlight.dataset.category === category;
            spotlight.classList.toggle('hidden', !shouldShow);
        });
    } catch (error) {
        console.error('Error filtering spotlights:', error);
    }
}

function initializeHeaderScroll() {
    try {
        const header = document.querySelector('.header');
        if (!header) return;

        let ticking = false;

        function updateHeader() {
            header.classList.toggle('scrolled', window.scrollY > 50);
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
    } catch (error) {
        console.error('Error initializing header scroll:', error);
    }
}
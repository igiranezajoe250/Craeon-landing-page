// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation targets
    const animateElements = document.querySelectorAll(
        '.service-card, .portfolio-card, .approach-card, .contact-form'
    );
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.classList.add(`delay-${(index + 1) * 100}`);
        observer.observe(el);
    });

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Card interactions: metadata overlay + glow
    const cards = document.querySelectorAll('.spotlight-card');

    cards.forEach(card => {
        const description = card.querySelector('p');
        const metadata = card.querySelector('.investment-meta');

        // Ensure initial state driven by classes (CSS should handle transitions)
        card.classList.remove('is-hovered', 'meta-visible');
        card.style.setProperty('--x', '50%');
        card.style.setProperty('--y', '50%');

        // timers for debounced transitions
        let metaTimer = null;

        const showMeta = (delay = 160) => {
            clearTimeout(metaTimer);
            card.classList.add('is-hovered');
            metaTimer = setTimeout(() => {
                card.classList.add('meta-visible');
            }, delay);
        };

        const hideMeta = (delay = 100) => {
            clearTimeout(metaTimer);
            // hide meta first, then remove hovered state slightly later for smoothness
            card.classList.remove('meta-visible');
            metaTimer = setTimeout(() => {
                card.classList.remove('is-hovered');
            }, delay + 80);
        };

        // Pointer / mouse events
        card.addEventListener('mouseenter', () => showMeta(120));
        card.addEventListener('mouseleave', () => hideMeta(80));

        // Keyboard accessibility
        card.addEventListener('focusin', () => showMeta(0));
        card.addEventListener('focusout', () => hideMeta(0));

        // Touch: toggle metadata on first tap, let links inside work on second tap
        let touchToggled = false;
        card.addEventListener('touchstart', (ev) => {
            // If metadata already visible, allow normal interaction
            if (!card.classList.contains('meta-visible')) {
                ev.preventDefault(); // prevent immediate click navigation — first tap reveals meta
                showMeta(0);
                touchToggled = true;
                // close if tapped outside — handled via touchend listener on window
            }
        }, { passive: false });

        // Close meta if user taps outside the card after a touch reveal
        window.addEventListener('touchstart', (ev) => {
            if (touchToggled && !card.contains(ev.target)) {
                hideMeta(0);
                touchToggled = false;
            }
        }, { passive: true });

        // Mousemove glow tracking (use rAF for performance)
        let rafId = null;
        const onPointerMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
            const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        };

        card.addEventListener('mousemove', onPointerMove);
        card.addEventListener('touchmove', onPointerMove, { passive: true });

        // Reset glow on leave
        card.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                card.style.setProperty('--x', '50%');
                card.style.setProperty('--y', '50%');
            });
        });

        // Ensure metadata is hidden initially (in case CSS fallback needed)
        if (metadata) {
            metadata.style.visibility = ''; // prefer class-driven visibility in CSS
            metadata.style.opacity = '';
            metadata.style.transform = '';
        }
    });
});
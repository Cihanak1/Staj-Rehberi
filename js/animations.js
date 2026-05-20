/* =========================================
   INTERSECTION OBSERVER (Scroll Animasyonları)
   ========================================= */

export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = entry.target.getAttribute('data-index') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Timeline adımlarını gözlemle
    document.querySelectorAll('.step-container').forEach(step => {
        observer.observe(step);
    });

    // Alert box'ı gözlemle
    const alertBox = document.getElementById('alert-box');
    if (alertBox) {
        observer.observe(alertBox);
    }
}

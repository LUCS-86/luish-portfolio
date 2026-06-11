document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const wrapper = document.querySelector('.slider-wrapper');
    
    let currentIndex = 0;
    const totalSlides = tabLinks.length;

    function goToSlide(index) {
        // Wrap around
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        
        // Move slider
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update tabs
        tabLinks.forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
        
        // Scroll to top of content smoothly
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.scrollTo({
            top: document.querySelector('.main-content').offsetTop - headerHeight - 10,
            behavior: 'smooth'
        });
    }

    // Tab clicks
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', () => goToSlide(index));
    });

    // Dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Arrow buttons
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        }
    });
    
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    wrapper.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    wrapper.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            goToSlide(currentIndex + 1);
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            goToSlide(currentIndex - 1);
        }
    }
});

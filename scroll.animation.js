
document.addEventListener('DOMContentLoaded', function() {
    const foodItems = document.querySelectorAll('.food-item');
        const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    foodItems.forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const fades = document.querySelectorAll('.fade-in');

    const options = { threshold:0.1};

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    }, options);

    fades.forEach(el => observer.observe(el));
    
});
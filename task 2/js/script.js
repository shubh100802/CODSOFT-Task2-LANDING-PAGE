document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('header nav ul');
    const header = document.querySelector('header');

    // Check screen width and adjust navbar visibility
    const checkScreenSize = () => {
        if (window.innerWidth > 768) {
            nav.style.display = 'flex'; 
        } else {
            nav.style.display = 'none'; 
        }
    };

    
    checkScreenSize();

    // Toggle menu visibility when burger is clicked
    burger.addEventListener('click', (event) => {
        event.stopPropagation(); 
        if (window.innerWidth <= 768) {  
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            burger.classList.toggle('toggle'); // Burger icon toggle animation
        }
    });

    // Hide navbar when clicking outside on small screens
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) { 
            if (!header.contains(event.target)) { 
                nav.style.display = 'none'; 
                burger.classList.remove('toggle'); 
            }
        }
    });

    
    window.addEventListener('resize', checkScreenSize);
});





document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero h1');
    const heroSubText = document.querySelector('.hero p');

    // Initial animations
    heroText.style.animation = 'fadeInDown 1s forwards';
    heroSubText.style.animation = 'fadeInUp 1s forwards';

    // Adding a scroll-triggered fade-in effect
    window.addEventListener('scroll', () => {
        const offsetY = window.scrollY;

        if (offsetY > 50) {
            heroText.style.animation = 'fadeInDown 1s forwards';
            heroSubText.style.animation = 'fadeInUp 1s forwards';
        } else {
            heroText.style.animation = 'none';
            heroSubText.style.animation = 'none';
        }
    });
});
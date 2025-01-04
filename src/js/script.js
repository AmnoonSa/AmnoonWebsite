const images = [
    "./src/img/news/news1.png",
    "./src/img/news/news2.png"
];

const texts = [
    "Security consultant Dr. Abdulaziz Al-Hoshan: Thanks to Allah and the efforts of the Ministry of Interior, the Kingdom has achieved first place in safety and low crime rates.",
    "Security media professor Major General Dr. Barakah Al-Hoshan: The Ministry of Interior has achieved exceptional accomplishments, surpassing interior ministries worldwide.",
];

let activeIndex = 0;

function updateNews() {
    const newsImage = document.getElementById("newsImage");
    const newsText = document.getElementById("newsText");
    
    // Remove fade-in class to trigger fade-out
    if (newsImage) newsImage.classList.remove('fade-in');
    if (newsText) newsText.classList.remove('fade-in');
    
    // Wait for fade-out to complete before updating content
    setTimeout(() => {
        if (newsImage) {
            newsImage.src = images[activeIndex];
        }
        if (newsText) {
            newsText.textContent = texts[activeIndex];
        }
        
        // Small delay before fading in new content
        setTimeout(() => {
            if (newsImage) newsImage.classList.add('fade-in');
            if (newsText) newsText.classList.add('fade-in');
        }, 100);
        
        activeIndex = (activeIndex + 1) % images.length;
    }, 1500); // Match this with the CSS transition duration
}

// Longer interval to allow for complete animation
setInterval(updateNews, 10000); // 10 seconds between changes

// Initial update with fade-in
document.addEventListener('DOMContentLoaded', () => {
    const newsImage = document.getElementById("newsImage");
    const newsText = document.getElementById("newsText");
    
    if (newsImage) {
        newsImage.src = images[0];
        newsImage.classList.add('fade-in');
    }
    if (newsText) {
        newsText.textContent = texts[0];
        newsText.classList.add('fade-in');
    }
});

    // Initialize AOS with updated settings
    AOS.init({
        duration: 1200,
        once: false, // Changed to false to allow repeat animations
        offset: 120,
        easing: 'ease-in-out',
        delay: 100,
        mirror: true, // Enable animations when scrolling up
        anchorPlacement: 'top-bottom', // Trigger animation when the top of element reaches bottom of window
    });

    // Add scroll event listener to refresh AOS
    window.addEventListener('scroll', function() {
        AOS.refresh();
    });

    // Refresh AOS when page is fully loaded
    window.addEventListener('load', function() {
        AOS.refresh();
    });

    // Add this to your existing scroll handling code
    document.addEventListener('scroll', function() {
        // Get all elements with AOS attributes
        const aosElements = document.querySelectorAll('[data-aos]');
        
        aosElements.forEach(element => {
            // Check if element is in viewport
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInViewport) {
                // Remove and re-add aos-animate class to restart animation
                element.classList.remove('aos-animate');
                setTimeout(() => {
                    element.classList.add('aos-animate');
                }, 10);
            }
        });
    }, {
        passive: true // Optimization for scroll performance
    });

    document.addEventListener("DOMContentLoaded", () => {
        const loader = document.getElementById('loading');
        // Hide the loader after 1 second (or after the page fully loads)
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    });
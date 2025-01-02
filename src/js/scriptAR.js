const images = [
    "./src/img/news/news1.png",
    "./src/img/news/news2.png"
];

const texts = [
    "المستشار الأمني د. عبد العزيز الحوشان: بفضل الله ثم بجهود #وزارة_الداخلية، حققت المملكة المركز الأول في مستوى الأمان وانخفاض معدلات الجريمة",
    "أستاذ الإعلام الأمني اللواء د. بركة الحوشان: وزارة الداخلية حققت إنجازات استثنائية تفوقت بها على وزارات الداخلية حول العالم",
];

let activeIndex = 0;

function updateNews() {
    const newsImage = document.getElementById("newsImage");
    const newsText = document.getElementById("newsText");
    
    if (newsImage) newsImage.classList.remove('fade-in');
    if (newsText) newsText.classList.remove('fade-in');
    
    setTimeout(() => {
        if (newsImage) {
            newsImage.src = images[activeIndex];
        }
        if (newsText) {
            newsText.textContent = texts[activeIndex];
        }
        
        setTimeout(() => {
            if (newsImage) newsImage.classList.add('fade-in');
            if (newsText) newsText.classList.add('fade-in');
        }, 100);
        
        activeIndex = (activeIndex + 1) % images.length;
    }, 1500);
}

setInterval(updateNews, 10000);

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

AOS.init({
    duration: 1200,
    once: false,
    offset: 120,
    easing: 'ease-in-out',
    delay: 100,
    mirror: true,
    anchorPlacement: 'top-bottom',
});

window.addEventListener('scroll', function() {
    AOS.refresh();
});

window.addEventListener('load', function() {
    AOS.refresh();
});

document.addEventListener('scroll', function() {
    const aosElements = document.querySelectorAll('[data-aos]');
    
    aosElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport) {
            element.classList.remove('aos-animate');
            setTimeout(() => {
                element.classList.add('aos-animate');
            }, 10);
        }
    });
}, {
    passive: true
});
const images = [
    "./src/img/news/news1.jpg",
    "./src/img/news/news2.jpg",
    "./src/img/news/news3.png",
    "./src/img/news/news4.png",
    "./src/img/news/news5.jpeg",
    "./src/img/news/news6.jpeg",
    "./src/img/news/news7.jpeg",
    "./src/img/news/news8.jpg",
    "./src/img/news/news9.png",
    "./src/img/news/news10.png"
];

const texts = [
    "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة لأمن وسلامة المرافق الحيوية، حيث سيقدم ورقتي عمل يتم عرضهما من قِبل نخبة من المستشارين الأمنيين. ستعقد الندوة في محافظة ظفار، سلطنة عمان، خلال الفترة من 2 إلى 4 سبتمبر",
    "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة بعنوان 'أمن المرافق الحيوية'، والتي ستعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق البحرية'. سنقدم ورقة عمل حول 'دور الأمن الرقمي في حماية بيانات المرافق الحيوية'، يقدمها اللواء الدكتور المتقاعد بركة بن زامل الحوشان",
    "يتشرف مكتب آمنون للاستشارات الأمنية بتقديم ورقة عمل خلال ندوة 'أمن المرافق الحيوية'، والتي ستُعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق البحرية'. ستتناول الورقة أمن المطارات، وسيقدمها اللواء المتقاعد يوسف بن أحمد القحطاني",
    "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في الندوة الثالثة لأمن المرافق الحيوية، والتي ستُعقد في صلالة، سلطنة عمان، تحت عنوان 'أمن الموانئ والمرافق الحيوية'. سيقدم مستشار بحري، اللواء البحري المتقاعد عبدالله بن ناصر أباالخيل، عرضًا تقديميًا حول أمن الموانئ",
    "قام عدد من المستشارين بزيارة معرض الأمن والسلامة الدولي 'إنترسك' بالرياض، حيث اطلعوا على أحدث الابتكارات والحلول التقنية في مجالات الأمن السيبراني والحماية. كما استعرضوا التقنيات المتقدمة التي تهدف إلى تعزيز أمن المرافق الحيوية والسلامة العامة",
    "مر عام مليء بالتقدم والتطور، اتسم بالنمو المتقدم والمساهمات المستمرة. حفظ الله وطننا وقائد مسيرتنا، ودامت راية بلادنا عالية في ظل قيادتنا الرشيدة",
    "شارك مكتب آمنون للاستشارات الأمنية في معرض ومؤتمر الأعمال SIBEC 2024 في أبوظبي. وخلال الفعالية، التقى الدكتور عبدالعزيز الحوشان، المدير التنفيذي، بالسيد مايك برونزل، نائب الرئيس لتطوير الأعمال العالمية في NFPA، والسيد إبراهيم لاري، الرئيس التنفيذي لـ SIBEC، والسيدة دانا كمال، مديرة التطوير الدولي للشرق الأوسط في NFPA. كما شهد الحدث مشاركة اللواء البحري المتقاعد عبدالله بن ناصر أباالخيل، مستشار بحري لدى مكتب آمنون للاستشارات الأمنية، والسيدة لبنى الجندي، مديرة العلاقات والاتصالات. وتركزت النقاشات حول استكشاف سبل وآفاق التعاون",
    "تحتفل سلطنة عمان بالعيد الوطني الرابع والخمسين المجيد، وبهذه المناسبة يتقدم مكتب آمنون للاستشارات الأمنية بأسمى آيات التهاني والتبريكات إلى جلالة السلطان هيثم بن طارق، حفظه الله، وإلى الشعب العماني النبيل، متمنين دوام التقدم والازدهار في هذا العهد المبارك. دامت سلطنة العز في رفعة وأمن ورخاء",
    "الدكتور عبدالعزيز الحوشان، مستشار أمني: بفضل الله وجهود وزارة الداخلية، حققت المملكة المركز الأول في الأمن وانخفاض معدلات الجريمة",
    "اللواء الدكتور بركة الحوشان، أستاذ الإعلام الأمني: حققت وزارة الداخلية إنجازات استثنائية تفوقت بها على وزارات الداخلية العالمية",
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

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loading');
    // Hide the loader after 1 second (or after the page fully loads)
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
});
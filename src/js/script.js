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
    "./src/img/news/news10.png",
    "./src/img/news/news11.jpeg",
    "./src/img/news/news12.jpeg",
    "./src/img/news/news13.jpeg",
];

const texts = [
    "Amnoon Security Consulting Office participates in the third seminar on the security and safety of critical infrastructure, presenting two working papers delivered by a selection of security consultants. The seminar will be held in Dhofar Governorate, Sultanate of Oman, from September 2-4",
    "Amnoon Security Consulting Office is honored to participate in the third seminar on 'Critical Infrastructure Security,' which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' We will present a working paper on 'The Role of Digital Security in Protecting Critical Infrastructure Data,' delivered by retired Brigadier General Dr. Barakah bin Zamil Al-Hoshan",
    "Amnoon Security Consulting Office is honored to present a working paper at the 'Critical Infrastructure Security' seminar, which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' The paper on airport security will be presented by retired Brigadier General Yusuf bin Ahmed Al-Qahtani",
    "Amnoon Security Consulting Office is honored to participate in the Third Critical Infrastructure Security Symposium, which will be held in Salalah, Sultanate of Oman, under the title ‘Port and Critical Infrastructure Security’. A presentation on port security will be delivered by Maritime Consultant, Retired Rear Admiral Abdullah bin Nasser Abalkhail",
    "A number of consultants visited the International Security and Safety Exhibition 'Intersec' in Riyadh, where they explored the latest innovations and technological solutions in the fields of cybersecurity and protection. They also reviewed advanced technologies aimed at enhancing critical infrastructure and public safety.",
    "A year has passed full of progress and development, characterized by advanced growth and continuous contributions. May God sustain our nation and the leader of our journey, and may the flag of our country continue to fly high under our wise leadership.",
    "Amnoon Security Consulting participated in the SIBEC 2024 Business Exhibition and Conference in Abu Dhabi. During the event, Dr. Abdulaziz Al-Hoshan, the Executive Director, met with Mr. Mike Brunzell, Vice President for Global Business Development at NFPA; Mr. Ibrahim Lari, CEO of SIBEC; and Ms. Dana Kamal, Director of International Development for the Middle East at NFPA. The event also saw the participation of retired Naval Brigadier Abdullah bin Nasser Aba Al-Khail, Maritime Consultant at Amnoon Security Consulting, and Ms. Lubna Al-Jundi, Director of Relations and Communications. Discussions focused on exploring avenues and prospects for cooperation",
    "The Sultanate of Oman celebrates its glorious 54th National Day, and on this occasion, Amnoon Security Consulting extends its heartfelt congratulations and best wishes to His Majesty Sultan Haitham bin Tariq, may God protect him, and to the noble Omani people, wishing continued progress and prosperity under this blessed era. May the Sultanate of Pride always remain in glory, security, and prosperity",
    "Security consultant Dr. Abdulaziz Al-Hoshan: Thanks to Allah and the efforts of the Ministry of Interior, the Kingdom has achieved first place in safety and low crime rates.",
    "Security media professor Major General Dr. Barakah Al-Hoshan: The Ministry of Interior has achieved exceptional accomplishments, surpassing interior ministries worldwide.",
    "Amnoon Security Consulting Office is pleased to extend its sincere congratulations and best wishes to the Custodian of the Two Holy Mosques and His Royal Highness the Crown Prince – may Allah protect them – on the occasion of Founding Day. We pray to the Almighty to safeguard our leadership and our nation and to continue blessing us with security, safety, stability, and prosperity.",
    "Amnoon, February 24, 2025 – Amnon Security Consulting announced, on the sidelines of the Saudi-Jordanian Business Forum, the signing of a strategic investment agreement with Vibes Digital Solutions, under which Amnon will acquire a stake in Vibes. This move aligns with Amnon’s expansion strategy to strengthen its presence in the digital solutions and cybersecurity sector",
    "We extend our heartfelt congratulations to the Custodian of the Two Holy Mosques and His Royal Highness the Crown Prince — the visionary architect of the Kingdom’s transformation — on the occasion of the release of the annual report of #SaudiVision2030.",
    "In its ninth year, the Vision has achieved remarkable successes, milestones, and objectives. Thanks to Allah, then to our inspiring leader and our nation’s people, the Vision has become a living reality — no longer just a future dream, but a present-day accomplishment we are proud to witness.",
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
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    });

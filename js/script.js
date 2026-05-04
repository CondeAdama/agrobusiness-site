// =======================
// TYPING EFFECT HERO
// =======================

const texts = [
    "AgroBusiness Group SARL",
    "Agriculture moderne",
    "Solutions durables",
    "Production intelligente"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");
    if (!element) return;

    if (!isDeleting) {
        currentText = texts[index].substring(0, charIndex++);
    } else {
        currentText = texts[index].substring(0, charIndex--);
    }

    element.textContent = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === texts[index].length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =======================
// NAVBAR DYNAMIQUE
// =======================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-custom");

    if (window.scrollY > 50) {
        navbar.style.background = "#0a5c2e";
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.background = "rgba(0, 100, 0, 0.85)";
        navbar.style.boxShadow = "none";
    }
});


// =======================
// ANIMATION AU SCROLL
// =======================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.custom-card, .activity-card, .product-card, .team-card')
.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    observer.observe(el);
});


// =======================
// TRADUCTION MULTILINGUE
// =======================

const translations = {
    fr: {
        accueil: "Accueil",
        apropos: "À propos",
        services: "Services",
        activites: "Activités",
        contact: "Contact",
        slogan: "Des solutions modernes pour une agriculture durable",
        contact_btn: "Nous contacter"
    },
    en: {
        accueil: "Home",
        apropos: "About",
        services: "Services",
        activites: "Activities",
        contact: "Contact",
        slogan: "Modern solutions for sustainable agriculture",
        contact_btn: "Contact us"
    },
    ar: {
        accueil: "الرئيسية",
        apropos: "من نحن",
        services: "الخدمات",
        activites: "الأنشطة",
        contact: "اتصل بنا",
        slogan: "حلول حديثة لزراعة مستدامة",
        contact_btn: "اتصل بنا"
    },
    zh: {
        accueil: "首页",
        apropos: "关于我们",
        services: "服务",
        activites: "活动",
        contact: "联系",
        slogan: "现代农业可持续解决方案",
        contact_btn: "联系我们"
    }
};


// =======================
// CHANGER LANGUE
// =======================

function changeLanguage(lang) {
    const t = translations[lang];

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (t[key]) el.textContent = t[key];
    });

    // direction arabe
    if (lang === "ar") {
        document.body.dir = "rtl";
    } else {
        document.body.dir = "ltr";
    }
}


// =======================
// SAUVEGARDE LANGUE
// =======================

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    changeLanguage(lang);
}

// charger langue sauvegardée
const savedLang = localStorage.getItem("lang") || "fr";
changeLanguage(savedLang);
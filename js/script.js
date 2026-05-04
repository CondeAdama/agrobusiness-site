// =======================
// TYPING EFFECT HERO
// =======================

const texts = [
    "AgroBusiness Group SARL ",
    "Agriculture moderne ",
    "Solutions durables ",
    "Production intelligente "
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

// window.addEventListener("scroll", () => {
//     const navbar = document.querySelector(".navbar-custom");

//     if (window.scrollY > 50) {
//         navbar.style.background = "#0a5c2e";
//         navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
//     } else {
//         navbar.style.background = "rgba(0, 100, 0, 0.85)";
//         navbar.style.boxShadow = "none";
//     }
// });


// // =======================
// // ANIMATION AU SCROLL
// // =======================

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = "translateY(0)";
//         }
//     });
// }, { threshold: 0.2 });

// document.querySelectorAll('.custom-card, .activity-card, .product-card, .team-card')
// .forEach(el => {
//     el.style.opacity = 0;
//     el.style.transform = "translateY(30px)";
//     observer.observe(el);
// });


// // =======================
// // TRADUCTION MULTILINGUE
// // =======================

// const translations = {
//     fr: {
//         accueil: "Accueil",
//         apropos: "À propos",
//         services: "Services",
//         activites: "Activités",
//         contact: "Contact",
//         slogan: "Des solutions modernes pour une agriculture durable",
//         contact_btn: "Nous contacter"
//     },
//     en: {
//         accueil: "Home",
//         apropos: "About",
//         services: "Services",
//         activites: "Activities",
//         contact: "Contact",
//         slogan: "Modern solutions for sustainable agriculture",
//         contact_btn: "Contact us"
//     },
//     ar: {
//         accueil: "الرئيسية",
//         apropos: "من نحن",
//         services: "الخدمات",
//         activites: "الأنشطة",
//         contact: "اتصل بنا",
//         slogan: "حلول حديثة لزراعة مستدامة",
//         contact_btn: "اتصل بنا"
//     },
//     zh: {
//         accueil: "首页",
//         apropos: "关于我们",
//         services: "服务",
//         activites: "活动",
//         contact: "联系",
//         slogan: "现代农业可持续解决方案",
//         contact_btn: "联系我们"
//     }
// };


// // =======================
// // CHANGER LANGUE
// // =======================

// function changeLanguage(lang) {
//     const t = translations[lang];

//     document.querySelectorAll("[data-translate]").forEach(el => {
//         const key = el.getAttribute("data-translate");
//         if (t[key]) el.textContent = t[key];
//     });

//     // direction arabe
//     if (lang === "ar") {
//         document.body.dir = "rtl";
//     } else {
//         document.body.dir = "ltr";
//     }
// }


// // =======================
// // SAUVEGARDE LANGUE
// // =======================

// function setLanguage(lang) {
//     localStorage.setItem("lang", lang);
//     changeLanguage(lang);
// }

// // charger langue sauvegardée
// const savedLang = localStorage.getItem("lang") || "fr";
// changeLanguage(savedLang);



// ouvrir/fermer chat
function toggleChat() {
    const chat = document.getElementById("chatbox");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

// envoyer message
function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    const chatBody = document.getElementById("chat-body");

    if (message === "") return;

    // message utilisateur
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = message;
    chatBody.appendChild(userMsg);

    // réponse bot
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.textContent = getBotResponse(message);

    setTimeout(() => {
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    input.value = "";
}

// réponses simples (simulation IA)
function getBotResponse(msg) {
    msg = msg.toLowerCase();

    // salutation
    if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")) {
        return "Bonjour 👋 Bienvenue chez AgroBusiness Group SARL. Comment puis-je vous aider aujourd’hui ?";
    }

    // entreprise
    if (msg.includes("qui êtes") || msg.includes("entreprise") || msg.includes("présentation")) {
        return "AgroBusiness Group SARL est une entreprise spécialisée dans l’agriculture moderne, l’élevage et la fourniture d’intrants agricoles en Guinée. Nous accompagnons les producteurs vers une agriculture durable et rentable.";
    }

    // services
    if (msg.includes("service")) {
        return "Nous proposons plusieurs services : production agricole, élevage moderne, vente d’intrants (semences, engrais), mécanisation agricole et accompagnement des agriculteurs.";
    }

    // activités
    if (msg.includes("activité")) {
        return "Nos activités principales sont : l’agriculture en boîte (tomates, piments, aubergines), l’élevage moderne et la distribution de machines agricoles.";
    }

    // produits agricoles
    if (msg.includes("tomate") || msg.includes("piment") || msg.includes("aubergine")) {
        return "Nous produisons des cultures maraîchères comme les tomates, piments et aubergines avec des techniques modernes pour garantir qualité et rendement.";
    }

    // élevage
    if (msg.includes("élevage") || msg.includes("animal")) {
        return "Nous pratiquons un élevage moderne basé sur des techniques efficaces pour améliorer la production et garantir la qualité.";
    }

    // intrants
    if (msg.includes("machine") || msg.includes("tracteur") || msg.includes("intrant")) {
        return "Nous fournissons des intrants agricoles : tracteurs, équipements modernes, semences améliorées et autres outils pour optimiser la production.";
    }

    // localisation
    if (msg.includes("adresse") || msg.includes("localisation") || msg.includes("où")) {
        return "Nous sommes situés à Kobaya, Carrefour Fall, Commune de Sonfonia, Conakry, Guinée.";
    }

    // contact
    if (msg.includes("contact") || msg.includes("numéro") || msg.includes("appel")) {
        return "Vous pouvez nous contacter au +224 622 939 702 ou par email à abgsarl2025@gmail.com.";
    }

    // horaires
    if (msg.includes("heure") || msg.includes("horaire")) {
        return "Nous sommes ouverts du lundi au samedi de 08h00 à 18h00.";
    }

    // mission
    if (msg.includes("mission")) {
        return "Notre mission est de moderniser l’agriculture en Guinée et accompagner les producteurs vers plus de performance et de durabilité.";
    }

    // vision
    if (msg.includes("vision")) {
        return "Notre vision est de devenir un leader de l’agriculture moderne en Afrique.";
    }

    // partenariat
    if (msg.includes("partenaire") || msg.includes("collaboration")) {
        return "Nous sommes ouverts aux partenariats avec investisseurs, agriculteurs et institutions pour développer des projets agricoles innovants.";
    }

    // investissement
    if (msg.includes("investir") || msg.includes("investissement")) {
        return "Investir avec nous, c’est participer au développement d’une agriculture moderne, rentable et durable en Guinée.";
    }

    // aide
    if (msg.includes("aide") || msg.includes("aider")) {
        return "Je peux vous donner des informations sur nos services, activités, produits ou comment nous contacter.";
    }

    // remerciement
    if (msg.includes("merci")) {
        return "Avec plaisir 😊 N’hésitez pas si vous avez d’autres questions.";
    }

    // fallback intelligent
    return "Je ne suis pas sûr de comprendre votre demande 🤔. Pouvez-vous reformuler ou poser une question sur nos services, activités ou contacts ?";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bouttonlangue").addEventListener("click", function() {
        toggleLanguage();
    });
});

function toggleLanguage() {
    const currentLanguage = document.documentElement.lang;
    
    if (currentLanguage === "fr") {
        translateToEnglish();
        document.documentElement.lang = "en";
    } else {
        translateToFrench();
        document.documentElement.lang = "fr";
    }
}

function translateToEnglish() {
    document.getElementById("bouttonlangue").textContent = "Speak French?";
    document.querySelector(".accueil_txt").textContent = "Hello!";
    document.querySelector(".accueil").textContent = "SALIM {SYLOW}";
    document.querySelector(".bio").textContent = 
        "I am Salim, a coding enthusiast. I have developed my skills through my specialties such as digital science and computer science (NSI), and then my web development skills with a BUT in Multimedia and Internet Professions. This allowed me to learn different web languages like HTML, CSS, JAVASCRIPT for FRONT-END languages. PHP, SQL for the BACK-END side.";

    // Translate other elements
    document.querySelector("nav a[href='creation.html']").textContent = "Creations";
    document.querySelector("nav a[href='apropos.html']").textContent = "About";
    document.querySelector("nav a[href='']").textContent = "Blog";

    document.querySelector(".liens_menu a[href='creation.html']").textContent = "Creations";
    document.querySelector(".liens_menu a[href='apropos.html']").textContent = "About";
    document.querySelector(".liens_menu a[href='']").textContent = "Blog";
    document.querySelector(".liens_menu a[href='creation.html#contact']").textContent = "Contact";

    document.querySelector(".intro__heading h2").innerHTML = "DEVELOPER <br>WEB";
    document.querySelector(".intro__heading p").textContent = "HTML/CSS/JAVASCRIPT/PHP/SQL/PYTHON";

    document.getElementById("voirplus1").textContent = "See more";
    document.getElementById("voirplus2").textContent = "See more";

    document.querySelectorAll(".intro__heading h2")[1].innerHTML = "DIGITAL <br>CREATIONS";
    document.querySelectorAll(".bio")[1].textContent = "I have also developed skills in digital creations...";
}

function translateToFrench() {
    document.getElementById("bouttonlangue").textContent = "Don't speak French?";
    document.querySelector(".accueil_txt").textContent = "Salut !";
    document.querySelector(".accueil").textContent = "SALIM {SYLOW}";
    document.querySelector(".bio").textContent = 
        "Je suis Salim un passionné de code, j'ai pu développer mes compétences via mes spécialités telles que numérique science et informatique (NSI), puis mes compétences en développement web avec un BUT en Métier du Multimédia et de l'Internet. Cela ma donc permis d'apprendre different type de langages du web comme le HTML, le CSS, le JAVA-SCRIPT pour le language FRONT-END. Le PHP, SQL pour le côté BACK-END.";

    // Translate other elements
    document.querySelector("nav a[href='creation.html']").textContent = "Créations";
    document.querySelector("nav a[href='apropos.html']").textContent = "A propos";
    document.querySelector("nav a[href='']").textContent = "Blog";

    document.querySelector(".liens_menu a[href='creation.html']").textContent = "Créations";
    document.querySelector(".liens_menu a[href='apropos.html']").textContent = "A propos";
    document.querySelector(".liens_menu a[href='']").textContent = "Blog";
    document.querySelector(".liens_menu a[href='creation.html#contact']").textContent = "Contact";

    document.querySelector(".intro__heading h2").innerHTML = "DEVELOPPER <br>WEB";
    document.querySelector(".intro__heading p").textContent = "HTML/CSS/JAVASCRIPT/PHP/SQL/PYTHON";

    document.getElementById("voirplus1").textContent = "En voir plus";
    document.getElementById("voirplus2").textContent = "En voir plus";

    document.querySelectorAll(".intro__heading h2")[1].innerHTML = "CREATIONS <br>NUMERIQUES";
    document.querySelectorAll(".bio")[1].textContent = "J'ai également pu développer des compétences en créations numériques...";
}

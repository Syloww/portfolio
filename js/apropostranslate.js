document.addEventListener('DOMContentLoaded', function() {
    // Define translations object
    const translations = {
        "Créations": "Creations",
        "A propos": "About",
        "Blog": "Blog",
        "Contact": "Contact",
        "Mon Cv": "My CV",
        "Télécharger — mon CV !": "Download — my CV !",
        "FORMATIONS —": "EDUCATION —",
        "A propos —": "ABOUT —",
        "Compétences —": "Skills —",
        "Actuellement en BUT MMI j'ai pu donc développer mes connaissances en développement web et réaliser plus projet, qu'ils soient professionnels ou personnels.": "Currently in BUT MMI I have been able to develop my knowledge in web development and carry out more projects, whether they are professional or personal.",
        "Je m'appelle Salim, j'ai 18 ans et je suis passionné de code depuis mes années de lycée. J'ai pu développer mes compétences via mes spécialités telles que numérique science et informatique (NSI), puis mes compétences en développement web avec un BUT en Métier du Multimédia et de l'Internet.": "My name is Salim, I am 18 years old and I have been passionate about coding since my high school years. I have been able to develop my skills through my specialties such as digital science and computer science (NSI), then my skills in web development with a BUT in Multimedia and Internet.",
        "Francais (natif)": "French (native)",
        "Anglais (B2)": "English (B2)",
        "Mulhouse": "Mulhouse",
        "sylowcontact@gmail.com": "sylowcontact@gmail.com",
        "Langues": "Languages",
        "Contact": "Contact",
        "Télécharger — mon CV !": "Download — my CV !"
    };

    // Function to translate all elements
    function translatePageToEnglish() {
        // Translate text contents
        const elements = document.querySelectorAll('.content, .lien, .font-7, .bio, .bioinfo, .bioinfo.biotitre, .content__title, .intro__title-sub');
        elements.forEach(element => {
            if (translations[element.textContent.trim()]) {
                element.textContent = translations[element.textContent.trim()];
            }
        });

        // Translate alt attribute for images
        const images = document.querySelectorAll('img[alt]');
        images.forEach(image => {
            if (translations[image.alt.trim()]) {
                image.alt = translations[image.alt.trim()];
            }
        });

        // Translate aria-label attribute for accessibility
        const ariaElements = document.querySelectorAll('[aria-label]');
        ariaElements.forEach(element => {
            if (translations[element.getAttribute('aria-label').trim()]) {
                element.setAttribute('aria-label', translations[element.getAttribute('aria-label').trim()]);
            }
        });

        // Update button text
        document.getElementById('bouttonlangue').textContent = "Switch to French";
    }

    // Event listener for button click
    document.getElementById('bouttonlangue').addEventListener('click', function() {
        const currentLanguage = document.documentElement.lang;
        if (currentLanguage === 'fr') {
            // Translate page to English
            translatePageToEnglish();
            // Change document language attribute
            document.documentElement.lang = 'en';
        } else {
            // Handle switching back to French
            location.reload(); // Reload the page to reset translations
        }
    });
});

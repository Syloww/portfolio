    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector(".formulaire");

        // Liste des mots bannis
        const bannedWords = [
            // English
            "asshole", "bastard", "bitch", "bollocks", "bugger", "bullshit", "crap", "cunt", "damn", "dick", "douche", "fag", "faggot", "fuck", "motherfucker", "nigger", "nigga", "prick", "pussy", "shit", "slut", "whore", "wanker", "arsehole", "tosser", "twat",
            // French
            "connard", "connasse", "con", "conne", "enculé", "pute", "salope", "salaud", "merde", "bordel", "foutre", "chiant", "chiotte", "bite", "couille", "ta gueule", "pédé", "pd", "trou du cul", "nique", "niquer", "chier", "putain", "branleur", "branleuse", "enculer",
            "gay", "pd",
            // Additional English
            "jerk", "twit", "git", "wazzock", "twit", "minger", "nonce", "slag", "git", "sod", "muppet", "pillock", "numpty", "plonker", "berk", "dweeb", "bellend", "numbnuts", "gobshite",
            // Additional French
            "tarlouze", "gouine", "niquedouille", "zizi", "schlag", "louse", "baltringue", "teubé", "trouduc", "trou d’balle", "casse-couilles", "chieur", "conchieur", "bouffon", "fiente", "péquenot", "tocard",
            // Spanish
            "cabron", "gilipollas", "hijo de puta", "maricon", "pendejo", "mierda", "joder", "coño", "carajo", "chingar", "puta", "puto", "culero", "mamon", "zorra", "cabrona", "verga", "panocha", "pinche", "picha", "polla",
            // German
            "arschloch", "fotze", "scheisse", "wichser", "hure", "schlampe", "hurensohn", "miststück", "verdammt", "schwein", "arsch", "drecksau", "idiot", "kotzbrocken", "lump", "depp",
            // Italian
            "stronzo", "coglione", "cazzo", "vaffanculo", "merda", "troia", "puttana", "figa", "culattone", "testa di cazzo", "bastardo", "figlio di puttana", "cogliona",
            // Portuguese
            "filho da puta", "caralho", "merda", "puta", "foda-se", "pinto", "arrombado", "bosta", "puta que pariu", "paneleiro", "boquete",
            // Dutch
            "klootzak", "lul", "trut", "kut", "tyfus", "tering", "sukkel", "hufter", "drol", "eikel", "godverdomme", "hoer",
            // Russian
            "блядь", "сука", "пиздец", "хуй", "ебать", "говно", "мудак", "сволочь", "тварь", "мразь", "дерьмо", "пидор", "гандон",
            // Japanese
            "くそ", "ばか", "アホ", "ちくしょう", "畜生", "くそったれ", "糞野郎",
            // Arabic
            "لعنة", "خرا", "قحبة", "شرموطة", "كلب", "ابن الكلب", "زق", "عرص",
            // Hindi
            "चूतिया", "मादरचोद", "भैंचोद", "गांडू", "लौड़ा", "भोसड़ीवाला", "कमीना", "हरामी"
        ];
        

        form.addEventListener("submit", function(event) {
            let valid = true;

            // Validation du nom
            const name = form.querySelector('input[name="name"]');
            if (!name.value.trim()) {
                valid = false;
                alert("Veuillez entrer votre nom.");
            }

            // Validation de l'email
            const email = form.querySelector('input[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                valid = false;
                alert("Veuillez entrer une adresse e-mail valide.");
            }

            // Validation du message
            const message = form.querySelector('textarea[name="message"]');
            if (!message.value.trim()) {
                valid = false;
                alert("Veuillez entrer votre message.");
            }

            // Vérification des mots bannis
            const fieldsToCheck = [name.value, email.value, message.value];
            for (const field of fieldsToCheck) {
                for (const word of bannedWords) {
                    if (field.includes(word)) {
                        valid = false;
                        alert(`Le mot "${word}" est interdit. Veuillez le retirer.`);
                        break;
                    }
                }
                if (!valid) break;
            }

            if (!valid) {
                event.preventDefault(); // Empêche l'envoi du formulaire si les validations échouent
            }
        });
    });
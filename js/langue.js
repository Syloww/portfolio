// Liste des traductions de "Bonjour" dans différentes langues
const bonjours = [
    "Bonjour",    // Français
    "Hello",      // Anglais
    "Hola",       // Espagnol
    "Ciao",       // Italien
    "Guten Tag",  // Allemand
    "こんにちは (Konnichiwa)", // Japonais
    "안녕하세요 (Annyeonghaseyo)", // Coréen
    "你好 (Nǐ hǎo)", // Chinois (Mandarin)
    "Olá",        // Portugais
    "Привет (Privet)", // Russe
    "Salam",      // Arabe
    "Shalom",     // Hébreu
    "Selamat",    // Indonésien
    "Merhaba",    // Turc
    "Sawubona",   // Zoulou
    "Γειά σου (Geiá sou)", // Grec
    "Namaste",    // Hindi
    "Szia",       // Hongrois
    "Hej",        // Suédois
    "Halo",       // Indonésien
];

// Sélectionner l'élément par son ID
const textElement = document.getElementById('txt');

// Compteur pour parcourir les langues
let index = 0;

// Fonction pour changer le texte
function changeText() {
    textElement.innerText = bonjours[index];
    index = (index + 1) % bonjours.length; // Boucle sur les langues
}

// Changer le texte chaque seconde
setInterval(changeText, 2000);

// Liste des mots prédéfinis
const words = ["Bonjour !", "Hi", "Halo", "Hello","صباح الخير"];

// Index pour suivre le mot actuel
let index = 0;

// Fonction pour changer le texte de la div
function changeText() {
    // Obtenir la div par son ID
    const textDiv = document.getElementById('txt');

    // Changer le texte de la div avec le mot actuel
    textDiv.innerText = words[index];

    // Mettre à jour l'index pour le mot suivant
    index = (index + 1) % words.length;
}

// Changer le texte toutes les secondes
setInterval(changeText, 2000);

// Liste des mots prédéfinis
const services = ["Besoin d'un site vitrine ?", "Besoin d'un site WordPress ?","Besoin d'un mockup ?"];

// Index pour suivre le mot actuel
let i = 0;

// Fonction pour changer le texte de la div
function changeText() {
    // Obtenir la div par son ID
    const textDiv = document.getElementById('service');

    // Changer le texte de la div avec le mot actuel
    textDiv.innerText = services[i];

    // Mettre à jour l'index pour le mot suivant
    i = (i + 1) % services.length;
}

// Changer le texte toutes les secondes
setInterval(changeText, 2000);

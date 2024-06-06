// Sélection de la div à laquelle nous voulons ajouter la classe
var maDiv = document.getElementById('loader');

// Fonction pour ajouter une classe après un délai de 2 secondes
function ajouterClasse() {
    // Ajouter la classe à la div sélectionnée
    maDiv.classList.add('loader_cacher');
}

// Appeler la fonction après un délai de 2 secondes
setTimeout(ajouterClasse, 1100);
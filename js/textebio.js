        function changeText() {
            var biotitre1 = document.querySelector('.bio_descri');
            var texts = ["Front end developer", "Monteur", "Cadreur", "Lua developer"]; // Ajoutez autant de textes que vous le souhaitez

            var randomIndex = Math.floor(Math.random() * texts.length);
            var newText = texts[randomIndex];

            biotitre1.textContent = newText;
        }

        // Appeler la fonction changeText toutes les 10 secondes
        setInterval(changeText, 1000);
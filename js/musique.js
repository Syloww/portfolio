function music() {
    var audio = new Audio('/musiques/Idea 10.mp3');
    audio.muted = false; // Assurez-vous que le son n'est pas muet
    audio.loop=true
    audio.play();
}
music()
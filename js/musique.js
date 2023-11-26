function music() {
    var audio = new Audio('./musiques/Idea 10.mp3');
    audio.loop=true
    audio.play();
    console.log("musique lancé !")
}
music()
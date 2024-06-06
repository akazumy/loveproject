// Agregar un evento de clic al botón de música
document.getElementById("playButton").addEventListener("click", function() {
    var audio = document.getElementById("myAudio");
    
    // Comprobar si el audio está reproduciéndose
    if (audio.paused) {
      // Si está pausado, reproducirlo
      audio.play();
    } else {
      // Si está reproduciéndose, pausarlo
      audio.pause();
    }
  });
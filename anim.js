// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "PORQUE AMO LA MANERA EN LA QUE RIES", time: 3, duration: 5 },
  { text: "Y AMO LAS COSAS TONTAS QUE ME DICES", time: 9.3, duration: 5 },
  { text: "Y CUALQUIER COMENTARIO MALO QUE ME HAGAN SOBRE TI", time: 14.9, duration: 5.5 },
  { text: "SERA IGNORADO...... PORQUE MI CORAZON ES TUYO", time: 20.9, duration: 4.5 },
  { text: "ASI QUE NO TE PREOCUPES POR NADA", time: 25.9, duration: 2.5 },
  { text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN", time: 28.5, duration: 4.8 },
  { text: "Y LA VIDA HACE QUE EL AMOR PAREZCA DIFICIL", time: 33.5, duration: 4.2 },
  { text: "NO TE PREOCUPES POR NADA", time: 38, duration: 3.5 },
  { text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN", time: 41.8, duration: 4 },
  { text: "PERO YO SIEMPRE TE ELIGIRE A TI", time: 46, duration: 2.8 },
  { text: "YO SIEMPRE TE ELIGIRE A TI♡", time: 49, duration: 6 },
  { text: "LOS RIESGOS SON ALTOS... EL AGUA TURBULENTA", time: 56, duration: 6 },
  { text: "PERO ESTE AMOR ES NUESTRO♡♡", time: 62.5, duration: 4.8 },
  { text: "¡TE AMOOOOOOOOOOO!", time: 67.5, duration: 6 }
];

function updateLyrics() {
  if (!audio || !lyrics) return;
  
  var currentTime = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => currentTime >= line.time && currentTime < (line.time + line.duration)
  );

  if (currentLine) {
    var fadeInDuration = 0.5; // Transición suave de 0.5s
    var timeInLine = currentTime - currentLine.time;
    var opacity = Math.min(1, timeInLine / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  requestAnimationFrame(updateLyrics);
}

// Iniciar actualización al reproducir
audio.addEventListener("play", () => {
  requestAnimationFrame(updateLyrics);
});

// Ocultar título automáticamente
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.transition = "opacity 3s ease";
    titulo.style.opacity = "0";
    setTimeout(() => {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);

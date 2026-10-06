// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "PORQUE AMO LA MANERA EN LA QUE RIES", time: 3 },
  { text: "Y AMO LAS COSAS TONTAS QUE ME DICES", time: 9.3 },
  { text: "Y CUALQUIER COMENTARIO MALO QUE ME HAGAN SOBRE TI", time: 14.9 },
  { text: "SERA IGNORADO...... PORQUE MI CORAZON ES TUYO", time: 20.9 },
  { text: "ASI QUE NO TE PREOCUPES POR NADA", time: 25.9 },
  { text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN", time: 28.5},
  { text: "Y LA VIDA HACE QUE EL AMOR PAREZCA DIFICIL", time: 33.5 },
  { text: "NO TE PREOCUPES POR NADA", time: 38 },
  { text: "LA GENTE SIEMPRE QUIERE ARRUINAR LAS COSAS QUE BRILLAN", time: 41.8 },
  { text: "PERO YO SIEMPRE TE ELIGIRE A TI", time: 46 },
  { text: "YO SIEMPRE TE ELIGIRE A TI♡", time: 49 },
  { text: "LOS RIESGOS SON ALTOS... EL AGUA TURBULENTA", time: 56 },
  { text: "PERO ESTE AMOR ES NUESTRO♡♡", time: 62.5 },
  { text: "¡TE AMOOOOOOOOOOO!", time: 67.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
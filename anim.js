// =========================================================================
// SISTEMA DE REPRODUCCIÓN Y SINCRONIZACIÓN DE LETRAS ROMÁNTICAS FLOTANTES
// Canciones: "Until I Found You" (Stephen Sanchez) & "Can't Help Falling in Love" (Elvis Presley)
// =========================================================================

const audio = document.getElementById("flower-music");
const lyricsDisplay = document.getElementById("lyrics-display");
const titulo = document.querySelector(".titulo");
const btnUntil = document.getElementById("btn-song-until");
const btnElvis = document.getElementById("btn-song-elvis");

// Datos completos de sincronización (Tiempo exacto en segundos, posición lateral y traducción)
const playlist = {
  until: {
    id: "until",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    src: "sound/AMORR AA.mp3",
    lyrics: [
      { text: "Georgia, wrap me up in all your-", sub: "Envuélveme en todo tu amor...", time: 10.41, end: 16.74, side: "left" },
      { text: "I want you in my arms", sub: "Te quiero en mis brazos...", time: 16.74, end: 22.12, side: "right" },
      { text: "Oh, let me hold you", sub: "Oh, déjame abrazarte...", time: 22.12, end: 27.63, side: "left" },
      { text: "I'll never let you go again like I did", sub: "Nunca te dejaré ir otra vez...", time: 27.63, end: 33.31, side: "right" },
      { text: "Oh, I used to say...", sub: "Oh, solía decir...", time: 33.31, end: 37.24, side: "left" },
      { text: "\"I would never fall in love again until I found her\"", sub: "Nunca me enamoraría de nuevo hasta que la encontré a ella...", time: 37.24, end: 44.28, side: "center" },
      { text: "I said, \"I would never fall unless it's you I fall into\"", sub: "Dije: jamás caería, a menos que sea en ti en quien caiga...", time: 44.28, end: 51.10, side: "center" },
      { text: "I was lost within the darkness, but then I found her", sub: "Estaba perdido en la oscuridad, pero entonces te encontré...", time: 51.10, end: 58.18, side: "left" },
      { text: "I found you ✨💖", sub: "Te encontré a ti, mi niña hermosa...", time: 58.18, end: 65.50, side: "center" },
      { text: "Georgia, pulled me in", sub: "Me atrajiste hacia ti...", time: 67.79, end: 71.95, side: "left" },
      { text: "I asked to love her once again", sub: "Pedí amarte una vez más...", time: 71.95, end: 79.14, side: "right" },
      { text: "You fell, I caught you", sub: "Te caíste y yo te sostuve...", time: 79.14, end: 84.69, side: "left" },
      { text: "I'll never let you go again like I did", sub: "Nunca te soltaré de nuevo...", time: 84.69, end: 90.34, side: "right" },
      { text: "Oh, I used to say...", sub: "Oh, solía decir...", time: 90.34, end: 94.01, side: "left" },
      { text: "\"I would never fall in love again until I found her\"", sub: "Nunca me volvería a enamorar hasta que te encontré a ti...", time: 94.01, end: 101.19, side: "center" },
      { text: "I said, \"I would never fall unless it's you I fall into\"", sub: "Dije: jamás caería, a menos que caiga en tus brazos...", time: 101.19, end: 108.25, side: "center" },
      { text: "I was lost within the darkness, but then I found her", sub: "Estaba en la oscuridad, pero te encontré a mi lado...", time: 108.25, end: 115.02, side: "left" },
      { text: "I found you 💕", sub: "Te encontré a ti...", time: 115.02, end: 124.00, side: "center" },
      { text: "I would never fall in love again until I found her", sub: "Nunca me enamoraría hasta que te encontré a ti...", time: 136.82, end: 143.94, side: "center" },
      { text: "I said, \"I would never fall unless it's you I fall into\"", sub: "Dije: jamás caería, a menos que caiga por ti...", time: 143.94, end: 151.08, side: "center" },
      { text: "I was lost within the darkness, but then I found her", sub: "Estaba perdido, pero entonces te encontré mi amor...", time: 151.08, end: 157.95, side: "left" },
      { text: "I found you. ¡Te amo con todo mi corazón! 🌸❤️", sub: "Te encontré a ti, y te amaré por siempre...", time: 157.95, end: 175.00, side: "center" }
    ]
  },
  elvis: {
    id: "elvis",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    src: "sound/Cant Help Falling in Love.mp3",
    lyrics: [
      { text: "Wise men say...", sub: "Los sabios dicen...", time: 7.79, end: 14.03, side: "left" },
      { text: "Only fools rush in", sub: "Que solo los tontos se apresuran...", time: 14.03, end: 21.55, side: "right" },
      { text: "But I can't help falling in love with you", sub: "Pero no puedo evitar enamorarme de ti... 💕", time: 21.55, end: 35.00, side: "center" },
      { text: "Shall I stay?", sub: "¿Debería quedarme a tu lado?...", time: 36.18, end: 42.73, side: "left" },
      { text: "Would it be a sin?", sub: "¿Acaso sería un pecado?...", time: 42.73, end: 50.32, side: "right" },
      { text: "If I can't help falling in love with you?", sub: "¿Si no puedo evitar enamorarme de ti? 💖", time: 50.32, end: 63.50, side: "center" },
      { text: "Like a river flows surely to the sea...", sub: "Como fluye un río seguro hacia el mar...", time: 64.91, end: 72.37, side: "left" },
      { text: "Darling, so it goes, some things are meant to be", sub: "Cariño, así es, algunas cosas están destinadas a ser...", time: 72.37, end: 82.73, side: "right" },
      { text: "Take my hand...", sub: "Toma mi mano...", time: 82.73, end: 88.82, side: "left" },
      { text: "Take my whole life too", sub: "Toma mi vida entera también...", time: 88.82, end: 96.51, side: "right" },
      { text: "For I can't help falling in love with you", sub: "Porque no puedo evitar enamorarme de ti... ✨", time: 96.51, end: 110.00, side: "center" },
      { text: "Like a river flows surely to the sea...", sub: "Como fluye el río hacia el mar...", time: 111.11, end: 118.47, side: "left" },
      { text: "Darling, so it goes, some things are meant to be", sub: "Así es mi vida, estamos destinados a estar juntos...", time: 118.47, end: 128.52, side: "right" },
      { text: "Take my hand, take my whole life too", sub: "Toma mi mano y mi vida entera mi amor...", time: 128.52, end: 142.58, side: "left" },
      { text: "For I can't help falling in love with you", sub: "Porque no puedo evitar enamorarme de ti cada día...", time: 142.58, end: 156.00, side: "center" },
      { text: "For I can't help falling in love with you... ❤️🌸", sub: "No puedo evitar amarte tanto, mi niña preciosa...", time: 156.00, end: 175.00, side: "center" }
    ]
  }
};

const isElvisInitial = (btnElvis && btnElvis.classList.contains("active")) || 
  (window.location.pathname || "").toLowerCase().includes("elvis") || 
  (window.location.search || "").toLowerCase().includes("elvis");

let currentSongKey = isElvisInitial ? "elvis" : "until";
let activeLineIndex = -1;
let titleHasFaded = false;

// Sincronizar estado inicial del audio
if (audio && playlist[currentSongKey]) {
  audio.src = playlist[currentSongKey].src;
}

// 1. Manejo del Título Inicial: Desaparece suavemente a los 8 segundos (antes del primer verso a los 10.4s)
function checkTitleFade(time) {
  if (!titulo || titleHasFaded) return;
  
  if (currentSongKey === "elvis") {
    // Si cambia a Elvis, ocultar el título de inmediato para ver las letras
    titulo.style.display = "none";
    titleHasFaded = true;
    return;
  }

  if (time >= 8.0 && !titulo.classList.contains("fading")) {
    titulo.classList.add("fading");
    titulo.style.animation = "fadeOutTitle 2.0s ease-in-out forwards";
    setTimeout(() => {
      titulo.style.display = "none";
      titleHasFaded = true;
    }, 2000);
  }
}

// 2. Sincronización continua de la letra según audio.currentTime
function syncLyrics() {
  if (!audio) return;
  const time = audio.currentTime;

  checkTitleFade(time);

  const currentSong = playlist[currentSongKey];
  if (!currentSong) return;

  // Buscar línea activa
  const lineIndex = currentSong.lyrics.findIndex(
    (item) => time >= item.time && time < item.end
  );

  if (lineIndex !== -1) {
    if (lineIndex !== activeLineIndex) {
      activeLineIndex = lineIndex;
      displayLyricLine(currentSong.lyrics[lineIndex]);
    }
  } else {
    // Si no hay línea en este instante (intro o interludio instrumental)
    if (activeLineIndex !== -1) {
      activeLineIndex = -1;
      clearLyricDisplay();
    }
  }
}

// 3. Renderizar la tarjeta de letra por los lados de la flor o en el centro
function displayLyricLine(line) {
  if (!lyricsDisplay) return;

  lyricsDisplay.innerHTML = `
    <div class="lyric-card side-${line.side}">
      <span class="lyric-main">${line.text}</span>
      ${line.sub ? `<span class="lyric-sub">${line.sub}</span>` : ""}
    </div>
  `;

  // Activar la animación de entrada suave
  requestAnimationFrame(() => {
    const card = lyricsDisplay.querySelector(".lyric-card");
    if (card) {
      card.classList.add("visible");
    }
  });
}

function clearLyricDisplay() {
  if (!lyricsDisplay) return;
  const card = lyricsDisplay.querySelector(".lyric-card");
  if (card) {
    card.classList.remove("visible");
    setTimeout(() => {
      if (activeLineIndex === -1 && lyricsDisplay) {
        lyricsDisplay.innerHTML = "";
      }
    }, 450);
  } else {
    lyricsDisplay.innerHTML = "";
  }
}

// 4. Cambio de canción entre "Until I Found You" y "Can't Help Falling in Love"
function switchSong(songKey) {
  if (currentSongKey === songKey || !playlist[songKey]) return;

  currentSongKey = songKey;
  activeLineIndex = -1;
  clearLyricDisplay();

  // Actualizar botones UI
  if (btnUntil && btnElvis) {
    if (songKey === "until") {
      btnUntil.classList.add("active");
      btnElvis.classList.remove("active");
    } else {
      btnElvis.classList.add("active");
      btnUntil.classList.remove("active");
    }
  }

  // Ocultar dedicatoria si aún estaba visible
  if (titulo) {
    titulo.style.display = "none";
    titleHasFaded = true;
  }

  // Cargar y reproducir nueva canción
  audio.src = playlist[songKey].src;
  audio.currentTime = 0;
  playAudioSafely();
}

// Conectar eventos a los botones de cambio de canción
if (btnUntil) {
  btnUntil.addEventListener("click", () => switchSong("until"));
}
if (btnElvis) {
  btnElvis.addEventListener("click", () => switchSong("elvis"));
}

// Cambio automático a la siguiente canción al terminar
if (audio) {
  audio.addEventListener("ended", () => {
    if (currentSongKey === "until") {
      switchSong("elvis");
    } else {
      switchSong("until");
    }
  });
}

// Bucle de sincronización de alta frecuencia
setInterval(syncLyrics, 80);
if (audio) {
  audio.addEventListener("timeupdate", syncLyrics);
}

// 5. Reproducción automática con desbloqueo para móviles y computadoras
function playAudioSafely() {
  if (!audio) return;
  audio.volume = 1;
  const promise = audio.play();
  if (promise !== undefined) {
    promise.catch(() => {
      function unlockInteraction() {
        audio.play().catch(console.error);
        ['click', 'touchstart', 'touchend', 'pointerdown'].forEach((evt) => {
          window.removeEventListener(evt, unlockInteraction, true);
        });
      }
      ['click', 'touchstart', 'touchend', 'pointerdown'].forEach((evt) => {
        window.addEventListener(evt, unlockInteraction, { once: true, capture: true });
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", playAudioSafely);
} else {
  playAudioSafely();
}
window.addEventListener("load", playAudioSafely);
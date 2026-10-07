/**
 * lyrics.js - Sistema Dinámico de Letras Sincronizadas
 * Canción: "Ama de mi sol" - Milo J (Pista oficial en index.html)
 * Inspirado en el sistema de letras flotantes de Elvis Presley & Stephen Sanchez
 */

(function () {
    "use strict";

    // -------------------------------------------------------------------------
    // LETRAS REALES SINCRONIZADAS: "Ama de mi sol" - Milo J
    // Tiempos exactos (LRC oficial) con posiciones y subtítulos románticos
    // -------------------------------------------------------------------------
    const AMA_DE_MI_SOL_LYRICS = [
        { text: "Okey...", sub: "✨ Ama de mi sol • Milo J ☀️", time: 1.05, end: 2.20, side: "side-center-top", theme: "gold" },
        { text: "Giros, todo da vueltas como una gran pelota", sub: "Todo gira a nuestro alrededor... 💫", time: 2.21, end: 6.85, side: "side-left", theme: "rose" },
        { text: "Todo da vueltas casi ni se nota", sub: "Contigo el tiempo vuela mi vida... 🌙", time: 6.93, end: 11.20, side: "side-right", theme: "cyan" },
        { text: "Ama de mi sol 🌻", sub: "Para mi niña hermosa Nini 💕", time: 12.00, end: 29.50, side: "side-bottom", theme: "gold" },
        { text: "Hoy me encontré", sub: "En el brillo de tus ojitos... ✨", time: 30.46, end: 32.20, side: "side-left", theme: "gold" },
        { text: "Dama magistral", sub: "La más hermosa de este mundo 💖", time: 32.26, end: 34.70, side: "side-right", theme: "rose" },
        { text: "Sus puertas del Edén", sub: "Mi lugar seguro a tu lado... 🌸", time: 34.74, end: 36.90, side: "side-left-mid", theme: "cyan" },
        { text: "Son el caminito pa' recorrer", sub: "Contigo de la mano siempre... 🚶‍♂️❤️", time: 36.94, end: 41.20, side: "side-right-mid", theme: "gold" },
        { text: "Con alas la eternidad", sub: "Volando juntos hasta las estrellas... 🕊️✨", time: 41.29, end: 43.50, side: "side-left", theme: "rose" },
        { text: "Haceme el amor como animal", sub: "Puro fuego y pasión en el alma... 🔥", time: 43.53, end: 47.90, side: "side-right", theme: "gold" },
        { text: "Respiro de a dos", sub: "Un solo latido entre los dos... 💓", time: 47.97, end: 49.85, side: "side-left-low", theme: "cyan" },
        { text: "Hay un paraíso en tu corazón", sub: "Donde siempre quiero quedarme a vivir... 🏝️💕", time: 49.89, end: 54.15, side: "side-right-low", theme: "rose" },
        { text: "Tu risa me guiará", sub: "Mi luz en cada día gris... 😊✨", time: 54.21, end: 56.70, side: "side-left", theme: "gold" },
        { text: "Yo sé del mal en tu canción", sub: "Pero en tus brazos todo sana... 🎶", time: 56.77, end: 60.80, side: "side-right", theme: "cyan" },
        { text: "Tus venas con sal", sub: "Tan única, dulce y real mi amor... 🌊", time: 60.85, end: 62.50, side: "side-left-mid", theme: "rose" },
        { text: "Y aunque el diablo blanco te consumió", sub: "Yo siempre voy a estar para cuidarte... 🤍", time: 62.57, end: 67.10, side: "side-right-mid", theme: "gold" },
        { text: "Te quiero ver ser", sub: "Feliz, radiante y libre siempre... ✨", time: 67.13, end: 69.30, side: "side-center-top", theme: "rose" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Mi refugio favorito en el universo... 🫂💖", time: 69.33, end: 72.25, side: "side-left", theme: "gold" },
        { text: "En tus brazos, siempre en tus brazos (Sí)", sub: "Donde no existe el frío ni el dolor... 🌟", time: 72.29, end: 75.75, side: "side-right", theme: "rose" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Acurrucaditos por toda la eternidad... 💕", time: 75.77, end: 78.95, side: "side-left-low", theme: "cyan" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Nunca te voy a soltar mi niña... 🔒❤️", time: 78.97, end: 82.50, side: "side-right-low", theme: "gold" },
        { text: "Tu vientre y tu jacarandá... 🌸", sub: "Girasoles y flores para mi princesa 🌻", time: 83.00, end: 94.50, side: "side-bottom", theme: "rose" },
        { text: "Incertidumbre y vanidad", sub: "Nada nos falta si estamos juntos... 💫", time: 95.58, end: 99.85, side: "side-left", theme: "cyan" },
        { text: "Suerte y seducción", sub: "Mi mayor suerte en la vida fue encontrarte... 🍀", time: 99.90, end: 101.70, side: "side-right", theme: "gold" },
        { text: "Soy tan vulnerable si te volteás", sub: "Tus ojitos me desarmam por completo... 🥺💘", time: 101.74, end: 106.20, side: "side-left-mid", theme: "rose" },
        { text: "Amor, amor...", sub: "Mi niña de mi vida entera... 💖", time: 106.22, end: 108.15, side: "side-center-top", theme: "gold" },
        { text: "Estás incognitando mi cantar", sub: "Todas las canciones te pertenecen a ti... 🎵", time: 108.18, end: 112.75, side: "side-right-mid", theme: "cyan" },
        { text: "Y aún no somos dos", sub: "Somos un solo corazón... 🤍", time: 112.81, end: 114.60, side: "side-left", theme: "rose" },
        { text: "Entre el bien y el mal hay una oración", sub: "Y mi rezo cada noche es protegerte... 🙏✨", time: 114.65, end: 119.05, side: "side-right", theme: "gold" },
        { text: "Y dos pasos para atrás", sub: "Para mirarte y enamorarme otra vez... 👀❤️", time: 119.09, end: 121.55, side: "side-left-low", theme: "cyan" },
        { text: "¿Desde hace cuánto no sale el sol?", sub: "Tú eres el sol de todas mis mañanas... ☀️", time: 121.61, end: 127.70, side: "side-right-low", theme: "gold" },
        { text: "Sé que el diablo blanco te consumió", sub: "Pero nuestro amor lo supera todo... 🛡️", time: 127.77, end: 131.70, side: "side-left", theme: "rose" },
        { text: "Pero te quiero ver ser", sub: "La niña más feliz y amada del mundo... 🦋", time: 131.73, end: 134.05, side: "side-right", theme: "cyan" },
        { text: "En tus brazos siento aquella flor marchitada de un jacarandá", sub: "Que florece de nuevo con tus caricias... 🌸💜", time: 134.09, end: 140.60, side: "side-center-top", theme: "gold" },
        { text: "Sos la diosa ama de mi sol", sub: "La reina absoluta de mi corazón... 👑☀️", time: 140.65, end: 143.85, side: "side-left-mid", theme: "rose" },
        { text: "Que me brinda luz en la oscuridad", sub: "Mi luz estelar en las noches frías... 🌟✨", time: 143.89, end: 147.20, side: "side-right-mid", theme: "cyan" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Acurrucados por siempre mi cielo... 🫂💕", time: 147.21, end: 150.55, side: "side-left", theme: "gold" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Felices 3 meses juntos mi reina hermosa... 💖", time: 150.57, end: 153.95, side: "side-right", theme: "rose" },
        { text: "En tus brazos, siempre en tus brazos", sub: "7/7/26 grabado con fuego en mi alma... 📅❤️", time: 153.95, end: 157.35, side: "side-left-low", theme: "gold" },
        { text: "En tus brazos, siempre en tus brazos", sub: "Tu niño baboso que te ama locamente... 🥹💞", time: 157.41, end: 160.85, side: "side-right-low", theme: "cyan" },
        { text: "En tus brazos siento aquella flor marchitada de un jacarandá", sub: "Girasoles y jacarandás floreciendo para ti... 🌻💜", time: 160.89, end: 167.70, side: "side-center-top", theme: "rose" },
        { text: "Sos la diosa ama de mi sol", sub: "¡Te amo con todo mi ser Nini! ☀️💖", time: 167.77, end: 171.10, side: "side-left-mid", theme: "gold" },
        { text: "Que me brinda luz en la oscuridad", sub: "Hoy, mañana y toda la vida juntos... ❤️✨", time: 171.17, end: 176.00, side: "side-right-mid", theme: "cyan" }
    ];

    let audio = null;
    let lyricsDisplay = null;
    let activeLineIndex = -1;
    let isCleaningUp = false;

    // Obtener o crear contenedor seguro de letras
    function getLyricsContainer() {
        let container = document.getElementById("lyrics-display");
        if (!container) {
            container = document.createElement("div");
            container.id = "lyrics-display";
            container.className = "lyrics-wrapper";
            container.setAttribute("aria-hidden", "true");
            document.body.appendChild(container);
        }
        return container;
    }

    // Renderizar la tarjeta de letra con estilo Elvis / Until I Found You
    function displayLyricLine(line) {
        if (!lyricsDisplay) return;

        // Si hay una modal abierta, no renderizar letras
        if (document.body.classList.contains("modal-open")) {
            clearLyricDisplay();
            return;
        }

        const themeClass = line.theme ? `theme-${line.theme}` : "theme-gold";
        const sideClass = line.side || "side-center-top";

        lyricsDisplay.innerHTML = `
            <div class="lyric-card ${sideClass} ${themeClass}">
                <span class="lyric-main">${line.text}</span>
                ${line.sub ? `<span class="lyric-sub">${line.sub}</span>` : ""}
            </div>
        `;

        requestAnimationFrame(() => {
            const card = lyricsDisplay.querySelector(".lyric-card");
            if (card) {
                card.classList.add("visible");
            }
        });
    }

    // Ocultar la tarjeta de letra de manera suave
    function clearLyricDisplay() {
        if (!lyricsDisplay || isCleaningUp) return;
        const card = lyricsDisplay.querySelector(".lyric-card");
        if (card) {
            isCleaningUp = true;
            card.classList.remove("visible");
            setTimeout(() => {
                if (activeLineIndex === -1 && lyricsDisplay) {
                    lyricsDisplay.innerHTML = "";
                }
                isCleaningUp = false;
            }, 380);
        } else {
            lyricsDisplay.innerHTML = "";
        }
    }

    // Sincronización continua de alta precisión
    function syncLyrics() {
        if (!audio) {
            audio = document.getElementById("bg-music");
            if (!audio) return;
        }

        // Si la música está pausada o modal abierta, ocultar letras inmediatamente
        if (audio.paused || document.body.classList.contains("modal-open")) {
            if (activeLineIndex !== -1) {
                activeLineIndex = -1;
                clearLyricDisplay();
            }
            return;
        }

        const currentTime = audio.currentTime;

        // Buscar línea activa correspondiente al tiempo actual
        const lineIndex = AMA_DE_MI_SOL_LYRICS.findIndex(
            (item) => currentTime >= item.time && currentTime < item.end
        );

        if (lineIndex !== -1) {
            if (lineIndex !== activeLineIndex) {
                activeLineIndex = lineIndex;
                displayLyricLine(AMA_DE_MI_SOL_LYRICS[lineIndex]);
            }
        } else {
            if (activeLineIndex !== -1) {
                activeLineIndex = -1;
                clearLyricDisplay();
            }
        }
    }

    // Inicialización del sistema
    function init() {
        // Ejecutar únicamente en index.html (donde está "Ama de mi sol")
        const path = (window.location.pathname || "").toLowerCase();
        if (path.includes("flower") || path.includes("elvis")) return;
        if (!document.querySelector(".main-container")) return;

        audio = document.getElementById("bg-music");
        lyricsDisplay = getLyricsContainer();

        if (audio) {
            audio.addEventListener("timeupdate", syncLyrics);
            audio.addEventListener("play", syncLyrics);
            audio.addEventListener("pause", () => {
                activeLineIndex = -1;
                clearLyricDisplay();
            });
            audio.addEventListener("seeking", syncLyrics);
            audio.addEventListener("ended", () => {
                activeLineIndex = -1;
                clearLyricDisplay();
            });
        }

        // Intervalo de alta frecuencia (50ms) para garantizar sincronización perfecta
        setInterval(syncLyrics, 50);

        // Ocultar si se abre cualquier modal
        const observer = new MutationObserver(() => {
            if (document.body.classList.contains("modal-open")) {
                activeLineIndex = -1;
                clearLyricDisplay();
            }
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

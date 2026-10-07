// Sistema de efectos románticos y lluvia de corazones/pétalos

document.addEventListener("DOMContentLoaded", () => {
    // Solo activar los pétalos/emojis en index.html, NUNCA en flower.html
    const path = (window.location.pathname || "").toLowerCase();
    const isFlowerPage = path.includes("flower") || document.querySelector(".flowers") !== null;
    if (!isFlowerPage && document.querySelector(".main-container")) {
        initFloatingPetals();
    }
    initLetterModal();
    initPhotoModal();
});

// Lluvia de corazones y pétalos de rosa
function initFloatingPetals() {
    const container = document.createElement("div");
    container.className = "petals-container";
    document.body.appendChild(container);

    const symbols = ["♥", "💖", "🌸", "💕", "✨", "🌹", "💗"];

    function createPetal() {
        const petal = document.createElement("div");
        petal.className = "petal";
        
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        petal.innerText = symbol;

        const startLeft = Math.random() * 100; // Porcentaje de ancho
        const size = Math.random() * 1.2 + 0.8; // Tamaño rem
        const duration = Math.random() * 5 + 6; // Segundos de caída
        const delay = Math.random() * 2; // Retraso inicio

        petal.style.left = startLeft + "vw";
        petal.style.fontSize = size + "rem";
        petal.style.animationDuration = duration + "s";
        petal.style.animationDelay = delay + "s";
        petal.style.opacity = Math.random() * 0.7 + 0.3;

        container.appendChild(petal);

        // Remover cuando termine animación
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }

    // Crear partículas continuamente
    setInterval(createPetal, 400);
}

// Modal de Carta Romántica
function initLetterModal() {
    const letterBtn = document.getElementById("open-letter-btn");
    const letterOverlay = document.getElementById("letter-overlay");
    const closeLetterBtn = document.getElementById("close-letter-btn");

    if (letterBtn && letterOverlay) {
        letterBtn.addEventListener("click", () => {
            letterOverlay.classList.add("active");
            document.body.classList.add("modal-open");
        });

        if (closeLetterBtn) {
            closeLetterBtn.addEventListener("click", () => {
                letterOverlay.classList.remove("active");
                document.body.classList.remove("modal-open");
            });
        }

        letterOverlay.addEventListener("click", (e) => {
            if (e.target === letterOverlay) {
                letterOverlay.classList.remove("active");
                document.body.classList.remove("modal-open");
            }
        });
    }
}

// Modal visor de fotos Polaroid
function initPhotoModal() {
    const photoOverlay = document.getElementById("photo-overlay");
    const photoModalImg = document.getElementById("photo-modal-img");
    const photoModalCaption = document.getElementById("photo-modal-caption");
    const closePhotoBtn = document.getElementById("close-photo-btn");

    document.querySelectorAll(".polaroid-card").forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector("img");
            const caption = card.querySelector(".polaroid-caption");
            if (img && photoOverlay && photoModalImg) {
                photoModalImg.src = img.src;
                if (photoModalCaption && caption) {
                    photoModalCaption.innerText = caption.innerText;
                }
                photoOverlay.classList.add("active");
                document.body.classList.add("modal-open");
            }
        });
    });

    if (photoOverlay) {
        if (closePhotoBtn) {
            closePhotoBtn.addEventListener("click", () => {
                photoOverlay.classList.remove("active");
                document.body.classList.remove("modal-open");
            });
        }

        photoOverlay.addEventListener("click", (e) => {
            if (e.target === photoOverlay) {
                photoOverlay.classList.remove("active");
                document.body.classList.remove("modal-open");
            }
        });
    }
}

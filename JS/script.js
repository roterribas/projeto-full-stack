const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let index = 0;
let autoPlayInterval = null;

function updateSlide() {
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Botão da direita
btnNext.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
});

// Botão da esquerda
btnPrev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
});

// Auto-play a cada 3 segundos
function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlide();
    }, 3000);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

// Pausar ao passar o mouse por cima
slidesContainer.addEventListener("mouseenter", stopAutoPlay);
slidesContainer.addEventListener("mouseleave", startAutoPlay);

// Iniciar autoplay
startAutoPlay();




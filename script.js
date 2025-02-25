const mainButton = document.querySelector('#main-button');
const bMain = document.querySelector('#b-main');
const bUpgrade = document.querySelector('#b-upgrade');
const bTasks = document.querySelector('#b-tasks');
const bInfo = document.querySelector('#b-info');
const mainText = document.querySelector('#main-text');
const tokenCount = document.getElementById("token-count");
// let audio = new Audio("assets/tap_sound.mp3");

let tokens = 0; //max =
tokenCount.innerHTML = tokens;
let isVibrate = true;
let isVolume = true;

// функция воспроизведение звука при нажатии на главную кнопку
function tapSound() {
    let audio = new Audio("assets/tap_sound.mp3");
    audio.autoplay = true;
}

// функция, вызываемая при нажатии на главную кнопку
function tap(e) {
    const touch = e.changedTouches[0]; // получение координат касания
    createParticle(touch.clientX, touch.clientY);
    mainButton.style.setProperty("--size-button", "40vh"); // анимация нажатия кнопки
    tokens += 1; // зачисление токенов и обновление счётчика
    tokenCount.innerHTML = tokens;
    if (isVibrate) { // проверка на вибрацию
        navigator.vibrate(100);
    }
    if (isVolume) { // проверка на звук
        // audio.play();
        tapSound()
    }
}

// функция, которая создает частицу
function createParticle(x, y) {
    const particle = document.createElement("particle");
    document.body.appendChild(particle);
    particle.classList.add("particle"); // добавляет к объекту класс particle
    particle.innerHTML = "+1"; // задает то, что будет отображаться
    const animation = particle.animate([
        {
            transform: `translate(${x}px, ${y}px)`, // начальное положение
            opacity: 1
        },
        {
            transform: `translate(${x}px, ${y-100}px)`, // конечное положение
            opacity: 0
        },
    ], {
        duration: 1200, ease: "easeOut"
    });
    animation.onfinish = () => { // удаление объекта по окончанию анимации
        particle.remove();
    }
}

mainButton.addEventListener('touchstart', () => {
    mainButton.style.setProperty("--size-button", "42vh");
})

mainButton.addEventListener('touchend', tap)

mainText.addEventListener('click', () => {
    tokens = 0;
    tokenCount.innerHTML = tokens;
})
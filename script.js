const mainButton = document.querySelector('#main-button');
const bMain = document.querySelector('#b-main');
const bUpgrade = document.querySelector('#b-upgrade');
const bTasks = document.querySelector('#b-tasks');
const bInfo = document.querySelector('#b-info');
const mainText = document.querySelector('#main-text');
const tokenCount = document.getElementById("token-count");

let tokens = 1000000000000; //max =
tokenCount.innerHTML = tokens;
let isVibrate = true;
let isVolume = true;

let audio = new Audio();
function tapSound() {
    audio.src = "assets/tap_sound.mp3";
    audio.autoplay = true;
}

mainButton.addEventListener('touchstart', () => {
    mainButton.style.setProperty("--size-button", "42vh");
})

mainButton.addEventListener('touchend', () => {
    mainButton.style.setProperty("--size-button", "40vh");
    tokens+=1;
    tokenCount.innerHTML = tokens;
    if(isVibrate) {navigator.vibrate(100);}
    if(isVolume) {tapSound();}
    ///////////////////////
    const test = document.getElementById('test');

    test.style.transform = 'translateY(0)';
    test.style.opacity = '1';

// Запускаем анимацию
    setTimeout(() => {
        test.style.transform = 'translateY(5%)'; // Поднимаем вверх
        test.style.opacity = '0.5'; // Прозрачность
    }, 10); // Небольшая задержка для запуска анимации

// Убираем элемент после анимации
    setTimeout(() => {
        test.style.transform = 'translateY(0)'; // Сбрасываем
        test.style.opacity = '1'; // Сбрасываем
    }, 500); // Время анимации
    ///////////////////////////
})

mainText.addEventListener('click', () => {
    tokens = 0;
    tokenCount.innerHTML = tokens;
})


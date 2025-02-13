const mainButton = document.querySelector('#main-button');
const bMain = document.querySelector('#b-main');
const bUpgrade = document.querySelector('#b-upgrade');
const bTasks = document.querySelector('#b-tasks');
const bInfo = document.querySelector('#b-info');
const mainText = document.querySelector('#main-text');
const tokenCount = document.getElementById("token-count");
let audio = new Audio("assets/tap_sound.mp3");

let tokens = 1000000000000; //max =
tokenCount.innerHTML = tokens;
let isVibrate = true;
let isVolume = true;

mainButton.addEventListener('touchstart', () => {
    mainButton.style.setProperty("--size-button", "42vh");
})

mainButton.addEventListener('touchend', async () => {
    mainButton.style.setProperty("--size-button", "40vh");
    tokens += 1;
    tokenCount.innerHTML = tokens;
    if (isVibrate) {
        navigator.vibrate(100);
    }
    if (isVolume) {
        await audio.play();
    }
})

mainText.addEventListener('click', () => {
    tokens = 0;
    tokenCount.innerHTML = tokens;
})


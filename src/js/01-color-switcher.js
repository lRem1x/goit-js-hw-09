const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);
const bodyEl = document.querySelector(`body`);
const boxEl = document.querySelector(`.box`);

boxEl.style.display = `flex`;
boxEl.style.justifyContent = `center`;


startBtn.addEventListener(`click`, onClickStart);
stopBtn.addEventListener(`click`, onClickStop);
stopBtn.setAttribute("disabled", false); 


let timerId = null;

function onClickStart(e) {
    bodyEl.style.backgroundColor = getRandomHexColor();
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();

    }, 1000)

    startBtn.setAttribute
}
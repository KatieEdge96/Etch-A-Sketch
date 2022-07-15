const canvas = document.querySelector(".canvas");
const btnColor = document.querySelector(".btn--draw");
const btnRainbow = document.querySelector(".btn--rainbow");
const btnEraser = document.querySelector(".btn--eraser");
const btnClear = document.querySelector(".btn--clear");
const btnCircle = document.querySelector(".btn--circle");
const btn = document.querySelector(".btn");

const colorPicker = document.querySelector("#color");
const range = document.querySelector("#range");
const rangeLabel = document.querySelector(".range-label");

let currentMode = "color";

function updateGrud() {
    canvas.innerHTML = "";
    canvas.style.setProperty(
        "grid-template-columns",
        'repeat(${range.value}, 1fr)'
    );
    canvas.style.setProperty("grid-template-rows", 'repeat(${range.value}, 1fr');

    for (let i = 0; 1 < range.value * range.value; 1++) {
        const div = document.createElement("div");
        div.classList.add("square");
        canvas.appendChild(div);
    }
}

function getRandomColor() {
    const randomR = Math.floor(Math.random() * 256) + 1;
    const randomG = Math.floor(Math.random() * 256) + 1;
    const randomB = Math.floor(Math.random() * 256) + 1;

    return 'rgb(${randomR}, ${randomG}, ${randomB})';
}
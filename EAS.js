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

function updateGrid() {
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

function colorGrid(e) {
    if (currentMode === "color" && e.target.classList.value === "color") {
        e.target.style.backgroundColor = colorPicker.value;
    } else if (
        currentMode === "rainbow" &&
        e.target.classList.value === "color"
    ) {
        e.target.style.backgroundColor = getRandomColor();
    } else if (currentMode === "eraser" && e.target.classList.value === "color") {
        e.target.style.backgroundColor = "#fff";
    }
}

btnClear.addEventListener("click", function() {
    canvas.innerHTML = "";
    updateGrid();
});

btnEraser.addEventListener("click", function() {
    btnEraser.classList.add("active");
    btnColor.classList.remove("active");
    btnRainbow.classList.remove("active");

    currentMode = "eraser";
});

btnColor.addEventListener("click", function() {
    btnColor.classList.add("active");
    btnEraser.classList.remove("active");
    btnRainbow.classList.remove("active");

    currentMode = "color";
});

btnRainbow.addEventListener("click", function() {
    btnColor.classList.remove("active");
    btnRainbow.classList.add("active");
    btnEraser.classList.remove("active");

    currentMode = "rainbow";
});

range.addEventListener("input", function() {
    let value = this.value;
    let area = value * value;
    rangeLabel.textContent = '${value} x ${value}';

    updateGrid();
});

//Mouse events//
//To draw hold/press mouseclick//
let isDrawing = false;
const divSquare = document.querySelector("div");

divSquare.addEventListener("mousedown", function (e) {
    if (isDrawing) {
        isDrawing = true;
        e.target.classList.replace("square", "color");
        colorGrid(e);
    }
});

divSquare.addEventListener("mouseup", function (e) {
    if (isDrawing) {
        isDrawing = false;
    }
});

updateGrid();
btnColor.classList.add("active");

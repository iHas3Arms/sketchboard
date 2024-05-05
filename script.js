const sketchboard = document.getElementById("sketchboard");
const input = document.getElementById("sketchSize")
const generateBtn = document.getElementById("generate");

function drawGrid(length = 10) {
    sketchboard.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    sketchboard.textContent = "";
    for (i=0; i<length**2; i++) {
        let square = document.createElement("div");
        square.classList.add("block");
        sketchboard.insertAdjacentElement("beforeend", square);
    }
}

generate.addEventListener("click", function() {
    let size = input.value;
    if (size < 1 || size > 100) return alert("Pick a number between 1-100.");
    drawGrid(size);
    input.value = 0;
});

drawGrid();
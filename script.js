const sketchboard = document.getElementById("sketchboard");

function drawGrid(length) {
    sketchboard.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    sketchboard.textContent = "";
    for (i=0; i<length**2; i++) {
        let square = document.createElement("div");
        square.classList.add("block");
        sketchboard.insertAdjacentElement("beforeend", square);
    }
}

drawGrid(56);
const sketchboard = document.getElementById("sketchboard");
const input = document.getElementById("sketchSize")
const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const fillBtn = document.getElementById("fill");

const clearBorders = document.getElementById("clear-borders");
let bordersClear = false;

let allColourBtns = document.querySelector(".colours");

let colour = "black";
let allColours = ["red", "blue", "green", "yellow", "orange", "purple", "white", "black"];

// Function

function drawGrid(length = 10) {
    sketchboard.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    sketchboard.style.gridTemplateRows = `repeat(${length}, 1fr)`;
    sketchboard.textContent = "";
    for (i=0; i<length**2; i++) {
        let square = document.createElement("div");
        square.classList.add("block");
        square.id = `block-${i}`;
        sketchboard.insertAdjacentElement("beforeend", square);
    }
}

// Button and input event listeners

clearBorders.addEventListener("click", function() {
    if (bordersClear) {
        bordersClear = false;
        sketchboard.querySelectorAll(".block").forEach(function(block) {
            block.style.border = "1px solid black";
        });
    } else {
        bordersClear = true;
        sketchboard.querySelectorAll(".block").forEach(function(block) {
            block.style.border = "0";
        });
    }
});

generate.addEventListener("click", function() {
    let size = input.value;
    if (size < 1 || size > 100) return alert("Pick a number between 1-100.");
    drawGrid(size);
    console.log("1");
});

resetBtn.addEventListener("click", function() {
    sketchboard.querySelectorAll(".block").forEach(function(block) {
        block.style.backgroundColor = "white";
    });
})

allColourBtns.addEventListener("click", function(e) {
    console.log(e.target.id);
    if (e.target.id == "red") {
    colour = "red";
    } else if (e.target.id == "blue") {
        colour = "blue";
    } else if (e.target.id == "green") {
        colour = "green";
    } else if (e.target.id == "yellow") {
        colour = "yellow";
    } else if (e.target.id == "orange") {
        colour = "orange";
    } else if (e.target.id == "purple") {
        colour = "purple";
    } else if (e.target.id == "white") {
        colour = "white";
    } else if (e.target.id == "black") {
        colour = "black";
    } else if (e.target.id == "j-cole") {
        colour = "yellow";
    }
})

fillBtn.addEventListener("click", function() {
    sketchboard.querySelectorAll(".block").forEach(function (block) {
        block.style.backgroundColor = colour;
    });
});

// Colour changer

sketchboard.addEventListener("click", function(e) {
    document.getElementById(e.target.id).style.backgroundColor = colour;
});

// input.addEventListener("keyDown", function(e) {
//     if (e.key != "Enter") return;
//     let size = input.value;
//     if (size < 1 || size > 100) return alert("Pick a number between 1-100.");
//     drawGrid(size);
//     input.value = 0;
//     console.log("1");
// });

drawGrid();
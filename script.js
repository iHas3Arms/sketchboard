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
    document.getElementById(e.target.id).style.background = "none";
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
        colour = "j-cole";
    } else if (e.target.id == "drake") {
        colour = "drake";
    } else if (e.target.id == "kendrick") {
        colour = "kendrick";
    }
});

function rappersBlock(e) {
    if (colour == "j-cole") {
        document.getElementById(e.target.id).style.background = "url('./src/j-cole.jpeg')";
    } else if (colour == "drake") {
        document.getElementById(e.target.id).style.background = "url('./src/drake.jpeg')";
    } else if (colour == "kendrick") {
        document.getElementById(e.target.id).style.background = "url('./src/kendrick.jpeg')";
    }
    sketchboard.querySelectorAll(".block").forEach(function(block) {
        block.style.backgroundRepeat = "no-repeat";
        block.style.backgroundSize = "contain";
    });
}

function rappersFill() {
    if (colour == "j-cole") {
        sketchboard.querySelectorAll(".block").forEach(function(block) {
            block.style.backgroundColor = "";
            block.style.background = "url('./src/j-cole.jpeg')";
            block.style.backgroundRepeat = "no-repeat";
            block.style.backgroundSize = "contain";
        });
    } else if (colour == "drake") {
        sketchboard.querySelectorAll(".block").forEach(function(block) {
            block.style.backgroundColor = "";
            block.style.background = "url('./src/drake.jpeg')";
            block.style.backgroundRepeat = "no-repeat";
            block.style.backgroundSize = "contain";
        });
    } else if (colour == "kendrick") {
        sketchboard.querySelectorAll(".block").forEach(function(block) {
            block.style.backgroundColor = "";
            block.style.background = "url('./src/kendrick.jpeg')";
            block.style.backgroundRepeat = "no-repeat";
            block.style.backgroundSize = "contain";
        });
    }
}

fillBtn.addEventListener("click", function() {
    if (colour == "j-cole" || colour == "drake" || colour == "kendrick") return rappersFill();
    sketchboard.querySelectorAll(".block").forEach(function (block) {
        block.style.background = "none";
        block.style.backgroundColor = colour;
    });
});

// Colour changer

// sketchboard.addEventListener("click", function(e) {
//     if (colour == "j-cole" || colour == "drake" || colour == "kendrick") return rappersBlock(e);
//     document.getElementById(e.target.id).style.backgroundColor = colour;
// });

// Drag
let isDown = false;

sketchboard.addEventListener("mouseup", function() {
    isDown = false;
});

sketchboard.addEventListener("mousedown", function(e) {
    console.log(e.target.id);
    if (colour == "j-cole" || colour == "drake" || colour == "kendrick") return rappersBlock(e);
    document.getElementById(e.target.id).style.backgroundColor = colour;
    if (!isDown) {
        isDown = true;
        if (!isDown) return;
    }
});

sketchboard.addEventListener("mouseover", function(e) {
    if (!isDown) return;
    if (colour == "j-cole" || colour == "drake" || colour == "kendrick") return rappersBlock(e);
    document.getElementById(e.target.id).style.backgroundColor = colour;
});

sketchboard.addEventListener("mouseup", function() {
    isDown = false;
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
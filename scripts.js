let container = document.getElementById('container');
let sizeButton = document.querySelector('#size-button');
let restartButton = document.querySelector('#restart-button');


//Asking user for squares per side and setting that value
sizeButton.addEventListener('click', function () {
    do {
        userNumSquares = prompt('How many squares per side? (Enter a number from 2 to 80)');
        checkInp();
    } while (userNumSquares < 2 || userNumSquares > 80);

    clearGrid();
    gridSize(userNumSquares);
    createDivs(userNumSquares);
})

restartButton.addEventListener('click', removeColor);

//setting up default grid
function defaultGrid(){
    gridSize(24)
    createDivs(24)
}

//Setting up grid size
function gridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//creating divs for grid
function createDivs(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList = "div";
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = 'gray';
        });
        container.appendChild(div);
    }
}

//checking if entered value is a number
function checkInp() {
    if (isNaN(userNumSquares)) {
        alert("Must input numbers");
        userNumSquares = prompt('How many squares per side? (Enter a number from 2 to 100)');
        checkInp();
    }
}

//clearing the table
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//clear grid colors
function removeColor(){
    let allDivs = document.querySelectorAll('.div');
    allDivs.forEach((div) => {
        div.style.backgroundColor = '';
    });
    
}
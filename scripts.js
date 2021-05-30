let container = document.getElementById('container');
let button = document.querySelector('button');

// button.addEventListener('click', function() {
//     let squaresPerSide = prompt('How many squares per side?');
//     numOfSquares = squaresPerSide;
//     drawTable();
// })


drawTable = function () {
    for (i = 0; i < 25; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.style.height = '192px';
        div.style.width = '192px';
        div.classList.add('square');
        div.onmouseover = function () {
            div.style.backgroundColor = 'gray';
        }
    }
}
drawTable();
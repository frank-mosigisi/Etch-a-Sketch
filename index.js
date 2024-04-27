const gridcontainer = document.querySelector('#container')
const clearButton = document.querySelector('.clearButton')
const newSketchButton = document.querySelector('.newSketchButton')


let defaultSquares = 16;

function fullGrid (gridCount){

    for (let i= 0; i < gridCount; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.style.height = `${100/gridCount}%`
        gridcontainer.appendChild(gridItem);

        for (let i = 0 ; i < gridCount; i++){
            const square = document.createElement('div');
            square.classList.add('square')
            square.style.width = `${100/gridCount}%`
            gridItem.appendChild(square);
        }
    }
}

fullGrid(defaultSquares);
applyHoverEffect()

function applyHoverEffect() {
    const squares = document.querySelectorAll('.square');   
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor= getRandomColor();
        });
    });

    clearButton.addEventListener('click', ()=>{
        squares.forEach((square) => {
            square.style.backgroundColor= '';
        });
    });
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateNewGrid() {

    let number;

    while(true){

        number = prompt ('Hello player one, enter the number of squares per side for the new grid.'
                           + ' Enter a number less than 101.' , '')
        if (number=== null || number === ''){ //if nothing is entered the default sqaures are used
            number = defaultSquares;
            break;
        }
        // converting the number entered into an integer
        number = Number(number);

        if (Number.isNaN(number)){
            alert ('please enter a valid number!');
        }
        else if (number > 100 || number < 1){
            alert('You entered a number over 101 or less than 1. Try again !!!');

        } else {
            break;
        }
    }
    // this while loop clears the gridcontainer in preparation for the new grid
    while (gridcontainer.firstChild) {
        gridcontainer.removeChild(gridcontainer.firstChild);
    
    };

    fullGrid(number);
    applyHoverEffect();

};

newSketchButton.addEventListener('click', generateNewGrid);
    




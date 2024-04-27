const gridcontainer = document.querySelector('#container')
const clearButton = document.querySelector('.clearbutton')
const newGameButton = document.querySelector('.newGamebutton')

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
            e.target.classList.add('active')
        });
    });

    // added the clear button event listener too inside the
    // function so that it can also be reapplied when a new grid 
    // is created too
    clearButton.addEventListener('click', ()=>{
        squares.forEach((square) => {
                square.classList.remove('active')
            });
    })
}






function generateNewGrid() {

    let number;

    while(true){

        number = prompt ('Hello player one, enter the number of squares per side for the new grid'
                           + ' Enter a number less than 101.' , '')
        if (number=== null || number === ''){
            number = defaultSquares;
            break;
        }

        number = Number(number);
        if (Number.isNaN(number)){
            alert ('please enter a valid number!');
        }
        else if (number > 100 || number < 1){
            alert('You entered a number over 101 or less than 1! Try again. Thanks');

        }else{
            break;
        }
    }
    while (gridcontainer.firstChild) {
        gridcontainer.removeChild(gridcontainer.firstChild);
    
    }
    fullGrid(number)
    applyHoverEffect()

}
newGameButton.addEventListener('click', generateNewGrid);
    




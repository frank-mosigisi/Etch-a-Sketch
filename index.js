const gridcontainer = document.querySelector('#container')
const clearButton = document.querySelector('.clearbutton')

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

fullGrid(16);

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active')
    });
});

clearButton.addEventListener('click', ()=>{
    squares.forEach((square) => {
            square.classList.remove('active')
        });
    })
    




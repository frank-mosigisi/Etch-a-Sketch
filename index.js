const gridcontainer = document.querySelector('#container')

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

fullGrid(17)

let item = document.querySelector('square')
item.addEventListener('mouseover',changeColor);

function changeColor(){
    let item = document.querySelector('square')
    item.setAttribute("style", "background-color:blue;")
}

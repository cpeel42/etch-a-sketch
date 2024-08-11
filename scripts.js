const container = document.querySelector('.container');
const gridResizer = document.querySelector('.gridResizer');

gridResizer.addEventListener('click', (event) => {
    width = prompt('enter new width');
    height = prompt('enter new height');
    if (height > 100 || width > 100) {
        alert("The height or width must be less than 100") ;
    } else {
        removeGrid();
        createGrid(height, width);
    }
})

function removeGrid() {
    container.querySelectorAll('.row').forEach(cell => {
        cell.remove();
    })
};

function createGrid(height, width) {
    for (let i = 0; i < height; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        container.appendChild(newRow);
    
        for (let j = 0; j < width; j++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.style.opacity = 1;
            newCell.addEventListener('mouseover', (event) => {
                newCell.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
                newCell.style.opacity -= 0.1;
            })
            newRow.appendChild(newCell);
        } 
    };
}


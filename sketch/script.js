document.addEventListener('DOMContentLoaded', () => {
    createGrid(16); // Initialize default grid
    
    document.getElementById('gridSizeBtn').addEventListener('click', () => {
        let gridSize = prompt('Enter number of squares per side (max 100):', 16);
        gridSize = parseInt(gridSize);
        
        if (gridSize > 0 && gridSize <= 100) {
            createGrid(gridSize);
        } else {
            alert('Please enter a number between 1 and 100!');
        }
    });
});

function createGrid(squaresPerSide) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid
    
    const squareSize = 960 / squaresPerSide;
    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });
        
        container.appendChild(square);
    }
}
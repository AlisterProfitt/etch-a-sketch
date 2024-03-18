const biggie = document.querySelector('#biggie');
const newGrid = document.querySelector('#newGrid');
let grid;

for (i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (j = 0; j < 4; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.addEventListener('mouseenter', () => {
            box.classList.add('hover')
        })
        row.appendChild(box);
    }
    biggie.appendChild(row);
}

function createNewGrid() {
    while (biggie.firstChild) {
        biggie.removeChild(biggie.firstChild);
    }
        for (i = 0; i < grid; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (j = 0; j < grid; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener('mouseenter', () => {
                box.classList.add('hover')
            })
            row.appendChild(box);
        }
        biggie.appendChild(row);
    }
}

newGrid.addEventListener('click', () => {
    grid = prompt('How many squares per side do you want? Maximum is 100', '');
        if (grid > 100) {
            alert('Sorry! You have chosen a number that is too high!!!');
        } else {
            createNewGrid();
        }
})


const biggie = document.querySelector('#biggie');
const newGrid = document.querySelector('#newGrid');
const clearGrid = document.querySelector('#clearGrid')
const newColorGrid = document.querySelector('#newColorGrid');
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let grid;

function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.addEventListener('mouseover', () => {
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
            box.addEventListener('mouseover', () => {
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

clearGrid.addEventListener('click', () => {
    let nodelist = document.querySelectorAll('.box');
    let boxes = Array.from(nodelist);
    boxes.forEach((elem) => elem.classList.remove('hover'));
    boxes.forEach((elem) => elem.style.backgroundColor = '');
    
})

function createNewColorGrid() {
    while (biggie.firstChild) {
        biggie.removeChild(biggie.firstChild);
    }
        for (i = 0; i < grid; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (j = 0; j < grid; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener('mouseover', () => {
            box.style.backgroundColor = generateNewColor();
            console.log(generateNewColor())
            })
            row.appendChild(box);
        }
        biggie.appendChild(row);
    }
}

newColorGrid.addEventListener('click', () => {
    grid = prompt('How many squares per side do you want? Maximum is 100', '');
        if (grid > 100) {
            alert('Sorry! You have chosen a number that is too high!!!');
        } else {
            createNewColorGrid();
        }
})

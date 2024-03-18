const biggie = document.querySelector('#biggie');

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
const board = document.querySelector('#board');
const cnt = 500;

for (let i = 0; i < cnt; i++) {
    const square = document.createElement('div'); // динамически создаем элемент
    square.classList.add('square');
    board.append(square); // добавляем элемент в html
}

// обрабатываем события для мыши
board.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        setColor(event);
    }
});
board.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('square')) {
        removeColor(event);
    }
});

// обрабатываем события для мобилки
board.addEventListener('touchmove', (event) => {
    event.preventDefault();
    const touches = event.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);

        if (element && element.classList.contains('square')) {
            element.style.background = 'red';
        }
    }
});
board.addEventListener('touchend', (event) => { // для сбрасывания кваратов
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = '#1d1d1d';
    });
});

const colorList = ["Crimson", "Chocolate", "DarkBlue", "Chartreuse", "DarkMagenta", "DarkSlateBlue", "DarkTurquoise",
    "DarkSalmon", "DeepPink", "DimGray"]

function getRandomInt(left, right) {
    left = Math.ceil(left);
    right = Math.ceil(right);
    return Math.floor(Math.random() * (right - left + 1)) + left;
}

function setColor(x) {
    x.target.style.backgroundColor = colorList[getRandomInt(0, colorList.length - 1)];
}

function removeColor(x) {
    x.target.style.backgroundColor = '#1d1d1d';
}

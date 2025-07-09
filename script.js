const board = document.querySelector('#board');
const cnt = 500;

for (let i = 0; i < cnt; i++) {
    const square = document.createElement('div'); // динамически создаем элемент
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        //console.log('over');
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    // добавим события для мобилки
    square.addEventListener('touchstart', () => {
        setColor(square);
    })
    square.addEventListener('touchmove', (x) => {
        x.preventDefault(); // при передвижании пальца
        const touch = x.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains('square')) {
            setColor(square);
        }
    })
    square.addEventListener('touchend', () => {
        removeColor(square);
    })

    board.append(square); // добавляем элемент в html
}

function setColor(x) {
    x.style.backgroundColor = "red";
}

function removeColor(x) {
    x.style.backgroundColor = '#1d1d1d';
}

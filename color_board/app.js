const board = document.querySelector('#board');

const SQUARES_NUMBER = 1008;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.background = '#1d1d1d';
  element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor() {
  return 'hsl(' + Math.floor(Math.random() * 360) + ', 82%, 56% )';
}

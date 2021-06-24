const board = document.querySelector('#board');
const colors = [
  '#eb4034',
  '#ebd034',
  '#b7eb34',
  '#4ceb34',
  '#34eba5',
  '#34c0eb',
  '#d334eb',
  '#eb345f',
];
const SQUARES_NUMBER = 1008;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = `0 0 2px black`;
}

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length);
//   return colors[index];
// }

function getRandomColor() {
  return 'hsl(' + Math.floor(Math.random() * 360) + ', 82%, 56% )';
}

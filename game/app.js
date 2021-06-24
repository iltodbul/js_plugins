const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeElement = document.getElementById('time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  timeElement.innerHTML = `00:${time}`;
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    timeElement.innerHTML = current < 10 ? `00:0${current}` : `00:${current}`;
  }
}

function finishGame() {
  timeElement.parentNode.classList.add('hide');
  board.innerHTML = `<h1> Your score is: <span class="primary">${score}<span/><h1/>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(20, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  let color = getRandomColor();

  circle.classList.add('circle');
  circle.style.background = color;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min + min));
}

function getRandomColor() {
  return 'hsl(' + Math.floor(Math.random() * 360) + ', 82%, 56% )';
}

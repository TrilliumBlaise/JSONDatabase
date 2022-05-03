const CONGRATS_MESSAGE = 'CONGRATULATIONS ON THE BABY!';
const COLORS = [
  '#ff0000',
  '#ff4000',
  '#ff7b00',
  '#ffbb00',
  '#fff700',
  '#ccff00',
  '#8cff00',
  '#51ff00',
  '#11ff00',
  '#00ff2b',
  '#00ff6a',
  '#00ffa6',
  '#0062ff',
  '#0026ff',
  '#1500ff',
  '#5500ff',
  '#9000ff',
  '#cc00ff',
  '#ff00f2',
  '#ff00b7',
  '#ff0077',
  '#ff003b',
];
const messageElement = document.querySelector('h1');

document.addEventListener('DOMContentLoaded', e => {
  startConfetti();
  let count = 0;
  for (let i = 0; i < CONGRATS_MESSAGE.length; i++) {
    if (count > COLORS.length - 1) {
      count = 0;
    }
    const newLetter = document.createElement('span');
    newLetter.innerText += CONGRATS_MESSAGE[i];
    messageElement.appendChild(newLetter);
    if (CONGRATS_MESSAGE[i] === ' ') continue;
    newLetter.style.color = COLORS[i];
    if (i > COLORS.length - 1) {
      newLetter.style.color = COLORS[count++];
    }
  }
});

document.addEventListener('click', e => {
  toggleConfetti();
});

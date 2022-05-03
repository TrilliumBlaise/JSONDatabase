import { backgrounds } from './backgrounds.js';

const DATE_TO_COUNT_TO = 'January 2, 2023 00:00:00';

const countToDate = new Date(DATE_TO_COUNT_TO);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const months = Math.floor(time / 2629746);
  const weeks = Math.floor(time / 657436.5) % 4;
  const days = Math.floor(time / 93919.5) % 7;
  const hours = Math.floor(time / 3600) % 24;
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;

  setBackground(hours);
  flip(document.querySelector('[data-months-tens'), Math.floor(months / 10));
  flip(document.querySelector('[data-months-ones'), months % 10);
  flip(document.querySelector('[data-weeks-tens'), Math.floor(weeks / 10));
  flip(document.querySelector('[data-weeks-ones'), weeks % 10);
  flip(document.querySelector('[data-days-tens'), Math.floor(days / 10) % 10);
  flip(document.querySelector('[data-days-ones'), days % 10);
  flip(document.querySelector('[data-hours-tens'), Math.floor(hours / 10));
  flip(document.querySelector('[data-hours-ones'), hours % 10);
  flip(document.querySelector('[data-minutes-tens'), Math.floor(minutes / 10));
  flip(document.querySelector('[data-minutes-ones'), minutes % 10);
  flip(document.querySelector('[data-seconds-tens'), Math.floor(seconds / 10));
  flip(document.querySelector('[data-seconds-ones'), seconds % 10);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector('.top');
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;
  const bottomHalf = flipCard.querySelector('.bottom');
  const topFlip = document.createElement('div');
  topFlip.classList.add('flip-top');
  const bottomFlip = document.createElement('div');
  bottomFlip.classList.add('flip-bottom');

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener('animationstart', e => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener('animationend', e => {
    topFlip.remove();
  });
  bottomFlip.addEventListener('animationend', e => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}

function setBackground(hour) {
  const background = document.querySelector('body');
  background.style.backgroundImage = `url(${backgrounds[(hour % backgrounds.length) - 1]})`;
  background.style.backgroundSize = '100% 100%';
  background.style.backgroundRepeat = 'no repeat';
}

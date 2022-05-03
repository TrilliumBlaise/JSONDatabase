const SEX = '';
const REVEAL_TIME = '11:00:00';

const boyVotes = document.querySelector('.boy');
const girlVotes = document.querySelector('.girl');

let savedVotes;
document.addEventListener('DOMContentLoaded', e => {
  savedVotes = loadSavedVotes();
  if (savedVotes) {
    boyVotes.innerHTML = `<h1>${savedVotes.boy}</h1>`;
    girlVotes.innerHTML = `<h1>${savedVotes.girl}</h1>`;
  }
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('boy')) {
    addVote('boy');
  }
  if (e.target.classList.contains('girl')) {
    addVote('girl');
  }
});

function addVote(sex) {
  if (sex === 'boy') {
    savedVotes.boy += 1;
  }
  if (sex === 'girl') {
    savedVotes.girl += 1;
  }
  saveVotes(savedVotes);
}

function loadSavedVotes() {
  const url = 'https://github.com/TrilliumBlaise/Gender-Vote/blob/main/votes.json';
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return JSON.parse(this.responseText);
    }
  };
  request.open('GET', url, true);
  request.send();
}

function saveVotes(data) {
  localStorage.setItem('votes', JSON.stringify(data));
}

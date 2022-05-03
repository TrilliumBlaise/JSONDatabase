//Select the elements
const modal = document.querySelector('#modal');
const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = modal.querySelector('button');
const overlay = document.querySelector('#overlay');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('open');
  overlay.classList.add('open');
});

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.remove('open');
  overlay.classList.remove('open');
}

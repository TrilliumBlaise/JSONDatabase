const body = document.querySelector('body');

body.addEventListener('click', e => {
  if (!e.target.matches('.expand-button')) return;
  const card = e.target.closest('.card');
  const cardBody = card.querySelector('.card-body');
  cardBody.classList.toggle('show');
  e.target.innerText = cardBody.classList.contains('show') ? 'Collapse' : 'Expand';
});

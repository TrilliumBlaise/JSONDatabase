const form = document.querySelector('form');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question-item');
const myAlert = document.querySelector('#alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  questions.forEach(question => {
    question.classList.add('incorrect');
  });
  const userAnswers = [...answers].filter(answer => {
    if (answer.checked) return answer;
  });
  userAnswers.forEach(answer => {
    if (answer.value === 'true')
      answer
        .closest('.question-item')
        .classList.replace('incorrect', 'correct');
  });
  console.log(userAnswers);
  if (
    userAnswers.length === 3 &&
    userAnswers.every(answer => answer.value === 'true')
  ) {
    myAlert.classList.add('active');
  }
  setTimeout(function () {
    myAlert.classList.remove('active');
  }, 2000);
});

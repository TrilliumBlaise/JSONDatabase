const list = document.querySelector('#list');
const form = document.querySelector('#new-todo-form');

//On load fills in todo list
document.addEventListener('DOMContentLoaded', () => {
  loadList();
});
//Add todo
form.addEventListener('submit', e => {
  const text = form.querySelector('input').value;
  if (text === '') {
    e.preventDefault();
    alert('Please enter a todo');
    return;
  }
  createNewListItem(false, text);
  saveList(list.children);
});

list.addEventListener('click', e => {
  //Complete todo
  if (e.target.dataset.listItemCheckbox != null) {
    e.target.dataset.listItemCheckbox = e.target.checked;
    saveList(list.children);
  }
  //Delete todo
  if (e.target.dataset.buttonDelete != null) {
    deleteItem(e.target.parentNode);
    list.removeChild(e.target.parentNode);
  }
});

function deleteItem(item) {
  const savedList = JSON.parse(localStorage.getItem('Todo List'));
  const index = [...list.children].indexOf(item);
  savedList.splice(index, 1);
  saveList(savedList, false);
}
//Save todo
function saveList(list, isElement = true) {
  const savedList = [];
  [...list].forEach((item, i) => {
    const checked = isElement ? item.querySelector('input').dataset.listItemCheckbox : item.checked;
    const text = isElement ? item.querySelector('span').innerText : item.text;
    const index = i;
    savedList.push({ checked, text, index });
  });
  localStorage.setItem('Todo List', JSON.stringify(savedList));
}
//Load todo
function loadList() {
  const list = JSON.parse(localStorage.getItem('Todo List'));
  list.forEach(item => {
    console.log(item);
    createNewListItem(item.checked, item.text);
  });
}

function createNewListItem(boolean, text) {
  const template = document.querySelector('#list-item-template');
  const item = template.content.cloneNode(true);
  item.querySelector('input').dataset.listItemCheckbox = boolean;
  item.querySelector('input').checked = boolean;
  item.querySelector('[data-list-item-text]').innerText = text;
  list.appendChild(item);
}

$(document).ready(function () {
  $('.page__header-icon').on('click', function () {
    $('.body').toggleClass('body-light');
    $('.new-todo-button').toggleClass('new-todo-button-light');
    $('.text-input').toggleClass('text-input-light');
    $('.todo__list').toggleClass('todo__list-light');
    $('.todo__list-item').toggleClass('todo__list-item-light');
    $('.todo__list-left-span').toggleClass('todo__list-left-span-light');
    $('.todo__filter').toggleClass('todo__filter-light');
    $('.todo__filter-item').toggleClass('todo__filter-item-light');
  });
});

function changeTheme() {
  let sun = './assets/icons/icon-sun.svg';
  let moon = './assets/icons/icon-moon.svg';

  document.getElementById('theme-icon').src =
    document.getElementById('theme-icon').src === moon ? sun : moon;
}

const body = document.querySelector('body');
const addForm = document.getElementById('add-form');
const list = document.getElementById('todo-list');
const input = document.getElementById('text-input');

const generateTemplate = (todo) => {
  let html;
  if (body.classList.contains('body-light')) {
    html = `
    <li class="todo__list-item todo__list-item-light" id="add-task">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  } else {
    html = `
    <li class="todo__list-item" id="add-task">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  }
  list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = input.value;
  if (todoText) {
    generateTemplate(todoText);
    input.value = '';
  }
});

// Delete Todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

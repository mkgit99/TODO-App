$(document).ready(function () {
  $('.page__header-icon').on('click', function () {
    $('.body').toggleClass('body-light');
    $('.new-todo-button').toggleClass('new-todo-button-light');
    $('.text-input').toggleClass('text-input-light');
    $('.todo__list').toggleClass('todo__list-light');
    $('.todo__list-item').toggleClass('todo__list-item-light');
    $('.todo__about-left-span').toggleClass('todo__about-left-span-light');
    $('.todo__filter').toggleClass('todo__filter-light');
    $('.todo__filter-item').toggleClass('todo__filter-item-light');
  });
});

$(document).ready(function () {
  $('.task_content').on('click', function () {
    $('.task_content').toggleClass('completed');
  });
});

$(document).ready(function () {
  $('.fa-circle').on('click', function () {
    $('.task_content').toggleClass('completed');
  });
});

const body = document.querySelector('body');
const addForm = document.getElementById('add-form');
const list = document.getElementById('todo-list');
const input = document.getElementById('text-input');
let listLen = document.getElementById('todo-list');
let spanTag = document.getElementById('counter');

function changeTheme() {
  let sun = './assets/icons/icon-sun.svg';
  let moon = './assets/icons/icon-moon.svg';

  if (body.classList.contains('body-light')) {
    document.getElementById('theme-icon').src = sun;
  } else document.getElementById('theme-icon').src = moon;
}

function countTodos() {
  var i = 0,
    itemCount = 0;
  while (listLen.getElementsByTagName('li')[i++]) {
    itemCount++;
  }
  generateCounter(itemCount);
}

// Count Todos
const generateCounter = (count) => {
  let span;
  span = `
    <span class="counter" id="counter">${count} items left</span>
    `;
  spanTag.innerHTML = span;
};

const generateTemplate = (todo) => {
  let html;
  if (body.classList.contains('body-light')) {
    html = `
    <li class="todo__list-item todo__list-item-light" id="add-task">
      <div>
        <i class="fas fa-circle fa-lg" style="color: rgba(58, 123, 253, 0.4);"></i>
        <span class="task_content">${todo}</span>
      </div>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  } else {
    html = `
    <li class="todo__list-item" id="add-task">
      <div>
        <i class="fas fa-circle fa-lg" style="color: rgba(58, 123, 253, 0.4);"></i>
        <span class="task_content">${todo}</span>
      </div>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  }
  list.innerHTML += html;
};

// Add Todos
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = input.value;
  if (todoText) {
    generateTemplate(todoText);
    input.value = '';
    countTodos();
  }
});

// Delete Todos
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    countTodos();
  }
});

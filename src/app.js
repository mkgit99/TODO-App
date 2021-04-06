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

//variables
// const newTodo = document.getElementById('new-todo');
// const taskList = document.getElementById('task-list');
// const checkList = document.getElementById('checked-list');

//Event Listeners
eventListeners();

function eventListeners() {
  //Form Submission
  document.querySelector('#new-todo').addEventListener('submit', newTask);

  //Remove tasks from TaskList
  // taskList.addEventListener('click', completeTask);

  //Remove tasks from TaskList
  // taskList.addEventListener('click', removeTask);

  //Document
  // document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

function newTask(e) {
  e.preventDefault();

  const task = document.getElementById('addtask').value;

  const li = document.createElement('li');
  li.textContent = task;

  //Print aleart
  alert('Task added!');

  this.reset();
}

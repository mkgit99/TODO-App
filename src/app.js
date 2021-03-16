$(document).ready(function () {
  $('.page__header-icon').on('click', function () {
    $('.body').toggleClass('body-light');
    $('.new-todo-button').toggleClass('new-todo-button-light');
    $('.todo__list').toggleClass('todo__list-light');
    $('.todo__list-item').toggleClass('todo__list-item-light');
    $('.todo__list-left-span').toggleClass('todo__list-left-span-light');
    $('.todo__filter').toggleClass('todo__filter-light');
    $('.todo__filter-item').toggleClass('todo__filter-item-light');
  });
});

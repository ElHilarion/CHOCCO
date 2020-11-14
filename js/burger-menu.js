let menuOpenBurger = (function (buttonClass, menuClass) {
  let button = document.querySelector(buttonClass);
  let menu = document.querySelector(menuClass);
  let body = document.querySelector('body');

  let _toggleMenu = function (e) {
    button.classList.toggle('button_container--active');
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }
  

  let addListeners = function () {
    button.addEventListener('click', _toggleMenu);
  };

  return {
    open: addListeners,
  };

})('#toggle', '#overlay');

console.log(menuOpenBurger);
menuOpenBurger.open();






/**
 * Вариант с отдельной кнопкой закрытия
 */
// let menu = (function(options) {

//   let buttonOpen = document.querySelector(options.buttonOpen);
//   let buttonClose = document.querySelector(options.buttonClose);
//   let menu = document.querySelector(options.menu);
//   let body = document.querySelector('body');

//   let _toggleMenu = function(e) {
//     menu.classList.toggle('overlay--open');
//     body.classList.toggle('body-active-menu');
//   }

//   let addListeners = function() {
//     buttonOpen.addEventListener('click', _toggleMenu);
//     //тут используем делигирование для закрытия меню по клику на пункты меню
//     buttonClose.addEventListener('click', _toggleMenu);
//   }

//   return {
//     open: addListeners
//   };
// })({
//   buttonOpen: '#open',
//   buttonClose: '#close',
//   menu: '#overlay'
// });

// menu.open();

// console.log(menu)
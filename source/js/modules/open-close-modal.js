import { isEscapeKey } from './utils.js';

let modal = document.querySelector('.modal-container');
let pageBody = document.querySelector('body');
let mainLogo = document.querySelector('.header-logo');


let itemFirst = document.querySelector('.modal-item--first');
let itemSecond = document.querySelector('.modal-item--second');
let itemThird = document.querySelector('.modal-item--third');
let itemFourth = document.querySelector('.modal-item--fourth');

export const openCloseModal = () => {
  let modalCloseButton = document.querySelector('.modal-page__close-button');
  let modalOpenButton = document.querySelector('.navigation-toggle');
  let modalContainer = document.querySelector('.modal-page');


  itemFirst.addEventListener('click', function () {
    closeModal();
  });

  itemSecond.addEventListener('click', function () {
    closeModal();
  });

  itemThird.addEventListener('click', function () {
    closeModal();
  });

  itemFourth.addEventListener('click', function () {
    closeModal();
  });


  modalCloseButton.addEventListener('click', function () {
    closeModal();
  });

  modalOpenButton.addEventListener('click', function () {
    openModal();
  });

  const onModalEscDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  const onModalFormEscDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModalWindow();
    }

    function closeModalWindow() {
      closeModal();
      document.removeEventListener('keydown', onModalEscDown);
    }
  };

  const openModal = function () {
    modal.classList.remove('modal-container--closed');
    modal.classList.add('modal-container--opened');
    pageBody.classList.add('no-overflow');
    mainLogo.classList.add('visually-hidden');
    document.addEventListener('keydown', onModalFormEscDown);
  };

  const closeModal = () => {
    modal.classList.remove('modal-container--opened');
    modal.classList.add('modal-container--closed');
    pageBody.classList.remove('no-overflow');
    mainLogo.classList.remove('visually-hidden');
    document.removeEventListener('keydown', onModalFormEscDown);
  };

  modal.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(modalContainer);

    if (!withinBoundaries) {
      closeModal();
    }
  });
};

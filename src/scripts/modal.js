
//  @todo: Функция открытия модального окна
export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', (evt) => handleOverlayClick (evt, popup))
};

//  @todo: Функция закрытия модального окна
export function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscClose)
};

//  @todo: закрытие модального окна по Esc
 function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const modalOpened = document.querySelector('.popup_is-opened')
    closeModal(modalOpened);
  }  
};

//  @todo: закрытие модального окна по overlay
function handleOverlayClick (evt, popup) {
  if (evt.target === popup) {
      closeModal(popup)
  };
};

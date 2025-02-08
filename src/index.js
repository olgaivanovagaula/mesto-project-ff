import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {openModal, closeModal} from './scripts/modal.js';
import { createCard, deleteCard, handleLikeCard} from './scripts/card.js';


// @todo: DOM узлы
    const cardContainer = document.querySelector('.places__list');
    const editButton = document.querySelector('.profile__edit-button');
    const addButton = document.querySelector('.profile__add-button');
    const popupEdit = document.querySelector('.popup_type_edit');
    const popupClose = document.querySelectorAll('.popup__close');
    const formEdit = popupEdit.querySelector('.popup__form');
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_description');
    const popupCardName = document.querySelector('.popup__input_type_card-name');
    const popupUrl = document.querySelector('.popup__input_type_url');
    const addCardModal = document.querySelector('.popup_type_new-card');
    const addCardModalForm = addCardModal.querySelector('.popup__form');
    const openCard = document.querySelector('.popup_type_image'); 
    const cardImage = document.querySelector('.popup__image');
    const cardCaption = document.querySelector('.popup__caption');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');


// @todo: Вывести карточки на страницу
    initialCards.forEach(function(item) {
        const card = createCard(item, deleteCard, handleLikeCard, openImagePopup);
        cardContainer.append(card);
    });
// @todo: Вывести в поле формы значение со страницы
    function handleOpenEditModal() {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;
        openModal(popupEdit);
    };

    editButton.addEventListener('click', () => handleOpenEditModal());
    addButton.addEventListener('click', () => openModal(addCardModal));

//  @todo: Обработчик «отправки» формы 'редактировать'
    function handleEditSubmit(evt) {
        evt.preventDefault();
        profileTitle.textContent = nameInput.value;
        profileDescription.textContent = jobInput.value;
        closeModal(popupEdit)
    };

    formEdit.addEventListener('submit', handleEditSubmit);

//  @todo: Закрыть попап по кнопке
    popupClose.forEach( btn  => {
        btn.addEventListener('click', (evt) => {      
        closeModal(document.querySelector('.popup_is-opened'))
        })
    });

//  @todo: Обработчик «отправки» формы 'добавить карточку'
    function handleCardSubmit(evt) {
        evt.preventDefault();
        const cardData = {
            link: popupUrl.value,
            name: popupCardName.value
        };
        const card = createCard(cardData, deleteCard, handleLikeCard, openImagePopup);
        cardContainer.prepend(card);
        addCardModalForm.reset();
        closeModal(addCardModal)
    };

    addCardModalForm.addEventListener('submit', handleCardSubmit);

//  @todo: Функция открытия карточки
    function openImagePopup(link, name) {
        cardImage.src = link;
        cardImage.alt = name;
        cardCaption.textContent = name;
        openModal(openCard);
    };

    


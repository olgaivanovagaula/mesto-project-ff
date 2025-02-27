import './pages/index.css';
import {openModal, closeModal} from './scripts/modal.js';
import { createCard, deleteCard, handleLikeCard} from './scripts/card.js';
import {enableValidation, clearValidation, setDisabledBtn} from './scripts/validation.js';
import { getCardsData, getProfileData, editeProfileData, addCardApi, avatarProfileData } from './scripts/api.js';

 const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }


document.addEventListener('DOMContentLoaded', () => {
// @todo: DOM узлы
    const cardContainer = document.querySelector('.places__list');
    const editButton = document.querySelector('.profile__edit-button');
    const addButton = document.querySelector('.profile__add-button');
    const avatarButton = document.querySelector('.profile__image-button');
    const popupEdit = document.querySelector('.popup_type_edit');
    const popupClose = document.querySelectorAll('.popup__close');
    const formEdit = popupEdit.querySelector('.popup__form');
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_description');
    const popupCardName = document.querySelector('.popup__input_type_card-name');
    const popupUrl = document.querySelector('.popup__input_type_url');
    const addCardModal = document.querySelector('.popup_type_new-card');
    const addAvatarModal = document.querySelector('.popup_type_avatar');
    const popupAvatar = addAvatarModal.querySelector('.popup__form');
    const popupAvatarLink = popupAvatar.querySelector('.popup__input_type_avatar');
    const profileImage = document.querySelector('.profile__image');
    const addCardModalForm = addCardModal.querySelector('.popup__form');
    const openCard = document.querySelector('.popup_type_image'); 
    const cardImage = document.querySelector('.popup__image');
    const cardCaption = document.querySelector('.popup__caption');
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    const avatarFormBtn = popupAvatar.querySelector('.popup__button');
    const editFormBtn = formEdit.querySelector('.popup__button');
    const cardFormBtn = addCardModalForm.querySelector('.popup__button');



    let userId = null
    Promise.all([getCardsData(),  getProfileData()]).then(([cardData, profileData]) => {
        userId = profileData._id
        profileImage.style.backgroundImage = `url(${profileData.avatar})`;
        cardData.forEach(function(item) {
            const card = createCard(item, deleteCard, handleLikeCard, openImagePopup, userId);
            cardContainer.append(card);
        });
        profileTitle.textContent = profileData.name;
        profileDescription.textContent = profileData.about
});
    
// @todo: Вывести в поле формы значение со страницы
    function handleOpenEditModal() {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;
        openModal(popupEdit);
    };

    editButton.addEventListener('click', () => {
        clearValidation(formEdit, selectors)
        handleOpenEditModal()
    });
    addButton.addEventListener('click', () =>{ 
        clearValidation(addCardModalForm, selectors)
        setDisabledBtn(true, selectors, cardFormBtn)
        openModal(addCardModal)});

    avatarButton.addEventListener('click', () =>{ 
        clearValidation(popupAvatar, selectors)
        setDisabledBtn(true, selectors, avatarFormBtn)
        openModal(addAvatarModal)});

    //  @todo: Обработчик «отправки» формы 'редактировать аватар'
    function handleAvatarSubmit(evt) {
        evt.preventDefault();
        avatarFormBtn.textContent = "Сохранение...";
        avatarProfileData(popupAvatarLink.value).then((data) => {
            profileImage.style.backgroundImage = `url(${data.avatar})`;
            closeModal(addAvatarModal)
        })
        .catch ((e) => {
            console.error('Ошибка редактирования аватара: ' + e)
        }).finally(() => {
               avatarFormBtn.textContent = "Сохранить"
        })
    };

    popupAvatar.addEventListener('submit', handleAvatarSubmit);

//  @todo: Обработчик «отправки» формы 'редактировать профиль'
    function handleEditSubmit(evt) {
        evt.preventDefault();
        editFormBtn.textContent = "Сохранение...";
        editeProfileData(nameInput.value, jobInput.value).then((data) => {
            profileTitle.textContent = data.name;
            profileDescription.textContent = data.about;
            closeModal(popupEdit) 
        })
        .catch ((e) => {
            console.error('Ошибка редактирования профиля: ' + e)
        }).finally(() => {
            editFormBtn.textContent = "Сохранить"
     })
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
        cardFormBtn.textContent = "Сохранение...";
        addCardApi(popupCardName.value, popupUrl.value).then((data) => {
            console.log(data);
            const card = createCard(data, deleteCard, handleLikeCard, openImagePopup, userId);
            cardContainer.prepend(card);
            closeModal(addCardModal)
        }).catch((error) => {
            console.log(`Ошибка в создании карточки: ${error}`)
        }).finally(() => {
            cardFormBtn.textContent = "Сохранить"
        }) 
        
    };

    addCardModalForm.addEventListener('submit', handleCardSubmit);

//  @todo: Функция открытия карточки
    function openImagePopup(link, name) {
        cardImage.src = link;
        cardImage.alt = name;
        cardCaption.textContent = name;
        openModal(openCard);
    };

//  @todo: добавление валидации форм    
enableValidation(selectors)
 })


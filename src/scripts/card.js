import { deleteCardApi, likeCardApi, dislikeCardApi } from "./api";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
    export function createCard(item, removeCard, handleLikeCard, openImagePopup, userId) {

        console.log(item)
        const card = cardTemplate.querySelector('.places__item').cloneNode(true);
        const deleteButton = card.querySelector('.card__delete-button');
        const likeButton = card.querySelector('.card__like-button');
        const cardImage = card.querySelector('.card__image');
        const likeCount = card.querySelector('.card__like-count');
        likeCount.textContent = item.likes.length;
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector('.card__title').textContent = item.name;
        

        if (item.owner._id === userId) {
            deleteButton.addEventListener('click', (e) => removeCard(e, item._id));
        }
        else {
            deleteButton.style.display='none'
        };

        likeButton.addEventListener('click', (evt) => handleLikeCard(evt, likeButton, item._id, likeCount));
        card.addEventListener('click', () => openImagePopup(item.link, item.name))
        return card;
    };

// @todo: Функция удаления карточки
   export function deleteCard(evt, id) {
        evt.stopPropagation();
        deleteCardApi(id).then(() => {
            evt.target.closest('.places__item').remove();
        })
        .catch ((er) => {
            console.log(`Ошибка в удалении карточки: ${er}`)
        })
    };

// @todo: Функция добавления лайка карточки
    export function handleLikeCard(evt, likebtn, userId, likeCount) {
        evt.stopPropagation();
        if (likebtn.classList.contains('card__like-button_is-active')) {
            likebtn.classList.remove('card__like-button_is-active');
            dislikeCardApi(userId).then((data) => {
                likeCount.textContent = data.likes.length 
            })
            .catch ((er) => {
                console.log(`Ошибка в снятии лайка карточке: ${er}`); 
            })
        }
        else {
            likebtn.classList.add('card__like-button_is-active');
            likeCardApi(userId).then((data) => {
                likeCount.textContent = data.likes.length
            })
            .catch ((er) => {
                console.log(`Ошибка в добавлении лайка карточке: ${er}`); 
            })
        }
    }
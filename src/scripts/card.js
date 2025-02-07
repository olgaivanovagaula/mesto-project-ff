// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
    export function createCard(item, removeCard, handleLikeCard, openImagePopup) {
        const card = cardTemplate.querySelector('.places__item').cloneNode(true);
        const deleteButton = card.querySelector('.card__delete-button');
        const likeButton = card.querySelector('.card__like-button');
        const cardImage = card.querySelector('.card__image');
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector('.card__title').textContent = item.name;
        

        deleteButton.addEventListener('click', removeCard);
        likeButton.addEventListener('click', (evt) => handleLikeCard(evt, likeButton));
        card.addEventListener('click', () => openImagePopup(item.link, item.name))
        return card;
    };

// @todo: Функция удаления карточки
   export function deleteCard(evt) {
        evt.stopPropagation();
        evt.target.closest('.places__item').remove();
    };

// @todo: Функция лайка карточки
    export function handleLikeCard(evt, likebtn) {
        evt.stopPropagation();
        likebtn.classList.toggle('card__like-button_is-active')
    }
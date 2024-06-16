// @todo: Темплейт карточки
    const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
    const cardContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки
    function createCard(item, removeCard) {
        const card = cardTemplate.querySelector('.places__item').cloneNode(true);
        const deleteButton = card.querySelector('.card__delete-button');
        const cardImage = card.querySelector('.card__image');
        cardImage.src = item.link;
        cardImage.alt = item.name;
        card.querySelector('.card__title').textContent = item.name;
        

        deleteButton.addEventListener('click', removeCard);

        //cardContainer.append(card);
        return card;

    }
// @todo: Функция удаления карточки
    function deleteCard(evt) {
        evt.target.closest('.places__item').remove();
    }
// @todo: Вывести карточки на страницу
    initialCards.forEach(function(item) {
        const card = createCard(item, deleteCard);
        cardContainer.append(card);
    })

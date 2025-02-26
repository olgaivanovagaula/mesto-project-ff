const apiSettings = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-32', 
    headers: {
        authorization: 'c9636d7b-e039-4f97-bc60-7d3d9bdd6374',
        "Content-Type": "application/json"
    }
};

//  @todo: запрос получения данных карточек с сервера
export function getCardsData() {
    return fetch(`${apiSettings.baseUrl}/cards`,{ headers: apiSettings.headers})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
}

export function getProfileData() {
    return fetch(`${apiSettings.baseUrl}/users/me`,{ headers: apiSettings.headers})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function editeProfileData(updatedName, updatedAbout) {
    const editData = {
        name: updatedName,
        about: updatedAbout
    }
    return fetch(`${apiSettings.baseUrl}/users/me`,{ headers: apiSettings.headers, method: 'PATCH', body: JSON.stringify(editData)})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function avatarProfileData(updatedAvatar) {
    const avatarData = {
        avatar: updatedAvatar,
    }
    return fetch(`${apiSettings.baseUrl}/users/me/avatar`,{ headers: apiSettings.headers, method: 'PATCH', body: JSON.stringify(avatarData)})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function addCardApi(name, link) {
    const cardData = {
        name,
        link
    };
    return fetch(`${apiSettings.baseUrl}/cards`,{ headers: apiSettings.headers, method: 'POST', body: JSON.stringify(cardData)})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function deleteCardApi(id) {
    return fetch(`${apiSettings.baseUrl}/cards/${id}`,{ headers: apiSettings.headers, method: 'DELETE'})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function likeCardApi(userId) {
    return fetch(`${apiSettings.baseUrl}/cards/likes/${userId}`,{ headers: apiSettings.headers, method: 'PUT'})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
};

export function dislikeCardApi(userId) {
    return fetch(`${apiSettings.baseUrl}/cards/likes/${userId}`,{ headers: apiSettings.headers, method: 'DELETE'})
    .then(res => {
        if (res.ok) {return res.json()}
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => res)
}












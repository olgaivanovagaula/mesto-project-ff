(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o),e.addEventListener("click",c)}function r(e){var n=e.querySelector("form");n&&function(e,n){e.querySelectorAll(n.inputSelector).forEach((function(r){t(r,e,n),r.value=""}))}(n,p),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o),e.removeEventListener("click",c)}function o(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function c(e){e.target===e.currentTarget&&r(e.currentTarget)}e.d({},{T:()=>p});var u={baseUrl:"https://nomoreparties.co/v1/wff-cohort-32",headers:{authorization:"c9636d7b-e039-4f97-bc60-7d3d9bdd6374","Content-Type":"application/json"}},a=document.querySelector("#card-template").content;function i(e,t,n,r,o){console.log(e);var c=a.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__delete-button"),i=c.querySelector(".card__like-button"),l=c.querySelector(".card__image"),s=c.querySelector(".card__like-count");return s.textContent=e.likes.length,l.src=e.link,l.alt=e.name,c.querySelector(".card__title").textContent=e.name,e.owner._id===o?u.addEventListener("click",(function(n){return t(n,e._id)})):u.style.display="none",i.addEventListener("click",(function(t){return n(t,i,e._id,s)})),c.addEventListener("click",(function(){return r(e.link,e.name)})),c}function l(e,t){e.stopPropagation(),function(e){return fetch("".concat(u.baseUrl,"/cards/").concat(e),{headers:u.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}(t).then((function(){e.target.closest(".places__item").remove()})).catch((function(e){console.log("Ошибка в удалении карточки: ".concat(e))}))}function s(e,t,n,r){e.stopPropagation(),t.classList.contains("card__like-button_is-active")?(t.classList.remove("card__like-button_is-active"),function(e){return fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{headers:u.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}(n).then((function(e){r.textContent=e.likes.length})).catch((function(e){console.log("Ошибка в снятии лайка карточке: ".concat(e))}))):(t.classList.add("card__like-button_is-active"),function(e){return fetch("".concat(u.baseUrl,"/cards/likes/").concat(e),{headers:u.headers,method:"PUT"}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))}(n).then((function(e){r.textContent=e.likes.length})).catch((function(e){console.log("Ошибка в добавлении лайка карточке: ".concat(e))})))}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".places__list"),o=document.querySelector(".profile__edit-button"),c=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__image-button"),f=document.querySelector(".popup_type_edit"),_=document.querySelectorAll(".popup__close"),m=f.querySelector(".popup__form"),y=document.querySelector(".popup__input_type_name"),h=document.querySelector(".popup__input_type_description"),v=document.querySelector(".popup__input_type_card-name"),S=document.querySelector(".popup__input_type_url"),b=document.querySelector(".popup_type_new-card"),q=document.querySelector(".popup_type_avatar"),k=q.querySelector(".popup__form"),g=k.querySelector(".popup__input_type_avatar"),E=document.querySelector(".profile__image"),C=b.querySelector(".popup__form"),L=document.querySelector(".popup_type_image"),j=document.querySelector(".popup__image"),x=document.querySelector(".popup__caption"),P=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),O=k.querySelector(".popup__button"),T=m.querySelector(".popup__button"),U=C.querySelector(".popup__button"),w=null;function D(e,t){j.src=e,j.alt=t,x.textContent=t,n(L)}Promise.all([fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e})),fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))]).then((function(t){var n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],u=o[1];w=u._id,c.forEach((function(t){var n=i(t,l,s,D,w);e.append(n)}))})),o.addEventListener("click",(function(){return y.value=P.textContent,h.value=A.textContent,void n(f)})),c.addEventListener("click",(function(){return n(b)})),a.addEventListener("click",(function(){return n(q)})),k.addEventListener("submit",(function(e){var t,n;e.preventDefault(),O.textContent="Сохранение...",(t=g.value,n={avatar:t},fetch("".concat(u.baseUrl,"/users/me/avatar"),{headers:u.headers,method:"PATCH",body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))).then((function(e){E.style.backgroundImage="url(".concat(e.avatar,")"),r(q)})).catch((function(e){console.error("Ошибка редактирования аватара: "+e)})).finally((function(){O.textContent="Сохранить"}))})),m.addEventListener("submit",(function(e){var t,n,o;e.preventDefault(),T.textContent="Сохранение...",(t=y.value,n=h.value,o={name:t,about:n},fetch("".concat(u.baseUrl,"/users/me"),{headers:u.headers,method:"PATCH",body:JSON.stringify(o)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))).then((function(e){P.textContent=e.name,A.textContent=e.about,r(f)})).catch((function(e){console.error("Ошибка редактирования профиля: "+e)})).finally((function(){T.textContent="Сохранить"}))})),_.forEach((function(e){e.addEventListener("click",(function(e){r(document.querySelector(".popup_is-opened"))}))})),C.addEventListener("submit",(function(t){var n,o,c;t.preventDefault(),U.textContent="Сохранение...",(n=v.value,o=S.value,c={name:n,link:o},fetch("".concat(u.baseUrl,"/cards"),{headers:u.headers,method:"POST",body:JSON.stringify(c)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){return e}))).then((function(t){console.log(t);var n=i(t,l,s,D,w);e.prepend(n),r(b)})).catch((function(e){console.log("Ошибка в создании карточки: ".concat(e))})).finally((function(){C.reset(),U.textContent="Сохранить"}))})),function(e){document.querySelectorAll(e.formSelector).forEach((function(n){return function(e,n){var r=e.querySelectorAll(n.inputSelector),o=e.querySelector(n.submitButtonSelector);r.forEach((function(r){return function(e,n,r,o){e.addEventListener("input",(function(){return function(e,n,r,o){n.disabled=!r.checkValidity(),function(e){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity("")}(e),function(e,n,r){e.validity.valid?t(e,n,r):function(e,t,n){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),r.classList.add(n.errorClass),r.textContent=e.validationMessage}(e,n,r)}(e,r,o)}(e,n,r,o)}))}(r,o,e,n)}))}(n,e)}))}(p)}))})();
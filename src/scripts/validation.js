//  @todo: функция добавления валидации
export function  enableValidation(selectors) {
    const formArray = document.querySelectorAll(selectors.formSelector);
    formArray.forEach((form) => formValidation(form, selectors))
}; 

function formValidation(form, selectors) {
    const inputs = form.querySelectorAll(selectors.inputSelector);
    const button = form.querySelector(selectors.submitButtonSelector);
    inputs.forEach((input) => inputValidation(input, button, form, selectors))
};

function inputValidation(input, button, form, selectors) {
    input.addEventListener('input', () => callbackInputValidation(input, button, form, selectors))
};

function callbackInputValidation(input, button, form, selectors) {
    button.disabled = !form.checkValidity();
    enableBrowserError(input);
    enablePatternError(input, form, selectors)  
};

//  @todo: функция отображения встроенной валидации 
function enableBrowserError (input) {
    if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage)
    } 
    else {
        input.setCustomValidity("")
    }
};

//  @todo: функция настроенной валидации 
function enablePatternError(input, form, selectors) {
    if (!input.validity.valid) {
        showValidationMessage(input, form, selectors)
    } 
    else { 
        hideValidationMessage(input, form, selectors)
    }
};

//  @todo: функция отображения текста настроенной валидации
function showValidationMessage(input, form, selectors) {
    const errorText = form.querySelector(`.${input.id}-error`)
    input.classList.add(selectors.inputErrorClass);
    errorText.classList.add(selectors.errorClass)
    errorText.textContent = input.validationMessage;
};

//  @todo: функция скрытия текста настроенной валидации
function hideValidationMessage(input, form, selectors) {
    const errorText = form.querySelector(`.${input.id}-error`);
    input.classList.remove(selectors.inputErrorClass);
    errorText.classList.remove(selectors.errorClass)
    errorText.textContent = "";
};

//  @todo: функция очистки валидации форм
export function clearValidation(form, config) {
    form.querySelectorAll(config.inputSelector).forEach((input) => {
        hideValidationMessage(input, form, config)
        input.value = ""
    });
}
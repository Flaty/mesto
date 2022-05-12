//Отображение ошибки
function showError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup_input-error-border');
  errorElement.classList.add('popup__input-type-error');
  errorElement.textContent = errorMessage;
}
//Скрытие ошибки
function hideError(formElement,inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup_input-error-border');
  errorElement.classList.remove('popup__input-type-error'); 
  errorElement.textContent= '';
}
//Присваивание каждой форме отслеживание
function setEventListener(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-btn')

  toggleButton(inputList, buttonElement)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', ()=> {
      checkInputValidity(formElement, inputElement);
      toggleButton(inputList, buttonElement);
    })
  })
}
//Проверка валидности
function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage)
  }
  else {
    hideError(formElement, inputElement)  
  }
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
      fieldsetList.forEach((fieldset) => {
        setEventListener(fieldset);
      })
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function toggleButton(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-btn_inactive'); 
  }
  else {
    buttonElement.classList.remove('popup__submit-btn_inactive');
  }
}

enableValidation();
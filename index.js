const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const formSubmit = document.querySelector('.form');

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupOpen() {
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popup.classList.add('popup_opened');
}

function popupSbmt(event) {
  event.preventDefault();

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popupClose();
}

profileCloseBtn.addEventListener('click', popupClose)

profileEditBtn.addEventListener('click', popupOpen)

formSubmit.addEventListener('submit', popupSbmt)



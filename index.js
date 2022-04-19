const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const btnPopupSubmit = document.querySelector('.popup__submit-btn');
const btnLikeActive = document.querySelector('.activeheart');
const btnLike = document.querySelectorAll('.element__info-like');
const formev = document.querySelector('.form');

function popupClose() {
  popup.classList.remove('popup__opened');
}

function popupOpen() {
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popup.classList.add('popup__opened');
}

function popupSbmt(Event) {
  Event.preventDefault();

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popup.classList.remove('popup__opened')
}

profileCloseBtn.addEventListener('click', popupClose)

profileEditBtn.addEventListener('click', popupOpen)

formev.addEventListener('submit', popupSbmt)



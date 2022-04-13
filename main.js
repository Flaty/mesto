const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const btnPopupSubmit = document.querySelector('.popup__submit-btn');
const btnLikeActive = document.querySelector('.activeheart');
const btnLike = document.querySelectorAll('.element__info-like')


function popupOpen() {
  popup.classList.add('active');
}

function popupClose() {
  popup.classList.remove('active');
}

profileCloseBtn.addEventListener('click', () => {
  popupClose()
})



profileEditBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popupOpen()

})

btnPopupSubmit.addEventListener('click', function(e) {
  e.preventDefault;
  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popupClose()
})



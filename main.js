const profileEditBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup__bg');
const profileCloseBtn = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__info-name');
const profileDics = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputDisc = document.querySelector('.popup__input_type_prof');
const submit = document.querySelector('.popup__submit-btn');
const formElement = document.querySelectorAll('.popup__input');
const likeActive = document.querySelector('.activeheart');
const likeUnActive = document.querySelectorAll('.element__info-like')


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
  profileInputDisc.value = profileDics.textContent;

  popupOpen()

})

submit.addEventListener('click', function(e) {
  e.preventDefault;
  profileName.textContent = profileInputName.value;
  profileDics.textContent = profileInputDisc.value;

  popupClose()
})



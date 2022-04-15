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

profileCloseBtn.addEventListener('click', () => {
  popup.classList.remove('active');
})

profileEditBtn.addEventListener('click', function(evt) {
  evt.preventDefault();

  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popup.classList.add('active');
})

btnPopupSubmit.addEventListener('click', function(e) {
  e.preventDefault;

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popup.classList.remove('active')
})



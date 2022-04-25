const profileEditBtn = document.querySelector('.profile__edit-btn');
const cardAddBtn = document.querySelector('.profile__add-btn')
const popup = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close');
const popupTemplateCloseBtn = document.querySelector('.popupTemplate__close')
const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const formSubmit = document.querySelector('.popup__form');
const elements = document.querySelector('.elements');
const popupTemplate = document.querySelector('.popupTemplate')
const cardName = document.querySelector('.popupTemplate__input_type_name')
const cardLink = document.querySelector('.popupTemplate__input_type_link')
const formSubmitCard = document.querySelector('.popupTemplate__form')
const btnLike = document.querySelector('.element__info-like')
const elementTemplate = document.querySelector('#elementTemplate').content;
const btnTrashDelete = document.querySelector('.element__trash')
const popupImage = document.querySelector('.popupImage')
const popupImagePic = document.querySelector('.popupImage__image')
const popupImageTitle = document.querySelector('.popupImage__title')
const popupImageClose = document.querySelector('.popupImage__close')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
// Перебор карточек из tempalte
initialCards.forEach(function (card) {
  const elementClone = elementTemplate.querySelector('.element').cloneNode(true);

  elementClone.querySelector('.element__photo').src = card.link;
  elementClone.querySelector('.element__info-name').textContent = card.name;

  elementClone.querySelector('.element__photo').alt = card.name;

  elementClone.querySelector('.element__info-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__info-like_active')
  })

  elementClone.querySelector('.element__trash').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove()
  })  

  elementClone.querySelector('.element__photo').addEventListener('click', function(evt) {
    popupImage.classList.add('popup_opened')

    popupImagePic.src = evt.target.src

    popupImageTitle.textContent = evt.target.alt
  })

  elements.append(elementClone)
});
// Открытие popupTemplate
function popupTemplateOpen() {
  popupTemplate.classList.add('popup_opened')
  const name = document.querySelector('.popupTemplate__input_type_name');
  const link = document.querySelector('.popupTemplate__input_type_link')
  name.value = ''
  link.value = ''
}
// Закрытие popupTemplate
function popupTemplateClose() {
  popupTemplate.classList.remove('popup_opened')
}
// Закрытие popup
function popupClose() {
  popup.classList.remove('popup_opened');
}
function popupImgClose() {
  popupImage.classList.remove('popup_opened')
}
// Открытие popup
function popupOpen() {
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popup.classList.add('popup_opened');
}
function popupImageOpen() {
  popupImage.classList.add('popup_opened')
}
// Submit popup
function popupSbmt(event) {
  event.preventDefault();

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popupClose();
}
// Создание карточек
function popupSbmtCard(event) {
  event.preventDefault();
  const name = document.querySelector('.popupTemplate__input_type_name');
  const link = document.querySelector('.popupTemplate__input_type_link');
  addCardClone(link.value, name.value);
  
  popupTemplateClose();
}
// Создание карточек
function addCardClone(cardLinkValue = 'https://traveltimes.ru/wp-content/uploads/2021/06/shavlinskie-ozera5-Nizhnee.jpg', cardNameValue = 'Алтай') {
  const elementClone = elementTemplate.querySelector('.element').cloneNode(true);

  elementClone.querySelector('.element__photo').src = cardLinkValue;
  elementClone.querySelector('.element__info-name').textContent = cardNameValue;

  elementClone.querySelector('.element__photo').alt = cardNameValue;

  elementClone.querySelector('.element__info-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__info-like_active')
  })

  elementClone.querySelector('.element__trash').addEventListener('click', function(evt) {
    evt.target.closest('.element').remove()
  })
  
  elementClone.querySelector('.element__photo').addEventListener('click', function(evt) {
    popupImage.classList.add('popup_opened')

    popupImagePic.src = evt.target.src
    
    popupImageTitle.textContent = evt.target.alt
  })

  elements.prepend(elementClone);
}

popupImageClose.addEventListener('click', popupImgClose)

popupTemplateCloseBtn.addEventListener('click', popupTemplateClose)

cardAddBtn.addEventListener('click', popupTemplateOpen)

profileCloseBtn.addEventListener('click', popupClose)

profileEditBtn.addEventListener('click', popupOpen)

formSubmit.addEventListener('submit', popupSbmt)

formSubmitCard.addEventListener('submit', popupSbmtCard)


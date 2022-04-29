const profileEditBtn = document.querySelector('.profile__edit-btn');
const cardAddBtn = document.querySelector('.profile__add-btn')
const popupEditProfile = document.querySelector('.popup');
const profileCloseBtn = document.querySelector('.popup__close');
const popupTemplateCloseBtn = document.querySelector('.popupTemplate__close')
const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const formSubmit = document.querySelector('.popup__form');
const cardContainer = document.querySelector('.elements');
const popupTemplate = document.querySelector('.popupTemplate')
const cardName = document.querySelector('.popupTemplate__name')
const cardLink = document.querySelector('.popupTemplate__link')
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

//Функция возвращения карточки
function createCard(name, link) { 
  const element = elementTemplate.querySelector('.element').cloneNode(true)
  const photo = element.querySelector('.element__photo');
  const infoName = element.querySelector('.element__info-name');
  const like = element.querySelector('.element__info-like'); //создается DOM элемент карточки
  const remove = element.querySelector('.element__trash');
  photo.src = link //в карточку вставляются данные и навешиваются обработчики 
  infoName.textContent = name;
  photo.alt = name

  like.addEventListener('click', function(event) {
    event.target.classList.toggle('element__info-like_active')
  })
  remove.addEventListener('click', function(event) {
    event.target.closest('.element').remove()
  })
  photo.addEventListener('click', function(event) {
    
    popupDefaultOpen(popupImage)

    popupImagePic.src = event.target.src

    popupImagePic.alt = event.target.alt

    popupImageTitle.textContent = event.target.alt
  })
  return element; //возвращается созданная карточка 
}

function popupDefaultOpen(popup){
  popup.classList.add('popup_opened')
}

function popupDefaultClose(popup){
  popup.classList.add('popup_opened')
}

//Добавление карточки
function renderCard(container, cardElement) {
  container.prepend(cardElement)
}
//Перебор готовых карточек в контейнер
initialCards.map(function(card) {
  renderCard(cardContainer, createCard(card.name, card.link))
})
// Открытие popupTemplate
function popupTemplateOpen() {
  popupDefaultOpen(popupTemplate)
  document.querySelector('.popupTemplate__form').reset();
}
// Закрытие popupTemplate
function popupTemplateClose() {
  popupTemplate.classList.remove('popup_opened');
}
// Закрытие popup
function popupClose() {
  popupEditProfile.classList.remove('popup_opened');
}
function popupImgClose() {
  popupImage.classList.remove('popup_opened');
}
// Открытие popup
function popupOpen(popup) {
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popupDefaultOpen(popupEditProfile)
}
function popupImageOpen() {
  popupImage.classList.add('popup_opened');
}
// Submit popup
function popupEditProfileSbmt(event) {
  event.preventDefault();

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  //popupClose()
  popupDefaultOpen(popupEditProfile)
}
// Создание карточек
function popupCreateCardSbmt(event) {
  event.preventDefault();
  const name = document.querySelector('.popupTemplate__name');
  const link = document.querySelector('.popupTemplate__link');
  renderCard(cardContainer, createCard(name.value, link.value))
  
  popupTemplateClose();
}
popupImageClose.addEventListener('click', popupImgClose)

popupTemplateCloseBtn.addEventListener('click', popupTemplateClose)

cardAddBtn.addEventListener('click', popupTemplateOpen)

profileCloseBtn.addEventListener('click', popupClose)

profileEditBtn.addEventListener('click', popupOpen)

formSubmit.addEventListener('submit', popupEditProfileSbmt)

formSubmitCard.addEventListener('submit', popupCreateCardSbmt)


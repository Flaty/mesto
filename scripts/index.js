const profileName = document.querySelector('.profile__info-name');
const profileProf = document.querySelector('.profile__info-work');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');

const elementTemplate = document.querySelector('#elementTemplate').content;
const cardContainer = document.querySelector('.elements');

const editFormModalWindow = document.querySelector('.popup');
const editFormModalWindowOpenBtn = document.querySelector('.profile__edit-btn');
const editFormModalWindowCloseBtn = document.querySelector('.popup__close');
const editFormModalWindowSbmtBtn = document.querySelector('.popup__form');

const cardFormModalWindow = document.querySelector('.popupTemplate');
const cardFormModalWindowOpenBtn = document.querySelector('.profile__add-btn');
const cardFormModalWindowCloseBtn = document.querySelector('.popupTemplate__close');
const cardFormModalWindowSbmtBtn = document.querySelector('.popupTemplate__form');

const imageModalWindow = document.querySelector('.popupImage');
const imageModalWindowPic = document.querySelector('.popupImage__image');
const imageModalWindowTitle = document.querySelector('.popupImage__title');
const imageModalWindowCloseBtn = document.querySelector('.popupImage__close');

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

function createCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true)
  const photo = element.querySelector('.element__photo');
  const infoName = element.querySelector('.element__info-name');
  const like = element.querySelector('.element__info-like');
  const remove = element.querySelector('.element__trash');

  photo.src = link;
  infoName.textContent = name;
  photo.alt = name;

  like.addEventListener('click', function(event) {
    event.target.classList.toggle('element__info-like_active');
  })

  remove.addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

  photo.addEventListener('click', function(event) {

    popupOpen(imageModalWindow);

    imageModalWindowPic.src = event.target.src;

    imageModalWindowPic.alt = event.target.alt;

    imageModalWindowTitle.textContent = event.target.alt;
  })

  return element;
}

function popupOpen(popup){
  popup.classList.add('popup_opened');
}

function popupClose(popup){
  popup.classList.remove('popup_opened');
}

function renderCard(container, cardElement) {
  container.prepend(cardElement);
}

initialCards.map(function(card) {
  renderCard(cardContainer, createCard(card.name, card.link));
})

function cardFormModalWindowOpen() {
  popupOpen(cardFormModalWindow)
  document.querySelector('.popupTemplate__form').reset();
}

function editFormModalWindowOpen() {
  profileInputName.value = profileName.textContent;
  profileInputProf.value = profileProf.textContent;

  popupOpen(editFormModalWindow);
}

function editFormModalWindowSbmt(event) {
  event.preventDefault();

  profileName.textContent = profileInputName.value;
  profileProf.textContent = profileInputProf.value;

  popupClose(editFormModalWindow);
}

function cardFormModalWindowSbmt(event) {
  event.preventDefault();
  
  const name = document.querySelector('.popupTemplate__name');
  const link = document.querySelector('.popupTemplate__link');

  renderCard(cardContainer, createCard(name.value, link.value));
  
  popupClose(cardFormModalWindow);
}



cardFormModalWindowCloseBtn.addEventListener('click', () => popupClose(cardFormModalWindow));

cardFormModalWindowOpenBtn.addEventListener('click', cardFormModalWindowOpen);

cardFormModalWindowSbmtBtn.addEventListener('submit', cardFormModalWindowSbmt);

editFormModalWindowCloseBtn.addEventListener('click', () => popupClose(editFormModalWindow));

editFormModalWindowOpenBtn.addEventListener('click', editFormModalWindowOpen);

editFormModalWindowSbmtBtn.addEventListener('submit', editFormModalWindowSbmt);

imageModalWindowCloseBtn.addEventListener('click', () => popupClose(imageModalWindow));

//Закрытие попапов по пустому полю

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    popupClose(cardFormModalWindow);
    popupClose(imageModalWindow);
    popupClose(editFormModalWindow);
  }
})

imageModalWindow.addEventListener('click', (evt) => {
if (!evt.target.closest('.popup__content') && !evt.target.closest('.popup__close')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
   popupClose(imageModalWindow)// то закрываем окно навигации, удаляя активный класс
}
})

editFormModalWindow.addEventListener('click', (evt) => {
  if (!evt.target.closest('.popup__content') && !evt.target.closest('.popup__close')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
     popupClose(editFormModalWindow)// то закрываем окно навигации, удаляя активный класс
  }
});

cardFormModalWindow.addEventListener('click', (evt) => {
  if (!evt.target.closest('.popup__content') && !evt.target.closest('.popup__close')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
     popupClose(cardFormModalWindow)// то закрываем окно навигации, удаляя активный класс
  }
  })



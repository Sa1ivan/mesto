//Общее
const popupCloseBtn = document.querySelectorAll(".popup__close-btn");
const likeBtn = document.querySelectorAll(".place__like-btn");
const allPopups = document.querySelector(".popup");
const places = document.querySelector(".places");
const placeBlock = document.querySelector("#place");
const deleteBtn = document.querySelectorAll(".place__delete-btn");
//Popup_Profile
const popupProfileBtn = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileUserName = document.querySelector(".profile__user-name");
const popupProfileUserInfo = document.querySelector(".profile__user-info");
const popupProfileName = document.querySelector(
  ".popup__input-text_type_user-name"
);
const popupProfileInfo = document.querySelector(
  ".popup__input-text_type_user-info"
);
const popupProfileForm = document.querySelector("#popup-profile-form");

//Popup_Add-Card
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const popupAddCardBtn = document.querySelector(".profile__add-btn");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupAddCardName = document.querySelector(
  ".popup__input-text_type_place-name"
);
const popupAddCardLink = document.querySelector(
  ".popup__input-text_type_place-link"
);
const popupAddCardForm = document.querySelector("#popup-add-form");

//Popup_Picture
const popupPictureBtn = document.querySelector(".popup_type_picture");
const popupPictureHeading = document.querySelector(".popup__heading");
const popupPicture = document.querySelector('.popup__picture');

//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add("popup_active");
}
popupProfileBtn.addEventListener("click", () => {
  openPopup(popupProfile);
  popupProfileName.value = popupProfileUserName.textContent;
  popupProfileInfo.value = popupProfileUserInfo.textContent;
});
popupAddCardBtn.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_active");
}

popupCloseBtn.forEach((element) => {
  element.addEventListener("click", (evt) => {
    closePopup(evt.currentTarget.closest(".popup_active"));
  });
});

//Функция редактирования профиля
function handlerProfileSubmit(evt) {
  popupProfileUserName.textContent = popupProfileName.value;
  popupProfileUserInfo.textContent = popupProfileInfo.value;
  closePopup();
  evt.preventDefault();
}
popupProfileForm.addEventListener("submit", handlerProfileSubmit);

//Popup-Add
function deleteCard(deleteBtn){
  deleteBtn.closest(".place").remove();
}
function enterLike(likeBtn){
  likeBtn.classList.toggle("place__like-btn_active");
}
function openPicture(element){
  popupPicture.src = element.link;
  popupPictureHeading.textContent = element.name;
  openPopup(popupPictureBtn);
}
function createCard(element){
  const cardData = placeBlock.content.querySelector('.place').cloneNode(true);
  const image = cardData.querySelector('.place__image');
  const text = cardData.querySelector('.place__info');
  const likeBtn = cardData.querySelector(".place__like-btn");
  const deleteBtn = cardData.querySelector(".place__delete-btn");
  image.src = element.link;
  text.textContent = element.name;
  image.alt = element.name;
  likeBtn.addEventListener("click", ()=>{
    enterLike(likeBtn);
  });
  deleteBtn.addEventListener('click', ()=>{
    deleteCard(deleteBtn);
  });
  image.addEventListener("click", ()=>{
    openPicture(element);
  });
  return cardData;
}

popupAddCardForm.addEventListener('submit', createCard);

function downloadCard (element){
    const card = createCard(element);
    places.append(card);
}

function createNewCard(evt){
  evt.preventDefault();
  const newCard = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value
  };
  console.log(popupAddCardName.value)
  console.log(newCard.link)
  downloadCard(newCard)
  closePopup(popupAddCard);
}
downloadCard();

// Прогрузка карточек из массива

/* for (let i = 0; i < initialCards.length; i++) {


  placeItem.querySelector(".place__image").src = initialCards[i].link;
  placeItem.querySelector(".place__info").textContent = initialCards[i].name;
  placeItem
    .querySelector(".place__like-btn")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("place__like-btn_active");
    });
  placeItem.querySelector(".place__image").addEventListener("click", (evt) => {
    evt.preventDefault();
    const openPopupImg = document.querySelector(".popup-full-pic");
    const popupImg = document.querySelector('.popup-full-pic__image');
    const popupInfo = document.querySelector('.popup-full-pic__title');
    openPopupImg.classList.add("popup-full-pic_active");
    popupImg.src = evt.target.src;
    popupInfo.textContent = evt.target.parentElement.querySelector(".place__info").textContent;
  });
  places.append(placeItem);
}

// Открытие Модального окна добавления новой карточки
const popupAdd = document.querySelector(".popup-add");
const openPopupAddBtn = document.querySelector(".profile__add-btn");
function openPopupAdd() {
  popupAdd.classList.add("popup-add_active");
}
openPopupAddBtn.addEventListener("click", openPopupAdd);

// Закритие модального окна добавление карточек
const closePopupAddBtn = document.querySelector(".popup-add__close-btn");
function closePopupAdd() {
  popupAdd.classList.remove("popup-add_active");
}
closePopupAddBtn.addEventListener("click", closePopupAdd);

// Добавление новой карточки
let popupAddPlaceName = document.querySelector(
  ".popup-add__input-text_type_place-name"
);
let popupAddPlaceLink = document.querySelector(
  ".popup-add__input-text_type_place-link"
);
const addPlaceBtn = document.querySelector(".popup-add__submit-btn");

function newPlaceItemForm(evt) {
  evt.preventDefault();
  const placeBlock = document.querySelector("#place");
  const places = document.querySelector(".places");
  const newItem = placeBlock.content.querySelector(".place").cloneNode(true);
  newItem.querySelector(".place__info").textContent = popupAddPlaceName.value;
  newItem.querySelector(".place__image").src = popupAddPlaceLink.value;
  newItem.querySelector(".place__like-btn").addEventListener("click", (evt) => {
    evt.target.classList.toggle("place__like-btn_active");
  });
  newItem.querySelector(".place__image").addEventListener("click", (evt) => {
    evt.preventDefault();
    const openPopupImg = document.querySelector(".popup-full-pic");
    openPopupImg.classList.add("popup-full-pic_active");
    const popupImg = document.querySelector('.popup-full-pic__image');
    const popupInfo = document.querySelector('.popup-full-pic__title');
    openPopupImg.classList.add("popup-full-pic_active");
    popupImg.src = evt.target.src;
    popupInfo.textContent = evt.target.parentElement.querySelector(".place__info").textContent;
  });
  places.prepend(newItem);
  closePopupAdd();
  popupAddPlaceName.value = "";
  popupAddPlaceLink.value = "";
}
const popupAddForm = document.querySelector("#popup-add-form");
popupAddForm.addEventListener("submit", newPlaceItemForm);

// Удаление карточек
const places = document.querySelector(".places");
places.addEventListener("click", (evt) => {
  evt.preventDefault();
  const deleteBtn = document.querySelector(".place__delete-btn");
  deleteBtn.addEventListener("click", (evt) => {
    evt.currentTarget.closest(".place").remove();
  });
});

//Закрытие модального окна просмотра картинок
const popupFullPic = document.querySelector('.popup-full-pic');
const closePopupFullPicBtn = document.querySelector(".popup-full-pic__close-btn");
function closePopupFullPic() {
  popupFullPic.classList.remove("popup-full-pic_active");
}
closePopupFullPicBtn.addEventListener("click", closePopupFullPic);
 */

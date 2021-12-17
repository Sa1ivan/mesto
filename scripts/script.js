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
const popupPicture = document.querySelector(".popup__picture");

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
function deleteCard(deleteBtn) {
  deleteBtn.closest(".place").remove();
}
function enterLike(likeBtn) {
  likeBtn.classList.toggle("place__like-btn_active");
}
function openPicture(element) {
  popupPicture.src = element.link;
  popupPictureHeading.textContent = element.name;
  openPopup(popupPictureBtn);
}
function createCard(element) {
  const cardData = placeBlock.content.querySelector(".place").cloneNode(true);
  const image = cardData.querySelector(".place__image");
  const text = cardData.querySelector(".place__info");
  const likeBtn = cardData.querySelector(".place__like-btn");
  const deleteBtn = cardData.querySelector(".place__delete-btn");
  image.src = element.link;
  text.textContent = element.name;
  image.alt = element.name;
  likeBtn.addEventListener("click", () => {
    enterLike(likeBtn);
  });
  deleteBtn.addEventListener("click", () => {
    deleteCard(deleteBtn);
  });
  image.addEventListener("click", () => {
    openPicture(element);
  });
  return cardData;
}

popupAddCardForm.addEventListener("submit", createNewCard);

function downloadCard(element) {
  const card = createCard(element);
  places.append(card);
}
function addNewCard(element) {
  const card = createCard(element);
  places.prepend(card);
}

function createNewCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  };
  addNewCard(newCard);
  closePopup(popupAddCard);
}

initialCards.forEach((element) => {
  downloadCard(element);
});

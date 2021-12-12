const popupOpenBtn = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close-btn");
let userName = document.querySelector(".profile__user-name");
let popupName = document.querySelector(".popup__input-text_type_user-name");
let userInfo = document.querySelector(".profile__user-info");
let popupInfo = document.querySelector(".popup__input-text_type_user-info");
const popupform = document.querySelector("#popup-form");
let popupAddPlaceName = document.querySelector(
  ".popup-add__input-text_type_place-name"
);
let popupAddPlaceLink = document.querySelector(
  ".popup-add__input-text_type_place-link"
);
const openPopupAdd = document.querySelector(".popup-add");
const likeBtn = document.querySelectorAll(".place__like-btn_active");

const popupAddForm = document.querySelector("#popup-add-form");
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


for (let i = 0; i < initialCards.length; i++) {
  const placeBlock = document.querySelector("#place");
  const places = document.querySelector(".places");
  const placeItem = placeBlock.content.querySelector(".place").cloneNode(true);
  placeItem.querySelector(".place__image").src = initialCards[i].link;
  placeItem.querySelector(".place__info").textContent = initialCards[i].name;
  places.append(placeItem);
}

const closePopupAdd = document
  .querySelector(".popup-add__close-btn")
  .addEventListener("click", function () {
    openPopupAdd.classList.remove("popup-add_active");
  });
const addBtn = document
  .querySelector(".profile__add-btn")
  .addEventListener("click", function () {
    openPopupAdd.classList.add("popup-add_active");
    //popupAddForm.addEventListener('submit', evt => {
    //const placeBlock = document.querySelector("#place");
    //  const newPlaceItem = placeBlock.content.cloneNode(true).querySelector('.place');
    //  newPlaceItem. = popupAddPlaceName.value;
    //});
  });

function formSubmitNewPlace(evt) {
  const placeBlock = document.querySelector("#place");
  const newPlaceItem = placeBlock.content.cloneNode(true).querySelector('.place');
  newPlaceItem.document.querySelector('#place-name').textContent = popupAddPlaceName.value;
  newPlaceItem.document.querySelector('#place-link').textContent = popupAddPlaceLink.value;
  addNewPlace();
  closePopupAdd();
  evt.preventDefault();
}

popupAddForm.addEventListener("submit", formSubmitNewPlace);
function addNewPlace(){
  for (let i = 0; i < initialCards.length; i++) {
    const placeBlock = document.querySelector("#place");
    const places = document.querySelector(".places");
    const placeItem = placeBlock.content.querySelector(".place").cloneNode(true);
    placeItem.querySelector(".place__image").src = initialCards[i].link;
    placeItem.querySelector(".place__info").textContent = initialCards[i].name;
    places.append(placeItem);
  }
}



function openPopup() {
  popup.classList.add("popup_active");
  popupName.value = userName.textContent;
  popupInfo.value = userInfo.textContent;
}

function closePopup() {
  popup.classList.remove("popup_active");
}

function formSubmitHandler(evt) {
  userName.textContent = popupName.value;
  userInfo.textContent = popupInfo.value;
  closePopup();
  evt.preventDefault();
}
popupOpenBtn.addEventListener("click", openPopup);
popupCloseBtn.addEventListener("click", closePopup);
popupform.addEventListener("submit", formSubmitHandler);

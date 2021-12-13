//Popup-Edit
const popupOpenBtn = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close-btn");
let userName = document.querySelector(".profile__user-name");
let popupName = document.querySelector(".popup__input-text_type_user-name");
let userInfo = document.querySelector(".profile__user-info");
let popupInfo = document.querySelector(".popup__input-text_type_user-info");
const popupform = document.querySelector("#popup-form");

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

//Popup-Add
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
// Прогрузка карточек из массива
for (let i = 0; i < initialCards.length; i++) {
  const placeBlock = document.querySelector("#place");
  const places = document.querySelector(".places");
  const placeItem = placeBlock.content.querySelector(".place").cloneNode(true);
  placeItem.querySelector(".place__image").src = initialCards[i].link;
  placeItem.querySelector(".place__info").textContent = initialCards[i].name;
  const likeItem = document.querySelectorAll(".place__like-btn");
  const newLikeItem = Array.from(likeItem);
  newLikeItem.forEach((el) => {
    el.addEventListener("click", (evt) => {
      evt.target.classList.toggle("place_like-btn_active");
    });
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
  places.prepend(newItem);
  closePopupAdd();
  popupAddPlaceName.value = "";
  popupAddPlaceLink.value = "";
  const likeItem = document.querySelectorAll(".place__like-btn");
  const newLikeItem = Array.from(likeItem);
  newLikeItem.forEach((el) => {
    el.addEventListener("click", (evt) => {
      evt.target.classList.toggle("place_like-btn_active");
    });
  });
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

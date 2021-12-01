const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
let userName = document.querySelector('.profile__user-name');
let popupName = document.querySelector('.popup__input-text_type_user-name'); 
let userInfo = document.querySelector('.profile__user-info');
let popupInfo = document.querySelector('.popup__input-text_type_user-info');
const popupform = document.querySelector('#popup-form');





function openPopup (){
    popup.classList.add('popup_active');
    popupName.value = userName.textContent;
    popupInfo.value = userInfo.textContent;
}

function closePopup(){
    popup.classList.remove('popup_active');
}



function formSubmitHandler(evt){
    userName.textContent = popupName.value;
    userInfo.textContent = popupInfo.value;
    closePopup();
    evt.preventDefault();
}
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupform.addEventListener('submit', formSubmitHandler);

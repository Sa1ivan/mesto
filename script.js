const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
let userName = document.querySelector('.profile__username');
let popupName = document.querySelector('.popup__username-text'); 
const submitBtn = document.querySelector('.popup__submit-btn');
let userInfo = document.querySelector('.profile__user-info');
let popupInfo = document.querySelector('.popup__text');
const overlay = document.querySelector('.popup__overlay');

popupName.value= 'Жак-Ив Кусто';
popupInfo.value = 'Исследователь океана';


function openPopup (){
    popup.classList.add('popup_active');
    popupName.value;
    popupInfo.value;
}

function closePopup (){
    popup.classList.remove('popup_active');
}


function formSubmitHandler(){
    userName.textContent = popupName.value;
    userInfo.textContent = popupInfo.value;
}
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
submitBtn.addEventListener('click', formSubmitHandler);
submitBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
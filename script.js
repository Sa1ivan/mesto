const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-btn');
const popupUsername = document.querySelector('.profile__username');
const popupUserInfo = document.querySelector('.profile__user-info');
const popupNewText = document.querySelectorAll('.popup__text');
const checkedClickBtn = 1;
const submitBtn = document.querySelector('.popup__submit-btn');





function openPopup (){
    popup.classList.add('popup_active');
}

function closePopup (){
    popup.classList.remove('popup_active');
    checkedClickBtn = 0;
}
popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

function textRename(){
    if (checkedClickBtn === 1){
        popupUsername.textContent.remove('profile__username');
        popupUsername.textContent.add('popapText');
    }
    else{
        popupCloseBtn.addEventListener('click', closePopup);
    }
}
popupUsername.addEventListener('click', textRename);
submitBtn.addEventListener('click', submit);
function submit(){
    popupUsername.textContent.add('popapText');
}
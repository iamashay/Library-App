const popupCloseBut = document.getElementById("popup-close");
const popupOverlay = document.querySelector(".popup-overlay");

function closePopup(){
    popupOverlay.style.display = "none";
}

popupCloseBut.addEventListener('click', closePopup);


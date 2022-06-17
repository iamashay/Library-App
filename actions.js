const popupCloseBut = document.getElementById("popup-close");
const popupOverlay = document.querySelector(".popup-overlay");
const addBookBut = document.querySelector("#add-book-but");
const popupBox = document.querySelector(".popup");
const inputs = document.querySelectorAll(".input-box input");
        


function togglePopup(e){
    let popupOverlayStyle = popupOverlay.style;

    if (popupOverlayStyle.display === "none"){
        popupOverlayStyle.removeProperty("display");
        popupOverlayStyle.animation = "openPopup 0.5s";
    }else {
        popupOverlayStyle.animation = "removePopup 0.5s";
        setTimeout(() => {
            popupOverlayStyle.display = "none";
            popupOverlayStyle.animation = "";    
        }, 500)
    }
}

inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
        if (event.target.value) {
        input.classList.add("is-valid");
        } else {
        input.classList.remove("is-valid");
        }
    });
});


popupCloseBut.addEventListener('click', togglePopup);

addBookBut.addEventListener('click', togglePopup)

popupBox.addEventListener('click', e => e.stopPropagation());

popupOverlay.addEventListener('click', togglePopup);


var modalMessage = document.querySelector(".modal-content");

var modalMessageNameField = modalMessage.querySelector("[name=user-name]");


var modalMessageOpenBtn = document.querySelector(".btn-feedback");

modalMessageOpenBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalMessage.classList.add("modal-content-show");

  modalMessageNameField.focus();
});


var modalMessageCloseBtn = modalMessage.querySelector(".modal-content-close");

modalMessageCloseBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalMessage.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalMessage.classList.contains("modal-content-show")) {
      modalMessage.classList.remove("modal-content-show");
    }
  }
});
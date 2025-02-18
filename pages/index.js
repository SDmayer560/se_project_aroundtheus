import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";

/* VARIABLE DECLARATIONS */

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profilePopup = document.querySelector("#popup-profile");
const addPopup = document.querySelector("#popup-add");
const editButton = document.querySelector("#profile-edit");
const nameField = document.querySelector("#namefield");
const occupationField = document.querySelector("#occupationfield");
const titleField = document.querySelector("#titlefield");
const linkField = document.querySelector("#linkfield");
const cardContainer = document.querySelector("#cardscontainer");
const addButton = document.querySelector("#addbutton");
const personName = document.querySelector("#name");
const occupation = document.querySelector("#occupation");
const editForm = document.forms["editform"];
const addForm = document.forms["addform"];
const popupImage = document.querySelector("#popupImage");
const popupTitle = document.querySelector("#popupTitle");
const popupPicture = document.querySelector("#popupPicture");
const modals = document.querySelectorAll(".popup");

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const editValidator = new FormValidator(settings, editForm)
const addValidator = new FormValidator(settings, addForm)



/* ================================================================================================= */



function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscape);
}

function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscape);
}

function handleEscape(evt) {
  if (evt.key == "Escape") {
    modals.forEach(closePopup);
  }
}

modals.forEach(function (modal) {
  const closeButton = modal.querySelector("#closePopup");
  closeButton.addEventListener("click", () => closePopup(modal));
});

function saveProfileInput() {
  personName.textContent = nameField.value;
  occupation.textContent = occupationField.value;
  closePopup(profilePopup);
}

editButton.addEventListener("click", () => {
  openPopup(profilePopup);
  nameField.value = personName.textContent;
  occupationField.value = occupation.textContent;
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveProfileInput();
});
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardInfo = { name: titleField.value, link: linkField.value };
  cardContainer.prepend(createCard(cardInfo));
  event.target.reset();
  addValidator.toggleButtonState();
  closePopup(addPopup);
});

addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

function createCard(cardInfo) {
  const newCard = new Card(cardInfo, "#cards", openPicture);
  const cardElement = newCard.generateCard()

  return cardElement
}

function openPicture(cardImage, cardText) {

  popupImage.src = cardImage;
  popupImage.alt = cardText;
  popupTitle.textContent = cardText;
  openPopup(popupPicture);
}

modals.forEach(function (modal) {
  modal.addEventListener("click", function (evt) {
    if (evt.target == modal) {
      closePopup(modal);
    }
  });
});

initialCards.forEach(function (data) {
  cardContainer.append(createCard(data));

});

editValidator.enableValidation()
addValidator.enableValidation()
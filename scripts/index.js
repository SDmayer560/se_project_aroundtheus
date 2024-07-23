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
const closeEditPopupButton = document.querySelector("#closeEditPopup");
const closeAddPopupButton = document.querySelector("#closeAddPopup");
const nameField = document.querySelector("#namefield");
const occupationField = document.querySelector("#occupationfield");
const titleField = document.querySelector("#titlefield");
const linkField = document.querySelector("#linkfield");
const card = document.querySelector("#cards");
const cardContainer = document.querySelector("#cardscontainer");
const addButton = document.querySelector("#addbutton");
let personName = document.querySelector("#name");
let occupation = document.querySelector("#occupation");
const editForm = document.querySelector("#editform");
const addForm = document.querySelector("#addform");

function closePopup() {
  profilePopup.classList.remove("popup_opened");
  addPopup.classList.remove("popup_opened");
}

function saveEdit() {
  personName.textContent = nameField.value;
  occupation.textContent = occupationField.value;
  closePopup();
}

editButton.addEventListener("click", () => {
  profilePopup.classList.add("popup_opened");
  nameField.value = personName.textContent;
  occupationField.value = occupation.textContent;
});

closeEditPopupButton.addEventListener("click", closePopup);
closeAddPopupButton.addEventListener("click", closePopup);

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveEdit();
});

addButton.addEventListener("click", () => {
  addPopup.classList.add("popup_opened");
});

function createCard(cardData) {
  const cardTemplate = card.content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector("#cardName");
  const cardImage = cardElement.querySelector("#cardImage");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardName.textContent = cardData.name;
  return cardElement;
}

function addCard(cardElement) {
  cardContainer.append(cardElement);
}

initialCards.forEach(function (card) {
  const cardElement = createCard(card);
  addCard(cardElement);
});

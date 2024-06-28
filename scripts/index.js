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

const profilePopup = document.querySelector("#popup");
const editButton = document.querySelector("#profile-edit");
const closePopupButton = document.querySelector("#closePopup");
const nameField = document.querySelector("#namefield");
const occupationField = document.querySelector("#occupationfield");
const card = document.querySelector("#cards");
const cardContainer = document.querySelector("#cardscontainer");
const addButton = document.querySelector("#addbutton");
let personName = document.querySelector("#name");
let occupation = document.querySelector("#occupation");
const editForm = document.querySelector("#editform");

function closePopup() {
  profilePopup.classList.remove("popup_opened");
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

closePopupButton.addEventListener("click", closePopup);

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveEdit();
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

for (let i = 0; i <= initialCards.length - 1; i++) {
  const cardElement = createCard(initialCards[i]);
  addCard(cardElement);
}

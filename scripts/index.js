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

const popupOpen = document.querySelector("#popup");
const editButton = document.querySelector("#profile-edit");
const closePopupButton = document.querySelector("#closePopup");
const editSave = document.querySelector("#editsave");
const nameField = document.querySelector("#namefield");
const occupationField = document.querySelector("#occupationfield");
const card = document.querySelector("#cards");
const cardContainer = document.querySelector("#cardscontainer");
const addButton = document.querySelector("#addbutton");

function closePopup() {
  popupOpen.classList.add("popup-closed");
}

editButton.addEventListener("click", () => {
  popupOpen.classList.remove("popup-closed");
  let personName = document.querySelector("#name");
  let occupation = document.querySelector("#occupation");
  nameField.value = personName.textContent;
  occupationField.value = occupation.textContent;
});

closePopupButton.addEventListener("click", () => {
  closePopup();
});

editSave.addEventListener("click", () => {
  personName.textContent = nameField.value;
  occupation.textContent = occupationField.value;
  closePopup();
});

function createCard(n) {
  cardTemplate = card.content;
  cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector("#cardName");
  const cardImage = cardElement.querySelector("#cardImage");
  cardImage.src = initialCards[n].link;
  cardImage.alt = initialCards[n].name;
  cardName.textContent = initialCards[n].name;
}

function addCard() {
  cardContainer.append(cardElement);
}

for (let i = 0; i <= initialCards.length - 1; i++) {
  createCard(i);
  addCard();
}

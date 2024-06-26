let initialCards = [
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

let popupopen = document.querySelector("#popup");
let editbutton = document.querySelector("#profile-edit");
let closepopup = document.querySelector("#closePopup");
let editsave = document.querySelector("#editsave");
let namefield = document.querySelector("#namefield");
let occupationfield = document.querySelector("#occupationfield");
let personname = document.querySelector("#name");
let occupation = document.querySelector("#occupation");
let card = document.querySelector("#cards");

let cardContainer = document.querySelector("#cardscontainer");
let addButton = document.querySelector("#addbutton");
i = 0;

editbutton.addEventListener("click", () => {
  popupopen.classList.remove("popup-closed");
  let personname = document.querySelector("#name");
  let occupation = document.querySelector("#occupation");
  namefield.value = personname.textContent;
  occupationfield.value = occupation.textContent;
});

closepopup.addEventListener("click", () => {
  popupopen.classList.add("popup-closed");
});

editsave.addEventListener("click", () => {
  personname.textContent = namefield.value;
  occupation.textContent = occupationfield.value;
  popupopen.classList.add("popup-closed");
});

function addCard(n) {
  n -= 1;
  cardTemplate = card.content;
  cardElement = cardTemplate.cloneNode(true);
  let cardName = cardElement.querySelector("#cardName");
  let cardImage = cardElement.querySelector("#cardImage");
  cardImage.src = initialCards[n].link;
  cardImage.alt = initialCards[n].name;
  cardName.textContent = initialCards[n].name;
  cardContainer.append(cardElement);
}

addCard(1);
addCard(2);
addCard(3);
addCard(4);
addCard(5);
addCard(6);

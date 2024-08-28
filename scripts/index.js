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

/* VARIABLE DECLARATIONS */

const profilePopup = document.querySelector("#popup-profile");
const addPopup = document.querySelector("#popup-add");
const editButton = document.querySelector("#profile-edit");
const nameField = document.querySelector("#namefield");
const occupationField = document.querySelector("#occupationfield");
const titleField = document.querySelector("#titlefield");
const linkField = document.querySelector("#linkfield");
const card = document.querySelector("#cards");
const cardContainer = document.querySelector("#cardscontainer");
const addButton = document.querySelector("#addbutton");
const personName = document.querySelector("#name");
const occupation = document.querySelector("#occupation");
const editForm = document.querySelector("#editform");
const addForm = document.querySelector("#addform");
const popupImage = document.querySelector("#popupImage");
const popupTitle = document.querySelector("#popupTitle");
const popupPicture = document.querySelector("#popupPicture");
const modals = document.querySelectorAll(".popup");
const inputFields = document.querySelectorAll(".popup__field");
const submitButtons = document.querySelectorAll(".popup__button");
const profileSubmit = document.querySelector("#profile-submit");
const addSubmit = document.querySelector("#add-submit");

/* ================================================================================================= */

function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupEsc);
}

function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", popupEsc);
}

function popupEsc(evt) {
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
  const cardElement = createCard(cardInfo);
  cardContainer.prepend(cardElement);
  event.target.reset();
  closePopup(addPopup);
});

addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

function toggleLike(likeButton) {
  likeButton.classList.toggle("locations__grid-item-heart_liked");
}

function removeCard(deleteButton) {
  const cardTarget = deleteButton.closest(".locations__grid-item");
  cardTarget.remove();
}

function openPicture(cardImage, cardName) {
  popupImage.src = cardImage.src;
  popupImage.alt = cardImage.alt;
  popupTitle.textContent = cardName.textContent;
  openPopup(popupPicture);
}

function createCard(cardData) {
  const cardTemplate = card.content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector("#cardName");
  const cardImage = cardElement.querySelector("#cardImage");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardName.textContent = cardData.name;
  const likeButton = cardElement.querySelector("#likeButton");
  const deleteButton = cardElement.querySelector("#delete");

  likeButton.addEventListener("click", () => toggleLike(likeButton));
  deleteButton.addEventListener("click", () => removeCard(deleteButton));
  cardImage.addEventListener("click", () => openPicture(cardImage, cardName));

  return cardElement;
}

initialCards.forEach(function (card) {
  const cardElement = createCard(card);
  cardContainer.append(cardElement);
});

modals.forEach(function (modal) {
  modal.addEventListener("click", function (evt) {
    if (evt.target == modal) {
      closePopup(modal);
    }
  });
});

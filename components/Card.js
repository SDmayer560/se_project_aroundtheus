export const initialCards = [
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

  export class Card {
        constructor(data, cardSelector, handleImageClick) {
          this._text = data.name;
          this._image = data.link;
          this._cardSelector = cardSelector;
          this._handleImageClick = handleImageClick
        }
  
        _getTemplate() {
          const cardElement = document
          .querySelector(this._cardSelector)
          .content
            .querySelector("#cardArticle")
            .cloneNode(true);
          return cardElement;
        }
      
        generateCard() {
          this._element = this._getTemplate();

          this._element.querySelector("#cardImage").src = this._image;
          this._element.querySelector("#cardName").textContent = this._text;
          this._setEventListeners();
      
          return this._element;
        }
      
        _setEventListeners() {
          this._element.querySelector("#likeButton").addEventListener("click", () => {
            this._handleLikeClick();
          });
          this._element.querySelector("#delete").addEventListener("click", () => {
            this._handleDeleteClick();
          });
          this._element.addEventListener('click', () => {
            this._handleImageClick(this);
          });
        }

        _handleLikeClick() {
            this._element.querySelector("#likeButton").classList.toggle("locations__grid-item-heart_liked")
        }

        _handleDeleteClick() {
            this._element.remove();
        }
    }
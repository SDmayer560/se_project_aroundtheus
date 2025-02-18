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
          this._element.querySelector("#cardImage").alt = this._text;
          
          this._likeButton = this._element.querySelector("#likeButton")
          this._deleteButton = this._element.querySelector("#delete")
          this._cardImage = this._element.querySelector("#cardImage")

          this._setEventListeners();
      
          return this._element;
        }
      
        _setEventListeners() {
          this._likeButton.addEventListener("click", () => {
            this._handleLikeClick();
          });
          this._deleteButton.addEventListener("click", () => {
            this._handleDeleteClick();
          });
          this._cardImage.addEventListener('click', () => {
            this._handleImageClick(this._image, this._text);
          });
        }

        _handleLikeClick() {
          this._likeButton.classList.toggle("locations__grid-item-heart_liked")
        }

        _handleDeleteClick() {
            this._element.remove();
        }
    }
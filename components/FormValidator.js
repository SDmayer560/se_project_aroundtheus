export class FormValidator {
    constructor(settings, formElement) {
      this._formElement = formElement

        this._inputSelector = settings.inputSelector
        this._submitButtonSelector = settings.submitButtonSelector
        this._inactiveButtonClass = settings.inactiveButtonClass
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass
    }

    enableValidation() {
        this._formElement.addEventListener("submit", function (evt) {
          evt.preventDefault();
        });
        this._setEventListeners();
      };  

      _setEventListeners() {
        this._inputList = this._formElement.querySelectorAll(this._inputSelector);
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this.toggleButtonState();
        this._inputList.forEach((_inputElement) => {
          _inputElement.addEventListener("input", () => {
            this._checkInputValidity(_inputElement);
            this.toggleButtonState();
          });
        });
      }

      toggleButtonState() {
        if (!this._formElement.checkValidity()) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      };

      _checkInputValidity(_inputElement) {
        if (!_inputElement.validity.valid) {
          this._showInputError(
            _inputElement.validationMessage,
            _inputElement
          );
        } else {
          this._hideInputError(_inputElement);
        }
      };

      _hideInputError(_inputElement) {
        this._errorElement = this._formElement.querySelector(`#${_inputElement.id}-error`);
        _inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = " ";
      };

      _showInputError(_inputElementError, _inputElement) {
        this._errorElement = this._formElement.querySelector(`#${_inputElement.id}-error`);
        _inputElement.classList.add(this._inputErrorClass);
        this._errorElement.textContent = _inputElementError;
        this._errorElement.classList.add(this._errorClass);
      };
}
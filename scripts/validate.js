const showInputError = (formElement, inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = "\\";
};

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      options
    );
  } else {
    hideInputError(formElement, inputElement, options);
  }
};

const hasInvalidInput = (inputList) => {
  debugger;
  inputList.forEach((inputElement) => {
    if ((inputElement.validity.valid = false)) {
      return false;
    }
  });
};

const toggleButtonState = (inputElement, buttonElement, options) => {
  if (!inputElement.validity.valid) {
    buttonElement.classList.add(options.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, options) => {
  const inputList = formElement.querySelectorAll(options.inputSelector);
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  inputList.forEach((inputElement) => {
    toggleButtonState(inputElement, buttonElement, options);
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputElement, buttonElement, options);
    });
  });
};

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, options);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: ".popup__input_type_error",
  errorClass: "popup__input-error_active",
});

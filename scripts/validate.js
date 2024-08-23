function setValidityListeners(inputFields) {
  inputFields.forEach((inputElement) => {
    if (inputElement == nameField || inputElement == occupationField) {
      inputElement.addEventListener("input", function () {
        testEditValidity();
      });
    } else {
      inputElement.addEventListener("input", function () {
        testAddValidity();
      });
    }
  });
}

function enablebuttons() {
  submitButtons.forEach((submitButton) => {
    submitButton.classList.remove("popup__button-disabled");
    submitButton.disabled = false;
  });
}

function testAddValidity() {
  if (!titleField.validity.valid || !linkField.validity.valid) {
    addSubmit.classList.add("popup__button-disabled");
    addSubmit.disabled = true;
  } else {
    enablebuttons();
  }
}

function testEditValidity() {
  if (!nameField.validity.valid || !occupationField.validity.valid) {
    profileSubmit.classList.add("popup__button-disabled");
    profileSubmit.disabled = true;
  } else {
    enablebuttons();
  }
}

setValidityListeners(inputFields);

const textError = {
  state: false,
  ui: `<span id="errorMessage">Please provide a valid email address</span>`,
  getState: function () {
    return this.state;
  },
  setState: function (state) {
    this.state = state;
  },
};

const removeTextHelper = () => {
  if (textError.getState()) {
    errorMessage.remove();
    textError.setState(false);
  }
};

const addTextHelper = () => {
  if (!textError.getState()) {
    email.style.outlineColor = "var(--light-red)";
    email.insertAdjacentHTML("afterend", textError.ui);
    textError.setState(true);
  }
};

const isEmailValid = () => {
  const pattern = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
  if (!email.value) return false;
  return pattern.test(email.value);
};

const validateInput = () => {
  if (!isEmailValid()) {
    console.log("error");
    email.classList.add("error");
    addTextHelper();
  } else {
    console.log("True");
    email.style.outlineColor = "green";
    email.classList.remove("error");
    removeTextHelper();
  }
};

email.addEventListener("click", () => {
  email.style.outlineColor = "var(--gray)";
  if (!isEmailValid()) {
    removeTextHelper();
    email.classList.remove("error");
  }
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validateInput();
});

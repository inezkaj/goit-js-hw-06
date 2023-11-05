const blurInput = document.querySelector("#validation-input");

blurInput.addEventListener("blur", (event) => {
  blurInput.classList.remove("valid");
  blurInput.classList.remove("invalid");

  if (blurInput.value.length == blurInput.dataset.length) {
    blurInput.classList.add("valid");
  } else {
    blurInput.classList.add("invalid");
  }
});

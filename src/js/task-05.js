const defaultName = `Anonymous`;
document.querySelector("#name-input").addEventListener("input", (event) => {
  console.log(event.target.value);
  document.querySelector("#name-output").textContent =
    event.target.value || defaultName;
});

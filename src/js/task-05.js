const defaultName = `Anonymous`;
const nameInp = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameInp.addEventListener("input", (event) => {
  console.log(event.target.value);
  nameOut.textContent = event.target.value || defaultName;
});

const sizeInput = document.querySelector("#font-size-control");

sizeInput.addEventListener("input", (event) => {
  document.querySelector("span#text").style.fontSize = `${sizeInput.value}px`;
});

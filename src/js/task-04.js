let counterValue = 0;
document
  .querySelector('#counter button[data-action="decrement"]')
  .addEventListener("click", (event) => {
    counterValue -= 1;
    document.querySelector(`#value`).textContent = counterValue;
  });
document
  .querySelector('#counter button[data-action="increment"]')
  .addEventListener("click", (event) => {
    counterValue += 1;
    document.querySelector(`#value`).textContent = counterValue;
  });

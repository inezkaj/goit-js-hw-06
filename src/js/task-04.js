let counterValue = 0;
const valueUse = document.querySelector(`#value`);
const decrBut = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrBut = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrBut.addEventListener("click", (event) => {
  counterValue -= 1;
  valueUse.textContent = counterValue;
});

incrBut.addEventListener("click", (event) => {
  counterValue += 1;
  valueUse.textContent = counterValue;
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
let vegeList = [];

ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  vegeList.push(li);
});

list.append(...vegeList);
console.log(vegeList);

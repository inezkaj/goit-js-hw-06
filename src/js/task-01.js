const categories = document.querySelectorAll("#categories li.item");
console.log(`Number of categories:` + categories.length);

categories.forEach((category) => {
  const name = category.querySelector("h2").innerText;
  const items = category.querySelectorAll("li");
  console.log(`Category: ${name}`);
  console.log(`Elements: ${items.length}`);
});

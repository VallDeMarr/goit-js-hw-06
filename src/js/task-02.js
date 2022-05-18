const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const element = document.querySelector(`#ingredients`)

const test = ingredients.map((ingredient) => {
  let el = document.createElement("li");
      el.textContent = ingredient;
  el.classList.add('item');
  return el
});
element.append(...test);

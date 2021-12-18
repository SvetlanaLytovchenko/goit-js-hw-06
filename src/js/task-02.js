const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const newOne = ingredients.map((element) => {
  const newEl = document.createElement(`li`);
  newEl.textContent = `${element}`;
  newEl.classList.add("item");
  return newEl;
});

list.append(...newOne);

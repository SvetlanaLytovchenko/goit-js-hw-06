const itemEl = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  const getTitle = element.querySelector(`h2`);

  const getContent = element.querySelectorAll(`li`);
  console.log(`Category: ${getTitle.textContent}`);
  console.log(`Elements: ${getContent.length}`);
});

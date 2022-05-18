const allItems = document.querySelectorAll(".item");

function counterLength(callbeck) {
  console.log(`Number of categories: ${callbeck.length}`);
  for (let i = 0; i < callbeck.length; i++) {
    console.log(`Category: ${callbeck[i].firstElementChild.textContent}`);
    console.log(`Elements: ${callbeck[i].lastElementChild.children.length}`);
  }
  return "Готово ;)";
}
console.log(counterLength(allItems));

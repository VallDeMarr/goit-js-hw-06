const allItems = document.querySelectorAll(".item");

function counterLength(callbeck) {
    console.log(`Number of categories: ${callbeck.length}`);
  for (let i = 0; i < callbeck.length; i++) {
    console.log(`Category: ${callbeck[i].firstElementChild.textContent}`);
    console.log(`Elements: ${callbeck[i].lastElementChild.children.length}`);
    }
    return 'Готово ;)'
}
console.log(counterLength(allItems));

// const allItems = document.querySelectorAll(".item");
// const test = document.querySelectorAll("h2");

// function counterLength(callbeck ) {
//   for (let i = 0; i < allItems.length; i++) {
//     return allItems[callbeck].querySelectorAll("li").length;
//   }
// }
// function counter(callbeck) {
//   for (let i = 0; i < test.length; i++) {
//       return test[callbeck].textContent;
//   }
// }
// console.log(`Number of categories: ${allItems.length}`);         // Перший виклик
// console.log(`Category: ${counter(0)}`);                          // Другий виклик
// console.log(`Elements: ${counterLength(0)}`);                    // Третій виклик

// console.log(`Category: ${counter(1)}`);                          // Другий виклик
// console.log(`Elements: ${counterLength(1)}`);                    // Третій виклик

// console.log(`Category: ${counter(2)}`);                          // Другий виклик
// console.log(`Elements: ${counterLength(2)}`);                    // Третій виклик

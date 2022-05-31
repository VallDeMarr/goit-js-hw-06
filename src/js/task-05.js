// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у
// спані повинен відображатися рядок "Anonymous".
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");


inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === '') {
    console.log('yes')
    outputRef.textContent = "Anonymous";
    return
  } 
  outputRef.textContent = event.currentTarget.value;
  // console.log(event);
  // console.log(event.currentTarget);
  // console.log(event.currentTarget.value);
});
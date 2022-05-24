const test = document.querySelector("#validation-input");
let inputLength = Number(test.dataset.length);
// console.log(inputLength);
// console.log(test.addEventListener("input", onInput));


test.addEventListener("blur", (event) => {
       const toTest = event.currentTarget.value;
    if (toTest.length === inputLength) {
        changes('valid', 'invalid')
      console.log("yes");
    } else {
        changes("invalid",  "valid");
      console.log("no");
    }
 });
  

function changes(addClass, removeClass) {
    test.classList.add(addClass)
    test.classList.remove(removeClass);
 
}

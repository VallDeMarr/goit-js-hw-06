const counter = {
  value: 0,
  increment() {
    return (this.value += 1);
  },
  decrement() {
    return (this.value -= 1);
  },
};

const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector("#value");

incrBtn.addEventListener("click", () => {
  counter.increment();
  valueRef.textContent = counter.value;
});

decrBtn.addEventListener("click", () => {
  counter.decrement();
  valueRef.textContent = counter.value;
});

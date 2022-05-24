const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
  }
  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(`${result.email} - ${result.password}`);
  event.currentTarget.reset();
}

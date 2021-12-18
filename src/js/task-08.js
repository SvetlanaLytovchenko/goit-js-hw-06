const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSbmit);
function onFormSbmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("All fields must be complited!");
  } else {
    formRef.reset();
    console.log(formData);
  }
}

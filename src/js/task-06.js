const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
inputRef.addEventListener("blur", onInputBlur);

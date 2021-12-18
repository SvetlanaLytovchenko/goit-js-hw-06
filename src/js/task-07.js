const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
function onInputRangeValue(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}
inputRef.addEventListener("input", onInputRangeValue);

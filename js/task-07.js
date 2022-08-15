const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
const sizeChange = () => {
    span.style.fontSize = `${input.valueAsNumber}px`
}
input.addEventListener("input", sizeChange ) 
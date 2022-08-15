const inputText = document.querySelector("#validation-input");
const textValidator = () => {
    inputText.classList.remove("valid")
    inputText.classList.remove("invalid")
    if (inputText.value.length == inputText.dataset.length) {
        inputText.classList.add("valid")

    }
    else {
        inputText.classList.add("invalid")
    }
}
inputText.addEventListener("blur", textValidator);
console.log(inputText.value)
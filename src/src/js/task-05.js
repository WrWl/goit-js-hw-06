const inputText = document.querySelector("#name-input")
const outputText = document.querySelector("#name-output")
const startText = "Anonymous"

const textEnter = () => {
    if (inputText.value.length > 0) {
        outputText.textContent = inputText.value
    }
    else {
        outputText.textContent = startText
    }
}
inputText.addEventListener("input", textEnter);

    


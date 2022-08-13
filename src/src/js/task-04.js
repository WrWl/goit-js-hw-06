const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counter = document.querySelector("#value")
let counterValue = 0;
let plus = () => {
    counter.textContent = counterValue += 1;
}
let minus = () => {
    counter.textContent = counterValue -= 1
}

decrement.addEventListener("click", minus);
increment.addEventListener("click", plus);
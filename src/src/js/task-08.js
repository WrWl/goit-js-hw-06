const form = document.querySelector(".login-form");


const formCheck = () => {
    event.preventDefault();
    if (form.email.value == "" || form.password.value == "") {
        alert("Заполните все поля");
    }
    else {
        let formData = {
            email: form.email.value,
            password: form.password.value
        }
        console.log(formData)
        form.reset()
    

    }
}
    form.addEventListener("submit", formCheck)
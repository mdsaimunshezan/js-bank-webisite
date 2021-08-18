const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
const userButton = document.getElementById("user-btn");


userButton.addEventListener("click", function () {
    if (userEmail.value == "saimunshezan@gmail.com" && userPassword.value == "123") {
        window.location.href = "bank.html"
    } else {
        alert("invlade email or password");
    }
})


const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitButton");
const passwordBox = document.getElementById("password");
const confirmPasswordBox = document.getElementById("confirmPassword");

submitButton.addEventListener("click", function() {
    if (form.reportValidity()) {
        if(passwordBox.textContent == confirmPasswordBox.textContent)
        form.submit();
    } else {
        passwordBox.style.borderColor = "red";
        confirmPasswordBox.style.borderColor = "red";
    }
});

submitButton.addEventListener("mouseenter", function() {
    submitButton.style.height = "3.8rem";
    submitButton.style.width = "16.3rem";

});

submitButton.addEventListener("mouseleave", function() {
    submitButton.style.height = "3.5rem";
    submitButton.style.width = "16rem";
});
const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitButton");
const passwordBox = document.getElementById("password");
const confirmPasswordBox = document.getElementById("confirmPassword");
const emailBox = document.getElementById("email");
const firstNameBox = document.getElementById("firstName");
const lastNameBox = document.getElementById("lastName");
const telephoneBox = document.getElementById("phoneNum");

submitButton.addEventListener("click", function() {
    if (form.reportValidity()) {
            form.submit();
    }

    if(passwordBox.textContent != confirmPasswordBox.textContent || !passwordBox.validity.valid || !confirmPasswordBox.validity.valid ) {
        passwordBox.style.borderColor = "red";
        confirmPasswordBox.style.borderColor = "red";
    } else {
        passwordBox.style.borderColor = "green";
        confirmPasswordBox.style.borderColor = "green";
    }

    if(!emailBox.validity.valid) {
        emailBox.style.borderColor = "red";
        emailBox.style.borderColor = "red";
    } else {
        emailBox.style.borderColor = "green";
        emailBox.style.borderColor = "green";
    }

    if(!firstNameBox.validity.valid) {
        firstNameBox.style.borderColor = "red";
        firstNameBox.style.borderColor = "red";
    } else {
        firstNameBox.style.borderColor = "green";
        firstNameBox.style.borderColor = "green";
    }

    if(!lastNameBox.validity.valid) {
        lastNameBox.style.borderColor = "red";
        lastNameBox.style.borderColor = "red";
    } else {
        lastNameBox.style.borderColor = "green";
        lastNameBox.style.borderColor = "green";
    }


    if(!telephoneBox.validity.valid) {
        telephoneBox.style.borderColor = "red";
        telephoneBox.style.borderColor = "red";
    } else {
        telephoneBox.style.borderColor = "green";
        telephoneBox.style.borderColor = "green";
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
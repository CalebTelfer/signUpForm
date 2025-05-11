const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
    if (form.checkValidity()) {
        form.submit();
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
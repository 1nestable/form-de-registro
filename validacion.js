function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    successAlert.textContent = successAlert.classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    errorAlert.textContent = errorAlert.classList.add("show");
}
document.getElementById("regBtn").addEventListener("click", function() {
const password1 = document.getElementById("password1").value.trim();
const password2 = document.getElementById("password2").value.trim();


if (password1 === password2 && password1.length >= 6) {
    showAlertSuccess();
} else {
    showAlertError();
}
});
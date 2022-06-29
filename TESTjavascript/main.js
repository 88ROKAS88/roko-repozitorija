// #### FIRST TASK ####
const showAlertButton = document.getElementById("show-alert-button");
showAlertButton.addEventListener("click", (e) => {
  alert("Hello World!");
});
// #### SECOND TASK ####
const upperCaseInput = document.querySelector("#upper-case-input");
const allToUpperCaseButton = document.getElementById(
  "all-to-upper-case-button"
);
const allToLowerCaseButton = document.getElementById(
  "all-to-lover-case-button"
);
const firstToUpperCaseButton = document.getElementById(
  "first-to-upper-case-button"
);
const firstToLowerCaseButton = document.getElementById(
  "first-to-lower-case-button"
);
allToUpperCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value = upperCaseInput.value.toUpperCase();
  }
});
allToLowerCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value = upperCaseInput.value.toLowerCase();
  }
});
firstToUpperCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value =
      upperCaseInput.value[0].toUpperCase() + upperCaseInput.value.slice(1);
  }
});
firstToLowerCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value =
      upperCaseInput.value[0].toLowerCase() + upperCaseInput.value.slice(1);
  }
});
// #### THIRD TASK ####
const sendForm = document.getElementById("send-form");
const emailImput = document.getElementById("email-imput");
const phoneNumber = document.getElementById("phone-number");
const imputInvalid1 = document.querySelectorAll(".invalid-feedback")[0];
const imputInvalid2 = document.querySelectorAll(".invalid-feedback")[1];
const imputValid1 = document.querySelectorAll(".valid-feedback")[0];
const imputValid2 = document.querySelectorAll(".valid-feedback")[1];

function checkFormValue(imput, valid, invalid) {
  if (imput.value) {
    valid.style.display = "block";
    invalid.style.display = "none";
  } else {
    invalid.style.display = "block";
    valid.style.display = "none";
  }
}
sendForm.addEventListener("click", function () {
  checkFormValue(emailImput, imputValid1, imputInvalid1);
  checkFormValue(phoneNumber, imputValid2, imputInvalid2);
});

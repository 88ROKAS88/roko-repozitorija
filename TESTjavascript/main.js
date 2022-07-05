// just some counters
let firstCounter = 0;
let secondCounter = 0;
let thirdCounter = 0;
let fourthCounter = 0;
let fifthCounter = 0;
// #### FIRST TASK ####
const showAlertButton = document.getElementById("show-alert-button");
showAlertButton.addEventListener("click", (e) => {
  alert("Hello World!");
  firstCounter++;
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
    secondCounter++;
  }
});
allToLowerCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value = upperCaseInput.value.toLowerCase();
    secondCounter++;
  }
});
firstToUpperCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value =
      upperCaseInput.value[0].toUpperCase() + upperCaseInput.value.slice(1);
    secondCounter++;
  }
});
firstToLowerCaseButton.addEventListener("click", function (e) {
  if (upperCaseInput.value) {
    upperCaseInput.value =
      upperCaseInput.value[0].toLowerCase() + upperCaseInput.value.slice(1);
    secondCounter++;
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

function showError(imput, valid, invalid) {
  if (imput.value) {
    valid.style.display = "block";
    invalid.style.display = "none";
    imput.classList.remove("is-invalid");
  } else {
    invalid.style.display = "block";
    valid.style.display = "none";
    imput.classList.add("is-invalid");
  }
}
sendForm.addEventListener("click", function () {
  //email validation

  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  if (emailImput.value.match(/\S+@\S+\.\S+/)) {
    showError(emailImput, imputValid1, imputInvalid1);
  } else {
    emailImput.value = null;
    showError(emailImput, imputValid1, imputInvalid1);
  }

  //phone number validation

  if (phoneNumber.value > 860000000 && phoneNumber.value < 869999999) {
    showError(phoneNumber, imputValid2, imputInvalid2);
  } else {
    phoneNumber.value = null;
    showError(phoneNumber, imputValid2, imputInvalid2);
  }

  thirdCounter++;
});

// #### FOURTH TASK ####
const blockButton = document.getElementById("block-button");
const blockImputUnblock = document.getElementById("block-imput-unblock");
const unblockButton = document.getElementById("unblock-button");

blockButton.addEventListener("click", function () {
  blockImputUnblock.disabled = true;
  fourthCounter++;
});
unblockButton.addEventListener("click", function () {
  blockImputUnblock.disabled = false;
  fourthCounter++;
});
// #### FIFTH TASK is made with pure CSS ####

// #### SIXTH TASK ####
const experimentalText = document.querySelector("#experimental-text");
const resetAllButton = document.querySelector("#reset-all-button");
//https://stackoverflow.com/questions/7459704/in-javascript-what-is-the-best-way-to-convert-a-nodelist-to-an-array
const redButtons = [...document.querySelectorAll(".red-button")];

const propertyArray = [
  "pointer",
  "text",
  "copy",
  "foo",
  "help",
  "crosshair",
  "red",
  "green",
  "blue",
  "red",
  "green",
  "blue",
];
console.log(redButtons);
for (let i in redButtons) {
  if (i < 6) {
    redButtons[i].addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.cursor = propertyArray[i];
      fifthCounter++;
    });
  } else if (i < 9) {
    redButtons[i].addEventListener("click", function (e) {
      e.preventDefault();
      experimentalText.style.color = propertyArray[i];
      fifthCounter++;
    });
  } else if (i < 12) {
    redButtons[i].addEventListener("click", function (e) {
      e.preventDefault();
      experimentalText.style.borderColor = propertyArray[i];
      fifthCounter++;
    });
  }
}
resetAllButton.addEventListener("click", (e) => {
  document.body.style.cursor = "auto";
  experimentalText.style.color = "black";
  experimentalText.style.borderColor = "#dee2e6";
  fifthCounter++;
});
// #### SEVENTH TASK ####
let statistics = `Number of times pressed on buttons: <br>
1st task: ${firstCounter}
2nd task: ${secondCounter}`;

const statisticsElement = document.getElementById("statistics");
document.getElementById("modal").addEventListener("click", () => {
  statisticsElement.innerHTML = `Number of times pressed on buttons: <br/>
  1st task: ${firstCounter} <br/>
  2nd task: ${secondCounter} <br/>
  3rd task: ${thirdCounter} <br/>
  4th task: ${fourthCounter} <br/>
  6th task: ${fifthCounter}`;
});

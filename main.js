//Header
const handburger = document.querySelector("#hand-burger");
const navigation = document.querySelector("nav");
function navigationDisplay() {
  let width = window.innerWidth;
  if (width < 500) {
    handburger.style.display = "block";
    navigation.style.display = "none";
  } else {
    handburger.style.display = "none";
    navigation.style.display = "block";
  }
}
handburger.addEventListener("click", (e) => {
  if (window.getComputedStyle(navigation).display == "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
});
console.log("display", window.getComputedStyle(handburger).display == "block");
navigationDisplay();
window.onresize = navigationDisplay;
//First section - image "slider"
const slider = document.querySelector("#slider");
const pictures = ["img1.jpg", "img2.jpg", "img3.jpg"];
let pictutesArrayIndex = 0;
function changePicture() {
  slider.src = "old/Užduotis Nr. 2/assets/" + pictures[pictutesArrayIndex];
  pictutesArrayIndex++;
  if (pictutesArrayIndex > pictures.length - 1) {
    pictutesArrayIndex = 0;
  }
}
setInterval(changePicture, 2000);
//Second section - "clock"
const clock = document.querySelector("#clock");
zeroToNineteen = [
  " ",
  "viena",
  "dvi",
  "trys",
  "keturios",
  "penkios",
  "sesios",
  "septynios",
  "astuonios",
  "devynios",
  "desim",
  "vienuolika",
  "dvylika",
  "trylika",
  "keturiolika",
  "penkiolika",
  "sesiolika",
  "septiniolika",
  "astuoniolika",
  "deviniolika",
];
twentyToSixty = [
  "",
  "",
  "dvidesim",
  "trisdesim",
  "keturiasdesim",
  "penkiasdesim",
];
function numbersToWords(num) {
  if (num < 20) {
    return zeroToNineteen[num];
  }
  num = num.toString();
  firstNum = num[0];
  secondNum = num[1];
  return twentyToSixty[+firstNum] + zeroToNineteen[+secondNum];
}
function getTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  clock.innerText = `${h}:${m}:${s} ${numbersToWords(h)} VAL. ${numbersToWords(
    m
  )} MIN. ${numbersToWords(s)} SEK.`;
}
console.log(getTime());
setInterval(getTime, 1000);
//Third Section - "form"
const screen = document.querySelector("#screen");
document.getElementById("form1").addEventListener("submit", function () {
  let age = document.getElementById("agei")?.value;
  let firstName = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  console.log(age, email, firstName);
  let innerText = document.createTextNode("ERROR");
  if (age && firstName && email) {
    innerText = document.createTextNode(
      `HELLO MISTER ${firstName} ! Your registration has been sucessfull !`
    );
  }
  screen.innerHTML = " ";
  screen.appendChild(innerText);
});

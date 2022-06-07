// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
function arrDoubled(nums) {
  let doubledNums = [];
  for (let i = 0; i < nums.length; i++) {
    doubledNums[i] = nums[i] * 2;
  }
  return doubledNums;
}
// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
function arrMultiplied(nums, multiply) {
  let multipliedNums = [];
  for (let i = 0; i < nums.length; i++) {
    multipliedNums[i] = nums[i] * multiply;
  }
  return multipliedNums;
}
// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
function arrCountTwos(nums) {
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    if (nums[i] == 2) {
      count++;
    }
  }
  return count;
}
// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfFirst(nums, value) {
  return nums.indexOf(value);
}
// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfLast(nums, value) {
  return nums.lastIndexOf(value);
}
// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223
function reverseNumbers(num) {
  let result = num.toString();
  for (let i = 0; i < num.length / 2; i++) {
    let a = result[i];
    result[i] = result[num.length - (1 + i)];
    result[num.length - (1 + i)] = a;
  }
  return result;
}
// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"
function lowHigh(nums) {
  let result = { maziausias: 0, didziausias: 0 };
  result[maziausias] = Math.min(...nums);
  result[didziausias] = Math.max(...nums);
  return result;
}
// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
function checkForLetters(sentence, letter) {
  const sentenceInArray = sentence.split("");
  let count = 0;
  for (let i = 0; i < sentenceInArray.length; i++) {
    if (sentenceInArray[i] == letter) {
      count++;
    }
  }
  return "Raide " + letter + " rasta sakinyje " + count + " kartus.";
}
// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
function findAndSortNumbers(nums) {
  let numsArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] == "number") {
      numsArray.push(nums[i]);
    }
  }
  for (let j = 0; j < numsArray.length; j++) {
    for (let y = 1; y < numsArray.length - j; y++) {
      if (numsArray[y] < numsArray[y - 1]) {
        let x = numsArray[y];
        numsArray[y] = numsArray[y - 1];
        numsArray[y - 1] = x;
      }
    }
  }
  return numsArray;
}

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False
function checkIfAllSmaller(arr, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      return false;
    }
  }
  return true;
}

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
  "Mažeikiai",
  "Jonava",
  "Utena",
];
function filteredByLetter(cities, letter) {
  let result = [];
  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < cities[i].length; j++) {
      if (cities[i][j] == letter) {
        result.push(cities[i]);
        break;
      }
    }
  }
  return result;
}

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()
function division(num1, num2) {
  return num1 / num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function addition(num1, num2) {
  return num1 + num2;
}
function calculateValue(num1, num2, action) {
  if (isNaN(num1) || isNaN(num2)) {
    return " error number is not number ";
  }
  switch (action) {
    case "/":
      return division(num1, num2);
    case "*":
      return multiplication(num1, num2);
    case "-":
      return subtraction(num1, num2);
    case "+":
      return addition(num1, num2);
    default:
      return "error action is invalid ";
  }
}
// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.

// TESTING !
console.log(" 8 “Raidė “v” sakinyje rasta 4 kartus”.");
console.log(checkForLetters("cia yra testinis sakinys", "a"));
console.log(" 9 [1,3,4,6,7,8,10];");
console.log(
  findAndSortNumbers([
    8,
    "Hello",
    "click",
    "u",
    7,
    4,
    "a",
    "a",
    3,
    6,
    "chair",
    ,
    10,
    1,
  ])
);
console.log("10");
console.log(checkIfAllSmaller(numbers, 5));
console.log("11");
console.log(filteredByLetter(citiesOfLithuania, "a"));
console.log("12 ");
console.log(calculateValue(2, 4, "+"));
console.log(calculateValue(2, 4, "k"));
console.log(calculateValue(2, "a", "+"));

// task 1
const name = "olalekan";
const fullName = name + " " + "Adejumo";
const upperCaseFullName = fullName.toUpperCase();
const lowerCaseFullName = fullName.toLowerCase();
const sliceFullName = fullName.slice(0, 4);
// console.log(sliceFullName);
// task 2
const numb1 = 20;
const numb2 = 30;
const addition = numb1 + numb2;
const subtraction = numb1 - numb2;
const division = numb1 / numb2;
const modulus = numb1 % numb2;
// task 3
const isTrue = true;
const isFalse = false;

const result1 = isTrue || isFalse;
const result2 = isTrue && isFalse;
const result3 = !true;
// console.log(result2, result1, result

if (isFalse == result2) {
  console.log(true);
}

// task 4
const arrayNumber = [1, 2, 3, 4, 5, 6];
arrayNumber.push(8);
arrayNumber.pop();
arrayNumber.shift();
arrayNumber.unshift(10);

// console.log(arrayNumber);

// task 5
const person = {
  name: "olalekan",
  age: 12,
  location: "Agege",
  gender: "Male",
};

person.state = "Oyo";
person["town"] = "ibadan";
// console.log(person);
// task 6
const numb = "8";
const newNumb = parseInt(numb);

const numb5 = 10;
const newNumb5 = numb5.toString();

//  console.log(typeof newNumb5);

//  Lesson two
let x = 31;
// task1
if (x > 10) {
  console.log("good");
}
// task2
if (x >= 40) {
  console.log("poor");
} else if (x % 2 === 0) {
  console.log(x + " " + "is" + " " + "even");
} else {
  console.log(x + " " + "is" + " " + "odd");
}
// task 3
if (x < 0) {
  console.log("it" + " " + "is" + " " + "negative");
} else if (x > 0) {
  console.log("it" + " " + "is" + " " + "positive");
} else {
  console.log("it" + " " + "is" + " " + "zero");
}

// task 4
const num1 = 2;
const num2 = 3;

if (num1 > 0) {
  if (num2 > 0)
    console.log("both" + " " + "number" + " " + "are" + " " + "positive");
} else {
  console.log("negative");
}
// task 5
const pass = 25;
const status = pass >= 18 ? "passed" : "failed";
// console.log(status);
// task 6
const z = 10;
if (z >= 5 && z <= 10) {
  console.log("within range");
} else {
  console.log("out of range");
}

// task 7
const digit = 1;
let day;
switch (digit) {
  case 1:
    day = "monday: Start of the week";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = " wednesday";
    break;
  case 4:
    day = "thursday";
    break;
}
// console.log(day);
// Lesson 3
// task1

const arrayNumber1 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i <= 7; i++) {
  const element = arrayNumber1[i];
  // console.log(element);
}

// task2

for (let i = 7; i >= 0; i--) {
  const element = arrayNumber1[i];
  // console.log(element);
}

// task 3

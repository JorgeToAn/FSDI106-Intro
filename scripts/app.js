function hello() {
  console.log("Jorge");
}

function sayHello(name) {
  let lastName = "Tostado";
  console.log(`Hello ${name} ${lastName}!`);
}

function sum(num1, num2) {
  return num1 + num2;
}

function exec1() {
  for (let i = 0; i <= 20; i++) {
    if (i != 7 && i != 13) {
        console.log(i);
    }
  }

  let name = "";
  if (!name) {
    console.eror("name empty");
  }
}

function exec2() {
  let numbers = [123, 3, -1, 12, -123, 45, 10, 20, 203, -2, -29, 12, 123];
  let sum = 0;
  //A - print every number in the array
  //B - sum all the numbers and print the results
  //C - print every negative number
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i];
  }
  console.log(`Sum of numbers in the array is ${sum}`);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        console.log(numbers[i]);
    }
  }
}

function init() {
  console.log("Hello to intro");

  // hello();

  // let myName = "Jorge";
  // sayHello(myName);

  // let result = sum(21, 21);
  // console.log(result);

  // exec1();

  exec2();
}

window.onload = init;

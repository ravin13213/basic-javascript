// let first1Name = "Rabindra";
// console.log(first1Name);
// first1Name = "Rajesh";
// console.log(first1Name);

// let edge = 324123;
// let isLoggedIn = true;
// console.log("Hello World");
// alert("Click ok to complete my execution");

// // variable (Only char, num, $ _)
// // var, let, const
// var name = "Rabindra Naga";
// or;
// let name; //creating variable
// console.log(name);

// name = "Rabindra Naga"; //assigning value
// console.log(name);
// let add;
// add = "Bhaktapur";
// name = "Sam";

// const age = "22";
// console.log(name, add, age);

// var firstName = "Rabindra Naga";

// ==========Arrithmetic
// let a = 10;
// const b = 5;
// const c = b;

// 1. + addition
//  const result = a + b + c

// //  2. - Substraction
// const result = a - b;

// 3. * Multiplication
// const result = a * b;

// 4. / Division
// const result = a / b;

// 5. % Modulus (Division remainder)
// const result = a % b;

// console.log(result);

// 6. ++ Increment
// ++a; //7

// 7. Decrement
// --a
// let a = 7;
// console.log(a); //7
// console.log(a++); //8
// console.log(--a); //7
// console.log(a); //6

// ======Math object
// const answer = Math.PI;

// 1. Math.round(4.7)
// const answer = Math.round(4.5)
// const answer = Math.round(4.4)

// 2. Math.pow(8, 2)
// const answer = Math.pow(8, 2)

// 3. Math.sqrt(64)
// const answer = Math.sqrt(36)

// 4. Math.ceil(4.4)
// const answer = Math.ceil(4.2)

// 5. Math.floor(4.7)
// const answer = Math.floor(4.9)

// 6. Math.min(0, 150, 30, 20, -8)
// const answer = Math.min(0,150, -8, 20)

// 7. Math.max(0, 150, 30, 20, -8)
// const answer = Math.max(0, 120, -8, 10)

// 8. Math.random()
// const answer = Math.random()*100
// const val =Math.round(answer)
// console.log(val);

// =======Comparisions
// ==(to check actual data only)
// === (to check data type as well as actual data)
// >, >=
// < , <=

// const v1 = 5;
// const v2 = 6;

// const result = v1 == v2(False)
// const result = v1 <= v2(True )
// const result = V1 >= v2 (False)

// console.log(result);

// =========JS- Data Types
// Primitives

//String //"Rabindra Naga"
// const value = "Rabindra Naga"  // '', ``
//Number //123
// const value = 32423
//Boolen // true or false
//Undefined //not defined in system memoey
//Null // defined in system memory but no value assigned

// console.log(typeof value, value);

// let user = "Rabindra"
// console.log(user);

// const ul = user;
// console.log.ul;

// user="Sam"
// console.log(user);
// console.log(ul);

// ======Refrence data types
//  Arrays
//  let myar = [1, 2, 3, 4, false, "string"];
// console.log("Data type is  " +  ( typeof myar))

// Object literals
// let stMarks = {
//     Ram: 40,
//     Shyam: 30,
//     Hari: 40
// }
// console.log("Data type is " + (typeof stMarks));

// Function
// function name(){

// }
// console.log(typeof name)

// Date
// let date = new Date();
// console.log(typeof date);

//Number  / 0_9

//Safe number range -2^53-1 to 2^53-1 (Doesn't support if exceeds this range)
// const num= 30_590_742_849_999
// console.log(num);

// const num = "a0738903908";
// const val = +num; //no space
// // const val = parseInt(num);//Just for integers
// // const val = parseFloat(num);//for decimal values
// isNaN(val);

// console.log(typeof val, val, isNaN(val));

//////STRING
//Escape character
// Length
// indexof, lastIndexOf, search
// Slice, substring, substr
// Replace, concat, trim
// toUpperCase toLowerCase
// charAt, [], split

// const str = 6 + 4 + "4" + "5";
// const str = 'Hi im "Rabindra Naga", and I live in bhaktapur';
// console.log(typeof str, str.length);

// const val = str.length;
// const val = str.toLowerCase();
//const val = str.toUpperCase();
// const val = str[20];
// const val =str.charAt(20);
// const val = str.indexOf("e");
// const val = str.lastIndexOf("there");

// const val = str.replace("prem", "Sam")
// const val = str.replace("i", "u");
// const val = str.replaceAll("i", "u");

// console.log(val);

// const val = str.slice(3, 5);
// const val = str.slice(3);
// const val = str.slice(-3, -1);

// const val = str.includes("Rabindra");
// const val = str.search("Rabindra");

// const val = str.trim();
// const val = str.split("i").join("i");
// const val = str.concat("New text in str", "more content");
// const val = str + " New text in str" + " more content";

// console.log(val, val.length);

/////LOGICAL OPERATORS
// &&, ||, !, ternary

// =======JS CONDITIONAL STATEMENTS
// 1. If else

//Truthy: true, 2, -4, "d", {}, [], ()=>{}
// Falsy : false, 0, NaN, "", null, undefined
// const val = !"hi there";
// console.log(val);
// if (val){
// //  //statement 1
// //  console.log("you pass through the if condition")
// }

// const age = 14;
// const vip = false;

// if ((age >= 18 && age < 50) || vip === true) {
//   console.log("Welcome to the coding party!");
// } else {
//   console.log("Go home kiddo");
// }

// 2. Else if
// if(condition){
//     statement
// }else if(c2)
// {
//     code
//     s2
// }else(
//     run default code
// )

// const pet = "coaw";

// if (pet === "cat") {
//   console.log("Meowww");
// } else if (pet === "dog") {
//   console.log("wooff");
// } else if (pet === "cow") {
//   console.log("Muhhhh");
// } else {
//   console.log(";dhaso ioupodia suioaodu");
// }

// SWITCH
// const pet = "dog";
// switch (pet) {
//   case "cat":
//     console.log("Meowww");

//     break;

//   case "dog":
//     console.log("WOOF");
//     break;
//   case "cow":
//     console.log("Mooowow");
//     break;

//   default:
//     console.log("'huiahiohfoaiio jkfjah");
// }

/////Ternary
// conditional ? //run when the condition is : //run this code
// const age = 30;
// age < 50 ? console.log("Welcome") : console.log("Go home");

///3. Array[]

// const val = [
//     "Rabindra", 345, "Ach", null, undefined, {34, 456}, {}, () => {} ];
//     console.log(val);
//Length, push, pop, shift, unshift, toString,  join,[]slice, splice, indexOf, includes
// Sort, reverse
//forEach, map
// Filter, reduce, every, find

// const fruits = ["apple", "banana", "orange", "mango", 10, 55, 105];

// const value = fruits.length;
// const value = fruits[1];

//adding data in the array
// fruits.push("watermelon");
// fruits.unshift("watermelon");
// fruits.splice(2, 0, "watermelon"); //0 is for deleting data

//Deleting item from array
// const val = fruits.pop();
// const val = fruits.shift();
// const val = fruits.splice(2, 1);
// const val = fruits.slice(2, 4);
// delete fruits[2]; //deletes then 2nd position item but still occupies space
// console.log(fruits, val);

// const val = fruits.toString().split(",");
// const val = fruits.indexOf("banana");
// const val = fruits.join("-").split(",");

// console.log(fruits.sort((a, b) => a - b).reverse());
// fruits.sort().reverse();
// fruits.reverse();
// console.log(fruits);

/////JAVA LOOPS

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// while condition

// let i = 0;
// while (i < 10) {
//   //code block
//   console.log(i);
//   i++;
// }

///DO WHILE CONDITION
// let i = 0;
// do{
//     console.log(i)
//     i++
// } while (i<10);

// for (let i = 0; i <= 100; i++) {
//   if (i === 10) {
//     break;
//     // continue;
//   }
//   console.log(i);
// }

//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

///////JS specific Array Loops

//for / of for (x of cars) ~ for array------------
const fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(fruits);

// for (let item of fruits){
//     console.log(item);
// }

// const upperFruits = [];

// for (let item of fruits) {
//   upperFruits.push("sku-" + item.toUpperCase());
//   console.log(upperFruits);
// }

// for (let i = 0; i < fruits.length; i++) {
// console.log(i, fruits[i]);
// }

/// == forEach-------------

// const newData = fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// const.log(newData); //will be un defined

//map--------
// const newData = fruits.map((item, i) => {
//   console.log(item, i);
//   return "sku-" + item.toUpperCase();

// });
// console.log(newData);

/////C W H
// let num = [3, 54, 1, 2, 4];
// for(let i=0; i < num.length;i++){
//   console.log(num[i])
// }

//for each loop----------

// num.forEach((element) => {
//     console.log(element * element)
// })

// Array.from
// let name = "Ravin";
// let arr = Array.from(name);
// console.log(arr);

// ///for of
// for (
//     let item of num){
//         console.log(item)
//     }

// Ai ==========

// 1. Traditional 'for' loop
// var fruits = ["apple", "banana", "cherry", "date"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//2. "forEach" Method
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// 3. "for... of" loop
// for (var fruit of fruits) {
//   console.log(fruit);
// }

// 4. "map" method
// var numbers = [1, 2, 3];
// var doubled = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(doubled);

// 5. filter method
// var numbers = [1, 2, 3, 4, 5];
// var evens = numbers.filter(function (num) {
//   return num % 2 == 0;
// });
// console.log(evens);

// 6. reduce method
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 0);
// console.log(sum);

// 7. some and every methods
// var numbers = [1, 2, 3];
// var hasEven = numbers.some((num) => num % 2 == 0);
// console.log(hasEven );

// var allEven = numbers.every((num) => num % 2 == 0);
// console.log(allEven);

// let fruits = ["apple", "banana", "orange", "mango"];
// console.log(fruits);

// const result = fruits.every((fruit) => {
//   console.log(fruit);
//   return fruit.includes("a");
// });
// console.log(result);

const money = [10, 345, 56, 3245, 56, 435, 9483];

// const result = money.includes(10);
// boolean;

const result = money.find((item) => item === 55);

// const result = money.indexOf(345);
console.log(result);

// const symbol = new Array(10).fill("@");
// console.log(symbol);

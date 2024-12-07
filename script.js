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

// const pet = "cow";

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

// const age = 54;
// const vip = false;
// (age < 52 && age > 35) || vip == true
//   ? console.log("Welcome")
//   : console.log("Bye");

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
// console.log(value);
// const value = fruits[1];

//adding data in the array
// fruits.push("watermelon");
// console.log(fruits);
// fruits.unshift("watermelon");
// console.log(fruits);
// fruits.splice(2, 1, "watermelon"); //0 is for deleting data
// console.log(fruits);
//Deleting item from array
// const val = fruits.pop();
// const val = fruits.shift();
// const val = fruits.splice(2, 1);
// const val = fruits.slice(2, 5);
// delete fruits[2]; //deletes then 2nd position item but still occupies space
// console.log(fruits, val);

// const val = fruits.toString().split(",");
// const val = fruits.indexOf("banana");
// const val = fruits.join("-").split(",");
// console.log(val);

// console.log(fruits.sort((a, b) => a - b).reverse());
// fruits.sort((a, b) => a - b).reverse();
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

// for (let i = 0; i < 100; i++) {
//   if (i === 10) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 100; i++) {
//   if (i === 10) {
//     continue;
//   }
//   console.log(i);
// }

///////JS specific Array Loops

//for / of for (x of cars) ~ for array------------
// const fruits = ["apple", "banana", "orange", "mango"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits);

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

// const newData = fruits.forEach(displayFruit);

// function dispalyFruit(fruit, index) {
//   console.log(index, fruit);
// }

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

// fruits.forEach((fruit) => {
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
// var doubled = numbers.map(double);
// function double(num) {
//   return num * 2;
// }

// });
// console.log(doubled);

// 5. filter method
// var numbers = [1, 2, 3, 4, 5];
// var evens = numbers.filter(function (num) {
//   return num % 2 == 0;
// });
// console.log(evens);

// var evens = numbers.filter(evenNumber);

// function evenNumber(num2) {
//   return num2 % 2 === 0;
// }

// console.log(evens);

// 6. reduce method
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 3);
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

// const money = [10, 345, 56, 3245, 56, 435, 9483];

// const result = money.includes(10);
// boolean;

// const result = money.find((item) => item === 55);

// const result = money.indexOf(345);
// console.log(result);

// const symbol = new Array(10).fill("@");
// console.log(symbol);

// CHALLENGE

// let Rarrey = [];

// for (let i = 0; i < 50; i++) {
//   Rarrey[i] = Math.round(Math.random() * 100);
// }
// console.log(Rarrey);
// for (let i = 0; i < 50; i++) {
// const randomNumber = Math.round(Math.random() * 100);
//   Rarrey.push(randomNumber);
// }

// console.log(Rarrey);

// function uniArr(size, max) {
//   let Rarray = [];
//   while (Rarray.length < size) {
//     const random = Math.round(Math.random() * max);
//     if (!Rarray.includes(random)) {
//       Rarray.push(random);
//     }
//   }
//   return Rarray;
// }

// const arr3 = uniArr(20, 1000);

// console.log(arr3);

// sort
// let sort = Rarrey.sort((a, b) => b - a);
// console.log(sort);

// total of Array
// let summ = sort.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 0);
// console.log(summ);

// // evens and odds
// var evens = sort.filter((even) => {
//   return even % 2 == 0;
// });
// console.log(evens);

// var odds = sort.filter((odd) => {
//   return odd % 2 == 1;
// });
// console.log(odds);

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const uniqueElements = removeDuplicates(sort);
// console.log(uniqueElements);

// function createUniqueArray(size, max) {
//   const uniqueArray = [];

//   while (uniqueArray.length < 50) {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     if (!uniqueArray.includes(randomNumber)) {
//       uniqueArray.push(randomNumber);
//     }
//   }

//   return uniqueArray;
// }

// const arr1 = createUniqueArray(50, 100);
// console.log(arr1);

// DATA types - Object
// const pet = {
//   name: "Kitty",
//   age: "2 years",
//   weight: 8,
//   foods: ["fish", "milk", "meat", ["milk", "water"]],
//   gender: null,
//   favFood: undefined,
//   otherPets: { dog: "Hund", rabbit: "Bunny" },
//   bio: function () {
//     return this.name + " is " + this.age + " old";
//   },
// };

// const data = pet.name;
// const data2 = pet.age;
// const d3 = pet["weight"];
// const d4 = pet["foods"][3][1];
// const d5 = pet.bio();

// Updating data
// pet.name = "Kit";
// pet.foods.push("chicken");
// pet.foods[3].push("Pork");
// pet.otherPets.fish = "Fishy";

// console.log(data);
// console.log(data2);
// console.log(d3);
// console.log(d4);
// console.log(d5);

// console.log(pet);

// pet.foods.pop();
// pet.weight = "Undefined";
// pet.name = "null";

// delete pet.foods[1];
// delete pet.foods[3][2];
// delete pet.otherPets.Fish;

// console.log(pet.bio());

// JS Es6 object{} Destructuring(It calls the many properties more easily and quickly)
// const { name, age, otherPets } = pet;
// console.log(name, age, otherPets);

// const {
//   name,
//   age,
//   otherPets: { fish, dog },
// } = pet;
// console.log(name, fish, dog);

// setting default values with destructuring

// const { name, age, color = "N/A" } = pet;
// console.log(name, age, color);

// Es6 Rest operators
// const { name, age, weight, ...rest } = pet;
// console.log(rest);

// Es6 spread operators
// const character = { friendly: "rare", aggressive: "often" };
// const combo = { pet, character };

// const combo = { ...pet, ...character };
// console.log(combo);

// Shallow copy

// const p1 = pet;
// const target = {};
// const source = { a: { b: 1 } };

// Object.assign(target, source);

// target.a.b = 2;
// console.log(source.a.b); // Output: 2

// console.log(p1);
// console.log(pet);

// const ram = {};
// const sita = { beautiful: "average", likesTo: { much: { hobby: "playing" } } };

// Object.assign(ram, sita);
// console.log(sita.likesTo.much);

// ram.likesTo.much = "Sleeping";
// ram.beautiful = "above average";

// console.log(sita);
// console.log(ram);

// console.log(sita.likesTo.much);

// console.log(ram.likesTo.much);

// const pet = {
//   name: "Kitty",
//   age: "2 years",
//   weight: 8,
//   foods: ["fish", "milk", "meat", ["milk", "water"]],
//   gender: null,
//   favFood: undefined,
//   otherPets: { dog: "Hund", rabbit: "Bunny" },
//   bio: function () {
//     return this.name + " is " + this.age + " old";
//   },
// };

// const cPet = { ...pet };
// cPet.age = 3;
// console.log(cPet);

// const p1 = JSON.stringify(pet);
// console.log(typeof p1);
// console.log(p1);

// const p2 = JSON.parse(p1);
// console.log(typeof p2);
// console.log(p2);

// pet.name = "Kitten";
// p2.name = "Katy";
// p2.foods[3][1] = "drinks";

// console.log(typeof pet);
// console.log(p2);

// const copy = { ...pet };
// copy.foods[3][1] = "JUICE";
// console.log(copy.foods[3]);
// console.log(pet.foods[3]);

// copy.age = 10;
// console.log(copy.age);
// console.log(pet.age);

// LOOP THROUGH THE OBJECTS
// properties are also called keys

// for (let prop in pet) {
//   console.log(prop);
//   console.log(pet[prop]);
// }
// const pet1 = Object.entries(pet);

// console.log(keys);

// const pet1 = Object.keys(pet);
// const pet1 = Object.values(pet);
// console.log(pet1);

// Date()Object\\\\\\\\\\\\

// const today = Date(); it shows current date
// const today = new Date("2023/8/16"); //should be passed in string and no sp[aces]
// const today2 = new Date.now(); //should be passed in string and no sp[aces]
// const today2 = today.getTime();
// const today = Date.now();
//shows timestamp or milliseconds
// console.log(today2);
// console.log(today);
// console.log(new Date(1732781430472));

// const data = today.getDate();
// const data = today.getFullYear();
// const data = today.getDay();
// const data = today.getTime();
// const data = today.getMinutes();
// const data = today.getUTCDay();
// const data = today.toLocaleDateString();
// console.log(data);

// today.setDate(today.getDate() + 10);
// console.log(today);

// console.log(today.getTime());

// challenge

// const today = new Date("2023/8/16");

// const food = {
//   lays: { name: lays, expiry: "11/20/2024" },
//   mango: { name: mango, expiry: "12/20/2024" },
// };

// function checkexpiry(name, date) {
//   const fName = name;
//   const eDate = new Date(date);
//   const theDate = eDate.getTime();

//   const today = Date.now();

//   if (today > theDate) {
//     return `The ${fName} has expired and should be discarded.`;
//   } else {
//     return `You can still use the ${fName}.`;
//   }
// }

// console.log(checkexpiry("apple", "2024-12-12"));
// console.log(checkexpiry("orange", "2022-12-12"));

// function checkexpirys(name, date) {
//   const fName = { A: "potato", B: "Lays" };
//   const Exp = {};
//   const eDate = new Date("2024-12-12");
//   const theDate = eDate.getTime();

//   const today = Date.now();

//   if (today > theDate) {
//     return "You can use the producT";
//   } else {
//     return "You cant throw it";
//   }
// }

// console.log(checkexpirys());

// const fName = "potato";
// const eDate = new Date("2024-12-12");
// const theDate = eDate.getTime();

// const today = Date.now();
// console.log(today, theDate);

// if (today > theDate) {
//   console.log("You can use the producT");
// } else {
//   console.log("Potato is expired");
// }

/////////FUNCTION///////

// function person(name, dob) {
//   const bDate = new Date(dob);
//   const ts = bDate.getTime();
//   const today = Date.now();
//   const years = Math.floor((today - ts) / (1000 * 60 * 60 * 24 * 365.25));
//   const intro = `I am ${name}. I am ${years} years old`;

// console.log(intro);
// return intro;
// }

// console.log(person("Ravin", "2001-11-1"));

// person = (name, dob) => {
//   const bDate = new Date(dob);
//   const ts = bDate.getTime();
//   const today = Date.now();
//   const years = today - ts;
//   const intro = `I am ${name}. I am ${years} years old`;

//   console.log(intro);
// };

// function person(name, age) {
//   const intro = `I am ${name}.I am ${age} years old.`;

//   return intro;
// }

// console.log(person("Ravin", 23));

// Function in use /////////////

// const userList = [
//   {
//     name: "Ram",
//     location: "Sydney",
//     career: "founder of Dc",
//     interest: "Loves coding and teaching others",
//   },
//   {
//     name: "Sam",
//     location: "USA",
//     career: "Chef",
//   },
//   {
//     name: "Willian",
//     location: "",
//   },
// ];
// console.log(userList);

// /////FUNCTION personBio(){}=>
// const others = ({ career, interest }) => {
//   return `He is ${career} and he ${interest}`;
// };

// const personBio = ({ name, location = "na", ...rest }) => {
//   console.log(rest);

//   let str = `${name} is from ${location}, and likes to code. `;

//   if (rest.career) {
//     str += others(rest);
//   }
//   return str;
// };
// // const data = personBio();
// // console.log(userList[2]);
// // console.log(premBio, samBio, willBio);

// userList.forEach((item) => {
//   const data = personBio(item);
//   console.log(data);
// });

// Error Handling/////////////

// try {
//   //your code
//   // throw new Error(Hacked);
//   console.log(first); //error
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("this block will always run");
// }
// console.log("this works");

// SET TIME OUT ////////

// 1. clearTimeout

// console.log("I am before setTimeOut");
// setTimeout(() => {
//   console.log("I am from inside the setTimeOut");
// }, 5000);
// //5000 = 5 sec

// console.log("I am before setTimeOut");
// const counter = setTimeOut(() => {
//   "I am from inside the setTimeOut";
// }, 2000);
// clearTimeOut(counter);

// 2. Set Interval //////
// clear interval
// let counter1 = 100;

// const countDown = setInterval(() => {
//   console.log("special event in", --counter1);
//   console.log(countDown, "code 0");

//   if (counter1 === 0) {
//     clearInterval(countDown);

//     console.log("Happy Birthday");
//   }
// }, 100);

// let counter = 0;
// const id = setInterval(() => {
//   console.log(id, "code");

//   console.log("from inside setInterval", counter++);
//   if (counter === 10) {
//     clearInterval(id);

//     console.log("Happy Birthday!!!!");
//   }
// }, 100);

// FUN CHALLENGE////////

// const yoyo = () => console.log("0." + (5 + 6));
// console.log("1. log");

// setTimeout(() => {
//   console.log("2. inside first set timeout");
// }, 5000);

// console.log("3. after first setTime out");

// const sayHey = () => {
//   console.log("4. inside sayhey");
//   yoyo();
// };

// setTimeout(() => {
//   console.log("5. inside second set timeout");
// }, 0);

// sayHey();

// console.log("6. last clg");

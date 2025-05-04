// onload = function () {
//   document.querySelector("h1").style.backgroundColor = "blue";
// };

// window.console.log("hello from consle into window");
// window.document.writeln("hello from document into window");
// // window.close();

// // console commands
// console.log(10 + 20);
// console.log("log");
// console.table(["Mohamed", "Sayed", "Omar"]);
// console.error("%cError %cin file", "color:blue;", "");
// console.warn("This is last warn for you");
// console.info("This is Info");
// console.group("User Info");
// console.log("Name: Mohamed");
// console.log("Age: 20");
// console.groupEnd();
// // console.time() // no action because that without name of timer
// console.time("timer");
// for (let i = 0; i < 100000; i++) {}
// console.timeEnd("timer");
// console.clear();
// var x;
// let y;
// console.log(typeof "Mohame sayed ");
// console.log(typeof 10);
// console.log(typeof 20.2);
// console.log(typeof (1 > 2));
// console.log(typeof (2 > 1));
// console.log(typeof x);
// console.log(typeof y);
// console.log(2 > 1);
// console.log(typeof [1, 2, 3]);
// console.log(typeof { name: "mohamed", age: 17, country: "fayoum" });
// console.log(typeof null);
// console.log(typeof undefined);
// var Name = "moahemd";
// var massage = "Hello";
// let Age = 19;
// console.log(massage, Name);
// document.write("<br>" + massage + " " + Name);
// console.log(massage + " " + Name);
// console.log(`name is ${Name}, age is ${Age}`);

// // assignment in vedio 17

// // declear the main variables
// let Title = "Elzero" , pargrapgh = "Elzero Web School" , date = "25/10";

// // declear the card ariable
// let card = `
//     <div class="card">
//         <h3>Hello ${Title}</h3>
//         <p>${pargrapgh}</p>
//         <span>${date}</span>
//     </div>
// `;

// // Print
// document.write(card.repeat(4))
// let x = 10;
// let y = "Mohamed";
// let z = "20";
// console.log(+"");
// console.log(-"");

// console.log("==============");
// console.log(+x);
// console.log(+y);
// console.log(+z);

// console.log("==============");
// console.log(-x);
// console.log(-y);
// console.log(-z);

// console.log("==============");
// console.log(x + +y);
// console.log(x + y);

// console.log("==============");
// console.log(x + +z);
// console.log(x + z);

// console.log("==============");
// console.log(x + -y);
// console.log(x - y);

// console.log("==============");
// console.log(x - z);
// console.log(x + -z);

// console.log("==============");
// console.log(x + -z);
// console.log(x + y);
// console.log(x - +y);

// // assignment in video 22

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
// console.log(++a + -b + +c++ - -a++ + +a); //13 + -21 + 81 - -13 + 14 =
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //
// // 79 + 20 + 9 * 20 - 20 * 9 + 8 -1 = 79 + 20 + 180 - 180 + 8 - 1 = 106

// assignement in video 37

// let a = 10;

// a < 20
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log("Unknown");

// let st = "Elzero Web School";
// //using variable only
// if ((st.length * 2).toString() === "34") {
//   console.log("Good");
// }
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }
// if (st !== "srting") {
//   console.log("Good");
// }
// if (!(st === "number")) {
//   console.log("Good");
// }
// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
// // assignment in video 39
// let job = "Manager";
// let salary = 0;

// switch (job) {
//     case "Manager":
//         salary = 8000;
//         console.log(`Your Salary Is ${salary}`);
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(`Your Salary Is ${salary}`);
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         console.log(`Your Salary Is ${salary}`);
//         break;
//     default:
//         salary = 4000;
//         console.log(`Your Salary Is ${salary}`);
// }

// let holiday = 0;
// let money = 0;
// if (holiday === 0) {
//     money = 5000;
//     console.log(`My Money Is ${money}`);
// }
// else if (holiday === 1 || holiday === 2) {
//     money = 3000;
//     console.log(`My Money Is ${money}`);
// }
// else if (holiday === 3 ) {
//     money = 2000;
//     console.log(`My Money Is ${money}`);
// }
// else {
//     money = 500;
//     console.log(`My Money Is ${money}`);
// }

// =============
// assignment in video 47

// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.slice(zero,++counter).reverse()); // counter = 4
// console.log(my.slice( ++zero, --counter).reverse()); // counter = 3 , zero = 1
// console.log(my[--counter].slice(--zero,counter) + my[++zero].slice(counter))// Elzero , counter = 2 ,zero = 1
// console.log(my[zero].slice(-counter, -zero) + my[zero].slice(-zero).toUpperCase())// rO

//===================

// assignment in video 57

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Amira"
// ];
// let i = 0,k = 1;
// for (i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   }
// }
// document.write(`We have ${i} Admins`);

// for (i = 0; i < myAdmins.length; i++) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   }
//   document.write(`<hr><div>`);
//   document.write(`The Admin for team ${i + 1} is ${myAdmins[i]} `);
//   document.write(`<h2>Team Members:</h2>`);

//   for (j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i][0] === myEmployees[j][0]) {
//       document.write(`-${k++} ${myEmployees[j]} <br><br>`);
//     }
//   }

//   document.write(`</div>`);
// }

// ====================

// assignment in video 63
// name age status is random
// function showDetails(...date) {
//   let name, age, status;
//   for (let i = 0; i < date.length; i++) {
//     typeof date[i] === "string"
//       ? (name = date[i])
//       : typeof date[i] === "number"
//       ? (age = date[i])
//       : (status = date[i]);
//   }
//   console.log(
//     `Hello ${name}, Your Age Is ${age}, `,
//     status ? `You Are Available for Here ` : "You Are Not Available for Here"
//   );
// }
// showDetails("Osama", 38, true);
// showDetails(40, "Ahmed", false);
// showDetails("Sayed", false, 50);
// showDetails(20, true, "Mohamed");
// showDetails(true, 30, "Samaera");

//================

// assignment in video 70

//  assignment 1
// let names = function (...args) {
//     return console.log(`String [${args.join("], [")}] => Done !`);
// }
// let names = (...args) => console.log(`String [${args.join("], [")}] => Done !`);

// names("Osama", "Ahmed", "Sayed", "Ali", "Elzero");

//assignment 2

// let myNumbers = [20, 50, 10, 60];

// let calc =(one, two, ...nums) => one + two +nums.shift();

// console.log(calc(10,myNumbers.shift(),myNumbers.shift())); // 10 + 20 + 50 = 80

// ==================

// assignment in video 72

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignmoreNumbers = "Elz123er4o";

// let swp = swappingCases.split("").map(function(ele){
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// })
// .join("");
// console.log(swp); // ELzero

// let swp = invertedNumbers.map(function (ele) {
//   return -ele;
// });
// console.log(swp); // [1, 10, 20, -15, -100, 30]

// let swp = ignmoreNumbers.split("").map(function (ele) {
//     return isNaN(ele) ? ele : "";
// });
// console.log(swp.join("")); // Elzeroer

// let mix = "A13BS2ZX";
// let swp = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(ele);
//   })
//   .map(function (ele, index) {
//     return ele*ele;
//   }).join("");
// console.log(swp);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let test = arr.reduce(function (acc, current,index,arr) {
//     return acc + current;
// });
// console.log(test); // 55

//===========================

// assignment in video 78

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
// let solution = myString
//   .split(",")
//   .filter(function (ele) {
//     return isNaN(ele);
//   })
//   .map(function (ele) {
//     return ele.length > +true ? ele.charAt(ele.length - ele.length) : ele;
//   }).slice(myString.length-myString.length, -!(myString.length-myString.length))
//   .reduce(function (acc, current) {
//     return acc + current;
//   })
//   .split("_")
//   .join(" ");

// console.log(solution); // Elzero Web School

//===================

//assignment in video 80

// let ob = {
//   name: "Mohamed",
//   age: 20,
//   country: "Egypt",
//   job: "Developer",
//   skills: ["HTML", "CSS", "JavaScript"],
//   sayHello: function () {
//     return `Hello ${this.name}`;
//   },
// };
// console.log(ob.name); // Mohamed
// console.log(ob["name"]); // Mohamed
// console.log(ob.age); // 20
// console.log(ob["age"]); // 20
// console.log(ob.country); // Egypt
// console.log(ob["country"]); // Egypt
// console.log(ob.job); // Developer
// console.log(ob["job"]); // Developer
// console.log(ob.skills); // [ 'HTML', 'CSS', 'JavaScript' ]
// console.log(ob["skills"]); // [ 'HTML', 'CSS', 'JavaScript' ]
// console.log(ob.skills[0]); // HTML
// console.log(ob.sayHello());
// console.log("=".repeat(26));

// let myVar = "country";
// let student = {};
// student.name = "Mohamed";
// student.age = 20;
// student.country = "Egypt";
// student["job"] = "Developer";
// student["skills"] = ["HTML", "CSS", "JavaScript"];
// student.sayHello = function () {
//   return `Hello ${this.name}`;
// }
// console.log(student.sayHello()); // Hello Mohamed
// console.log(student.name); // Mohamed
// console.log(student.age); // 20
// console.log(student["skills"][0]); // HTML
// console.log(student[myVar]); // Egypt

// console.log("=".repeat(26));

// let person = {
//   name: "Mohamed",
//   age: 20,
//   country: "Egypt",
//   natitonalId: 123456789,
//   sayHello: function () {
//     return `Hello ${this.name}`;
//   },
//   employee: {
//     name: "Ahmed",
//     age: 30,
//     country: "KSA",
//     natitonalId: 987654321,
//     sayHello: function () {
//       return `Hello ${this.name}`;
//     },
//     Worker: {
//       name: "Ali",
//       age: 25,
//       country: "UAE",
//       natitonalId: 456789123,
//       sayHello: function () {
//         return `Hello ${this.name}`;
//       },
//     }
//   }
// };
// console.log(person); // {...}
// console.log(person.name); // Mohamed
// console.log(person.age); // 20
// console.log(person.country); // Egypt
// console.log(person.natitonalId); // 123456789
// console.log(person.sayHello()); // Hello Mohamed
// console.log(person.employee.name); // Ahmed
// console.log(person.employee.age); // 30
// console.log(person.employee.country); // KSA
// console.log(person.employee.natitonalId); // 987654321
// console.log(person.employee.sayHello()); // Hello Ahmed
// console.log(person.employee.Worker.name); // Ali
// console.log(person.employee.Worker.age); // 25
// console.log(person.employee.Worker.country); // UAE
// console.log(person.employee.Worker.natitonalId); // 456789123
// console.log(person.employee.Worker.sayHello()); // Hello Ali
// console.log(person.employee.Worker.natitonalId); // 456789123
// console.log(person.employee.Worker.sayHello()); // Hello Ali

// console.log(`=`.repeat(26));

// let newOb= new Object();
// newOb.name = "Mohamed";
// newOb.age = 20;
// newOb["country"] = "Egypt";
// newOb["job"] = "Developer";

// console.log(newOb.name); // Mohamed
// console.log(newOb.age); // 20
// console.log(newOb["country"]); // Egypt
// console.log(newOb["job"]); // Developer
// console.log(newOb); // { name: 'Mohamed', age: 20, country: 'Egypt', job: 'Developer' }
// console.log(newOb["name"]); // Mohamed
// console.log(newOb["age"]); // 20
// console.log(newOb.country); // Egypt
("use strict");

// let user= {
//     name: "Mohamed",
//     age: 20,
//     country: "Egypt",
//     job: "Developer",
//     skills: ["HTML", "CSS", "JavaScript"],
//     sayHello: function () {
//         return `Hello ${this.name}`;
//     },
//     showDetails: function () {
//         return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}, Job: ${this.job}`;
//     }
// }
// console.log(user.name); // Mohamed
// console.log(user.age); // 20
// console.log(user.country); // Egypt

// let copyUser = Object.create(user);
// copyUser.name = "Mazen";
// console.log(copyUser.sayHello())

//==============================================

//assignment in video 89

// let p1 = document.getElementById("p1");
// let p2 = document.getElementsByClassName("two");
// let p3 = document.getElementsByClassName("one");
// let p4 = document.querySelectorAll(".two");
// let p5 = document.querySelector(".two");
// let p6 = document.querySelector(".one");

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// console.log(document.title);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.documentElement);

//============================

// assignment in video 88

// let myDiv = document.querySelector(".one");

// console.log(myDiv); // <div class="one">This From Html</div>
// console.log(myDiv.innerHTML); // This From Html
// console.log(myDiv.innerText); // This From Html
// console.log(myDiv.textContent); // This From Html

// let myDiv1 = document.querySelectorAll(".Two")[1];
// console.log(myDiv1.tagName);
// console.log(myDiv1.className);

// console.log(myDiv1);
// console.log(myDiv1.innerHTML); // <div>This From Html</div>
// console.log(myDiv1.innerText); // This From Html
// console.log(myDiv1.textContent); // This From Html
// console.log(myDiv1.outerHTML); // <div class="Two">This From Html</div>

//==================

// let myDiv = document.querySelector(".one");

// console.log(myDiv.getAttribute("class")); // one Two

// myDiv.setAttribute("class", "one two three");

// myDiv.innerHTML = "This From JS";

//==================

// let myDiv = document.querySelectorAll(".one");
// let i = 0;
// for (; i < myDiv.length; i++) {
//   if (myDiv[i].hasAttribute("class")) {
//     myDiv[i].removeAttribute("class");
//   }
// }
// myDiv[--i].setAttribute("class", "one two three");

//============================

let newDiv = document.createElement("div");
let newText = document.createTextNode("Hello World");
let claasName = document.createAttribute("class");
// claasName.value = "myDiv";
// newDiv.className = "myDiv";
newDiv.setAttribute("class", "myDiv");
newDiv.appendChild(newText);
document.body.appendChild(newDiv);

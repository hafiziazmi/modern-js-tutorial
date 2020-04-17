// 01 Using the console
document.querySelector('h1').style.color = "purple";
console.log('Hello World!');
const greeting = "Good Morning";
console.log(greeting);
const arr = [["a",1],["b",2]];
console.log(arr);
console.table(arr);
console.error("This is an error")
// console.clear();
console.warn('A warning.');
console.time('Hello'); 
  // console.log('Hello World!');
  // console.log('Hello World!');
  // console.log('Hello World!');
console.timeEnd('Hello'); 
  /*
    dsfmdklsmf
    dsmfsdkmnf
    sdsfnksdf
  */

  // 02 var, let, const - - - - - - - - - - - - - - - - - -
let firstName; // Camel case - regular variables
let first_name; // underscore
let FirstName; // Pascal case - constructor / class
class SecondName {
  // sfmnsaknsknfknfknsdf;
}
const thirdName = 1; // need to assign value in constant declaration
// can change value of const in array (push,shift) or object

const person = {
  name: 'Ali',
  age: 20
}
console.log(person.name);
person.name = 'Abu';
console.log(person.name);

// 03 Datatypes :
// 03.1 Primitive data types
//   stored directly, stored on stack
//    string, number, boolean, null (null is not an object), undefined, symbols (ES6)
// 03.2 Reference data types
//    Accessed by reference, pointer
//    arrays (is an object), object literals, funtions, dates, etc..

// JS - Dynamically typed language (not statically type : C, Java)
// TS - superset of JS, can use static type

// 04 Numbers & Math Object - - - - - - - - - - - - - - - - - -
const name = 'John Doe';
console.log(typeof name);
console.log(name);

const sym = Symbol();
console.log(typeof sym);

const today = new Date();
console.log(today);
console.log(typeof today);

//

const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); // rpound to highest
val = Math.floor(2.8); // round to lowest
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

// 05 String Methods - - - - - - - - - - - - - - - - - -
const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];
 

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);

// 06 Template Literals - - - - - - - - - - - - - - - - - -
const name = 'Zainal';
const age = 28;
const job = 'Web Developer';
const city = 'Perak';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;

// 12 Array Methods - - - - - - - - - - - - - - - - - -
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(43,56,33,23,44,36,5); // using constructor

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Sort by using the "compare function"
val = numbers.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);

// 13 Object literals - - - - - - - - - - - - - - - - - -
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age; // this age inside object (person)
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

// Time & Date Object - - - - - - - - - - - - - - - - - -
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); // zero based
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); // zero based
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// 015 If Statements  Comparison Operators - - - - - - - - - - - - - - - - - -

const id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE - - - - - - - - - - - - - - - - - -

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS - - - - - - - - - - - - - - - - - -

const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR - - - - - - - - - - - - - - - - - -
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES - - - - - - - - - - - - - - - - - -
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

  // 016 Switches

  let day;

  switch(new Date().getDay()){
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  
  console.log(`Today is ${day}`);

  // 0XX FUNCTIONS - - - - - - - - - - - - - - - - - -
  // FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Doe'}
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS - - - - - - - - - - - - - - - - - -

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

//  - - - - - - - - - - - - - - - - - -

// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    console.log('Stop the loop');
    break;
  }

  console.log('Number '+ i);
}

// WHILE LOOP - - - - - - - - - - - - - - - - - -

let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

// DO WHILE

let i = 100;

do {
  console.log('Number ' + i);
  i++;
}

while(i < 10);

// LOOP THROUGH ARRAY - - - - - - - - - - - - - - - - - -
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOREACH - - - - - - - - - - - - - - - - - -
cars.forEach(function(car){
  console.log(car);
}); // use callback/ self-calling function

// OR ...
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});

// MAP - - - - - - - - - - - - - - - - - -
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);


// FOR IN LOOP - - - - - - - - - - - - - - - - - -
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}

// WINDOW METHODS / OBJECTS / PROPERTIES
// Alert
alert('Hello World');

// Prompt (alert with input)
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure')){
  console.log('YES');
} else {
  console.log('NO');
}

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY; // scroll up-down
val = window.scrollX; // scroll right-left

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';
//Reload
window.location.reload(); // keep reloading the page

// History Object
window.history.go(-2);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName; // always Netscape
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

// Global Scope, Local Scope
// Function Scope (inside function)
// Block Scope (inside if ..)
// 'var' is less secure than 'let'. The value of 'var' in global scope can be changed inside local scope.

 
// const, let, var
const name = "John";
// const name = "Alice"; // cannot redeclare
// name = "Alice"; // cannot reassign

let age = 30;
// let age = 35; // cannot redeclare
age = 35; // can reassign 

var city = "New York";
var city = "Ktm"; // can redeclare
city = "Pokhara"; // can reassign
// Hoisting
console.log(country); 
// Varaible scope
if(true){
    let fname = "Harry"; // scope bound 
    const lname = "Potter"; // scope bound
    var country = "USA"; // function/global
    console.log(fname, lname, country);
}
// console.log(fname); // invalid
console.log(country); // valid

// Data types/primitive
let strVar = "Hello"; // ``, '', "" string
let numVar = 20; // number (float or integer)
let boolVar = true;
let nullVar = null; // intended empty
let undefinedVar = undefined; // unintended empty
let symVar1 = Symbol("id"); // unique identifier
let symVar2 = Symbol("id"); // unique identifier
console.log(symVar1 === symVar2); // false
console.log(typeof strVar);
// ";" is optional 

// =, ==, === 
let num1 = 10; // = assign
let num2 = "10"; 
console.log(num1 == num2); // == loose compare
console.log(num1 === num2); // === strict compare

// collection
const arr1 = [ 1, 2, "three", true, null, undefined ];
console.log(arr1[2]); // three
arr1.pop() // remove from last
arr1.push("new item"); // add to last
arr1.shift(); // remove from first
arr1.unshift(0); // add to first
arr1.splice(2, 1); // remove from index 2, 1 item
console.log(arr1);

arr1[0] = "udated value"; 

// const arr1 = [1,2];
// arr1 = [3,4];

// "..." spread operator
// unpack/flatten
const arr2 = [ 10, 20, 30 ];
const arr3 = [ 60, 70, 80 ];
const arr4 = [arr2, arr3]; // nested array
console.log(arr4);
const arr5 = [...arr2, arr3]; 
console.log(arr5);
const arr6 = [...arr2, ...arr3]; 
console.log(arr6);
const arr7 = [...arr2, ...arr3, 90, ...[100, 200] ];
console.log(arr7);

// object (JSON)
const obj1 = {
    name: "John",
    'age': 30,
    "isActive": true,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        country: "Nepal",
        coord: [ 27.2, 38.2 ]
    }
}

// access key
console.log(obj1.name);
console.log(obj1["hobbies"]); // keys should be in quotes
// console.log(obj1[hobbies]) // invalid
obj1.name = "Alice"; // update value
obj1.gender = "male"; // add new key-value pair
console.log(obj1);

console.log(obj1.hobbies[0]);
// obj1.hobbies is array, treat like array
console.log(obj1.address.country); 

// change the obj1->addres->lat to 28.8, first index of coord
obj1.address.coord[0] = 28.8;

// Object missing properties
console.log(obj1.details); // undefined
// console.log(obj1.details.id); // error

// &&, ||, ??
obj1.details && console.log("Detail exists"); 
obj1.address && console.log("Address exists");
// if present -> run statement

obj1.details ?? console.log("Detail doesnot exists");
obj1.details || console.log("Detail doesnot exists");

const check = 0;
check || console.log("check is falsy"); 
// 0, false, null, undefined, "", NaN
check ?? console.log("check is nullish"); // null, undefined

// optional chaining ?.
console.log(obj1.details?.id); // undefined
console.log(obj1.details?.city.name.street); // ?

console.log(obj1.details?.city?.name?.street ?? "No Street");


// object destructuring
const { isActive } = obj1;
// const isActive = obj1.isActive;
console.log(isActive);
const { address: { country, coord } } = obj1;
console.log(country, coord);
const { hobbies: [ firstHobby, secondHobby ] } = obj1;
console.log(firstHobby, secondHobby);
const { name: fullName, age: years } = obj1;
console.log(fullName, years);
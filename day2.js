// functions
// 1. using keyword
function func1(arg1, arg2){
    return arg1 + arg2;
}
const result1 = func1(10, 20);
console.log(result1);

// 2. using variable 
const func2 = function(arg1, arg2){
    console.log(arg1 + arg2);
    // return is optional
}
const result2 = func2(10, 20);
console.log(result2); // undefined (if no return)

// 3. arrow function
const func3 = (arg1) => "Hello " + arg1; // implicit return
// auto return single line of statement
const result3 = func3("John");
console.log(result3); // Hello John

const func4 = (arg1) => {
    // multiple statements
    const val = "Hello " + arg1;
    return val; // doesnot auto return, need to manually return
}
const result4 = func4("Alice");
console.log(result4); // Hello Alice

// function scope in object
const obj2 = {
    name: "John",
    func1: function(){
        console.log(this.name); // this refers to the object
    },
    func2: () => {
        console.log(this.name); // annonymous, 
    }
}
obj2.func1(); // John
obj2.func2(); // undefined

// closure/ callback
// closure, function with state and returns function
const outerFunc = (initial) => {
    let counter = initial;
    const innerFunc = () => {
        counter++;
        return counter;
    }
    return innerFunc;
}
const counter1 = outerFunc(10);
console.log(counter1()); // 11
console.log(counter1()); // 12
// each has independent state
const counter2 = outerFunc(100);
console.log(counter2()); // 101

// callback/ HOF (higher order function)
// function that takes functon as an argument
const callbackFunc1 = (arg1, arg2, cb) => {
    return cb(arg1, arg2);
}
const funcImpl = (arg1, arg2) => arg1 + arg2;
const result5 = callbackFunc1(10, 20, funcImpl);
console.log(result5); // 30

const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
}
const addition = (num1, num2) => num1 + num2;
const substractio = (num1, num2) => num1 - num2;

const addResult = calculate(10, 20, addition);
const mulResult = calculate(10, 20, (num1, num2) => num1 * num2); // annonymous function

// callback function in iterators
const fruits = ["apple", "banana", "cherry", "mango"];
const howToIterate = (element, index, array) => {
    // in every iteration what to do
    console.log("Eating " + element);
    console.log("Index: " + index);
    console.log("Array: " + array);
}
// 1. forEach
fruits.forEach(howToIterate); // callback function
fruits.forEach( (elem, idx) => console.log(elem) ); // annonymous function
// (element, index, array) are optional, can use only element if not needed

// 2. map
// transform and return new array
const fruitsUpper = fruits.map( elem => elem.toUpperCase() ); 
// if single argument, no need to use () for parameter
console.log(fruitsUpper); // [ 'APPLE', 'BANANA', 'CHERRY', 'MANGO' ]
// map callback must have return value

// UI example
const liComponents = fruits.map(
    (elem, idx) => {
        let className;
        if(idx % 2 === 0){
            className = "even bg-light";
        }else{
            className = "odd bg-dark text-white";
        }
        return `<li key="${idx}" class="${className}">${elem}</li>`;
    }
);
console.log(liComponents);
// convert array to HTML tags, can be used in React or other modern frameworks

// find the bug
const newFruits = fruits.map(
    (element, idx) => {
       return element.toUpperCase();
    }
)

// 3. filter 
const bigFruits = fruits.filter( (elem, idx) => elem.length > 5 );
// filter callback must return boolean value
console.log(bigFruits); // [ 'banana', 'cherry' ]

// 4. reduce
// acumulate and return single value
const number = [ 10, 20, 30, 40, 50 ];
const sum = number.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0 // starting value of accumulator
);
// reduce callback must return the accumulator value
console.log(sum); // 150

const students = [
    { name: "John", mark: 80 },
    { name: "Alice", mark: 90 },
    { name: "Bob", mark: 50 }
];
// 1. use map to get list of names only ["John", "Alice", "Bob"]
// 2. use filter to get list of students with mark > 60
// 3. use reduce to get total marks of all students
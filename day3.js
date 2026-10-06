// Promises/(Future) in flutter
// console.log("1. Start");
// // Task Queue
// // Macro Task
// setTimeout(
//     () => {
//         console.log("2. Inside setTimeout");
//     }, // function to run after n milliseconds
//     0 // milliseconds 
// );
// // Micro Task
// Promise.resolve().then( () => console.log("3.1. Micro Task") );
// queueMicrotask( () => console.log("3.2. Micro Task") );

// console.log("4. End");

// Promise -> function that takes time
// used in file, network, database operations, i/o
const promise1 = () => new Promise(
    (resolve, reject) => {
        if(1 == 1){
            return resolve("Promise resolved");
        }else{
            return reject("Promise rejected");
        }
    }
);

// promise1()
// .then( (result) => console.log(result) ) // resolve
// .catch( (error) => console.log(error) ) // reject
// .finally( () => console.log("Promise completed") ); // after any

// inside a async function
const main = async () => {
    try{
        const result = await promise1();
        console.log("Without await");
        console.log(result);
    }catch(err){
        console.log("Error occured");
        console.log(err);
    }
}
main();

// isPositive with delay
const isPositive = (num) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if(num > 0){
                        return resolve("Positive number");
                    }else{
                        return reject("Negative number");
                    }
                }, // function to run after n milliseconds
                2000
            );
        }
    );
}
isPositive(10).then( (result) => console.log(result) );

// make a promise function isEven takes 1 args
// if even -> resolve("Even number") after 3 seconds
// if odd -> reject("Odd number") after 5 seconds
// 1. use .then() and .catch() to handle the result
// 2. also use async/await to handle the result

// execution of multiple promises
const task1 = () => new Promise(
    (resolve) => setTimeout(() => resolve("Task 1 completed"), 2000)
);
const task2 = () => new Promise(
    (resolve) => setTimeout(() => resolve("Task 2 completed"), 5000)
);

// sequential chaining
task1()
.then( (result) => {
    console.log(result); // task1 result
    return task2();
})
.then( (result) => console.log(result) ); // task2 result

const runTask = async () => {
    console.time("Sequential"); // profile time taken(start)
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    console.timeEnd("Sequential"); // profile time taken(end)
}
runTask();

const runTaskParallel = async () => {
    console.time("Parallel"); // profile time taken(start)
    const [result1, result2] = await Promise.all(
        [
            task1(), // in result1
            task2() // in result2
        ]);
    console.log(result1);
    console.log(result2);
    console.timeEnd("Parallel"); // profile time taken(end)
}
// time taken maximum of both tasks, not sum of both tasks
runTaskParallel();
// if one rejects, all fails

const runTaskResolveAll = async () => {
    console.time("ResolveAll"); // profile time taken(start)
    const [result1, result2] = await Promise.allSettled(
        [
            task1(), // in result1
            task2() // in result2
        ]);
    console.log(result1.value); // resolve/reject "value"
    console.log(result1.status); // resolve/reject "status"
    console.timeEnd("ResolveAll"); // profile time taken(end)
}
runTaskResolveAll();
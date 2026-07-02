// function a(){
//     console.log("A");
//     b();
//     console.log("1");
// }
// function b(){
//     console.log("B");
//     c();
//     console.log("2");
// }
// function c(){
//     console.log("C");
// }

// a();

// Output -> A B C 2 1


// console.log(1);
// setTimeout(function a(){
// console.log("A");
// },1000)
// setTimeout(function b(){
// console.log("B");
// },1000)
// Promise.resolve().then(function c(){
//     console.log("C");
// })
// Promise.resolve().then(function d(){
//     console.log("D");
// })
// Promise.resolve().then(function e(){
//     console.log("E");
// })
// console.log(2);

// Output -> 1 2 C D E A B


// This is called Starvation .


// console.log(1);

// setTimeout(function a(){
//     console.log("a");
// })

// Promise.resolve().then(function b(){
//     console.log("b");
// })

// Promise.resolve().then(function c(){
//     console.log(2);
//     setTimeout(function d(){
//         console.log("d");
//     })
// })

// console.log(3);
//  Output -> 1 3 b 2 a d




// console.log(1);

// Promise.resolve().then(function a(){
//     console.log(2);
//     setTimeout(function b(){
//         console.log(3);
//     },0)
// })

// setTimeout(function c(){
//     console.log(4);
//     Promise.resolve().then(function d(){
//         console.log(5);
//     })
// },0)
// console.log(6);


// Therotical Concepts 

/* 
1 .JS runs strictly on single thread (ie perform 1 task at a time ) but it is able to perform 
async operations beacouse of the runtime enviornment ( browser or node js is multithreaded)

2 . JS does not nhandle time cconsuming task like network , requests , timers , filesystem , etc on its 
own threaad , it delegates these tasks to hoistign enviornments , which handles them in bg

2 . CallStack -> this tracks what function currently executing . It handles sync code on single main 
thread , following LIFO structure

3 .  Web API's / NOde .js Api's -> these are background enviournment provide by the browser or node .js 
they run seperate native threads to handle tasks like fetch() , setTimeout() etc.
Once the background API's is completd its task it moves the attached callback function to its respective queue

4 . Macro task quweue -> handles large peice of work eg setTimeout , setInterval , UI rendering events etc.

5 . MIcro task queue -> handles smaller and urgent tasks that need to run immediately after the current 
execution .

Micro task queue has more performance that Macro task queue -> callbacks inside tsak will wait 
until everything inside micro task queue has completed its execution

6.EventLoop -> carries out the whole process by checking continously if the call Stack is empty
or not
*/

// Starvation -> in the below code setTimout will be inside that macrotask queue waiting / starving 
// for microservice queue to be empty but it wont in the below example as again keeps getting added 
// inside your microtask queue 
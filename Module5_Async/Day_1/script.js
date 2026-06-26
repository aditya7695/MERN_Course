// setTimeout

// setTimeout(useCallback,time)
// console.log("Start");
// console.log("1");
// setTimeout(() => {
//     console.log("Heavy operation");
// }, 5000);
// console.log("End");

// sync operations -> line by line exexcution of the code ie. blocks the next line until it finishes.
// Async operations -> runs in the background.

// with Arguments
// function greet(name){
//     console.log("Hello "+name);
// }

// setTimeout(() => greet("Aditya"), 3000);

// console.log("Start");
// setTimeout(()=>{
//     console.log("Time1");
// },2000)
// setTimeout(() => {
//     console.log("Time2");
// }, 100);
// setTimeout(() => {
//     console.log("Time3");
// });
// console.log("End");

// console.log("Start");                          Start
//                                                 End
//                                                 Time3
//                                                 Time4
//                                                 Time1
//                                                 Time2
// setTimeout(()=>{
//     console.log("Time1");
// },2000)
// setTimeout(() => {
//     console.log("Time2");
// }, 2000);
// setTimeout(() => {
//     console.log("Time3");
// });
// setTimeout(() => {
//     console.log("Time4");
// });
// console.log("End");


// let timerId = setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// console.log(timerId);

// clearTimeout(timerId)




// SetInterval

// setInterval(() => {
//     console.log("Hello");
// }, 1000);




// function clockUpdate(){
//     const now = new Date();
//     document.getElementById('clock').innerText = now.toLocaleTimeString();
// }

// let intervalId = setInterval(clockUpdate,1000);

// setTimeout(()=>{
//     clearInterval(intervalId)
// },5000)


const startBtn = document.getElementById('startTimer')
const stopBtn = document.getElementById('stopTimer')
let count=0;
let intervalId=null;
startBtn.addEventListener('click',()=>{
    if(intervalId == null){
        intervalId=setInterval(()=>{
        document.getElementById('timer').innerText=count++;
    },1000)
}
})
stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
})

const toggleBtn = document.getElementById('toggleBtn');
const timerDiv = document.getElementById('timer-container');

toggleBtn.addEventListener('click',()=>{
    timerDiv.classList.toggle('d-none');
    clearInterval(intervalId);
    intervalId = null;
})



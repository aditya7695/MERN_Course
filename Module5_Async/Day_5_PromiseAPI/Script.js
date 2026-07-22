// async function testing(){
//     try{
//         let res = await Promise.all([
//             fetch("https://api.github.com/users/iliakan"),
//             fetch("https://api.github.com/uses/remy"),
//             fetch("https://api.github.com/users/jeresig")
//         ])
//         const dataArray = await Promise.all(res.map(item =>item.json()));
//         console.log(dataArray.map(item => item));
//     }catch(err){
//         console.log(err);
//     }
// }
// testing();

// Promise.allSettled([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("A")
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("B")
//         }, 2000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("C")
//         }, 1000);
//     })
// ]).then((item)=>console.log(item))
// .catch((err)=>console.log(err))

// Promise.allSettled just waits for all promises  to settle
// regardless of its result(unlike Promise.all which 
// stops as soon as a promise is rejected)

// Promise.race([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("A")
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("B")
//         }, 200);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("C")
//         }, 1000);
//     })
// ]).then((item)=>console.log(item))
// .catch((err)=>console.log(err))

// B

// Promise.race give me the first promise that 
// Settels (i.e it does not care if the promise 
// fullfilled or rejected)


// Promise.any([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("A")
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("B")
//         }, 200);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("C")
//         }, 1000);
//     })
// ]).then((item)=>console.log(item))
// .catch((err)=>console.log(err))

// C

// Promise.any give me the result of 1st promise 
// that resolves or fullfills

// async function testing(){
//     try{
//         let res = await Promise.any([
//             fetch("https://jsonplaceholder.typicode.com/posts"),
//             fetch("https://jsonplaceholder.typicode.com/comments"),
//             fetch("https://jsonplaceholder.typicode.com/users")
//         ])
//         const data = await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// testing();




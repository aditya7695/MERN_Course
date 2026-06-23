// //  Local storage

// // LocalStorage --> its a browser storage given to a website that allows 
// // persistant key value pairs with no expiration time
// // the data survives when the broser restarts and it is accessible accross all 
// // tabs/windows of the same origin

// // Storing value in local storage

// // // localStorage.setItem(<key>,<value>)
// // localStorage.setItem("name","Aditya");

// // // Fetching values from loacal storage 

// // let value = localStorage.getItem('name')
// // console.log(value);

// // localStorage.setItem('name1','Pritesh')
// // localStorage.setItem('name1','Prajwal')

// // let value1 = localStorage.getItem('name1')
// // console.log(value1);


// // reset values of local storage

// // localStorage.setItem('name1',"");

// // // removing specific key value pair from local storage

// // localStorage.removeItem('name1');

// // console.log(localStorage.length);

// // // removing all your key value pairs

// // localStorage.clear();

// // if(navigator.storage && navigator.storage.estimate){
// //     navigator.storage.estimate().then(est => {
// //         console.log(`Used : ${est.usage} of ${est.quota} bytes`);
// //     })
// // }


// //  The below code will run when 

// localStorage.setItem("number",JSON.stringify(5))
// localStorage.setItem("Array",JSON.stringify([1,2,3,4,5,6,7]))
// localStorage.setItem("Object",JSON.stringify({name:"Aditya"}))

// document.addEventListener('DOMContentLoaded',()=>{
//     console.log(JSON.parse(localStorage.getItem(('number'))));
//     console.log(JSON.parse(localStorage.getItem(('Array'))));
//     console.log(JSON.parse(localStorage.getItem(('Object'))));
// })



// Counter with Local storage

// const increaseBtn = document.getElementById('inc')
// const deacreaseBtn = document.getElementById('dec')
// const display = document.querySelector('h1')
// let count= JSON.parse(localStorage.getItem('counter')) || 0;
// display.innerHTML=count;
// increaseBtn.addEventListener('click',()=>{
//     count ++;
//     display.innerHTML=count;
//     localStorage.setItem('counter', JSON.stringify(count))
// })
// deacreaseBtn.addEventListener('click',()=>{
//     count --;
//     display.innerHTML=count;
//     localStorage.setItem('counter', JSON.stringify(count))
// })


// Session Storageeeee

// persistes : until tab / window is closed

// scope single tab

// storage linit = 5-10 mb

// use case temporary session data

// note :  both local and session storage can survive the reload

sessionStorage.setItem('name','aditya')

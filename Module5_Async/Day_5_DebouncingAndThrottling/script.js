// // const debounce = (fn,delay) =>{
// //     let timerId ; 
// //     return function(...args){
// //         clearTimeout(timerId);
// //         timerId = setTimeout(()=>{
// //             fn(...args)
// //         },delay)
// //     }
// // }
// // const search = (query) =>{
// //     document.getElementById('result').textContent="Searching for : "+query
// //     console.log("Searching for : "+query);
    
// // }
// // const searchWithDebounce = debounce(search,400);
// // const input = document.getElementById('searchInput');
// // input.addEventListener('input',(e)=>{
// //     searchWithDebounce(e.target.value)  
// // })

// // Throttling.        

// // const throttle = (fn,delay) =>{
// //     let lastCall = 0;
// //     return function(...args){
// //         const now = Date.now();
// //         if(now-lastCall < delay){
// //             return
// //         }
// //         lastCall = now
// //         return fn(...args)
// //     }
// // }
// // const burstShoot = () =>{
// //     console.log("Shoot");
// // }
// // const shootWithThrottle = throttle(burstShoot,1000)
// // const shoot = document.getElementById('shoot');
// // shoot.addEventListener('click',(e)=>{
// //     shootWithThrottle();
// // })

// //  const ul = document.querySelector('ul');

// // const debounce = (fn,delay) =>{
// //     let timerId ; 
// //     return function(...args){
// //         clearTimeout(timerId);
// //         timerId = setTimeout(()=>{
// //             fn(...args)
// //         },delay)
// //     }
// // }
// // async function fetchData(value){
// //     const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${value}`);
// //     const data = await res.json();
// //     data.map(item =>{
// //         const li = document.createElement('li');
// //         li.textContent=item.name;
// //         ul.appendChild(li)
// //     })
   
// // }
// // const searchWithDebounce = debounce(fetchData,1000);

// // const input = document.getElementById('searchInput');
// // input.addEventListener('input',(e)=>{
// //     searchWithDebounce(e.target.value)
// // }).

// // 





























// // const Debounce = (fn,delay) =>{
// //     let timerId ;
// //     return function(...args){
// //         clearTimeout(timerId);
// //         timerId = setTimeout(()=>{
// //             fn(...args)
// //         },delay)
// //     }
// // }

// // const search = (query) =>{
// //     document.getElementById('result').textContent = "Searching for " + query;  
// // }

// // const searchWithDebounce = Debounce(search,1000)

// // const input = document.getElementById('searchInput')
// // input.addEventListener('input',(e)=>{
// //     searchWithDebounce(e.target.value)
// // }
// // )






// // const throttle = (fn,delay) =>{
// //     let lastCall = 0;
// //     return function(...args){
// //         const now = Date.now();
// //         if(now-lastCall < delay){
// //             return
// //         }
// //             lastCall = now
// //             return fn(...args)
// //     }
// // }
// // const burstShoot = () =>{
// //     console.log("Shoot") 
// // }
// // const shootWithThrottle = throttle(burstShoot,500);
// // const button = document.getElementById('shoot')
// // button.addEventListener('click',()=>{
// //     shootWithThrottle();
// // })








// // const debounce = (fn,delay) =>{
// //     let timerId;
// //     return function(...args){
// //         clearTimeout(timerId);
// //         timerId = setTimeout (()=>{
// //             return fn(...args)
// //         },delay)
// //     }
// // }

// // const search = (query) =>{
// //     document.getElementById('result').textContent = "Searching for " + query
// // }

// // const searchWithDebounce = debounce(search,500)

// // const input = document.getElementById('searchInput');
// // input.addEventListener('input',(e)=>{
// //     searchWithDebounce(e.target.value)
// // })










// // const throttle = (fn,delay) =>{
// //     let lastCall = 0;
// //     return function(...args){
// //         const now = Date.now()
// //         if(now-lastCall < delay){
// //             return 
// //         }
// //         lastCall = now;
// //         return fn(...args)
// //     }
// // }


// // const burstShoot = () =>{
// //     console.log("Shoot")
// // }

// // const shootWithThrottle = throttle(burstShoot,500)

// // const button = document.getElementById('shoot')

// // button.addEventListener('click',()=>{
// //     shootWithThrottle();
// // })










// const debounce = (fn,delay) =>{
//     let timerId;
//     return function(...args){
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             return fn(...args)
//         },delay)
//     }
// }

// const search = (query) => {
//     document.getElementById('result').textContent = "searching for " + query
//     console.log("searching for " + query)
// } 

// const searchWithDebounce = debounce(search,500);

// const input = document.getElementById('searchInput')
// input.addEventListener('input',(e)=>{
//     searchWithDebounce(e.target.value)
// })


















// Throttle



// const throttle = (fn,delay) =>{
//     let lastCall = 0;
//     return function(...args){
//             const now = Date.now()
//             if(now-lastCall < delay){
//                 return
//             }
//             lastCall = now
//             return fn(...args)
//     }
// }

// const burstShoot = () =>{
//     console.log("Shoot")
// }

// const shootWithThrottle = throttle(burstShoot,1000)

// const button = document.getElementById('shoot')

// button.addEventListener('click',()=>{
//     shootWithThrottle();
// })






// Debounce




// const debounce = (fn,delay) =>{
//     let timerId;
//     return function(...args){
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             return fn(...args)
//         },delay)
//     }
// }


// const search = (query) =>{
//     document.getElementById('result').textContent = "Searching for " + query
// }

// const searchWithDebounce = debounce(search,500)

// const input = document.getElementById('searchInput')

// input.addEventListener('input',(e)=>{
//     searchWithDebounce(e.target.value)
// })

// setTimeout(function one(){
//     console.log(1);
//     setTimeout(function two(){
//         console.log(2);
//         setTimeout(function three(){
//             console.log(3);
//         },2000)
//     },2000)
// },2000)


// function a(callback){
//     setTimeout(()=>{
//         console.log(1);
//         if(callback)callback();
//     },2000)
// }
// function b(callback){
//     setTimeout(()=>{
//         console.log(2);
//         if(callback)callback();
//     },2000)
// }
// function c(){
//     setTimeout(()=>{
//         console.log(3);
//     },2000)
// }
// a(()=>{
//     b(()=>{
//         c()
//     })
// });



// Async operation are getting executed in particular order
// the next async operation is dependant on the execution of 1st async operation🧀

// function getCheese(callback){
//     setTimeout(()=>{
//         const cheese='🧀';
//         console.log('here is the ',cheese);
//         callback(cheese)
//     },2000)
// }

// function makeDough(cheese,callback){
//     setTimeout(()=>{
//         const dough = cheese + '🍩';
//         console.log('here is the ',dough);
//         callback(dough)
//     },2000)
// }

// function getPizza(dough){
//     setTimeout(()=>{
//         const pizza = dough + '🍕'
//         console.log('here is the ',pizza);
//     },2000)
// }

// getCheese((cheese)=>{
//     makeDough(cheese,(dough)=>{
//         getPizza(dough)
//     })
// })


// Promise


// const promise1 = new Promise(function(resolve,reject){
//     // do async task
//     // DB call ,cryptography etc

//     setTimeout(()=>{
//         console.log("Async taskk is completed");
//         resolve();
//         // reject();
//     },1000)
// }).then(()=>{
//     // this will be execued only when the resolved is called
//     console.log("Promise is resolved");
// })

// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Data is fetching');
//         let error = falses;
//         if(!error){
//         data = {name:"Aditya",age:20};
//         resolve(data);
//         }else{
//         reject("Something went wrong");
//         }
//     },1000)
// }).then((user)=>{
//     console.log("Promise is resolved",user.name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("promise is executed");
// })


// const promise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Data is fetching');
//         data = {name:"Aditya",age:20};
//         resolve(data);
//     },1000)
// }).then((user)=>{
//     console.log("Promise is resolved",user.name);
//     return user;
// }).then((user)=>{
//     console.log(user.name);
//     return user;
// }).then((user)=>{
//     console.log(user.age);
// })



function getCheese(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        const cheese='🧀';
        console.log('here is the cheese ',cheese);
        res(cheese)
    },2000)
    })
}

function makeDough(cheese){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
        const dough = cheese + '🍩';
        console.log('here is the dough ',dough);
        res(dough)
    },2000)
    })
   
}

function getPizza(dough){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const pizza = dough + '🍕'
            console.log('here is the pizza ',pizza);
            res();
        },2000)
    })
}

getCheese().then((cheese)=>{
    return makeDough(cheese)
}).then((dough)=>{
    return getPizza(dough)
})

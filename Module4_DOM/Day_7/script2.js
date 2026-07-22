// this it refers to the object or the 
// context where thw current code is executing
// let obj = {
//     name:"Aditya",
//     a:10,
//     b:55,
//     greet:function(){
//         console.log("hello " + this.name);
//     },
//     sum:function(){
//         console.log(this.a + this.b);
//     },
//     mul(){
//         console.log(this.a * this.b);
//     }
// }
// obj.greet()
// obj.sum()
// obj.mul()

// let obj={
//     name : "Aditya",
//     obj1 : {
//         name : "Prajwal",
//         func(){
//             console.log(this.name);
//         }
//     }
// }

// obj.obj1.func()

// function func(){
//     console.log(this.name);
// }

// let obj1={
//     name : "Aditya",
//     greet : func
// }
// let obj2 = {
//     name : "Ubale",
//     greet : func
// }

// obj1.greet()
// obj2.greet()



//  Call bind and apply

// In js call bind and apply are built in methods used to 
// explicitely set the execution context ie. sets the "this" inside function
// in simple words -> they allow us to borrow the this of an object to be used inside a function

const person1 = {
    name : "Aditya",
    age : 22
}
const person2 = {
    name : "Ashish",
    age : 23
}

function intro(city,country){
    return `${this.name} is ${this.age} years old from ${city} , ${country}`
}

// Call();
console.log(intro.call(person1 , "Pune" , "India"));

// Apply();

console.log(intro.apply(person2 , ["Mumbai","India"]));

// Bind();

const introPerson1 = intro.bind(person1);
console.log(introPerson1("Delhi","India"));


// const counter = {
//     count : 0,
//     increment : function(){
//         this.count++;
//         console.log(this.count);
//     }
// }

// let func = counter.increment.bind(counter)
// func()
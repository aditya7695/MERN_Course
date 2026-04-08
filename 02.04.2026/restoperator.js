// Rest operator

/* function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4,5,6));  // 3 */


/* function sumAll(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumAll(1,2,3,4,5,56)); */
/*let a=0;
let b=0;
let args=0;
function sumAll(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
sumAll(1,12,3,4,56); */

//. Spread operator

/* let arr=[1,2,3,4,5,6,7];
console.log(Math.max(...arr)); //7 */

/* let arr1=[1,2];
let arr2=[3,4,5];

let arr3=[...arr1,...arr2];

console.log(arr3);

console.log(Math.max(...arr1,...arr2)); */

/* let str="Hello";
console.log([...str]); */

////////////////////. Spread operator with object /////////

/* let student={name : "Aditya",marks : 90};
let obj={...student};
console.log(obj); */

/* let student={name : "Aditya",marks : 90};
let obj={...student,gender:"Male"};
console.log(obj); */

/* let student={name : "Aditya",marks : 90};
let obj={...student , marks : 100, gender : "Male"};
console.log(obj); */

/* let students = [
  { name: "pranav", marks: 50, skills: { arr: ["js", "html", "python"] } },
  { name: "sourav", marks: 100, skills: { arr: ["js", "python"] } },
  { name: "ansh", marks: 5, skills: { arr: ["js"] } },
  { name: "pragya", marks: 80, skills: { arr: ["js", "html", "python", "c++"] }},
  { name: "swathi", marks: 45, skills: { arr: ["js", "html", "python"] } },
];
for(let i=0;i<students.length;i++){
    console.log(students[i]);
} */



////////////// Shallow Copy. /////////////////////
/* 
let obj = {
    a:"a",
    b:"b",
    c:{
        see:"c"
    }
}
let obj2={...obj};
obj2.a="A";
console.log(obj);
console.log(obj2);

obj2.c.see="C";
console.log(obj);
console.log(obj2); */

////////////////////// Deep Copy ///////////////

// let obj={
//     a:"a",
//     b:"b",
//     c:{
//         see:"c"
//     }
// }
//.    Method 1 of making deep copy 

/* let obj2=JSON.parse(JSON.stringify(obj));
obj2.c.see="C";
console.log(obj);
console.log(obj2); */

//.     Method 2 of making deep copy

/* let obj2 = structuredClone(obj);
obj2.c.see="C";
console.log(obj);
console.log(obj2); */

/////////////// Destructuring of Array //////////////////////

/* let fruits=["Mango","Apple","Banana"];
let [first,second,third]=fruits;
console.log(first);
console.log(second);
console.log(third);

/* let nums = [10,20,30,40,50]
let [a,b,c]=nums
console.log(a);
console.log(b);
console.log(c); */

/* let nums = [10,20,30,40,50]
let [a,,c]=nums
console.log(a);
// console.log(b);
console.log(c); */ 

/* let nums2=[1,2,3,4,5,6];
let [first,second,...remaining]=nums2;
console.log(first);
console.log(second);
console.log(remaining); */

//. In above example we have used rest operator as it apllied on multiple values.


/////////////// Destructuring of Object //////////////////////

/* let student={
    name:"Aditya",
    age:21,
    cousre:"MERN"
}
// let {name,age}=student;
// console.log(name);
// console.log(age);

let {name:studentName, age:studentAge} = student;
console.log(studentAge);
console.log(studentName); */
/* 
let employee = {
    id:100,
    address : {
        city : "Pune",
        state : "Maharashtra"
    }
}
let {address:{city,state}}=employee;
console.log(city);
console.log(state); */


// map () is used when you want to create a new array by using the values of the original array.

// 1. It does not affect the original array.
// 2. It always return the new array.
// 3. The output length is usually the same as input length. 

// ex1

/* const numbers = [1,2,3,4,5];
const doubled = numbers.map((item)=>item*2);
console.log(doubled);
console.log(numbers);

 */

// ex 2

/* const names = ["aditya" , "prajwal" , "Uddhav"]
const result = names.map((item)=>item.toUpperCase());
console.log(result); */

// ex 3 add $ sign infront of the prices 

/* const prices = [100,200,300]
const result = prices.map((items)=>"$"+items)
console.log(result); */

// ex 4 50 above is pass and below is fail

/* const students = [
    {name : "Anita" , marks : 78},
    {name : "Ravi" , marks : 45},
    {name : "Meena" , marks : 92}
]

let result = students.map((item)=>{
    if(item.marks>50){
        return {studentsName : item.name , result : "Pass"}
    }else{
        return {studentsName : item.name , result : "Fail"}
    }
   } )
   console.log(result);

*/
// ....................... FILTER. ..............

/* let arr = [1,2,3,4,5,6,7]

let evenElement = arr.filter((item) =>{
    if(item % 2 == 0){
        return true
    }
})
console.log(evenElement);

 */

// ex 1give a list of all elements above 50

/* let arr = [50,30,40,60,80,90]

let result = arr.filter((item)=> item > 50)
console.log(result);
 */

// ex 2 
/* 
const users = [
    {name : "Asha" , isActive : true},
    {name : "Ravi" , isActive : false},
    {name : "Kiran" , isActive : true}
]

const result = users.filter((items) => items.isActive==true)
const nameOfUser = result.map((items) => items.name)
console.log(result);
console.log(nameOfUser); */

// ex 3
// apply search filter 
// lets say user given input ap
// the filtered list should be ["apple","apriot","grape]

/* const items = ["apple","banana","apricot","orange","grape"]
let result = items.filter((i)=>i.includes("ap"))
console.log(result); */





















// Reduce 

/* let arr = [1,2,3,4,5]
let result = arr.reduce((acc,current)=>acc+current,0)
console.log(result);
 */
/* let arr = [1,2,3,4,5];
const result = arr.reduce((acc,current)=>{
   console.log("current",current);
   console.log("acc",acc);
   return acc+current
},0)
console.log(result); */
// if you not specify the value of accumulator it will take the value of arr[0] 

/* let arr = [1,2,3,4,5]
const result = arr.reduce((acc,current)=>acc*current,1)
console.log(result); */

/* const cart = [
    {item : "shirt" , price : 700},
    {item : "jeans" , price : 1500},
    {item : "shoes" , price : 2500}
]

const result = cart.reduce((acc,current)=>acc+current.price,0)
console.log(result); */


/* let fruits = ["apple" , "banana" , "apple" , "orange" , "banana" , "apple"]
let obj={}
for(let i=0 ; i<fruits.length ; i++){
    let word = fruits[i]
    if(obj[word]){
        obj[word]++
    }else{
        obj[word]=1
    }
}
console.log(obj);
 */


/* let fruits = ["apple" , "banana" , "apple" , "orange" , "banana" , "apple"]
const result = fruits.reduce ((acc,current)=>{
   acc[current] = (acc[current]||0)+1
   return acc
},{})

 */


/* const words = ["Hi" , "Aditya" , "this" , "side"]
const result = words.reduce((acc,current)=>acc+current+" ","")
console.log(result); */





















const employees = [
  { id: 1, name: "Ananya", dept: "Engineering", salary: 75000, age: 28, skills: ["JS", "React", "Node"] },
  { id: 2, name: "Rohan", dept: "Design", salary: 52000, age: 34, skills: ["Figma", "CSS", "HTML"] },
  { id: 3, name: "Priya", dept: "Engineering", salary: 95000, age: 31, skills: ["JS", "Python", "AWS"] },
  { id: 4, name: "Karan", dept: "HR", salary: 48000, age: 26, skills: ["Excel", "Communication"] },
  { id: 5, name: "Meera", dept: "Design", salary: 61000, age: 29, skills: ["Figma", "Illustrator", "CSS"] },
  { id: 6, name: "Dev", dept: "Engineering", salary: 82000, age: 38, skills: ["Java", "AWS", "Docker"] },
];

//  Q 1
/* const result = employees.map((items)=>items.name)
console.log(result); */

// Q 2
/* const result = employees.filter((items)=>items.dept=="Engineering").map((items)=>items.name)
console.log(result); */

// Q 3
/* const result = employees.reduce((acc,current)=>acc+current.salary,0)
console.log(result); */

// Q 4
/* const result = employees.reduce((acc,current)=>{
    if(acc.salary<current.salary){
        acc=current
    }
    return acc
})
console.log(result.name); */

// Q 5 
/* let result = employees.map((items)=>items)
result.sort((a,b)=>{return b.salary-a.salary})
console.log(result);
console.log(employees); */

// Q 6 
/* let count = 0;
const result = employees.filter((items)=>{
    if(items.salary>70000 && items.dept == "Engineering" ){
         count ++;
    }
})
console.log(count); */

// Q 7

/* let arr=[]
const result = employees.reduce((acc,current)=>{
    if(!acc.includes(current.dept)){
         acc.push(current.dept)
    }
    return acc
},[])
console.log(result); */
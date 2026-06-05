// Q 1 Right angled triangle

/* let n=5;
for(let i=0 ; i<n ;i++){
    let row = ""
    for(let j=i ; j<n ; j++){
        row+=" "
    }
     for(let k=0 ; k<i ; k++){
        row += "*"
     }
    console.log(row);
} */


// Q 2 Inverted Right Angled triangle

/* let n=5;
for(let i=n ; i>=0 ;i--){
    let row = ""
    for(let j=0 ; j<i ; j++){
        row+="*"
    }
    console.log(row);
}
 */
// Q 3  Cetered Pyramid 

/* let n=5
for(let i=1 ; i<=n ; i++){
     let row = ""
     for (let j = 1 ; j <= n-i ;j++){
        row +=" "
     }
     for (let k=1 ; k<=i*2-1 ; k++){
        row +="*"
     }
     console.log(row);
}
 */

// Q 4 Diamond Pattern


/* let n=5
for (let i=1;i<=n;i++){
    let row =""
    for(let j=1 ; j<= n-i ;j++){
        row +=" "
    }
    for (let k=1 ; k<=i ; k++){
        row +=" *"
    }
    console.log(row);
} */


// Q 5 

/* 
let arr=[1,2,3,4,5]
const result=arr.map((items)=>items**2)
console.log(result); */

/* let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let left=0;
let top=0;
let right=arr[0].length-1;
let bottom=arr.length-1;
let result=[]

for(i=left ; i <= right ; i++){
      result.push(arr[left][i])
} top ++;
for(let i= top ; i<=bottom ; i++){
     result.push(arr[i][right])
} right --;
for(let i=right ; i >= left ; i--){
    result.push(arr[bottom][i])
} bottom --;
for(let i=bottom ; i>= top ; i--){
    result.push(arr[i][left])
} left ++;

console.log(result); */

/* let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let left=0;
let right = arr[0].length-1;
let result = [];

for(let i=0 ; i<arr.length ; i++){
    if(i%2==0){
        for(let j=left ; j<= right ;j++){
            result.push(arr[i][j]);
        }
    }else{
        for(let j=right ; j>=left ;j--){
            result.push(arr[i][j])
        }
    }
}
console.log(result); */

/* let map=new Map();
map.set(101,"Aditya")
console.log(map) */;
/* 
let username = ['aditya' , 'ashish' , 'aditya' , 'sneha' , 'ashish'];

let set2 = new Set(username);
console.log(set2);
console.log([...set2]); */

  const employees = [
  { id: 1, name: "Ananya", dept: "Engineering", salary: 75000, age: 28, skills: ["JS", "React", "Node"] },
  { id: 2, name: "Rohan", dept: "Design", salary: 52000, age: 34, skills: ["Figma", "CSS", "HTML"] },
  { id: 3, name: "Priya", dept: "Engineering", salary: 95000, age: 31, skills: ["JS", "Python", "AWS"] },
  { id: 4, name: "Karan", dept: "HR", salary: 48000, age: 26, skills: ["Excel", "Communication"] },
  { id: 5, name: "Meera", dept: "Design", salary: 61000, age: 29, skills: ["Figma", "Illustrator", "CSS"] },
  { id: 6, name: "Dev", dept: "Engineering", salary: 82000, age: 38, skills: ["Java", "AWS", "Docker"] },
]; 
/*
 Q1. Get all employee names as an array.
Q2. Filter employees who belong to the "Engineering" department.
Q3. Calculate the total salary of all employees.
Q4. Find the employee with the highest salary.
Q5. Sort employees by salary in descending order (do not mutate the original).
Q6. Count how many Engineering employee earns more than 70,000.
Q7. Get a list of unique departments.
Q8. Find the average salary per department.
Q9. Get employees who know "CSS" as a skill.
Q10. Add a seniorityLevel property to each employee: "Senior" if age >= 30, else "Junior". */
// const result = employees.map((items)=>items.name)
// console.log(result);
// const result = employees.reduce((acc,current)=>acc+current.salary,0)
// console.log(result);
// const result = employees.filter((items)=>items.dept=="Engineering").map((items)=>items.name)
// console.log(result);
// const result = employees.reduce((acc,current)=>{
//     return (acc.salary > current.salary) ? acc : current
// }
// )
// console.log(result);

/* const result = employees.map((items)=>items)
result.sort((a,b) => b.salary-a.salary)
console.log(result);
 */
/* 
const result = employees.filter((items)=> items.dept=="Engineering" && items.salary>70000)
console.log(result.length); */

/* const result = employees.reduce((acc,current)=>{
    if(!acc.includes(current.dept)){
      acc.push(current.dept)
    }
    return acc
},[])
console.log(result);
 */


/* const deptStats = employees.reduce((acc, current) => {
  if (!acc[current.dept]) {
    acc[current.dept] = { totalSalary: 0, count: 0 };
  }
  acc[current.dept].totalSalary += current.salary;
  acc[current.dept].count += 1;
  return acc;
}, {});
const averageSalaryPerDept = {};
for (const dept in deptStats) {
  averageSalaryPerDept[dept] = deptStats[dept].totalSalary / deptStats[dept].count;
}
console.log(averageSalaryPerDept);
 */
/* for(let i=5 ; i<6 ; i++){
    for(let j=1 ; j<=10 ; j++){
        console.log(i + " X " + j +" = "+ i*j);
    }
} */


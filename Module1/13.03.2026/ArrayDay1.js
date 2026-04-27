/* let l=10;
let b=20;

function area(length,width){
    console.log("Hello");
    areaValue=length*width;
    return areaValue;
    console.log("Hello2");
}
console.log(area(l,b));
console.log(area(20,5)); */

/* let arr=[1,2,3,4,5];
for(let i=0 ; i<arr.length ; i++){
    arr[i]=arr[i]*6;
}
console.log(arr); */

/* let arr=[1,2,3,4,5,6];
let sum=0;
for (let i=0 ; i<arr.length ; i++){
    sum = sum +arr[i];  
}
console.log(sum); */
/* 
let num =8;

for (let i=2 ; i<=num ; i++){
    let isPrime=true;
    for (let j=2 ; j < i ; j++){
        if(i % j === 0){
            isPrime=false;
            break;
        }
    }
    if (isPrime){
        console.log(i);
    }
} */

/* const students = [
    {name : "Amit" , math : 80 , science : 82 , english : 90},
    {name : "Sneha" , math : 88 , science : 75 , english : 86 },
    {name : "Ravi" , math : 92 , science : 90 , english : 85 }
]
function abc(students){
    for (let i=0 ; i < students.length ; i++){
        let name=students[i].name;
        let total = students[i].math + students[i].science + students[i].english;
        let average = total / 3;
        console.log(`${name}-> Total : ${total} , Average : ${average.toFixed(2)}`);
 
    }
}
abc(students);
 */


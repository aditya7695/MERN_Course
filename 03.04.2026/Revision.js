/* let arr=[1,2,[3,4]];
console.log(arr.flat());

let arr1=[1,[2,[3,[4]]]];
console.log(arr1.flat());
console.log(arr1.flat(2));
console.log(arr1.flat(3));

console.log(arr1.flat(Infinity)); */



////////////////////// Const Array and objects /////////////////////

/* const a=4;
a=8;

const arr=[1,2,3,4,5];
arr=[3,9,8] */
// with const the variables cannot be reassigned but the element sexising array can be modified 
/* const arr1=[1,2,3,4,5,5];
arr1[0]=10;
console.log(arr1); */

/* const obj ={name : "Aditya"}
obj.mobileNumber=7972969880;
console.log(obj);
 */
//....................Question 1..............
/* let totalFoodCost=0;
let discountPercent=0;
let tipPercent=0;

function calculateBill(totalFoodCost,discountPercent,tipPercent){
    let discountedTotal=totalFoodCost-(totalFoodCost*discountPercent)/100;
    let tipAmount=(discountedTotal*tipPercent)/100;
    let finalTotal=discountedTotal+tipAmount;
    let obj={
        discountedTotal:discountedTotal,
        tipAmount:tipAmount,
        finalTotal:finalTotal    
    }
    return obj;
}
console.log(calculateBill(200,10,15));

 */

//......................Question 2.............................

// let end=0;
/* function fizzBuzzRange(start,end){
    for(let i=start ; i<=end ; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzzRange(10,20); */


//......................Question 3.............................

/* let arr=["cat" , "elephat" , "dog" , "butterfly"];
function largest(arr){
let max=arr[0];

for(let i=0 ; i<arr.length ; i++){
      if(arr[i].length>max.length){
        max = arr[i];
      }

}return max;
}
console.log(largest(arr)); */



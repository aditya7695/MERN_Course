// you are given array and size write a function to split the array into the given sizes=3
/* let arr=[1,2,3,4,5,6,7,8,9,11,12];
let size=3;
function splitArray(arr,size){
    let result=[];

    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
    }
    return result;

}
console.log(splitArray(arr,size)); */

//..................SLICE.......................

/* let arr=[1,2,3,4,5,6];
let arr1=arr.slice(1,3);

console.log(arr);
console.log(arr1); */

//..................SPILCE.......................

/* let arr=[1,2,3,4,5,6,7,8];
console.log(arr.splice(2,3,10,20));
console.log(arr.splice(0));
console.log(arr);
 */
/* 
let arr=[1,2,0,5,"a",null,undefined,10,""];
for (let i=arr.length;i>=0;i--){
    if(!arr[i]){
        arr.splice(i,1);
    }
}
console.log(arr); */

//..................indexOF.......................

/* let arr=["Apple" , "Banana" , "Orange" , "Mango"];
console.log(arr.indexOf("Mango")); */

/* let arr=["apple" , "kiwi" , "banana"];
arr.splice(arr.indexOf("kiwi"),1);
console.log(arr); */

//..................includes.......................

/* let arr=["apple","banana","orange"];
console.log(arr.includes("apple"));
console.log(arr.includes("strawberry")); */

//..................CONCAT.......................
/* 
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
let result=arr1.concat(arr2,arr3);
console.log(arr1);
console.log(arr2);
console.log(result); */


//..................Reverse...............
/* let arr=[1,2,3,4,5,6,7,8];
console.log(arr.reverse()); */


/* const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);
console.log(C);

const D = A.intersection(B);
console.log(D);

const E = A.difference(B);
console.log(E);


const F = B.difference(A);
console.log(F);


console.log(B.isSubsetOf(A));
 */
// for a given string check if all characters are unique or not 

/* let str = "abccd";

let strSet = new Set(str);

if(str.length == strSet.size){
    console.log("Unique String");
}else{
    console.log("Not Unique String");
}
 */

// convert the below object into the map

let obj = {
    name : "Aditya",
    age : 20,
    gender : "Male"
}

// Method 1
let enteries = Object.entries(obj);
let map = new Map(enteries)
console.log(map);

// Method 2
let map2 = new Map()
for (let key in obj){
  map2.set(key,obj[key])
}
console.log(map2);
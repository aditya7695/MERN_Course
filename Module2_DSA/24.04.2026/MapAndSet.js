// Cons / Disadvantages of objectrs

// 1.The properties in object are not ordered

// 2.We cannot directly traverse the object

// 3.Keys in objects have only 2 data types symbol and string We cannot have another data type

/* let arr = [1,2,3,4]

let obj = {
    name :"Aditya",
    age : 20,
    "Address":"Pune"
}

 */



// Map 

// A map is a built in collection of key value pairs but unlike objects keys here 

// can be of any data types . Map also preserves the insertion order when iterated .



// new key is used to create blueprints

// let map = new Map();  // this is how you create the map

// .set(key , value) is used to insert the values inside the map

// map.set("name","Aditya");
// map.set("age",21);
// map.set("name","Ashish");

// .has(key) Checks if that particular key exists or not

// console.log(map.has("name")); // true
// console.log(map.has("city")); // false

// .get(key) lets you access the value

// console.log(map.get("name")); 
// console.log(map.get("age")); 

// .size  gives you the length of your map

// console.log(map.size);

// .delete(key) allows you to remove the value
// it also returns true if deletion happens and false  if deletion not happenss
// map.delete("age")

// .clear  used to clear your map

// map.clear()

/* const userMap = new Map();
const user1 = {id : 1 , name : "Aditya"};
const user2 = {id : 2 , name : "Ashish"};

userMap.set(user1,"Frontend Studemnt");
userMap.set(user2,"Backend  Studemnt");
userMap.set(101," Batch A ");
userMap.set(true,"Active Batch");


console.log(userMap.get(user1));
console.log(userMap.get(101));
console.log(userMap.get(true));
 */

/* 
const words = ["js", "react" , "js" , "node" , "react" , "js"]

const freqMap = new Map()

for(word of words){
    freqMap.set(word , (freqMap.get(word)||0)+1)
}
console.log(freqMap); */



// this is another way of cretaing your map , where the key value pairs are in the array

// const inventory = new Map([
//     ['pen',20],
//     ['notebook',40],
//     ['mobile',50]
// ]
// )

// console.log(inventory);  //Map(3) { 'pen' => 20, 'notebook' => 40, 'mobile' => 50 }

// for(item of inventory){
//     console.log(item);  // [ 'pen', 20 ]
//                         // [ 'notebook', 40 ]
//                         //.[ 'mobile', 50 ]
// }

// for(const[key,value] of inventory){
//     console.log(key,value);  /* pen 20
//                                 notebook 40
//                                 mobile 50 */
// }

//  Set
// its a built in collection that stores only unique values , meaning duplicates are ignored .
// it also preserves the insertion order during iteration .

// const set = new Set()


// // .add(item) adds the item inside set , if the item already exists it will ignore that item 
// set.add(10)
// set.add(20)
// set.add(10)
// set.add(30)

// console.log(set);   // {10,20,30}

// // .has(item) checks if that item exists or not

// console.log(set.has(30)); // true

// // .delete(item) deletes the value from set

// set.delete(30)

// // .size gives the size of the set

// console.log(set.size);  2

// // .clear() clears the set
// set.clear();
// console.log(set);  Set(0) {}


// let username = ['aditya' , 'ashish' , 'aditya' , 'sneha' , 'ashish'];

// // Method 1
// let set = new Set();
// for(const item of username){
//     set.add(item)
// }
// console.log(set);

// // Method 2 (ideal)

let set2 = new Set(username);
console.log(set2);
console.log([...set2]);


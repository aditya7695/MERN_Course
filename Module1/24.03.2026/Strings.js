/* let str="hello";
for (let i=0 ; i<str.length ; i++){
    console.log(str[i]);
}

for (let char of str){
    console.log(char);
} */

/* 
let str="hello";
console.log(str[0].toUpperCase() + str.slice(1)); */
/* let str="jAVAsCRIPT"
function camelCase(str){
    str=str.toLowerCase()
    let result= str[0].toUpperCase() + str.slice(1);
    return result;
}
console.log(camelCase(str)); */


//indexOf
/* 
let str="I am Aditya";
console.log(str.indexOf('I'));
console.log(str.indexOf('am'));
console.log(str.indexOf('Aditya'));


console.log(str.includes('Aditya')); */
/* 
let input="hi.im.aditya";
console.log(input.replaceAll('.',' ')); */

// acronym
/* 
let str="national aeronotical space administration";
function acronym(str){
   let arr=str.split(" ");
   let result = "";
for (let i=0 ; i<arr.length ; i++){
    let word = arr[i];
    let capitalLetter=word[0].toUpperCase();
    result = result+capitalLetter;
  

}
  return result

}
console.log(acronym(str)); */


/* let str = "hello";
console.log(str.split('').reverse().join(""));
 */
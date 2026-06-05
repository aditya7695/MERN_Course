/* let str = "hello world hello";
function abc(str){
    let arr=str.split(" ");
    let obj={};
    for (let i=0 ; i<arr.length ; i++){
        let word = arr[i];
        if(obj[word]){
            obj[word] ++;
        }else {
            obj[word]=1;
        }
    }return obj;
}console.log(abc(str));

 */


/* let arr=[
    {
        name : "Aditya" , city : "Pune"
    },
    {
        name : "Ashish" , city : "Mumbai"
    },
    {
        name : "Pranav" , city : "Pune"
    }
]

function objGroup(arr){
       let result={};
    for (let i=0 ; i<arr.length ; i++){
        let city = arr[i].city;
     
        if (!result[city]){
           result[city]=[];
        }
        result[city].push(arr[i]);
    }
    return result;
}
console.log(objGroup(arr));
 */
/* let arr=[]
function abc(a,b){
    return b.experience-a.experience;
}
 */

/* console.log("for" && 10 && [] && 0 && "bar"); */
// let obj ={
//     name  : "Aditya ",
//     Address : "Pune"
// }
// let {name,Address}=obj;


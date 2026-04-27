/* let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
/* console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[1][2]);
console.log(arr[2][0]);
console.log(arr[2][1]);
console.log(arr[2][2]); */ 

/* 
let arr2 = [];
let count = 0;
for(let i=0 ; i<3 ; i++){
    let innerArray=[];
     for (let j=0 ; j<3 ; j++){
          count ++;
          innerArray.push(count);
     }
     arr2.push(innerArray)
}
 console.log(arr2);
 console.table(arr2); */

/*  let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; */
// Fro row wise
/* for (let i = 0 ; i < arr.length ; i++){
         for (let j = 0 ; j < arr.length ; j++){
           console.log(arr[i][j]);
         }
} */

// For column wise 

/* for (let i=0 ; i<arr.length ; i++){
    for (let j=0 ; j<arr.length ; j++){
        console.log(arr[j][i]);
    }
} */


// For Diagonal 

/* for (let i = 0 ; i<arr.length ; i++){
    for (let j = 0 ; j<arr.length ; j++){
        if(i==j || i+j==2){
            console.log(arr[i][j]);
    }
}
}
 */

// Non Diagonal Element

/* for (let i = 0 ; i<arr.length ; i++){
    for (let j = 0 ; j<arr.length ; j++){
        if(i!==j && i+j!==2){
             console.log(arr[i][j]);
       }
}
} */

//Center

/* for (let i = 0 ; i<arr.length ; i++){
    for (let j = 0 ; j<arr.length ; j++){
        if(i==j && i+j==2){
            console.log(arr[i][j]);
    }
}
} */
/* let n=4
for (let i=0 ; i<n ; i++){
    let row = "";
    for (let j=0 ; j<n ; j++){
        row += " * ";
    }
    console.log(row);
}

 */

/* let n=4;
let row="";
for(let i=0; i<n ; i++){
    row += " * ";
    console.log(row);
}

 */

/* let n=4;
for (let i=0 ; i<n ; i++){
    let row="";
    for (let j=i ; j<n ; j++){
        row += " * "
    }
    console.log(row);
} */


/*  let n=5;
for (let i=0 ; i<n ; i++){
    let row="";
    for (let j=0 ; j<n-i ; j++){
        row +=" ";
    }
    for (let z=0 ; z<i ; z++){
        row += "*";
    }
  console.log(row);
}  */


  ////////............ PYRAMID PATTERN.............////////////
//  let n=4;
/* for (let i=1 ; i<4 ; i++){
    let row="";
    for (let j=1 ; j<=4-i ; j++){
        row +=" ";
    }
    for (let z=1 ; z<=i ; z++){
        row += "* " ;
    }
  console.log(row);
}

 */

/// METHOD 2

/* let n=4;

for (let i=1 ; i<=4 ; i++){
    let row="";
    for (let j=1 ; j<=n-i ; j++){
        row +=" ";
    }
    for (let z=1 ; z<=2*i-1 ; z++){
        row +="*";
    }
    console.log(row);
}
 */

/* let n=4;
for(let i=1 ; i <=n ; i++){
    let row = "";
    for(let j=1 ; j<=n-i ; j++){
        row +=" ";
    }
    for (let z=1 ;z<=2*i-1 ; z++){
        if(z==1||z==2*i-1){
            row +="*";
        }else{
        row +=" ";
        }
    }
    console.log(row);
}
 */

//...................DIAMOND...................

/* let n= 5;
for(let i=1 ; i<=n ; i++){
let row="";
      for (let j=1 ; j<=n-i ; j++){
        row+= " ";
        }
        for (let z=1 ; z<=2*i-1 ; z++){
            row+="*";
        }
     console.log(row);
}
for( let i=n-1 ; i>=1 ; i--){
    let row="";
    for (let j=1 ; j<=n-i ; j++){
        row+= " ";
        }
        for (let z=1 ; z<=2*i-1 ; z++){
            row+="*"
        }
        console.log(row);
} */

//...................Hollow Square...................
/* 
let n=4;
for(let i=1 ; i<=n ; i++){
    let row="";
    for (let j=1 ; j <=n ; j++){
        if(j==1 || j==n || i==n || i==1)
        {
            row+=" *";
        }else{
            row+="  ";
        }
    }
    console.log(row);
} */

//..................... Nested Loops...................
/* let count = 0 ;
for (let i=0 ; i<8 ; i++){

    for (let j=0 ; j<10 ; j++){
       
       count++;

    }
}
console.log(count);

 */
//..........Table from 1 to 5...................................
/* 
for (let i=1 ; i<6 ; i++){
    console.log("Table of "+i);
    for (let j=1 ; j<11 ; j++){
        console.log(i + " X " + j + " = " + (i*j));
    }
} */

/* let l = 4;
let b = 10;

//..........   SQUARE Pattern. ...................................
for (let i=0 ; i<l ; i++){
    
      let row="";

    for (let j=0 ; j<b ; j++){
        row += "#"
    }
    console.log(row);
} */
//..........Matrix Code...................................
/* let n = 4;
let m = 4;

for (let i=0 ; i<n ; i++){
    
    for (let j=0 ; j<m ; j++){
        console.log(i+""+j);
    }
} */

/* 
let n=4;
let m=4;

for (let i=0 ; i<n ; i++){
    let row="";
    for (let j=0 ; j<m ; j++){
        row = row + i + "" + j;

    }
    console.log(row);
}
 */
/* let a=4;
let b=4;
let i=0;
while(i<a){
    let j=0;
    let row="";
    while(j<b){
        j++;
        row += "#";
    }
    console.log(row);
     i++;
} */
//..........Triangle Pattern...................................
/* 
 * 
 *  * 
 *  *  * 
 *  *  *  * 
 *  *  *  *  * 
    let row ="";
    for(let j=0 ; j<5 ; j++){
        row += " * ";
        console.log(row);
    }
 */
//..........Inverted Triangle...................................

/* 
 *  *  *  *  * 
 *  *  *  * 
 *  *  * 
 *  * 
 * 
 for (let i=5 ; i>=1 ; i--){
    let row = "";
    for (let j=1 ; j<=i ; j++){
        row += " * ";
    }
    console.log(row);
} */
/* 
for (let i=0 ; i<5 ; i++){
    let row="";
    for (let j=i ; j<5 ; j++){
        row+=" * ";
    }
    console.log(row);
} */
//..........ABCD Pattern...................................
/* 
A
AB
ABC
ABCD
ABCDE
for (let i=0 ; i<5 ; i++){
    let row="";
    for (let j=0 ; j<=i ; j++){
        row += String.fromCharCode(65+j);
    }
    console.log(row);
} */




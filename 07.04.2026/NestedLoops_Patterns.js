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


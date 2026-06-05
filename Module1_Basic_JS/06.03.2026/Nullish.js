//.........................Nullish Operator................................................

// let a=3;
// let b=5;
// let result = a??b;
// console.log(result);  // 3

// let a;
// let b=5;
// let result = a??b;
// console.log(result);  // 5

// let a;
// let b;
// let result = a??b;
// console.log(result);  // undefined

//. Example

// let firstName;
// let lastName;
// let userName;

// let result = firstName ?? lastName ?? userName ?? 'Anonymus' ;
// console.log(result);

// let height =0 ;
// console.log(height || 100);  // 100
// console.log(height ?? 100);  // 0


// let height = 10;
// let width;

// let area = (height ?? 100) * (width ?? 100);
// console.log(area);  // 1000

// let y = (1 && 3) ?? 5;
// console.log(y);

// //.........................Nullish Operator................................................

//............................SWITCH Statement................................................
// let a = "sun"
// switch(a){
//     case 'mon':
//     console.log("Today is monday");
//     break;

//     case 'tue':
//     console.log("Today is tuesday");
//     break;

//     case 'wed':
//     console.log("Today is wednesday");
//     break;

//     case 'thu':
//     console.log("Today is thursday");
//     break;

//     case 'fri':
//     console.log("Today is friday");
//     break;

//     case 'sat':
//     console.log("Today is saturday");
//     break;

//     case 'sun':
//     console.log("Today is sunday");
//     break;

//     default:
//     console.log("Invalid");
//     break;
// }

// let x=5;
// switch(x){
//     case 1:
//         console.log("Too Samll");
//         break;
//     case 4:
//         console.log("Right Answer");
//         break;
//     case 5:
//     case 6:
//             console.log("Too Big");
//             break;
//     default:
//         console.log("Invalid");
//         break;s
// }

let marks = 111;
if(marks>100){
    console.log("You entered marks above 100");
}
else if(marks>=90){
    console.log("You have A+ grade");
} else if (marks >=80){
    console.log("You have A grade");
}else if (marks >= 70){
    console.log("You have B grade");
}else if (marks >= 60){
    console.log("You have c grade");
}else if (marks >=50){
    console.log("You have D grade");
}else if (marks >=40){
    console.log("You have E grade");
}else if (marks <40){
    console.log("You have F grade");
}else if(marks < 0){
    console.log("Invalid input");
}

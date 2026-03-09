// for(i=0;i<=5;i++){
//     console.log(i);
// }

// for (let i=0;i<10;i++){
// console.log(i);
// if(i==5){
//     break;
// }
// }

// for (let i=0;i<=5;i++){
//     if(i==2||i==3||i==4){
//         continue;
//     }
//     console.log(i);
// }

//// Questiomn you are given a number n find the number of digit in that number

// let n=167;
// let i=0;
// while(n>0){
//     n=Math.floor(n/10);
//     i++;
// }
// console.log(i);

// Que 2 sum of digits

// let n=5;
// let i=0;
// while(n>0){
//     let reminder = n%10;
//     i += reminder;
//     n=Math.floor(n/10);
// }
// console.log(i);

// let n=342562;
// let mul=1;
// while(n>0){
//     let reminder = n%10;
//     n = n-reminder;
//     n = n/10;
//     mul = mul * reminder;
// }
// console.log(mul);

// for(let i=1;i<=10;i++){
//     console.log(`500 X ${i} = ${500*i}`);
// }


for(let i=1;i<=500;i++){
    if(i%7==0 && i%5==0){
        console.log(i);
        break;
    }
    
}
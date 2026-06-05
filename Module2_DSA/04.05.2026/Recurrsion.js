// 1 2 3 4 5
// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// function countDown(n){
//     if(n==0){
//         return
//     }
//     console.log(n)  //5 4 3 2 1 

//     countDown(n-1)
    
//     console.log("hello", n) // 
// }


// calculate the sum of 5 + 4 + 3 + 2 + 1 
// function sumOfN(n){
//     if(n==1){
//         return 1
//     }
    
//     return n + sumOfN(n - 1)

// }
// console.log(sumOfN(5))


// function power(base, exponent){
//     if(exponent == 0){
//         return 1
//     }
    
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 4)) //-> 16 



// let arr = [1,2,3,4,5];
// // task: find the sum of elements using recursion

// function sumOfArray(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     return arr[0] + sumOfArray(arr.slice(1));
// }
// console.log(sumOfArray(arr))

// find the maximum in the array using recursion
// let arr = [3, 8, 2, 6];

// function findMax(arr){
//     if(arr.length == 1){
//         return arr[0];
//     }
//     const maxOfRest = findMax(arr.slice(1));
//     if(arr[0] > maxOfRest){
//         return arr[0];
//     }else{
//         return maxOfRest
//     }
// }

// console.log(findMax(arr))


// reverse a string using recursion
// input -> "acciojob"
// output -> "bojoicca"


/* function reverseString(str){
    if(str.length == 0) return "";
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("acciojob"));
 */
// "acciojob"
// reverse("cciojob") + a
// reverse("ciojob") + ca
// reverse("iojob") + cca
// reverse("ojob") + icca
// reverse("job") + oicca
// ...
// ...


/* let arr = [1,2,3,4,5,6];
function solution(arr){
    let arr1=[];
    let i=0;
    // here the recurssive function becomes the helper function beacouse 
    // It takes help from the outer function . 
    function helper(arr,i){
    
        if(arr.length == i){
            return 
        }
        if(arr[i]%2 !== 0){
            arr1.push(arr[i])
        }
        helper(arr,i+1)
    }
    helper(arr,i)
    return arr1
}
console.log(solution(arr)); 
 */

// Note : When your reccursive function is independant of outside variables and only dependant on the input 
// that is given 
// It becomes pure reccursive function 


// flatton the below array

/* let arr=[1 , [2 , [3 ,4] ,5 ], 6];

function flatArray(arr,i){
    let result=[];
    for (let i=0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i]) == false){
            result.push(arr[i])
        }else{
            result.push(...flatArray(arr[i]))
        }
    }
    return result    
}
console.log(flatArray(arr,0)); 

 */
// Fibonnachi series. 
/* 
function fib(n){
    if(n<2) return n;
    return fib(n-1) + fib(n-2);
}
console.log(fib(50)); */


// Time Complexity O(2^n)

// Permutation 

// pick each character as the first char
// recursively permute the remaining char 
// combine the chosen char with each smaller permutation

function permuteString(str){

    //  when str has exactly 1 char (say " c ") there is only 1 permutaion

    if(str.length == 1){
        return str;
    }

    const result = []

    // loop over each char as the 1st char
    for(let i=0 ; i<str.length ; i++){

        // choose char at i to be the 1st char of permutation 

        const firstChar = str[i];

        // build a new str that has all the characters except the ome in position i
        // for example , if str="abc";
        // i = 0 ; firstChar = "a" , remaining ="" + "bc" + "bc"
        // i = 1 ; firstChar = "b" , remaining ="a" + "c" + "ac"
        // i = 2 ; firstChar = "c" , remaining ="ab" + "" + "ab"

        const remaining = str.slice(0,i) + str.slice(i+1);

        // Recursive call on the remaining elements
        const permsOfRemaining = permuteString(remaining);

        // for i=0
        // firstChar = "a" , remaining = "bc"
        // permsOfRemaining = permuteString("bc")
        // this recursive call with eventually return [" bc " , " cb "]

        for(const perm of permsOfRemaining){
            result.push(firstChar + perm)
        }
    }
} 
console.log(permuteString("abc"));
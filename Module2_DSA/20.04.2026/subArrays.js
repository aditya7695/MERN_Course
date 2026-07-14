

// let arr = [1,2,3,4,5]
// for (let i=0 ; i<arr.length ; i++){
//     let sub = [];
//     for(let j=i ; j < arr.length ; j++){
//         sub.push(arr[j]);
//         console.log(sub);   
//     }
// }


//     let arr = [1,2,3,4,5]
// for (let i=0 ; i<arr.length ; i++){
//     for(let j=i ; j < arr.length ; j++){
//         console.log(arr.slice(i,j+1));
//     }
// }

// function hasSubArraySum(arr,target){
//     for(let i=0 ; i<arr.length ; i++){
//         let sum=0;
//         for(let j=i ; j<arr.length ; j++){
//             sum += arr[j];
//             if(sum == target){
//                 return true;
//             }
//         }
//     } 
//     return false;
// }console.log(hasSubArraySum([1,2,3,4,5],15)); 


// kadence algo used for calculate the maximum sum of substring

/* let arr = [-2,-3,4,-1,-2,1,5,-3]


function maxSubarraySum(arr){
    let maxSoFar=arr[0];
    let maxEnding=arr[0];
    for(let i=1 ; i<arr.length ; i++){
        maxEnding = Math.max(arr[i],maxEnding + arr[i]);
        maxSoFar = Math.max(maxEnding,maxSoFar)
    }
    return maxSoFar;
}
console.log(maxSubarraySum(arr)); */

// by brute force approach

/* let arr = [-2,-3,4,-1,-2,1,5,-3]
let max = -Infinity;

for(let i = 0 ; i<arr.length ; i++){
    for(let j=i ; j<arr.length ; j++){
        let sum = 0 ;
        for(let k=i ; k<=j ; k++){
            sum += arr[k];
        }
        max = Math.max(max,sum);
    }
}
console.log(max); */


// Question find if the target element is in the array
// the target is the sum of any 2 elements in tyhe array

/* let arr=[2,6,5,8,11];
let target = 10;
function findElemenmt(arr,target){
    for (let i=0 ; i<arr.length ; i++){
        for(let j=i ; j<arr.length ; j++){
            if(arr[i]+arr[j]==target){
                return true;
            }
        }
    }
    return false;
}
console.log(findElemenmt(arr,target));
 */
/* 
function twoSum(arr,target){
    arr.sort(sortarr)
    function sortarr(a,b){
        return a-b};
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum == target){
            return true
        }else if(sum < target){
            left ++;
        }else{
            right --;
        }
    }
    return false;
}
console.log(twoSum([0,-3,-1,2,1],2)); */



// Sliding window

// function maxSumSlidingWindow(arr,k){
//     const n=arr.length;
//     if(n<k){
//         return "Invalid K"
//     }
//     let windowSum = 0;
//     //step 1 calculate the sum of 1st subarray
//     for (let i=0 ; i<k ; i++){
//         windowSum += arr[i];
//     }
//     let maxSum=windowSum;
//     // Sliding logic
//     //Slide the window from start to end of the array
//     // if the previous element arr[i-k] is removed from the window sum and the next element arr[i] is added
//     for(let i=k ; i<n ; i++){
//         windowSum += arr[i]-arr[i-k];
//         maxSum = Math.max(maxSum,windowSum)
//     }
//     return maxSum;
// }
// console.log(maxSumSlidingWindow([5,2,-1,0,3],3));




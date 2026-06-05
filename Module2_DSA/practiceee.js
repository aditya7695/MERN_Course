// Liniar Search
/* 
let arr=[4,2,5,8,3,9]
let target = 5;

function linearSearch(arr,target){
     for(let i=0 ; i<arr.length ; i++){
        if(arr[i]===target){
            return true
        }
     }
     return false
}
console.log(linearSearch(arr,target)); */


// Binary Search
/* 
let arr=[1,2,3,4,5,6]
let target =4;

function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    for(let i=0 ; i<arr.length ; i++){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] == target){
            return true
        }
        else if(arr[mid]<target){
            left = mid+1
        }
        else {
            right = mid-1
        }
    }
    return false
}
console.log(binarySearch(arr,target)); */


// Sorting Algorithms

// Selection Sort

/* let arr=[9,6,4,3,6,1]
function selectionSort(arr){
for(i=0 ; i<arr.length ; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
return arr;
}
console.log(selectionSort(arr)); */ 

// Bubble Sort

/* let arr=[9,6,4,3,1]
let swap;
function bubbleSort(arr,swap){
    do{
        swap =false;
        for(let i=0 ; i<arr.length-1 ; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swap = true
            }
        }
    }while(swap)

        return arr
}
console.log(bubbleSort(arr,swap));
 */

// Insertion Sort

/* let arr=[7,4,5,3,2]
function insertionSort(arr){
    for(let i=1 ; i<arr.length ; i++){
        let key = arr[i];
        let j = i-1;
        while(arr[j] > key && j>=0){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1]=key
        
    }
    return arr;
}
console.log(insertionSort(arr));

 */


// Merge Sort

/* function mergeSort(arr){

    if (arr.length < 2){
        return arr
    }

    const mid = Math.floor(arr.length/2);

    let leftArr = arr.slice(0,mid);

    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(leftArr,rightArr){

    const sortedArray = []

    // Check if both the array is empty or not
    while(leftArr.length>0 && rightArr.length>0){
        // if 1 st element of the left array is smaller then we will push it into the result array
        if(leftArr[0]<rightArr[0]){
            sortedArray.push(leftArr.shift());
        }
        // here we will push the 1st element of the right array 
        else{
            sortedArray.push(rightArr.shift())
        }
    }
    // here we will merge the array when any one of the array will get empty and while condition will get false
    return [...sortedArray,...leftArr,...rightArr];
}
let arr = [8,-2,-6,4,20];
console.log(mergeSort(arr));

  */

/* let str="acciojob";
function reverseStr(str){
    if(str.length == 0){
        return ""
    }
    return reverseStr(str.slice(1))+str[0];
}
console.log(reverseStr(str)); */

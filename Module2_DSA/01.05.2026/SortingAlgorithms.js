/* //  BUBBLE SORT //
function bubbleSort(arr){
let swap;
do{
    swap = false;
    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i]   = arr[i+1];
            arr[i+1] = temp;
            swap = true;
        }
    }
}while(swap)
}
let arr = [-6,8,20,4,-2]
bubbleSort(arr);
console.log(arr); */




//  INSERTION SORT //

/* 
function insertionSort(arr){

    for (let i=1 ; i<arr.length ; i++){
    let NTI = arr[i];
    let j=i-1;

    // we compare the sorted elements in an array with the NTI
    // and trying to find the index where the insertion should take place
    // the index is where the sorted element is lesser than NTI

    while (j>=0 && arr[j]>NTI){
        arr[j+1] = arr[j];
        j= j -1;
    }
    arr[j+1] = NTI;
    }
}
let arr=[-6,20,8,4,-2];
insertionSort(arr);
console.log(arr); */



//.      SELECTION SORT //////

/* 
function selectionSort(arr){
    // the below loop is here to keep track of the index where the swap needs to take place
    for (let i=0 ; i<arr.length -1 ; i++){
        let minIndex=i;
        for (let j=i+1 ; j<arr.length ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr [i] = arr[minIndex]
        arr[minIndex] = temp;

    }

}
let arr=[-6,20,8,4,-2];
selectionSort(arr);
console.log(arr); */
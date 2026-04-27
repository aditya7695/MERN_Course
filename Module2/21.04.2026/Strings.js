// FIND ALL POSSIBLE PALINDROMS IN THE BELOW STRING
// INPUT -> "racecar"
// OUTPUT -> ["racecar","aceca","cec"];

/* 
function allPallindrom(str){
    let palindrom=[];
    for(let i=0 ; i<str.length ; i++){
        for (let j=i+2 ; j<=str.length ; j++){
            let sub = str.slice(i,j);
            let reversed = sub.split("").reverse().join("");
            if(sub == reversed){
                palindrom.push(sub);
            }
        }
    }
    return palindrom;
}

console.log(allPallindrom("racecar")); */
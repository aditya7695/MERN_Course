// Promise.all([
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("A")
//         }, 3000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("B")
//         }, 2000);
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(() => {
//             rej("C")
//         }, 1000);
//     })
// ]).then((item)=>console.log(item))
// .catch((err)=>console.log(err))

async function testing(){
    try{
        let res = await Promise.all([
            fetch("https://api.github.com/users/iliakan"),
            fetch("https://api.github.com/users/remy"),
            fetch("https://api.github.com/users/jeresig")
        ])
        res.map(async(item)=>{
            let data = await item.json();
            console.log(data);
        })
    }catch(err){
        console.log(err);
    }
}
testing();
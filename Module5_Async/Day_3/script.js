
// function getCheese(){
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const cheese='🧀';
//         // console.log('here is the cheese ',cheese);
//         rej("Cheese is expired")
//         res(cheese)
//     },2000)
//     })
// }

// function makeDough(cheese){
//     return new Promise((res,rej)=>{
//      setTimeout(()=>{
//         const dough = cheese + '🍩';
//         console.log('here is the dough ',dough);
//         res(dough)
//     },2000)
//     })
   
// }

// function getPizza(dough){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             const pizza = dough + '🍕'
//             console.log('here is the pizza ',pizza);
//             res();
//         },2000)
//     })
// }

// Methods of creating async function

//  1 . async function func()

//  2 . const func = async () = >{}

// async function func() {
//     const res1 = await getCheese();
//     const res2 = await makeDough(res1);
//     const res3 = await getPizza(res2);
// }
// func();

//  the word async before a funtion means : a function always returns a promise
//  await works only inside async function 
// await makes js wait until promise ssettels and returns its result

// async function func() {
//     try{
//         const res1 = await getCheese();
//         const res2 = await makeDough(res1);
//         const res3 = await getPizza(res2);
//     }catch(error){
//         console.log("error",error);
//     }finally{
//         console.log("promise is executed");
//     }
// }
// func();


// function fetchData(){
//     let flag = true;
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(flag){
//                 res({message : "data fetched successfully", data : [1,2,3,4,5,6]})
//             }else{
//                 rej({message : "error in fetching data"})
//             }
//         },3000)
//     })
// }


// async function func() {
//     try{
//         const res1 = await fetchData();
//         console.log(res1.message,res1.data);
//     }catch(error){
//         console.log(error.message);
//     }finally{
//         console.log("Promise execution is completed");
//     }    
// }
// func();

let posts = document.getElementById('posts')

let api_url = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

async function fetchData(){
    try{
        showLoading();
        const res = await fetch(api_url);
        const data = await res.json();
        render(data);
    }catch(err){
        posts.innerHTML = `<strong> Error message ${err} </strong>`
    }
}
fetchData()

function render(data){
    posts.innerHTML=""
      data.map((item)=>{
            const div = document.createElement('div')
            div.innerHTML=`<strong>${item.title}</strong>
        <p>${item.body}</p>`
        posts.appendChild(div)
        })     
}

function showLoading(){
    posts.innerHTML=`<h1>Loading.......</h1>`
}


//  fetch is browser API to send HTTP requests and read responses 
//  it returns a promise that is usually cahined with json() to parse json data.
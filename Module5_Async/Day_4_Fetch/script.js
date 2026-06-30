// const API_URL = 'https://dummyjson.com/products'
// let ul = document.getElementById('list')
// async function dataFetch(){
//     try{
//         showLoading()
//         const res = await fetch(API_URL);
//         const data = await res.json();
//         render(data)
//     }catch(err){
//         ul.innerHTML=`Error Message ${err}`
//     }
// }
// dataFetch()
// function render(data){
//     ul.innerHTML="";
//     data.products.map((items)=>{
//         if(items.category == "groceries"){
//             const li = document.createElement('li');
//             li.innerHTML = items.title;
//             ul.appendChild(li)
//         }
//     })
// }
// function showLoading(){
//     ul.innerHTML=`<h1>Loading.......</h1>`;
// }

// To create or send data to api
// POST -> creating data in DB

// async function createPost() {
//   const newPost = {
//     title: "My first POST",
//     body: "This is body",
//     userId: 1,
//   };
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(newPost),
//   });
//   const savedPost = await res.json();
//   console.log("created", savedPost);
// }
// createPost();

// PUT -> updating a feild in DB

// async function updatePost(id){
//     const updatedFeild = {
//         title : "updated title",
//         body : "updated body"
//     }

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(updatedFeild),
//   });

//    const data = await res.json();
//    console.log("Updated", data);
// }
// updatePost(1)

// DELETE -> Delete the post from DB

// async function deletePost(id){
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
//        { method : 'delete'}
//     )
//     console.log(res);
//     if(res.ok){
//         console.log("post deleted");
//     }else{
//         console.log("post not deleted");
//     }
// }
// deletePost(1)

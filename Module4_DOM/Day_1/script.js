// console.log(document);
// console.log(document.querySelector('#idhead'));
// console.log(document.querySelectorAll('h1')[2]);

/* document.querySelectorAll('h1').forEach(item =>
    console.log(item.textContent)
)

let headcontent = document.querySelectorAll('h1')
for(let i=0 ; i< headcontent.length ; i++){
    console.log(headcontent[i].textContent);
} */


// console.log(document.querySelectorAll('.posts .featured'));

// document.querySelector('h1').textContent="hello new world"

/* let featuredall = document.querySelectorAll('.posts .featured')
for(let i=0 ; i<featuredall.length ;i++){
   featuredall[i].textContent=`new post ${i}`
} */


/* const posts = document.querySelectorAll('.posts .featured')

posts.forEach((item , idx) => {
    item.textContent = `new posts ${idx}`
}) */

/* 
console.log(document.querySelector('.posts').textContent);

console.log(document.querySelector('.posts').innerHTML);

document.querySelector('.posts').innerHTML='<h1>Testing innerHTML </h1>'

document.querySelector('.posts').innerHTML="";

 */


// document.querySelector('.list').innerHTML = '<li> item 1 </li>'

for(let i=1 ; i<=5 ; i++){

    document.querySelector('.list').innerHTML += "<li> item " + i + "</li>";
}
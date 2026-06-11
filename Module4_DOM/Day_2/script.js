/* console.log(document.querySelector('h1').textContent);

console.log(document.getElementById('elem'));

console.log(document.getElementsByClassName('classElement')[2]);

let element = document.getElementById('element');

element.style.color = 'orange'

element.style.backgroundColor = 'gray'

element.style.fontSize = '20px'
 */


// const { createElement } = require("react");

// Closest 

// let chapter = document.querySelector('.chapter')

// console.log(chapter.closest('.book')); // Book Element

// console.log(chapter.closest('div'));  // Book Element

// console.log(chapter.closest('.contents'));  // contents element

// console.log(chapter.closest('h1'));  // null bc its not a ancestor

/* console.log(document.querySelector('.contents').id);
console.log(document.querySelector('.contents').className);

let contents = document.querySelector('.contents')
contents.id = 'newId'
console.log(document.querySelector('.contents').id);

contents.className = 'wraper newClass'
console.log(document.querySelector('.wraper').className);
 */

/* 
let img = document.querySelector('img')

img.alt = "Dog image"

img.src = "https://images.unsplash.com/photo-1724391114112-c83ad59f1d5f?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */



//. Classlist

/* console.log(document.querySelector('.contents').classList);
let contents = document.querySelector('.contents').classList;
contents.add('newClass'); // add className
contents.remove('newClass'); // removing ClassName
contents.toggle('active'); //toogle Classname
console.log(contents.contains('container'));
console.log(document.querySelector('.contents').classList); //checks if class exists */


/* let img = document.querySelector('img')

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));

img.setAttribute('src','https://images.unsplash.com/photo-1724391114112-c83ad59f1d5f?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') */


/* let boxContainer = document.querySelector('.box-container');

let div = document.createElement('div');

div.style.height = '300px';

div.style.width = '300px';

div.style.backgroundColor = 'red';

div.className = 'box';

boxContainer.appendChild(div); */

/* let fruits = ["Apple" , "kivi" , "banana" , "oranges"]

let ul = document.querySelector('ul');


for(let i=0 ; i<fruits.length ; i++){
   let li = document.createElement('li')
    li.textContent +=fruits[i]
    ul.appendChild(li)
}
 */

let users = [
    {id:1, name:"pranav"},
    {id:2, name:"sourav"},
    {id:3, name:"aditya"},
    {id:4, name:"prajwal"},
]

let table = document.querySelector('table');

let tr = document.createElement('tr')

let th1 = document.createElement('th')

th1.textContent = "id";

let th2 = document.createElement('th')

th2.textContent = "name";

tr.appendChild(th1);
tr.appendChild(th2);
table.appendChild(tr)

users.map((items)=>{
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = items.id
    let td2 = document.createElement('td');
    td2.textContent = items.name

    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
})



console.log(table);

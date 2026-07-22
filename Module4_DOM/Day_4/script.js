/* // ..............TYPE OF EVENTS.................

// click
// mouseover -> courser enter s an element
// mouseout -> leaves the element
// mousedown / mouseup -> mouse button is pressed and released
// kyeup / keydown -> keyboard key is pressed or released 
// submit -> when user submit form 

/* let btn = document.getElementsByClassName('click-btn')[0];
let btn2 = document.getElementsByClassName('click-btn')[1];

btn.addEventListener('click' , () =>{
    alert("Button 1")
});

btn2.addEventListener('click' , () =>{
    alert("Button 2")
}); */

// btn.addEventListener('click',greet) // This is the right way 

// btn.addEventListener('click',greet()) // Here the func tion is called before the click registration

/* function greet(){
    alert("Hello World");
} */


/* btn.addEventListener('click' , () => {
    alert("Hello World From Callback function")
}) *
 */
// Multiple eventListner

/* let btn = document.querySelectorAll('.click-btn')
btn.forEach((item) =>{
    item.addEventListener('click' , (e) =>{
       let btnName = e.target.textContent
       console.log(`${btnName} is clicked`);
    })
}) */
/* 
let btn = document.querySelector('.click-btn')
btn.addEventListener('click',func)

// here the function should be same in the addEventListner
// and RemoveEventListner
// Make sure that if there is an event you want to remove
// in the future the function should not be callback function

btn.removeEventListener('click',func)

function func(){
    console.log("Hello");
} */

let form = document.querySelector('form')
let div = document.querySelector('div')
let p = document.querySelector('p')

/* form.addEventListener('click', () => alert("Form is clicked"));
div.addEventListener('click',()=>alert("Div is Clicked"))
p.addEventListener('click',()=>alert("P is Clicked")) */

// Event Bubbling
//  When an event happens on an element ,  it first runs the 
// handlers on it , then its parents , then all the way up to
// its ancestors

// Event Capturing 

/* function eventBubbling(){
form.addEventListener('click', () => alert("Form is clicked"));
div.addEventListener('click',()=>alert("Div is Clicked"))
p.addEventListener('click',()=>alert("P is Clicked"))
}
eventBubbling() */

/* function eventCapturing(){
form.addEventListener('click', () => alert("Form is clicked"),true);
div.addEventListener('click',()=>alert("Div is Clicked"),true)
p.addEventListener('click',(e)=>{
    e.stopPropagation();
    alert("P is Clicked")});
}
eventCapturing(); */



// let button = document.querySelector('#add');
let ul = document.querySelector('#todo-list');
// button.addEventListener('click',addNew)
// let count = 1 ;
// function addNew(){
//     let li = document.createElement('li')
//     li.textContent = `New element ${count++}`
//     ul.append(li)
// }

ul.addEventListener('click',(e)=>{
    // console.log(e)
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('done')
    }
})

// Event Dlegation - when we attach a single eventlistner



/* let btn = document.querySelector('#btn')

btn.addEventListener('click',(e)=>{
    if(e.altKey && e.shiftKey){
        console.log("Hello");
    }
})

let box = document.querySelector('.box')

box.addEventListener('mouseover',()=>{
    console.log("Courser Entered");
})
box.addEventListener('mouseout',()=>{
    console.log("Courser Exited");
}) */


/* let btn = document.querySelector('#theme-toogle')
let body = document.querySelector('body')
btn.addEventListener('click',()=>{
 body.classList.toggle('dark-theme')
 if(btn.textContent == "Dark"){
    btn.textContent = "Light"
 }
 else if(btn.textContent == "Light"){
    btn.textContent = "Dark"
 }
}) */
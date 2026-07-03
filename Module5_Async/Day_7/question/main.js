let name = document.getElementById('name');
let age = document.getElementById('age');
let submit = document.getElementById('submit');
let list = document.getElementById('display');
import { filterAge } from "./filterAge.js";
let user=[];
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let flag = filterAge(age.value);
    if(!flag) return;
    let Obj = {
    name : name.value,
    age : age.value
}
user.push(Obj);
list.innerHTML=""
user.map((item)=>{
    
    let li = document.createElement('li');
    li.innerHTML = item.name;
    list.appendChild(li);
})
})


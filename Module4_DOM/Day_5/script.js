const form = document.getElementById('myForm')
// const form = document.querySelector('#myForm')
// const form = document.forms.myform

// const address = document.getElementById('addInput')
const name = form.elements.name;
const address = form.elements.address;
// console.log(name);
// console.log(address);
const age = form.elements.age;
const userInfo = form.elements.userInfo;
const submitBtn = document.getElementById('submitBtn')
let table = document.querySelector('table');

const personArr = []
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const personObj = {};
    if(!name.value.trim()){
        return
    }else{
        personObj.name = name.value;
    }
    if(!address.value.trim()){
        return
    }else{
        personObj.address = address.value;
    }
    if(!age.value.trim() || age.value<18){
        return
    }else{
        personObj.age = age.value;
    }
    if(!userInfo.value.trim()){
        return
    }else{
        personObj.userInfo = userInfo.value;
    }
    personArr.push(personObj)
    table.innerHTML=""
    createTable(personArr);
    form.reset();

})

function createTable(personArr){
    
let tr = document.createElement('tr')
let th1 = document.createElement('th')
th1.textContent = "name";
let th2 = document.createElement('th')
th2.textContent = "address";
let th3 = document.createElement('th')
th3.textContent = "age";
let th4 = document.createElement('th')
th4.textContent = "userInfo";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
table.appendChild(tr)
    personArr.map((items)=>{
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = items.name
    let td2 = document.createElement('td');
    td2.textContent = items.address
    let td3 = document.createElement('td');
    td3.textContent = items.age
    let td4 = document.createElement('td');
    td4.textContent = items.userInfo

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)
})
} 
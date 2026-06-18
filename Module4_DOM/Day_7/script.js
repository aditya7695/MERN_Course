
const studentInfo = []

const addStudent = document.querySelector('button')
addStudent.addEventListener('click',(e)=>{
 e.preventDefault()
 const name = document.getElementById('name')
const age = document.getElementById('age')

const checkbox = document.querySelectorAll('.skill')
const select = document.querySelector('#course')
const studentObj = {};
studentObj.name = name.value;
studentObj.age = age.value;
const radiobtn = document.querySelector('input[name="gender"]:checked')
studentObj.gender = radiobtn.value;
const checkedElement = []
checkbox.forEach(items =>{
    if(items.checked){
        checkedElement.push(items.value)
    }
})
studentObj.skills = checkedElement;
studentObj.course = select.options[select.options.selectedIndex].value;
studentInfo.push(studentObj)
console.log(studentInfo);
})


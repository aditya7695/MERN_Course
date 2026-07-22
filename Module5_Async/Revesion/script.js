let API_URL = "https://randomuser.me/api/?results=8"
let ul = document.querySelector('ul')
async function fetchData() {

    try{
        showLoading();
        const res = await fetch(API_URL)
        const data = await res.json()
        console.log(data)
        render(data)

    }catch(err){
        ul.innerHTML = `<h1> Error is ${err}</h1>`
    }
    
}
fetchData();

function render(data){
    ul.innerHTML = ""
    data.results.map(item => {
        let li = document.createElement('li')
        li.innerHTML = `${item.name.title} . ${item.name.first} ${item.name.last}` 
        ul.appendChild(li)
    })
}
function showLoading(){
    ul.innerHTML= `<h1> Loading ....<h1>`
}
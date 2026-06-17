/* const showBtn = document.querySelector('#showBtn')
const modal = document.querySelector('#modal')

showBtn.addEventListener('click',()=>{
    modal.classList.toggle('d-none')
}) */



// Fetching details from my RAdio button
// const submit = document.querySelector('#submit');

/* submit.addEventListener('click',()=>{
const selectedRadioBtn = document.querySelector('input[name="gender"]:checked')
console.log(selectedRadioBtn.value);

}) */


/* submit.addEventListener('click',()=>{
   
    let checkedElement = [];
    const checkedBtns = document.querySelectorAll('input[name="hobby"]')
    
    checkedBtns.forEach(items =>{
        if(items.checked){
            checkedElement.push(items.value)
        }
    })
    console.log(checkedElement);
})
 */


// submit.addEventListener('click',(e)=>{
    // e.preventDefault();
    // // For single select 
    // const select = document.querySelector('#fruits');
    // console.log(select.options[select.options.selectedIndex].value);


    // For Multiple select
    // const select= document.querySelector('#fruits');
    // let selectedValues = Array.from(select.options)
    // .filter(option => option.selected)
    // .map(items => items.value)

    // console.log(selectedValues);
// })


// const error = document.querySelector('#error')

// input.onblur = function(){
    //     if(!input.value.includes("@"))
    //     error.innerHTML = "Please enter valid email"
    // }
    
    // input.onfocus = function(){
        //     error.innerHTML = ""
        // }
        
        
        
        const input = document.querySelector('#input')
        let h3 = document.querySelector('h3')

        input.addEventListener('input' , (e)=>{
            console.log(e.target.value);
            h3.textContent = e.target.value
        })


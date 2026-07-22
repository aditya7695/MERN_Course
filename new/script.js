// const API_URL = "https://dummyjson.com/products"

// const ul = document.querySelector('ul');


// async function fetchData(){
    //     try{
        //         showLoading();
        //         const res = await fetch(API_URL)
        //         const data = await res.json()
        //         button.addEventListener('click',()=> render(data))
        
        //     }catch(err){
            //         ul.innerHTML = `<h1>Error is ${err}<h1>`
            //     }
            
            // }
            // fetchData();
            
            // function render(data){
                //     ul.innerHTML = ""
                //     data.products.sort((a,b)=>a.price-b.price).map((item) => {
                    //         let li = document.createElement('li')
                    //         li.innerHTML = `Title is : ${item.title} , Price is : ${item.price} `
                    //         ul.appendChild(li)
                    //     })
                    // }
                    
                    // function showLoading(){
                        //     ul.innerHTML = `<h1>Loading.....<h1>`
                        // }
                        
                        const throttle = (fn,delay) => {
                            let lastCall = 0;
                            return function(...args){
                                let now = Date.now()
                                if(now-lastCall < delay){
                                    return
                                }
                                lastCall = now
                                return fn(...args)
                            }
                        }
                        
                        const brustshoot = () => {
                            console.log("Shoot")
                        }
                        
                        const shootWithThrottle = throttle(brustshoot,1000)
                        
                        const button = document.getElementById('shoot')
                        button.addEventListener('click' , ()=>{
                            shootWithThrottle()
                        })

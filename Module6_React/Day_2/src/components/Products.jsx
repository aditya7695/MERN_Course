

const Products = () => {
    const products = [
        {id:1 , name: "PS5" , price : 60000 ,inStock : true},
        {id:2 , name: "game 1" , price : 5000 ,inStock : true},
        {id:3 , name: "game 2" , price : 4000 ,inStock : false},
        {id:4 , name: "game 3" , price : 20000 ,inStock : true},
        {id:5 , name: "game 4" , price : 3000 ,inStock : false},
    ]
    const filter = "asc"
    const data = products.filter(item => item.inStock).map(item => item)
    if(filter=="asc"){
     data.sort((a,b)=>a.price-b.price) 
    }else{
      data.sort((a,b)=>b.price-a.price)
    }
  return (
    <div>
        <ul>
            {data.map(item => <li key={item.id}>{item.price}</li>)}
        </ul>
    </div>
  )
}

export default Products

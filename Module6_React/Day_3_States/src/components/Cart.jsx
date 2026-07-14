import CartItems from "./CartItems";

const Cart = () => {
    const handleOrder = (itemName,itemPrice) =>{
        alert(`You have orderd ${itemName} for ${itemPrice}`)
    }
  return (
    <div>
      <CartItems name={'Phone'} price={20000} onOrder={handleOrder}/>
      <CartItems name={'Laptop'} price={50000} onOrder={handleOrder}/>
      <CartItems name={'Shirt'} price={2000} onOrder={handleOrder}/>
    </div>
  )
}

export default Cart

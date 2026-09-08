import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // Destructure global state directly
  const { items, itemsTotal, discountedTotal, discount } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Fixed property evaluation syntax error */}
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.itemId} style={{ marginBottom: "1rem" }}>
            <h3>Name: {item.itemName}</h3>
            <p>Quantity: {item.itemQuantity}</p>
            <p>Price: ${item.itemPrice}</p>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}

      <h3>Discount Rate: {discount}%</h3>
      <h1>Total Price before Discount: ${itemsTotal}</h1>
      <h1>Total Price after Discount: ${discountedTotal}</h1>

      <button
        onClick={() =>
          dispatch({
            type: "addItem",
            payload: { id: 1, name: "Mobiles", quantity: 50, price: 30000 },
          })
        }
      >
        Add Item
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "updateQuantity",
            payload: { id: 1, newQuantity: 20 },
          })
        }
      >
        Update Quantity
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "updateDiscount",
            payload: { newDiscount: 50 },
          })
        }
      >
        Calculate Total & Set Discount
      </button>

      <button onClick={() => dispatch({ type: "totalPrice" })}>
        Apply Discount
      </button>
    </div>
  );
};

export default App;
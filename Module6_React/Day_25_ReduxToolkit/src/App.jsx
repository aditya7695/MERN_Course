import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, updateQuantity, updateDiscount, totalPrice } from './reduxStore.js/Slices/cartSlice.js'; 

function App() {
  const dispatch = useDispatch();
  const { items, itemsTotal, discount, discountedTotal } = useSelector((state) => state.item);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discountInput, setDiscountInput] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) return;

    dispatch(
      addItem({
        id: Date.now(),
        name,
        price: Number(price),
        quantity: Number(quantity),
      })
    );

    setName('');
    setPrice('');
    setQuantity('');
  };

  const handleQuantityChange = (id, currentQty, delta) => {
    dispatch(
      updateQuantity({
        id,
        quantityToDeduct: -delta,
        newQuantity: currentQty + delta,
      })
    );
  };

  const handleCalculateTotals = () => {

    dispatch(
      updateDiscount({
        newDiscount: discountInput !== '' ? Number(discountInput) : discount,
      })
    );


    dispatch(totalPrice());
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h2>Cart Manager (Redux Toolkit)</h2>


      <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>


      <h3>Cart Items</h3>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.itemId} style={{ marginBottom: '8px' }}>
              <strong>{item.itemName}</strong> - ${item.itemPrice} × {item.itemQuantity}{' '}
              <button onClick={() => handleQuantityChange(item.itemId, item.itemQuantity, 1)}>
                +
              </button>
              <button onClick={() => handleQuantityChange(item.itemId, item.itemQuantity, -1)}>
                -
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr />


      <div style={{ marginTop: '16px' }}>
        <h3>Calculations</h3>
        <div style={{ marginBottom: '12px' }}>
          <label>Discount %: </label>
          <input
            type="number"
            placeholder={`${discount}`}
            value={discountInput}
            onChange={(e) => setDiscountInput(e.target.value)}
          />
          <button onClick={handleCalculateTotals} style={{ marginLeft: '8px' }}>
            Calculate Total
          </button>
        </div>

        <p><strong>Subtotal:</strong> ${itemsTotal}</p>
        <p><strong>Discount Applied:</strong> {discount}%</p>
        <p><strong>Final Price:</strong> ${discountedTotal}</p>
      </div>
    </div>
  );
}

export default App;
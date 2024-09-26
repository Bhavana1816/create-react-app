import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, property) => acc + property.price, 0);

  return (
    <div>
      <h1>Your Booked Properties</h1>
      <ul>
        {cart.map((property) => (
          <li key={property.id}>
            {property.title} - ${property.price}/night
            <button onClick={() => removeFromCart(property.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default Cart;
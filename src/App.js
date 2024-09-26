import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyList from './Components/PropertyList';
import Cart from './Components/Cart';
import BookingForm from './Components/BookingForm';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter(item => item.id !== propertyId));
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <PropertyList addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
          <Route path="/checkout">
            <BookingForm cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

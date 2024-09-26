import React, { useState } from 'react';

function BookingForm({ cart }) {
  const [details, setDetails] = useState({ name: '', email: '', payment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for submitting booking details
    console.log('Booking confirmed!', details, cart);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={details.name} onChange={handleInputChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={details.email} onChange={handleInputChange} required />
        
        <label>Payment Details:</label>
        <input type="text" name="payment" value={details.payment} onChange={handleInputChange} required />
        
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
export default BookingForm;
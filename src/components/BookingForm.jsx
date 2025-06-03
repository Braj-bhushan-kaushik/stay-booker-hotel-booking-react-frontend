import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'AC',
    days: 1,
    paymentMethod: 'UPI',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Submitted!\n' + JSON.stringify(formData, null, 2));
    // Yahan future me API call lagegi
  };

  return (
    <div className="max-w-md mx-auto bg-black text-white p-6 rounded-lg shadow-lg mt-10 border border-gold">
      <h2 className="text-2xl font-bold mb-4 text-gold">Room Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Mobile Number"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="roomType"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="AC">AC Room</option>
        </select>
        <input
          type="number"
          name="days"
          placeholder="Number of Days"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.days}
          onChange={handleChange}
          min="1"
        />
        <select
          name="paymentMethod"
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={formData.paymentMethod}
          onChange={handleChange}
        >
          <option value="UPI">UPI</option>
        </select>
        <button
          type="submit"
          className="w-full bg-gold text-black font-bold py-2 px-4 rounded hover:bg-yellow-500"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

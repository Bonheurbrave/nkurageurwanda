import React, { useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [total, setTotal] = useState(0); // To store the total price of the cart
  const userId = localStorage.getItem("userId"); // Replace with actual user ID from the app's context or authentication
  const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
  
  // Fetch cart items from the backend when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        });
        setCartItems(response.data); // Set the cart items based on the response from the backend
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [userId, token]); // Re-fetch cart items when userId or token changes

  // Calculate the total whenever cartItems are updated
  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.productId.price * item.quantity, // Calculate the total price
        0
      );
      setTotal(totalAmount); // Set the total amount
    };

    calculateTotal(); // Recalculate total whenever cartItems changes
  }, [cartItems]);

  // Handle the removal of an item from the cart
  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/${userId}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token in the Authorization header
        },
      });
      setCartItems(cartItems.filter((item) => item.productId._id !== productId)); // Remove the item from the state
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  console.log(cartItems);

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-green-500 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.productId._id} // Unique key for each cart item (productId._id)
                  className="flex items-center justify-between border-b pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={`http://localhost:4000${item.productId.image}`} // Make sure the image path is correct
                      alt={item.productId.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-green-500">{item.productId.name}</h2>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <CurrencyFormat
                        className="text-sm text-gray-500"
                        value={item.productId.price}
                        suffix=" Frw"
                        thousandSeparator={true}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyFormat
                      className="text-lg font-bold text-orange-300"
                      value={item.productId.price * item.quantity}
                      thousandSeparator={true}
                      suffix=" Frw"
                    />
                    <button
                      onClick={() => handleRemoveItem(item.productId._id)} // Remove item when clicked
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-green-500">Total:</h2>
              <p className="text-2xl font-bold text-orange-300">
                <CurrencyFormat
                  value={total}
                  displayType={'text'}
                  thousandSeparator={true}
                  suffix=" Frw"
                />
              </p>
            </div>
            <div className="mt-6">
              <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartPage;

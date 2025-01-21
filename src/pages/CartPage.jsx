// CartPage.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { removeFromCart } from '../store/cartSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const cartitems = useSelector((state)=>state.cart.cart);
  
  useEffect(()=>{
      setCart(cartitems);
      
      
  } , [])
  // Fetch the cart data from the backend
//   const userId = 'USER_ID'; // Replace with actual user ID

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(`/api/cart/${userId}`);
//         setCart(response.data);

//         // Calculate the total
//         const totalAmount = response.data.reduce(
//           (acc, item) => acc + item.price * item.quantity,
//           0
//         );
//         setTotal(totalAmount);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       }
//     };

//     fetchCart();
//   }, []);

//   const handleRemoveItem = async (productId) => {
//     try {
//       await axios.delete(`/api/cart/remove/${userId}`, {
//         data: { productId },
//       });
//       // Re-fetch the cart after removing the item
//       const response = await axios.get(`/api/cart/${userId}`);
//       setCart(response.data);
//     } catch (error) {
//       console.error('Error removing item:', error);
//     }
//   };

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-green-500 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={item.productId}
                  className="flex items-center justify-between border-b pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.productId}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-green-500">{item.name}</h2>
                      
                      <p className="text-sm text-gray-500">Qty: 3</p>
                      <CurrencyFormat className="text-sm text-gray-500" value={item.price} suffix=' Frw' thousandSeparator={true}/>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyFormat className="text-lg font-bold text-orange-300" value={item.price} thousandSeparator={true} suffix=' Frw'/>
                    
                    
                    <button
                      onClick={() => dispatch(removeFromCart())}
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
              <p className="text-2xl font-bold text-orange-300">${total}</p>
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

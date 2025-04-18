import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
const airtel = '/assets/images/airtel.png';
const momo = "/assets/images/momo.jpeg";
const mastercard = "/assets/images/mastercard.png";
const paypal = "/assets/images/paypal.png";
const logo = '/assets/images/logo.png'; // Fallback logo image

// Modal message component
const Modal = ({ closeModal }) => (
  <motion.div
    className="w-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="bg-white p-8 rounded-xl w-11/12 max-w-lg text-center"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-black mb-4">Hang tight, we're still working on it! 🚧</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for using our app! While the<b> 'Proceed to Checkout'</b> feature is
        currently under development, don't worry — you can still explore our platform and enjoy
        browsing with all the great features we’ve designed for you!
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We’re using best cutting-edge technologies to deliver a smooth and visually stunning experience, and we’re excited to bring you the best shopping experience possible.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Thanks for being patient as we make things even better. Stay tuned for upcoming updates!
      </p>
      <button
        onClick={closeModal}
        className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [total, setTotal] = useState(0); // To store the total price of the cart
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const userId = localStorage.getItem("userId"); // Replace with actual user ID from the app's context or authentication
  const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage

  // Fetch cart items from the backend when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          `https://nkurageurwanda.onrender.com/api/cart/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token in the Authorization header
            },
          }
        );
        setCartItems(response.data); // Set the cart items based on the response from the backend
      } catch (error) {
        console.error("Error fetching cart items:", error);
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
      await axios.delete(
        `https://nkurageurwanda.onrender.com/api/cart/${userId}/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token in the Authorization header
          },
        }
      );
      setCartItems(
        cartItems.filter((item) => item.productId._id !== productId)
      ); // Remove the item from the state
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Open the modal when the "Proceed to Checkout" button is clicked
  const openModal = () => {
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle image error to show the fallback logo if the image fails
  const handleImageError = (e) => {
    e.target.src = logo; // Set to the fallback logo image when the image fails
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        className="max-w-screen px-4 sm:px-8 lg:px-10 mx-auto py-6 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold px-3 text-left text-black underline mb-6">
          Your Shopping Basket
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="space-y-4 bg-white shadow-lg p-6 flex-1">
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
                      src={`https://nkurageurwanda.onrender.com${item.productId.image}`} // Make sure the image path is correct
                      alt={item.productId.name}
                      className="w-20 h-20 object-cover rounded-md"
                      onError={handleImageError} // Handle image error to show fallback logo
                    />
                    <div>
                      <h2 className="text-xl capitalize font-semibold text-green-500">
                        {item.productId.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        <span className="font-bold">Quantity:</span>{" "}
                        {item.quantity}
                      </p>
                      <CurrencyFormat
                        prefix="Amount/1product : "
                        className="text-sm text-gray-500 outline-none"
                        value={item.productId.price}
                        suffix=" Frw "
                        thousandSeparator={true}
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyFormat
                      className="text-lg font-bold text-orange-300 outline-none"
                      value={item.productId.price * item.quantity}
                      thousandSeparator={true}
                      suffix=" Frw"
                      readOnly={true}
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
            <div className="bg-white shadow-md px-6 py-4 w-full sm:w-2/5 flex flex-col items-center">
              <h1 className="font-semibold text-slate-500 text-xl animate-bounce text-center mb-4">
                Your Goodies Galore
              </h1>
              <div className="w-full mb-4">
                <h1 className="font-bold text-sm py-4">Available Payments</h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
                  <img src={momo} alt="no internet connections" width={100} />
                  <img src={airtel} alt="no internet connections" width={100} />
                  <img src={paypal} alt="no internet connections" width={100} />
                  <img src={mastercard} alt="no internet connections" width={100} />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-green-500">Total:</h2>
                <p className="text-xl font-bold text-green-800 px-3">
                  <CurrencyFormat
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    className="outline-none font-extrabold"
                    suffix=" Frw"
                  />
                </p>
              </div>
              <div className="mt-6 w-full">
                <button
                  onClick={openModal}
                  className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Display the modal when showModal is true */}
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default CartPage

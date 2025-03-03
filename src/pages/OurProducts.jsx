import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Your existing Redux action
import axios from "axios";
import { toast } from "sonner"; // For notifications

const OurProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]); // Store all products without categories

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from the API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products"); // Replace with your endpoint
        console.log(response.data);
        setProducts(response.data); // Set fetched products
      } catch (error) {
        console.error("Error fetching products", error);
        toast.error("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means it runs only once when the component mounts

  const handleViewProductDetails = (product) => {
    setIsOpen(true);
    // You can further handle product details view here
  };

  const handleScroll = (direction, containerId) => {
    const scrollContainer = document.getElementById(containerId);
    const scrollAmount = direction === "right" ? 300 : -300;
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage
    const userId = localStorage.getItem("userId"); // Get user ID from localStorage

    if (!token) {
      toast.error("Please login to add items to your cart.");
      window.location.href = "/login"; // Redirect to the login page
      return;
    }

    if (!userId) {
      toast.error("User ID not found. Please login again.");
      window.location.href = "/login"; // Redirect to the login page
      return;
    }

    try {
      const quantity = 1; // Default quantity to 1

      // Log the data being sent to the server
      console.log({
        productId: product._id,
        userId,
        quantity,
      });

      const response = await axios.post(
        "http://localhost:4000/api/cart/add", // API endpoint to add to cart
        { productId: product._id, userId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        }
      );

      if (response.status === 200) {
        dispatch(addToCart(product)); // Update Redux store
        toast.success("Product added to cart successfully!");
      } else {
        toast.error("Failed to add product to cart. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error.response || error.message || error);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {isOpen ? null : (
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Products</h2>

          {/* Loop through all products */}
          <div className="relative">
            <div
              className="flex space-x-8 overflow-x-auto scroll-smooth custom-scrollbar"
              id="product-container"
            >
              {products.map((product) => (
                <div
                  key={product._id} // Ensure you're using a unique key (product._id is unique)
                  className="flex-none w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
                >
                  <img
                    src={`http://localhost:4000${product.image}`} // Assuming image path is relative to your server
                    alt={product.name}
                    className="w-full h-40 object-cover"
                    onClick={() => handleViewProductDetails(product)} // Handle product details
                  />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>

                    <CurrencyFormat
                      className="text-xl text-indigo-600 font-bold text-center"
                      suffix=" Frw"
                      value={product.price}
                      thousandSeparator={true}
                    />

                    <button
                      className="bg-orange-300 text-white w-full rounded-md py-2"
                      onClick={() => handleAddToCart(product)} // Add product to cart
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <motion.button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
              onClick={() => handleScroll("left", "product-container")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ←
            </motion.button>

            <motion.button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
              onClick={() => handleScroll("right", "product-container")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OurProducts;

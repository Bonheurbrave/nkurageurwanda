import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Your existing Redux action
import axios from "axios";
import { toast } from "sonner"; // For notifications

const logo = '/assets/images/logo.png';

const OurProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]); // Store all products without categories

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from the API when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://nkurageurwanda.onrender.com/api/products"); // Replace with your endpoint
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
    
    // Check if token exists
    if (!token) {
      toast.error("Please login to add items to your cart.");
      window.location.href = "/login"; // Redirect to the login page
      return;
    }

    // Check if user ID exists
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
        "https://nkurageurwanda.onrender.com/api/cart/add", // API endpoint to add to cart
        { productId: product._id, userId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        }
      );

      // Check if response is successful
      if (response.status === 200) {
        dispatch(addToCart(product)); // Update Redux store
        toast.success("Product added to cart successfully!");
      } else {
        // Handle failure if response status is not 200
        toast.error("Failed to add product to cart. Please try again.");
      }
    } catch (error) {
      // Improved error handling and logging
      console.error("Error adding product to cart:", error.response || error.message || error);
      toast.error(
        error.response?.data?.message || "Failed to add product to cart. Please try again."
      );
    }
  };

  // Function to handle image load error
  const handleImageError = (e) => {
    e.target.src = logo; // If the image fails to load, replace it with the logo
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
              className="flex flex-wrap justify-center gap-8 overflow-x-auto scroll-smooth custom-scrollbar"
              id="product-container"
            >
              {products.map((product) => (
                <div
                  key={product._id} // Ensure you're using a unique key (product._id is unique)
                  className="bg-white shadow-lg rounded-lg overflow-hidden p-5 max-w-xs w-full"
                >
                  <img
                    src={product.image ? `https://nkurageurwanda.onrender.com${product.image}` : logo} // Default to logo if no image
                    alt={product.name}
                    className="h-52 object-cover mb-4 mx-auto"
                    width={200}
                    onClick={() => handleViewProductDetails(product)} // Handle product details
                    onError={handleImageError} // Handle image load error and fallback to logo
                  />

                  <h3 className="font-semibold text-lg">{product.name}</h3>

                  <p className="text-gray-500 text-sm">{product.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <CurrencyFormat
                      className="text-green-500 font-semibold"
                      suffix=" Frw"
                      value={product.price}
                      thousandSeparator={true}
                    />

                    <button
                      className="bg-orange-300 text-white py-1 px-3 rounded"
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

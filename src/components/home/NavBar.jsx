import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import logo from "../../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // To track if navbar should be fixed
  const [cartCount, setCartCount] = useState(0); // State to hold cart item count
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token"); // Check if the user is logged in
  const userId = localStorage.getItem("userId"); // Assuming user ID is stored in localStorage after login

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true); // Set navbar as fixed when scrolled
      } else {
        setIsFixed(false); // Reset when at the top of the page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  // Fetch cart data when the user is logged in
  useEffect(() => {
    if (isLoggedIn && userId) {
      // Fetch cart items from the backend
      axios
        .get(`/api/cart/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setCartCount(response.data.length); // Set the cart item count
        })
        .catch((error) => {
          console.error("Error fetching cart:", error);
        });
    }
  }, [isLoggedIn, userId]);

  // Handle Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <motion.nav
        className={`${
          isFixed
            ? "fixed top-0 left-0 w-full bg-green-900 shadow-md z-50"
            : "relative w-full bg-green-800 text-white"
        } py-4 px-8 transition-all duration-300 ease-in-out`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-1/5 sm:w-1/6 md:w-1/6 lg:w-1/12"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-gray-200 transition duration-300">
              Services
            </Link>
            <Link to="/products" className="text-white hover:text-gray-200 transition duration-300">
              Products
            </Link>
            <Link to="/about-us" className="text-white hover:text-gray-200 transition duration-300">
              About
            </Link>
            <Link to="/contact-us" className="text-white hover:text-gray-200 transition duration-300">
              Contact
            </Link>
            <Link to="/gallery" className="text-white mr-10 hover:text-gray-200 transition duration-300">
              Gallery
            </Link>
          </div>

          {/* User and Cart Icons */}
          <div className="flex justify-end space-x-4 text-xl text-white">
            {isLoggedIn ? (
              <>
                <div className="flex mt-4 pl-4">
                  <Link to="/cart">
                    <FaCartShopping />
                  </Link>
                  {cartCount > 0 && <sup>{cartCount}</sup>} {/* Display cart count */}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-transparent border-2 border-orange-400 px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-300 transition ease-in-out duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="pl-4 flex space-x-3">
                  <Link to="/register">
                    <button className="bg-transparent border-2 border-orange-400 px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-300 transition ease-in-out duration-300">
                      Signup
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="bg-transparent border-2 border-orange-400 px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-300 transition ease-in-out duration-300">
                      Signin
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Donate Us Button on the Right */}
      <motion.div
        className="fixed top-20 right-4 bg-orange-500 text-white py-2 px-5 rounded-full shadow-lg cursor-pointer z-50 flex items-center space-x-3"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(255, 165, 0, 0.6)",
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0px 5px 15px rgba(255, 165, 0, 0.8)",
        }}
        onClick={() => window.open("https://wa.me/+250785373027", "_blank")}
      >
        <FaWhatsapp className="text-2xl" />
        <span className="text-sm font-semibold">Donate Us</span>
      </motion.div>
    </>
  );
};

export default NavBar;

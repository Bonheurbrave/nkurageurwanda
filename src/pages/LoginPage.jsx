import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "https://nkurageurwanda.onrender.com";

const LoginPage = () => {
  const goto = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // State to track whether user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (by verifying the presence of the token)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true); // If a token exists in localStorage, the user is considered logged in
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      // Send login request to the server
      const response = await axios.post("/api/users/login", {
        email: email,
        password: password,
      });

      // If login is successful, store the token and userId in localStorage
      localStorage.setItem("token", response.data.token); // Save token for future requests
      localStorage.setItem("userId", response.data.userId); // Save userId to identify the user

      setIsLoggedIn(true); // Update login state
      toast.success("Login successful!");

      // Redirect to home page/dashboard after successful login
      setTimeout(() => {
        setLoading(false);
        goto("/"); // Redirect user to home/dashboard page
      }, 2000); // Adding delay to allow user to see success toast
    } catch (error) {
      setLoading(false);

      // If login fails, show error toast with a relevant message
      if (error.response) {
        const errorMessage = error.response.data || "Invalid credentials.";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-1/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          {isLoggedIn ? (
            <motion.button
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold"
              disabled
            >
              Already Logged In
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          )}
        </form>

        {/* Redirect to Registration page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-green-600 hover:text-green-800">
              Register here
            </a>
          </p>
        </div>
      </motion.div>
      <Toaster duration={2000} richColors />
    </div>
  );
};

export default LoginPage;

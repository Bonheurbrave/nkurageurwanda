import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate form submission (replace with real logic, e.g., API call)
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-screen-xl flex flex-col lg:flex-row justify-between items-center lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold text-center lg:text-left text-gray-800 mb-8">
            Contact - Us
          </h2>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4 text-gray-700">
              <FaPhoneAlt className="text-indigo-600 text-xl" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+250 785 373 027</p>
                <p>+250 794 082 154</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4 text-gray-700">
              <FaEnvelope className="text-indigo-600 text-xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p>info@nkurageurwanda.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 text-gray-700">
              <FaMapMarkerAlt className="text-indigo-600 text-xl" />
              <div>
                <p className="font-semibold">Location</p>
                <p>KN St, Kigali, Rwanda</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/nkurageurwanda" className="text-indigo-600 hover:text-indigo-800">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.x.com/nkurageurwanda" className="text-indigo-600 hover:text-indigo-800">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/nkurageurwanda" className="text-indigo-600 hover:text-indigo-800">
                <FaInstagram className="text-2xl" />
              </a>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <p className="font-semibold">Business Hours</p>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          {/* Error message */}
          {error && (
            <motion.div
              className="text-red-500 text-sm text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

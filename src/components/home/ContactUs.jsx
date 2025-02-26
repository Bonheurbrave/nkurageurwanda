import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24 flex justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          We would love to hear from you! Feel free to reach out for any inquiries.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-4xl text-orange-300" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">Phone</h3>
              <p className="text-gray-600">+250794082154</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-4xl text-orange-300" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">Location</h3>
              <p className="text-gray-600">Kigali , Rwanda Gasabo </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-4xl text-orange-300" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">Email</h3>
              <p className="text-gray-600">info@nkurageurwanda.com</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
          className="space-y-6"
        >
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-green-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-green-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-green-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full resize-none mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-300 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;

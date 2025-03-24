import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      {/* Heading Section */}
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

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              <p className="text-gray-600">Kigali, Rwanda, Gasabo</p>
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

      {/* Google Map Embed */}
      <div className="mt-12 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14962.982749209987!2d29.7429998!3d-2.5932359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d80f60e8b01e21%3A0x8ab6321b3a0e06ca!2sHuye%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1692071629575!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Google Map of Kigali"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

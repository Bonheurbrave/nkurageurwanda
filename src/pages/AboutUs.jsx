// AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaHands, FaCogs, FaBook } from "react-icons/fa";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
  return (
    
    <div className="container mx-auto p-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-green-600">About Us</h1>
        <p className="text-lg text-gray-700 mt-4">
          Discover our mission, vision, and services dedicated to preserving
          and promoting cultural heritage.
        </p>
      </motion.div>

      {/* Vision and Mission */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Our Vision</h2>
          <p className="text-gray-700">
            To be a global leader in preserving, promoting, and celebrating
            cultural heritage, inspiring people to connect with their roots and
            embrace the richness of diverse traditions for future generations.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
          <p className="text-gray-700">
            To empower communities by preserving and showcasing their unique
            cultural heritage through innovative products, immersive experiences,
            and sustainable practices, fostering global understanding, appreciation,
            and economic growth.
          </p>
        </div>
      </motion.div>

     {/* Elegant CTA Section */}
<section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
    Discover the Heart of Heritage
  </h2>
  <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-12">
    Whether you're exploring handcrafted treasures or immersing yourself in cultural journeys, we guide you through experiences that connect you to the roots of tradition.
  </p>
  <div className="flex flex-col md:flex-row gap-6">
    <Link to="/products">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Continue to Products
      </motion.button>
    </Link>
    <Link to="/tours">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-transparent border border-white text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-white hover:text-black transition"
      >
        Book a Tour
      </motion.button>
    </Link>
  </div>
</section>

      {/* Products */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Handcrafted Goods"
            description="Traditional clothing, jewelry, pottery, carvings, and sculptures."
            icon={<FaBook className="w-8 h-8 text-orange-300" />}
          />
          <ProductCard
            title="Cultural Artifacts"
            description="Miniature replicas, ancient tools, and authentic cultural artifacts."
            icon={<FaBook className="w-8 h-8 text-orange-300" />}
          />
          <ProductCard
            title="Literature and Media"
            description="Books, documentaries, music, and digital archives."
            icon={<FaBook className="w-8 h-8 text-orange-300" />}
          />
        </div>
      </motion.div>
          <OurTeam />
          
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-green-600">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

// Product Card Component
const ProductCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-green-600">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </motion.div>
  
);

export default AboutUs;

// AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';
import { FaBriefcase, FaHands, FaCogs, FaBook } from "react-icons/fa";
import OurTeam from "../components/OurTeam";
const fidel = '/assets/images/team/fidel.jpg'


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
            
To be Africa’s beacon in preserving and celebrating cultural heritage, connecting generations, enriching identity, and inspiring global respect for our diverse traditions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-600">Our Mission</h2>
          <p className="text-gray-700">
            To empower communities across Rwanda and Africa by innovatively showcasing their heritage through cultural products, immersive experiences, and sustainable models that drive pride, unity, and inclusive development
          </p>
        </div>
      </motion.div>

      <FounderMessage />

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

const FounderMessage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8"
      >
        {/* Founder Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={fidel} 
            alt="Habiyaremye Fidel" 
            className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 shadow-md"
          />
        </div>

        {/* Title and Info */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Message from the Founder</h2>
          <p className="text-md text-gray-600">Habiyaremye Fidel, Founder & CEO, <span className="font-semibold text-yellow-600">NKURAGE U RWANDA LTD</span></p>
        </div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-gray-700 leading-relaxed text-justify space-y-4 relative"
        >
          <FaQuoteLeft className="text-yellow-500 text-2xl absolute -top-4 left-0" />
          <p> The journey to founding NKURAGE U RWANDA LTD began long before the company was registered. It started with a personal journey rooted in education, community work, and a deep reflection on Rwanda’s history and cultural identity.
From my early days in secondary school, where I pursued humanities with a passion for understanding people and societies, I knew that my path would be tied to the story of my country. That path continued as I pursued a Bachelor’s degree in History and Heritage Studies at the University of Rwanda, where I deepened my knowledge of how history, culture, and identity interconnect. Along the way, I was privileged to receive comprehensive training in cultural heritage management, both locally and through international platforms, gaining insights into how heritage is preserved, interpreted, and made relevant for today’s world.
I studied how history and culture are not just things of the past but powerful tools that shape the present and guide the future. I came to understand that when a nation loses its culture, it risks losing itself, its values, its vision, and its soul. In contrast, nations that root development in their cultural identity build stronger, more resilient societies.
Through my learning, I also discovered a critical truth: cultural heritage cannot survive on passion alone; it needs economic means to be preserved, celebrated, and passed on. Too often, I saw heritage initiatives struggling due to a lack of sustainable funding or community ownership. That’s when I realized that to truly protect and elevate our culture, we must treat it not just as history but as a living, breathing opportunity for innovation and economic empowerment.
And so NKURAGE U RWANDA LTD was born, not just as a company but as a social enterprise with a mission to connect Rwandans to their roots, turn heritage into an economic driver, and inspire pride, unity, and resilience in our people. “Nkurage” means “inheritance”, and this company exists to transform that inheritance into a foundation for entrepreneurship, education, and sustainable development.
Through NKURAGE U RWANDA LTD, I want to demonstrate that our culture is not a burden of the past but the engine of our future. Rooted in our slogan, “Ubumwe, Ubutwari, Umurava,” we are building a movement where culture drives purpose, legacy fuels innovation, and tradition becomes a bridge between generations. By transforming cultural heritage into opportunities for job creation, youth empowerment, and community entrepreneurship, we aim to connect the wisdom of our ancestors with the energy of today’s youth, creating a future where identity and development go hand in hand.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};



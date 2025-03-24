import React from "react";
import { FaRegHandshake, FaChalkboardTeacher, FaGlobeAmericas, FaMagic } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomerReviews from "../components/CustomerReviews";
import { Link } from "react-router-dom";
const servicesData = [
  {
    title: "Cultural Tours and Guided Experiences",
    description: [
      "Guided historical site tours",
      "Cultural village visits",
      "Museum and gallery tours",
      "Archaeological site exploration",
      "Storytelling sessions with elders or community leaders"
    ],
    icon: <FaRegHandshake />,
    button:"Visit Tour Page",
    link:"/tours"
  },
  {
    title: "Workshops and Training",
    description: [
      "Traditional crafts workshops (e.g., pottery, weaving, carving)",
      "Heritage preservation training",
      "Traditional music and dance lessons",
      "Cooking classes featuring traditional cuisines"
    ],
    icon: <FaChalkboardTeacher />,
    button:"Visit our workshops",
    link:"/products"
  },
  {
    title: "Event Organization",
    description: [
      "Heritage festivals and fairs",
      "Traditional weddings and ceremonies for visitors",
      "Cultural performance events (music, dance, theater)",
      "Historical reenactments"
    ],
    icon: <FaGlobeAmericas />,
    button:"Visit our Event organisation Page",
    link:"/products"
  },
  {
    title: "Consultancy Services",
    description: [
      "Cultural heritage preservation and management",
      "Tourism strategy development",
      "Community-based tourism project development"
    ],
    icon: <FaMagic />,
    button:"Visit Our consultancy Services",
    link:"/products"
  },
];

const ServicesPage = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-4xl font-semibold text-center text-gray-800 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <ul className="space-y-4">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-indigo-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2M21 12a9 9 0 11-9-9"
                      />
                    </svg>
                    {item}
                  </li>
                  
                ))}
              </ul>
              <Link to={service.link}>
                  <motion.button
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                    initial={{ scale: 1 }}
                    
                    transition={{
                      repeat: Infinity, // Loop infinitely
                      repeatType: "loop", // Repeat the animation loop
                      duration: 1.5, // Duration for one complete loop cycle
                      ease: "easeInOut", // Smooth transition
                    }}
                  >
                    {service.button}
                  </motion.button>
                  </Link>

            </motion.div>
            
          ))}
        </div>
      </div>
      <CustomerReviews />
    </div>
  );
};

export default ServicesPage;

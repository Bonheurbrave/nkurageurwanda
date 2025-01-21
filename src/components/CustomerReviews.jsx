import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"; // Arrow icons for navigation

const reviews = [
  {
    name: "Bonheur Ndikumwenayo",
    location: "Kigali , Rwanda",
    review:
      "The cultural heritage tour was an unforgettable experience! The guides were incredibly knowledgeable, and the locations we visited were simply breathtaking. I highly recommend it!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    location: "London, UK",
    review:
      "I attended a traditional craft workshop, and it was a fantastic experience. I learned so much about local artistry, and the instructors were so patient. Truly an enriching experience!",
    rating: 4,
  },
  {
    name: "Carlos Ramirez",
    location: "Madrid, Spain",
    review:
      "I visited the heritage site last year, and it was a life-changing experience. The rich history and beautiful sites really left an impression on me. I will definitely return.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    location: "Dubai, UAE",
    review:
      "The cultural exchange programs were an eye-opener. The knowledge shared by the local community was invaluable. I can’t wait for the next one!",
    rating: 4,
  },
  {
    name: "Emily Zhang",
    location: "Sydney, Australia",
    review:
      "A wonderful experience! The combination of historical tours and interactive experiences is a unique way to learn about culture. Highly recommend for anyone passionate about history!",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <div className=" py-4">

    
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-xl text-white opacity-80">
          Hear from those who experienced our cultural heritage tours and services.
        </p>
      </div>

      {/* Scrollable Reviews Container */}
      <div className="relative">
        {/* Scroll Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-white bg-indigo-600 p-3 rounded-full shadow-lg"
          >
            <AiOutlineArrowLeft className="text-2xl" />
          </motion.button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="text-white bg-indigo-600 p-3 rounded-full shadow-lg"
          >
            <AiOutlineArrowRight className="text-2xl" />
          </motion.button>
        </div>

        {/* Scrollable Reviews */}
        <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="min-w-[350px] bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Quote Section */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute top-0 left-0 text-6xl text-gray-200 transform -translate-x-4 -translate-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  &ldquo;
                </motion.div>
                <p className="text-lg text-gray-800 italic">{review.review}</p>
              </div>

              {/* Rating Section */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.name[0]}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CustomerReviews;

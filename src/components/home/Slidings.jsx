import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import '../../index.css'
const Slidings = () => {
  const titles = [
    'Welcome to the Timeless World of History Products',
    'Explore Ancient Artifacts and Stories Product',
    'Discover Forgotten Rwandan Legends and Myths',
    'Dive into the Depths of Ancient Rwanda Culture',
    "All at Lower Prices"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className=' absolute top-72 right-60'>

        <motion.h1
          key={titles[currentIndex]} // Key to trigger re-render on title change
          className="text-4xl md:text-5xl font-bold text-white text-center "
          initial={{ x: '100%' }} // Start position off-screen to the right
          animate={{ x: 0 }} // Animate to the center
          exit={{ x: '-100%' }} // Slide out to the left
          transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
              duration: 1.5
            }}
            >
          {titles[currentIndex]}
        </motion.h1>
    
            </div>
  );
};

export default Slidings;

import React from 'react';
import CustomerReviews from '../CustomerReviews';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const artifacts = '/assets/images/artifacts.jpeg';
const foods = '/assets/images/foods.jpeg'
const homedecor = '/assets/images/homedecor.jpeg'
const kits = '/assets/images/kits.jpeg'
const handicraft = '/assets/images/handicraft.jpeg'
const literature = '/assets/images/literature.jpeg'
const amateke = '/assets/images/products/amateke.jpg'
const AboutUs = () => {
  const products = [
    {
      title: 'Handcrafted Goods',
      link:"/products/handicrafted-goods",
      features: ['Traditional clothing and textiles', 'Jewelry and accessories', 'Pottery, carvings, and sculptures'],
      description: 'Explore our unique handcrafted goods, made with love and tradition.',
      image:handicraft
    },
    {
      title: 'Cultural Artifacts (Replicas)',
      link:"/products/cultural-artifacts",
      features: ['Miniature replicas of heritage sites', 'Authentic replicas of ancient tools or artifacts'],
      description: 'Authentic replicas that capture the essence of our rich cultural heritage.',
      image: artifacts
    },
    {
      title: 'Literature and Media',
      link:"/products/literature-media",
      features: ['Books on cultural and historical topics', 'DVDs or digital downloads of traditional music or dances', 'Documentaries or films showcasing heritage stories'],
      description: 'Dive into our extensive collection of literature and media.',
      image: literature
    },
    {
      title: 'Home Décor',
      link:"/products/home-decorations",
      features: ['Traditional wall hangings', 'Handmade rugs and carpets', 'Sculptures and figurines'],
      description: 'Adorn your home with beautiful, traditional décor.',
      image: homedecor
    },
    {
      title: 'Food and Beverages',
      link:"/products/foods-beverages",
      features: ['Packaged traditional snacks', 'Locally made teas, coffees, or alcoholic beverages', 'Recipe books featuring indigenous cuisines'],
      description: 'Taste the flavors of our land with our food and beverages.',
      image: amateke
    },
    {
      title: 'Cultural Kits',
      link:"/products/cultural-kits",
      features: ['DIY craft kits for traditional practices', 'Educational kits for schools (e.g., historical timelines, maps)'],
      description: 'Educational and fun cultural kits for all ages.',
      image: kits
    },
  ];

  const cardVariants = {
    initial: {
      rotateY: 0,
    },
    hover: {
      rotateY: 180, // Flip the card on hover
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const frontFaceVariants = {
    initial: {
      rotateY: 0,
    },
    hover: {
      rotateY: 0, // Keep the front face as is on hover
      transition: { duration: 0.5 },
    },
  };

  const backFaceVariants = {
    initial: {
      rotateY: 180, // Initially hide the back face
    },
    hover: {
      rotateY: 0, // Rotate back face to front on hover
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <div className="bg-gray-30 py-16 px-8">
      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Vision</h2>
        <p className="text-lg text-gray-700 mb-8 text-left">
To be Africa’s beacon in preserving and celebrating cultural heritage, connecting generations, enriching identity, and inspiring global respect for our diverse traditions.        </p>
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Mission</h2>
        <p className="text-lg text-gray-700 text-left">
To empower communities across Rwanda and Africa by innovatively showcasing their heritage through cultural products, immersive experiences, and sustainable models that drive pride, unity, and inclusive development.        </p>
      </section>

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

      {/* Products Section */}
      <section className="max-w-7xl mx-auto mb-16">
  <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">Our Products</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Product Card Component */}
    {products.map((product) => (
      <motion.div
      className="relative py-52 p-6 bg-white shadow-lg rounded-lg overflow-hidden"
      key={product.title}
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      style={{
        perspective: '1000px', // Add 3D effect to parent for card flip
        transformStyle: 'preserve-3d', // Ensure child elements are 3D transformed
      }}
    >
      {/* Front Face */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center h-full bg-green-30 backface-hidden"
        variants={frontFaceVariants}
        style={{
          backfaceVisibility: 'hidden', // Hide the back face when front is shown
          position: 'absolute',
        }}
      >
        <img src={product.image} alt={product.title} className="w-1/3" />
        <h3 className="text-xl font-semibold text-green-700 mb-4">{product.title}</h3>
        <ul className="list-disc pl-5">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </motion.div>

      {/* Back Face */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center rotate-y-180 bg-green-300 backface-hidden p-4"
        variants={backFaceVariants}
        style={{
          backfaceVisibility: 'hidden', // Hide the back face when not shown
          position: 'absolute',
        }}
      >
        <Link to="/products">
        <img src={product.image} alt={product.title} className="pb-6" />
        </Link>
      </motion.div>
    </motion.div> 
    ))}
    <div>
      <Link to="/products">
    <motion.button
      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.1, 1], // Loop animation for scaling effect
        rotate: [0, 3, 0], // Subtle rotation
      }}
      transition={{
        repeat: Infinity, // Loop infinitely
        repeatType: "loop", // Repeat the animation loop
        duration: 1.5, // Duration for one complete loop cycle
        ease: "easeInOut", // Smooth transition
      }}
    >
      Visit Our Product Page
    </motion.button>
    </Link>
    </div>
  </div>
</section>
      <CustomerReviews />
    </div>
  );
};

export default AboutUs;

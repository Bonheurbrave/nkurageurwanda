// ProductDetails.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
const ProductDetails = ({ product , isopen , setisopen }) => {
    const handleclose=()=>{
        setisopen(false)
    }
    const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white p-6"
    >
        <MdClose color='black' className=' float-right font-bold' size={30} onClick={handleclose}/>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-4 left-4 bg-green-500 text-white py-1 px-3 rounded-md text-sm">
            {product.category}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-green-600">{product.name}</h2>
          <p className="mt-2 text-lg text-gray-700">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center mt-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={`mr-1 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">{product.rating} / 5</span>
          </div>

          {/* Price */}
          <div className="flex items-center mt-6">
            <CurrencyFormat className="text-2xl font-bold text-green-500" thousandSeparator={true} value={product.price} suffix=' Frw' />
            <button
            onClick={()=>{dispatch(product)}}
              className="ml-4 px-6 py-2 bg-orange-300 text-white rounded-lg hover:bg-orange-400 transition duration-300"
            >
              <FaCartPlus className="inline-block mr-2" />
              Add to Cart
            </button>
            <button onClick={handleclose} className="ml-4 px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300" >Close</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;

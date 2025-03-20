import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Importing all the images
import tales from '/assets/images/products/tales.jpg';
import lefttotell from "/assets/images/products/lefttotell.jpg";
import insidehotelrwanda from "/assets/images/products/insidehotelrwanda.jpg";
import culturesmart from "/assets/images/products/culturesmart.jpg";
import apprendrwanda from "/assets/images/products/apprendrwanda.jpg";
import ababyinnyi from "/assets/images/products/ababyinnyi.jpg";
import agatebo from "/assets/images/products/agatebo.jpg";
import amashyiga from "/assets/images/products/amashyiga.jpg";
import amateke from "/assets/images/products/amateke.jpg";
import amayugi from "/assets/images/products/amayugi.jpg";
import bwami from "/assets/images/products/bwami.jpg";
import gusangira from "/assets/images/products/gusangira.jpg";
import ibigori from "/assets/images/products/ibigori.jpg";
import ibikapu from "/assets/images/products/ibikapu.jpg";
import ibiseke from "/assets/images/products/ibiseke.jpg";
import icumuningabo from "/assets/images/products/icumuningabo.jpg";
import igicugutu from "/assets/images/products/igicugutu.jpg";
import igisabo from "/assets/images/products/igisabo.jpg";
import igiseke from "/assets/images/products/igiseke.jpeg";
import igisoro from "/assets/images/products/igisoro.jpg";
import ikembe from "/assets/images/products/ikembe.jpg";
import ikondera from "/assets/images/products/ikondera.png";
import imayugi from "/assets/images/products/imayugi.jpg";
import imitako from "/assets/images/products/imitako.jpg";
import imyumbati from "/assets/images/products/imyumbati.jpg";
import inanga from "/assets/images/products/inanga.jpeg";
import inanga1 from "/assets/images/products/inanga1.png";
import ingaraba from "/assets/images/products/ingaraba.jpg";
import ingoma11 from "/assets/images/products/ingoma11.png";
import ingoma1 from "/assets/images/products/ingoma1.png";
import iningiri from "/assets/images/products/iningiri.png";
import inkanda from "/assets/images/products/inkanda.jpg";
import intango from "/assets/images/products/intango.jpg";
import intebe from "/assets/images/products/intebe.jpg";
import intore1 from "/assets/images/products/intore1.jpg";
import inyambo from "/assets/images/products/inyambo.jpg";
import isekuru from "/assets/images/products/isekuru.jpg";
import karere from "/assets/images/products/karere.jpg";
import kwirengera from "/assets/images/products/kwirengera.jpg";
import ruharage from "/assets/images/products/ruharage.jpg";
import umuduri from "/assets/images/products/umuduri.png";
import umugara from "/assets/images/products/umugara.jpg";
import umugara1 from "/assets/images/products/umugara1.jpg";
import umutako from "/assets/images/products/umutako.jpg";
import umutako1 from "/assets/images/products/umutako1.jpg";
import umwirongi from "/assets/images/products/umwirongi.jpg";
import uruhimbi from "/assets/images/products/uruhimbi.jpg";
import ibibindibiboshye from "/assets/images/products/ibibindibiboshye.jpeg";
import udutakotuboshye from "/assets/images/products/udutakotuboshye.jpeg";
import udutakotuboshye1 from "/assets/images/products/udutakotuboshye1.jpeg";
import igitebo from "/assets/images/products/igitebo.jpeg";
import inkoko from "/assets/images/products/inkoko.jpeg";
import art1 from "/assets/images/products/art1.jpeg";
import art2 from "/assets/images/products/art2.jpeg";
import art3 from "/assets/images/products/art3.jpeg";
import art5 from "/assets/images/products/art5.jpeg";
import art6 from "/assets/images/products/art6.jpeg";
import art7 from "/assets/images/products/art7.jpeg";
import art8 from "/assets/images/products/art8.jpeg";

// Array of image sources
const images = [
  
  tales,
  lefttotell,
  insidehotelrwanda,
  culturesmart,
  apprendrwanda,
  ababyinnyi,
  agatebo,
  amashyiga,
  amateke,
  amayugi,
  bwami,
  gusangira,
  ibigori,
  ibikapu,
  ibiseke,
  icumuningabo,
  igicugutu,
  igisabo,
  igiseke,

  igisoro,
  ikembe,
  ikondera,
  imayugi,
  imitako,
  imyumbati,
  inanga,
  inanga1,
  ingaraba,
  ingoma11,
  ingoma1,
  iningiri,
  inkanda,
  intango,
  intebe,
  intore1,
  inyambo,
  isekuru,
  karere,
  kwirengera,
  ruharage,
  umuduri,
  umugara,
  umugara1,
  umutako,
  umutako1,
  umwirongi,
  uruhimbi,
  ibibindibiboshye,
  udutakotuboshye,
  udutakotuboshye1,
  igitebo,
  inkoko,
  art1,
  art2,
  art3,
  art5,
  art6,
  art7,
  art8
];

const GalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Open Modal to view the image in larger size
  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  // Close the Modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Page Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Cultural Heritage Gallery
        </motion.h2>
        <p className="text-lg text-gray-600">Explore the beauty and richness of cultural heritage from around the world.</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg cursor-pointer shadow-lg"
              onClick={() => openModal(image)}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal (Lightbox) */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <motion.div
            className="relative w-full max-w-4xl p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside the modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={currentImage}
              alt="Expanded View"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 hover:bg-red-700"
              onClick={closeModal}
            >
              <FaTimes className="text-xl" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

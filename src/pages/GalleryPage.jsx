import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Importing all the images
const tales = '/assets/images/products/tales.jpg';
const lefttotell = "/assets/images/products/lefttotell.jpg";
const insidehotelrwanda = "/assets/images/products/insidehotelrwanda.jpg";
const culturesmart = "/assets/images/products/culturesmart.jpg";
const apprendrwanda = "/assets/images/products/apprendrwanda.jpg";
const ababyinnyi = "/assets/images/products/ababyinnyi.jpg";
const agatebo = "/assets/images/products/agatebo.jpg";
const amashyiga = "/assets/images/products/amashyiga.jpg";
const amateke = "/assets/images/products/amateke.jpg";
const amayugi = "/assets/images/products/amayugi.jpg";
const bwami = "/assets/images/products/bwami.jpg";
const gusangira = "/assets/images/products/gusangira.jpg";
const ibigori = "/assets/images/products/ibigori.jpg";
const ibikapu = "/assets/images/products/ibikapu.jpg";
const ibiseke = "/assets/images/products/ibiseke.jpg";
const icumuningabo = "/assets/images/products/icumuningabo.jpg";
const igicugutu = "/assets/images/products/igicugutu.jpg";
const igisabo = "/assets/images/products/igisabo.jpg";
const igiseke = "/assets/images/products/igiseke.jpeg";
const igisoro = "/assets/images/products/igisoro.jpg";
const ikembe = "/assets/images/products/ikembe.jpg";
const ikondera = "/assets/images/products/ikondera.png";
const imayugi = "/assets/images/products/imayugi.jpg";
const imitako = "/assets/images/products/imitako.jpg";
const imyumbati = "/assets/images/products/imyumbati.jpg";
const inanga = "/assets/images/products/inanga.jpeg";
const inanga1 = "/assets/images/products/inanga1.png";
const ingaraba = "/assets/images/products/ingaraba.jpg";
const ingoma11 = "/assets/images/products/ingoma11.png";
const ingoma1 = "/assets/images/products/ingoma1.png";
const iningiri = "/assets/images/products/iningiri.png";
const inkanda = "/assets/images/products/inkanda.jpg";
const intango = "/assets/images/products/intango.jpg";
const intebe = "/assets/images/products/intebe.jpg";
const intore1 = "/assets/images/products/intore1.jpg";
const inyambo = "/assets/images/products/inyambo.jpg";
const isekuru = "/assets/images/products/isekuru.jpg";
const karere = "/assets/images/products/karere.jpg";
const kwirengera = "/assets/images/products/kwirengera.jpg";
const ruharage = "/assets/images/products/ruharage.jpg";
const umuduri = "/assets/images/products/umuduri.png";
const umugara = "/assets/images/products/umugara.jpg";
const umugara1 = "/assets/images/products/umugara1.jpg";
const umutako = "/assets/images/products/umutako.jpg";
const umutako1 = "/assets/images/products/umutako1.jpg";
const umwirongi = "/assets/images/products/umwirongi.jpg";
const uruhimbi = "/assets/images/products/uruhimbi.jpg";
const ibibindibiboshye = "/assets/images/products/ibibindibiboshye.jpeg";
const udutakotuboshye = "/assets/images/products/udutakotuboshye.jpeg";
const udutakotuboshye1 = "/assets/images/products/udutakotuboshye1.jpeg";
const igitebo = "/assets/images/products/igitebo.jpeg";
const inkoko = "/assets/images/products/inkoko.jpeg";
const art1 = "/assets/images/products/art1.jpeg";
const art2 = "/assets/images/products/art2.jpeg";
const art3 = "/assets/images/products/art3.jpeg";
const art5 = "/assets/images/products/art5.jpeg";
const art6 = "/assets/images/products/art6.jpeg";
const art7 = "/assets/images/products/art7.jpeg";
const art8 = "/assets/images/products/art8.jpeg";

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

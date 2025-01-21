import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import artmuseum from '../assets/images/tours/artmuseum.jpeg';
import artvillage from '../assets/images/tours/artvillage.jpeg';
import ethnographic from '../assets/images/tours/ethnographic.jpeg'
import gisenyi from '../assets/images/tours/gisenyi.jpeg'
import gorilla from '../assets/images/tours/gorilla.jpeg'
import healers from '../assets/images/tours/healears.jpeg'
import huye from '../assets/images/tours/huye.jpeg'
import ibyiwacu from '../assets/images/tours/ibyiwacu.jpeg'
import kigalicity from '../assets/images/tours/kigalicity.jpeg'
import kigaligenocide from '../assets/images/tours/kigaligenocide.jpeg'
import musanzecaves from '../assets/images/tours/musanzecaves.jpeg'
import nyanza from '../assets/images/tours/nyanza.jpeg'
import nyungwe from '../assets/images/tours/nyungwe.jpeg'
import akagera from '../assets/images/tours/akagera.jpeg'
import kivu from '../assets/images/tours/kivu.jpeg'
import BookingForm from '../components/BookingForm';
const tours = [
  {
    id: 1,
    name: 'Huye Museum',
    description: 'Explore the cultural heritage of Rwanda at the Huye Museum, one of the most significant museums in the country.',
    location: 'Huye, Southern Province, Rwanda',
    image: huye
  },
  {
    id: 2,
    name: 'Kigali Genocide Memorial',
    description: 'Visit the Kigali Genocide Memorial and learn about the history and resilience of Rwanda.',
    location: 'Kigali, Rwanda',
    image: kigaligenocide
  },
  {
    id: 3,
    name: 'Nyanza Royal Palace',
    description: 'Discover Rwanda’s royal history at the Nyanza Royal Palace, a historical and cultural landmark.',
    location: 'Nyanza, Southern Province, Rwanda',
    image: nyanza
  },
  {
    id: 4,
    name: 'Musanze Caves',
    description: 'Explore the historic Musanze Caves and enjoy the breathtaking landscapes.',
    location: 'Musanze, Northern Province, Rwanda',
    image: musanzecaves
  },
  {
    id: 5,
    name: 'Kigali City Tour',
    description: 'Discover the vibrant culture and history of Kigali, Rwanda’s capital city.',
    location: 'Kigali, Rwanda',
    image: kigalicity
  },
  {
    id: 6,
    name: 'Ibyiwacu Cultural Village',
    description: 'Experience the rich cultural traditions of Rwanda at the Ibyiwacu Cultural Village, where you can learn about traditional Rwandan dances and customs.',
    location: 'Gisenyi, Western Province, Rwanda',
    image: ibyiwacu
  },
  {
    id: 7,
    name: 'Nyungwe National Park',
    description: 'Explore the beauty of Nyungwe National Park, known for its biodiversity, including chimpanzee tracking and scenic hikes through the forest.',
    location: 'Southwest Rwanda',
    image: nyungwe
  },
  {
    id: 8,
    name: 'Lake Kivu',
    description: 'Enjoy the tranquility of Lake Kivu, one of Africa’s Great Lakes, offering boat rides and relaxation by the shores of the lake.',
    location: 'Western Rwanda',
    image: kivu
  },
  {
    id: 9,
    name: 'Gorilla Trekking in Volcanoes National Park',
    description: 'Experience the once-in-a-lifetime adventure of gorilla trekking in Volcanoes National Park, where you can see the endangered mountain gorillas in their natural habitat.',
    location: 'Ruhengeri, Northern Province, Rwanda',
    image: gorilla
  },
  {
    id: 10,
    name: 'Ethnographic Museum of Rwanda',
    description: 'A must-see museum showcasing Rwandan history, including artifacts, traditional costumes, and cultural items.',
    location: 'Kigali, Rwanda',
    image: ethnographic
  },
  {
    id: 11,
    name: 'Rwanda Art Museum',
    description: 'Discover contemporary Rwandan art at the Rwanda Art Museum, housed in the former Presidential Palace.',
    location: 'Kigali, Rwanda',
    image: artmuseum
  },
  {
    id: 12,
    name: 'King\'s Palace Museum',
    description: 'Explore the history of Rwanda’s monarchy at the King’s Palace Museum, which showcases the traditional royal life.',
    location: 'Nyanza, Southern Province, Rwanda',
    image: nyanza
  },
  {
    id: 13,
    name: 'Rwanda Craft Village',
    description: 'Visit the Rwanda Craft Village in Kigali for unique handcrafts made by local artisans, perfect for souvenirs.',
    location: 'Kigali, Rwanda',
    image: artvillage
  },
  {
    id: 14,
    name: 'Akagera National Park',
    description: 'Witness Rwanda’s wildlife, including the Big Five, in Akagera National Park, a haven for safaris and nature walks.',
    location: 'Eastern Rwanda',
    image: akagera
  },
  {
    id: 15,
    name: 'Gisenyi',
    description: 'Visit Gisenyi, a beautiful town on the shores of Lake Kivu, known for its serenity and cultural experiences.',
    location: 'Western Rwanda',
    image: gisenyi
  },
  {
    id: 16,
    name: 'Traditional Healers Tour',
    description: 'Experience Rwanda’s traditional medicine and cultural healing practices through guided tours in rural communities.',
    location: 'Various Locations, Rwanda',
    image: healers
  },
];

const OurToursPage = () => {
    const [isopen , setisopen] = useState(false)
    const handlebooking = ()=>{
        setisopen(true);
    }
  return (
    <div>
{
  isopen ?
  <BookingForm /> :  
    <div className="container mx-auto py-12">
        
      <h1 className="text-3xl font-bold text-center mb-10 text-green-600">Our Tours</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-600">{tour.name}</h2>
              <p className="text-sm text-gray-500 my-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-600" />
                {tour.location}
              </p>
              <p className="text-gray-700">{tour.description}</p>
              <div className="mt-4 flex justify-center">
                <motion.button
                  onClick={handlebooking}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-orange-300 text-white px-4 py-2 rounded-lg hover:bg-orange-400 focus:outline-none"
                >
                  <FaCalendarAlt className="mr-2" />
                  Book Tour
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
    </div>
}
    </div>
  );
};

export default OurToursPage;

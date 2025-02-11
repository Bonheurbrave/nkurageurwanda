// import React, { useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import { motion } from "framer-motion";

// import ProductDetails from "../components/ProductDetails";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/cartSlice";
// const OurProducts = () => {
//   const [isopen, setisopen] = useState(false);
//   const [product, setproduct] = useState([]);
//   // Sample Product Data grouped by categories
//   const productCategories = [
//     

//   const dispatch = useDispatch();
//   const handleviewtheproductdetails = (product) => {
//     setproduct(product);
//     setisopen(true);
//   };

//   // Scroll handling function for each category
//   const handleScroll = (direction, containerId) => {
//     const scrollContainer = document.getElementById(containerId);
//     const scrollAmount = direction === "right" ? 300 : -300;
//     scrollContainer.scrollBy({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       {isopen ? (
//         <ProductDetails
//           product={product}
//           isopen={isopen}
//           setisopen={setisopen}
//         />
//       ) : (
//         <motion.div
//           className="max-w-7xl mx-auto text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-semibold text-gray-800 mb-8">
//             Our Products
//           </h2>

//           {/* Loop through each product category */}
//           {productCategories.map((category, index) => (
//             <div key={index} className="mb-8">
//               {/* Category Title */}
//               <h3 className="text-2xl text-left font-semibold text-gray-800 mb-4">
//                 {category.category}
//               </h3>

//               {/* Scrollable Container */}
//               <div className="relative">
//                 <div
//                   className="flex space-x-8 overflow-x-auto scroll-smooth custom-scrollbar"
//                   id={`product-container-${index}`}
//                 >
//                   {category.products.map((product) => (
//                     <div
//                       key={product.id}
//                       className="flex-none w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
//                     >
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-40 object-cover"
//                         onClick={() => {
//                           handleviewtheproductdetails(product);
//                         }}
//                       />

//                       <div className="p-4">
//                         <h3
//                           className="text-xl font-semibold text-gray-800"
//                           style={{ fontFamily: "Gotham" }}
//                         >
//                           {product.name}
//                         </h3>

//                         <CurrencyFormat
//                           className="text-xl text-indigo-600 font-bold text-center"
//                           suffix=" Frw"
//                           style={{ fontFamily: "Roboto" }}
//                           thousandSeparator={true}
//                           value={product.price}
//                         />

//                         <button
//                           className="bg-orange-300 text-white w-full rounded-md py-2"
//                           onClick={() => {
//                             dispatch(addToCart(product))
//                           }}
//                         >
//                           Add to cart
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Scroll Buttons */}
//                 <motion.button
//                   className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
//                   onClick={() =>
//                     handleScroll("left", `product-container-${index}`)
//                   }
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   ←
//                 </motion.button>

//                 <motion.button
//                   className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
//                   onClick={() =>
//                     handleScroll("right", `product-container-${index}`)
//                   }
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   →
//                 </motion.button>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default OurProducts;

import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Your existing Redux action
import axios from "axios";
import { toast } from "sonner"; // For notifications
import historyrwanda from "../assets/images/products/historyrwanda.jpg";
import tales from "../assets/images/products/tales.jpg";
import lefttotell from "../assets/images/products/lefttotell.jpg";
import insidehotelrwanda from "../assets/images/products/insidehotelrwanda.jpg";
import culturesmart from "../assets/images/products/culturesmart.jpg";
import apprendrwanda from "../assets/images/products/apprendrwanda.jpg";
import ababyinnyi from "../assets/images/products/ababyinnyi.jpg";
import agatebo from "../assets/images/products/agatebo.jpg";
import amashyiga from "../assets/images/products/amashyiga.jpg";
import amateke from "../assets/images/products/amateke.jpg";
import amayugi from "../assets/images/products/amayugi.jpg";
import bwami from "../assets/images/products/bwami.jpg";
import gusangira from "../assets/images/products/gusangira.jpg";
import ibigori from "../assets/images/products/ibigori.jpg";
import ibikapu from "../assets/images/products/ibikapu.jpg";
import ibiseke from "../assets/images/products/ibiseke.jpg";
import icumuningabo from "../assets/images/products/icumuningabo.jpg";
import igicugutu from "../assets/images/products/igicugutu.jpg";
import igisabo from "../assets/images/products/igisabo.jpg";
import igiseke from "../assets/images/products/igiseke.jpeg";
import igisobane from "../assets/images/products/igisobane.jpg";
import igisoro from "../assets/images/products/igisoro.jpg";
import ikembe from "../assets/images/products/ikembe.jpg";
import ikondera from "../assets/images/products/ikondera.png";
import imayugi from "../assets/images/products/imayugi.jpg";
import imitako from "../assets/images/products/imitako.jpg";
import imyumbati from "../assets/images/products/imyumbati.jpg";
import inanga from "../assets/images/products/inanga.jpeg";
import inanga1 from "../assets/images/products/inanga1.png";
import ingaraba from "../assets/images/products/ingaraba.jpg";
import ingoma11 from "../assets/images/products/ingoma11.png";
import ingoma1 from "../assets/images/products/ingoma1.png";
import iningiri from "../assets/images/products/iningiri.png";
import inkanda from "../assets/images/products/inkanda.jpg";
import intango from "../assets/images/products/intango.jpg";
import intebe from "../assets/images/products/intebe.jpg";
import intore1 from "../assets/images/products/intore1.jpg";
import inyambo from "../assets/images/products/inyambo.jpg";
import isekuru from "../assets/images/products/isekuru.jpg";
import karere from "../assets/images/products/karere.jpg";
import kwirengera from "../assets/images/products/kwirengera.jpg";
import ruharage from "../assets/images/products/ruharage.jpg";
import umuduri from "../assets/images/products/umuduri.png";
import umugara from "../assets/images/products/umugara.jpg";
import umugara1 from "../assets/images/products/umugara1.jpg";
import umutako from "../assets/images/products/umutako.jpg";
import umutako1 from "../assets/images/products/umutako1.jpg";
import umwirongi from "../assets/images/products/umwirongi.jpg";
import uruhimbi from "../assets/images/products/uruhimbi.jpg";
import ibibindibiboshye from "../assets/images/products/ibibindibiboshye.jpeg";
import udutakotuboshye from "../assets/images/products/udutakotuboshye.jpeg";
import udutakotuboshye1 from "../assets/images/products/udutakotuboshye1.jpeg";
import igitebo from "../assets/images/products/igitebo.jpeg";
import inkoko from "../assets/images/products/inkoko.jpeg";
import art1 from "../assets/images/products/art1.jpeg";
import art2 from "../assets/images/products/art2.jpeg";
import art3 from "../assets/images/products/art3.jpeg";
import art5 from "../assets/images/products/art5.jpeg";
import art6 from "../assets/images/products/art6.jpeg";
import art7 from "../assets/images/products/art7.jpeg";
import art8 from "../assets/images/products/art8.jpeg";
const OurProducts = () => {
  const [isopen, setisopen] = useState(false);
  const [product, setproduct] = useState([]);
  
  // Sample Product Data grouped by categories
  const productCategories = [
    {
            category: "Handcrafted Goods",
            products: [
              {
                id: 1,
                name: "Inkanda",
                price: "200000",
                image: inkanda,
                description:
                  "Well prepared Dried animals skins that had been used as the medium of clothes in terms of wearing in Rwandan traditional culture. I was used to be called Inkanda as I had it'd discovered by our ancestors ",
              },
              {
                id: 2,
                name: "Igiseke Nyarwanda",
                price: "100000",
                image: igiseke,
                description:
                  "Agaseke is a type of traditional Rwandese woven basket.[1] It is characterized by its flat circular base that is taller than it is wide, with a sloped conical fitted lid. It is traditionally made of native natural fibers in natural off-white colors with naturally-dyed patterns in colors like purple, green, black, yellow, and red. There are numerous patterns that can be displayed on the sides of the agaseke, each with their own significance.",
              },
              {
                id: 3,
                name: "Ibikoresho byo ku ruhimbi",
                price: "70000",
                image: uruhimbi,
                description:
                  "These product were ibicuba , igisabo , inkongoro that was used in milk production and preparation.They are essential tools/materials in traditional Rwandan culture becuase cows and milk was considered to be the medium of people classifications what we can compare with money or estates in nowadays",
              },
              {
                id: 4,
                name: "Umutako Uboshye mu birere",
                price: "9000",
                image: umutako,
                description:
                  "These designed handicrafted materials were used for decorating the traditional rwandans' houses.They are made in banana fibres and they are well known for their long lasting their better appearance",
              },
              {
                id: 5,
                name: "Umutako w'indodo z'umufuka",
                price: "8000",
                image: umutako1,
                description:
                  "These handcrafted materials were used for decorating the traditional rwandans' houses. They are made in banana Leather,strings and they are well known for their long lasting their better appearance",
              },
              {
                id: 6,
                name: "Umugara ukoze mu migwegwe nyarwanda",
                price: "10000",
                image: umugara,
                description:
                  "Umugara was the wooven traditional Rwandan handicrafted product that was usded i their dancing or ceremonies that was considered as the dresscodes for the dancers of tradition dancers.  and they are made from the trees called imigwegwe ",
              },
              {
                id: 7,
                name: "Imitako y'imisozi Gakondo ikoze mu ndodo",
                price: "7000",
                image: imitako,
                description:
                  "these are handmade decoration for traditional houses in rwanda and they also made from the product / raw materials of leather and fibres",
              },
              {
                id: 8,
                name: "Karere gakondo ibanze mu birere",
                price: "2000",
                image: karere,
                description:
                  "this is traditional ball that was used as the medium of playing btn two competitors while they are finding the winners",
              },
              {
                id: 9,
                name: "Urutaro / Intara nyarwanda",
                price: "5000",
                image: inkoko,
                description:
                  "This is the Well designed wooven basket for house decoration . It should also be used for carrying somethings like fruits or bootles of water",
              },
              {
                id: 10,
                name: "Umutako",
                price: "10000",
                image: udutakotuboshye,
                description:
                  "This is the Well designed wooven basket for house decoration . It should also be used for carrying somethings like fruits or bootles of water",
              },
              {
                id: 10,
                name: "Umutako w'ibibindi kaboshye",
                price: "20000",
                image: ibibindibiboshye,
                description:
                  "This is the Well designed wooven basket for house decoration . It should also be used for carrying somethings like fruits or bootles of water",
              },
              {
                id: 11,
                name: "Umutako iboshye",
                price: "12000",
                image: udutakotuboshye1,
                description:
                  "This is the Well designed wooven basket for house decoration . It should also be used for carrying somethings like fruits or bootles of water",
              },
      
              {
                id: 12,
                name: "Amayugi Gakondo",
                price: "2000",
                image: amayugi,
                description:
                  "Amayugi were the materials that were used by the traditional experienced dancers that were taken as the medium of  festival and ceremony",
              },
            ],
          },
          {
            category: "Cultural Artifacts (Replicas)",
            products: [
              {
                id: 13,
                name: "Preserving Rwandan culture Tableau",
                price: "100000",
                image: art1,
                description:
                  "This is the tableau that preserves the Rwandan traditional culture. It can be used to decorate your house empty walls to increase its appearance and also looks more traditional and more creativity",
              },
              {
                id: 14,
                name: "Two Girls drinking together in ikibindi",
                price: "200000",
                image: gusangira,
                description:
                  "This is the tableau that preserves the Rwandan traditional culture. It can be used to decorate your house empty walls to increase its appearance and also looks more traditional and more creativity",
              },
              {
                id: 15,
                name: "Imbino Gakondo - Gushashayaya",
                price: "200000",
                image: art2,
                description:
                  "This artifact shows two girls that are performing the traditional ladies' dances #Gushanana that was done as the ways of dancing it times like festivals like Umuganura , among others",
              },
              {
                id: 17,
                name: "Imigongo Wall Tableau",
                price: "120000",
                image: art3,
                description:
                  "Imigongo wall tableau are the tableau that preserves the Rwandan traditional culture. It can be used to decorate your house empty walls to increase its appearance and also looks more traditional and more creativity",
              },
              {
                id: 19,
                name: "Cultural Dancing Tableau",
                price: "300000",
                image: art5,
                description:
                  "This Tableau is showing the traditional cultural dancing where it contains the girls wearing Imikenyero and men wearing other traditional clothes with Icumu n' Ingabo in their hands",
              },
              {
                id: 20,
                name: "Rwanda Traditional Girl",
                price: "50000",
                image: art6,
                description:
                  "This Tableau is showing the traditional Girl in rwanda , how she used to wear some ring onto their head which was called Imigongo",
              },
              {
                id: 21,
                name: "Designed Imigongo Modern chair",
                price: "500000",
                image: art7,
                description:
                  "It is the modernised chain / Table that could be used in the meeting and which look more creativity and innovated by also preserving the traditional culture",
              },
              {
                id: 22,
                name: "Wall decoration with Imigongo",
                price: "70000",
                image: art8,
                description:
                  "Imigongo wall tableau are the tableau that preserves the Rwandan traditional culture. It can be used to decorate your house empty walls to increase its appearance and also looks more traditional and more creativity",
              },
            ],
          },
          {
            category: "Literature and Media and Books",
            products: [
              {
                id: 23,
                name: "Rwanda-culture Smart",
                price: "13000",
                image: culturesmart,
                description:
                  "Great little guide coming out this January to Rwanda “The Land of a Thousand Hills,” a great destination for those looking for the raw natural beauty of Africa with a thriving culture undergoing rapid economic growth",
              },
              {
                id: 24,
                name: "Apprend Le Kinyarwanda",
                price: "15000",
                image: apprendrwanda,
                description:
                  "The book “Learn Kinyarwanda with Images” is an illustrated dictionary that helps you to memorize the vocabulary of the Kinyarwanda.",
              },
              {
                id: 25,
                name: "Left to Tell",
                price: "20000",
                image: lefttotell,
                description:
                  "Immaculee Ilibagiza grew up in a country she loved, surrounded by a family she cherished. But in 1994 her idyllic world was ripped apart as Rwanda descended into a bloody genocide. Immaculee’s family was brutally murdered during a killing spree that lasted three months and claimed the lives of nearly a million Rwandans. Incredibly, Immaculee survived the slaughter.",
              },
              {
                id: 26,
                name: "Inside Hotel Rwanda",
                price: "30000",
                image: insidehotelrwanda,
              },
            ],
          },
          // Add other categories here
        ];

  const dispatch = useDispatch();

  const handleviewtheproductdetails = (product) => {
    setproduct(product);
    setisopen(true);
  };

  // Scroll handling function for each category
  const handleScroll = (direction, containerId) => {
    const scrollContainer = document.getElementById(containerId);
    const scrollAmount = direction === "right" ? 300 : -300;
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Function to handle Add to Cart
  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage

    if (!token) {
      toast.error("Please login to add items to your cart.");
      return;
    }

    try {
      // Assuming you want to send the product details and quantity
      const quantity = 1; // Set default quantity to 1 or adjust based on your needs
      const userId = JSON.parse(localStorage.getItem("user")).id; // Assuming user info is stored

      const response = await axios.post(
        "http://localhost:4000/api/cart/add", // Your API endpoint to add product to the cart
        { productId: product.id, userId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        }
      );

      // Dispatch to Redux or any state management to update the cart in UI
      dispatch(addToCart(product));

      toast.success("Product added to cart successfully!");
    } catch (error) {
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {isopen ? (
         <ProductDetails
                   product={product}
                   isopen={isopen}
                   setisopen={setisopen}
                 />
      ) : (
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Products</h2>

          {/* Loop through each product category */}
          {productCategories.map((category, index) => (
            <div key={index} className="mb-8">
              {/* Category Title */}
              <h3 className="text-2xl text-left font-semibold text-gray-800 mb-4">
                {category.category}
              </h3>

              {/* Scrollable Container */}
              <div className="relative">
                <div
                  className="flex space-x-8 overflow-x-auto scroll-smooth custom-scrollbar"
                  id={`product-container-${index}`}
                >
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-none w-64 h-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover"
                        onClick={() => {
                          handleviewtheproductdetails(product);
                        }}
                      />

                      <div className="p-4">
                        <h3
                          className="text-xl font-semibold text-gray-800"
                          style={{ fontFamily: "Gotham" }}
                        >
                          {product.name}
                        </h3>

                        <CurrencyFormat
                          className="text-xl text-indigo-600 font-bold text-center"
                          suffix=" Frw"
                          style={{ fontFamily: "Roboto" }}
                          thousandSeparator={true}
                          value={product.price}
                        />

                        <button
                          className="bg-orange-300 text-white w-full rounded-md py-2"
                          onClick={() => handleAddToCart(product)} // Add product to cart
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scroll Buttons */}
                <motion.button
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
                  onClick={() => handleScroll("left", `product-container-${index}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ←
                </motion.button>

                <motion.button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none"
                  onClick={() => handleScroll("right", `product-container-${index}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </motion.button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default OurProducts;

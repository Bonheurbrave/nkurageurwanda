// OurTeam.js
import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaQuoteLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import fidel from '../assets/images/team/fidele.png'
import bobo from '../assets/images/team/bobo.jpeg'
import james from '../assets/images/team/james.jpeg'
const OurTeam = () => {
  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-green-600">Our Team</h1>
        <p className="text-lg text-gray-700 mt-4">
          Meet the passionate and talented individuals dedicated to preserving
          and promoting cultural heritage worldwide.
        </p>
      </motion.div>

      {/* Team Members Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <TeamMemberCard
          name="HABIYAREMYE Fidel"
          role="Founder & CEO"
          image={fidel}
          quote="I'm passionate about making heritage accessible to everyone."
          phone="+250 785 373 027"
          email="fidelwashyaka@gmail.com"
        />
        <TeamMemberCard
          name="James Smith"
          role="Cultural Advisor"
          image={james}
          quote="Preserving the past for future generations is essential."
          phone="+250 789 090 867"
          email="smith0001@gmail.com"
        />
        <TeamMemberCard
          name="Bonheur Ndikumwenayo"
          role="Software Engineer"
          image={bobo}
          quote="Empowering communities is at the heart of what we do."
          phone="+250794082154"
          email="bobodev001@gmail.com"
        />
      </motion.div>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ name, role, image, quote , phone , email }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex flex-col items-center mb-6">
      <img
        src={image}
        
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-green-600">{name}</h3>
      <p className="text-sm text-orange-300">{role}</p>
    </div>

    <div className="text-center pb-3">
      <FaQuoteLeft className="text-orange-300 w-6 h-6 mx-auto mb-2" />
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
    <div className=" text-center flex" >
        <MdEmail className="text-orange-300" size={20}/>
        <p className=" text-gray-400 font-semibold px-4 text-xs" style={{fontFamily:"Roboto"}}>{email}</p>
    </div>
    <div className=" text-center pt-2 flex">
        <BiPhoneCall className="text-orange-300" size={20}/>
        <p className=" text-gray-700  font-semibold px-4" style={{fontFamily:"courier"}}>{phone}</p>
    </div>
  </motion.div>
);

export default OurTeam;

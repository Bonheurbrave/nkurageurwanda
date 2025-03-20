import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import  bobo from '/assets/images/team/bobo.jpeg';
import chaquilla from '/assets/images/team/chaquilla.jpg'
import evode from '/assets/images/team/evode.jpg';
import fidel from '/assets/images/team/fidel.jpg'
import hariette from '/assets/images/team/hariette.jpg'
import modeste from '/assets/images/team/modeste.jpg'
import paul from '/assets/images/team/paul.jpg'
import yves from '/assets/images/team/yves.jpg'

// Placeholder image URL for members (replace with actual URLs)
const defaultImage = "https://via.placeholder.com/150"; // Replace with actual image URLs

const teamMembers = [
  {
    name: 'Fidel Habiyaremye',
    role: 'Chief Executive Officer (CEO)',
    contact: '0785373027',
    email: 'fidelwashyaka@gmail.com',
    photo: fidel, // Replace with actual image URL
    bio: 'Fidel is a visionary leader with a passion for sustainable community development and cultural preservation. As the CEO, he provides overall leadership and strategic direction for the company. With a Bachelor’s degree in History and Heritage Studies and a Master’s in Development Studies, Fidel brings extensive knowledge and experience to the organization. His leadership journey includes roles such as President of the Nkurage for Charity Organization and District University Students Association Forum, and he currently serves as a CorpsAfrica Rwanda Volunteer. Fidel is deeply committed to leveraging community resources for long-term growth and self-reliance.',
  },
  {
    name: 'Paul Hakuzimana',
    role: 'Operations Manager',
    contact: '0782029528',
    email: 'hakuzapaul@gmail.com',
    photo: paul, // Replace with actual image URL
    bio: 'Paul holds a background in crop science from the University of Rwanda and has experience in both leadership and volunteerism. He is responsible for supervising the daily operations at NKURAGE U Rwanda, ensuring that logistics for events, tours, and workshops run smoothly. His experience includes working as a direct sales executive at Bank of Kigali and as a CorpsAfrica Rwanda volunteer, implementing human-centered design in community development.',
  },
  {
    name: 'Herriette Ishimwe',
    role: 'Finance Manager',
    contact: '0780614277',
    email: 'ishimwehenriette7@gmail.com',
    photo: hariette, // Replace with actual image URL
    bio: 'Henriette is a dedicated professional with a strong academic background in leisure tourism, hotel management, and culinary arts. As Finance Manager, she oversees budgeting, payroll, financial reporting, and compliance with financial regulations. Henriette is committed to ensuring long-term sustainability for NKURAGE U Rwanda and has participated in various entrepreneurial development programs, including the Youth Heritage Africa Program.',
  },
  {
    name: 'Modeste Ukwishaka',
    role: 'General Manager',
    contact: '0783942210',
    email: 'ukwishakamodeste1@gmail.com',
    photo: modeste, // Replace with actual image URL
    bio: 'Modeste holds a Bachelor’s degree in Journalism and Communication and has a strong commitment to leadership and community development. He coordinates the department heads, monitors departmental performance, and ensures that company policies and strategies are implemented effectively. Modeste has also served as President of the Indangamuco Cultural Troupe, where he worked to preserve Rwanda\'s cultural heritage.',
  },
  {
    name: 'Yves Niyomushumba',
    role: 'Tour Coordinator',
    contact: '0791022115',
    email: '',
    photo: yves, // Replace with actual image URL
    bio: 'Yves is a passionate student of History and Heritage Studies at the University of Rwanda. As Tour Coordinator, he designs and manages cultural tour packages, ensuring that visitors experience the richness of Rwanda\'s heritage. Yves is also a Social Economic Development Officer at Ngororero District, where he contributes to sustainable development initiatives.',
  },
  {
    name: 'Evode Ndayishimiye',
    role: 'Workshop Facilitator',
    contact: '0783942210',
    email: '',
    photo: evode, // Replace with actual image URL
    bio: 'Evode, a graduate in History and Heritage Studies from the University of Rwanda, leads craft workshops, cooking classes, and educational programs. His deep knowledge of Rwanda\'s culture ensures that every workshop reflects authenticity, and he is committed to engaging participants in interactive learning experiences.',
  },
  {
    name: 'Modeste Ukwishaka',
    role: 'Event Planner',
    contact: '0783942210',
    email: 'ukwishakamodeste1@gmail.com',
    photo: modeste, // Replace with actual image URL
    bio: 'Modeste’s passion for event management is demonstrated through his role in organizing cultural events, festivals, and exhibitions. He coordinates with performers, vendors, and stakeholders to ensure that each event runs smoothly and is impactful. He also ensures safety and compliance during all events.',
  },
  {
    name: 'Chaquilla Ngabire',
    role: 'Marketing & Communication Team Manager',
    contact: '0788204181',
    email: '',
    photo: chaquilla, // Replace with actual image URL
    bio: 'Chaquilla leads the marketing and communications efforts, developing strategies to increase visibility, engage the public, and promote events.',
  },
  {
    name: 'Bonheur Ndikumenayo',
    role: 'Social Media Specialist & Content Creator',
    contact: '0794082154',
    email: 'bobodev001@gmail.com',
    photo: bobo, // Replace with actual image URL
    bio: 'Bonheur manages social media platforms, creating engaging posts and tracking audience metrics to keep followers informed and engaged. He also ensures the company website and online store are well-maintained, secure, and user-friendly while creating content that highlights Rwanda’s cultural heritage.',
  },
];

const OurTeam = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBio = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle bio visibility
  };

  return (
    <div className="bg-white text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="p-6">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={member.photo}
                  alt={`${member.name}'s profile`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-green-500 transition-all duration-500 ease-in-out transform hover:scale-105"
                />
              </div>

              {/* Name and Role */}
              <h3 className="text-2xl font-semibold text-green-700 mb-2 text-center">{member.name}</h3>
              <p className="text-xl text-orange-300 mb-4 text-center">{member.role}</p>

              {/* Bio with "See More" functionality */}
              <div className="mb-6">
                <p
                  className={`text-gray-700 transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-none' : 'max-h-24 overflow-hidden'}`}
                >
                  {member.bio}
                </p>
                <button
                  onClick={() => toggleBio(index)}
                  className="text-green-500 hover:text-green-600 mt-2 block"
                >
                  {expandedIndex === index ? 'See Less' : 'See More'}
                </button>
              </div>

              {/* Contact Info */}
              {member.contact && (
                <p className="text-gray-600 flex items-center mb-2">
                  <FaPhoneAlt className="text-green-500 mr-2" /> {member.contact}
                </p>
              )}
              {member.email && (
                <p className="text-gray-600 flex items-center">
                  <FaEnvelope className="text-green-500 mr-2" /> 
                  <a href={`mailto:${member.email}`} className="hover:text-green-600 transition-colors">
                    {member.email}
                  </a>
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

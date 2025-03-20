import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {toast , Toaster} from 'sonner'
const Footer = () => {
  const [email , setemail] = useState('');
  //subscribing button functions
  const handlesubscribe = ()=>{
    toast.success("Your subscription was done successfully")
    
  }
  return (
    <div className="bg-green-700 text-white py-10 mt-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are passionate about preserving and sharing the stories of historical sites around the world. Our goal is to help everyone learn more about our cultural heritage.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 grid grid-cols-2">
              <li><Link to="/"className="hover:text-orange-300">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-orange-300">About us</Link></li>
              <li><Link to="/services" className="hover:text-orange-300">Services</Link></li>
              <li><Link to="/products" className="hover:text-orange-300">Products</Link></li>
              <li><Link to="/contact-us" className="hover:text-orange-300">Contact Us</Link></li>
              <li><Link target='_blank' className="hover:text-orange-300">Blog</Link></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/nkurageurwanda" target='_blank' className="text-white hover:text-orange-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.x.com/nkurageurwanda" target='_blank' className="text-white hover:text-orange-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/nkurageurwanda" target='_blank' className="text-white hover:text-orange-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/nkurageurwanda" target='_blank' className="text-white hover:text-orange-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className=' pt-5'>
              <p className=' mb-2 font-semibold text-lg'>Subscribe to our Newsletter</p>
              <input type="text" onChange={(e)=>{setemail(e.target.value)}} placeholder='Email address' className=' outline-none text-black rounded-l-sm py-2 px-2' />
              <button className='px-5 bg-black py-2' onClick={handlesubscribe}>send</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-600 pt-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Nkurage U Rwanda. All rights reserved.</p>
        </div>
      </div>
      <Toaster duration={2000} richColors/>
    </div>
  );
};

export default Footer;

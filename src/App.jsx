import React from 'react'
import Homepage from './pages/Homepage'
import NavBar from './components/home/NavBar'
import {Routes , Route, Navigate} from 'react-router-dom'
import Footer from './components/Footer'
import OurProducts from './pages/OurProducts'
import ServicesPage from './pages/ServicesPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Contact from './pages/Contact'
import ProductPage from './pages/ProductPage'
import AboutUs from './pages/AboutUs'
import GalleryPage from './pages/GalleryPage'
import OurToursPage from './pages/OurToursPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <>
    <div>
    <NavBar  />
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<OurProducts />} />
      <Route path="/products/:productname" element={<ProductPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/tours" element={<OurToursPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
    <Footer />
    </div>
    </>
  )
}

export default App
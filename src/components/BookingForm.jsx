import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUsers } from 'react-icons/fa';

const BookingForm = ({ selectedTour }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Autofill form with selected tour data
  useEffect(() => {
    if (selectedTour) {
      setValue('tour', selectedTour.name); // Set default tour value
    }
  }, [selectedTour, setValue]);

  const onSubmit = (data) => {
    alert('Booking Submitted! We will get back to you soon.');
    console.log(data); // Send this data to your server or booking API
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Book Your Tour</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
            <FaUser className="inline-block mr-2" />
            Full Name
          </label>
          <input
            id="name"
            {...register('name', { required: 'Full name is required' })}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
            <FaEnvelope className="inline-block mr-2" />
            Email Address
          </label>
          <input
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Tour Selection */}
        <div className="mb-4">
          <label htmlFor="tour" className="block text-lg font-semibold text-gray-700">
            <FaMapMarkerAlt className="inline-block mr-2" />
            Select Tour
          </label>
          <select
            id="tour"
            {...register('tour', { required: 'Please select a tour' })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select a tour...</option>
            <option value={selectedTour?.name}>{selectedTour?.name}</option>
          </select>
          {errors.tour && <span className="text-red-500 text-sm">{errors.tour.message}</span>}
        </div>

        {/* Number of People */}
        <div className="mb-4">
          <label htmlFor="numberOfPeople" className="block text-lg font-semibold text-gray-700">
            <FaUsers className="inline-block mr-2" />
            Number of People
          </label>
          <input
            id="numberOfPeople"
            {...register('numberOfPeople', { 
              required: 'Please specify the number of people', 
              min: { value: 1, message: 'At least 1 person is required' }
            })}
            type="number"
            min="1"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {errors.numberOfPeople && <span className="text-red-500 text-sm">{errors.numberOfPeople.message}</span>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">
            <FaPhoneAlt className="inline-block mr-2" />
            Phone Number
          </label>
          <input
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid phone number (10 digits)',
              },
            })}
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>

        {/* Tour Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-lg font-semibold text-gray-700">
            <FaCalendarAlt className="inline-block mr-2" />
            Date of Tour
          </label>
          <input
            id="date"
            {...register('date', { required: 'Tour date is required' })}
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-orange-300 text-white px-6 py-3 rounded-lg hover:bg-orange-400 focus:outline-none"
          >
            Book Tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

// Cards.js
"use client";
import { useState } from 'react';
import Modal from './Modal'; // Correct import path

const services = [
  {
    id: 'engine-repair',
    title: 'Engine Repair',
    description: 'Our expert engine repair services are designed to ensure your car runs smoothly and efficiently. We understand the importance of a well-maintained engine for the longevity and performance of your vehicle. Our skilled technicians use the latest diagnostic tools and techniques to identify and fix any engine-related issues, whether it\'s a simple tune-up or a complete overhaul. Trust us to provide comprehensive engine repairs that keep your car in top condition, ensuring you enjoy a safe and comfortable driving experience.',
    image: '/engin.jpg',
  },
  {
    id: 'brake-services',
    title: 'Brake Services',
    description: 'Reliable brake services are crucial for your safety on the road. Our brake services include thorough inspections, brake pad replacements, and rotor resurfacing to ensure your vehicle\'s braking system operates at peak performance. We use high-quality parts and follow industry best practices to provide you with the confidence that your brakes will function effectively when you need them most. Don\'t compromise on safety – let our experienced team take care of all your brake service needs and keep you and your loved ones safe.',
    image: '/brake.jpg',
  },
  {
    id: 'oil-change',
    title: 'Oil Change',
    description: 'Regular oil changes are essential for maintaining the health of your engine. Our quick and affordable oil change services ensure that your engine stays lubricated and operates smoothly. We use high-quality oils and filters to protect your engine from wear and tear, improving its performance and extending its lifespan. Our team of professionals is dedicated to providing you with efficient and hassle-free oil changes, so you can keep your vehicle running at its best. Visit us for your next oil change and experience the difference in quality and service.',
    image: '/oil.jpg',
  },
];

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const previousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <main className="max-w-6xl mx-auto pb-36 px-8 relative ">
      <div className="max-w-md mx-auto mb-14 text-center">
        <h1 className="text-4xl text-white font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Our</span> Services
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Choose a service that works best for you and your team.
        </p>
      </div>

      <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={previousCard}
        >
          {"<"}
        </button>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`w-full h-full flex-1 p-8 mt-8 order-${index + 1} bg-gray-500 shadow-xl rounded-3xl sm:w-96 lg:w-full lg:mt-0 ${index === currentIndex ? 'scale-110 z-10' : 'scale-75 opacity-50'
              } transition-transform transform`}
          >
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img src={service.image} alt={service.title} className="rounded-3xl w-20 h-20" />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">{service.title}</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-900">
              <li className="flex text-lg mb-2">
                <span className="ml-3 line-clamp-2">{service.description.split('. ')[0]}</span>
              </li>
            </ul>
            <button
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
              onClick={() => handleLearnMore(service)}
            >
              Learn more
              <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
            </button>
          </div>
        ))}

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={nextCard}
        >
          {">"}
        </button>
      </div>

      <Modal show={showModal} onClose={closeModal} service={selectedService} />
    </main>
  );
};

export default Cards;

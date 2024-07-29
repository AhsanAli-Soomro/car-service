"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToHome = () => {
    router.push('/Home');
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }, 100); // Adjust delay as necessary
  };

  return (
    <nav className="text-white fixed w-full z-30">
      <div className="container text-center items-center p-4">
        <div className="hidden md:flex space-x-8">
          <ul className="flex gap-10 w-full justify-center text-xs space-x-8">
          <li className="cursor-pointer hover:text-slate-300" onClick={() => scrollToSection('hero')}>Home</li>
            <li className="cursor-pointer hover:text-slate-300" onClick={() => scrollToSection('services')}>Our Services</li>
            <li className="cursor-pointer hover:text-slate-300" onClick={() => scrollToSection('clients')}>Our Clients</li>
            <li className="cursor-pointer hover:text-slate-300" onClick={() => scrollToSection('about')}>About Us</li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6 text-whote" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="cursor-pointer hover:text-gray-500" onClick={() => scrollToSection('hero')}>Home</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={() => scrollToSection('services')}>Our Services</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={() => scrollToSection('clients')}>Our Clients</li>
            <li className="cursor-pointer hover:text-gray-500" onClick={() => scrollToSection('about')}>About Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

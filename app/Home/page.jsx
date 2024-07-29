"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Image from 'next/image';

const sections = [
  {
    id: '1',
    title: 'Oil Change & Maintenance',
    description: "Quick and efficient oil changes to keep your engine running smoothly.",
  },
  {
    id: '2',
    title: 'Brake Services',
    description: 'Expert brake inspection and repair to ensure your safety.',
  },
  {
    id: '3',
    title: 'Tire Rotation & Replacement',
    description: 'Comprehensive tire services for optimal performance and longevity.',
  },
  {
    id: '4',
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to identify and fix engine issues promptly.',
  },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="bg-cover bg-center h-screen flex items-center justify-center delay-75 transition-all ease-in duration-300"
        style={{
          backgroundImage: 'url("/s2.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center z-10 p-6 rounded delay-75 transition-all ease-in duration-300">
          <h1
            key={sections[currentSection].id}
            className="text-5xl font-bold mb-4 text-white delay-75 transition-all ease-in duration-300"
          >
            {sections[currentSection].title}
          </h1>
          <p
            key={sections[currentSection].id + '-desc'}
            className="text-gray-200 animate-slideInFromRight"
          >
            {sections[currentSection].description}
          </p>
        </div>
      </section>
      <section id="services" className="bg-black text-center py-10">
        <Cards />
      </section>

      <section id="clients" className="bg-gray-800 text-center py-24 h-screen overflow-hidden">
      <h1 className="text-4xl text-white font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">Our</span> Clients
        </h1>
        <p className="text-xl text-gray-500 font-medium">We have served numerous satisfied clients with our exceptional car services.</p>
        <div className="relative mt-8">
          <div className="flex animate-marquee whitespace-nowrap">
            <Image src="/client1.jpg" alt="Client 1" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client2.jpg" alt="Client 2" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client3.jpg" alt="Client 3" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client4.jpg" alt="Client 4" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client5.jpg" alt="Client 5" width={200} height={200} className="w-1/6 mx-4" />
          </div>
          <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
            <Image src="/client1.jpg" alt="Client 1" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client2.jpg" alt="Client 2" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client3.jpg" alt="Client 3" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client4.jpg" alt="Client 4" width={200} height={200} className="w-1/6 mx-4" />
            <Image src="/client5.jpg" alt="Client 5" width={200} height={200} className="w-1/6 mx-4" />
          </div>
        </div>
      </section>

      <section id="about" className="bg-black py-24 mb-24 h-screen overflow-hidden">
      <h1 className="text-4xl text-white text-center font-semibold mb-6 lg:text-5xl">
          <span className="text-indigo-600">About</span> Us
        </h1>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-300 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Quality Car Services You Can Trust</h2>
            <p className="mb-4 text-gray-500 font-medium">
              At our car service company, we are dedicated to providing top-notch automotive care. Our team of experienced mechanics, technicians, and service advisors are here to ensure your vehicle runs smoothly and efficiently.
            </p>
            <p className="mb-4 text-gray-500 font-medium">
              Whether it's routine maintenance, complex diagnostics, or emergency repairs, we have the expertise and equipment to handle it all. We pride ourselves on our attention to detail, customer-centric approach, and commitment to using the latest technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-full rounded-lg">
              <Image src="/s4.webp" alt="Car service team at work" width={1000} height={500} className="rounded-lg" />
            </div>
            <div className="mt-4 w-full lg:mt-10 rounded-lg">
              <Image src="/s3.webp" alt="Advanced car service equipment" width={1000} height={500} className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

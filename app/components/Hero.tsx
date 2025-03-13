'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const heroContents = [
  {
    title: 'awesome delicious pizza',
    subtitle: 'start your order just only $29.00',
    image: 'pizza-awesome.png',
  },
  {
    title: 'super delicious pizza',
    subtitle: 'start your order just only $25.00',
    image: 'pizza-super.png',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % heroContents.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-[#d11525] relative w-full h-screen flex items-center justify-center'>
      {/* Background Shape or Overlay (optional) */}
      <div className='absolute inset-0'></div>

      <div className='relative w-full max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between'>
        {/* Text Section */}
        <motion.div
          key={index} // Helps with animation re-renders
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className='md:w-1/2 text-center md:text-left'
        >
          <h1 className='text-9xl uppercase md:text-6xl font-bold text-white'>
            {heroContents[index].title}
          </h1>
          <p className='capitalize mt-4 text-lg text-white'>{heroContents[index].subtitle}</p>
          <button className='uppercase mt-6 px-6 py-3 bg-[#ffb936] hover:bg-white hover:cursor-pointer rounded-lg text-md font-semibold shadow-lg flex items-center gap-x-2'>
            order now <FaArrowRight size={20} />
          </button>
        </motion.div>

        {/* <h1 data-animation="fadeInUp" data-duration="1" data-delay=".4s" class="" style="animation: 0.4s ease 0s 1 normal none running fadeInUp;">awesome delicious pizza</h1> */}

        {/* Image Section */}
        <motion.div
          key={`image-${index}`} // Helps with animation re-renders
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className='md:w-1/2 flex justify-center'
        >
          <img
            src={heroContents[index].image}
            alt='Food Image'
            className='w-4/5 h-4/5 object-contain drop-shadow-lg'
          />
        </motion.div>
      </div>
    </div>
  );
}
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
  }
];

const shapeImages = [
  {
    classes: 'absolute top-0 -left-12 z-10',
    src: 'hero-1.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
  {
    classes: 'absolute -top-12 left-45/100 z-10',
    src: 'hero-2.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
  {
    classes: 'absolute top-0 right-0 z-10',
    src: 'hero-3.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
  {
    classes: 'absolute bottom-0 -left-20 z-10',
    src: 'hero-4.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
  {
    classes: 'absolute z-10 bottom-0 left-45/100',
    src: 'hero-5.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
  {
    classes: 'absolute bottom-0 right-0 z-10',
    src: 'hero-6.png',
    alt: 'shape-img',
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      repeat: Infinity,
      repeatDelay: 7.4,
      duration: 0.6,
      ease: 'easeOut',  // Smooth easing
    }
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % heroContents.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bg-[#d12525] relative w-full h-screen flex items-center justify-center'>
      <div className='absolute inset-0'></div>


      <div className='relative w-full max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between md:gap-x-5'>
      
      {
        shapeImages.map((shape, index) => (
          <motion.img
            key={index}
            className={shape.classes}
            src={shape.src}
            alt={shape.alt}
            initial={shape.initial}
            animate={shape.animate}
            transition={shape.transition}
          />
        ))
      }

        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className='md:w-1/2 text-center md:text-left z-20'
        >
          <h1 className='text-8xl uppercase font-bold text-white leading-28'>
            {
              heroContents[index].title.split(' ').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))
            }
          </h1>
          <h4 className='capitalize mt-4 text-2xl text-white font-semibold py-5'>{heroContents[index].subtitle}</h4>
          <button className='uppercase mt-6 px-12 py-5 bg-[#ffb936] transition-all duration-3000 ease hover:bg-white cursor-pointer text-md font-semibold shadow-lg flex items-center gap-x-2'>
            order now <FaArrowRight size={20} />
          </button>
        </motion.div>


        <motion.div
          key={`image-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.2 }}
          className='md:w-1/2 flex justify-center z-20'
        >
          <motion.img
            src={heroContents[index].image}
            alt='Food Image'
            className='object-contain drop-shadow-lg'
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

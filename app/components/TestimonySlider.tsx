"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonies = [
  {
    title: 'quality food',
    description: 'Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures, complemented by layers of crisp lettuce, ripe tomatoes, and the crunch pickles Our secret sauce proprietary blend savory',
    avatar: '/lady-founder.jpg',
    name: 'Richard D. Baker',
    role: 'CEO & Founder'
  },
  {
    title: 'quality food',
    description: 'Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures, complemented by layers of crisp lettuce, ripe tomatoes, and the crunch pickles Our secret sauce proprietary blend savory',
    avatar: '/lady-founder.jpg',
    name: 'Richard D. Baker',
    role: 'CEO & Founder'
  },
  {
    title: 'quality food',
    description: 'Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures, complemented by layers of crisp lettuce, ripe tomatoes, and the crunch pickles Our secret sauce proprietary blend savory',
    avatar: '/lady-founder.jpg',
    name: 'Richard D. Baker',
    role: 'CEO & Founder'
  }
];

export default function TestimonySlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  // Next slide logic (infinite loop)
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  // Previous slide logic
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full min-h-[400px] lg:min-h-[500px] overflow-hidden flex items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          draggable="false"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(event, info) => {
            if (info.offset.x < -50) nextSlide();
            if (info.offset.x > 50) prevSlide();
          }}
        >
          <div className='flex gap-x-8 items-center'>
            <Image src='/quote.svg' alt='quote' width={65} height={65} />
            <h4 className='capitalize text-2xl font-semibold'>
              {testimonies[index].title}
            </h4>
            <div className='flex'>
              {[...Array(5)].map((_, i) => <FaStar key={i} color='#ffb936' />)}
            </div>
          </div>
          <h3 className='text-4xl font-medium py-8 leading-tight'>
            {testimonies[index].description}
          </h3>
          <div className='flex items-center gap-x-4 mt-8'>
            <Image src={testimonies[index].avatar} alt='Michael' width={65} height={65} />
            <h4 className='uppercase'><span className='font-bold'>
              {testimonies[index].name}</span> / <span className='text-[#5c5c5b]'>{testimonies[index].role}</span>
            </h4>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
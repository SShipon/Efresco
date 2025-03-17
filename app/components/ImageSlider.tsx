"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const images = [
  "best-sale-1.jpg",
  "best-sale-2.jpg",
  "best-sale-3.jpg",
];

export default function ImageSlider() {
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
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous slide logic
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full min-h-[400px] lg:min-h-[500px] overflow-hidden bg-black flex items-center"
    >
      <AnimatePresence custom={index} mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
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
        />
      </AnimatePresence>
    </div>
  );
}
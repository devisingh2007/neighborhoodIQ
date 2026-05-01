import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const cities = [
  {
    name: 'Mumbai',
    areas: '650+ Areas',
    img: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776957576/Gateway-Of-India_600_dujrqr.jpg',
  },
  {
    name: 'Bangalore',
    areas: '420+ Areas',
    img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80',
  },
  {
    name: 'New Delhi',
    areas: '500+ Areas',
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80',
  },
  {
    name: 'Kolkata',
    areas: '310+ Areas',
    img: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80',
  },
  {
    name: 'Chennai',
    areas: '280+ Areas',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const BrowseByCity = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const cardWidth = containerRef.current.children[0].offsetWidth;
      // Calculate which card is most visible
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-gray-900">
          Browse by City
        </h2>
        <p className="text-gray-500 text-lg">
          Covering all major urban centers across India.
        </p>
      </div>

      {/* City Cards */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-5 pb-4 md:pb-0 custom-scrollbar md:overflow-visible"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cities.map((city, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.1 }}
            className="snap-center shrink-0 w-[60vw] sm:w-[220px] md:w-auto relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{
              aspectRatio: '5/4',
              minHeight: '160px',
              backgroundImage: `url(${city.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#1e293b',
            }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10 group-hover:from-black/55 transition-all duration-300" />

            {/* Zoom layer — separate div handles the scale so overflow:hidden clips it */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${city.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
            />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <h3 className="text-white font-serif text-lg sm:text-xl leading-tight drop-shadow-md">
                {city.name}
              </h3>
              <p className="text-white/70 text-sm sm:text-base mt-1.5 font-medium tracking-wide">
                {city.areas}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-2 md:hidden">
        {cities.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? 'w-4 bg-brand-500' : 'w-1.5 bg-gray-200'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseByCity;

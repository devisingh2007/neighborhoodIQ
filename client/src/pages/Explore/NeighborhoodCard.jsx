import React from 'react';
import { motion } from 'framer-motion';

const NeighborhoodCard = ({ neighborhood, isFeatured }) => {
  const {
    name,
    location,
    score,
    tags,
    image,
  } = neighborhood;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl overflow-hidden group w-full shadow-sm hover:shadow-xl transition-all duration-300 ${
        isFeatured ? 'h-full min-h-[500px]' : 'h-[240px] md:h-[260px] lg:h-[280px]'
      }`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

      {/* Top Right Score Badge */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#0F2F20] border-2 border-[#11B573] shadow-lg z-10">
        <span className="text-white text-sm font-bold">{score}</span>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col items-start">
        {tags && tags.length > 0 && (
          <span className="px-2.5 py-1 bg-[#105E3C] text-emerald-100 text-[9px] font-bold uppercase tracking-wider rounded-full mb-2.5 shadow-sm">
            {tags[0]}
          </span>
        )}
        <h3 className={`font-bold text-white mb-0.5 leading-tight tracking-tight ${isFeatured ? 'text-[28px]' : 'text-[20px]'}`}>
          {name}
        </h3>
        <p className="text-slate-200 text-xs font-medium">
          {location.split(',')[0]}
        </p>
      </div>
    </motion.div>
  );
};

export default NeighborhoodCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPlaceSlug } from '../PlaceDetails/placesData';

const NeighborhoodCard = ({ neighborhood, isFeatured }) => {
  const {
    name,
    location,
    score,
    tags,
    image,
  } = neighborhood;

  const slug = getPlaceSlug(name);

  return (
    <Link to={`/place/${slug}`} className="block">
      <motion.div
        whileHover={{ y: -4 }}
        className={`relative rounded-2xl overflow-hidden group w-full shadow-sm hover:shadow-xl transition-all duration-300 flex flex-row md:flex-col bg-white md:bg-transparent ${
          isFeatured ? 'md:h-full md:min-h-[500px]' : 'md:h-[240px] lg:h-[280px]'
        }`}
      >
        {/* Card Image */}
        <div className="w-[100px] h-[100px] md:w-full md:h-full relative shrink-0 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay for Desktop Poster Mode */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Card Content */}
        <div className="flex-grow p-4 md:p-5 md:absolute md:bottom-0 md:left-0 md:right-0 z-10 flex flex-col justify-center items-start">
          {tags && tags.length > 0 && (
            <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-[#105E3C] md:bg-[#105E3C] text-emerald-100 text-[8px] md:text-[9px] font-bold uppercase tracking-wider rounded-md md:rounded-full mb-1.5 md:mb-2.5 shadow-sm">
              {tags[0]}
            </span>
          )}
          <h3 className={`font-bold text-slate-900 md:text-white mb-0.5 leading-tight tracking-tight truncate w-full ${isFeatured ? 'md:text-[28px]' : 'text-base md:text-[20px]'}`}>
            {name}
          </h3>
          <p className="text-slate-500 md:text-slate-200 text-[11px] md:text-xs font-medium">
            {location.split(',')[0]}
          </p>
        </div>

        {/* Score Badge */}
        <div className="flex items-center justify-center w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full bg-[#0F2F20] border-2 border-[#11B573] shadow-lg shrink-0 self-center mr-4 md:mr-0 md:absolute md:top-4 md:right-4 z-10">
          <span className="text-white text-xs md:text-sm font-bold">{score}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default NeighborhoodCard;

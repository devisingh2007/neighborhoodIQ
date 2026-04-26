import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wind, IndianRupee } from 'lucide-react';

const NeighborhoodCard = ({ neighborhood }) => {
  const {
    name,
    location,
    score,
    price,
    growth,
    aqi,
    aqiStatus,
    grade,
    trend,
    tags,
    image,
    badgeColor = "text-orange-500 bg-orange-50",
    scoreBorder = "border-orange-400"
  } = neighborhood;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Image Section */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {/* Neighborhood Image */}
        <img 
          src={image} 
          alt={name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-700 rounded-md shadow-sm uppercase tracking-tight">
              {tag}
            </span>
          ))}
        </div>

        {/* Score Badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 ${scoreBorder} shadow-lg`}>
            <span className="text-lg font-bold text-slate-800">{score}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-0.5 group-hover:text-brand-600 transition-colors">{name}</h3>
        <p className="text-slate-500 text-sm font-medium mb-4 flex items-center gap-1">
          <span className="w-1 h-1 bg-brand-500 rounded-full" />
          {location}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-slate-50">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase mb-1">
              <IndianRupee size={10} /> Price / sq ft
            </div>
            <div className="text-sm font-bold text-slate-800">{price}</div>
          </div>
          <div className="flex flex-col border-x border-slate-100 px-2">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase mb-1">
              <TrendingUp size={10} /> 1Y Growth
            </div>
            <div className="text-sm font-bold text-emerald-600">{growth}</div>
          </div>
          <div className="flex flex-col pl-1">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase mb-1">
              <Wind size={10} /> AQI
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-800">{aqi}</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase ${
                aqiStatus === 'Moderate' ? 'bg-amber-50 text-amber-600' : 
                aqiStatus === 'Unhealthy' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {aqiStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2">
            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tight ${
              grade.includes('A') ? 'bg-emerald-50 text-emerald-600' : 'bg-brand-50 text-brand-600'
            }`}>
              {grade}
            </span>
            <span className="px-2 py-1 bg-slate-50 text-slate-500 rounded-md text-[10px] font-bold uppercase tracking-tight">
              {trend}
            </span>
          </div>
          <button className="text-slate-400 hover:text-brand-600 transition-colors font-bold text-xs uppercase tracking-wider">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NeighborhoodCard;

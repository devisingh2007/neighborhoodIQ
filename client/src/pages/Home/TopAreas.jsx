import React from 'react';
import { Star, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const topAreas = [
  {
    id: 1,
    name: 'jaipur pink city',
    city: 'Rajasthan',
    score: 9.0,
    grade: 'Excellent',
    crime: '-8%',
    hospital: '15+',
    comm: '25 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776938839/Jaipur_ri13xz.jpg',
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 2,
    name: 'udaipur lake city',
    city: 'Rajasthan',
    score: 8.7,
    grade: 'Excellent',
    crime: '-6%',
    hospital: '10+',
    comm: '20 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776939237/lmcazzmg1ifihdtfivzl.jpg',
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 3,
    name: 'surat diamond city',
    city: 'Gujarat',
    score: 7.9,
    grade: 'Good',
    crime: 'Stable',
    hospital: '6+',
    comm: '30 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776939638/sunrise-over-city-surat-gujarat-india-cityscape-181423337_dn2rlt.jpg',
    color: 'text-brand-600 bg-brand-50'
  },
  {
    id: 4,
    name: 'indore',
    city: 'MP',
    score: 8.5,
    grade: 'Excellent',
    crime: '-5%',
    hospital: '12+',
    comm: '25 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776939970/images_wcpg2v.jpg',
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 5,
    name: 'Madurai',
    city: 'Tamil Nadu',
    score: 8.2,
    grade: 'Good',
    crime: '-4%',
    hospital: '14+',
    comm: '20 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776940112/iti2roeerdembwk6g4xp.jpg',
    color: 'text-brand-600 bg-brand-50'
  },
  {
    id: 6,
    name: 'Vijay Nagar',
    city: 'Indore',
    score: 9.1,
    grade: 'Excellent',
    crime: '-9%',
    hospital: '18+',
    comm: '20 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776938405/330px-Pune_West_skyline_-_March_2017_n8tf0r.jpg',
    color: 'text-green-600 bg-green-50'
  },
  {
    id: 7,
    name: 'thiruvananthapuram ',
    city: 'Kerala',
    score: 9.6,
    grade: 'Excellent',
    crime: '-10%',
    hospital: '10+',
    comm: '20 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776950782/Sree-Padmanabhaswamy-Temple_0_c6y9vr.jpg',
    color: 'text-brand-600 bg-brand-50'
  },
  {
    id: 8,
    name: 'Alkapuri',
    city: 'Vadodara',
    score: 7.4,
    grade: 'Average',
    crime: 'Stable',
    hospital: '5+',
    comm: '35 min',
    image: 'https://res.cloudinary.com/dewymrwzf/image/upload/v1776956923/1244b5d8-af9e-4ff2-94ea-19182ef8dbd9_n7cmr2.jpg',
    color: 'text-yellow-600 bg-yellow-50'
  }
];

const TopAreas = () => {
  return (
    <section className="section-container bg-gray-50/50">
      <div className="flex justify-between items-end mb-8 md:mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-2 md:mb-4">Top Neighborhoods</h2>
          <p className="text-gray-500 text-base md:text-lg">Ranked by composite neighborhood intelligence score.</p>
        </div>
        <button className="flex items-center text-brand-700 text-sm md:text-base font-bold hover:text-brand-800 transition-colors">
          See All Rankings <ArrowRight size={16} className="ml-1 md:ml-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {topAreas.map((area) => (
          <motion.div
            key={area.id}
            whileHover={{ y: -8 }}
            className="neighborhood-card group flex flex-row md:flex-col overflow-hidden"
          >
            {/* Area Image */}
            <div className="w-[110px] md:w-full shrink-0 md:aspect-video bg-gray-100 relative">
              {area.image && (
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                <div className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold text-xs md:text-lg shadow-lg flex items-center space-x-1 ${area.color}`}>
                  <Star size={12} className="fill-current md:w-4 md:h-4" />
                  <span>{area.score}</span>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-6 flex-grow flex flex-col justify-center min-w-0">
              <div className="flex justify-between items-start mb-2 md:mb-4">
                <div className="min-w-0 pr-2">
                  <h3 className="text-base md:text-xl font-serif text-gray-900 group-hover:text-brand-700 transition-colors capitalize truncate">{area.name}</h3>
                  <p className="text-gray-500 text-xs md:text-sm font-medium">{area.city}</p>
                </div>
                <div className={`text-[9px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded uppercase tracking-wider shrink-0 ${area.color}`}>
                  {area.grade}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 md:gap-2 pt-2 md:pt-4 border-t border-gray-100 mt-2 md:mt-4">
                <div className="text-center">
                  <div className="text-[9px] md:text-xs text-gray-400 uppercase mb-0.5 md:mb-1">Crime</div>
                  <div className="text-xs md:text-sm font-bold text-gray-700">{area.crime}</div>
                </div>
                <div className="text-center border-x border-gray-100">
                  <div className="text-[9px] md:text-xs text-gray-400 uppercase mb-0.5 md:mb-1">Health</div>
                  <div className="text-xs md:text-sm font-bold text-gray-700">{area.hospital}</div>
                </div>
                <div className="text-center">
                  <div className="text-[9px] md:text-xs text-gray-400 uppercase mb-0.5 md:mb-1">Commute</div>
                  <div className="text-xs md:text-sm font-bold text-gray-700">{area.comm}</div>
                </div>
              </div>

              <button className="w-full mt-3 md:mt-6 py-1.5 md:py-3 bg-brand-50 text-brand-700 font-bold rounded md:rounded-lg text-xs md:text-base hover:bg-brand-700 hover:text-white transition-all duration-300">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopAreas;

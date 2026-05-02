import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const DiscoverCTA = () => {
  return (
    <section className="section-container md:hidden pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-green-50 to-brand-50 rounded-[32px] p-6 overflow-hidden shadow-sm border border-brand-100"
      >
        <Leaf className="absolute top-4 right-4 text-brand-200" size={60} strokeWidth={1} />
        
        <div className="relative z-10 w-2/3 pr-2">
          <h2 className="text-[26px] font-serif text-gray-900 mb-2 leading-[1.15]">
            Discover Better Neighborhoods
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Smarter insights for better living decisions.
          </p>
          <button className="bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-700/30 active:scale-95 transition-transform">
            Start Exploring
          </button>
        </div>

        {/* Decorative Floating Card */}
        <div className="absolute -bottom-6 -right-12 w-48 rotate-[-12deg] shadow-2xl rounded-2xl overflow-hidden border-[3px] border-white bg-white">
          <div className="relative aspect-[4/3]">
            <img 
              src="https://res.cloudinary.com/dewymrwzf/image/upload/v1776957576/Gateway-Of-India_600_dujrqr.jpg" 
              alt="Neighborhood view" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm">
              ★ 8.9 SCORE
            </div>
            <div className="absolute bottom-2 left-3 text-white font-bold text-xs tracking-wide">
              Worli, Mumbai
            </div>
          </div>
        </div>
        
        {/* Dot pattern background */}
        <div className="absolute bottom-2 left-6 grid grid-cols-6 gap-1 opacity-20">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-brand-500 rounded-full" />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DiscoverCTA;

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const popularTags = [
  'Powai, Mumbai',
  'Bandra West, Mumbai',
  'Koramangala, Bangalore',
  'Whitefield, Bangalore',
];

const SearchHero = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <section className="relative h-[280px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
          alt="City aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/[0.82] backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            Find the <span className="text-[#11B573]">perfect</span> neighborhood
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Search and discover the best neighborhoods to live, invest and grow.
          </p>

          {/* Search Bar */}
          <div className="flex items-center gap-3 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-2 mb-5">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              id="search-hero-input"
              type="text"
              placeholder="Search neighborhoods, cities, or areas..."
              className="flex-grow py-1.5 text-slate-700 placeholder-slate-400 outline-none text-sm bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              id="search-hero-btn"
              onClick={onSearch}
              className="flex items-center gap-2 bg-[#11B573] hover:bg-[#0da368] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shrink-0"
            >
              <Sparkles size={14} />
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-slate-400 text-xs font-medium">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  onSearch();
                }}
                className="px-3 py-1 bg-white/80 border border-slate-200 hover:border-[#11B573] text-slate-600 hover:text-[#11B573] rounded-full text-xs font-medium transition-all"
              >
                {tag}
              </button>
            ))}
            <button className="flex items-center gap-1 text-xs text-[#11B573] font-bold hover:underline">
              View all <ArrowRight size={12} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchHero;

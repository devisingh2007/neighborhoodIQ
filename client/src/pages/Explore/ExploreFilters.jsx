import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Grid, Map as MapIcon, SlidersHorizontal, Check, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreFilters = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-white border-b border-slate-100 sticky top-[64px] md:top-[72px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 w-full lg:w-auto">
            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2 md:gap-3">
            {/* Filter Dropdowns */}
            <FilterDropdown 
              label="All Cities" 
              value="Mumbai" 
              icon={<SlidersHorizontal size={16} />} 
              options={['Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Pune']} 
            />
            <FilterDropdown 
              label="All Grades" 
              value="Select Grade" 
              options={['A+ Grade', 'A Grade', 'B+ Grade', 'B Grade', 'C Grade']}
            />
            <FilterDropdown 
              label="Sort by" 
              value="Overall Score" 
              options={['Overall Score', 'Price (High to Low)', 'Price (Low to High)', 'Highest Growth', 'Best AQI']}
            />
              <FilterDropdown 
                label="Min Score" 
                value="Any Score" 
                options={['Any Score', '90+', '80+', '70+', '60+']}
              />
            </div>

            {/* Mobile Explore Button */}
            <button className="lg:hidden w-full py-3.5 bg-[#11B573] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 active:scale-[0.98] transition-transform text-sm">
              <Search size={18} />
              Explore Neighborhoods
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 lg:border-slate-200 pt-3 lg:pt-0 lg:pl-4">
            <span className="text-sm font-medium text-slate-500">View as</span>
            <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-100">
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Grid size={16} />
                Grid
              </button>
              <button 
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-bold transition-all ${
                  viewMode === 'map' 
                    ? 'bg-white text-[#11B573] shadow-sm border border-slate-200/50' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <MapIcon size={16} />
                Map
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const FilterDropdown = ({ label, value, icon, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-6 px-4 py-2.5 bg-white border rounded-xl transition-all duration-300 group w-full lg:min-w-[160px] ${
          isOpen ? 'border-brand-400 shadow-md ring-4 ring-brand-50' : 'border-slate-200 hover:border-brand-300 hover:shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3 text-left">
          {icon && (
            <div className={`transition-colors duration-300 ${isOpen ? 'text-brand-500' : 'text-slate-400 group-hover:text-brand-500'}`}>
              {icon}
            </div>
          )}
          <div>
            <div className={`text-[10px] uppercase tracking-wider font-bold leading-none mb-1 transition-colors duration-300 ${isOpen ? 'text-brand-500' : 'text-slate-400'}`}>
              {label}
            </div>
            <div className="text-sm font-bold text-slate-700 leading-none">{selectedValue}</div>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <ChevronDown size={16} className={`transition-colors duration-300 ${isOpen ? 'text-brand-500' : 'text-slate-400 group-hover:text-brand-500'}`} />
        </motion.div>
      </button>

      {/* Dropdown Menu Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 w-full min-w-[220px] bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_12px_40px_rgb(0,0,0,0.12)] rounded-2xl z-50 overflow-hidden ring-1 ring-black/5"
          >
            <div className="p-2 max-h-[300px] overflow-y-auto custom-scrollbar">
              {options.length > 0 ? options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setSelectedValue(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl flex items-center justify-between transition-all duration-200 ${
                    opt === selectedValue 
                      ? 'bg-brand-50 text-brand-700 shadow-sm border border-brand-100/50' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600 border border-transparent'
                  }`}
                >
                  {opt}
                  {opt === selectedValue && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                      <Check size={16} className="text-brand-600" />
                    </motion.div>
                  )}
                </button>
              )) : (
                <div className="px-4 py-3 text-sm text-slate-500 text-center italic">Options coming soon</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreFilters;

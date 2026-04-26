import React from 'react';
import { ChevronDown, Grid, Map as MapIcon, SlidersHorizontal } from 'lucide-react';

const ExploreFilters = () => {
  return (
    <div className="bg-white border-b border-slate-100 sticky top-[72px] z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Dropdowns */}
            <FilterDropdown label="All Cities" value="Select City" icon={<SlidersHorizontal size={16} />} />
            <FilterDropdown label="All Grades" value="Select Grade" />
            <FilterDropdown label="Sort by" value="Overall Score" />
            <FilterDropdown label="Min Score" value="Any Score" />
          </div>

          <div className="flex items-center gap-4 border-l border-slate-200 pl-4 ml-auto lg:ml-0">
            <span className="text-sm font-medium text-slate-500">View as</span>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white text-brand-700 rounded-md shadow-sm text-sm font-bold">
                <Grid size={16} />
                Grid
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors">
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

const FilterDropdown = ({ label, value, icon }) => (
  <button className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:border-brand-300 transition-all group">
    <div className="p-1.5 bg-brand-50 text-brand-600 rounded-lg group-hover:bg-brand-100 transition-colors">
      {icon || <ChevronDown size={16} />}
    </div>
    <div className="text-left">
      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 leading-none mb-1">{label}</div>
      <div className="text-sm font-bold text-slate-700 leading-none">{value}</div>
    </div>
  </button>
);

export default ExploreFilters;

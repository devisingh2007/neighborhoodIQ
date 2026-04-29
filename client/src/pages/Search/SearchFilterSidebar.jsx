import React, { useState } from 'react';
import { MapPin, ChevronDown, Home, Building2, Trees, Landmark, RotateCcw, Sparkles } from 'lucide-react';

const propertyTypes = [
  { label: 'All', icon: Home },
  { label: 'Apartment', icon: Building2 },
  { label: 'Villa', icon: Trees },
  { label: 'House', icon: Landmark },
];

const amenitiesList = [
  'Schools',
  'Hospitals',
  'Parks & Greenery',
  'Metro Connectivity',
  'Shopping Malls',
];

const SearchFilterSidebar = ({ filters, setFilters, onApply, onReset }) => {
  const [showMoreAmenities, setShowMoreAmenities] = useState(false);

  const handleAmenityToggle = (amenity) => {
    setFilters((prev) => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists
          ? prev.amenities.filter((a) => a !== amenity)
          : [...prev.amenities, amenity],
      };
    });
  };

  const visibleAmenities = showMoreAmenities ? amenitiesList : amenitiesList.slice(0, 4);

  return (
    <aside className="w-[240px] shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 self-start sticky top-[72px] flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">Filters</span>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-[11px] font-bold text-[#11B573] hover:underline"
        >
          <RotateCcw size={11} />
          Reset all
        </button>
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
          <MapPin size={13} className="text-slate-400" />
          Location
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter city or area"
            value={filters.location}
            onChange={(e) => setFilters((p) => ({ ...p, location: e.target.value }))}
            className="w-full pl-3 pr-8 py-2 rounded-lg border border-slate-200 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#11B573] focus:ring-2 focus:ring-[#11B573]/10 transition-all"
          />
          <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Budget Range */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-3">Budget Range</label>
        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
          <span>₹ 20L</span>
          <span>₹5Cr+</span>
        </div>
        <div className="relative h-1 bg-slate-100 rounded-full">
          <div
            className="absolute left-0 h-1 bg-[#11B573] rounded-full"
            style={{ width: `${((filters.budgetMax - 20) / (500 - 20)) * 100}%` }}
          />
          <input
            type="range"
            min={20}
            max={500}
            value={filters.budgetMax}
            onChange={(e) => setFilters((p) => ({ ...p, budgetMax: Number(e.target.value) }))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-1"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#11B573] rounded-full border-2 border-white shadow-md cursor-grab"
            style={{ left: `calc(${((filters.budgetMax - 20) / (500 - 20)) * 100}% - 8px)` }}
          />
        </div>
      </div>

      {/* Min Score */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-3">
          Min Score
          <span className="ml-1 text-slate-400 cursor-help" title="Overall livability score from 0–100">ⓘ</span>
        </label>
        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-2">
          <span>0</span>
          <span className="font-bold text-[#11B573]">{filters.minScore}+</span>
        </div>
        <div className="relative h-1 bg-slate-100 rounded-full">
          <div
            className="absolute left-0 h-1 bg-[#11B573] rounded-full"
            style={{ width: `${filters.minScore}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={filters.minScore}
            onChange={(e) => setFilters((p) => ({ ...p, minScore: Number(e.target.value) }))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer h-1"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#11B573] rounded-full border-2 border-white shadow-md cursor-grab"
            style={{ left: `calc(${filters.minScore}% - 8px)` }}
          />
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-3">Property Type</label>
        <div className="grid grid-cols-4 gap-1.5">
          {propertyTypes.map(({ label, icon: Icon }) => {
            const active = filters.propertyType === label;
            return (
              <button
                key={label}
                onClick={() => setFilters((p) => ({ ...p, propertyType: label }))}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl border text-[10px] font-bold transition-all ${
                  active
                    ? 'bg-[#11B573]/10 border-[#11B573] text-[#11B573]'
                    : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-300'
                }`}
              >
                <Icon size={16} strokeWidth={active ? 2.5 : 1.5} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-3">Amenities</label>
        <div className="space-y-2">
          {visibleAmenities.map((amenity) => {
            const checked = filters.amenities.includes(amenity);
            return (
              <label key={amenity} className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  onClick={() => handleAmenityToggle(amenity)}
                  className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-all border ${
                    checked
                      ? 'bg-[#11B573] border-[#11B573]'
                      : 'border-slate-300 bg-white group-hover:border-[#11B573]'
                  }`}
                >
                  {checked && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-xs font-medium transition-colors ${checked ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  {amenity}
                </span>
              </label>
            );
          })}
        </div>
        <button
          onClick={() => setShowMoreAmenities(!showMoreAmenities)}
          className="mt-2 flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-slate-700 transition-colors"
        >
          {showMoreAmenities ? 'Show less' : 'Show more'}
          <ChevronDown size={11} className={`transition-transform ${showMoreAmenities ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Apply Button */}
      <button
        id="apply-filters-btn"
        onClick={onApply}
        className="w-full flex items-center justify-center gap-2 py-3 bg-[#11B573] hover:bg-[#0da368] text-white font-bold text-sm rounded-xl transition-colors shadow-sm shadow-[#11B573]/30"
      >
        <Sparkles size={15} />
        Apply Filters
      </button>
    </aside>
  );
};

export default SearchFilterSidebar;

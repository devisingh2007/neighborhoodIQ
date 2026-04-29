import React from 'react';
import { X, ChevronDown, List, Map as MapIcon, Bookmark, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Wind, Building2 } from 'lucide-react';

// ─── Neighborhood Result Card ─────────────────────────────────────────────────
const NeighborhoodResultCard = ({ neighborhood, onLocate }) => {
  const matchColors = {
    'Great Match': 'text-[#11B573] bg-[#11B573]/10',
    'Good Match': 'text-blue-500 bg-blue-50',
    'Fair Match': 'text-amber-500 bg-amber-50',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-[#11B573]/30 hover:shadow-md transition-all group"
    >
      {/* Image */}
      <div className="relative w-[140px] h-[100px] shrink-0 rounded-xl overflow-hidden">
        <img
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Score badge */}
        <div className="absolute bottom-2 left-2 w-8 h-8 bg-[#0F2F20] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <span className="text-white text-[11px] font-bold">{neighborhood.score}</span>
        </div>
      </div>

      {/* Main Info */}
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-[15px] font-bold text-slate-900">{neighborhood.name}</h3>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${matchColors[neighborhood.matchLabel] || 'text-[#11B573] bg-[#11B573]/10'}`}>
            {neighborhood.matchLabel}
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-[11px] mb-3">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {neighborhood.location}
        </div>

        {/* Score Metrics */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <Shield size={12} className="text-slate-400 mb-0.5" />
            <span className="text-[9px] text-slate-400 uppercase tracking-wide">Safety</span>
            <span className="text-xs font-bold text-slate-700">{neighborhood.safety}</span>
          </div>
          <div className="flex flex-col items-center">
            <Wind size={12} className="text-slate-400 mb-0.5" />
            <span className="text-[9px] text-slate-400 uppercase tracking-wide">Environment</span>
            <span className="text-xs font-bold text-slate-700">{neighborhood.environment}</span>
          </div>
          <div className="flex flex-col items-center">
            <Building2 size={12} className="text-slate-400 mb-0.5" />
            <span className="text-[9px] text-slate-400 uppercase tracking-wide">Infrastructure</span>
            <span className="text-xs font-bold text-slate-700">{neighborhood.infrastructure}</span>
          </div>
        </div>
      </div>

      {/* Price & Actions */}
      <div className="flex flex-col items-end justify-between shrink-0">
        <div className="text-right">
          <div className="text-[15px] font-bold text-slate-900">{neighborhood.avgPrice}</div>
          <div className="text-[10px] text-slate-400">Avg. Property Price</div>
          <div className="text-[14px] font-bold text-[#11B573] mt-1">{neighborhood.rentalYield}</div>
          <div className="text-[10px] text-slate-400">Rental Yield</div>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <button className="p-2 rounded-full border border-slate-200 hover:border-[#11B573] hover:text-[#11B573] text-slate-400 transition-all" title="Save to bookmarks">
            <Bookmark size={14} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onLocate && onLocate(neighborhood); }}
            className="p-2 rounded-full border border-slate-200 hover:border-[#11B573] hover:text-[#11B573] text-slate-400 transition-all" 
            title="Locate on map"
          >
            <MapIcon size={14} />
          </button>
          <button className="px-4 py-1.5 bg-[#11B573] hover:bg-[#0da368] text-white text-xs font-bold rounded-lg transition-colors shadow-sm">
            Compare
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Active Filter Chip ───────────────────────────────────────────────────────
const FilterChip = ({ label, onRemove }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#11B573]/10 border border-[#11B573]/25 text-[#11B573] rounded-full text-xs font-bold">
    {label}
    {onRemove && (
      <button onClick={onRemove} className="hover:text-[#0a7a4e] transition-colors">
        <X size={11} strokeWidth={3} />
      </button>
    )}
  </div>
);

// ─── Search Results Panel ─────────────────────────────────────────────────────
const SearchResults = ({
  results,
  totalCount,
  activeFilters,
  onRemoveFilter,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  onLocate,
}) => {
  return (
    <div className="flex-grow flex flex-col gap-4 min-w-0">
      {/* Active Filter Chips + Sort */}
      <div className="flex flex-wrap items-center gap-2">
        {activeFilters.map((f) => (
          <FilterChip key={f.key} label={f.label} onRemove={() => onRemoveFilter(f.key)} />
        ))}

        <div className="ml-auto flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-500 font-medium">Sort by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-3 pr-7 py-1.5 text-xs font-bold text-slate-700 border border-slate-200 rounded-lg bg-white outline-none focus:border-[#11B573] cursor-pointer"
            >
              <option>Best Match</option>
              <option>Highest Score</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
              <option>Best Rental Yield</option>
            </select>
            <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Count + View Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          <span className="font-bold text-slate-900">{totalCount}</span> neighborhoods found
        </span>

        <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <List size={13} />
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
              viewMode === 'map' ? 'bg-white text-[#11B573] shadow-sm' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <MapIcon size={13} />
            Map View
          </button>
        </div>
      </div>

      {/* Results List */}
      <div className="flex flex-col gap-3">
        {results.map((n) => (
          <NeighborhoodResultCard key={n.id} neighborhood={n} onLocate={onLocate} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-2 pb-4">
        <button className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 hover:border-[#11B573] text-slate-500 hover:text-[#11B573] rounded-full text-xs font-bold transition-all">
          Load more neighborhoods
          <ChevronDownIcon size={13} />
        </button>
      </div>
    </div>
  );
};

export default SearchResults;

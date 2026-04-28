import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Clock, MapPin, Plus, Trash2, Map as MapIcon, ChevronRight } from 'lucide-react';

const AddNeighborhoodSidebar = ({ isOpen, onClose, onAdd, alreadySelected }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queued, setQueued] = useState([]);

  // Mock data for trending/recent
  const recentSearches = ['Powai, Mumbai', 'Bandra West, Mumbai', 'Whitefield, Bangalore'];

  const popularNeighborhoods = [
    { id: 5, name: 'Powai', city: 'Mumbai', score: 88, price: '₹22K/sqft', aqi: 'Moderate', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, name: 'Bandra West', city: 'Mumbai', score: 87, price: '₹45K/sqft', aqi: 'Good', image: 'https://images.unsplash.com/photo-1596743444221-6015070b23e1?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, name: 'Whitefield', city: 'Bangalore', score: 86, price: '₹15K/sqft', aqi: 'Good', image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop' },
    { id: 1, name: 'Koramangala', city: 'Bangalore', score: 84, price: '₹18K/sqft', aqi: 'Good', image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?q=80&w=1000&auto=format&fit=crop' },
    { id: 6, name: 'Dwarka', city: 'Delhi', score: 82, price: '₹12K/sqft', aqi: 'Moderate', image: 'https://images.unsplash.com/photo-1515165597734-7b798038d618?q=80&w=1000&auto=format&fit=crop' },
  ];

  const handleToggleQueue = (neighborhood) => {
    if (queued.find(n => n.id === neighborhood.id)) {
      setQueued(queued.filter(n => n.id !== neighborhood.id));
    } else {
      if (queued.length + alreadySelected.length < 4) {
        setQueued([...queued, neighborhood]);
      }
    }
  };

  const handleFinalAdd = () => {
    onAdd(queued);
    setQueued([]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Add Neighborhood</h2>
                <p className="text-slate-500 text-sm max-w-[240px]">Search and add neighborhoods to compare</p>
              </div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-20 h-16 shrink-0 -mt-2">
                  <img src="/images/neighborhoods/image copy.png" className="w-full h-full object-contain" alt="" />
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {/* Search */}
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#11B573]" size={18} />
                <input
                  type="text"
                  placeholder="Search neighborhoods, cities..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#11B573] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-700"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Recent Searches */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-900 text-sm">Recent Searches</h3>
                  <button className="text-[11px] font-bold text-emerald-600 hover:underline">Clear</button>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-200 transition-all group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Clock size={14} className="text-slate-400" />
                        <span className="text-[13px] font-medium text-slate-600">{item}</span>
                      </div>
                      <button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular This Week */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-900 text-sm">Popular This Week</h3>
                  <button className="text-[11px] font-bold text-emerald-600 hover:underline">View all</button>
                </div>
                <div className="space-y-4">
                  {popularNeighborhoods.map((area) => {
                    const isAlreadyInMain = alreadySelected.find(n => n.id === area.id);
                    const isQueued = queued.find(n => n.id === area.id);

                    return (
                      <div key={area.id} className="flex items-center gap-4 group">
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                          <img src={area.image} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-slate-900 text-sm mb-0.5">{area.name}, {area.city}</h4>
                          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                            <span>Score <span className="text-slate-600 font-bold">{area.score}</span></span>
                            <span>•</span>
                            <span>{area.price}</span>
                            <span>•</span>
                            <span>AQI: <span className="text-emerald-600">{area.aqi}</span></span>
                          </div>
                        </div>
                        <button
                          disabled={isAlreadyInMain}
                          onClick={() => handleToggleQueue(area)}
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all
                            ${isAlreadyInMain ? 'bg-slate-50 border-slate-200 text-slate-300' :
                              isQueued ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg' :
                                'border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-500'}`}
                        >
                          {isQueued ? <X size={16} /> : <Plus size={16} />}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map CTA */}
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:bg-slate-100/50 transition-colors">
                <div className="relative z-10 space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1">Can't find your area?</h4>
                    <p className="text-[13px] text-slate-400 font-medium leading-tight">Click on the map to select your location</p>
                  </div>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-[#11B573] to-[#0ea366] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all active:scale-95">
                    <MapPin size={16} />
                    Select on Map
                  </button>
                </div>
                <div className="w-32 h-24 relative shrink-0">
                  <div className="absolute top-0 right-0 w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    <img src="/images/neighborhoods/image copy.png" className="w-full h-full object-contain" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-slate-900">
                  Selected ({queued.length + alreadySelected.length}/4)
                </div>
                <button
                  onClick={() => setQueued([])}
                  className="text-[11px] font-bold text-emerald-600 hover:underline"
                >
                  Clear All
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {alreadySelected.map(area => (
                  <div key={area.id} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-slate-400 opacity-60">
                    <span className="text-[11px] font-bold">{area.name}, {area.city}</span>
                    <X size={10} />
                  </div>
                ))}
                {queued.map(area => (
                  <div key={area.id} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600">
                    <span className="text-[11px] font-bold">{area.name}, {area.city}</span>
                    <button onClick={() => handleToggleQueue(area)}>
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleFinalAdd}
                disabled={queued.length === 0}
                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all
                  ${queued.length > 0 ? 'bg-[#11B573] text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
              >
                Add to Compare ({queued.length})
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AddNeighborhoodSidebar;

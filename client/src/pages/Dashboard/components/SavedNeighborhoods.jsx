import React from 'react';
import { Bookmark, Share2, ChevronRight } from 'lucide-react';

const savedNeighborhoods = [
  { 
    id: 1, 
    name: 'Powai', 
    city: 'Mumbai', 
    score: 92, 
    price: '₹2.4 Cr', 
    yield: '4.2%', 
    aqi: 40, 
    image: 'https://images.unsplash.com/photo-1596743444221-6015070b23e1?q=80&w=1000&auto=format&fit=crop',
    tag: 'Great Match',
  },
  { 
    id: 2, 
    name: 'Bandra West', 
    city: 'Mumbai', 
    score: 88, 
    price: '₹3.6 Cr', 
    yield: '3.8%', 
    aqi: 48, 
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop',
    tag: 'Great Match',
  },
  { 
    id: 3, 
    name: 'Andheri West', 
    city: 'Mumbai', 
    score: 85, 
    price: '₹2.1 Cr', 
    yield: '4.1%', 
    aqi: 55, 
    image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?q=80&w=1000&auto=format&fit=crop',
    tag: 'Good Match',
  },
  { 
    id: 4, 
    name: 'Lower Parel', 
    city: 'Mumbai', 
    score: 82, 
    price: '₹3.2 Cr', 
    yield: '3.6%', 
    aqi: 42, 
    image: 'https://images.unsplash.com/photo-1515165597734-7b798038d618?q=80&w=1000&auto=format&fit=crop',
    tag: 'Good Match',
  },
  { 
    id: 5, 
    name: 'Juhu', 
    city: 'Mumbai', 
    score: 90, 
    price: '₹5.5 Cr', 
    yield: '3.2%', 
    aqi: 35, 
    image: 'https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=1000&auto=format&fit=crop',
    tag: 'Premium Match',
  },
  { 
    id: 6, 
    name: 'Worli', 
    city: 'Mumbai', 
    score: 87, 
    price: '₹4.8 Cr', 
    yield: '3.5%', 
    aqi: 45, 
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop',
    tag: 'Great Match',
  },
  { 
    id: 7, 
    name: 'Malad West', 
    city: 'Mumbai', 
    score: 81, 
    price: '₹1.8 Cr', 
    yield: '4.5%', 
    aqi: 52, 
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
    tag: 'Value Match',
  },
  { 
    id: 8, 
    name: 'Khar West', 
    city: 'Mumbai', 
    score: 86, 
    price: '₹3.1 Cr', 
    yield: '3.9%', 
    aqi: 47, 
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
    tag: 'Good Match',
  },
];

const SavedNeighborhoods = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="text-lg font-bold text-slate-900">Your Saved Neighborhoods</h3>
        <button className="text-[11px] font-bold text-[#11B573] uppercase tracking-wider hover:underline">View all</button>
      </div>
      
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 scroll-smooth hide-scrollbar no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {savedNeighborhoods.map((area) => (
            <div key={area.id} className="min-w-[320px] max-w-[320px] bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group/card relative">
              <div className="relative h-44 overflow-hidden shrink-0">
                <img src={area.image} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                <div className="absolute top-4 right-4 w-9 h-9 bg-[#11B573] text-white rounded-xl shadow-lg flex items-center justify-center font-bold text-sm border-2 border-white/40 z-10">
                  {area.score}
                </div>
                <div className="absolute top-4 left-4 opacity-0 group-hover/card:opacity-100 transition-opacity z-10 flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center text-slate-600 hover:text-[#11B573] shadow-sm transition-colors"><Share2 size={14} /></button>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-slate-900 mb-0.5 leading-tight">{area.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">{area.city}</p>
                
                <div className="mb-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${area.tag === 'Great Match' ? 'bg-emerald-50 text-emerald-600' : area.tag === 'Premium Match' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                    {area.tag}
                  </span>
                </div>

                <div className="mt-auto grid grid-cols-4 gap-2 border-t border-slate-50 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-wider mb-1">Score</span>
                    <span className="text-[11px] font-bold text-slate-700">{area.score}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-wider mb-1">Price</span>
                    <span className="text-[11px] font-bold text-slate-700">{area.price}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-wider mb-1">Yield</span>
                    <span className="text-[11px] font-bold text-emerald-600">{area.yield}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-slate-300 uppercase tracking-wider mb-1">AQI</span>
                    <span className="text-[11px] font-bold text-slate-700">{area.aqi}</span>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 text-slate-300 hover:text-[#11B573] cursor-pointer transition-colors p-1">
                  <Bookmark size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Arrow Button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#11B573] transition-all z-20 hover:scale-110 active:scale-95 group/arrow"
        >
          <ChevronRight size={24} className="group-hover/arrow:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default SavedNeighborhoods;

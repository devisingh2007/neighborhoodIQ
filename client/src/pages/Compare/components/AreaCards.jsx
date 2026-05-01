import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Trophy, GraduationCap, DollarSign, Heart, Star } from 'lucide-react';

const HighlightIcon = ({ icon, className }) => {
  switch (icon) {
    case 'trophy': return <Trophy className={className} />;
    case 'graduation-cap': return <GraduationCap className={className} />;
    case 'dollar-sign': return <DollarSign className={className} />;
    case 'heart': return <Heart className={className} />;
    default: return <Star className={className} />;
  }
};

const AreaCards = ({ selectedAreas, onAdd }) => {
  const scrollRef = React.useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = (e) => {
    const element = e.target;
    const progress = element.scrollLeft / (element.scrollWidth - element.clientWidth);
    setScrollProgress(progress || 0);
  };

  return (
    <div className="mb-10">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex lg:grid lg:grid-cols-5 gap-2 md:gap-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-6 lg:pb-0 hide-scrollbar px-4 lg:px-0 items-stretch"
      >
        {selectedAreas.map((area, idx) => (
          <motion.div
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[110px] min-w-[110px] max-w-[110px] md:w-auto md:min-w-[280px] md:max-w-none lg:min-w-0 flex-shrink-0 snap-center bg-white rounded-[1.25rem] md:rounded-[2rem] p-1.5 md:p-3 shadow-md shadow-slate-200/50 border border-slate-100 relative group overflow-hidden flex flex-col"
          >
            <div className="relative mb-2 md:mb-3 aspect-square rounded-[0.85rem] md:rounded-[1.5rem] overflow-hidden shrink-0">
              <img src={area.image} alt={area.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              <div className="absolute top-1 right-1 w-4 h-4 md:w-7 md:h-7 bg-[#11B573] text-white rounded md:rounded-lg flex items-center justify-center font-bold text-[7px] md:text-xs shadow-lg z-10">
                {idx + 1}
              </div>
            </div>
            
            <div className="px-0.5 flex justify-between items-center mb-2.5 md:mb-4 min-h-[30px] md:min-h-0">
              <div className="flex-1 pr-1 overflow-hidden">
                <h3 className="font-bold text-slate-900 text-[9px] md:text-lg leading-tight mb-0.5 line-clamp-2">{area.name}</h3>
                <p className="text-slate-400 text-[7px] md:text-sm font-medium truncate">{area.city}</p>
              </div>
              <div className={`w-6.5 h-6.5 md:w-11 md:h-11 rounded-full border-[1px] md:border-[1.5px] flex items-center justify-center font-bold text-[8px] md:text-sm shrink-0
                ${area.score >= 90 ? 'border-emerald-500 text-emerald-600' : 
                  area.score >= 80 ? 'border-blue-500 text-blue-600' : 
                  'border-amber-500 text-amber-600'}`}
              >
                {area.score}
              </div>
            </div>

            <div className="px-0.5 pb-0.5 mt-auto">
              <div className="inline-flex items-center gap-0.5 md:gap-2 px-1 py-0.5 md:px-3 md:py-1.5 rounded-full bg-slate-50/80 border border-slate-100/50 overflow-hidden w-full">
                <HighlightIcon icon={area.highlightIcon} className="w-2 h-2 md:w-3.5 md:h-3.5 text-[#11B573] shrink-0" />
                <span className="text-[6px] md:text-[11px] font-bold text-slate-600 tracking-tight whitespace-nowrap truncate">{area.highlight}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Desktop Add Card */}
        {selectedAreas.length < 5 && (
          <button
            onClick={onAdd}
            className="hidden lg:flex bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-200 flex-col items-center justify-center p-8 gap-3 group hover:border-[#11B573] hover:bg-emerald-50/30 transition-all min-h-[280px]"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#11B573] group-hover:border-[#11B573] transition-colors shadow-sm">
              <Plus size={24} />
            </div>
            <div className="text-center">
              <p className="text-[#11B573] font-bold text-sm">Add</p>
              <p className="text-[#11B573] font-bold text-sm leading-tight">Neighborhood</p>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Carousel Dots */}
      <div className="flex lg:hidden justify-center gap-2 mt-2 mb-8">
        {selectedAreas.map((_, i) => (
          <div 
            key={i} 
            className={`h-2 rounded-full transition-all duration-300 ${
              Math.abs(scrollProgress * (selectedAreas.length - 1) - i) < 0.5 
                ? 'w-2 bg-[#11B573]' 
                : 'w-2 bg-slate-200'
            }`} 
          />
        ))}
      </div>

      {/* Mobile Add Neighborhood Button - Dashed Box Style */}
      {selectedAreas.length < 5 && (
        <div className="px-4 lg:hidden">
          <button
            onClick={onAdd}
            className="w-full bg-slate-50/50 rounded-[1.5rem] border-2 border-dashed border-slate-200 py-6 flex flex-col items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
              <Plus size={20} />
            </div>
            <span className="text-[#11B573] font-bold text-sm">Add Neighborhood</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AreaCards;

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
      {selectedAreas.map((area) => (
        <motion.div
          key={area.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 relative group overflow-hidden"
        >
          <div className="relative mb-4 aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={area.image} alt={area.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute top-3 right-3 w-8 h-8 bg-[#0F2F20] text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg z-10">
              {area.id}
            </div>
          </div>
          
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">{area.name}</h3>
              <p className="text-slate-400 text-sm font-medium">{area.city}</p>
            </div>
            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-lg
              ${area.score >= 90 ? 'border-emerald-500 text-emerald-600' : 
                area.score >= 80 ? 'border-blue-500 text-blue-600' : 
                'border-amber-500 text-amber-600'}`}
            >
              {area.score}
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full w-fit">
            <HighlightIcon icon={area.highlightIcon} className="w-3.5 h-3.5 text-[#11B573]" />
            <span className="text-[11px] font-bold text-slate-600">{area.highlight}</span>
          </div>
        </motion.div>
      ))}

      {selectedAreas.length < 5 && (
        <button
          onClick={onAdd}
          className="bg-slate-50/50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 gap-3 group hover:border-[#11B573] hover:bg-emerald-50/30 transition-all min-h-[280px]"
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
  );
};

export default AreaCards;

import React from 'react';
import { Info, ArrowRight } from 'lucide-react';

const ScoreBreakdown = ({ selectedAreas }) => {
  const categories = ['Safety', 'Environment', 'Infrastructure', 'Education', 'Healthcare', 'Lifestyle'];
  
  const colors = [
    'bg-[#11B573]', // Downtown Brooklyn (Green)
    'bg-[#3B82F6]', // Midtown Atlanta (Blue)
    'bg-[#F59E0B]', // Austin City Center (Amber)
    'bg-[#EF4444]', // Silver Lake (Red)
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <h3 className="font-bold text-slate-900 text-xl md:text-2xl text-center md:text-left">Score Breakdown</h3>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
            {selectedAreas.map((area, i) => (
              <div key={area.id} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${colors[i % colors.length]}`} />
                <span className="text-[10px] font-bold text-slate-500 whitespace-nowrap">
                  {i + 1}. {area.name.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-[180px] md:h-[240px] px-2 md:px-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center flex-1 gap-2">
              <div className="flex items-end gap-1 md:gap-1.5 h-[140px] md:h-[200px]">
                {selectedAreas.map((area, j) => {
                  const val = area.metrics.find(m => m.label === cat)?.value || 0;
                  return (
                    <div 
                      key={j} 
                      className={`w-2 md:w-3.5 rounded-t-sm transition-all duration-700 ${colors[j % colors.length]}`} 
                      style={{ height: `${val * (window.innerWidth < 768 ? 1.4 : 2)}px` }} 
                    />
                  );
                })}
              </div>
              <span className="text-[8px] md:text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider text-center max-w-[40px] md:max-w-none">
                {cat.length > 8 ? cat.substring(0, 5) + '..' : cat}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-[#f0faf5] rounded-[2rem] p-6 md:p-8 border border-emerald-100 flex-grow">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 mb-4 md:mb-6 shadow-sm">
            <Info size={20} className="md:w-6 md:h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-2 md:mb-3">About Our Scores</h3>
          <p className="text-slate-500 text-[12px] md:text-[14px] leading-relaxed mb-6 md:mb-8 font-medium">
            We analyze 50+ public data sources to score neighborhoods across 7 key categories. Scores are updated monthly for accuracy.
          </p>
          <button className="flex items-center gap-2 text-emerald-600 font-bold text-xs md:text-sm group">
            View Methodology
            <ArrowRight size={14} className="md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreBreakdown;

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
        <div className="flex items-center justify-between mb-10">
          <h3 className="font-bold text-slate-900 text-2xl">Score Breakdown</h3>
          <div className="flex gap-4">
            {selectedAreas.map((area, i) => (
              <div key={area.id} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${colors[i % colors.length]}`} />
                <span className="text-[11px] font-bold text-slate-500 whitespace-nowrap">{area.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-[240px] px-4">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center flex-1 gap-2">
              <div className="flex items-end gap-1.5 h-[200px]">
                {selectedAreas.map((area, j) => {
                  const val = area.metrics.find(m => m.label === cat)?.value || 0;
                  return (
                    <div 
                      key={j} 
                      className={`w-3.5 rounded-t-sm transition-all duration-700 ${colors[j % colors.length]}`} 
                      style={{ height: `${val * 2}px` }} 
                    />
                  );
                })}
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-[#f0faf5] rounded-[2rem] p-8 border border-emerald-100 flex-grow">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
            <Info size={24} />
          </div>
          <h3 className="font-bold text-slate-900 text-xl mb-3">About Our Scores</h3>
          <p className="text-slate-500 text-[14px] leading-relaxed mb-8 font-medium">
            We analyze 50+ public data sources to score neighborhoods across 7 key categories. Scores are updated monthly for accuracy.
          </p>
          <button className="flex items-center gap-2 text-emerald-600 font-bold text-sm group">
            View Methodology
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreBreakdown;

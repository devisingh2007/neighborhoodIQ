import React from 'react';
import { Trophy, Shield, DollarSign, GraduationCap } from 'lucide-react';

const AtAGlance = () => {
  const highlights = [
    { label: 'Best Overall', name: 'Downtown Brooklyn', score: 92, icon: <Trophy className="text-emerald-500" />, bg: 'bg-emerald-500/10' },
    { label: 'Safest', name: 'Downtown Brooklyn', score: 92, icon: <Shield className="text-blue-500" />, bg: 'bg-blue-500/10' },
    { label: 'Best Value', name: 'Austin City Center', score: 85, icon: <DollarSign className="text-amber-500" />, bg: 'bg-amber-500/10' },
    { label: 'Best Education', name: 'Midtown Atlanta', score: 88, icon: <GraduationCap className="text-purple-500" />, bg: 'bg-purple-500/10' },
  ];

  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 mb-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
      <div className="w-full lg:w-32 shrink-0 text-center lg:text-left">
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">At a Glance</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {highlights.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4 group cursor-default text-center md:text-left">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
              {React.cloneElement(item.icon, { size: 20, className: "md:w-6 md:h-6" })}
            </div>
            <div>
              <p className="text-slate-400 text-[9px] md:text-[11px] font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
              <h4 className="font-bold text-slate-900 text-[12px] md:text-[14px] leading-tight mb-0.5">{item.name}</h4>
              <p className="text-slate-500 text-[10px] md:text-[12px] font-medium">Score: <span className="font-bold text-slate-700">{item.score}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtAGlance;

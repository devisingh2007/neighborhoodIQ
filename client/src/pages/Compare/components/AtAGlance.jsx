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
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 mb-10 flex flex-wrap lg:flex-nowrap items-center gap-8">
      <div className="lg:w-32 shrink-0">
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">At a</h3>
        <h3 className="font-bold text-slate-900 text-lg">Glance</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
              <h4 className="font-bold text-slate-900 text-[14px] leading-tight mb-0.5">{item.name}</h4>
              <p className="text-slate-500 text-[12px] font-medium">Score: <span className="font-bold text-slate-700">{item.score}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtAGlance;

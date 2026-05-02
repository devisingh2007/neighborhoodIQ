import React from 'react';
import { ShieldCheck, Leaf, Landmark, Users, Coffee, TrendingUp, Zap, Building } from 'lucide-react';

const IntelligenceSection = () => {
  const metrics = [
    { icon: <ShieldCheck />, title: 'Safety' },
    { icon: <Leaf />, title: 'Environment' },
    { icon: <Landmark />, title: 'Infrastructure' },
    { icon: <Users />, title: 'Social' },
    { icon: <Coffee />, title: 'Lifestyle' },
    { icon: <TrendingUp />, title: 'Growth' },
    { icon: <Zap />, title: 'Utilities' },
    { icon: <Building />, title: 'Governance' },
  ];

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10 flex flex-col items-center">
          <h2 className="text-[20px] md:text-[28px] font-bold text-slate-900 mb-3 tracking-tight">Why Neighborhood Intelligence Matters</h2>
          <div className="w-12 h-1 bg-[#11B573] rounded-full mb-2" />
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-4 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white p-3 md:p-6 rounded-lg md:rounded-xl border border-[#11B573]/20 md:border-[#11B573] flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow group cursor-default"
            >
              <div className="text-[#11B573] mb-1.5 md:mb-3 group-hover:scale-110 transition-transform">
                {React.cloneElement(metric.icon, { size: 20, className: "md:w-7 md:h-7", strokeWidth: 1.5 })}
              </div>
              <h3 className="text-[9px] md:text-[13px] font-bold text-slate-800 leading-tight">{metric.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;

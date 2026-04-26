import React from 'react';
import { ShieldCheck, Leaf, Landmark, Users, Coffee, TrendingUp, Droplets, Gavel } from 'lucide-react';

const IntelligenceSection = () => {
  const metrics = [
    { icon: <ShieldCheck />, title: 'Safety', subtitle: 'Crime & Security' },
    { icon: <Leaf />, title: 'Environment', subtitle: 'Air, Water, Green' },
    { icon: <Landmark />, title: 'Infrastructure', subtitle: 'Connectivity' },
    { icon: <Users />, title: 'Social', subtitle: 'Schools, Hospitals' },
    { icon: <Coffee />, title: 'Lifestyle', subtitle: 'Amenities' },
    { icon: <TrendingUp />, title: 'Growth', subtitle: 'Future Potential' },
    { icon: <Droplets />, title: 'Utilities', subtitle: 'Power, Water' },
    { icon: <Gavel />, title: 'Governance', subtitle: 'Transparency' },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Neighborhood Intelligence Matters</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Make smarter real estate decisions with standardized data on 50+ indicators across 8 key categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg hover:border-brand-200 transition-all cursor-default group"
            >
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                {React.cloneElement(metric.icon, { size: 24 })}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{metric.title}</h3>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tighter">{metric.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;

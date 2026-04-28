import React from 'react';
import { Star, Shield, Leaf, Building, GraduationCap, HeartPulse, Smile, BadgeDollarSign, Landmark, Wind, School, Hospital } from 'lucide-react';

const MetricIcon = ({ label }) => {
  const className = "w-4 h-4 text-slate-400";
  switch (label) {
    case 'Overall Score': return <Star className={className} />;
    case 'Safety': return <Shield className={className} />;
    case 'Environment': return <Leaf className={className} />;
    case 'Infrastructure': return <Building className={className} />;
    case 'Education': return <GraduationCap className={className} />;
    case 'Healthcare': return <HeartPulse className={className} />;
    case 'Lifestyle': return <Smile className={className} />;
    case 'Price / sqft': return <BadgeDollarSign className={className} />;
    case 'Rental Yield': return <Landmark className={className} />;
    case 'AQI (Air Quality)': return <Wind className={className} />;
    case 'Schools (Rated 8+)': return <School className={className} />;
    case 'Hospitals (within 5 miles)': return <Hospital className={className} />;
    default: return <Star className={className} />;
  }
};

const ComparisonTable = ({ selectedAreas }) => {
  const metrics = [
    'Overall Score', 'Safety', 'Environment', 'Infrastructure', 
    'Education', 'Healthcare', 'Lifestyle'
  ];

  const stats = [
    { label: 'Price / sqft', key: 'priceSqft' },
    { label: 'Rental Yield', key: 'rentalYield' },
    { label: 'AQI (Air Quality)', key: 'aqi' },
    { label: 'Schools (Rated 8+)', key: 'schools' },
    { label: 'Hospitals (within 5 miles)', key: 'hospitals' }
  ];

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 mb-10 overflow-x-auto">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-slate-900 text-2xl">How They Compare</h3>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-bold text-slate-500">Excellent (80-100)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-bold text-slate-500">Good (60-79)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-bold text-slate-500">Average (40-59)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-xs font-bold text-slate-500">Poor (0-39)</span>
          </div>
        </div>
      </div>

      <table className="w-full min-w-[1000px]">
        <thead>
          <tr className="border-b border-slate-100">
            <th className="text-left pb-6 font-bold text-slate-400 uppercase text-[11px] tracking-wider w-[200px]">Key Metrics</th>
            {selectedAreas.map(area => (
              <th key={area.id} className="text-left pb-6 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <Building className="w-4 h-4 text-[#11B573]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[14px] leading-tight">{area.name}</h4>
                    <p className="text-slate-400 text-[11px] font-medium">{area.city}</p>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {metrics.map((metricLabel, idx) => (
            <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
              <td className="py-5 flex items-center gap-3">
                <MetricIcon label={metricLabel} />
                <span className="font-bold text-slate-700 text-[13px]">{metricLabel}</span>
              </td>
              {selectedAreas.map(area => {
                const metricData = area.metrics.find(m => m.label === metricLabel);
                const colorClass = metricData?.color === 'emerald' ? 'bg-emerald-500' : 
                                   metricData?.color === 'blue' ? 'bg-blue-500' :
                                   metricData?.color === 'amber' ? 'bg-amber-500' : 'bg-red-500';
                const textClass = metricData?.color === 'emerald' ? 'text-emerald-600' : 
                                  metricData?.color === 'blue' ? 'text-blue-600' :
                                  metricData?.color === 'amber' ? 'text-amber-600' : 'text-red-600';
                
                return (
                  <td key={area.id} className="py-5 px-4">
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-slate-900 text-sm w-6">{metricData?.value}</span>
                      <div className="flex-grow">
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-[10px] font-bold uppercase ${textClass}`}>{metricData?.status}</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${colorClass} rounded-full`} 
                            style={{ width: `${metricData?.progress}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}

          {stats.map((stat, idx) => (
            <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/30 transition-colors">
              <td className="py-5 flex items-center gap-3">
                <MetricIcon label={stat.label} />
                <span className="font-bold text-slate-700 text-[13px]">{stat.label}</span>
              </td>
              {selectedAreas.map(area => {
                const val = area.stats[stat.key];
                const status = area.stats[`${stat.key}Status`];
                const detail = area.stats[`${stat.key}Detail`];
                const highlight = area.stats[`${stat.key}Highlight`];
                
                const statusColor = status === 'Good' ? 'text-emerald-600 bg-emerald-50' : 
                                   status === 'Average' ? 'text-amber-600 bg-amber-50' :
                                   status === 'Low' ? 'text-red-600 bg-red-50' : '';

                return (
                  <td key={area.id} className="py-5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{val}</span>
                      {status && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statusColor}`}>
                          {status}
                        </span>
                      )}
                      {detail && (
                        <span className="text-[10px] text-slate-400 font-medium">{detail}</span>
                      )}
                      {highlight && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                          <Trophy size={10} />
                          {highlight}
                        </div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Simple Trophy icon component for the Rental Yield "Best" tag
const Trophy = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);

export default ComparisonTable;

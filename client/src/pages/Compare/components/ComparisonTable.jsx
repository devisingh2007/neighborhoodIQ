import React from 'react';
import { Star, Shield, Leaf, Building, GraduationCap, HeartPulse, Smile, BadgeDollarSign, Landmark, Wind, School, Hospital, ChevronDown, ChevronUp } from 'lucide-react';

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
  const [showAll, setShowAll] = React.useState(false);

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

  const getColorClass = (value) => {
    if (value >= 80) return 'bg-emerald-500';
    if (value >= 60) return 'bg-blue-500';
    if (value >= 40) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100 mb-10 overflow-hidden">
      {/* Header & Legend */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <div className="text-center lg:text-left">
          <h3 className="font-bold text-slate-900 text-xl md:text-2xl mb-1">How They Compare</h3>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-3 gap-y-2 md:gap-x-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">Excellent (80+)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">Good (60-79)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">Avg (40-59)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">Poor (0-39)</span>
          </div>
        </div>
      </div>

      {/* Mobile View: Vertical Metric List */}
      <div className="lg:hidden">
        {/* Metric Header showing neighborhood numbers */}
        <div className="flex justify-between items-center mb-4 px-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Key Metrics</span>
          <div className="flex gap-4">
            {selectedAreas.map((_, i) => (
              <span key={i} className="w-6 text-center text-[10px] font-bold text-slate-400">{i + 1}</span>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {metrics.map((metricLabel, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-50">
              <div className="flex items-center gap-3">
                <MetricIcon label={metricLabel} />
                <span className="font-bold text-slate-700 text-sm">{metricLabel}</span>
              </div>
              <div className="flex gap-4">
                {selectedAreas.map(area => {
                  const val = area.metrics.find(m => m.label === metricLabel)?.value || 0;
                  return (
                    <div key={area.id} className="flex flex-col items-center gap-1">
                      <span className="text-[10px] font-bold text-slate-900">{val}</span>
                      <div className={`w-6 h-1.5 rounded-full ${getColorClass(val)}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {showAll && stats.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-50">
              <div className="flex items-center gap-3">
                <MetricIcon label={stat.label} />
                <span className="font-bold text-slate-700 text-sm">{stat.label}</span>
              </div>
              <div className="flex gap-4">
                {selectedAreas.map(area => {
                  const val = area.stats[stat.key];
                  return (
                    <div key={area.id} className="w-6 text-center">
                      <span className="text-[10px] font-bold text-slate-900">{val}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="w-full mt-6 py-3 border border-slate-100 rounded-xl flex items-center justify-center gap-2 text-slate-500 font-bold text-xs hover:bg-slate-50 transition-colors"
        >
          {showAll ? 'Show Less' : 'View All Metrics'}
          {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {/* Desktop View: Original Table */}
      <div className="hidden lg:block overflow-x-auto">
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
    </div>
  );
};

// Simple Trophy icon component for the Rental Yield "Best" tag
const Trophy = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
);

export default ComparisonTable;

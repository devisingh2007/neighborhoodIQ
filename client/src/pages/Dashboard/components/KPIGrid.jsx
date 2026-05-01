import React from 'react';
import { Star, Home, BarChart3, Leaf, Bell, TrendingUp, TrendingDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const kpiData = [
  { label: 'Average Score', value: '78.6', trend: '+4.3', icon: <Star size={20} />, color: 'emerald' },
  { label: 'Avg. Property Price', value: '₹1.85 Cr', trend: '+2.7', icon: <Home size={20} />, color: 'blue' },
  { label: 'Avg. Rental Yield', value: '4.12%', trend: '+0.4', icon: <BarChart3 size={20} />, color: 'purple' },
  { label: 'Avg. AQI (All Areas)', value: '45', trend: '-4', icon: <Leaf size={20} />, color: 'green' },
  { label: 'Active Alerts', value: '5', trend: 'High', icon: <Bell size={20} />, color: 'red', link: 'View all alerts →' },
];

const sparklineData = [
  { value: 40 }, { value: 45 }, { value: 42 }, { value: 50 }, { value: 48 }, { value: 55 }, { value: 52 }
];

const KPIGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpiData.map((kpi, i) => (
        <div key={i} className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all group relative overflow-hidden h-full flex flex-col justify-between min-h-[160px]">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center 
                ${kpi.color === 'emerald' ? 'bg-emerald-50 text-[#11B573]' : 
                  kpi.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                  kpi.color === 'purple' ? 'bg-purple-50 text-purple-600' : 
                  kpi.color === 'red' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {kpi.icon}
              </div>
              <div className={`flex items-center gap-1 text-[11px] font-bold ${kpi.trend.includes('-') ? 'text-red-500' : kpi.trend === 'High' ? 'text-red-500' : 'text-[#11B573]'}`}>
                {kpi.trend !== 'High' && (kpi.trend.includes('-') ? '↓' : '↑')} {kpi.trend}{kpi.trend !== 'High' && '%'} <span className="text-slate-300 font-medium ml-0.5">vs last month</span>
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-1">{kpi.label}</p>
              <h4 className="text-2xl font-bold text-slate-900 leading-tight">{kpi.value}</h4>
            </div>
          </div>
          
          <div className="mt-4">
            {kpi.link ? (
              <button className="text-[10px] font-bold text-red-500 hover:underline">
                {kpi.link}
              </button>
            ) : (
              <div className="h-8 overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sparklineData}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke={kpi.color === 'red' ? '#ef4444' : '#11B573'} 
                        strokeWidth={2} 
                        dot={false} 
                      />
                    </LineChart>
                 </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPIGrid;

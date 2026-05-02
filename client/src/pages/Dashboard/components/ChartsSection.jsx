import React from 'react';
import { ChevronRight } from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip 
} from 'recharts';

const trendData = [
  { month: 'Dec', powai: 72, bandra: 68, andheri: 60, lower: 55, price: 12000 },
  { month: 'Jan', powai: 75, bandra: 72, andheri: 65, lower: 52, price: 14500 },
  { month: 'Feb', powai: 73, bandra: 70, andheri: 62, lower: 58, price: 13800 },
  { month: 'Mar', powai: 77, bandra: 74, andheri: 68, lower: 54, price: 16000 },
  { month: 'Apr', powai: 76, bandra: 73, andheri: 66, lower: 56, price: 15500 },
  { month: 'May', powai: 78, bandra: 76, andheri: 70, lower: 60, price: 19000 },
];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Score Trend Chart */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-bold text-slate-900 leading-tight flex items-center gap-2">
               Score Trend <span className="text-slate-400 font-medium text-[11px]">(Last 6 Months)</span>
            </h3>
            <div className="flex items-center gap-4 mt-3">
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[10px] font-bold text-slate-400">Powai</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[10px] font-bold text-slate-400">Bandra West</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-[10px] font-bold text-slate-400">Andheri West</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div><span className="text-[10px] font-bold text-slate-400">Lower Parel</span></div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100 hover:bg-slate-100 transition-colors">
            <span>Overall Score</span>
            <ChevronRight size={12} className="rotate-90 text-slate-400" />
          </button>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} 
                dy={15} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
              />
              <Line type="monotone" dataKey="powai" stroke="#10b981" strokeWidth={3} dot={{r: 3, fill: '#10b981', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 5}} />
              <Line type="monotone" dataKey="bandra" stroke="#3b82f6" strokeWidth={3} dot={{r: 3, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 5}} />
              <Line type="monotone" dataKey="andheri" stroke="#8b5cf6" strokeWidth={3} dot={{r: 3, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 5}} />
              <Line type="monotone" dataKey="lower" stroke="#f97316" strokeWidth={3} dot={{r: 3, fill: '#f97316', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 5}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Price Trend Chart */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-bold text-slate-900 leading-tight flex items-center gap-2">
               Price Trend <span className="text-slate-400 font-medium text-[11px]">(Avg. Price / Sq.ft)</span>
            </h3>
            <div className="flex items-center gap-4 mt-3">
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[10px] font-bold text-slate-400">Powai</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[10px] font-bold text-slate-400">Bandra West</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-[10px] font-bold text-slate-400">Andheri West</span></div>
               <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div><span className="text-[10px] font-bold text-slate-400">Lower Parel</span></div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100 hover:bg-slate-100 transition-colors">
            <span>6 Months</span>
            <ChevronRight size={12} className="rotate-90 text-slate-400" />
          </button>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="0" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} 
                dy={15} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}}
                tickFormatter={(value) => `₹${value / 1000}K`}
                ticks={[0, 10000, 20000, 30000]}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
              />
              <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff'}} />
              <Line type="monotone" dataKey="powai" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              <Line type="monotone" dataKey="andheri" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;

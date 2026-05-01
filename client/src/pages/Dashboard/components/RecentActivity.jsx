import React from 'react';
import { LayoutDashboard, Heart, MapPin, Settings } from 'lucide-react';

const RecentActivity = () => {
  return (
    <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-full">
      <div className="flex justify-between items-center mb-8 px-1">
        <h3 className="text-lg font-bold text-slate-900 leading-tight">Recent Activity</h3>
        <button className="text-[11px] font-bold text-[#11B573] uppercase tracking-wider hover:underline">View all</button>
      </div>
      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-2 bottom-8 w-0.5 bg-slate-50"></div>

        {[
          { user: 'You', action: 'compared Powai vs Bandra West', time: '15 May 2025 • 10:30 AM', icon: <LayoutDashboard size={16} />, color: 'emerald' },
          { user: 'You', action: 'saved Koramangala, Bangalore', time: '14 May 2025 • 08:45 PM', icon: <Heart size={16} />, color: 'blue' },
          { user: 'You', action: 'viewed Whitefield, Bangalore', time: '13 May 2025 • 06:20 PM', icon: <MapPin size={16} />, color: 'purple' },
          { user: 'You', action: 'updated preferences', time: '12 May 2025 • 11:15 AM', icon: <Settings size={16} />, color: 'slate' },
        ].map((item, i) => (
          <div key={i} className="flex gap-5 relative z-10 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm border-2 border-white
              ${item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                item.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-slate-100 text-slate-600'}`}>
              {item.icon}
            </div>
            <div className="pt-1.5 flex-grow">
              <p className="text-[13px] font-bold text-slate-700 leading-tight group-hover:text-[#11B573] transition-colors">
                 <span className="text-slate-400 font-medium">{item.user}</span> {item.action}
              </p>
              <p className="text-[10px] text-slate-300 font-bold mt-1.5 uppercase tracking-widest">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;

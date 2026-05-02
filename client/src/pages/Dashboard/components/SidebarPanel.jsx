import React from 'react';
import { LayoutDashboard, MapPin, Download, Settings, ChevronRight, Navigation } from 'lucide-react';

const SidebarPanel = () => {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8 shrink-0">
      {/* Welcome Card */}
      <div className="bg-[#f0fdf9] rounded-[2rem] p-8 text-slate-800 relative overflow-hidden shadow-lg shadow-slate-100/50 min-h-[360px] flex flex-col border border-white">
        <div className="relative z-20">
          <p className="text-[18px] font-bold text-slate-700 mb-1">Good morning,</p>
          <h2 className="text-[32px] font-black mb-4 leading-tight tracking-tight text-slate-900">Dev! 👋</h2>
          <p className="text-slate-500 text-[15px] font-medium leading-relaxed max-w-[220px]">
            Here's your neighborhood intelligence overview.
          </p>
        </div>
        
        {/* Illustration from Image */}
        <div className="absolute bottom-0 left-0 right-0 h-52 z-10 select-none pointer-events-none">
           <img 
             src="/images/neighborhoods/for_desbord.png" 
             alt="Dashboard Illustration" 
             className="w-full h-full object-cover object-bottom"
           />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-6 px-1">
          Quick Actions
        </h3>
        <div className="flex flex-col gap-2">
          {[
            { label: 'Compare Neighborhoods', sub: 'Add areas to compare', icon: <LayoutDashboard size={18} />, color: 'emerald' },
            { label: 'Explore Neighborhoods', sub: 'Discover new areas', icon: <MapPin size={18} />, color: 'blue' },
            { label: 'Download Report', sub: 'Get detailed insights', icon: <Download size={18} />, color: 'purple' },
            { label: 'Update Preferences', sub: 'Customize your dashboard', icon: <Settings size={18} />, color: 'slate' },
          ].map((action, i) => (
            <button key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all text-left group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 
                ${action.color === 'emerald' ? 'bg-emerald-50 text-[#11B573]' : 
                  action.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                  action.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-slate-100 text-slate-600'}`}>
                {action.icon}
              </div>
              <div className="flex-grow">
                <p className="text-sm font-bold text-slate-900 leading-tight">{action.label}</p>
                <p className="text-[11px] text-slate-400 font-medium">{action.sub}</p>
              </div>
              <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarPanel;

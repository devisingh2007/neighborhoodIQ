import React from 'react';
import { ChevronRight, Plus } from 'lucide-react';

const Recommendations = () => {
  return (
    <section className="relative mt-4">
      <div className="flex justify-between items-center mb-6 px-1">
        <h3 className="text-lg font-bold text-slate-900 leading-tight">Recommended for You</h3>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-300 hover:text-[#11B573] hover:border-emerald-100 transition-all shadow-sm group">
            <ChevronRight size={18} className="rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-300 hover:text-[#11B573] hover:border-emerald-100 transition-all shadow-sm group">
            <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="relative group">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { name: 'Koramangala', city: 'Bangalore', score: 86, tag: 'Great Match', img: '/images/neighborhoods/koramangala.png' },
            { name: 'Whitefield', city: 'Bangalore', score: 84, tag: 'Great Match', img: '/images/neighborhoods/for_desbord.png' },
            { name: 'Indiranagar', city: 'Bangalore', score: 82, tag: 'Good Match', img: '/images/neighborhoods/whitefield.png' },
            { name: 'Jubilee Hills', city: 'Hyderabad', score: 78, tag: 'Good Match', img: '/images/neighborhoods/hebbal.png' },
            { name: 'Gachibowli', city: 'Hyderabad', score: 78, tag: 'Good Match', img: '/images/neighborhoods/powai.png' },
          ].map((area, i) => (
            <div key={i} className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-100 hover:shadow-lg transition-all group/card">
              <div className="relative h-32 rounded-[1rem] overflow-hidden mb-3">
                <img src={area.img} alt={area.name} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                <div className="absolute top-2 right-2 w-7 h-7 bg-[#11B573] text-white rounded-lg flex items-center justify-center font-bold text-[10px] shadow-sm border border-white/20">
                  {area.score}
                </div>
              </div>
              <h5 className="font-bold text-slate-800 text-[13px] truncate leading-tight">{area.name}</h5>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">{area.city}</p>
              <div className="mb-4">
                 <span className={`text-[10px] font-bold ${area.tag === 'Great Match' ? 'text-emerald-500' : 'text-blue-500'}`}>
                    • {area.tag}
                 </span>
              </div>
              <button className="w-full py-2 bg-emerald-50/50 text-[#11B573] rounded-xl text-[10px] font-bold hover:bg-[#11B573] hover:text-white transition-all flex items-center justify-center gap-1.5 border border-emerald-50">
                <Plus size={12} strokeWidth={3} /> Save Area
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow Overlay */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl border border-slate-100 flex items-center justify-center text-slate-300 hover:text-[#11B573] transition-all z-20 hover:scale-110 hidden lg:flex">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Recommendations;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Landmark } from 'lucide-react';

const DashboardHeader = () => {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50 px-8 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#11B573] rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200 transition-transform hover:scale-105 cursor-pointer">
            <Landmark size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Neighborhood<span className="text-[#11B573]">IQ</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Smart Decisions. Better Neighborhoods.</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Explore', path: '/explore' },
            { name: 'Compare', path: '/compare' },
            { name: 'About', path: '/about' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-500 hover:text-[#11B573]'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <div className="flex items-center px-4 py-2.5 bg-slate-100 border border-transparent rounded-xl focus-within:bg-white focus-within:border-[#11B573] focus-within:shadow-sm transition-all w-80">
            <Search className="text-slate-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search neighborhoods, cities..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400 font-medium"
            />
            <div className="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-bold text-slate-400 flex items-center gap-0.5">
              <span className="text-[12px]">⌘</span>K
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer">
          <div className="p-2.5 text-slate-400 hover:text-[#11B573] hover:bg-emerald-50 rounded-xl transition-all">
            <Bell size={22} />
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#11B573] text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              3
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none mb-1">Dev Singh</p>
            <span className="text-[10px] font-bold text-[#11B573] uppercase tracking-wider">Premium</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:border-[#11B573] transition-all">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;

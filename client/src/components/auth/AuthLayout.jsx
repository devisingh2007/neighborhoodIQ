import React from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  Search,
  Droplets,
  CloudSun,
  ShieldAlert,
  Satellite
} from 'lucide-react';

const AuthLayout = ({ 
  children, 
  bgImage, 
  bgOpacity = "opacity-80", 
  bgGrayscale = false,
  leftContent,
  showStats = false,
  statsBar
}) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between z-50 sticky top-0 shadow-sm border-b border-slate-100/50">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-700 p-2 rounded-lg text-white transition-transform group-hover:scale-105">
              <Landmark size={24} />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                NeighborhoodIQ
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                India's Neighborhood Intelligence
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center space-x-10 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <Link to="/explore" className="hover:text-brand-600 transition-colors">Explore</Link>
          <Link to="/compare" className="hover:text-brand-600 transition-colors">Compare</Link>
          <Link to="/about" className="hover:text-brand-600 transition-colors">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to={window.location.pathname === '/login' ? '/register' : '/login'} className="border-2 border-brand-500 text-brand-500 hover:bg-brand-50 px-7 py-2.5 rounded-xl text-sm font-bold transition-all">
            {window.location.pathname === '/login' ? 'Create Account' : 'Sign In'}
          </Link>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow relative flex items-center justify-center px-6 py-12 md:px-12 bg-slate-50">
        {/* Map Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={`w-full h-full ${bgOpacity} ${bgGrayscale ? 'grayscale' : ''}`}
            style={{
              backgroundImage: `url("${bgImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: bgGrayscale ? 'none' : 'contrast(1.05) saturate(1.1)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          {/* Left Column */}
          <div className="flex-1 w-full space-y-12 lg:pt-12">
            {leftContent}
          </div>

          {/* Right Column (Form) */}
          <div className="w-full max-w-lg lg:mr-4">
            {children}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        {showStats && statsBar && (
          <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 z-20 flex justify-center translate-y-1/2">
            {statsBar}
          </div>
        )}
      </main>

      {/* Powered By Section */}
      <footer className="bg-white py-12 px-6 md:px-12 border-t border-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">Powered by trusted data sources</span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors">
                <Landmark size={28} className="text-slate-600 group-hover:text-brand-600" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-slate-800">data.gov.in</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Open Government Data</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors">
                <Droplets size={28} className="text-blue-500 group-hover:text-blue-600" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-slate-800">CPCB</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Pollution Data</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors">
                <CloudSun size={28} className="text-sky-500 group-hover:text-sky-600" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-slate-800">IMD</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Weather Data</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors">
                <ShieldAlert size={28} className="text-indigo-500 group-hover:text-indigo-600" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-slate-800 italic">Bureau of Police Research</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase text-center leading-tight">Crime Data</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors">
                <Satellite size={28} className="text-orange-500 group-hover:text-orange-600" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black text-slate-800">ISRO</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase">Satellite Data</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-5px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 1s;
        }
      `}} />
    </div>
  );
};

export default AuthLayout;

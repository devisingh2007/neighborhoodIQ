import React from 'react';
import { CheckCircle2, Building2, BarChart3, ShieldCheck } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import { LocationIconSVG } from '../../components/auth/AuthIcons';

const Login = () => {
  const leftContent = (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Welcome Back!
        </h1>
        <p className="text-xl text-slate-600 max-w-md font-medium">
          Sign in to sync your local insights across devices
        </p>
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/20">
          <CheckCircle2 size={16} className="text-emerald-500" />
          <span>Trusted neighborhood intelligence</span>
        </div>
      </div>

      {/* Floating Markers */}
      <div className="hidden lg:block relative h-64">
        {/* Marker 1: Price */}
        <div className="absolute -top-10 left-10 animate-float-slow">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex flex-col">
            <span className="text-sm font-extrabold">₹14.2K/sqft</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">Avg. Price</span>
          </div>
          <div className="ml-8 mt-1 text-[#3ae503] drop-shadow-md">
            <LocationIconSVG size={36} />
          </div>
        </div>

        {/* Marker 2: Liveability */}
        <div className="absolute top-10 right-40 animate-float">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex flex-col">
            <span className="text-sm font-extrabold">Liveability 92</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase text-emerald-500">Excellent</span>
          </div>
          <div className="ml-8 mt-1 text-[#3ae503] drop-shadow-md">
            <LocationIconSVG size={36} />
          </div>
        </div>

        {/* Marker 3: Walk Score */}
        <div className="absolute bottom-0 left-1/3 animate-float-delayed">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex flex-col">
            <span className="text-sm font-extrabold">Walk Score 88</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase text-emerald-500">Very Walkable</span>
          </div>
          <div className="ml-8 mt-1 text-[#3ae503] drop-shadow-md">
            <LocationIconSVG size={36} />
          </div>
        </div>

        {/* Marker 4: Growth */}
        <div className="absolute -bottom-10 -left-10 animate-float">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex flex-col">
            <span className="text-sm font-extrabold">Growth +9.2%</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">1Y Growth</span>
          </div>
          <div className="ml-8 mt-1 text-[#3ae503] drop-shadow-md">
            <LocationIconSVG size={36} />
          </div>
        </div>

        {/* Marker 5: AQI */}
        <div className="absolute bottom-0 right-10 animate-float-slow">
          <div className="bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex flex-col">
            <span className="text-sm font-extrabold">AQI 78</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase text-emerald-500">Good</span>
          </div>
          <div className="ml-8 mt-1 text-[#3ae503] drop-shadow-md">
            <LocationIconSVG size={36} />
          </div>
        </div>
      </div>
    </div>
  );

  const statsBar = (
    <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-[2rem] px-10 py-6 border border-white/20 flex flex-wrap items-center justify-center gap-12 md:gap-20">
      <div className="flex items-center space-x-4">
        <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
          <Building2 size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black text-slate-900">19,000+</span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Neighborhoods</span>
        </div>
      </div>
      <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
          <BarChart3 size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black text-slate-900">50+</span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Data Indicators</span>
        </div>
      </div>
      <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
          <ShieldCheck size={24} />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-black text-slate-900">100%</span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Transparent</span>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout 
      bgImage="/images/Auth/login_page_background_image.png" 
      leftContent={leftContent}
      showStats={true}
      statsBar={statsBar}
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

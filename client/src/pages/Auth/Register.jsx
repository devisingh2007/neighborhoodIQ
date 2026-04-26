import React from 'react';
import { ShieldCheck, BarChart3, Shield, Wind, TrainFront } from 'lucide-react';
import AuthLayout from '../../components/auth/AuthLayout';
import RegisterForm from '../../components/auth/RegisterForm';
import { LocationIconSVG } from '../../components/auth/AuthIcons';

const Register = () => {
  const leftContent = (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Create Your Account
        </h1>
        <h2 className="text-4xl font-extrabold text-slate-900">
          <span className="text-emerald-500">Smarter</span> Decisions Begin Here.
        </h2>
        <p className="text-xl text-slate-600 max-w-md font-medium">
          Join NeighborhoodIQ and get access to trusted neighborhood insights across India.
        </p>

        <div className="space-y-6 pt-4">
          <div className="flex items-start space-x-4 group">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Trusted & Verified Data</h3>
              <p className="text-sm text-slate-500">Insights from reliable government and private sources</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Data-Driven Decisions</h3>
              <p className="text-sm text-slate-500">Compare neighborhoods using 50+ real indicators</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mt-1">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Secure & Private</h3>
              <p className="text-sm text-slate-500">Your data is encrypted and always protected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Markers */}
      <div className="hidden lg:block relative h-[300px] w-full">
        {/* Marker 1: Liveability */}
        <div className="absolute top-0 left-0 animate-float">
          <div className="bg-white shadow-xl rounded-2xl p-3 border border-slate-100 flex flex-col min-w-[120px]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Liveability</span>
              <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold">Excellent</span>
            </div>
            <span className="text-xl font-black text-slate-900 leading-tight">92</span>
          </div>
          <div className="ml-6 mt-1 text-emerald-500 drop-shadow-md">
            <LocationIconSVG size={32} />
          </div>
        </div>

        {/* Marker 2: Safety */}
        <div className="absolute top-10 left-[40%] animate-float-slow">
          <div className="bg-white shadow-xl rounded-2xl p-3 border border-slate-100 flex flex-col min-w-[120px]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Safety</span>
              <span className="bg-blue-100 text-blue-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold">Very Safe</span>
            </div>
            <span className="text-xl font-black text-slate-900 leading-tight">89</span>
          </div>
          <div className="ml-6 mt-1 text-blue-500 drop-shadow-md">
            <LocationIconSVG size={32} />
          </div>
        </div>

        {/* Marker 3: Growth Potential */}
        <div className="absolute top-20 right-0 animate-float-delayed">
          <div className="bg-white shadow-xl rounded-2xl p-3 border border-slate-100 flex flex-col min-w-[120px]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Growth Potential</span>
              <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold">Excellent</span>
            </div>
            <span className="text-xl font-black text-slate-900 leading-tight">91</span>
          </div>
          <div className="ml-6 mt-1 text-emerald-500 drop-shadow-md">
            <LocationIconSVG size={32} />
          </div>
        </div>

        {/* Marker 4: Air Quality */}
        <div className="absolute bottom-10 left-[15%] animate-float-slow">
          <div className="bg-white shadow-xl rounded-2xl p-3 border border-slate-100 flex items-center space-x-3 min-w-[140px]">
            <div className="bg-blue-50 p-2 rounded-xl text-blue-500">
              <Wind size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Air Quality</span>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-black text-slate-900">78</span>
                <span className="text-[9px] text-emerald-600 font-bold uppercase">Good</span>
              </div>
            </div>
          </div>
          <div className="ml-10 mt-1 text-blue-400 drop-shadow-md">
            <LocationIconSVG size={32} />
          </div>
        </div>

        {/* Marker 5: Connectivity */}
        <div className="absolute bottom-0 right-[25%] animate-float">
          <div className="bg-white shadow-xl rounded-2xl p-3 border border-slate-100 flex items-center space-x-3 min-w-[140px]">
            <div className="bg-purple-50 p-2 rounded-xl text-purple-500">
              <TrainFront size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Connectivity</span>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-black text-slate-900">88</span>
                <span className="text-[9px] text-purple-600 font-bold uppercase">Very Good</span>
              </div>
            </div>
          </div>
          <div className="ml-10 mt-1 text-purple-500 drop-shadow-md">
            <LocationIconSVG size={32} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout 
      bgImage="/images/Auth/Register_page_background_image.png" 
      bgOpacity="opacity-40" 
      bgGrayscale={true}
      leftContent={leftContent}
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;

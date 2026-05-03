import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Star, MapPin, TrendingUp, Users, Maximize2, 
  Calendar, Plus, Shield, Leaf, Building2, GraduationCap, 
  HeartPulse, Utensils, Info, AlertTriangle, CheckCircle2,
  Navigation, ShoppingBag, Coffee, TreePine, PlayCircle,
  Stethoscope, School, Activity, Map as MapIcon
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';
import placesData from './placesData';

const PlaceDetails = () => {
  const slug = window.location.pathname.split('/').pop();
  const navigate = useNavigate();
  const place = placesData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Place not found</h1>
        <Link to="/explore" className="text-[#11B573] font-bold flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Explore
        </Link>
      </div>
    );
  }

  const radarData = [
    { subject: 'Safety', A: place.dimensions.safety, fullMark: 100 },
    { subject: 'Environment', A: place.dimensions.environment, fullMark: 100 },
    { subject: 'Infrastructure', A: place.dimensions.infrastructure, fullMark: 100 },
    { subject: 'Education', A: place.dimensions.education, fullMark: 100 },
    { subject: 'Healthcare', A: place.dimensions.healthcare, fullMark: 100 },
    { subject: 'Lifestyle', A: place.dimensions.lifestyle, fullMark: 100 },
  ];

  // Specific color constants to match photo
  const colors = {
    brandGreen: '#11B573',
    scoreAmber: '#F59E0B',
    statBlue: '#3B82F6',
    textDark: '#1E293B',
    textLight: '#64748B',
    textWhite: '#FFFFFF',
    textMuted: '#94A3B8'
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-24 font-sans antialiased">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <button 
            onClick={() => navigate('/explore')}
            className="flex items-center space-x-2 text-slate-400 hover:text-slate-700 transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold">Back to Explore</span>
          </button>
        </div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[32px] overflow-hidden shadow-2xl mb-8 min-h-[420px] flex items-center bg-[#0B1E2B] border border-white/10"
        >
          <div className="absolute inset-0 z-0">
            <img src={place.image} alt={place.name} className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E2B] via-[#0B1E2B]/90 to-[#0B1E2B]/40" />
          </div>

          <div className="relative z-10 w-full px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {place.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                {place.name}
              </h1>
              <div className="flex items-center space-x-2 text-[#11B573] mb-6 font-bold text-sm">
                <MapPin size={16} />
                <span className="text-[#11B573]">{place.city}</span>
                <span className="text-slate-400"> — PIN {place.pin}</span>
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl font-medium">
                {place.description}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { icon: <TrendingUp size={14} />, label: place.trend },
                  { icon: <Users size={14} />, label: `Pop ~${place.population}` },
                  { icon: <Maximize2 size={14} />, label: place.area },
                  { icon: <Calendar size={14} />, label: `Updated ${place.updated}` },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/90 text-xs font-bold">
                    <span className="text-amber-400">{stat.icon}</span>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Badge */}
            <div className="mt-12 md:mt-0 flex flex-col items-center">
              <div className="relative w-56 h-56 flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full" />
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/10" />
                  <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={628.3} strokeDashoffset={628.3 - (628.3 * place.overallScore) / 100} className="text-[#11B573] transition-all duration-1000 ease-out" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-7xl font-black text-white leading-none">{place.overallScore}</span>
                  <span className="text-white/40 font-bold text-lg">/100</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-white/60 font-bold uppercase text-[10px] tracking-[0.2em] mb-3">Overall Score</p>
                <div className="mb-6">
                   <span className="px-8 py-2 bg-[#11B573] text-white rounded-full text-sm font-black shadow-lg shadow-emerald-500/20 inline-block border border-white/20">
                    {place.grade}
                  </span>
                </div>
                <button className="flex items-center space-x-2 text-white/90 hover:text-white font-black text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3 rounded-2xl transition-all shadow-xl">
                  <Plus size={18} />
                  <span>Add to Compare</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            
            {/* Dimension Scores */}
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-1.5 h-8 bg-[#11B573] rounded-full" />
                <h2 className="text-2xl font-black text-[#1E293B] tracking-tight">Dimension Scores</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                  { label: 'Safety', score: place.dimensions.safety, icon: <Shield size={24} />, color: 'amber' },
                  { label: 'Environment', score: place.dimensions.environment, icon: <Leaf size={24} />, color: 'amber' },
                  { label: 'Infrastructure', score: place.dimensions.infrastructure, icon: <Building2 size={24} />, color: 'amber' },
                  { label: 'Education', score: place.dimensions.education, icon: <GraduationCap size={24} />, color: 'amber' },
                  { label: 'Healthcare', score: place.dimensions.healthcare, icon: <HeartPulse size={24} />, color: 'emerald' },
                  { label: 'Lifestyle', score: place.dimensions.lifestyle, icon: <Star size={24} />, color: 'emerald' },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 bg-white rounded-2xl shadow-sm text-[#11B573] group-hover:bg-[#11B573] group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <span className={`text-3xl font-black tracking-tight ${item.color === 'emerald' ? 'text-[#11B573]' : 'text-[#F59E0B]'}`}>{item.score}</span>
                    </div>
                    <p className="text-sm font-black text-[#64748B] mb-4">{item.label}</p>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color === 'emerald' ? 'bg-[#11B573]' : 'bg-[#F59E0B]'}`} style={{ width: `${item.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-[500px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 13, fontWeight: 800 }} />
                      <Radar name={place.name} dataKey="A" stroke="#11B573" fill="#11B573" fillOpacity={0.1} strokeWidth={4} dot={{ r: 4, fill: '#11B573', strokeWidth: 2, stroke: '#fff' }} />
                    </RadarChart>
                  </ResponsiveContainer>
              </div>
            </div>

            {/* Detailed Data Sections */}
            <div className="space-y-8">
              
              {/* Safety */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-4">
                    <Shield className="text-[#3B82F6]" />
                    <span>Safety</span>
                  </h3>
                  <span className="px-5 py-2 bg-amber-50 text-[#F59E0B] text-xs font-black rounded-full border border-amber-100">{place.safety.score}/100</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Crime Index', val: place.safety.crimeIndex, sub: '(lower is better)', color: 'text-[#F59E0B]' },
                    { label: 'Police Response', val: place.safety.policeResponse, sub: 'avg response time', color: 'text-[#3B82F6]' },
                    { label: 'Street Lighting', val: place.safety.streetLighting, sub: 'coverage score', color: 'text-[#F59E0B]' },
                    { label: 'Safety Score', val: place.safety.safetyScore, sub: 'overall rating', color: 'text-[#F59E0B]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[24px] text-center border border-slate-100">
                      <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                      <p className="text-[8px] font-bold text-[#94A3B8] mt-1">{stat.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environment */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-4">
                    <Leaf className="text-[#11B573]" />
                    <span>Environment & AQI</span>
                  </h3>
                  <span className="px-5 py-2 bg-rose-50 text-[#F43F5E] text-xs font-black rounded-full border border-rose-100">{place.environment.score}/100</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'AQI', val: place.environment.aqi, sub: place.environment.aqiStatus, color: 'text-[#11B573]' },
                    { label: 'Green Cover', val: place.environment.greenCover, color: 'text-[#11B573]' },
                    { label: 'Water-Dry', val: place.environment.waterDry, color: 'text-[#3B82F6]' },
                    { label: 'Noise Level', val: place.environment.noiseLevel, color: 'text-[#1E293B]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[24px] text-center border border-slate-100">
                      <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                      {stat.sub && <p className="text-[8px] font-black text-[#11B573] mt-1 uppercase">{stat.sub}</p>}
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 p-6 bg-slate-50/50 rounded-3xl text-center border border-slate-100">
                    <p className="text-[10px] font-black text-[#64748B] uppercase mb-1">Water Quality</p>
                    <p className="text-xl font-black text-[#3B82F6]">{place.environment.waterQuality}</p>
                  </div>
                  <div className="flex-1 p-6 bg-slate-50/50 rounded-3xl text-center border border-slate-100">
                    <p className="text-[10px] font-black text-[#64748B] uppercase mb-1 font-bold">Noise Status</p>
                    <p className="text-xl font-black text-[#1E293B]">Fair</p>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-4">
                    <Building2 className="text-[#F59E0B]" />
                    <span>Infrastructure</span>
                  </h3>
                  <span className="px-5 py-2 bg-emerald-50 text-[#11B573] text-xs font-black rounded-full border border-emerald-100">{place.infrastructure.score}/100</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Power Cuts/Mo', val: place.infrastructure.powerCuts, color: 'text-[#F59E0B]' },
                    { label: 'Road Quality', val: place.infrastructure.roadQuality, color: 'text-[#F59E0B]' },
                    { label: 'Public Transport', val: place.infrastructure.publicTransport, color: 'text-[#3B82F6]' },
                    { label: 'Broadband', val: place.infrastructure.broadband, color: 'text-[#3B82F6]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[24px] text-center border border-slate-100">
                      <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-slate-900 rounded-[32px] text-white">
                  <h4 className="text-[10px] font-black text-[#11B573] uppercase tracking-[0.2em] mb-6">Upcoming Projects</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {place.infrastructure.upcomingProjects.map((p, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#11B573] rounded-full" />
                        <span className="text-sm font-bold text-slate-300">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-4">
                    <School className="text-[#3B82F6]" />
                    <span>Education</span>
                  </h3>
                  <span className="px-5 py-2 bg-indigo-50 text-[#6366F1] text-xs font-black rounded-full border border-indigo-100">{place.education.score}/100</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Schools', val: place.education.schools, color: 'text-[#3B82F6]' },
                    { label: 'Colleges', val: place.education.colleges, color: 'text-[#3B82F6]' },
                    { label: 'Top Rating', val: place.education.topRating, color: 'text-[#F59E0B]' },
                    { label: 'Avg Rating', val: place.education.avgRating, color: 'text-[#F59E0B]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[24px] text-center border border-slate-100">
                      <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Healthcare */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-4">
                    <HeartPulse className="text-[#F43F5E]" />
                    <span>Healthcare</span>
                  </h3>
                  <span className="px-5 py-2 bg-emerald-50 text-[#11B573] text-xs font-black rounded-full border border-emerald-100">{place.healthcare.score}/100</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Hospitals', val: place.healthcare.hospitals, color: 'text-[#F43F5E]' },
                    { label: 'Clinics', val: place.healthcare.clinics, color: 'text-[#F43F5E]' },
                    { label: 'Nearest', val: place.healthcare.nearestHospital, color: 'text-[#3B82F6]' },
                    { label: 'Emergency', val: place.healthcare.emergency, color: 'text-[#11B573]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[24px] text-center border border-slate-100">
                      <p className={`text-2xl font-black ${stat.color} mb-1`}>{stat.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 sticky top-28">
              <div className="flex items-center space-x-3 mb-8">
                <Building2 className="text-[#11B573]" />
                <h3 className="text-xl font-black text-[#1E293B] tracking-tight">Real Estate</h3>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  { label: 'Price/sqft', val: place.realEstate.pricePerSqft, color: 'text-[#1E293B]' },
                  { label: '1-Year Growth', val: place.realEstate.oneYearGrowth, color: 'text-[#11B573]' },
                  { label: '5-Year Growth', val: place.realEstate.fiveYearGrowth, color: 'text-[#11B573]' },
                  { label: 'Rental Yield', val: place.realEstate.rentalYield, color: 'text-[#3B82F6]' },
                  { label: 'Demand Index', val: place.realEstate.demandIndex, color: 'text-[#1E293B]', progress: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-[#64748B]">{item.label}</span>
                      <span className={item.color}>{item.val}</span>
                    </div>
                    {item.progress && (
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#11B573]" style={{ width: `${item.val}%` }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-emerald-50 rounded-[32px] text-center border border-emerald-100 mb-12">
                <p className="text-[10px] font-black text-[#11B573] uppercase tracking-[0.2em] mb-3">Investment Grade</p>
                <p className="text-6xl font-black text-[#11B573] leading-none">{place.realEstate.investmentGrade}</p>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-[#1E293B] flex items-center space-x-3">
                    <Star size={20} className="text-[#11B573]" />
                    <span>Lifestyle</span>
                  </h3>
                  <span className="px-3 py-1 bg-emerald-50 text-[#11B573] text-[10px] font-black rounded-full border border-emerald-100">{place.lifestyle.score}/100</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: 'Malls', val: place.lifestyle.malls, color: 'text-[#1E293B]' },
                    { label: 'Restaurants', val: place.lifestyle.restaurants, color: 'text-[#1E293B]' },
                    { label: 'Parks', val: place.lifestyle.parks, color: 'text-[#1E293B]' },
                    { label: 'Entertainment', val: place.lifestyle.entertainment, color: 'text-[#1E293B]' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-slate-50/50 rounded-[28px] flex flex-col items-center border border-slate-100">
                      <p className={`text-xl font-black ${item.color} mb-1`}>{item.val}</p>
                      <p className="text-[10px] font-black text-[#64748B] uppercase tracking-widest">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 space-y-8">
                <div>
                   <h3 className="text-lg font-black text-[#1E293B] mb-6 flex items-center space-x-3">
                      <CheckCircle2 size={20} className="text-[#11B573]" />
                      <span>Highlights</span>
                   </h3>
                   <div className="space-y-4">
                      {place.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-3 text-sm font-bold text-[#64748B]">
                           <CheckCircle2 size={18} className="text-[#11B573] shrink-0 mt-0.5" />
                           <span>{h}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div>
                   <h3 className="text-lg font-black text-[#1E293B] mb-6 flex items-center space-x-3">
                      <AlertTriangle size={20} className="text-[#F59E0B]" />
                      <span>Watch Out For</span>
                   </h3>
                   <div className="space-y-4">
                      {place.watchOut.map((w, i) => (
                        <div key={i} className="flex items-start space-x-3 text-sm font-bold text-[#64748B]">
                           <AlertTriangle size={18} className="text-[#F59E0B] shrink-0 mt-0.5" />
                           <span>{w}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin size={20} className="text-[#11B573]" />
                  <h3 className="text-lg font-black text-[#1E293B] tracking-tight">Location</h3>
                </div>
                <div className="aspect-square w-full rounded-[32px] overflow-hidden relative border border-slate-100">
                  <img src={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-s-l+11b573(${place.mapLocation.lng},${place.mapLocation.lat})/${place.mapLocation.lng},${place.mapLocation.lat},12/400x400?access_token=pk.eyJ1IjoibmVpZ2hib3Job29kaXEiLCJhIjoiY2xndTh4ZHZ4MDBpeTNncGJ3cmRncGJ3ciJ9`} alt="Map" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;

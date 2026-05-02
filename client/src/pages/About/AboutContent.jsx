import React from 'react';
import { 
  Target, 
  Database, 
  Cpu, 
  Users, 
  Map as MapIcon, 
  ShieldCheck, 
  BarChart3, 
  Bell, 
  FileText,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  Building2,
  CloudSun,
  Handshake,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
  const stats = [
    { label: 'Neighborhoods Analyzed', value: '10,000+', icon: <Building2 className="text-emerald-500" size={20} />, bg: 'bg-emerald-50' },
    { label: 'Cities Covered', value: '500+', icon: <Building2 className="text-blue-500" size={20} />, bg: 'bg-blue-50' },
    { label: 'Active Users', value: '50,000+', icon: <Users className="text-rose-500" size={20} />, bg: 'bg-rose-50' },
    { label: 'Data Points Processed Daily', value: '1M+', icon: <BarChart3 className="text-sky-500" size={20} />, bg: 'bg-sky-50' },
    { label: 'Data Accuracy', value: '98%', icon: <ShieldCheck className="text-emerald-500" size={20} />, bg: 'bg-emerald-50' },
    { label: 'User Satisfaction', value: '4.8/5', icon: <Star className="text-amber-500" size={20} />, bg: 'bg-amber-50' },
  ];

  const features = [
    { title: 'Comprehensive Data', desc: 'Access to 50+ data points including safety, environment, infrastructure, property prices, and more.', icon: <BarChart3 size={24} /> },
    { title: 'Smart Scoring', desc: 'Proprietary scoring model that evaluates neighborhoods across multiple dimensions that matter most.', icon: <Cpu size={24} /> },
    { title: 'Interactive Maps', desc: 'Explore neighborhoods visually with heatmaps, real-time alerts, and location insights.', icon: <MapIcon size={24} /> },
    { title: 'Easy Comparison', desc: 'Compare up to 4 neighborhoods side-by-side with detailed metrics and insights.', icon: <Handshake size={24} /> },
    { title: 'Real-time Alerts', desc: 'Stay updated with alerts on air quality, crimes, price changes, and infrastructure updates.', icon: <Bell size={24} /> },
    { title: 'Reports & Export', desc: 'Download detailed reports and share insights with your family, clients, or team.', icon: <FileText size={24} /> },
  ];

  const team = [
    { name: 'Arjun Mehta', role: 'Co-Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', bio: 'Passionate about using data and technology to solve real-world problems.' },
    { name: 'Riya Sharma', role: 'Co-Founder & CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', bio: 'Expert in data science and AI with a vision for smart city solutions.' },
    { name: 'Karan Verma', role: 'Head of Data', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', bio: 'Leads data acquisition, processing, and modeling to ensure top-quality insights.' },
    { name: 'Neha Iyer', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop', bio: 'Focused on building intuitive products that users love and trust.' },
  ];

  const dataSources = [
    { name: 'CPCB', full: 'Central Pollution Control Board', icon: <CloudSun size={18} className="text-emerald-600" />, bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { name: 'Bureau of Police', full: 'Research & Development', icon: <ShieldCheck size={18} className="text-blue-600" />, bg: 'bg-blue-50', border: 'border-blue-100' },
    { name: 'OpenStreetMap', full: 'Foundation', icon: <Globe size={18} className="text-[#7ebd3b]" />, bg: 'bg-[#7ebd3b]/10', border: 'border-[#7ebd3b]/20' },
    { name: 'Census of India', full: 'Government of India', icon: <Database size={18} className="text-orange-600" />, bg: 'bg-orange-50', border: 'border-orange-100' },
    { name: 'India Meteorological', full: 'Department', icon: <CloudSun size={18} className="text-sky-500" />, bg: 'bg-sky-50', border: 'border-sky-100' },
    { name: 'Ministry of Housing', full: 'and Urban Affairs', icon: <Building2 size={18} className="text-rose-600" />, bg: 'bg-rose-50', border: 'border-rose-100' },
  ];

  return (
    <>
      {/* Mission & Background */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Mission */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#11B573] mb-2">Our Mission</h2>
                <div className="w-10 h-0.5 bg-[#11B573] mb-6" />
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-[280px]">
                  To empower people with transparent, accurate, and actionable neighborhood 
                  insights so they can make confident decisions about where to live and invest.
                </p>
              </div>
              <div className="shrink-0 w-32 h-32 rounded-full border-2 border-dashed border-[#11B573]/30 p-2 flex items-center justify-center">
                <div className="w-full h-full bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#11B573]">
                  <Target size={48} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            {/* Right: Why We Built */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Why We Built NeighborhoodIQ</h2>
              <p className="text-[13px] text-slate-600 mb-8 leading-relaxed">
                Finding the right neighborhood is more than just price or location. It's about safety, 
                connectivity, environment, lifestyle, and future potential. Existing data is often scattered, 
                outdated, or hard to understand. We built NeighborhoodIQ to change that.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Unify Data', desc: 'Bringing together diverse data sources in one place.', icon: <Database size={18} /> },
                  { title: 'AI-Powered Insights', desc: 'Advanced analytics to provide meaningful intelligence.', icon: <Cpu size={18} /> },
                  { title: 'People First', desc: 'Built for homebuyers, renters, investors, and communities.', icon: <Users size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#11B573]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[15px]">{item.title}</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What We Offer</h2>
          <div className="w-12 h-0.5 bg-[#11B573] mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#E8F5E9] text-[#11B573] rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[12px] max-w-[250px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Impact</h2>
          <div className="w-12 h-0.5 bg-[#11B573] mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-6 gap-4 lg:gap-6 border border-slate-100 rounded-3xl p-6 lg:p-8 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center flex-1 min-w-[140px] px-2 py-4">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-[22px] font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[11px] font-medium text-slate-500 max-w-[90px] mx-auto leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Data Sources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-[19px] font-bold text-slate-900 mb-3">Trusted Data Sources</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between gap-6 overflow-x-auto pb-4 no-scrollbar border-y border-slate-100 py-8 px-4">
            <button className="hidden md:flex p-2 bg-slate-50 rounded-full hover:bg-slate-100 shrink-0"><ChevronLeft size={20} className="text-slate-500" /></button>
            <div className="flex gap-10 lg:gap-14 items-center justify-center flex-1">
              {dataSources.map((source, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 bg-[#f8fafc] rounded-full flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">{source.icon}</div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-900 leading-none mb-1">{source.name}</div>
                    <div className="text-[9px] text-slate-500 font-medium leading-tight max-w-[110px]">{source.full}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="hidden md:flex p-2 bg-slate-50 rounded-full hover:bg-slate-100 shrink-0"><ChevronRight size={20} className="text-slate-500" /></button>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Meet Our Team</h2>
          <div className="w-12 h-0.5 bg-[#11B573] mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-[#f8fafc] rounded-2xl border border-slate-100 overflow-hidden flex flex-col">
                <div className="w-full h-48 relative shrink-0 bg-slate-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-[15px] font-bold text-slate-900 mb-0.5">{member.name}</h4>
                  <p className="text-slate-500 text-[10px] font-bold mb-3">{member.role}</p>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-4 flex-1">{member.bio}</p>
                  <div className="flex gap-3">
                    <button className="text-[#0A66C2] hover:text-[#004182] transition-colors"><Globe size={14} /></button>
                    <button className="text-[#1DA1F2] hover:text-[#0c85d0] transition-colors"><MessageCircle size={14} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F2F20] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row min-h-[220px]">
            {/* Left Image (City) */}
            <div className="w-full md:w-[35%] h-48 md:h-auto relative">
               <img 
                src="/images/neighborhoods/for_desbord.png" 
                alt="Cityscape" 
                className="w-full h-full object-cover opacity-90 object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F2F20]/50 to-[#0F2F20] hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F20] to-transparent md:hidden"></div>
            </div>
            
            {/* Right Content */}
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
              <h2 className="text-[22px] md:text-[26px] font-bold text-white mb-3 leading-tight">Join Thousands of Smart Decision Makers</h2>
              <p className="text-emerald-50/70 mb-8 text-[13px] md:text-[14px] leading-relaxed max-w-[90%]">
                Whether you're buying your dream home, making a real estate investment, 
                or exploring a new city—NeighborhoodIQ is your trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/explore" className="px-6 py-2.5 bg-[#11B573] hover:bg-[#0f9a62] text-white rounded-lg transition-all font-bold text-[13px] text-center w-fit">
                  Start Exploring Now
                </Link>
                <Link to="/contact" className="px-6 py-2.5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-lg transition-all font-bold text-[13px] text-center w-fit">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;

import React from 'react';
import { motion } from 'framer-motion';
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
  Linkedin,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Globe,
  Building2,
  CloudSun,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Neighborhoods Analyzed', value: '10,000+', icon: <MapIcon className="text-emerald-500" /> },
    { label: 'Cities Covered', value: '500+', icon: <Building2 className="text-blue-500" /> },
    { label: 'Active Users', value: '50,000+', icon: <Users className="text-purple-500" /> },
    { label: 'Data Points Daily', value: '1M+', icon: <Database className="text-orange-500" /> },
    { label: 'Data Accuracy', value: '98%', icon: <ShieldCheck className="text-emerald-500" /> },
    { label: 'User Satisfaction', value: '4.8/5', icon: <BarChart3 className="text-blue-500" /> },
  ];

  const features = [
    { title: 'Comprehensive Data', desc: 'Access to 50+ data points including safety, environment, infrastructure, and property prices.', icon: <BarChart3 size={24} /> },
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
    { name: 'CPCB', full: 'Central Pollution Control Board', icon: <CloudSun size={20} /> },
    { name: 'Bureau of Police', full: 'Research & Development', icon: <ShieldCheck size={20} /> },
    { name: 'OpenStreetMap', full: 'Foundation', icon: <Globe size={20} /> },
    { name: 'Census of India', full: 'Government of India', icon: <Database size={20} /> },
    { name: 'IMD', full: 'India Meteorological Dept', icon: <CloudSun size={20} /> },
    { name: 'MoHUA', full: 'Ministry of Housing & Urban Affairs', icon: <Building2 size={20} /> },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                About NeighborhoodIQ
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Smarter Decisions <br />
                <span className="text-emerald-600">Start with Better Insights</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                NeighborhoodIQ is India's most comprehensive platform for neighborhood intelligence. 
                We combine multi-source data, advanced analytics, and user feedback to help you discover 
                the perfect place to live, invest, and grow.
              </p>
              
              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-bold text-slate-900">10,000+</div>
                  <div className="text-sm text-slate-500 font-medium">Neighborhoods Analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">50,000+</div>
                  <div className="text-sm text-slate-500 font-medium">Happy Users</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="/images/neighborhoods/for_desbord.png" 
                alt="Neighborhood Overview" 
                className="w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-none mb-1">Our Mission</div>
                    <div className="text-xs text-slate-500 font-medium leading-tight">To empower people with <br />transparent data.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/2 z-0" />
      </section>

      {/* Mission & Background */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-emerald-500 rounded-full" />
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                To empower people with transparent, accurate, and actionable neighborhood insights so they 
                can make confident decisions about where to live and invest.
              </p>
              <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                <Target size={64} strokeWidth={1.5} />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Why We Built NeighborhoodIQ</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Finding the right neighborhood is more than just price or location. It's about safety, 
                connectivity, environment, lifestyle, and future potential. Existing data is often scattered, 
                outdated, or hard to understand. We built NeighborhoodIQ to change that.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: 'Unify Data', desc: 'Bringing together diverse data sources in one place.', icon: <Database size={20} /> },
                  { title: 'AI-Powered Insights', desc: 'Advanced analytics to provide meaningful intelligence.', icon: <Cpu size={20} /> },
                  { title: 'People First', desc: 'Built for homebuyers, renters, investors, and communities.', icon: <Users size={20} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Offer</h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-50 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Data Sources */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-xl font-bold text-slate-900">Trusted Data Sources</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between gap-8 overflow-x-auto pb-4 no-scrollbar">
            {dataSources.map((source, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-slate-400">{source.icon}</div>
                <div>
                  <div className="text-sm font-bold text-slate-700 leading-none mb-1">{source.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium leading-none">{source.full}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">"{member.bio}"</p>
                  <div className="flex justify-center gap-4">
                    <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"><Linkedin size={18} /></button>
                    <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all"><Twitter size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Thousands of Smart Decision Makers</h2>
              <p className="text-emerald-100/70 mb-10 text-lg leading-relaxed">
                Whether you're buying your dream home, making a real estate investment, 
                or exploring a new city—NeighborhoodIQ is your trusted partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/explore" className="px-10 py-4 bg-[#11B573] hover:bg-[#0f9a62] text-white rounded-2xl transition-all font-bold text-lg shadow-xl shadow-emerald-500/20">
                  Start Exploring Now
                </Link>
                <Link to="/contact" className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-50 rounded-2xl transition-all font-bold text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

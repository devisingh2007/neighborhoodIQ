import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  FileEdit, 
  Activity, 
  HelpCircle, 
  Briefcase, 
  Rocket, 
  ChevronRight,
  Upload,
  User,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Zap,
  Database,
  Code,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const Support = () => {
  const [formData, setFormData] = useState({
    requestType: 'Report Incorrect Data',
    priority: 'Medium',
    shortSummary: '',
    metric: '',
    location: '',
    city: '',
    issueDescription: '',
    dateObserved: '',
    dataSource: '',
    name: '',
    email: '',
    phone: '',
    reachOutMethod: 'Email',
    additionalDetails: '',
    intent: 'Report Incorrect Data'
  });

  const features = [
    {
      icon: <Heart className="text-[#11B573]" size={24} />,
      title: "We care",
      desc: "Your feedback helps us improve"
    },
    {
      icon: <BarChart3 className="text-[#11B573]" size={24} />,
      title: "Data-driven",
      desc: "Powered by 6+ trusted data sources"
    },
    {
      icon: <ShieldCheck className="text-[#11B573]" size={24} />,
      title: "Secure & Private",
      desc: "Your data is safe with us"
    },
    {
      icon: <Clock className="text-[#11B573]" size={24} />,
      title: "Quick Response",
      desc: "We usually reply within 24 hours"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Support Background" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#11B573] text-white rounded text-[10px] font-bold uppercase tracking-widest mb-4">
              SUPPORT CENTER
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help you?</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              We're here to help you make better real estate decisions with accurate, 
              transparent, and data-driven insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center space-x-4 hover:shadow-md transition-shadow cursor-default"
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{feature.title}</h3>
                <p className="text-xs text-slate-500">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-[#11B573] text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <h3 className="font-bold text-slate-900">Request Details</h3>
                </div>
                {/* Form fields... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Request Type</label>
                    <input type="text" value={formData.requestType} readOnly className="w-full px-4 py-3 bg-slate-50 border rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

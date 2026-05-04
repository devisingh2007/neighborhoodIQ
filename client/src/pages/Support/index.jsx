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

  const systemStatus = [
    { name: "Data Sync Services", status: "Operational" },
    { name: "API Services", status: "Operational" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        {/* ... */}
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-12">
        {/* ... */}
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 space-y-8">
          {/* Form */}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Activity size={18} /> System Status</h3>
            <div className="space-y-3">
              {systemStatus.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="text-emerald-500 font-bold">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

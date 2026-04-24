import React from 'react';
import { Search, MapPin, DollarSign, BarChart3, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = '/images/neighborhoods/Landing_image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/35 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${Hero}')` }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Make <span className="text-brand-400">Smarter</span> <br />
              Real Estate Decisions
            </h1>

            <p className="text-xl text-white/80 mb-12 max-w-2xl leading-relaxed">
              Comprehensive neighborhood intelligence platform combining safety, air quality,
              healthcare, and more into a transparent, audit-ready score.
            </p>
          </motion.div>

          {/* Search Bar Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2"
          >
            <div className="w-full md:w-1/4 h-14 relative group">
              <select className="w-full h-full pl-12 pr-4 appearance-none outline-none text-gray-700 bg-transparent rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="delhi">New Delhi</option>
              </select>
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 group-hover:scale-110 transition-transform" size={20} />
            </div>

            <div className="w-full md:w-1/4 h-14 relative border-l border-gray-100 group">
              <select className="w-full h-full pl-12 pr-4 appearance-none outline-none text-gray-700 bg-transparent rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <option value="">Price Range</option>
                <option value="economy">Economy</option>
                <option value="mid">Mid-Range</option>
                <option value="premium">Premium</option>
              </select>
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 group-hover:scale-110 transition-transform" size={20} />
            </div>

            <div className="w-full md:w-1/4 h-14 relative border-l border-gray-100 group">
              <select className="w-full h-full pl-12 pr-4 appearance-none outline-none text-gray-700 bg-transparent rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <option value="">Min Score</option>
                <option value="8">8.0+ Excellent</option>
                <option value="7">7.0+ Good</option>
                <option value="5">5.0+ Average</option>
              </select>
              <BarChart3 className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 group-hover:scale-110 transition-transform" size={20} />
            </div>

            <div className="w-full md:w-1/4 h-14 relative border-l border-gray-100 group">
              <select className="w-full h-full pl-12 pr-4 appearance-none outline-none text-gray-700 bg-transparent rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <option value="">Area Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Mixed Use</option>
              </select>
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-600 group-hover:scale-110 transition-transform" size={20} />
            </div>

            <button className="w-full md:w-auto px-8 h-14 bg-brand-700 hover:bg-brand-800 text-white rounded-xl transition-all font-bold flex items-center justify-center space-x-2 shadow-lg shadow-brand-700/30">
              <Search size={22} />
              <span className="md:hidden">Search Neighborhoods</span>
            </button>
          </motion.div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { label: 'Neighborhoods', value: '120+' },
              { label: 'Data Points', value: '25K+' },
              { label: 'Scored Areas', value: '74/100' },
              { label: 'Active Users', value: '12K+' },
              { label: 'Major Cities', value: '20+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-white"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

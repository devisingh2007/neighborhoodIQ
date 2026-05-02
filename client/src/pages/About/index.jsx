import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users } from 'lucide-react';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <div className="bg-white pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1.5 bg-[#E8F5E9] text-[#11B573] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                ABOUT NEIGHBORHOODIQ
              </span>
              <h1 className="text-[40px] md:text-[56px] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Smarter Decisions <br />
                Start with <span className="text-[#11B573]">Better Insights</span>
              </h1>
              <p className="text-[15px] md:text-lg text-slate-600 mb-10 leading-relaxed max-w-[90%]">
                NeighborhoodIQ is India's most comprehensive platform for neighborhood 
                intelligence. We combine multi-source data, advanced analytics, and user 
                feedback to help you discover the perfect place to live, invest, and grow.
              </p>
              
              <div className="flex gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#11B573]">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">10,000+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Neighborhoods Analyzed</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center text-[#11B573]">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">50,000+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Happy Users</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mt-10 lg:mt-0"
            >
              <img 
                src="/images/neighborhoods/for_desbord.png" 
                alt="Neighborhood Overview" 
                className="w-full h-auto drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <AboutContent />
    </div>
  );
};

export default About;

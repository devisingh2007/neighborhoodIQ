import React from 'react';
import { motion } from 'framer-motion';

const ExploreHero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center pt-24 overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium Cityscape"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay z-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-400 font-bold tracking-wider text-sm uppercase mb-4 block">
              Make Informed Real Estate Decisions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Explore Neighborhoods.<br />
              Invest with Confidence.
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Access standardized, data-driven insights on 19,000+ neighborhoods across India. 
              Compare, analyze, and choose the right location for your home or next investment.
            </p>
          </motion.div>
        </div>

        {/* Floating Stats Cards */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-64"
          >
            <div className="text-3xl font-bold text-white mb-1">19,000+</div>
            <div className="text-slate-400 text-sm font-medium">Neighborhoods</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-64 ml-12"
          >
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-slate-400 text-sm font-medium">Data Indicators</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-64"
          >
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-slate-400 text-sm font-medium">Transparent</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;

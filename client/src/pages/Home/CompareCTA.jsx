import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, GitCompare, Star, ShieldCheck } from 'lucide-react';

const GlassBlob = ({ className, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: [0.15, 0.3, 0.15],
      scale: [1, 1.2, 1],
      x: [0, 30, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    style={{ willChange: "transform, opacity" }}
    className={`absolute blur-[100px] rounded-full ${color} ${className}`}
  />
);

const ComparisonCard = ({ image, name, score, color, delay, initialX, initialRotate }) => (
  <motion.div
    initial={{ opacity: 0, x: initialX + 50, rotate: initialRotate + 5, y: 20 }}
    whileInView={{ opacity: 1, x: initialX, rotate: initialRotate, y: 0 }}
    whileHover={{
      y: -15,
      scale: 1.05,
      rotate: 0,
      zIndex: 50,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }}
    transition={{
      delay,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }}
    viewport={{ once: true }}
    style={{ willChange: "transform, opacity" }}
    className="absolute w-52 sm:w-60 md:w-64 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/50 group cursor-pointer"
  >
    <motion.img
      src={image}
      alt={name}
      className="absolute inset-0 w-full h-full object-cover"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.6 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-6 left-6 right-6">
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${color} text-white text-[10px] font-bold uppercase tracking-widest mb-2 shadow-lg`}>
        <Star size={10} fill="currentColor" />
        {score} Score
      </div>
      <h4 className="text-white font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">{name}</h4>
    </div>
  </motion.div>
);

const CompareCTA = () => {
  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 border border-brand-100 shadow-[0_48px_80px_-16px_rgba(21,128,61,0.12)]"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GlassBlob color="bg-brand-300/20" className="w-[600px] h-[600px] -top-60 -left-40" />
          <GlassBlob color="bg-brand-400/10" className="w-[500px] h-[500px] bottom-0 right-1/4" delay={2} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #16a34a 1px, transparent 0)`, backgroundSize: '48px 48px' }} />
        </div>

        <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-8 items-center px-8 py-20 md:px-16 md:py-28">
          {/* Left: Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-600 text-white text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-lg shadow-brand-600/20"
            >
              <GitCompare size={14} className="animate-pulse" />
              Advanced Comparison
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 tracking-tight leading-[1.1]"
            >
              Compare Up to 4 Neighborhoods <br />
              Side-by-Side
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed font-medium"
            >
              Stop second-guessing. Use our comparison tool to find your perfect match.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-brand-600 text-white font-black transition-all"
              >
                <span>Start Comparing Now</span>
                <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-2 text-brand-700 font-bold">
                <ShieldCheck size={20} className="text-brand-500" />
                <span className="text-sm uppercase tracking-wider">100% Data Verified</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Comparison */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center lg:justify-center pr-0">
            {/* Card 1 - Mumbai */}
            <ComparisonCard
              image="/images/neighborhoods/mumbai.png"
              name="Worli, Mumbai"
              score="8.9"
              color="bg-blue-600"
              delay={0.6}
              initialX={-160} // Further left
              initialRotate={-15}
            />

            {/* Card 2 - Bangalore */}
            <ComparisonCard
              image="/images/neighborhoods/bangalore.png"
              name="Indiranagar, BLR"
              score="9.2"
              color="bg-brand-600"
              delay={0.8}
              initialX={0}
              initialRotate={-2}
            />

            {/* Card 3 - Gurgaon */}
            <ComparisonCard
              image="/images/neighborhoods/gurgaon.png"
              name="Golf Course, GGN"
              score="8.7"
              color="bg-amber-600"
              delay={1.0}
              initialX={160} // Further right
              initialRotate={12}
            />

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 text-brand-200 opacity-40 hidden xl:block"
            >
              <Leaf size={240} strokeWidth={0.5} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompareCTA;

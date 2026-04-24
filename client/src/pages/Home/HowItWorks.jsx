import React from 'react';
import { ShieldAlert, Wind, Train, GraduationCap, HeartPulse, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const factors = [
  {
    icon: ShieldAlert,
    label: 'Safety',
    desc: 'Crime rates, police visibility, response times.',
    color: 'bg-red-50 text-red-600 border-red-100'
  },
  {
    icon: Wind,
    label: 'Environment',
    desc: 'Air Quality (AQI), green cover, noise levels.',
    color: 'bg-green-50 text-green-600 border-green-100'
  },
  {
    icon: Train,
    label: 'Infrastructure',
    desc: 'Public transport, road condition, utilities.',
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    icon: GraduationCap,
    label: 'Education',
    desc: 'School ratings, distance, higher ed access.',
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  },
  {
    icon: HeartPulse,
    label: 'Healthcare',
    desc: 'Hospital proximity, clinic quality, pharmacy.',
    color: 'bg-orange-50 text-orange-600 border-orange-100'
  },
  {
    icon: Sparkles,
    label: 'Lifestyle',
    desc: 'Parks, walkability, dining & entertainment.',
    color: 'bg-pink-50 text-pink-600 border-pink-100'
  },
];

const HowItWorks = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">How NeighborhoodIQ Works</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          6 dimensions, 20+ data points, one composite score for smarter living decisions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {factors.map((factor, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-all cursor-default ${factor.color} bg-white`}
          >
            <div className={`p-4 rounded-xl mb-6 transition-colors ${factor.color}`}>
              <factor.icon size={32} />
            </div>
            <h3 className="text-gray-900 font-bold mb-3">{factor.label}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              {factor.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

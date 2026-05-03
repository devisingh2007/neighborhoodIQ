import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, ChevronRight, ArrowRight, Activity, User, Star, 
  ShieldCheck, TrendingDown, Info 
} from 'lucide-react';

export const SavedNeighborhoods = ({ neighborhoods }) => (
  <motion.div 
    key="saved"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-8"
  >
    <div className="flex justify-between items-center px-2">
      <div>
        <h2 className="text-xl font-black text-slate-900">Saved Neighborhoods</h2>
        <p className="text-sm text-slate-500">Places you've saved for future reference.</p>
      </div>
      <button className="text-sm font-bold text-[#11B573] flex items-center hover:underline">
        View All <ChevronRight size={16} />
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {neighborhoods.map((n) => (
        <motion.div 
          key={n.id}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all cursor-pointer"
        >
          <div className="h-48 relative">
            <img src={n.image} alt={n.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-1.5 rounded-lg shadow-md text-[#11B573]">
              <Bookmark size={18} fill="#11B573" />
            </div>
            <div className="absolute top-4 left-4 bg-[#11B573] text-white px-2 py-1 rounded-lg text-xs font-black shadow-lg">
              {n.score}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-black text-slate-900 group-hover:text-[#11B573] transition-colors">{n.name}</h3>
            <p className="text-sm text-slate-500 mb-4">{n.city}</p>
            <div className="flex flex-wrap gap-2">
              {n.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <button className="w-full py-4 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
      <span>View All Saved Neighborhoods</span>
      <ArrowRight size={18} />
    </button>
  </motion.div>
);

export const RecentActivity = ({ activities }) => (
  <motion.div 
    key="activity"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm"
  >
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-black text-slate-900">Recent Activity</h2>
      <button className="text-sm font-bold text-[#11B573] hover:underline">View All</button>
    </div>
    <div className="space-y-6">
      {activities.map((act) => (
        <div key={act.id} className="flex items-start space-x-4 group cursor-pointer">
          <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all border border-transparent group-hover:border-slate-100">
            {act.icon}
          </div>
          <div className="flex-1 border-b border-slate-50 pb-6 group-last:border-none">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-bold text-slate-900 mb-1">{act.title}</h4>
              <span className="text-[10px] font-medium text-slate-400">{act.time}</span>
            </div>
            <p className="text-xs text-slate-500">{act.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Preferences = () => (
  <motion.div 
    key="preferences"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm"
  >
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-black text-slate-900">Preferences</h2>
      <button className="text-sm font-bold text-[#11B573] hover:underline">Edit</button>
    </div>
    
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold text-slate-700">Budget Range</span>
          <span className="text-sm font-black text-[#11B573]">₹50L – ₹2Cr</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full relative">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-[#11B573] rounded-full border-4 border-white shadow-md"></div>
          <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-4 h-4 bg-[#11B573] rounded-full border-4 border-white shadow-md"></div>
          <div className="absolute top-0 left-1/4 right-1/4 h-full bg-[#11B573]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-between py-4 border-b border-slate-50">
          <span className="text-sm font-bold text-slate-700">Preferred Cities</span>
          <span className="text-sm font-medium text-[#11B573]">Mumbai, Bangalore</span>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-slate-50">
          <span className="text-sm font-bold text-slate-700">Property Type</span>
          <span className="text-sm font-medium text-[#11B573]">Apartment, Villa</span>
        </div>
      </div>

      <div>
        <span className="text-sm font-bold text-slate-700 block mb-4">What matters most to you?</span>
        <div className="flex flex-wrap gap-3">
          {['Safety', 'Connectivity', 'Environment', 'Schools'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-emerald-50 text-[#11B573] text-xs font-black rounded-xl border border-emerald-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <span className="text-sm font-bold text-slate-700 block mb-4">Notifications</span>
        <span className="text-sm font-medium text-[#11B573]">Email, Push Notifications</span>
      </div>
    </div>
  </motion.div>
);

export const AlertsAndReviews = ({ alerts, reviews }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <motion.div 
      key="alerts"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-black text-slate-900">Active Alerts</h2>
        <button className="text-sm font-bold text-[#11B573] hover:underline">View All</button>
      </div>
      <div className="space-y-6">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group">
            <div className="p-3 bg-emerald-50 text-[#11B573] rounded-2xl">
              {alert.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-sm font-bold text-slate-900">{alert.title}</h4>
                <span className="text-[10px] font-medium text-slate-400">{alert.time}</span>
              </div>
              <p className="text-xs text-slate-500">{alert.detail}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#11B573] mt-1"></div>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div 
      key="reviews"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-black text-slate-900">My Reviews</h2>
        <button className="text-sm font-bold text-[#11B573] hover:underline">View All</button>
      </div>
      <div className="space-y-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="flex items-start space-x-4 border-b border-slate-50 pb-6 last:border-none">
            <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <div className="flex items-center space-x-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={i < rev.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"} />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{rev.date}</span>
              </div>
              <p className="text-xs text-slate-500 italic mt-2">"{rev.text}"</p>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 bg-white border border-emerald-100 text-[#11B573] font-bold rounded-xl hover:bg-emerald-50 transition-all">
        Write a New Review
      </button>
    </motion.div>
  </div>
);

export const UpgradeBanner = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="mt-12 bg-[#11B573] rounded-[32px] p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-emerald-200 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-black mb-2">Discover better. Decide smarter.</h2>
      <p className="text-emerald-50 font-medium max-w-lg">Upgrade to Premium for advanced insights, real-time alerts and exclusive reports about your favorite neighborhoods.</p>
    </div>
    <button className="relative z-10 px-8 py-4 bg-white text-[#11B573] font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center space-x-3">
      <ShieldCheck size={20} />
      <span>Upgrade to Premium</span>
    </button>
  </motion.div>
);

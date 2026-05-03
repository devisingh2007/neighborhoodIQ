import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Star, Mail, Phone, MapPin, Calendar, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileHero = ({ user }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100 mb-8 min-h-[320px] flex items-center"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={user.coverImage} 
          alt="Profile Background" 
          className="w-full h-full object-cover object-right"
        />
        {/* Soft gradient from left to right to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full px-8 md:px-12 py-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
        {/* Avatar Section */}
        <div className="relative group">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-2 right-2 p-2.5 bg-white rounded-full shadow-lg border border-slate-100 text-slate-500 hover:text-emerald-500 transition-all hover:scale-110">
            <Edit2 size={18} />
          </button>
        </div>

        {/* Text Info */}
        <div className="flex-1 flex flex-col items-center md:items-start pt-2">
          <div className="flex items-center space-x-4 mb-2">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{user.name}</h1>
            {user.isPremium && (
              <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-[#11B573] rounded-full border border-emerald-100">
                <Star size={12} fill="#11B573" />
                <span className="text-[10px] font-black uppercase tracking-wider">Premium User</span>
              </div>
            )}
          </div>
          
          <p className="text-slate-500 font-bold text-sm md:text-base mb-6">{user.role}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
            <div className="flex items-center space-x-3 text-sm font-bold text-slate-600">
              <Mail size={16} className="text-[#11B573]" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm font-bold text-slate-600">
              <Phone size={16} className="text-[#11B573]" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm font-bold text-slate-600">
              <MapPin size={16} className="text-[#11B573]" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm font-bold text-slate-600">
              <Calendar size={16} className="text-[#11B573]" />
              <span>Member since {user.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Bottom Right) */}
        <div className="md:absolute md:bottom-8 md:right-8 flex items-center space-x-3">
          <button className="bg-white px-5 py-2.5 rounded-xl text-[#11B573] text-sm font-black flex items-center space-x-2 shadow-lg border border-slate-100 hover:bg-slate-50 transition-all hover:-translate-y-0.5">
            <Edit2 size={16} />
            <span>Edit Profile</span>
          </button>
          <button 
            onClick={handleLogout}
            className="bg-white px-5 py-2.5 rounded-xl text-rose-500 text-sm font-black flex items-center space-x-2 shadow-lg border border-slate-100 hover:bg-rose-50 hover:text-rose-600 transition-all hover:-translate-y-0.5"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHero;

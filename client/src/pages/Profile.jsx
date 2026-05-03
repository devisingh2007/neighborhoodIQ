import React, { useState } from 'react';
import { Bookmark, Activity, Settings, Bell } from 'lucide-react';
import ProfileHero from '../components/profile/ProfileHero';
import { 
  SavedNeighborhoods, 
  RecentActivity, 
  Preferences, 
  AlertsAndReviews, 
  UpgradeBanner 
} from '../components/profile/ProfileSections';
import { 
  userData, 
  savedNeighborhoods, 
  activities, 
  alerts, 
  reviews 
} from '../components/profile/ProfileData';

import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const pathPart = window.location.pathname.split('/').pop();
  const activeTab = decodeURIComponent(pathPart) !== 'profile' ? decodeURIComponent(pathPart) : 'Saved Neighborhoods';
  const setActiveTab = (tab) => navigate(`/profile/${encodeURIComponent(tab)}`);

  const tabs = [
    { name: 'Saved Neighborhoods', icon: <Bookmark size={18} /> },
    { name: 'Activity', icon: <Activity size={18} /> },
    { name: 'Preferences', icon: <Settings size={18} /> },
    { name: 'Alerts', icon: <Bell size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <ProfileHero user={userData} />

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex items-center space-x-2 mb-8 sticky top-24 z-10">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
                activeTab === tab.name 
                ? 'bg-emerald-50 text-[#11B573] font-bold shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 font-semibold'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'Saved Neighborhoods' && (
            <SavedNeighborhoods neighborhoods={savedNeighborhoods} />
          )}

          {activeTab === 'Activity' && (
            <RecentActivity activities={activities} />
          )}

          {activeTab === 'Preferences' && (
            <Preferences />
          )}

          {activeTab === 'Alerts' && (
            <AlertsAndReviews alerts={alerts} reviews={reviews} />
          )}
        </div>

        {/* CTA Banner */}
        <UpgradeBanner />
      </div>
    </div>
  );
};

export default Profile;

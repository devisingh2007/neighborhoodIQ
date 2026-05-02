import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import SidebarPanel from './components/SidebarPanel';
import KPIGrid from './components/KPIGrid';
import SavedNeighborhoods from './components/SavedNeighborhoods';
import ChartsSection from './components/ChartsSection';
import MapAlertsPanel from './components/MapAlertsPanel';
import RecentActivity from './components/RecentActivity';
import Recommendations from './components/Recommendations';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <DashboardHeader />

      <div className="pt-28 pb-12 px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Panel - Widgets */}
          <SidebarPanel />

          {/* Main Content Area */}
          <main className="flex-grow flex flex-col gap-8 overflow-hidden">
            
            {/* 1. Statistics Summary */}
            <KPIGrid />

            {/* 2. Your Neighborhoods Overview */}
            <SavedNeighborhoods />

            {/* 3. Visual Trends & Analytics */}
            <ChartsSection />

            {/* 4. Map, Alerts & Quick Compare */}
            <MapAlertsPanel />

            {/* 5. Activity Tracking */}
            <RecentActivity />

          </main>
        </div>

        {/* 6. Footer Recommendations */}
        <div className="mt-8 pt-8 border-t border-slate-100">
           <Recommendations />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import AreaCards from './components/AreaCards';
import AtAGlance from './components/AtAGlance';
import ComparisonTable from './components/ComparisonTable';
import ScoreBreakdown from './components/ScoreBreakdown';
import AddNeighborhoodSidebar from './components/AddNeighborhoodSidebar';
import { compareData } from './compareData';

const Compare = () => {
  const [selectedAreas, setSelectedAreas] = useState(compareData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddNeighborhoods = (newAreas) => {
    // In a real app, you'd fetch the full metric data for these IDs
    // For now, we'll just merge them into our state
    setSelectedAreas(prev => [...prev, ...newAreas]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section */}
      <div className="pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
          Compare <span className="text-[#11B573]">Neighborhoods</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Side-by-side insights to help you choose smarter
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Selection Cards */}
        <AreaCards 
          selectedAreas={selectedAreas} 
          onAdd={() => setIsSidebarOpen(true)} 
        />

        {/* Quick Insights */}
        <AtAGlance />

        {/* Main Comparison Table */}
        <ComparisonTable selectedAreas={selectedAreas} />

        {/* Visual Analytics */}
        <ScoreBreakdown selectedAreas={selectedAreas} />
      </div>

      {/* Sidebar Overlay */}
      <AddNeighborhoodSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onAdd={handleAddNeighborhoods}
        alreadySelected={selectedAreas}
      />
    </div>
  );
};

export default Compare;

import React from 'react';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import TopAreas from './TopAreas';
import BrowseByCity from './BrowseByCity';
import CompareCTA from './CompareCTA';
import DiscoverCTA from './DiscoverCTA';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HowItWorks />
      <TopAreas />
      <BrowseByCity />
      <CompareCTA />
      <DiscoverCTA />
    </div>
  );
};

export default Home;

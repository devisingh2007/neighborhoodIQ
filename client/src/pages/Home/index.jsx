import React from 'react';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import TopAreas from './TopAreas';
import BrowseByCity from './BrowseByCity';
import CompareCTA from './CompareCTA';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HowItWorks />
      <TopAreas />
      <BrowseByCity />
      <CompareCTA />
    </div>
  );
};

export default Home;

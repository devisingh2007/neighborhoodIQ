import React from 'react';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import TopAreas from './TopAreas';
import BrowseByCity from './BrowseByCity';
import CompareCTA from './CompareCTA';
import DiscoverCTA from './DiscoverCTA';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      <header className="py-4 px-6 flex justify-between items-center border-b border-gray-100">
        <h1 className="text-2xl font-bold text-blue-600">{t('app_name')}</h1>
        <div className="flex gap-4">
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">English</button>
          <button className="text-sm font-medium text-gray-600 hover:text-blue-600">हिन्दी</button>
        </div>
      </header>
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

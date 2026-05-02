import React, { useState } from 'react';
import ExploreHero from './ExploreHero';
import ExploreFilters from './ExploreFilters';
import NeighborhoodCard from './NeighborhoodCard';
import IntelligenceSection from './IntelligenceSection';
import ExploreMap from './ExploreMap';
import { ArrowRight } from 'lucide-react';

const neighborhoodData = [
  {
    id: 2,
    name: 'Whitefield',
    location: 'Bangalore, Karnataka',
    score: 93,
    price: '₹9.8K',
    growth: '+ 11.4%',
    aqi: 94,
    aqiStatus: 'Moderate',
    grade: 'A Grade',
    trend: 'Rising',
    tags: ['Tech Parks', 'IT Corridor'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/whitefield.png',
    lat: 19.0330,
    lng: 73.0297
  },
  {
    id: 1,
    name: 'Koramangala',
    location: 'Bangalore, Karnataka',
    score: 89,
    price: '₹12.5K',
    growth: '+ 9.2%',
    aqi: 89,
    aqiStatus: 'Moderate',
    grade: 'A+ Grade',
    trend: 'Rising',
    tags: ['Tech Parks', 'Startup Ecosystem'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/koramangala.png',
    lat: 19.1550,
    lng: 72.8500
  },
  {
    id: 3,
    name: 'Hebbal',
    location: 'Bangalore, Karnataka',
    score: 88,
    price: '₹10.2K',
    growth: '+ 14.2%',
    aqi: 78,
    aqiStatus: 'Moderate',
    grade: 'A Grade',
    trend: 'Rising',
    tags: ['Startup Ecosystem', 'Business District'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/hebbal.png',
    lat: 19.0700,
    lng: 72.9300
  },
  {
    id: 4,
    name: 'Bandra West',
    location: 'Mumbai, Maharashtra',
    score: 84,
    price: '₹38.0K',
    growth: '+ 5.8%',
    aqi: 145,
    aqiStatus: 'Unhealthy',
    grade: 'A+ Grade',
    trend: 'Stable',
    tags: ['Business District', 'Sea View'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/bandra.png',
    lat: 19.0596,
    lng: 72.8295
  },
  {
    id: 5,
    name: 'Powai',
    location: 'Mumbai, Maharashtra',
    score: 88,
    price: '₹22.0K',
    growth: '+ 6.9%',
    aqi: 118,
    aqiStatus: 'Unhealthy',
    grade: 'A Grade',
    trend: 'Stable',
    tags: ['Premium', 'IT Mumbai'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/powai.png',
    lat: 19.1176,
    lng: 72.9060
  },
  {
    id: 6,
    name: 'Dwarka',
    location: 'New Delhi, Delhi',
    score: 91,
    price: '₹8.5K',
    growth: '+ 7.3%',
    aqi: 198,
    aqiStatus: 'Unhealthy',
    grade: 'B+ Grade',
    trend: 'Stable',
    tags: ['Global Tech', 'Metro Connectivity'],
    scoreBorder: 'border-[#11B573]',
    image: '/images/neighborhoods/dwarka.png',
    lat: 19.1136,
    lng: 72.8697
  },
  {
    id: 8,
    name: 'HiTech City',
    location: 'Hyderabad, Telangana',
    score: 87,
    price: '₹10.8K',
    growth: '+ 16.2%',
    aqi: 98,
    aqiStatus: 'Moderate',
    grade: 'A+ Grade',
    trend: 'Rising',
    tags: ['IT Hub', 'Global Tech'],
    scoreBorder: 'border-[#11B573]',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    lat: 19.1800,
    lng: 72.8400
  },
  {
    id: 7,
    name: 'Sector 57, Gurugram',
    location: 'Gurugram, Haryana',
    score: 73,
    price: '₹13.5K',
    growth: '+ 13.8%',
    aqi: 168,
    aqiStatus: 'Unhealthy',
    grade: 'A Grade',
    trend: 'Rising',
    tags: ['Premium', 'Golf Course Road'],
    scoreBorder: 'border-[#11B573]',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop',
    lat: 19.2000,
    lng: 72.9800
  }
];

const Explore = () => {
  const [viewMode, setViewMode] = useState('map');

  return (
    <div className="min-h-screen bg-white">
      <ExploreHero />
      <ExploreFilters viewMode={viewMode} setViewMode={setViewMode} />

      {viewMode === 'grid' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="text-[20px] md:text-[28px] font-bold text-slate-900 tracking-tight leading-tight">Top Neighborhoods</h2>
              <p className="text-slate-500 text-[11px] md:text-sm font-medium">Curated by overall score this quarter</p>
            </div>
            <button className="text-[#11B573] text-xs md:text-sm font-bold flex items-center gap-1 hover:underline transition-all">
              View All <ArrowRight size={14} className="md:w-4 md:h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-9 gap-3 md:gap-4">
            {neighborhoodData.slice(0, 7).map((neighborhood, index) => {
              const isFeatured = index === 0;
              return (
                <div key={neighborhood.id} className={isFeatured ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-2'}>
                  <NeighborhoodCard neighborhood={neighborhood} isFeatured={isFeatured} />
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="mt-10 text-center">
            <button className="px-8 py-2.5 border border-[#11B573] text-[#11B573] bg-transparent font-bold text-sm rounded-full hover:bg-[#11B573]/5 transition-colors">
              Load More Neighborhoods
            </button>
          </div>
        </main>
      ) : (
        <ExploreMap neighborhoods={neighborhoodData} />
      )}

      <IntelligenceSection />
    </div>
  );
};

export default Explore;

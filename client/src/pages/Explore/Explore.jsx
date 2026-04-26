import React from 'react';
import ExploreHero from './ExploreHero';
import ExploreFilters from './ExploreFilters';
import NeighborhoodCard from './NeighborhoodCard';
import IntelligenceSection from './IntelligenceSection';

const neighborhoodData = [
  {
    id: 1,
    name: 'Koramangala',
    location: 'Bangalore, Karnataka',
    score: 81,
    price: '₹12.5K',
    growth: '+ 9.2%',
    aqi: 89,
    aqiStatus: 'Moderate',
    grade: 'A+ Grade',
    trend: 'Rising',
    tags: ['IT Hub', 'Startup Ecosystem'],
    scoreBorder: 'border-emerald-400',
    image: '/images/neighborhoods/koramangala.png'
  },
  {
    id: 2,
    name: 'Whitefield',
    location: 'Bangalore, Karnataka',
    score: 76,
    price: '₹9.8K',
    growth: '+ 11.4%',
    aqi: 94,
    aqiStatus: 'Moderate',
    grade: 'A Grade',
    trend: 'Rising',
    tags: ['IT Corridor', 'Tech Parks'],
    scoreBorder: 'border-amber-400',
    image: '/images/neighborhoods/whitefield.png'
  },
  {
    id: 3,
    name: 'Hebbal',
    location: 'Bangalore, Karnataka',
    score: 72,
    price: '₹10.2K',
    growth: '+ 14.2%',
    aqi: 78,
    aqiStatus: 'Moderate',
    grade: 'A Grade',
    trend: 'Rising',
    tags: ['Airport Zone', 'Business District'],
    scoreBorder: 'border-amber-400',
    image: '/images/neighborhoods/hebbal.png'
  },
  {
    id: 4,
    name: 'Bandra West',
    location: 'Mumbai, Maharashtra',
    score: 78,
    price: '₹38.0K',
    growth: '+ 5.8%',
    aqi: 145,
    aqiStatus: 'Unhealthy',
    grade: 'A+ Grade',
    trend: 'Stable',
    tags: ['Premium', 'Sea View'],
    scoreBorder: 'border-amber-400',
    image: '/images/neighborhoods/bandra.png'
  },
  {
    id: 5,
    name: 'Powai',
    location: 'Mumbai, Maharashtra',
    score: 80,
    price: '₹22.0K',
    growth: '+ 6.9%',
    aqi: 118,
    aqiStatus: 'Unhealthy',
    grade: 'A Grade',
    trend: 'Stable',
    tags: ['Planned Township', 'IT Mumbai'],
    scoreBorder: 'border-emerald-400',
    image: '/images/neighborhoods/powai.png'
  },
  {
    id: 6,
    name: 'Dwarka',
    location: 'New Delhi, Delhi',
    score: 68,
    price: '₹8.5K',
    growth: '+ 7.3%',
    aqi: 198,
    aqiStatus: 'Unhealthy',
    grade: 'B+ Grade',
    trend: 'Stable',
    tags: ['Planned City', 'Metro Connectivity'],
    scoreBorder: 'border-orange-400',
    image: '/images/neighborhoods/dwarka.png'
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
    scoreBorder: 'border-amber-400',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'HiTech City',
    location: 'Hyderabad, Telangana',
    score: 79,
    price: '₹10.8K',
    growth: '+ 16.2%',
    aqi: 98,
    aqiStatus: 'Moderate',
    grade: 'A+ Grade',
    trend: 'Rising',
    tags: ['IT Hub', 'Global Tech'],
    scoreBorder: 'border-amber-400',
    image: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?q=80&w=2000&auto=format&fit=crop'
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-white">
      <ExploreHero />
      <ExploreFilters />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Top Neighborhoods</h2>
            <p className="text-slate-500 text-sm font-medium">19 neighborhoods found</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoodData.map((neighborhood) => (
            <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
          ))}
        </div>

        {/* Load More Button Placeholder */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors">
            Load More Neighborhoods
          </button>
        </div>
      </main>

      <IntelligenceSection />
    </div>
  );
};

export default Explore;

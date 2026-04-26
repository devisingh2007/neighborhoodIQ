const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Area = require('../src/models/Area.model');
const NeighborhoodScore = require('../src/models/NeighborhoodScore.model');
const AQIData = require('../src/models/AQIData.model');

dotenv.config({ path: path.join(__dirname, '../.env') });

const neighborhoods = [
  {
    name: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    location: { coordinates: [77.6245, 12.9352] },
    type: 'mixed',
    price: '₹12.5K',
    growth: '+ 9.2%',
    trend: 'Rising',
    tags: ['IT Hub', 'Startup Ecosystem'],
    description: 'IT Hub and startup ecosystem',
    overallScore: 8.1,
    images: ['/images/neighborhoods/koramangala.png']
  },
  {
    name: 'Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    location: { coordinates: [77.7499, 12.9698] },
    type: 'residential',
    price: '₹9.8K',
    growth: '+ 11.4%',
    trend: 'Rising',
    tags: ['IT Corridor', 'Tech Parks'],
    description: 'IT Corridor and Tech Parks',
    overallScore: 7.6,
    images: ['/images/neighborhoods/whitefield.png']
  },
  {
    name: 'Hebbal',
    city: 'Bangalore',
    state: 'Karnataka',
    location: { coordinates: [77.5913, 13.0354] },
    type: 'residential',
    price: '₹10.2K',
    growth: '+ 14.2%',
    trend: 'Rising',
    tags: ['Airport Zone', 'Business District'],
    description: 'Airport Zone and Business District',
    overallScore: 7.2,
    images: ['/images/neighborhoods/hebbal.png']
  },
  {
    name: 'Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    location: { coordinates: [72.8258, 19.0596] },
    type: 'residential',
    price: '₹38.0K',
    growth: '+ 5.8%',
    trend: 'Stable',
    tags: ['Premium', 'Sea View'],
    description: 'Premium Sea View neighborhood',
    overallScore: 7.8,
    images: ['/images/neighborhoods/bandra.png']
  },
  {
    name: 'Powai',
    city: 'Mumbai',
    state: 'Maharashtra',
    location: { coordinates: [72.9051, 19.1176] },
    type: 'mixed',
    price: '₹22.0K',
    growth: '+ 6.9%',
    trend: 'Stable',
    tags: ['Planned Township', 'IT Mumbai'],
    description: 'Planned Township and IT Mumbai',
    overallScore: 8.0,
    images: ['/images/neighborhoods/powai.png']
  },
  {
    name: 'Dwarka',
    city: 'New Delhi',
    state: 'Delhi',
    location: { coordinates: [77.0500, 28.5823] },
    type: 'residential',
    price: '₹8.5K',
    growth: '+ 7.3%',
    trend: 'Stable',
    tags: ['Planned City', 'Metro Connectivity'],
    description: 'Planned City with Metro Connectivity',
    overallScore: 6.8,
    images: ['/images/neighborhoods/dwarka.png']
  },
  {
    name: 'Sector 57, Gurugram',
    city: 'Gurugram',
    state: 'Haryana',
    location: { coordinates: [77.0700, 28.4200] },
    type: 'residential',
    price: '₹13.5K',
    growth: '+ 13.8%',
    trend: 'Rising',
    tags: ['Premium', 'Golf Course Road'],
    description: 'Premium Golf Course Road area',
    overallScore: 7.3,
    images: ['https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop']
  },
  {
    name: 'HiTech City',
    city: 'Hyderabad',
    state: 'Telangana',
    location: { coordinates: [78.3728, 17.4435] },
    type: 'mixed',
    price: '₹10.8K',
    growth: '+ 16.2%',
    trend: 'Rising',
    tags: ['IT Hub', 'Global Tech'],
    description: 'IT Hub and Global Tech center',
    overallScore: 7.9,
    images: ['https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?q=80&w=2000&auto=format&fit=crop']
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB for seeding...');

    await Area.deleteMany({});
    await NeighborhoodScore.deleteMany({});
    await AQIData.deleteMany({});

    for (const n of neighborhoods) {
      const area = await Area.create(n);
      
      // Create a basic score for each
      await NeighborhoodScore.create({
        area: area._id,
        overallScore: n.overallScore,
        safetyScore: 8.0,
        airQualityScore: 7.0,
        healthcareScore: 7.5,
        educationScore: 8.0,
        infrastructureScore: 7.0,
        waterScore: 8.5,
        walkabilityScore: 7.5,
        grade: 'A'
      });

      // Create a basic AQI for each
      await AQIData.create({
        area: area._id,
        aqi: 80,
        category: 'Moderate'
      });
    }

    console.log('Seeding completed successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Area = require('../server/src/models/Area.model');
const User = require('../server/src/models/User.model');

dotenv.config({ path: path.join(__dirname, '../server/.env') });

const neighborhoods = [
  {
    name: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    location: { type: 'Point', coordinates: [77.6208, 12.9352] },
    amenities: { hospitals: 12, schools: 8, parks: 5, transitHubs: 3 },
    metrics: { aqi: { value: 65 }, crimeIndex: { value: 30 } }
  },
  {
    name: 'Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    location: { type: 'Point', coordinates: [72.8258, 19.0596] },
    amenities: { hospitals: 15, schools: 10, parks: 3, transitHubs: 5 },
    metrics: { aqi: { value: 85 }, crimeIndex: { value: 35 } }
  },
  {
    name: 'Hauz Khas',
    city: 'Delhi',
    state: 'Delhi',
    location: { type: 'Point', coordinates: [77.1904, 28.5494] },
    amenities: { hospitals: 8, schools: 6, parks: 7, transitHubs: 4 },
    metrics: { aqi: { value: 150 }, crimeIndex: { value: 45 } }
  },
  {
    name: 'Salt Lake',
    city: 'Kolkata',
    state: 'West Bengal',
    location: { type: 'Point', coordinates: [88.4277, 22.5804] },
    amenities: { hospitals: 10, schools: 12, parks: 10, transitHubs: 2 },
    metrics: { aqi: { value: 95 }, crimeIndex: { value: 25 } }
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    await Area.deleteMany({});
    await Area.insertMany(neighborhoods);

    console.log('Seed data inserted successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedDB();

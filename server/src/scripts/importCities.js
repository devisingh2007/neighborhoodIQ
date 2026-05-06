const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Area = require('../models/Area.model');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const locationDatabase = {
    'states': {
        'rajasthan': { capital: 'Jaipur', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Jaisalmer'] },
        'maharashtra': { capital: 'Mumbai', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Kolhapur', 'Solapur'] },
        'karnataka': { capital: 'Bengaluru', cities: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Shivamogga'] },
        'tamil nadu': { capital: 'Chennai', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Erode'] },
        'gujarat': { capital: 'Gandhinagar', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar'] },
        'punjab': { capital: 'Chandigarh', cities: ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Pathankot'] },
        'west bengal': { capital: 'Kolkata', cities: ['Kolkata', 'Howrah', 'Durgapur', 'Siliguri', 'Asansol', 'Malda'] },
        'uttar pradesh': { capital: 'Lucknow', cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Prayagraj', 'Ghaziabad'] },
        'bihar': { capital: 'Patna', cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga'] },
        'kerala': { capital: 'Thiruvananthapuram', cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Malappuram'] },
        'andhra pradesh': { capital: 'Amaravati', cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool'] },
        'telangana': { capital: 'Hyderabad', cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar'] },
        'madhya pradesh': { capital: 'Bhopal', cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar'] },
        'odisha': { capital: 'Bhubaneswar', cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur'] },
        'assam': { capital: 'Dispur', cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon'] }
    }
};

const importCities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for city import...');

    for (const [state, data] of Object.entries(locationDatabase.states)) {
      for (const cityName of data.cities) {
        const exists = await Area.findOne({ name: cityName, city: cityName });
        if (!exists) {
          await Area.create({
            name: cityName,
            city: cityName,
            state: state.charAt(0).toUpperCase() + state.slice(1),
            location: {
              type: 'Point',
              coordinates: [0, 0] // Will be updated by geocoding in sync job or manually
            },
            amenities: { hospitals: 0, schools: 0, parks: 0, transitHubs: 0 },
            metrics: {
              aqi: { value: 0 },
              weather: { temp: 0, condition: 'Unknown' }
            }
          });
          console.log(`Imported ${cityName}, ${state}`);
        }
      }
    }

    console.log('City import complete!');
    process.exit();
  } catch (err) {
    console.error('Import failed:', err);
    process.exit(1);
  }
};

importCities();

export const compareData = [
  {
    id: 1,
    name: 'Downtown Brooklyn',
    city: 'New York',
    score: 92,
    highlight: 'Best Overall',
    highlightIcon: 'trophy',
    image: '/images/neighborhoods/powai.png',
    metrics: [
      { label: 'Overall Score', value: 92, status: 'Excellent', progress: 92, color: 'emerald' },
      { label: 'Safety', value: 92, status: 'Excellent', progress: 92, color: 'emerald' },
      { label: 'Environment', value: 90, status: 'Excellent', progress: 90, color: 'emerald' },
      { label: 'Infrastructure', value: 90, status: 'Excellent', progress: 90, color: 'emerald' },
      { label: 'Education', value: 83, status: 'Good', progress: 83, color: 'blue' },
      { label: 'Healthcare', value: 85, status: 'Good', progress: 85, color: 'blue' },
      { label: 'Lifestyle', value: 95, status: 'Excellent', progress: 95, color: 'emerald' },
    ],
    stats: {
      priceSqft: '$1,200',
      rentalYield: '5.7%',
      aqi: 43,
      aqiStatus: 'Good',
      schools: 14,
      schoolsStatus: 'Low',
      hospitals: 14,
      hospitalsStatus: 'Low'
    }
  },
  {
    id: 2,
    name: 'Midtown',
    city: 'Atlanta',
    score: 88,
    highlight: 'Top Schools',
    highlightIcon: 'graduation-cap',
    image: '/images/neighborhoods/bandra.png',
    metrics: [
      { label: 'Overall Score', value: 88, status: 'Good', progress: 88, color: 'blue' },
      { label: 'Safety', value: 85, status: 'Good', progress: 85, color: 'blue' },
      { label: 'Environment', value: 85, status: 'Good', progress: 85, color: 'blue' },
      { label: 'Infrastructure', value: 84, status: 'Good', progress: 84, color: 'blue' },
      { label: 'Education', value: 88, status: 'Excellent', progress: 88, color: 'emerald' },
      { label: 'Healthcare', value: 38, status: 'Poor', progress: 38, color: 'red' },
      { label: 'Lifestyle', value: 80, status: 'Good', progress: 80, color: 'blue' },
    ],
    stats: {
      priceSqft: '$900',
      rentalYield: '6.5%',
      aqi: 26,
      aqiStatus: 'Good',
      schools: 19,
      schoolsStatus: 'Good',
      hospitals: 17,
      hospitalsStatus: 'Low'
    }
  },
  {
    id: 3,
    name: 'Austin City Center',
    city: 'Texas',
    score: 85,
    highlight: 'Best Value',
    highlightIcon: 'dollar-sign',
    image: '/images/neighborhoods/koramangala.png',
    metrics: [
      { label: 'Overall Score', value: 85, status: 'Good', progress: 85, color: 'blue' },
      { label: 'Safety', value: 78, status: 'Good', progress: 78, color: 'blue' },
      { label: 'Environment', value: 79, status: 'Good', progress: 79, color: 'blue' },
      { label: 'Infrastructure', value: 78, status: 'Good', progress: 78, color: 'blue' },
      { label: 'Education', value: 57, status: 'Average', progress: 57, color: 'amber' },
      { label: 'Healthcare', value: 74, status: 'Good', progress: 74, color: 'blue' },
      { label: 'Lifestyle', value: 80, status: 'Good', progress: 80, color: 'blue' },
    ],
    stats: {
      priceSqft: '$850',
      rentalYield: '6.5%',
      rentalHighlight: 'Best',
      aqi: 27,
      aqiStatus: 'Good',
      schools: 34,
      schoolsStatus: 'Good',
      schoolsDetail: '(70-89)',
      hospitals: 33,
      hospitalsStatus: 'Good',
      hospitalsDetail: '(70-89)'
    }
  },
  {
    id: 4,
    name: 'Silver Lake',
    city: 'Los Angeles',
    score: 79,
    highlight: 'Trendy & Vibrant',
    highlightIcon: 'heart',
    image: '/images/neighborhoods/dwarka.png',
    metrics: [
      { label: 'Overall Score', value: 79, status: 'Good', progress: 79, color: 'blue' },
      { label: 'Safety', value: 81, status: 'Good', progress: 81, color: 'blue' },
      { label: 'Environment', value: 74, status: 'Good', progress: 74, color: 'blue' },
      { label: 'Infrastructure', value: 73, status: 'Good', progress: 73, color: 'blue' },
      { label: 'Education', value: 38, status: 'Poor', progress: 38, color: 'red' },
      { label: 'Healthcare', value: 76, status: 'Good', progress: 76, color: 'blue' },
      { label: 'Lifestyle', value: 79, status: 'Good', progress: 79, color: 'blue' },
    ],
    stats: {
      priceSqft: '$1,050',
      rentalYield: '4.5%',
      aqi: 43,
      aqiStatus: 'Good',
      schools: 32,
      schoolsStatus: 'Average',
      schoolsDetail: '(<70)',
      hospitals: 30,
      hospitalsStatus: 'Average',
      hospitalsDetail: '(<70)'
    }
  }
];

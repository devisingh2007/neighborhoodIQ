/**
 * FBI Mapper - Normalizes raw API response to CrimeData model format
 */
const mapToCrimeData = (areaId, year, rawData) => {
  if (!rawData || !rawData.data) {
    return null;
  }

  // Assuming rawData.data is an array of crime stats
  const totalIncidents = rawData.data.reduce((sum, item) => sum + (item.value || 0), 0);
  
  // Example breakdown logic
  const violentCrime = rawData.data.find(d => d.offense === 'Violent Crime')?.value || 0;
  const propertyCrime = rawData.data.find(d => d.offense === 'Property Crime')?.value || 0;

  return {
    area: areaId,
    year: year,
    totalIncidents: totalIncidents,
    violentCrime: violentCrime,
    propertyCrime: propertyCrime,
    crimeRate: Math.round((totalIncidents / 100000) * 100) / 100, // per 100k
    source: 'FBI CDE',
    fetchedAt: new Date()
  };
};

module.exports = {
  mapToCrimeData
};

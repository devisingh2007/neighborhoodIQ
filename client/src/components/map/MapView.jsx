import React, { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useTranslation } from 'react-i18next';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY || '';

const MapView = ({ neighborhoods = [], initialCenter = { lat: 12.9716, lng: 77.5946 } }) => {
  const { t } = useTranslation();
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl relative border-4 border-white/10">
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          defaultCenter={initialCenter}
          defaultZoom={11}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
          mapId="NEIGHBORHOOD_IQ_MAP"
        >
          {neighborhoods.map((area) => (
            <Marker
              key={area.id}
              position={{
                lat: area.location.coordinates[1],
                lng: area.location.coordinates[0],
              }}
              onClick={() => setSelectedArea(area)}
              title={area.name}
            />
          ))}
        </Map>
      </APIProvider>

      {/* Floating Legend */}
      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-black/5 z-10">
        <h4 className="text-sm font-bold text-gray-800 mb-2">{t('score_label')}</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600">8.5 - 10 (Excellent)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs text-gray-600">5.5 - 8.4 (Good)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-600">0 - 5.4 (Critical)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;

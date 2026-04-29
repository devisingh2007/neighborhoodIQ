import React, { useEffect, useCallback, useState } from 'react';
import { Plus, Minus, Crosshair, X, List } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// ─── Score Marker Icon ────────────────────────────────────────────────────────
const createScoreIcon = (score, active = false) =>
  L.divIcon({
    className: '',
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);transition:transform 0.2s">
        <div style="
          width:${active ? 40 : 34}px;
          height:${active ? 40 : 34}px;
          background:${active ? '#11B573' : '#0F2F20'};
          border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          color:white;font-size:${active ? 14 : 12}px;font-weight:700;
          border:2.5px solid white;
          box-shadow:0 ${active ? 6 : 3}px ${active ? 18 : 10}px rgba(0,0,0,${active ? 0.4 : 0.3});
          transition:all 0.2s;
        ">
          ${score}
        </div>
        <div style="
          width:${active ? 10 : 8}px;height:${active ? 10 : 8}px;
          background:${active ? '#11B573' : '#0F2F20'};
          transform:rotate(45deg);margin-top:-${active ? 6 : 5}px;
          transition:all 0.2s;
        "></div>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });

// ─── Auto-fit bounds + handle map ready ──────────────────────────────────────
const MapController = ({ neighborhoods, onReady }) => {
  const map = useMap();

  useEffect(() => {
    if (map) onReady(map);
  }, [map, onReady]);

  // Auto-fit bounds whenever neighborhoods or map change
  useEffect(() => {
    if (!map) return;
    const valid = neighborhoods.filter((n) => n.lat && n.lng);
    if (valid.length === 0) return;

    const bounds = L.latLngBounds(valid.map((n) => [n.lat, n.lng]));
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 13, animate: true });
  }, [map, neighborhoods]);

  return null;
};

// ─── Compact Card (Map View sidebar) ─────────────────────────────────────────
const CompactCard = ({ neighborhood, isActive, onClick }) => {
  const matchColors = {
    'Great Match': 'text-[#11B573]',
    'Good Match': 'text-blue-500',
    'Fair Match': 'text-amber-500',
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
        isActive
          ? 'border-[#11B573] bg-[#11B573]/5 shadow-sm'
          : 'border-slate-100 bg-white hover:border-[#11B573]/40 hover:shadow-sm'
      }`}
    >
      <div className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden">
        <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-1 left-1 w-6 h-6 bg-[#0F2F20] rounded-full flex items-center justify-center border border-white shadow">
          <span className="text-white text-[9px] font-bold">{neighborhood.score}</span>
        </div>
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[13px] font-bold text-slate-900 truncate">{neighborhood.name}</span>
        </div>
        <div className="text-[10px] text-slate-400 truncate mb-1">{neighborhood.location}</div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold ${matchColors[neighborhood.matchLabel] || 'text-[#11B573]'}`}>
            {neighborhood.matchLabel}
          </span>
          <span className="text-[10px] text-slate-400">·</span>
          <span className="text-[10px] font-bold text-slate-700">{neighborhood.avgPrice}</span>
        </div>
      </div>
    </div>
  );
};

// ─── SearchMap ────────────────────────────────────────────────────────────────
const SearchMap = ({ neighborhoods, expanded, onCollapse, initialFocus }) => {
  const [mapInstance, setMapInstance] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const defaultCenter = [19.076, 72.8777];

  const handleMapReady = useCallback((map) => setMapInstance(map), []);

  // Handle initial focus when entering map mode from a specific card
  useEffect(() => {
    if (mapInstance && initialFocus && initialFocus.lat && initialFocus.lng) {
      setActiveId(initialFocus.id);
      mapInstance.flyTo([initialFocus.lat, initialFocus.lng], 14, { animate: true, duration: 1 });
    }
  }, [mapInstance, initialFocus]);

  // When layout changes (expand/collapse), Leaflet needs to recalculate
  // container size — we trigger this at several intervals to ensure a smooth transition
  useEffect(() => {
    if (!mapInstance) return;
    
    // Immediate call
    mapInstance.invalidateSize({ animate: false });

    // Call during and after the 500ms CSS transition
    const intervals = [100, 300, 500, 800, 1200, 2000];
    const timers = intervals.map(ms => setTimeout(() => {
      mapInstance.invalidateSize({ animate: true });
    }, ms));

    return () => timers.forEach(t => clearTimeout(t));
  }, [expanded, mapInstance]);

  // When a compact card is clicked → fly to that marker
  const handleCardClick = (n) => {
    setActiveId(n.id);
    if (mapInstance && n.lat && n.lng) {
      mapInstance.flyTo([n.lat, n.lng], 14, { animate: true, duration: 0.8 });
    }
  };

  return (
    <div
      className={`flex gap-3 transition-all duration-500 h-full ${
        expanded ? 'flex-1' : 'w-[340px] shrink-0 flex-col'
      }`}
    >
      {/* ── Compact card list (Map View only) ── */}
      {expanded && (
        <div className="w-[300px] shrink-0 flex flex-col gap-2 overflow-y-auto custom-scrollbar pr-1 pb-4 self-stretch">
          {/* Header */}
          <div className="flex items-center justify-between mb-1 sticky top-0 bg-slate-50 py-2 z-10">
            <span className="text-xs font-bold text-slate-700">
              {neighborhoods.length} result{neighborhoods.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={onCollapse}
              className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-[#11B573] transition-colors"
            >
              <List size={12} /> List View
            </button>
          </div>
          {neighborhoods.map((n) => (
            <CompactCard
              key={n.id}
              neighborhood={n}
              isActive={activeId === n.id}
              onClick={() => handleCardClick(n)}
            />
          ))}
        </div>
      )}

      {/* ── Map ── */}
      <div className="flex flex-col gap-3 flex-1 min-w-0 h-full">
        <div
          className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#e8f0f8] flex-1`}
        >
          <MapContainer
            center={defaultCenter}
            zoom={11}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{ height: '100%', width: '100%', zIndex: 0 }}
          >
            <MapController neighborhoods={neighborhoods} onReady={handleMapReady} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {neighborhoods.map((n) =>
              n.lat && n.lng ? (
                <Marker
                  key={n.id}
                  position={[n.lat, n.lng]}
                  icon={createScoreIcon(n.score, activeId === n.id)}
                  eventHandlers={{
                    click: () => setActiveId(n.id),
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: '180px', borderRadius: '10px', overflow: 'hidden' }}>
                      <img
                        src={n.image}
                        alt={n.name}
                        style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                      />
                      <div style={{ padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <strong style={{ fontSize: '13px', color: '#1e293b' }}>{n.name}</strong>
                          <span style={{ background: '#0F2F20', color: '#fff', fontWeight: 700, fontSize: '11px', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n.score}</span>
                        </div>
                        <p style={{ fontSize: '11px', color: '#94a3b8', margin: '0 0 6px' }}>{n.location}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                          <div>
                            <div style={{ color: '#64748b', marginBottom: '1px' }}>Price</div>
                            <div style={{ fontWeight: 700, color: '#1e293b' }}>{n.avgPrice}</div>
                          </div>
                          <div>
                            <div style={{ color: '#64748b', marginBottom: '1px' }}>Yield</div>
                            <div style={{ fontWeight: 700, color: '#11B573' }}>{n.rentalYield}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ) : null
            )}
          </MapContainer>

          {/* Zoom Controls */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xl rounded-xl shadow-md border border-white flex flex-col overflow-hidden z-[1000]">
            <button onClick={() => mapInstance?.zoomIn()} className="p-2 text-slate-600 hover:bg-slate-50 border-b border-slate-100 transition-colors">
              <Plus size={16} />
            </button>
            <button onClick={() => mapInstance?.zoomOut()} className="p-2 text-slate-600 hover:bg-slate-50 border-b border-slate-100 transition-colors">
              <Minus size={16} />
            </button>
            <button onClick={() => { if (mapInstance) { const v = neighborhoods.filter(n => n.lat && n.lng); if (v.length) mapInstance.fitBounds(L.latLngBounds(v.map(n => [n.lat, n.lng])), { padding: [60,60], maxZoom:13, animate:true }); } }} className="p-2 text-slate-600 hover:bg-slate-50 transition-colors">
              <Crosshair size={16} />
            </button>
          </div>

          {/* "Back to List" floating pill — only in expanded mode */}
          {expanded && (
            <button
              onClick={onCollapse}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2 bg-white text-slate-700 px-5 py-2.5 rounded-full shadow-xl border border-slate-200 text-xs font-bold hover:border-[#11B573] hover:text-[#11B573] transition-all"
            >
              <List size={13} /> Back to List View
            </button>
          )}
        </div>

        {/* Livability Legend — hide when expanded (saves space) */}
        {!expanded && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 shrink-0">
            <div className="text-xs font-bold text-slate-900 mb-2">Livability Score</div>
            <div className="h-2 rounded-full bg-gradient-to-r from-red-400 via-amber-400 via-yellow-300 to-[#11B573] mb-1.5" />
            <div className="flex justify-between text-[10px] text-slate-400 font-medium">
              <span>0</span><span>100</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5">Higher score means better livability</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMap;

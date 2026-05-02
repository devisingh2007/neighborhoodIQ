import React from 'react';
import { Navigation, AlertCircle, TrendingUp, TrendingDown, Info, Star, Home, BarChart3, Leaf } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Marker Creator
const createCustomMarker = (score) => {
  return L.divIcon({
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-8 h-8 bg-[#11B573] rounded-full opacity-20 animate-ping"></div>
        <div class="relative w-10 h-10 bg-[#11B573] text-white rounded-full flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white transform hover:scale-110 transition-transform duration-200">
          ${score}
        </div>
      </div>
    `,
    className: 'custom-div-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

const MapControls = () => {
  const map = useMap();
  
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[1000]">
      <div className="flex flex-col bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white overflow-hidden p-1">
        <button 
          onClick={() => map.zoomIn()}
          className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-[#11B573] transition-all rounded-xl pointer-events-auto"
        >
          <span className="text-xl font-bold">+</span>
        </button>
        <button 
          onClick={() => map.zoomOut()}
          className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-[#11B573] transition-all rounded-xl pointer-events-auto"
        >
          <span className="text-xl font-bold">−</span>
        </button>
      </div>
      <button 
        onClick={() => map.setView([19.0760, 72.8777], 11)}
        className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-[#11B573] transition-all pointer-events-auto"
      >
        <Navigation size={20} />
      </button>
    </div>
  );
};

const MapAlertsPanel = () => {
  const MumbaiCenter = [19.0760, 72.8777];
  
  const neighborhoods = [
    { name: 'Andheri', position: [19.1136, 72.8697], score: 85 },
    { name: 'Powai', position: [19.1176, 72.9060], score: 82 },
    { name: 'Bandra', position: [19.0596, 72.8295], score: 88 },
    { name: 'Colaba', position: [18.9067, 72.8147], score: 79 },
    { name: 'Dadar', position: [19.0178, 72.8478], score: 78 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Map Widget - 4/10 */}
      <div className="lg:col-span-4 bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 h-[480px] relative overflow-hidden group">
        {/* Header Overlay */}
        <div className="absolute top-6 left-6 z-[1000] flex flex-col gap-2 pointer-events-none">
          <div className="bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/20 pointer-events-auto">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Neighborhood Intelligence Map</h3>
            <p className="text-[11px] text-slate-500 font-medium tracking-tight">Vibrant Real-time Overview</p>
          </div>
          <button className="w-fit px-4 py-2 bg-[#11B573] text-white rounded-xl text-[10px] font-bold shadow-lg shadow-emerald-100/50 hover:bg-[#0f9a62] transition-all hover:scale-105 pointer-events-auto">
            Open Map Explorer
          </button>
        </div>
        
        {/* Interactive Leaflet Map */}
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-inner z-10 bg-slate-50 relative">
           <MapContainer 
             center={MumbaiCenter} 
             zoom={11} 
             scrollWheelZoom={false}
             className="w-full h-full"
             zoomControl={false}
           >
             {/* Colorful Voyager Tile Layer */}
             <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
               url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
             />
             
             {neighborhoods.map((area, idx) => (
               <Marker 
                 key={idx} 
                 position={area.position} 
                 icon={createCustomMarker(area.score)}
               >
                 <Popup className="custom-popup">
                   <div className="p-2 text-center">
                     <h4 className="font-bold text-slate-900 text-base mb-0.5">{area.name}</h4>
                     <div className="flex items-center justify-center gap-1.5">
                       <span className="w-2 h-2 bg-[#11B573] rounded-full animate-pulse"></span>
                       <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider">Score: {area.score}/100</p>
                     </div>
                   </div>
                 </Popup>
               </Marker>
             ))}
             
             <MapControls />
           </MapContainer>
        </div>
      </div>

      {/* Comparison Snapshot - 3/10 */}
      <div className="lg:col-span-3 bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-slate-900 text-base leading-tight">Comparison Snapshot</h3>
          <button className="text-[10px] font-bold text-[#11B573] uppercase tracking-wider hover:underline transition-all">View full comparison</button>
        </div>
        <div className="space-y-4 flex-grow">
          <div className="grid grid-cols-5 gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest border-b border-slate-50 pb-3">
            <span className="col-span-1">Metric</span>
            <span className="text-center"><Star size={14} className="mx-auto text-emerald-500" /></span>
            <span className="text-center"><Home size={14} className="mx-auto text-blue-500" /></span>
            <span className="text-center"><BarChart3 size={14} className="mx-auto text-purple-500" /></span>
            <span className="text-center"><Leaf size={14} className="mx-auto text-green-500" /></span>
          </div>
          {[
            { label: 'Overall Score', v: [92, 88, 85, 82] },
            { label: 'Safety', v: [92, 88, 83, 81] },
            { label: 'Environment', v: [91, 87, 84, 82] },
            { label: 'Infrastructure', v: [93, 89, 87, 84] },
            { label: 'Livability', v: [90, 86, 84, 81] },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-5 gap-2 items-center py-1.5 border-b border-slate-50/50 last:border-0">
              <span className="col-span-1 text-[11px] font-bold text-slate-500">{row.label}</span>
              {row.v.map((val, idx) => (
                <span key={idx} className={`text-center text-[11px] font-bold ${idx === 0 ? 'text-[#11B573]' : 'text-slate-800'}`}>{val}</span>
              ))}
            </div>
          ))}
        </div>
        <button className="w-full mt-6 py-2.5 text-[#11B573] text-[11px] font-bold border border-emerald-50 rounded-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
          Compare More →
        </button>
      </div>

      {/* Alerts Panel - 3/10 */}
      <div className="lg:col-span-3 bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-900 text-base leading-tight">Alerts & Updates</h3>
          <button className="text-[10px] font-bold text-[#11B573] uppercase tracking-wider hover:underline transition-all">View all</button>
        </div>
        <div className="flex flex-col gap-4 flex-grow overflow-y-auto pr-1 hide-scrollbar">
          {[
            { title: 'Air quality in Powai is UNHEALTHY', time: '2h ago', desc: 'AQI 165 recorded today', icon: <AlertCircle className="text-red-500" />, bg: 'bg-red-50' },
            { title: 'Property prices increased in Bandra West', time: '1d ago', desc: '3.2% increase in the last 30 days', icon: <TrendingUp className="text-[#11B573]" />, bg: 'bg-emerald-50' },
            { title: 'New infrastructure project near Andheri West', time: '2d ago', desc: 'Metro Line 7 update', icon: <Info className="text-blue-500" />, bg: 'bg-blue-50' },
            { title: 'Rent in Lower Parel dropped', time: '3d ago', desc: '5% drop in average rent this month', icon: <TrendingDown className="text-amber-500" />, bg: 'bg-amber-50' },
          ].map((alert, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all group cursor-pointer">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${alert.bg}`}>
                {alert.icon}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs font-bold text-slate-800 leading-tight mb-1 truncate group-hover:text-[#11B573] transition-colors">{alert.title}</p>
                <p className="text-[10px] text-slate-400 font-medium mb-1 line-clamp-1">{alert.desc}</p>
                <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 text-[#11B573] text-[11px] font-bold hover:underline transition-all flex items-center justify-center gap-1">
          View all alerts →
        </button>
      </div>
    </div>
  );
};

export default MapAlertsPanel;

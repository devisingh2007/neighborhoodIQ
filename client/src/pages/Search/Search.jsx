import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchHero from './SearchHero';
import SearchFilterSidebar from './SearchFilterSidebar';
import SearchResults from './SearchResults';
import SearchMap from './SearchMap';

// ─── Mock Data ────────────────────────────────────────────────────────────────
const ALL_NEIGHBORHOODS = [
  {
    id: 1,
    name: 'Powai',
    location: 'Mumbai, Maharashtra',
    score: 92,
    matchLabel: 'Great Match',
    avgPrice: '₹2.4 Cr',
    rentalYield: '4.2%',
    safety: 92,
    environment: 91,
    infrastructure: 93,
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=2070&auto=format&fit=crop',
    lat: 19.1176,
    lng: 72.9060,
    city: 'Mumbai',
    minScore: 92,
  },
  {
    id: 2,
    name: 'Bandra West',
    location: 'Mumbai, Maharashtra',
    score: 88,
    matchLabel: 'Great Match',
    avgPrice: '₹3.6 Cr',
    rentalYield: '3.8%',
    safety: 88,
    environment: 87,
    infrastructure: 89,
    image: 'https://images.unsplash.com/photo-1596743444221-6015070b23e1?q=80&w=1000&auto=format&fit=crop',
    lat: 19.0596,
    lng: 72.8295,
    city: 'Mumbai',
    minScore: 88,
  },
  {
    id: 3,
    name: 'Andheri West',
    location: 'Mumbai, Maharashtra',
    score: 85,
    matchLabel: 'Good Match',
    avgPrice: '₹2.1 Cr',
    rentalYield: '4.1%',
    safety: 83,
    environment: 84,
    infrastructure: 87,
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=2000&auto=format&fit=crop',
    lat: 19.1264,
    lng: 72.8362,
    city: 'Mumbai',
    minScore: 85,
  },
  {
    id: 4,
    name: 'Lower Parel',
    location: 'Mumbai, Maharashtra',
    score: 82,
    matchLabel: 'Good Match',
    avgPrice: '₹3.2 Cr',
    rentalYield: '3.6%',
    safety: 81,
    environment: 82,
    infrastructure: 84,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    lat: 19.0052,
    lng: 72.8336,
    city: 'Mumbai',
    minScore: 82,
  },
  {
    id: 5,
    name: 'Koramangala',
    location: 'Bangalore, Karnataka',
    score: 89,
    matchLabel: 'Great Match',
    avgPrice: '₹1.8 Cr',
    rentalYield: '5.1%',
    safety: 88,
    environment: 86,
    infrastructure: 91,
    image: 'https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?q=80&w=1000&auto=format&fit=crop',
    lat: 12.9352,
    lng: 77.6245,
    city: 'Bangalore',
    minScore: 89,
  },
  {
    id: 6,
    name: 'Whitefield',
    location: 'Bangalore, Karnataka',
    score: 93,
    matchLabel: 'Great Match',
    avgPrice: '₹1.4 Cr',
    rentalYield: '5.6%',
    safety: 91,
    environment: 90,
    infrastructure: 94,
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1000&auto=format&fit=crop',
    lat: 12.9698,
    lng: 77.7499,
    city: 'Bangalore',
    minScore: 93,
  },
  {
    id: 7,
    name: 'Dwarka',
    location: 'New Delhi, Delhi',
    score: 78,
    matchLabel: 'Good Match',
    avgPrice: '₹1.1 Cr',
    rentalYield: '3.9%',
    safety: 76,
    environment: 74,
    infrastructure: 82,
    image: 'https://images.unsplash.com/photo-1515165597734-7b798038d618?q=80&w=1000&auto=format&fit=crop',
    lat: 28.5921,
    lng: 77.0460,
    city: 'Delhi',
    minScore: 78,
  },
];

const defaultFilters = {
  location: '',
  budgetMax: 300,
  minScore: 70,
  propertyType: 'All',
  amenities: [],
};

// ─── Search Page ──────────────────────────────────────────────────────────────
const Search = () => {
  const [searchParams] = useSearchParams();
  const pathPart = window.location.pathname.split('/').pop();
  const cityFromUrl = pathPart !== 'search' ? decodeURIComponent(pathPart) : '';

  const [searchQuery, setSearchQuery] = useState(cityFromUrl);
  const [filters, setFilters] = useState(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);
  const [sortBy, setSortBy] = useState('Best Match');
  const [viewMode, setViewMode] = useState('list');
  const [cityChip, setCityChip] = useState(cityFromUrl);
  const [initialFocus, setInitialFocus] = useState(null);

  const handleLocate = (neighborhood) => {
    setInitialFocus(neighborhood);
    setViewMode('map');
  };

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
      setCityChip(q);
    }
  }, [searchParams]);

  // Apply filters
  const handleApplyFilters = () => {
    setAppliedFilters({ ...filters });
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setCityChip('');
  };

  const handleSearch = () => {
    // Basic: filter by search query
    setCityChip(searchQuery || '');
  };

  // Build active filter chips
  const activeFilters = useMemo(() => {
    const chips = [];
    if (cityChip) chips.push({ key: 'city', label: cityChip });
    if (appliedFilters.budgetMax < 500) chips.push({ key: 'budget', label: `Budget: Any` });
    if (appliedFilters.minScore > 0) chips.push({ key: 'minScore', label: `Min Score: ${appliedFilters.minScore}+` });
    return chips;
  }, [cityChip, appliedFilters]);

  const handleRemoveFilter = (key) => {
    if (key === 'city') setCityChip('');
    if (key === 'minScore') { setFilters(p => ({ ...p, minScore: 0 })); setAppliedFilters(p => ({ ...p, minScore: 0 })); }
    if (key === 'budget') { setFilters(p => ({ ...p, budgetMax: 500 })); setAppliedFilters(p => ({ ...p, budgetMax: 500 })); }
  };

  // Filter + sort results
  const results = useMemo(() => {
    let data = [...ALL_NEIGHBORHOODS];

    // City filter from chip
    if (cityChip) {
      const q = cityChip.toLowerCase();
      data = data.filter(
        (n) =>
          n.name.toLowerCase().includes(q) ||
          n.location.toLowerCase().includes(q) ||
          n.city.toLowerCase().includes(q)
      );
    }

    // Min score
    if (appliedFilters.minScore > 0) {
      data = data.filter((n) => n.score >= appliedFilters.minScore);
    }

    // Sort
    if (sortBy === 'Highest Score') data.sort((a, b) => b.score - a.score);
    else if (sortBy === 'Best Match') data.sort((a, b) => b.score - a.score);

    return data;
  }, [cityChip, appliedFilters, sortBy]);

  const isMapExpanded = viewMode === 'map';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <SearchHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />

      {/* Body */}
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-5 items-start transition-all duration-500 ${
          isMapExpanded ? 'max-w-full' : 'max-w-[1400px]'
        }`}
      >
        {/* Filter Sidebar — hidden in map mode */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isMapExpanded ? 'w-0 opacity-0 pointer-events-none' : 'w-[240px] opacity-100'
          }`}
          style={{ minWidth: isMapExpanded ? 0 : 240 }}
        >
          <SearchFilterSidebar
            filters={filters}
            setFilters={setFilters}
            onApply={handleApplyFilters}
            onReset={handleResetFilters}
          />
        </div>

        {/* Results — hidden in map mode */}
        <div
          className={`transition-all duration-500 overflow-hidden min-w-0 ${
            isMapExpanded ? 'w-0 opacity-0 pointer-events-none flex-none' : 'flex-grow opacity-100'
          }`}
        >
          <SearchResults
            results={results}
            totalCount={results.length}
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            onLocate={handleLocate}
          />
        </div>

        {/* Map Panel — expands to fill when in map mode */}
        <div
          className={`transition-all duration-500 ${
            isMapExpanded
              ? 'flex-1 sticky top-[72px] h-[calc(100vh-80px)]'
              : 'w-[340px] shrink-0 sticky top-[72px] h-[calc(100vh-80px)]'
          }`}
        >
          <SearchMap
            neighborhoods={results}
            expanded={isMapExpanded}
            onCollapse={() => { setViewMode('list'); setInitialFocus(null); }}
            initialFocus={initialFocus}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavSearch = () => {
    if (navSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(navSearch.trim())}`);
      setNavSearch('');
    } else {
      navigate('/search');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Compare', path: '/compare' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isTransparentPage = location.pathname === '/' || location.pathname === '/explore';
  const isTransparent = !isScrolled && isTransparentPage;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' : 
      isTransparent ? 'bg-transparent py-4 border-b border-white/10' : 
      'bg-white py-4 shadow-sm border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group shrink-0">
            <div className="p-1.5 rounded-lg bg-[#11B573] text-white transition-transform group-hover:scale-105">
              <Landmark size={24} strokeWidth={2} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              Neighborhood<span className={isTransparent ? 'text-white' : 'text-[#11B573]'}>IQ</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-all relative py-2 ${
                  isActive(link.path) 
                    ? (isTransparent ? 'text-white' : 'text-slate-900') 
                    : (isTransparent ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-[#11B573]')
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11B573] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative group">
              <div className={`flex items-center px-4 py-2 rounded-full border transition-all group-focus-within:bg-white group-focus-within:border-emerald-500 group-focus-within:shadow-sm w-64 lg:w-72 ${
                isTransparent ? 'bg-white/10 border-white/20' : 'bg-slate-50 border-slate-100'
              }`}>
                <button onClick={handleNavSearch} className="shrink-0 mr-2.5">
                  <Search size={16} className={`transition-colors group-focus-within:text-emerald-500 ${
                    isTransparent ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-[#11B573]'
                  }`} />
                </button>
                <input
                  type="text"
                  placeholder="Search neighborhoods, cities..."
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavSearch()}
                  className={`bg-transparent border-none outline-none text-sm w-full group-focus-within:text-slate-700 group-focus-within:placeholder:text-slate-400 ${
                    isTransparent ? 'text-white placeholder:text-white/60' : 'text-slate-700 placeholder:text-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Auth Buttons */}
            <Link 
              to="/login" 
              className="px-6 py-2 bg-[#11B573] hover:bg-[#0F2F20] text-white rounded-full transition-all font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${isTransparent ? 'text-white hover:text-white/80' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                  isActive(link.path) ? 'bg-emerald-50 text-[#11B573]' : 'text-slate-600 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link to="/login" className="block w-full py-3 bg-[#11B573] text-white text-center rounded-xl font-bold">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-slate-100/50' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-brand-700 text-white' : 'bg-white/10 backdrop-blur-sm text-white'
              }`}>
              <Landmark size={24} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
              NeighborhoodIQ<span className="text-brand-500">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Explore', 'Compare', 'Methodology', 'About'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${isScrolled ? 'text-gray-600' : 'text-white/90'
                  }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className={`flex items-center px-3 py-1.5 rounded-full border transition-all ${
              isScrolled 
                ? 'bg-gray-100 border-gray-200 text-gray-400 focus-within:border-brand-500 focus-within:bg-white' 
                : 'bg-white/10 border-white/20 text-white/60 focus-within:bg-white/20'
            }`}>
              <Search size={16} className="mr-2" />
              <input 
                type="text" 
                placeholder="Search neighborhoods, cities..." 
                className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-inherit text-inherit"
              />
            </div>
            <Link to="/login" className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-all font-medium text-sm shadow-sm">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'Explore', 'Compare', 'Methodology', 'About'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/login" className="btn-secondary w-full text-center">Sign In</Link>
              <Link to="/register" className="btn-primary w-full text-center">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

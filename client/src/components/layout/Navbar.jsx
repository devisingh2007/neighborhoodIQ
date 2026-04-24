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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
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
            {['Home', 'Compare', 'Heatmap', 'About'].map((item) => (
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
            <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'
              }`}>
              <Search size={20} />
            </button>
            <button className={`${isScrolled
              ? 'btn-primary'
              : 'px-6 py-2.5 bg-white text-brand-900 hover:bg-brand-50 rounded-lg transition-all font-medium shadow-lg'
              }`}>
              Log In
            </button>
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
            {['Home', 'Compare', 'Heatmap', 'About'].map((item) => (
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
              <button className="btn-secondary w-full">Sign In</button>
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

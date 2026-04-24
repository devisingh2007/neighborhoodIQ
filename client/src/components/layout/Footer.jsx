import { Landmark, Globe, Mail, MessageCircle, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-brand-700 rounded-lg">
                <Landmark size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">NeighborhoodIQ<span className="text-brand-500">.</span></span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Empowering real estate decisions with transparent, data-driven neighborhood intelligence across India.
            </p>
            <div className="flex space-x-4">
              {[Globe, Mail, MessageCircle, User].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 hover:bg-brand-700 rounded-full transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Platform</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Neighborhood Search</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Comparison Tool</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Heatmaps</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Data Methodology</a></li>
            </ul>
          </div>

          {/* Top Cities */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Top Cities</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mumbai</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Bangalore</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">New Delhi</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Chennai</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Informed</h4>
            <p className="text-sm text-white/60">Subscribe to our monthly market insights and new area reports.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button type="submit" className="btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2024 NeighborhoodIQ Intelligence Platform. Built with transparency.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

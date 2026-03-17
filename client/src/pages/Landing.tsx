import { useLocation } from 'wouter';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Landing() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Home', 'New In', 'Sale', 'Tops', 'Trousers', 'Dresses', 'Footwear', 'Jewelry', 'Accessories'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#8b6f47] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setLocation('/')}
            className="text-2xl font-black font-['Public_Sans'] hover:opacity-80 transition-opacity"
          >
            ƆDESHIE
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center flex-1 ml-8">
            {menuItems.map((item) => (
              <button
                key={item}
                className="text-sm font-['Public_Sans'] hover:opacity-80 transition-opacity"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 flex-1 max-w-xs mx-4">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 flex-1 outline-none text-slate-900 font-['Public_Sans'] text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#743b1e] rounded-full transition-colors">
              <Heart size={20} />
            </button>
            <button
              onClick={() => setLocation('/cart')}
              className="p-2 hover:bg-[#743b1e] rounded-full transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => setLocation('/login')}
              className="p-2 hover:bg-[#743b1e] rounded-full transition-colors"
            >
              <User size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-[#743b1e] rounded-full transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#743b1e] px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                className="block w-full text-left text-sm font-['Public_Sans'] hover:opacity-80 transition-opacity py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/Rectangle2_c4d52efe.jpg)',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-black font-['Public_Sans'] text-white mb-6 leading-tight">
                Discover Africa's<br />finest collection
              </h1>
              <p className="text-lg text-white/90 font-['Public_Sans'] mb-8 max-w-xl">
                Explore thoughtfully curated selection of authentic African luxury collections. Each piece tells a story of African heritage and craftsmanship.
              </p>
              <button
                onClick={() => setLocation('/products')}
                className="px-8 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#8b6f47] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black font-['Public_Sans'] mb-2">
                50,000+
              </div>
              <p className="text-lg font-['Public_Sans'] text-white/90">
                Happy Customers
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black font-['Public_Sans'] mb-2">
                2000+
              </div>
              <p className="text-lg font-['Public_Sans'] text-white/90">
                High Quality Products
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black font-['Public_Sans'] mb-2">
                1000+
              </div>
              <p className="text-lg font-['Public_Sans'] text-white/90">
                Brand Deals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black font-['Public_Sans'] text-slate-900 mb-6">
            Ready to explore luxury?
          </h2>
          <p className="text-lg text-slate-600 font-['Public_Sans'] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the beauty and craftsmanship of authentic African luxury collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setLocation('/products')}
              className="px-8 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
            >
              Browse Collection
            </button>
            <button
              onClick={() => setLocation('/login')}
              className="px-8 py-3 border-2 border-[#743b1e] text-[#743b1e] rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#743b1e] hover:text-white transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold font-['Public_Sans'] mb-4">About ODESHIE</h3>
              <p className="text-sm text-slate-400 font-['Public_Sans']">
                Celebrating African luxury and craftsmanship through authentic, high-quality collections.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold font-['Public_Sans'] mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-slate-400 font-['Public_Sans']">
                <li><button className="hover:text-white transition-colors">New Arrivals</button></li>
                <li><button className="hover:text-white transition-colors">Sale</button></li>
                <li><button className="hover:text-white transition-colors">Collections</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-bold font-['Public_Sans'] mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400 font-['Public_Sans']">
                <li><button className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors">Shipping Info</button></li>
                <li><button className="hover:text-white transition-colors">Returns</button></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold font-['Public_Sans'] mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400 font-['Public_Sans']">
                <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400 font-['Public_Sans']">
            <p>© 2024 ODESHIE Luxury. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

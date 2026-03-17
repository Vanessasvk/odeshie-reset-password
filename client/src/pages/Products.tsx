'use client';

import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kente Cloth Luxury Scarf',
    category: 'Textiles',
    price: 450,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cloth-scarf-fKZaTeT37LPj52i3xoXpVX.webp',
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: '2',
    name: 'Adire Indigo Wrap',
    category: 'Textiles',
    price: 380,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/adire-indigo-wrap-2g6vMkv6NzQc95zaYVAQZJ.webp',
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: '3',
    name: 'Bogolan Mud Cloth Tapestry',
    category: 'Home Decor',
    price: 520,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-throw-EjRjKZPGg3kZ725piexwWw.webp',
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  {
    id: '4',
    name: 'Ankara Dress Fabric',
    category: 'Textiles',
    price: 680,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/ankara-dress-fabric-R8FXadUa2iYBzsaiJSu6Fe.webp',
    rating: 4.9,
    reviews: 142,
    inStock: true,
  },
  {
    id: '5',
    name: 'Shweshwe Fabric',
    category: 'Textiles',
    price: 95,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/shweshwe-fabric-BxVWA8vfXysMsX96oToEKY.webp',
    rating: 4.6,
    reviews: 203,
    inStock: true,
  },
  {
    id: '6',
    name: 'Kente Jewelry Scarf',
    category: 'Jewelry',
    price: 1200,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-jewelry-scarf-WavCGHpVmdtdkXg3SbvG2F.webp',
    rating: 5.0,
    reviews: 78,
    inStock: false,
  },
  {
    id: '7',
    name: 'Batik Silk Scarf',
    category: 'Accessories',
    price: 420,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/batik-silk-scarf-abD6qGPVEb5W9Vckc5i7AL.webp',
    rating: 4.8,
    reviews: 45,
    inStock: true,
  },
  {
    id: '8',
    name: 'Kente Cushion Cover',
    category: 'Home Decor',
    price: 890,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/kente-cushion-cover-3xSKLVmVDXPavWQYijEdme.webp',
    rating: 4.9,
    reviews: 67,
    inStock: true,
  },
  {
    id: '9',
    name: 'Adire Headwrap',
    category: 'Accessories',
    price: 150,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/adire-headwrap-e5xnz4b3crtyNSGCAFQRsh.webp',
    rating: 4.7,
    reviews: 91,
    inStock: true,
  },
  {
    id: '10',
    name: 'Bogolan Wall Hanging',
    category: 'Home Decor',
    price: 650,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663435494681/CNWWV9cGWyp7fDCwSJyRZh/bogolan-wall-hanging-Qxk7b5KHzrCwTxzZuoNnQR.webp',
    rating: 4.8,
    reviews: 34,
    inStock: true,
  },
  {
    id: '11',
    name: 'Ankara Print Dress',
    category: 'Fashion',
    price: 320,
    image: '/66-1605.webp',
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: '10',
    name: 'Zulu Beaded Necklace',
    category: 'Jewelry',
    price: 550,
    image: '/66-1605.webp',
    rating: 4.8,
    reviews: 91,
    inStock: true,
  },
  {
    id: '11',
    name: 'Kente Ceremonial Cloth',
    category: 'Textiles',
    price: 780,
    image: '/66-1605.webp',
    rating: 5.0,
    reviews: 34,
    inStock: true,
  },
  {
    id: '12',
    name: 'Moroccan Leather Pouf',
    category: 'Home Decor',
    price: 340,
    image: '/66-1605.webp',
    rating: 4.6,
    reviews: 112,
    inStock: true,
  },
];

const CATEGORIES = ['All', 'Textiles', 'Jewelry', 'Accessories', 'Fashion', 'Home Decor', 'Beauty'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $500', min: 100, max: 500 },
  { label: '$500 - $1000', min: 500, max: 1000 },
  { label: 'Over $1000', min: 1000, max: Infinity },
];

export default function Products() {
  const [, setLocation] = useLocation();
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      const priceRange = PRICE_RANGES[selectedPriceRange];
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      const matchesStock = !inStockOnly || product.inStock;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPriceRange, sortBy, inStockOnly]);

  return (
    <div className="min-h-screen bg-[#f8f6f6]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setLocation('/dashboard')}
            className="text-2xl font-bold font-['Public_Sans'] text-slate-900 hover:text-[#743b1e] transition-colors"
          >
            ƆDESHIE
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLocation('/cart')}
              className="relative p-2 text-slate-600 hover:text-[#743b1e] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#743b1e] text-white text-xs rounded-full flex items-center justify-center font-['Public_Sans'] font-bold">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <button
              onClick={() => setLocation('/dashboard')}
              className="px-6 py-2 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-2">
              Luxury Collections
            </h1>
            <p className="text-slate-600 font-['Public_Sans']">
              Discover our curated selection of authentic African luxury products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-8">
                <h2 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">
                  Filters
                </h2>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">
                    Search
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  />
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-lg font-['Public_Sans'] transition-colors ${
                          selectedCategory === cat
                            ? 'bg-[#743b1e] text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    {PRICE_RANGES.map((range, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPriceRange(idx)}
                        className={`block w-full text-left px-3 py-2 rounded-lg font-['Public_Sans'] transition-colors ${
                          selectedPriceRange === idx
                            ? 'bg-[#743b1e] text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stock Filter */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-sm font-semibold font-['Public_Sans'] text-slate-700">
                      In Stock Only
                    </span>
                  </label>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="mb-6 text-slate-600 font-['Public_Sans']">
                    Showing {filteredProducts.length} of {PRODUCTS.length} products
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => setLocation(`/product/${product.id}`)}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Product Image */}
                        <div className="relative h-64 bg-slate-200 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <span className="text-white font-bold font-['Public_Sans']">Out of Stock</span>
                            </div>
                          )}
                          <div className="absolute top-4 right-4 bg-[#743b1e] text-white px-3 py-1 rounded-full text-sm font-semibold font-['Public_Sans']">
                            {product.category}
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2 line-clamp-2">
                            {product.name}
                          </h3>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400'
                                      : 'text-slate-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-slate-600 font-['Public_Sans']">
                              ({product.reviews})
                            </span>
                          </div>

                          {/* Price */}
                          <div className="text-2xl font-black font-['Public_Sans'] text-[#743b1e] mb-4">
                            ${product.price}
                          </div>

                          {/* Add to Cart Button */}
                          <button
                            disabled={!product.inStock}
                            className="w-full py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-600 font-['Public_Sans'] text-lg">
                    No products found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setSelectedPriceRange(0);
                      setInStockOnly(false);
                    }}
                    className="mt-4 text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-8 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-xs font-['Public_Sans']">
          © 2024 ODESHIE Luxury. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

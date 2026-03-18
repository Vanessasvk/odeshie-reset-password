'use client';

import { useState } from 'react';
import { useLocation, useRoute } from 'wouter';
import { useCart } from '@/contexts/CartContext';

interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  helpful: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  details: string[];
  images: string[];
  reviews_data: Review[];
}

const PRODUCTS_DATA: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Kente Cloth Luxury Scarf',
    category: 'Textiles',
    price: 450,
    image: '/66-1605.webp',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      'Experience the timeless elegance of authentic Kente cloth. This luxury scarf is handwoven using traditional techniques passed down through generations. Each piece tells a story of African heritage and craftsmanship.',
    details: [
      'Handwoven authentic Kente cloth',
      'Dimensions: 72" x 24"',
      'Material: 100% premium cotton',
      'Traditional Ghanaian craftsmanship',
      'Perfect for formal and casual wear',
      'Dry clean recommended',
      'Includes gift packaging',
    ],
    images: ['/66-1605.webp', '/66-1605.webp', '/66-1605.webp'],
    reviews_data: [
      {
        id: '1',
        author: 'Sarah M.',
        rating: 5,
        title: 'Absolutely stunning!',
        text: 'The quality is exceptional. The colors are vibrant and the craftsmanship is evident in every thread. Worth every penny!',
        date: '2 weeks ago',
        helpful: 24,
      },
      {
        id: '2',
        author: 'James K.',
        rating: 5,
        title: 'Perfect gift',
        text: 'Purchased this for my wife and she loves it. The authenticity and quality make it a true luxury piece.',
        date: '1 month ago',
        helpful: 18,
      },
      {
        id: '3',
        author: 'Amara N.',
        rating: 4,
        title: 'Beautiful with minor issues',
        text: 'Love the scarf but it arrived with a small loose thread. Customer service was helpful in resolving it.',
        date: '1 month ago',
        helpful: 12,
      },
    ],
  },
  '2': {
    id: '2',
    name: 'Adire Indigo Wrap',
    category: 'Textiles',
    price: 380,
    image: '/66-1605.webp',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    description:
      'Indigo-dyed Adire cloth represents centuries of Nigerian textile tradition. This wrap showcases intricate patterns created through traditional resist-dyeing techniques.',
    details: [
      'Traditional Nigerian Adire cloth',
      'Dimensions: 60" x 48"',
      'Material: 100% cotton',
      'Hand-dyed with natural indigo',
      'Versatile styling options',
      'Machine washable (cold water)',
      'Eco-friendly production',
    ],
    images: ['/66-1605.webp', '/66-1605.webp', '/66-1605.webp'],
    reviews_data: [
      {
        id: '1',
        author: 'Zainab A.',
        rating: 5,
        title: 'Authentic and beautiful',
        text: 'This is exactly what I was looking for. The indigo color is rich and the pattern is intricate.',
        date: '3 weeks ago',
        helpful: 15,
      },
      {
        id: '2',
        author: 'David L.',
        rating: 5,
        title: 'Great quality',
        text: 'Exceeded my expectations. The craftsmanship is outstanding.',
        date: '1 month ago',
        helpful: 10,
      },
    ],
  },
};

export default function ProductDetail() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/product/:id');
  const productId = params?.id || '1';
  const product = PRODUCTS_DATA[productId] || PRODUCTS_DATA['1'];

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
    });
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  const relatedProducts = [
    { id: '2', name: 'Adire Indigo Wrap', price: 380, image: '/66-1605.webp', rating: 4.9 },
    { id: '3', name: 'Bogolan Mud Cloth', price: 520, image: '/66-1605.webp', rating: 4.7 },
    { id: '4', name: 'Beaded Leather Handbag', price: 680, image: '/66-1605.webp', rating: 4.9 },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f6]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => setLocation('/products')}
            className="text-2xl font-bold font-['Public_Sans'] text-slate-900 hover:text-[#743b1e] transition-colors"
          >
            ƆDESHIE
          </button>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setLocation('/products')}
              className="text-slate-600 font-['Public_Sans'] hover:text-slate-900 transition-colors"
            >
              ← Back to Products
            </button>
            <button
              onClick={() => setLocation('/cart')}
              className="relative p-2 text-slate-600 hover:text-[#743b1e] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="mb-6 rounded-xl overflow-hidden bg-white border border-slate-200">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors GHS {
                      selectedImage === idx ? 'border-[#743b1e]' : 'border-slate-200'
                    }`}
                  >
                    <img src={img} alt={`View GHS {idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#743b1e] text-white rounded-full text-sm font-semibold font-['Public_Sans'] mb-4">
                  {product.category}
                </div>
                <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 GHS {
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-slate-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-600 font-['Public_Sans']">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="text-5xl font-black font-['Public_Sans'] text-[#743b1e] mb-8">
                  GHS {product.price}
                </div>

                {/* Description */}
                <p className="text-slate-600 font-['Public_Sans'] text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Stock Status */}
                <div className="mb-8">
                  {product.inStock ? (
                    <div className="text-green-600 font-semibold font-['Public_Sans']">
                      ✓ In Stock - Ships within 2-3 business days
                    </div>
                  ) : (
                    <div className="text-red-600 font-semibold font-['Public_Sans']">
                      Out of Stock - Notify me when available
                    </div>
                  )}
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex gap-4 mb-8">
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900 font-['Public_Sans']"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center font-['Public_Sans'] font-semibold border-none outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-slate-600 hover:text-slate-900 font-['Public_Sans']"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {cartAdded ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                </div>

                {/* Product Details */}
                <div className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                    Product Details
                  </h3>
                  <ul className="space-y-3">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 font-['Public_Sans']">
                        <span className="text-[#743b1e] font-bold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-black font-['Public_Sans'] text-slate-900 mb-8">
              Customer Reviews
            </h2>
            <div className="space-y-6">
              {product.reviews_data.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 GHS {
                              i < review.rating ? 'text-yellow-400' : 'text-slate-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h4 className="font-bold font-['Public_Sans'] text-slate-900">{review.title}</h4>
                      <p className="text-sm text-slate-500 font-['Public_Sans']">
                        by {review.author} • {review.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-['Public_Sans'] mb-4">{review.text}</p>
                  <button className="text-sm text-slate-500 hover:text-slate-700 font-['Public_Sans']">
                    👍 Helpful ({review.helpful})
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-black font-['Public_Sans'] text-slate-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => setLocation(`/product/GHS {prod.id}`)}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-48 bg-slate-200 overflow-hidden">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2 line-clamp-2">
                      {prod.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 GHS {
                              i < Math.floor(prod.rating) ? 'text-yellow-400' : 'text-slate-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-slate-500 font-['Public_Sans']">{prod.rating}</span>
                    </div>
                    <div className="text-xl font-black font-['Public_Sans'] text-[#743b1e]">
                      GHS {prod.price}
                    </div>
                  </div>
                </div>
              ))}
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

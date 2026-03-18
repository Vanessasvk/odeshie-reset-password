import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';

const PROMO_CODES: { [key: string]: number } = {
  'SAVE10': 0.10,
  'LUXURY20': 0.20,
  'WELCOME15': 0.15,
  'ODESHIE25': 0.25,
};

export default function Cart() {
  const [, setLocation] = useLocation();
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');

  const subtotal = getTotalPrice();
  const discount = appliedCode ? subtotal * PROMO_CODES[appliedCode] : 0;
  const subtotalAfterDiscount = subtotal - discount;
  const tax = subtotalAfterDiscount * 0.08;
  const total = subtotalAfterDiscount + tax;

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase();
    if (!code) {
      setPromoError('Please enter a code');
      return;
    }
    if (PROMO_CODES[code]) {
      setAppliedCode(code);
      setPromoError('');
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code');
      setAppliedCode(null);
    }
  };

  const removePromoCode = () => {
    setAppliedCode(null);
    setPromoCode('');
    setPromoError('');
  };

  if (items.length === 0) {
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
            <button
              onClick={() => setLocation('/products')}
              className="text-slate-600 font-['Public_Sans'] hover:text-slate-900 transition-colors"
            >
              ← Continue Shopping
            </button>
          </div>
        </header>

        {/* Empty Cart */}
        <main className="px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg
                className="w-24 h-24 mx-auto text-slate-300 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-3">
                Your Cart is Empty
              </h1>
              <p className="text-lg text-slate-600 font-['Public_Sans'] mb-8">
                Discover our luxury collection and add items to your cart.
              </p>
            </div>

            <button
              onClick={() => setLocation('/products')}
              className="px-8 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </main>
      </div>
    );
  }

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
          <button
            onClick={() => setLocation('/products')}
            className="text-slate-600 font-['Public_Sans'] hover:text-slate-900 transition-colors"
          >
            ← Continue Shopping
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-black font-['Public_Sans'] text-slate-900 mb-8">
            Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`p-6 flex gap-6 GHS {idx !== items.length - 1 ? 'border-b border-slate-200' : ''}`}
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-['Public_Sans'] mb-4">
                        Category: {item.category}
                      </p>
                      <p className="font-semibold font-['Public_Sans'] text-slate-900">
                        GHS {item.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex flex-col items-end gap-4">
                      <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 font-['Public_Sans'] font-bold"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-['Public_Sans'] font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-slate-900 font-['Public_Sans'] font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-black font-['Public_Sans'] text-[#743b1e]">
                          GHS {(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-600 hover:text-red-700 font-['Public_Sans'] mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-8">
                <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">
                  Order Summary
                </h3>

                {/* Promo Code Section */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2 bg-slate-100 text-slate-900 rounded-lg font-['Public_Sans'] font-semibold hover:bg-slate-200 transition-colors text-sm"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-xs text-red-600 font-['Public_Sans'] mb-2">{promoError}</p>}
                  {appliedCode && (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-2 mb-4">
                      <span className="text-sm font-semibold font-['Public_Sans'] text-green-700">
                        {appliedCode} applied ({(PROMO_CODES[appliedCode] * 100).toFixed(0)}% off)
                      </span>
                      <button
                        onClick={removePromoCode}
                        className="text-green-600 hover:text-green-700 font-['Public_Sans'] text-xs font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-slate-500 font-['Public_Sans']">Try: SAVE10, WELCOME15, LUXURY20, ODESHIE25</p>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                    <span>Subtotal</span>
                    <span>GHS {subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-['Public_Sans'] font-semibold">
                      <span>Discount ({(PROMO_CODES[appliedCode!] * 100).toFixed(0)}%)</span>
                      <span>-GHS {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                    <span>Tax (8%)</span>
                    <span>GHS {tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-lg font-black font-['Public_Sans'] text-slate-900">
                    <span>Total</span>
                    <span className="text-[#743b1e]">GHS {total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setLocation('/checkout')}
                  className="w-full py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors mb-3"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => setLocation('/products')}
                  className="w-full py-3 border border-slate-200 text-slate-900 rounded-lg font-['Public_Sans'] font-semibold hover:bg-slate-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
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

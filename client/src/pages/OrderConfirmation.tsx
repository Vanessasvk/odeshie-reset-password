'use client';

import { useLocation } from 'wouter';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ORDER_ITEMS: OrderItem[] = [
  {
    id: '1',
    name: 'Kente Cloth Luxury Scarf',
    price: 450,
    quantity: 1,
    image: '/66-1605.webp',
  },
  {
    id: '2',
    name: 'Adire Indigo Wrap',
    price: 380,
    quantity: 2,
    image: '/66-1605.webp',
  },
];

export default function OrderConfirmation() {
  const [, setLocation] = useLocation();

  const subtotal = ORDER_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;
  const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
            onClick={() => setLocation('/dashboard')}
            className="px-6 py-2 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
          >
            Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-3">
              Order Confirmed!
            </h1>
            <p className="text-lg text-slate-600 font-['Public_Sans'] mb-2">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <p className="text-slate-500 font-['Public_Sans']">
              A confirmation email has been sent to your email address.
            </p>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Order Number & Status */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                Order Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Order Number</p>
                  <p className="text-xl font-bold font-['Public_Sans'] text-[#743b1e]">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Order Date</p>
                  <p className="text-lg font-semibold font-['Public_Sans'] text-slate-900">
                    {new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="font-semibold font-['Public_Sans'] text-green-600">Processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                Estimated Delivery
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Shipping Method</p>
                  <p className="text-lg font-semibold font-['Public_Sans'] text-slate-900">
                    Standard Shipping
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Expected Delivery</p>
                  <p className="text-lg font-semibold font-['Public_Sans'] text-slate-900">
                    {estimatedDelivery}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-['Public_Sans']">Tracking</p>
                  <p className="text-sm font-['Public_Sans'] text-slate-600">
                    You will receive a tracking number via email
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 mb-8">
            <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">
              Order Items
            </h3>
            <div className="space-y-6">
              {ORDER_ITEMS.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-200 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-600 font-['Public_Sans'] mb-2">
                      Quantity: {item.quantity}
                    </p>
                    <p className="font-semibold font-['Public_Sans'] text-slate-900">
                      ₵{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 mb-8">
            <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">
              Order Summary
            </h3>
            <div className="space-y-4 mb-6 pb-6 border-b border-slate-200">
              <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                <span>Subtotal</span>
                <span>₵{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                <span>Shipping (Standard)</span>
                <span>₵{shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                <span>Tax</span>
                <span>₵{tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between text-xl font-black font-['Public_Sans'] text-slate-900">
              <span>Total</span>
              <span className="text-[#743b1e]">₵{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 mb-8">
            <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
              Shipping Address
            </h3>
            <p className="text-slate-600 font-['Public_Sans'] leading-relaxed">
              Richlove Aku
              <br />
              123 Main Street
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 mb-8">
            <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
              What's Next?
            </h3>
            <ul className="space-y-3 text-slate-600 font-['Public_Sans']">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">1</span>
                <span>
                  <strong>Order Processing:</strong> Your order is being prepared for shipment. This
                  usually takes 1-2 business days.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">2</span>
                <span>
                  <strong>Tracking Number:</strong> Once your order ships, you'll receive an email with
                  a tracking number to monitor your delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">3</span>
                <span>
                  <strong>Delivery:</strong> Your package will arrive by the estimated delivery date.
                  If you have any questions, contact our support team.
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setLocation('/products')}
              className="flex-1 py-3 border border-slate-200 text-slate-900 rounded-lg font-['Public_Sans'] font-semibold hover:bg-slate-50 transition-colors"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => setLocation('/dashboard')}
              className="flex-1 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
            >
              View My Orders
            </button>
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

'use client';

import { useLocation } from 'wouter';

export default function Dashboard() {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    setLocation('/login');
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f6f6] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-['Public_Sans'] text-slate-900">ƆDESHIE</div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-2">Welcome to Your Dashboard</h1>
            <p className="text-slate-600 font-['Public_Sans']">Manage your African luxury brand and connect with global customers.</p>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1: Account Settings */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Account Settings</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">Manage your profile, security, and preferences.</p>
              <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">View Settings →</button>
            </div>

            {/* Card 2: Products */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10M8 5v10m8-10v10" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Your Products</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">Showcase and manage your luxury collections.</p>
              <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">View Products →</button>
            </div>

            {/* Card 3: Orders */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Orders</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">Track and manage customer orders.</p>
              <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">View Orders →</button>
            </div>

            {/* Card 4: Analytics */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Analytics</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">View sales and customer insights.</p>
              <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">View Analytics →</button>
            </div>

            {/* Card 5: Support */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Support</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">Get help with your account and products.</p>
              <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">Contact Support →</button>
            </div>

            {/* Card 6: Change Password */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#ec5b13]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#743b1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-2">Security</h3>
              <p className="text-slate-600 text-sm font-['Public_Sans'] mb-4">Update your password and security settings.</p>
              <button
                onClick={() => setLocation('/reset-password')}
                className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline"
              >
                Change Password →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-8 py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-xs font-['Public_Sans']">
          © 2024 ODESHIE Luxury. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

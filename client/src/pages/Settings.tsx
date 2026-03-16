import { useLocation } from 'wouter';

export default function Settings() {
  const [, setLocation] = useLocation();

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
          <button
            onClick={() => setLocation('/dashboard')}
            className="text-slate-600 font-['Public_Sans'] hover:text-slate-900 transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-8">Account Settings</h1>

          {/* Settings Sections */}
          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold font-['Public_Sans'] text-slate-900 mb-6">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  />
                </div>
                <button className="mt-4 px-6 py-2 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold font-['Public_Sans'] text-slate-900 mb-6">Privacy & Notifications</h2>
              <div className="space-y-4">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#743b1e] rounded" />
                  <span className="ml-3 font-['Public_Sans'] text-slate-700">Receive promotional emails</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#743b1e] rounded" />
                  <span className="ml-3 font-['Public_Sans'] text-slate-700">Receive order updates</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-[#743b1e] rounded" />
                  <span className="ml-3 font-['Public_Sans'] text-slate-700">Share data for personalization</span>
                </label>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-xl p-8 border border-red-200">
              <h2 className="text-2xl font-bold font-['Public_Sans'] text-red-600 mb-6">Danger Zone</h2>
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

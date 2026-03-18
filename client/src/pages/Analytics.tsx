import { useLocation } from 'wouter';

export default function Analytics() {
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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-8">Analytics</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-slate-600 text-sm font-['Public_Sans'] font-semibold mb-2">Total Sales</div>
              <div className="text-3xl font-black font-['Public_Sans'] text-slate-900">₵2,040.00</div>
              <div className="text-green-600 text-xs font-['Public_Sans'] mt-2">↑ 12% from last month</div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-slate-600 text-sm font-['Public_Sans'] font-semibold mb-2">Total Orders</div>
              <div className="text-3xl font-black font-['Public_Sans'] text-slate-900">12</div>
              <div className="text-green-600 text-xs font-['Public_Sans'] mt-2">↑ 8% from last month</div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-slate-600 text-sm font-['Public_Sans'] font-semibold mb-2">Average Order Value</div>
              <div className="text-3xl font-black font-['Public_Sans'] text-slate-900">₵170</div>
              <div className="text-green-600 text-xs font-['Public_Sans'] mt-2">↑ 5% from last month</div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="text-slate-600 text-sm font-['Public_Sans'] font-semibold mb-2">Conversion Rate</div>
              <div className="text-3xl font-black font-['Public_Sans'] text-slate-900">3.2%</div>
              <div className="text-green-600 text-xs font-['Public_Sans'] mt-2">↑ 0.5% from last month</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Sales Chart */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">Sales Over Time</h2>
              <div className="h-64 bg-slate-50 rounded-lg flex items-end justify-around px-4 py-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-[#743b1e] rounded-t" style={{ height: '120px' }}></div>
                  <span className="text-xs font-['Public_Sans'] text-slate-600">Week 1</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-[#743b1e] rounded-t" style={{ height: '180px' }}></div>
                  <span className="text-xs font-['Public_Sans'] text-slate-600">Week 2</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-[#743b1e] rounded-t" style={{ height: '150px' }}></div>
                  <span className="text-xs font-['Public_Sans'] text-slate-600">Week 3</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 bg-[#743b1e] rounded-t" style={{ height: '200px' }}></div>
                  <span className="text-xs font-['Public_Sans'] text-slate-600">Week 4</span>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">Top Products</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-['Public_Sans'] text-slate-900">Kente Cloth Luxury Scarf</span>
                  <span className="font-['Public_Sans'] font-semibold text-slate-900">8 sales</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-[#743b1e] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-['Public_Sans'] text-slate-900">Adire Indigo Wrap</span>
                  <span className="font-['Public_Sans'] font-semibold text-slate-900">4 sales</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-[#743b1e] h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-['Public_Sans'] text-slate-900">Bogolan Throw</span>
                  <span className="font-['Public_Sans'] font-semibold text-slate-900">2 sales</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-[#743b1e] h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h2 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {[
                { id: 'txn-001', date: 'March 15, 2026', product: 'Kente Cloth Luxury Scarf', amount: '₵450', status: 'Completed' },
                { id: 'txn-002', date: 'March 14, 2026', product: 'Adire Indigo Wrap', amount: '₵380', status: 'Completed' },
                { id: 'txn-003', date: 'March 13, 2026', product: 'Bogolan Throw', amount: '₵320', status: 'Pending' },
              ].map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0">
                  <div>
                    <div className="font-['Public_Sans'] font-semibold text-slate-900">{transaction.product}</div>
                    <div className="font-['Public_Sans'] text-xs text-slate-600">{transaction.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-['Public_Sans'] font-semibold text-slate-900">{transaction.amount}</div>
                    <div className={`font-['Public_Sans'] text-xs ${transaction.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

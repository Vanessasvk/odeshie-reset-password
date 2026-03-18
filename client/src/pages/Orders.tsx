import { useLocation } from 'wouter';

export default function Orders() {
  const [, setLocation] = useLocation();

  const orders = [
    {
      id: '#ORD-001',
      date: 'March 10, 2026',
      items: 'Kente Cloth Luxury Scarf',
      total: '₵450.00',
      status: 'Delivered',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: '#ORD-002',
      date: 'March 5, 2026',
      items: 'Adire Indigo Wrap (x2)',
      total: '₵760.00',
      status: 'In Transit',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: '#ORD-003',
      date: 'February 28, 2026',
      items: 'Kente Cloth Luxury Scarf, Adire Indigo Wrap',
      total: '₵830.00',
      status: 'Processing',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
  ];

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
          <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-8">Your Orders</h1>

          {/* Orders Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Order ID</th>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Date</th>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Items</th>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Total</th>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left font-semibold font-['Public_Sans'] text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-['Public_Sans'] text-slate-900 font-semibold">{order.id}</td>
                    <td className="px-6 py-4 font-['Public_Sans'] text-slate-600">{order.date}</td>
                    <td className="px-6 py-4 font-['Public_Sans'] text-slate-600">{order.items}</td>
                    <td className="px-6 py-4 font-['Public_Sans'] text-slate-900 font-semibold">{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold font-['Public_Sans'] ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-[#743b1e] font-semibold font-['Public_Sans'] hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

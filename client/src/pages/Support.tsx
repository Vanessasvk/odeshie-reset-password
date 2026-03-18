import { useState } from 'react';
import { useLocation } from 'wouter';

export default function Support() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting support. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
          <h1 className="text-4xl font-black font-['Public_Sans'] text-slate-900 mb-8">Customer Support</h1>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold font-['Public_Sans'] text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'How long does shipping take?',
                  answer: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days.',
                },
                {
                  question: 'What is your return policy?',
                  answer: 'We offer a 30-day return policy for all products in original condition with original packaging.',
                },
                {
                  question: 'Do you offer international shipping?',
                  answer: 'Yes, we ship to over 195 countries worldwide. Shipping costs vary by location.',
                },
                {
                  question: 'How can I track my order?',
                  answer: 'You can track your order using the tracking number sent to your email after shipment.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-4 last:border-b-0">
                  <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">{faq.question}</h3>
                  <p className="font-['Public_Sans'] text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold font-['Public_Sans'] text-slate-900 mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Issue</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="product">Product Question</option>
                  <option value="return">Return/Refund</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] resize-none"
                  placeholder="Please describe your issue or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">Email</h3>
              <p className="font-['Public_Sans'] text-slate-600">support@odeshie.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">Phone</h3>
              <p className="font-['Public_Sans'] text-slate-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="text-2xl mb-2">🕐</div>
              <h3 className="font-bold font-['Public_Sans'] text-slate-900 mb-2">Hours</h3>
              <p className="font-['Public_Sans'] text-slate-600">Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

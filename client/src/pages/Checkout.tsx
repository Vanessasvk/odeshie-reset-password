'use client';

import { useState } from 'react';
import { useLocation } from 'wouter';
import { useCart } from '@/contexts/CartContext';

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { items: cartItems } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment' | 'review'>('shipping');

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Ghana',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    bankName: '',
    accountNumber: '',
    momoNumber: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = formData.shippingMethod === 'express' ? 25 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateShipping = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.paymentMethod === 'card') {
      if (!formData.cardName) newErrors.cardName = 'Cardholder name is required';
      if (!formData.cardNumber || formData.cardNumber.length < 13)
        newErrors.cardNumber = 'Valid card number is required';
      if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCVC || formData.cardCVC.length < 3)
        newErrors.cardCVC = 'Valid CVC is required';
    } else if (formData.paymentMethod === 'bank') {
      if (!formData.bankName) newErrors.bankName = 'Bank name is required';
      if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
    } else if (formData.paymentMethod === 'momo') {
      if (!formData.momoNumber) newErrors.momoNumber = 'Mobile Money number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 'shipping') {
      if (validateShipping()) {
        setStep('payment');
      }
    } else if (step === 'payment') {
      if (validatePayment()) {
        setStep('review');
      }
    }
  };

  const handlePlaceOrder = () => {
    setLocation('/order-confirmation');
  };

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
          {/* Progress Steps */}
          <div className="mb-12 flex justify-between items-center">
            {['shipping', 'payment', 'review'].map((s, idx) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-['Public_Sans'] ${
                    step === s
                      ? 'bg-[#743b1e] text-white'
                      : ['shipping', 'payment', 'review'].indexOf(step) > idx
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {['shipping', 'payment', 'review'].indexOf(step) > idx ? '✓' : idx + 1}
                </div>
                <div className="ml-3 font-['Public_Sans']">
                  <div className="text-sm text-slate-500">
                    {s === 'shipping' ? 'Shipping' : s === 'payment' ? 'Payment' : 'Review'}
                  </div>
                </div>
                {idx < 2 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      ['shipping', 'payment', 'review'].indexOf(step) > idx
                        ? 'bg-green-500'
                        : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                {/* Shipping Step */}
                {step === 'shipping' && (
                  <div>
                    <h2 className="text-2xl font-black font-['Public_Sans'] text-slate-900 mb-6">
                      Shipping Address
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.firstName ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Kofi"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.lastName ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Mensah"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="kofi.mensah@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="+233 24 123 4567"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                          errors.address ? 'border-red-500' : 'border-slate-200'
                        }`}
                        placeholder="14 Independence Avenue"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.city ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Accra"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          Region
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.state ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="Greater Accra"
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.state}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          Digital Address
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.zipCode ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="GA-123-4567"
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e]"
                        >
                          <option>Ghana</option>
                          <option>Nigeria</option>
                          <option>South Africa</option>
                          <option>Kenya</option>
                          <option>Ivory Coast</option>
                          <option>Senegal</option>
                          <option>Ethiopia</option>
                          <option>Tanzania</option>
                          <option>Uganda</option>
                          <option>Rwanda</option>
                          <option>──────────</option>
                          <option>Afghanistan</option>
                          <option>Albania</option>
                          <option>Algeria</option>
                          <option>Andorra</option>
                          <option>Angola</option>
                          <option>Argentina</option>
                          <option>Armenia</option>
                          <option>Australia</option>
                          <option>Austria</option>
                          <option>Azerbaijan</option>
                          <option>Bahamas</option>
                          <option>Bahrain</option>
                          <option>Bangladesh</option>
                          <option>Barbados</option>
                          <option>Belarus</option>
                          <option>Belgium</option>
                          <option>Belize</option>
                          <option>Benin</option>
                          <option>Bhutan</option>
                          <option>Bolivia</option>
                          <option>Bosnia and Herzegovina</option>
                          <option>Botswana</option>
                          <option>Brazil</option>
                          <option>Brunei</option>
                          <option>Bulgaria</option>
                          <option>Burkina Faso</option>
                          <option>Burundi</option>
                          <option>Cambodia</option>
                          <option>Cameroon</option>
                          <option>Canada</option>
                          <option>Cape Verde</option>
                          <option>Central African Republic</option>
                          <option>Chad</option>
                          <option>Chile</option>
                          <option>China</option>
                          <option>Colombia</option>
                          <option>Comoros</option>
                          <option>Congo</option>
                          <option>Costa Rica</option>
                          <option>Croatia</option>
                          <option>Cuba</option>
                          <option>Cyprus</option>
                          <option>Czech Republic</option>
                          <option>Denmark</option>
                          <option>Djibouti</option>
                          <option>Dominica</option>
                          <option>Dominican Republic</option>
                          <option>Ecuador</option>
                          <option>Egypt</option>
                          <option>El Salvador</option>
                          <option>Equatorial Guinea</option>
                          <option>Eritrea</option>
                          <option>Estonia</option>
                          <option>Ethiopia</option>
                          <option>Fiji</option>
                          <option>Finland</option>
                          <option>France</option>
                          <option>Gabon</option>
                          <option>Gambia</option>
                          <option>Georgia</option>
                          <option>Germany</option>
                          <option>Ghana</option>
                          <option>Greece</option>
                          <option>Grenada</option>
                          <option>Guatemala</option>
                          <option>Guinea</option>
                          <option>Guinea-Bissau</option>
                          <option>Guyana</option>
                          <option>Haiti</option>
                          <option>Honduras</option>
                          <option>Hungary</option>
                          <option>Iceland</option>
                          <option>India</option>
                          <option>Indonesia</option>
                          <option>Iran</option>
                          <option>Iraq</option>
                          <option>Ireland</option>
                          <option>Israel</option>
                          <option>Italy</option>
                          <option>Jamaica</option>
                          <option>Japan</option>
                          <option>Jordan</option>
                          <option>Kazakhstan</option>
                          <option>Kenya</option>
                          <option>Kiribati</option>
                          <option>Kosovo</option>
                          <option>Kuwait</option>
                          <option>Kyrgyzstan</option>
                          <option>Laos</option>
                          <option>Latvia</option>
                          <option>Lebanon</option>
                          <option>Lesotho</option>
                          <option>Liberia</option>
                          <option>Libya</option>
                          <option>Liechtenstein</option>
                          <option>Lithuania</option>
                          <option>Luxembourg</option>
                          <option>Madagascar</option>
                          <option>Malawi</option>
                          <option>Malaysia</option>
                          <option>Maldives</option>
                          <option>Mali</option>
                          <option>Malta</option>
                          <option>Marshall Islands</option>
                          <option>Mauritania</option>
                          <option>Mauritius</option>
                          <option>Mexico</option>
                          <option>Micronesia</option>
                          <option>Moldova</option>
                          <option>Monaco</option>
                          <option>Mongolia</option>
                          <option>Montenegro</option>
                          <option>Morocco</option>
                          <option>Mozambique</option>
                          <option>Myanmar</option>
                          <option>Namibia</option>
                          <option>Nauru</option>
                          <option>Nepal</option>
                          <option>Netherlands</option>
                          <option>New Zealand</option>
                          <option>Nicaragua</option>
                          <option>Niger</option>
                          <option>Nigeria</option>
                          <option>North Korea</option>
                          <option>North Macedonia</option>
                          <option>Norway</option>
                          <option>Oman</option>
                          <option>Pakistan</option>
                          <option>Palau</option>
                          <option>Palestine</option>
                          <option>Panama</option>
                          <option>Papua New Guinea</option>
                          <option>Paraguay</option>
                          <option>Peru</option>
                          <option>Philippines</option>
                          <option>Poland</option>
                          <option>Portugal</option>
                          <option>Qatar</option>
                          <option>Romania</option>
                          <option>Russia</option>
                          <option>Rwanda</option>
                          <option>Saint Kitts and Nevis</option>
                          <option>Saint Lucia</option>
                          <option>Saint Vincent and the Grenadines</option>
                          <option>Samoa</option>
                          <option>San Marino</option>
                          <option>Sao Tome and Principe</option>
                          <option>Saudi Arabia</option>
                          <option>Senegal</option>
                          <option>Serbia</option>
                          <option>Seychelles</option>
                          <option>Sierra Leone</option>
                          <option>Singapore</option>
                          <option>Slovakia</option>
                          <option>Slovenia</option>
                          <option>Solomon Islands</option>
                          <option>Somalia</option>
                          <option>South Africa</option>
                          <option>South Korea</option>
                          <option>South Sudan</option>
                          <option>Spain</option>
                          <option>Sri Lanka</option>
                          <option>Sudan</option>
                          <option>Suriname</option>
                          <option>Sweden</option>
                          <option>Switzerland</option>
                          <option>Syria</option>
                          <option>Taiwan</option>
                          <option>Tajikistan</option>
                          <option>Tanzania</option>
                          <option>Thailand</option>
                          <option>Timor-Leste</option>
                          <option>Togo</option>
                          <option>Tonga</option>
                          <option>Trinidad and Tobago</option>
                          <option>Tunisia</option>
                          <option>Turkey</option>
                          <option>Turkmenistan</option>
                          <option>Tuvalu</option>
                          <option>Uganda</option>
                          <option>Ukraine</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Uruguay</option>
                          <option>Uzbekistan</option>
                          <option>Vanuatu</option>
                          <option>Vatican City</option>
                          <option>Venezuela</option>
                          <option>Vietnam</option>
                          <option>Yemen</option>
                          <option>Zambia</option>
                          <option>Zimbabwe</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-4">
                        Shipping Method
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="standard"
                            checked={formData.shippingMethod === 'standard'}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-['Public_Sans']">
                            Standard Shipping (5-7 business days) - $10
                          </span>
                        </label>
                        <label className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value="express"
                            checked={formData.shippingMethod === 'express'}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-['Public_Sans']">
                            Express Shipping (2-3 business days) - $25
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      onClick={handleNextStep}
                      className="w-full py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}

                {/* Payment Step */}
                {step === 'payment' && (
                  <div>
                    <h2 className="text-2xl font-black font-['Public_Sans'] text-slate-900 mb-6">
                      Payment Information
                    </h2>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-4">
                        Payment Method
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-['Public_Sans']">
                            💳 Credit/Debit Card
                          </span>
                        </label>
                        <label className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === 'bank'}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-['Public_Sans']">
                            🏦 Bank Transfer
                          </span>
                        </label>
                        <label className="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="momo"
                            checked={formData.paymentMethod === 'momo'}
                            onChange={handleInputChange}
                            className="w-4 h-4"
                          />
                          <span className="ml-3 font-['Public_Sans']">
                            📱 Mobile Money (Momo)
                          </span>
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <>
                        <div className="mb-4">
                          <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                              errors.cardName ? 'border-red-500' : 'border-slate-200'
                            }`}
                            placeholder="Kofi Mensah"
                          />
                          {errors.cardName && (
                            <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                              {errors.cardName}
                            </p>
                          )}
                        </div>

                        <div className="mb-4">
                          <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                              errors.cardNumber ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                          {errors.cardNumber && (
                            <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                              {errors.cardNumber}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                                errors.cardExpiry ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                            {errors.cardExpiry && (
                              <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                                {errors.cardExpiry}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                              CVC
                            </label>
                            <input
                              type="text"
                              name="cardCVC"
                              value={formData.cardCVC}
                              onChange={handleInputChange}
                              placeholder="123"
                              className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                                errors.cardCVC ? 'border-red-500' : 'border-slate-200'
                              }`}
                            />
                            {errors.cardCVC && (
                              <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                                {errors.cardCVC}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {formData.paymentMethod === 'bank' && (
                      <>
                        <div className="mb-4">
                          <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                            Bank Name
                          </label>
                          <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                              errors.bankName ? 'border-red-500' : 'border-slate-200'
                            }`}
                            placeholder="e.g., Ghana Commercial Bank"
                          />
                          {errors.bankName && (
                            <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                              {errors.bankName}
                            </p>
                          )}
                        </div>

                        <div className="mb-6">
                          <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                            Account Number
                          </label>
                          <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                              errors.accountNumber ? 'border-red-500' : 'border-slate-200'
                            }`}
                            placeholder="Your account number"
                          />
                          {errors.accountNumber && (
                            <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                              {errors.accountNumber}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    {formData.paymentMethod === 'momo' && (
                      <div className="mb-6">
                        <label className="block text-sm font-semibold font-['Public_Sans'] text-slate-900 mb-2">
                          Mobile Money Number
                        </label>
                        <input
                          type="tel"
                          name="momoNumber"
                          value={formData.momoNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg font-['Public_Sans'] focus:outline-none focus:ring-2 focus:ring-[#743b1e] ${
                            errors.momoNumber ? 'border-red-500' : 'border-slate-200'
                          }`}
                          placeholder="e.g., +233 24 123 4567"
                        />
                        {errors.momoNumber && (
                          <p className="text-red-500 text-sm mt-1 font-['Public_Sans']">
                            {errors.momoNumber}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep('shipping')}
                        className="flex-1 py-3 border border-slate-200 text-slate-900 rounded-lg font-['Public_Sans'] font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleNextStep}
                        className="flex-1 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
                      >
                        Review Order
                      </button>
                    </div>
                  </div>
                )}

                {/* Review Step */}
                {step === 'review' && (
                  <div>
                    <h2 className="text-2xl font-black font-['Public_Sans'] text-slate-900 mb-6">
                      Order Review
                    </h2>

                    <div className="mb-8 pb-8 border-b border-slate-200">
                      <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                        Shipping Address
                      </h3>
                      <p className="text-slate-600 font-['Public_Sans']">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                        <br />
                        {formData.country}
                        <br />
                        {formData.email}
                        <br />
                        {formData.phone}
                      </p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-slate-200">
                      <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                        Shipping Method
                      </h3>
                      <p className="text-slate-600 font-['Public_Sans']">
                        {formData.shippingMethod === 'express'
                          ? 'Express Shipping (2-3 business days)'
                          : 'Standard Shipping (5-7 business days)'}
                      </p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-slate-200">
                      <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-4">
                        Payment Method
                      </h3>
                      <p className="text-slate-600 font-['Public_Sans']">
                        Card ending in {formData.cardNumber.slice(-4)}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep('payment')}
                        className="flex-1 py-3 border border-slate-200 text-slate-900 rounded-lg font-['Public_Sans'] font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        className="flex-1 py-3 bg-[#743b1e] text-white rounded-lg font-['Public_Sans'] font-semibold hover:bg-[#8b4623] transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-slate-200 sticky top-8">
                <h3 className="text-lg font-bold font-['Public_Sans'] text-slate-900 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-slate-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-slate-600 font-['Public_Sans']">
                      <div>
                        <p className="font-semibold text-slate-900">{item.name}</p>
                        <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-['Public_Sans']">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex justify-between text-lg font-black font-['Public_Sans'] text-slate-900">
                    <span>Total</span>
                    <span className="text-[#743b1e]">${total.toFixed(2)}</span>
                  </div>
                </div>
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

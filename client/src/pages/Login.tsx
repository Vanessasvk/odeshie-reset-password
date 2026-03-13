'use client';

import { useState } from 'react';
import { useLocation } from 'wouter';

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = email && password;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setLocation('/dashboard');
    }
  };

  return (
    <div className="w-[1280px] min-h-[1024px] bg-[#f8f6f6] inline-flex flex-col justify-start items-start">
      <div className="self-stretch min-h-[1024px] inline-flex justify-start items-start">
        {/* Left Side: Visual/Branding */}
        <div className="w-[768px] self-stretch relative bg-[#ec5b13]/10 flex justify-start items-start overflow-hidden">
          <img className="w-[768px] h-[1024px] left-0 top-0 absolute" src="/66-1605.webp" alt="African luxury textile" />
          <div className="w-[768px] h-[1024px] left-0 top-0 absolute bg-gradient-to-l from-[#221610]/80 via-[#221610]/0 to-[#221610]/0" />
          <div className="self-stretch p-20 inline-flex flex-col justify-between items-start w-full">
            <div className="self-stretch inline-flex justify-start items-center gap-3">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-white text-2xl font-bold font-['Public_Sans']">ƆDESHIE</div>
              </div>
            </div>
            <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-white text-5xl font-extrabold font-['Public_Sans']">Welcome back to<br/>your seller<br/>dashboard.</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-200 text-lg font-normal font-['Public_Sans']">Sign in to manage your African<br/>luxury brand and connect with<br/>global customers.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-[512px] self-stretch px-32 py-12 bg-[#f8f6f6] inline-flex flex-col justify-center items-start">
          <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-900 text-3xl font-black font-['Public_Sans']">Sign In</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-600 text-base font-normal font-['Public_Sans']">Enter your credentials to access<br/>your seller account.</div>
              </div>
            </div>

            <form className="self-stretch pb-10 flex flex-col justify-start items-start gap-6" onSubmit={handleLogin}>
              {/* Email Field */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-700 text-sm font-semibold font-['Public_Sans']">Email Address</div>
                </div>
                <div className="self-stretch relative inline-flex justify-center items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 pl-4 pr-12 pt-[18px] pb-[19px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start overflow-hidden w-full"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-700 text-sm font-semibold font-['Public_Sans']">Password</div>
                </div>
                <div className="self-stretch relative inline-flex justify-center items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 pl-4 pr-12 pt-[18px] pb-[19px] bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start overflow-hidden w-full"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="right-4 top-1/2 -translate-y-1/2 absolute inline-flex flex-col justify-center items-center cursor-pointer"
                  >
                    <img className="w-[22px] h-[15px]" src="/66-1635.svg" alt="Toggle password" />
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="self-stretch flex justify-end">
                <button
                  type="button"
                  onClick={() => setLocation('/reset-password')}
                  className="text-[#743b1e] text-sm font-medium font-['Public_Sans'] hover:underline bg-none border-none cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className="self-stretch py-4 relative bg-[#743b1e] rounded-xl inline-flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8b4623] transition-colors"
              >
                <div className="w-64 h-14 left-0 top-0 absolute bg-white/0 rounded-xl shadow-[0px_4px_6px_-4px_rgba(236,91,19,0.20)] shadow-[0px_10px_15px_-3px_rgba(236,91,19,0.20)]" />
                <div className="inline-flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-white text-base font-bold font-['Public_Sans']">Sign In</div>
                </div>
                <div className="inline-flex flex-col justify-start items-center">
                  <img className="w-5 h-5" src="/66-1671.svg" alt="Arrow" />
                </div>
              </button>
            </form>

            <div className="self-stretch pt-8 border-t border-slate-200 flex flex-col justify-start items-start">
              <div className="self-stretch flex flex-col justify-start items-center">
                <div className="text-center justify-center text-slate-400 text-xs font-normal font-['Public_Sans']">© 2024 ODESHIE Luxury. All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

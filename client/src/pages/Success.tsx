'use client';

import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function Success() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation('/login');
    }, 5000);
    return () => clearTimeout(timer);
  }, [setLocation]);

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
                <div className="self-stretch justify-center text-white text-5xl font-extrabold font-['Public_Sans']">Your account is<br/>now secure.</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-200 text-lg font-normal font-['Public_Sans']">Your password has been successfully<br/>reset. You can now sign in with your<br/>new password and continue managing<br/>your African luxury brand.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Success Message */}
        <div className="w-[512px] self-stretch px-32 py-12 bg-[#f8f6f6] inline-flex flex-col justify-center items-start">
          <div className="w-full max-w-[448px] flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-center gap-6">
              {/* Success Icon */}
              <div className="flex justify-center items-center">
                <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="self-stretch flex flex-col justify-start items-center gap-3">
                <div className="self-stretch justify-center text-slate-900 text-3xl font-black font-['Public_Sans'] text-center">Password Reset<br/>Successful</div>
                <div className="self-stretch justify-center text-slate-600 text-base font-normal font-['Public_Sans'] text-center">Your password has been securely updated.<br/>You will be redirected to the login page<br/>in a few moments.</div>
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <button
                onClick={() => setLocation('/login')}
                className="self-stretch py-4 relative bg-[#743b1e] rounded-xl inline-flex justify-center items-center gap-2 hover:bg-[#8b4623] transition-colors"
              >
                <div className="w-64 h-14 left-0 top-0 absolute bg-white/0 rounded-xl shadow-[0px_4px_6px_-4px_rgba(236,91,19,0.20)] shadow-[0px_10px_15px_-3px_rgba(236,91,19,0.20)]" />
                <div className="inline-flex flex-col justify-start items-center">
                  <div className="text-center justify-center text-white text-base font-bold font-['Public_Sans']">Return to Login</div>
                </div>
                <div className="inline-flex flex-col justify-start items-center">
                  <img className="w-5 h-5" src="/66-1671.svg" alt="Arrow" />
                </div>
              </button>

              <button
                onClick={() => setLocation('/login')}
                className="self-stretch inline-flex justify-center items-center gap-2 bg-none border-none cursor-pointer"
              >
                <div className="inline-flex flex-col justify-start items-center">
                  <img className="w-3 h-3" src="/66-1674.svg" alt="Back arrow" />
                </div>
                <div className="text-center justify-center text-slate-500 text-sm font-medium font-['Public_Sans']">Back to Login</div>
              </button>
            </div>

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

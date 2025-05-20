import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-8 md:pt-40 md:pb-8">
      <div className="absolute inset-0 overflow-hidden">
        
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
           Beyond Monthly Bills:
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
             The Trustless Subscription Network
          </span>
        </h1>
        
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">
          Tokentally unlocks a new frontier where autonomous subscription systems operate trustlessly on-chain — connecting creators, platforms, and users without middlemen or centralized control.</p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-white px-8 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Join Waitlist
          </a>
          <a
            href="#features"
            className="rounded-full bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Documentation
          </a>
        </div>
        <div className="mt-16 relative">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
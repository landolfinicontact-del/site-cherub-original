import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Reviews from './components/Reviews';
import Results from './components/Results';
import Footer from './components/Footer';
import { BRANDS } from './constants';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#cb5600] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Social Proof / Trust Bar - Infinite Scroll */}
        <div className="py-10 border-y border-white/5 bg-neutral-900/30 overflow-hidden">
          <div className="container mx-auto px-6 mb-8">
            <p className="text-center text-gray-500 text-sm uppercase tracking-widest">Ils nous font confiance</p>
          </div>
          
          <div className="relative w-full overflow-hidden">
            {/* Gradient masks for smooth fade in/out at edges */}
            <div className="absolute top-0 left-0 w-10 md:w-32 h-full bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-10 md:w-32 h-full bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {/* Original Set */}
              <div className="flex items-center gap-16 px-8">
                 {BRANDS.map((brand, i) => (
                   <span key={`a-${i}`} className="text-xl md:text-2xl font-display font-bold text-gray-600 whitespace-nowrap hover:text-[#cb5600] transition-colors cursor-default select-none uppercase">
                     {brand}
                   </span>
                 ))}
              </div>
              {/* Duplicate Set for Seamless Loop */}
              <div className="flex items-center gap-16 px-8">
                 {BRANDS.map((brand, i) => (
                   <span key={`b-${i}`} className="text-xl md:text-2xl font-display font-bold text-gray-600 whitespace-nowrap hover:text-[#cb5600] transition-colors cursor-default select-none uppercase">
                     {brand}
                   </span>
                 ))}
              </div>
               {/* Triplicate Set for safety on wide screens */}
               <div className="flex items-center gap-16 px-8">
                 {BRANDS.map((brand, i) => (
                   <span key={`c-${i}`} className="text-xl md:text-2xl font-display font-bold text-gray-600 whitespace-nowrap hover:text-[#cb5600] transition-colors cursor-default select-none uppercase">
                     {brand}
                   </span>
                 ))}
              </div>
               <div className="flex items-center gap-16 px-8">
                 {BRANDS.map((brand, i) => (
                   <span key={`d-${i}`} className="text-xl md:text-2xl font-display font-bold text-gray-600 whitespace-nowrap hover:text-[#cb5600] transition-colors cursor-default select-none uppercase">
                     {brand}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </div>

        <Services />
        <Results />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
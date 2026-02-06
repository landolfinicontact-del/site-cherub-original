import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Notre arsenal <span className="text-[#cb5600]">tactique</span>
          </h2>
          <div className="w-24 h-1 bg-[#cb5600]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 md:p-12 bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#cb5600]/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#cb5600]/0 via-[#cb5600]/0 to-[#cb5600]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:border-[#cb5600] group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white group-hover:text-[#cb5600] transition-colors" />
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
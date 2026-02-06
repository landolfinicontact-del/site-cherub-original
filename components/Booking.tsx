import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { CALENDLY_LINK } from '../constants';
import Button from './Button';

const Booking: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cb5600] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Typography Harmonization: Aligned sizes with Services & Results sections (text-3xl md:text-5xl) */}
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 tracking-tight">
              Prêt à scaler ? <br />
              <span className="text-[#cb5600]">Parlons business.</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Réserve ton <strong className="text-white">Café Virtuel</strong> de 30 minutes. 
              Pas de pitch commercial agressif, juste un audit clair de tes opportunités de croissance actuelles.
            </p>

            <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto lg:mx-0">
              {[
                "Audit rapide de ton compte publicitaire",
                "Pistes d'amélioration créative immédiates",
                "Projection de rentabilité (Media Planning)"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#cb5600] mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button href={CALENDLY_LINK} icon>
                Réserve ton créneau maintenant
              </Button>
            </div>
          </div>

          {/* Right Column: Visual CTA Card */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:border-[#cb5600]/30 transition-all duration-500">
              {/* Decorative Calendar Visual */}
              <div className="absolute -right-10 -top-10 text-[#cb5600]/5 rotate-12 pointer-events-none">
                 <Calendar size={300} strokeWidth={0.5} />
              </div>

              <div className="relative z-10 flex flex-col h-full min-h-[300px] justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-[#cb5600]/10 px-3 py-1 rounded-full text-[#cb5600] text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#cb5600] animate-pulse"/>
                    <span>Créneaux limités</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Session Stratégique
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Gratuit • 30 Minutes • Google Meet
                  </p>
                </div>

                <div className="mt-8">
                   {/* Mobile visible button */}
                  <Button href={CALENDLY_LINK} fullWidth>
                    Sélectionner une date
                  </Button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    En cliquant, tu accèderas directement à mon agenda Calendly.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
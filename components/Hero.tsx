import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';
import { CALENDLY_LINK } from '../constants';

// Photos professionnelles "style LinkedIn" (16 avatars : 8 Hommes / 8 Femmes alternés)
const AVATARS = [
  "https://images.unsplash.com/photo-1560250097-0b9358e1b35a?fit=crop&w=150&h=150", // Homme 1
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=150&h=150", // Femme 1
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=150&h=150", // Homme 2
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=150&h=150", // Femme 2
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150", // Homme 3
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?fit=crop&w=150&h=150", // Femme 3
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150", // Homme 4
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&h=150", // Femme 4
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150", // Homme 5
  "https://images.unsplash.com/photo-1598550835828-ac45b29b3094?fit=crop&w=150&h=150", // Femme 5
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=150&h=150", // Homme 6
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=150&h=150", // Femme 6
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?fit=crop&w=150&h=150", // Homme 7
  "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?fit=crop&w=150&h=150", // Femme 7
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?fit=crop&w=150&h=150", // Homme 8 (Nouveau)
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=150&h=150", // Femme 8 (Nouveau)
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#cb5600] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-900 rounded-full blur-[100px] opacity-10" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Social Proof Section */}
        <div className="flex flex-col items-center justify-center mb-10 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <span className="text-white font-medium text-lg tracking-tight">
              +30 clients accompagnés
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center -space-x-3 md:-space-x-4 px-4">
            {AVATARS.map((src, i) => (
              <div key={i} className="relative group transition-all duration-300 hover:z-20 hover:-translate-y-2">
                <img 
                  src={src} 
                  alt={`Client ${i + 1}`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black object-cover ring-2 ring-white/10 group-hover:ring-[#cb5600] transition-all bg-neutral-800"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="inline-block px-4 py-1 mb-6 border border-[#cb5600]/30 rounded-full bg-[#cb5600]/10 backdrop-blur-sm">
          <span className="text-[#cb5600] font-display font-bold text-xs tracking-wider uppercase">Agence Social Ads</span>
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 text-white">
          On augmente <span className="text-[#cb5600]">x5</span> <br />
          ton acquisition clients <br />
          en <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">40 jours</span> sur Meta Ads
        </h1>

        <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous transformons ton budget publicitaire en revenus mesurables. 
          Stratégies d'acquisition <span className="text-[#cb5600]">agressives</span> et créatives <span className="text-[#cb5600]">audacieuses</span> pour marques e-commerces ambitieuses.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={CALENDLY_LINK} icon>
            Lancer l'audit gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

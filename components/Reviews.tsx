import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Thomas D.",
    role: "Fondateur, DNVB Mode",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100", // Homme
    text: "Une approche data-driven qui change tout. On a doublé notre ROAS en 45 jours. L'équipe est ultra réactive.",
  },
  {
    name: "Sophie M.",
    role: "CMO, Marque Cosmétique",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=100&h=100", // Femme
    text: "Les créas UGC sont d'une qualité exceptionnelle. C'est ce qui nous manquait pour passer un cap sur TikTok et Meta.",
  },
  {
    name: "Julien R.",
    role: "CEO, Home & Living",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100", // Homme
    text: "Le tracking server-side a sauvé notre acquisition post-iOS14. Un partenaire de croissance indispensable.",
  },
  {
    name: "Marie L.",
    role: "Fondatrice, Joaillerie",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=100&h=100", // Femme
    text: "Enfin une agence qui comprend les enjeux e-commerce actuels. Transparence totale et résultats au rendez-vous.",
  },
  {
    name: "Lucas P.",
    role: "CEO, Tech Accessories",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=100&h=100", // Homme
    text: "Leur expertise sur le testing créatif a ouvert de nouveaux canaux d'acquisition incroyables pour nous.",
  },
  {
    name: "Emma B.",
    role: "Fondatrice, Mode Éthique",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=100&h=100", // Femme
    text: "Une équipe à l'écoute qui a su retranscrire nos valeurs dans des publicités performantes. +150% de CA en 3 mois.",
  },
  {
    name: "David K.",
    role: "Dir. Marketing, Nutrition",
    image: "https://images.unsplash.com/photo-1560250097-0b9358e1b35a?fit=crop&w=100&h=100", // Homme
    text: "Le scaling vertical sur Facebook Ads n'a plus de secret pour eux. On a stabilisé un ROAS de 4 sur de gros volumes.",
  },
  {
    name: "Chloé V.",
    role: "CEO, Univers Enfant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=100&h=100", // Femme
    text: "La refonte de notre stratégie créative a été game changer. Les vidéos UGC cartonnent sur TikTok.",
  },
  {
    name: "Maxime G.",
    role: "Fondateur, Food & Beverage",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100", // Homme
    text: "Excellente gestion du tracking. On a enfin une vision claire de notre attribution et de nos coûts d'acquisition.",
  },
  {
    name: "Sarah L.",
    role: "CMO, Bien-être",
    image: "https://images.unsplash.com/photo-1598550835828-ac45b29b3094?fit=crop&w=100&h=100", // Femme
    text: "Une agence pro-active. Ils ne se contentent pas de gérer, ils proposent constamment de nouveaux axes de croissance.",
  },
  {
    name: "Alexandre M.",
    role: "CEO, Auto & Moto",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?fit=crop&w=100&h=100", // Homme
    text: "On pensait avoir atteint un plafond de verre. Azzione l'a explosé en optimisant notre structure de compte.",
  },
  {
    name: "Julie T.",
    role: "Fondatrice, Animalerie",
    image: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?fit=crop&w=100&h=100", // Femme
    text: "Des résultats concrets et rapides. Notre communauté s'est agrandie et les ventes ont suivi. Je recommande.",
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
                Nos clients <span className="text-[#cb5600]">témoignent</span>
              </h2>
              <p className="text-gray-400">
                La satisfaction de nos partenaires e-commerçants est notre priorité.
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-[#202124] px-4 py-2 rounded-lg border border-white/5 shadow-lg">
               <GoogleIcon />
               <div className="flex gap-0.5">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                 ))}
               </div>
               <span className="text-white font-medium text-sm ml-1">5.0/5</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {REVIEWS.map((review, i) => (
             <div key={i} className="bg-[#18181b] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-1">
                {/* Google Logo Watermark */}
                <div className="absolute top-4 right-4 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                  <GoogleIcon />
                </div>

                <div className="flex items-center gap-3 mb-4 mt-1">
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed flex-grow font-sans">
                  "{review.text}"
                </p>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};

export default Reviews;
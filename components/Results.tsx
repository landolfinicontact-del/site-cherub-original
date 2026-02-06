import React from 'react';
import { TrendingUp, ArrowUpDown, HelpCircle, MoreHorizontal, Calendar, ChevronDown, Filter, PieChart, Wallet } from 'lucide-react';
import { BRANDS } from '../constants';

const Results: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#cb5600]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">
            La preuve par les <span className="text-[#cb5600]">chiffres</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Une puissance de frappe validée. Nous pilotons des budgets publicitaires conséquents avec une exigence de rentabilité absolue.
            <br />
            <span className="text-sm opacity-60 mt-2 block">(Données consolidées de nos comptes Business Manager)</span>
          </p>
        </div>

        <div className="flex flex-col gap-12 mb-24">
          
          {/* DASHBOARD 1: ADVERTISING SPEND (3.2M€) */}
          <div className="w-full max-w-5xl mx-auto">
             <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                   <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">Global Ad Spend • Monitoring</span>
                </div>
             </div>
             
             <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5">
                {/* Fake Browser Header */}
                <div className="bg-[#252525] border-b border-white/5 px-4 py-3 flex items-center gap-4">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                   </div>
                   <div className="flex-1 bg-[#1a1a1a] h-6 rounded md:w-64 max-w-xs mx-auto flex items-center justify-center text-[10px] text-gray-500 font-mono">
                      business.manager/global-overview
                   </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 md:p-8">
                   <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
                      <div>
                         <div className="flex items-center gap-2 text-gray-400 mb-1">
                            <Wallet size={16} className="text-[#cb5600]" />
                            <span className="text-sm font-medium uppercase tracking-wide">Budget Publicitaire Géré</span>
                            <HelpCircle size={14} />
                         </div>
                         <div className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight flex items-baseline gap-2">
                            3,2 M€
                            <span className="text-sm font-sans font-normal text-gray-500 translate-y-[-4px]">investis cette année</span>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="text-sm text-gray-400">ROAS Global Moyen</span>
                         <div className="text-2xl font-medium text-green-400 flex items-center justify-end gap-1">
                            <TrendingUp size={18} />
                            4.54
                         </div>
                      </div>
                   </div>

                   {/* Graph Area */}
                   <div className="relative h-64 w-full bg-gradient-to-b from-[#cb5600]/10 to-transparent rounded-lg border-t border-[#cb5600]/20">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                         {/* Grid Lines */}
                         <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" strokeOpacity="0.05" />
                         <line x1="0" y1="40%" x2="100%" y2="40%" stroke="white" strokeOpacity="0.05" />
                         <line x1="0" y1="60%" x2="100%" y2="60%" stroke="white" strokeOpacity="0.05" />
                         <line x1="0" y1="80%" x2="100%" y2="80%" stroke="white" strokeOpacity="0.05" />

                         <path 
                           d="M0,250 C50,230 100,200 150,210 C200,220 250,150 300,160 C350,180 400,100 450,110 C500,120 550,50 600,70 C650,90 700,40 750,50 C800,60 850,20 900,30 L900,256 L0,256 Z" 
                           fill="url(#gradientSpend)" 
                           className="opacity-30"
                         />
                         <defs>
                            <linearGradient id="gradientSpend" x1="0%" y1="0%" x2="0%" y2="100%">
                               <stop offset="0%" stopColor="#cb5600" stopOpacity="0.5" />
                               <stop offset="100%" stopColor="#cb5600" stopOpacity="0" />
                            </linearGradient>
                         </defs>
                         <path 
                           d="M0,250 C50,230 100,200 150,210 C200,220 250,150 300,160 C350,180 400,100 450,110 C500,120 550,50 600,70 C650,90 700,40 750,50 C800,60 850,20 900,30" 
                           fill="none" 
                           stroke="#cb5600" 
                           strokeWidth="3" 
                           vectorEffect="non-scaling-stroke"
                         />
                         {/* Data Points */}
                         <circle cx="450" cy="110" r="4" fill="#1a1a1a" stroke="#cb5600" strokeWidth="2" />
                         <circle cx="600" cy="70" r="4" fill="#1a1a1a" stroke="#cb5600" strokeWidth="2" />
                         <circle cx="750" cy="50" r="4" fill="#1a1a1a" stroke="#cb5600" strokeWidth="2" />
                         <circle cx="900" cy="30" r="6" fill="#cb5600" stroke="white" strokeWidth="2" />
                      </svg>
                   </div>
                   <div className="flex justify-between mt-4 text-xs text-gray-500 font-mono">
                      <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
                      <span>Juil</span><span>Août</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            
            {/* DASHBOARD 2: META ADS (ROAS 5.41) */}
            <div className="flex flex-col">
               <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-sm font-medium text-[#cb5600] uppercase tracking-wider">Performance E-commerce</span>
               </div>
               <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex-1 shadow-lg group hover:border-[#cb5600]/30 transition-all">
                  <div className="bg-[#252525] border-b border-white/5 px-4 py-2 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Filter size={12} />
                        <span>Colonnes: Performance</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>Ce mois-ci</span>
                        <ChevronDown size={12} />
                     </div>
                  </div>
                  
                  {/* Table Wrapper */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-[#202020] text-gray-500 font-medium">
                           <tr>
                              <th className="px-4 py-3 font-medium text-xs">Coût par vue</th>
                              <th className="px-4 py-3 font-medium text-xs">Achats</th>
                              <th className="px-4 py-3 font-medium text-xs">Coût / achat</th>
                              <th className="px-4 py-3 font-medium text-xs">Valeur conv.</th>
                              <th className="px-4 py-3 font-medium text-xs text-white">ROAS</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-gray-300">0,47 €</td>
                              <td className="px-4 py-3 text-gray-300">108</td>
                              <td className="px-4 py-3 text-gray-300">7,00 €</td>
                              <td className="px-4 py-3 text-gray-300">7 629,80 €</td>
                              <td className="px-4 py-3 text-gray-300">4,79</td>
                           </tr>
                           {/* Highlighted Row */}
                           <tr className="bg-[#cb5600]/10 hover:bg-[#cb5600]/20 transition-colors">
                              <td className="px-4 py-3 text-white font-medium">0,68 €</td>
                              <td className="px-4 py-3 text-white font-medium">636</td>
                              <td className="px-4 py-3 text-white font-medium">9,49 €</td>
                              <td className="px-4 py-3 text-white font-bold">32 686,79 €</td>
                              <td className="px-4 py-3 text-[#cb5600] font-bold text-base">5,41</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-gray-300">0,55 €</td>
                              <td className="px-4 py-3 text-gray-300">245</td>
                              <td className="px-4 py-3 text-gray-300">5,00 €</td>
                              <td className="px-4 py-3 text-gray-300">12 450,00 €</td>
                              <td className="px-4 py-3 text-gray-300">4,54</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/* DASHBOARD 3: META ADS (LEADS 0.52€) */}
            <div className="flex flex-col">
               <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-sm font-medium text-[#cb5600] uppercase tracking-wider">Performance Lead Gen</span>
               </div>
               <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex-1 shadow-lg group hover:border-[#cb5600]/30 transition-all">
                  <div className="bg-[#252525] border-b border-white/5 px-4 py-2 flex items-center justify-between">
                     <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Filter size={12} />
                        <span>Colonnes: Performance et clics</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>Maximum</span>
                        <ChevronDown size={12} />
                     </div>
                  </div>
                  
                  {/* Table Wrapper */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-[#202020] text-gray-500 font-medium">
                           <tr>
                              <th className="px-4 py-3 font-medium text-xs">Clics (liens)</th>
                              <th className="px-4 py-3 font-medium text-xs">CPC (lien)</th>
                              <th className="px-4 py-3 font-medium text-xs">CTR (tous)</th>
                              <th className="px-4 py-3 font-medium text-xs">Résultats</th>
                              <th className="px-4 py-3 font-medium text-xs text-white">Coût / rés.</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           <tr className="bg-[#cb5600]/10 hover:bg-[#cb5600]/20 transition-colors">
                              <td className="px-4 py-3 text-white font-medium">472</td>
                              <td className="px-4 py-3 text-white font-medium">0,14 €</td>
                              <td className="px-4 py-3 text-white font-medium">5,89%</td>
                              <td className="px-4 py-3 text-white font-bold">324</td>
                              <td className="px-4 py-3 text-[#cb5600] font-bold text-base">0,52 €</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-gray-300">416</td>
                              <td className="px-4 py-3 text-gray-300">0,15 €</td>
                              <td className="px-4 py-3 text-gray-300">5,31%</td>
                              <td className="px-4 py-3 text-gray-300">200</td>
                              <td className="px-4 py-3 text-gray-300">0,52 €</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 text-gray-300">336</td>
                              <td className="px-4 py-3 text-gray-300">0,19 €</td>
                              <td className="px-4 py-3 text-gray-300">4,57%</td>
                              <td className="px-4 py-3 text-gray-300">177</td>
                              <td className="px-4 py-3 text-gray-300">0,84 €</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

          </div>

          <div className="text-center mt-8">
             <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
               <TrendingUp size={16} />
               Données extraites directement de nos Business Managers
             </p>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="border-t border-white/5 pt-16">
          <h3 className="text-center font-display font-bold text-2xl text-white mb-10">
            Ils scalent avec <span className="text-[#cb5600]">Azzione</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BRANDS.map((brand, i) => (
              <div key={i} className="group h-24 bg-black border border-white/5 rounded-xl flex items-center justify-center hover:border-[#cb5600]/50 transition-all duration-300">
                <span className="font-display font-bold text-lg text-gray-600 group-hover:text-white transition-colors uppercase tracking-widest text-center px-4">
                  {brand}
                </span>
              </div>
            ))}
             <div className="h-24 border border-dashed border-white/10 rounded-xl flex items-center justify-center bg-white/5">
                <span className="text-sm text-gray-500 font-medium animate-pulse">Votre marque ?</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Results;
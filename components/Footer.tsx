import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-white">
              AZZ<span className="text-[#cb5600]">IONE</span>
            </a>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Azzione Digital. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#cb5600] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-[#cb5600] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-[#cb5600] transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
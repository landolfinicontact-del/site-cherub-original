import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, CALENDLY_LINK } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-display font-extrabold tracking-tighter text-white">
          AZZ<span className="text-[#cb5600]">IONE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.name}
            </a>
          ))}
          <Button href={CALENDLY_LINK} variant="primary" className="!py-2 !px-6 text-xs">
            Café Virtuel
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-gray-300 hover:text-[#cb5600]"
              onClick={() => setIsMobileMenuOpen(false)}
              {...(link.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.name}
            </a>
          ))}
          <Button href={CALENDLY_LINK} variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
            Réserver
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
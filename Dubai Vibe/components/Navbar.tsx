import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Instagram, Music2 } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY_PRIMARY, SOCIAL_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-navy-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-gradient-to-tr from-gold-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
             <Camera className="text-navy-950" size={24} />
          </div>
          <div className="font-display font-extrabold text-xl tracking-wider text-white">
            DUBAI<span className="text-gold-400">VIBES</span>9
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'Portfolio', 'Packages', 'FAQ', 'About'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors uppercase tracking-widest"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center space-x-6">
           <div className="flex space-x-3 border-r border-white/10 pr-6">
             {/* Show only primary socials in navbar to avoid clutter */}
             {SOCIAL_LINKS.filter(l => l.platform === "Instagram" || l.platform === "TikTok").map((link) => (
               <a 
                 key={link.platform} 
                 href={link.url} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="text-gray-400 hover:text-neon-pink transition-colors"
                >
                  {link.platform === "Instagram" && <Instagram size={20} />}
                  {link.platform === "TikTok" && <Music2 size={20} />}
               </a>
             ))}
           </div>
           <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 bg-neon-pink hover:bg-pink-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-neon-pink/20 hover:shadow-neon-pink/40"
           >
             BOOK CALL
           </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden animate-fade-in shadow-2xl">
          {['Services', 'Portfolio', 'Packages', 'FAQ', 'About', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-lg font-medium text-white py-3 border-b border-white/5 hover:text-gold-400"
            >
              {item}
            </button>
          ))}
          <div className="pt-4 flex justify-between items-center">
            <span className="text-gray-400 text-sm">{CONTACT_PHONE_DISPLAY_PRIMARY}</span>
            <div className="flex space-x-4">
               {SOCIAL_LINKS.filter(l => l.platform === "Instagram" || l.platform === "TikTok").map((link) => (
                 <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="text-white hover:text-gold-400">
                   {link.platform === "Instagram" && <Instagram size={24} />}
                   {link.platform === "TikTok" && <Music2 size={24} />}
                 </a>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
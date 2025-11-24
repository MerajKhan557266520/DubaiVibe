import React from 'react';
import { Camera, Instagram, Music2, Youtube, Facebook, Linkedin, Twitter, Ghost, Pin, Send, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Instagram': return <Instagram size={18} />;
      case 'Music2': return <Music2 size={18} />;
      case 'Youtube': return <Youtube size={18} />;
      case 'Facebook': return <Facebook size={18} />;
      case 'Linkedin': return <Linkedin size={18} />;
      case 'Twitter': return <Twitter size={18} />;
      case 'Ghost': return <Ghost size={18} />;
      case 'Pin': return <Pin size={18} />;
      case 'Send': return <Send size={18} />;
      case 'Mail': return <Mail size={18} />;
      case 'MessageCircle': return <MessageCircle size={18} />;
      default: return <Instagram size={18} />;
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-tr from-gold-400 to-amber-600 rounded-lg flex items-center justify-center">
               <Camera className="text-navy-950" size={20} />
            </div>
            <div className="font-display font-extrabold text-xl tracking-wider text-white">
              DUBAI<span className="text-gold-400">VIBES</span>9
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
             {SOCIAL_LINKS.map((link) => (
               <a 
                 key={link.platform} 
                 href={link.url} 
                 target="_blank" 
                 rel="noreferrer" 
                 className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-navy-950 transition-all hover:-translate-y-1"
                 aria-label={link.platform}
                 title={link.platform}
                >
                  {getIcon(link.icon)}
               </a>
             ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dubai Vibes 9. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
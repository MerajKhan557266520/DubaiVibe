import React, { useState } from 'react';
import { Play, Heart, Eye, X, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS, CONTACT_PHONE_PRIMARY, SOCIAL_LINKS } from '../constants';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [filterPlatform, setFilterPlatform] = useState<string>('All');
  const [filterIndustry, setFilterIndustry] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const platforms = ['All', 'Instagram', 'TikTok'];
  const industries = ['All', 'Hospitality', 'F&B', 'Real Estate', 'Fashion', 'Tech'];

  const filteredItems = PORTFOLIO_ITEMS.filter(item => {
    const platformMatch = filterPlatform === 'All' || item.platform === filterPlatform;
    const industryMatch = filterIndustry === 'All' || item.industry === filterIndustry;
    return platformMatch && industryMatch;
  });

  const getProfileLink = (platform: string) => {
    // If the platform matches one of our managed links, use that specific link.
    // Otherwise fallback to WhatsApp.
    const link = SOCIAL_LINKS.find(l => l.platform.toLowerCase() === platform.toLowerCase());
    return link ? link.url : `https://wa.me/${CONTACT_PHONE_PRIMARY}`;
  };

  return (
    <section id="portfolio" className="py-24 bg-navy-900 relative">
       {/* Decorative blob */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-azure/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-bold text-4xl text-white mb-2">RECENT WORK</h2>
            <p className="text-gray-400">Curated specifically for the Dubai aesthetic.</p>
          </div>
          <a 
            href={SOCIAL_LINKS.find(l => l.platform === 'Instagram')?.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 text-gold-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-b border-gold-400 pb-1"
          >
            View Instagram Profile
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 border-b border-white/5 pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gold-400 uppercase font-bold tracking-wider">Platform</span>
            <div className="flex flex-wrap gap-2">
              {platforms.map(p => (
                <button
                  key={p}
                  onClick={() => setFilterPlatform(p)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    filterPlatform === p 
                      ? 'bg-white text-navy-950 border-white' 
                      : 'bg-navy-950 text-gray-400 border-white/10 hover:border-gold-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
             <span className="text-xs text-gold-400 uppercase font-bold tracking-wider">Industry</span>
             <div className="flex flex-wrap gap-2">
               {industries.map(i => (
                <button
                  key={i}
                  onClick={() => setFilterIndustry(i)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    filterIndustry === i 
                      ? 'bg-gold-400 text-navy-950 border-gold-400' 
                      : 'bg-navy-950 text-gray-400 border-white/10 hover:border-white hover:text-white'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-xl aspect-[9/16] cursor-pointer bg-navy-950 border border-white/5 hover:border-gold-400/50 transition-all shadow-lg hover:shadow-gold-400/10"
            >
              {item.type === 'video' ? (
                 <video 
                   muted 
                   loop 
                   playsInline
                   // Auto play on hover logic handled by CSS or simple JS below if needed, 
                   // but autoplaying all might be heavy. Let's autoplay mute.
                   autoPlay
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                 >
                   <source src={item.src} type="video/mp4" />
                 </video>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                 <div className="flex justify-end">
                   <span className="text-[10px] font-bold bg-black/40 backdrop-blur-md text-white px-2 py-1 rounded border border-white/10">
                     {item.platform}
                   </span>
                 </div>
                 
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-md rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-75 mx-auto hover:bg-neon-pink hover:text-white text-white">
                      <Play size={18} className="fill-current ml-0.5" />
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider mb-1 block">{item.industry}</span>
                      <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md line-clamp-2">{item.alt}</h3>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found in this category.</p>
            <button 
              onClick={() => {setFilterPlatform('All'); setFilterIndustry('All');}}
              className="mt-4 text-gold-400 hover:text-white text-sm font-bold"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Portfolio Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-xl animate-fade-in">
          <div className="relative bg-navy-900 border border-white/10 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[650px]">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full text-white hover:bg-neon-pink transition-colors backdrop-blur-md"
            >
              <X size={20} />
            </button>

            {/* Media Side */}
            <div className="w-full md:w-3/5 h-1/2 md:h-full bg-black relative flex items-center justify-center">
               {selectedItem.type === 'video' ? (
                 <video 
                   controls 
                   autoPlay 
                   playsInline
                   className="w-full h-full object-contain bg-black"
                 >
                   <source src={selectedItem.src} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               ) : (
                 <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full object-cover" />
               )}
            </div>

            {/* Info Side */}
            <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-navy-900">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xs font-bold bg-navy-800 text-gray-300 px-3 py-1 rounded-full uppercase border border-white/5">{selectedItem.platform}</span>
                <span className="text-xs font-bold bg-gold-400/10 text-gold-400 px-3 py-1 rounded-full uppercase border border-gold-400/20">{selectedItem.industry}</span>
              </div>
              
              <h3 className="font-display font-bold text-3xl text-white mb-6 leading-tight">{selectedItem.alt}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8 border-b border-white/5 pb-8">
                 <div className="p-4 bg-navy-800 rounded-xl border border-white/5 text-center">
                   <div className="flex items-center justify-center text-gray-400 mb-1"><Eye size={14} className="mr-1"/> Views</div>
                   <span className="block text-xl font-bold text-white">{selectedItem.stats.views}</span>
                 </div>
                 <div className="p-4 bg-navy-800 rounded-xl border border-white/5 text-center">
                   <div className="flex items-center justify-center text-gray-400 mb-1"><Heart size={14} className="mr-1"/> Likes</div>
                   <span className="block text-xl font-bold text-white">{selectedItem.stats.likes}</span>
                 </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gold-400 uppercase mb-3 tracking-widest">Project Details</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selectedItem.details || "This project showcases our ability to capture high-quality, engaging content that resonates with the target audience in Dubai. We handled the end-to-end production from concept to final edit."}
                </p>
              </div>

              <button 
                onClick={() => window.open(getProfileLink(selectedItem.platform), '_blank')}
                className="w-full py-4 bg-white hover:bg-gold-400 text-navy-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                VIEW LIVE ON {selectedItem.platform.toUpperCase()} <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import { Play, Heart, Eye, X, ExternalLink, Instagram, Music2, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, CONTACT_PHONE_PRIMARY, SOCIAL_LINKS } from '../constants';
import { PortfolioItem } from '../types';

export const Portfolio: React.FC = () => {
  const [filterPlatform, setFilterPlatform] = useState<string>('All');
  const [filterIndustry, setFilterIndustry] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<PortfolioItem[]>([]);

  const platforms = ['All', 'Instagram', 'TikTok'];
  const industries = ['All', 'Hospitality', 'F&B', 'Real Estate', 'Fashion', 'Tech'];

  useEffect(() => {
    const filtered = PORTFOLIO_ITEMS.filter(item => {
      const platformMatch = filterPlatform === 'All' || item.platform === filterPlatform;
      const industryMatch = filterIndustry === 'All' || item.industry === filterIndustry;
      return platformMatch && industryMatch;
    });
    setVisibleItems(filtered);
  }, [filterPlatform, filterIndustry]);

  const getProfileLink = (platform: string) => {
    const link = SOCIAL_LINKS.find(l => l.platform.toLowerCase() === platform.toLowerCase());
    return link ? link.url : `https://wa.me/${CONTACT_PHONE_PRIMARY}`;
  };

  const handleBookSimilar = (item: PortfolioItem) => {
    const text = `Hi, I loved the "${item.alt}" (${item.industry}) content on your portfolio. I'd like to book something similar for my brand.`;
    window.open(`https://wa.me/${CONTACT_PHONE_PRIMARY}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-navy-950 relative overflow-hidden min-h-screen">
       {/* Ambient Background - Dubai Night Vibes */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 opacity-50"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md animate-fade-in">
             <Sparkles size={14} className="text-gold-400" />
             <span className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em]">Curated for Dubai</span>
          </div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6 tracking-tight drop-shadow-2xl">
            RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">WORK</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8 opacity-50"></div>
          
          <p className="font-light text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Hand-crafted short-form content capturing the <span className="text-white font-medium">luxury</span>, <span className="text-white font-medium">lifestyle</span>, and <span className="text-white font-medium">cinematic energy</span> of Dubai.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col items-center gap-6 mb-14 animate-slide-up" style={{animationDelay: '0.1s'}}>
           {/* Platform Toggles */}
           <div className="flex p-1 bg-navy-900/80 backdrop-blur-md rounded-full border border-white/5">
              {platforms.map(p => (
                <button
                  key={p}
                  onClick={() => setFilterPlatform(p)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    filterPlatform === p 
                    ? 'bg-white text-navy-950 shadow-lg shadow-white/10' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
           </div>

           {/* Industry Pills */}
           <div className="flex flex-wrap justify-center gap-3">
             {industries.map(i => (
               <button
                 key={i}
                 onClick={() => setFilterIndustry(i)}
                 className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                   filterIndustry === i 
                     ? 'bg-gold-400/10 border-gold-400 text-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                     : 'bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300'
                 }`}
               >
                 {i}
               </button>
             ))}
           </div>
        </div>

        {/* GALLERY GRID (Desktop) / REELS SCROLL (Mobile) */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 
          md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0
          [&::-webkit-scrollbar]:hidden
        ">
          {visibleItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="
                group relative flex-shrink-0 w-[85vw] md:w-auto snap-center 
                aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer 
                border border-white/5 bg-navy-900 
                hover:border-gold-400/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] 
                transition-all duration-500 ease-out transform hover:-translate-y-2
              "
              style={{ animationDelay: `${index * 0.05}s` }}
            >
               {/* Media */}
               {item.type === 'video' ? (
                 <video 
                   muted 
                   loop 
                   playsInline
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                   onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                   onMouseOut={(e) => {
                     const vid = e.target as HTMLVideoElement;
                     vid.pause();
                     vid.currentTime = 0;
                   }}
                 >
                   <source src={item.src} type="video/mp4" />
                 </video>
               ) : (
                 <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               )}

               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

               {/* Center Play Button */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    <Play className="fill-white text-white ml-1" size={20} />
                  </div>
               </div>

               {/* Bottom Info */}
               <div className="absolute bottom-0 left-0 w-full p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                     <span className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                        {item.platform === 'TikTok' ? <Music2 size={10} className="text-neon-pink" /> : <Instagram size={10} className="text-pink-500" />}
                        <span className="text-[9px] font-bold text-white uppercase">{item.platform}</span>
                     </span>
                     <span className="text-[9px] font-bold text-gold-400 uppercase tracking-wider">{item.industry}</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-sm leading-tight mb-3 line-clamp-2 drop-shadow-md">{item.alt}</h3>
                  
                  <div className="flex items-center space-x-3 text-gray-300 text-[10px] font-medium border-t border-white/10 pt-3">
                    <span className="flex items-center"><Eye size={10} className="mr-1 text-gold-400"/> {item.stats.views}</span>
                    <span className="flex items-center"><Heart size={10} className="mr-1 text-neon-pink"/> {item.stats.likes}</span>
                  </div>
               </div>
            </div>
          ))}

          {/* Empty State */}
          {visibleItems.length === 0 && (
             <div className="col-span-full w-full py-20 text-center bg-navy-900/30 rounded-3xl border border-white/5 border-dashed">
                <p className="text-gray-400 mb-4">No exclusive content found in this category.</p>
                <button onClick={() => {setFilterPlatform('All'); setFilterIndustry('All');}} className="text-gold-400 font-bold underline text-sm">Clear Filters</button>
             </div>
          )}
        </div>
      </div>

      {/* LUXURY MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-xl animate-fade-in">
           <div className="relative w-full max-w-6xl h-[90vh] bg-navy-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 ring-1 ring-white/5">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-neon-pink text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              {/* Media Section (Left) */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black relative flex items-center justify-center">
                 {selectedItem.type === 'video' ? (
                   <video 
                     controls 
                     autoPlay 
                     className="w-full h-full object-contain"
                   >
                     <source src={selectedItem.src} type="video/mp4" />
                   </video>
                 ) : (
                   <img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full object-contain" />
                 )}
              </div>

              {/* Info Section (Right) */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-navy-900/50 p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
                 <div>
                    <div className="flex items-center space-x-3 mb-6">
                       {selectedItem.platform === 'TikTok' ? 
                         <div className="p-2 bg-black/40 rounded-lg"><Music2 className="text-neon-pink" size={20} /></div> : 
                         <div className="p-2 bg-black/40 rounded-lg"><Instagram className="text-pink-500" size={20} /></div>
                       }
                       <div>
                         <span className="block text-xs text-gray-400 uppercase tracking-widest">Platform</span>
                         <span className="block text-sm font-bold text-white">{selectedItem.platform}</span>
                       </div>
                    </div>

                    <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-4 leading-tight">
                      {selectedItem.alt}
                    </h3>

                    <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-white/5">
                       <div>
                          <div className="flex items-center text-gold-400 mb-1 text-sm"><TrendingUp size={14} className="mr-2"/> Views</div>
                          <span className="text-2xl font-bold text-white">{selectedItem.stats.views}</span>
                       </div>
                       <div>
                          <div className="flex items-center text-neon-pink mb-1 text-sm"><Heart size={14} className="mr-2"/> Likes</div>
                          <span className="text-2xl font-bold text-white">{selectedItem.stats.likes}</span>
                       </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8">
                       {selectedItem.details || "A premium showcase of high-engagement content strategy. We utilized trending audio, fast-paced editing, and cinematic color grading to maximize retention and shareability for the Dubai audience."}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                       <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">#{selectedItem.industry}</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">#DubaiLuxury</span>
                       <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5">#ViralContent</span>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <button 
                      onClick={() => handleBookSimilar(selectedItem)}
                      className="w-full py-4 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-white hover:to-white text-navy-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-gold-400/20 flex items-center justify-center gap-2"
                    >
                      BOOK SIMILAR CONTENT <ArrowRight size={18} />
                    </button>
                    <button 
                       onClick={() => window.open(getProfileLink(selectedItem.platform), '_blank')}
                       className="w-full py-4 bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                       VIEW LIVE POST <ExternalLink size={18} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

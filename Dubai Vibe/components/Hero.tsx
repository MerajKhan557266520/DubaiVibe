import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50 z-10"></div>
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover animate-pulse-slow scale-105"
        >
          {/* Reliable Pexels direct link for Dubai Skyline */}
          <source src="https://videos.pexels.com/video-files/3764258/3764258-hd_1080_1920_25fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-sm">
          <span className="text-gold-400 text-xs font-bold tracking-widest uppercase">Dubai's Premier Content Agency</span>
        </div>
        
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-8 drop-shadow-2xl">
          WE CREATE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">LUXURY VIBES</span> <br/>
          THAT CONVERT
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Professional social media management for Dubai's elite brands. 
          From viral Reels to strategic growth, we handle your digital presence with absolute precision.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-8 py-4 bg-neon-pink hover:bg-pink-600 text-white font-bold rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-neon-pink/30 flex items-center justify-center gap-2"
          >
            START YOUR GROWTH <ArrowRight size={20} />
          </button>
          <button 
             onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <Play size={18} className="fill-current" /> VIEW PORTFOLIO
          </button>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { label: 'Views Generated', value: '50M+' },
            { label: 'Dubai Clients', value: '40+' },
            { label: 'Avg Growth', value: '300%' },
            { label: 'Ad ROI', value: '5x' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
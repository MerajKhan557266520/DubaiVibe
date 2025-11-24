import React, { useState } from 'react';
import { Video, BarChart, Users, Sparkles, X, Check } from 'lucide-react';
import { SERVICES_DATA } from '../constants';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Video': return <Video size={32} className="text-neon-pink" />;
      case 'BarChart': return <BarChart size={32} className="text-azure" />;
      case 'Users': return <Users size={32} className="text-gold-400" />;
      case 'Sparkles': return <Sparkles size={32} className="text-purple-500" />;
      default: return <Video size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-navy-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">OUR EXPERTISE</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedService(service)}
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-navy-900 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm line-clamp-3">
                {service.shortDesc}
              </p>
              <p className="text-gold-400 text-xs font-bold mt-4 tracking-widest uppercase">Read More +</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-lg animate-fade-in">
          <div className="relative bg-navy-900 border border-white/10 rounded-3xl max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-slide-up">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-navy-800 rounded-xl border border-white/5">
                {getIcon(selectedService.icon)}
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">{selectedService.title}</h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 border-b border-white/5 pb-8">
              {selectedService.fullDesc}
            </p>

            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider text-gold-400">Key Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="bg-green-500/20 p-1 rounded-full">
                    <Check size={14} className="text-green-500" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
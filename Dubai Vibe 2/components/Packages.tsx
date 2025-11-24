import React from 'react';
import { Check, Star } from 'lucide-react';
import { PACKAGES, CONTACT_PHONE_PRIMARY } from '../constants';

export const Packages: React.FC = () => {
  const handleSelectPackage = (packageName: string) => {
    const message = `Hi, I'm interested in the ${packageName} package. Can we discuss?`;
    const url = `https://wa.me/${CONTACT_PHONE_PRIMARY}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">INVESTMENT PACKAGES</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Transparent pricing designed to scale with your business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card rounded-3xl p-8 flex flex-col ${pkg.recommended ? 'border-gold-400/50 shadow-2xl shadow-gold-400/10' : ''}`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 text-xs font-bold px-4 py-1.5 rounded-full flex items-center shadow-lg">
                  <Star size={12} className="mr-1 fill-current" /> MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gold-400">{pkg.name === 'Enterprise' ? '' : 'AED'} {pkg.price}</span>
                <span className="text-gray-500 text-sm ml-1">{pkg.period}</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mt-1 min-w-[20px]">
                      <Check size={16} className="text-green-400" />
                    </div>
                    <p className="text-gray-300 text-sm ml-3 leading-snug">{feat}</p>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSelectPackage(pkg.name)}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  pkg.recommended 
                    ? 'bg-gold-400 hover:bg-white text-navy-950' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
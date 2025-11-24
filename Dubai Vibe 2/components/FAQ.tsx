import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl text-white mb-4">FREQUENTLY ASKED</h2>
          <p className="text-gray-400">Everything you need to know before we start.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => (
            <div 
              key={idx} 
              className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-navy-800/50 border-gold-400/30' : 'bg-navy-950 hover:bg-navy-800/30'}`}
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-gold-400' : 'text-white'}`}>
                  {item.question}
                </span>
                {openIndex === idx ? <ChevronUp className="text-gold-400" /> : <ChevronDown className="text-gray-500" />}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
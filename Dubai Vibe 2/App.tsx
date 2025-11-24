import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Packages } from './components/Packages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="bg-navy-950 text-white min-h-screen selection:bg-gold-400 selection:text-navy-950">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <FAQ />
      <div id="about" className="py-24 bg-navy-950 text-center px-6 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
           <h2 className="font-display font-bold text-3xl mb-6">ABOUT US</h2>
           <p className="text-gray-300 text-lg leading-relaxed">
             We are a team of passionate creators and strategists based in the heart of Dubai. 
             Understanding the unique luxury and fast-paced lifestyle of the UAE, we craft content 
             that doesn't just look good—it performs. From the Burj Khalifa to the Palm Jumeirah, 
             we help your brand stand out in the city of gold.
           </p>
        </div>
      </div>
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
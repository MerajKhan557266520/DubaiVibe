import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import { CONTACT_PHONE_PRIMARY, CONTACT_PHONE_DISPLAY_PRIMARY, CONTACT_PHONE_DISPLAY_SECONDARY } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    service: 'Social Media Management',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    business: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    let isValid = true;
    const newErrors = { name: '', business: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.business.trim()) {
      newErrors.business = 'Business name is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Business:* ${formData.business}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${CONTACT_PHONE_PRIMARY}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    // Clear error when user types
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({...errors, [e.target.name]: ''});
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="font-display font-bold text-4xl text-white mb-6">LET'S ELEVATE YOUR BRAND</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to dominate the feed? Book your appointment or send us a message directly. We reply instantly on WhatsApp.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-white/10">
                  <Phone className="text-gold-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call / WhatsApp</h4>
                  <p className="text-gray-400">{CONTACT_PHONE_DISPLAY_PRIMARY}</p>
                  <p className="text-gray-500 text-sm">{CONTACT_PHONE_DISPLAY_SECONDARY} (Backup)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-white/10">
                  <Mail className="text-neon-pink" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400">hello@dubaivibes9.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center border border-white/10">
                  <MapPin className="text-azure" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-gray-400">Downtown Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 bg-navy-800/50">
            <h3 className="text-2xl font-bold text-white mb-6">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Name <span className="text-neon-pink">*</span></label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-gold-400'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Business Name <span className="text-neon-pink">*</span></label>
                  <input 
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className={`w-full bg-navy-950 border rounded-xl px-4 py-3 text-white focus:outline-none transition-colors ${errors.business ? 'border-red-500' : 'border-white/10 focus:border-gold-400'}`}
                    placeholder="Dubai Luxury Co."
                  />
                  {errors.business && <p className="text-red-500 text-xs flex items-center"><AlertCircle size={10} className="mr-1"/> {errors.business}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Service Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                >
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Content Creation">Content Creation (Reels/TikTok)</option>
                  <option value="Paid Ads">Paid Advertising</option>
                  <option value="Consultation">Strategy Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-neon-pink hover:bg-pink-600 text-white font-bold rounded-xl shadow-lg shadow-neon-pink/25 transition-all flex items-center justify-center gap-2">
                <Send size={18} /> SUBMIT TO WHATSAPP
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Submitting will open WhatsApp Web/App with your pre-filled inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
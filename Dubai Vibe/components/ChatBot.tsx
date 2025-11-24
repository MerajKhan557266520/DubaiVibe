import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Phone } from 'lucide-react';
import { CONTACT_PHONE_PRIMARY, PACKAGES } from '../constants';
import { ChatMessage } from '../types';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: "👋 Welcome to Dubai Vibes 9! Ready to skyrocket your brand's presence in Dubai? I can show you our exclusive packages or get you on a call with a strategist right now.",
      isBot: true,
      timestamp: new Date(),
      actions: [
        { label: "View Packages", action: "packages" },
        { label: "Book Strategy Call", action: "book" },
        { label: "See Portfolio", action: "portfolio" }
      ]
    }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: text,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");

    // Simulate AI delay
    setTimeout(() => {
      processBotResponse(text);
    }, 800);
  };

  const processBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    let responseText = "";
    let actions: {label: string, action: string}[] | undefined;

    if (lowerInput.includes("price") || lowerInput.includes("package") || lowerInput.includes("cost")) {
      responseText = `Our packages start from AED 2,000/month. The 'Growth' package at AED 5,000 is our most popular choice for businesses looking to scale quickly.`;
      actions = [{ label: "See Full Pricing", action: "packages" }];
    } 
    else if (lowerInput.includes("book") || lowerInput.includes("call") || lowerInput.includes("appointment")) {
      responseText = "Excellent choice. We can schedule a strategy call to discuss your goals.";
      actions = [{ label: "Book via WhatsApp", action: "human" }];
    }
    else if (lowerInput.includes("contact") || lowerInput.includes("human") || lowerInput.includes("person") || lowerInput.includes("support")) {
      responseText = "I can connect you directly with our team on WhatsApp for immediate assistance.";
      actions = [{ label: "Open WhatsApp", action: "human" }];
    }
    else if (lowerInput.includes("reel") || lowerInput.includes("video") || lowerInput.includes("tiktok")) {
      responseText = "We specialize in high-conversion short-form content. Would you like to see our portfolio?";
      actions = [{ label: "View Portfolio", action: "portfolio" }];
    }
    else {
      responseText = "I'm not entirely sure about that specific detail, but our team definitely is. Shall I connect you with them?";
      actions = [{ label: "Chat on WhatsApp", action: "human" }];
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isBot: true,
      timestamp: new Date(),
      actions
    };
    setMessages(prev => [...prev, botMsg]);
  };

  const handleAction = (action: string) => {
    if (action === "packages") {
      document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === "portfolio") {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === "book" || action === "human") {
      const waUrl = `https://wa.me/${CONTACT_PHONE_PRIMARY}?text=${encodeURIComponent("Hi Dubai Vibes 9, I'd like to chat with a representative about your services.")}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-neon-pink/30 transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-navy-900 rotate-90' : 'bg-gradient-to-r from-neon-pink to-purple-600'}`}
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-white fill-current" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-navy-950 to-navy-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-navy-950 font-bold">DV</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-navy-900"></div>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">Dubai Vibes 9 AI</h3>
                <p className="text-xs text-gray-400">Online • Replies instantly</p>
              </div>
            </div>
            <a href={`https://wa.me/${CONTACT_PHONE_PRIMARY}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
              <Phone size={18} />
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                {msg.isBot && <div className="w-6 h-6 rounded-full bg-navy-800 flex items-center justify-center mr-2 mt-1"><Bot size={14} className="text-gold-400"/></div>}
                
                <div className="flex flex-col max-w-[80%]">
                  <div className={`p-3 rounded-2xl text-sm ${
                    msg.isBot 
                      ? 'bg-navy-800 text-gray-200 rounded-tl-none' 
                      : 'bg-neon-pink text-white rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {/* Action Chips */}
                  {msg.actions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.actions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAction(action.action)}
                          className="text-xs bg-navy-950 border border-gold-400/30 text-gold-400 px-3 py-1 rounded-full hover:bg-gold-400 hover:text-navy-950 transition-colors"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <span className="text-[10px] text-gray-600 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {!msg.isBot && <div className="w-6 h-6 rounded-full bg-neon-pink/20 flex items-center justify-center ml-2 mt-1"><User size={14} className="text-neon-pink"/></div>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-navy-950">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                placeholder="Type your message..."
                className="flex-1 bg-navy-900 text-white text-sm rounded-full px-4 py-2 border border-white/10 focus:outline-none focus:border-gold-400/50"
              />
              <button 
                onClick={() => handleSendMessage(inputText)}
                className="p-2 bg-gold-400 text-navy-950 rounded-full hover:bg-white transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
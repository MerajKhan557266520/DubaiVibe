import { ServicePackage, SocialLink, PortfolioItem, ServiceItem, FAQItem } from './types';

export const CONTACT_PHONE_PRIMARY = "+971557266520";
export const CONTACT_PHONE_SECONDARY = "+971505848375";
export const CONTACT_PHONE_DISPLAY_PRIMARY = "+971 55 726 6520";
export const CONTACT_PHONE_DISPLAY_SECONDARY = "+971 50 584 8375";
export const CONTACT_EMAIL = "hello@dubai-vibes9.com";

// Centralized Links
const LINK_INSTAGRAM = "https://www.instagram.com/dubai_vibes9?igsh=MWFvandpdnRkbm5rZA==";
const LINK_TIKTOK = "https://www.tiktok.com/@dubai_vibes9?_r=1&_t=ZS-91fFSacqnth";
// Clean WhatsApp link
const LINK_WHATSAPP = "https://wa.me/971557266520"; 

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: LINK_INSTAGRAM,
    icon: "Instagram"
  },
  {
    platform: "TikTok",
    url: LINK_TIKTOK,
    icon: "Music2"
  },
  {
    platform: "WhatsApp",
    url: LINK_WHATSAPP,
    icon: "MessageCircle"
  },
  {
    platform: "YouTube",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Youtube"
  },
  {
    platform: "Facebook",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Facebook"
  },
  {
    platform: "LinkedIn",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Linkedin"
  },
  {
    platform: "Twitter",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Twitter"
  },
  {
    platform: "Snapchat",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Ghost"
  },
  {
    platform: "Pinterest",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Pin"
  },
  {
    platform: "Telegram",
    url: LINK_WHATSAPP, // Fallback to WhatsApp
    icon: "Send"
  },
  {
    platform: "Email",
    url: `mailto:${CONTACT_EMAIL}`,
    icon: "Mail"
  }
];

export const PACKAGES: ServicePackage[] = [
  {
    name: "Starter Social",
    price: "2,000",
    period: "AED / month",
    features: [
      "6 Vertical Reels/TikToks (High Quality)",
      "8 Static/Carousel Posts",
      "Community Monitoring (8hrs/week)",
      "Monthly Strategy Call",
      "Standard Edits (48hr turnaround)"
    ]
  },
  {
    name: "Growth",
    price: "5,000",
    period: "AED / month",
    features: [
      "12 Vertical Reels/TikToks + 12 Stories",
      "Daily Community Management",
      "Paid Ads Strategy (Budget separate)",
      "Monthly Analytics Report",
      "2 Influencer Coordination Spots"
    ],
    recommended: true
  },
  {
    name: "Scale",
    price: "10,000",
    period: "AED / month",
    features: [
      "Daily Content (20-30 pieces)",
      "Dedicated Account Manager",
      "Priority Editing (24hr turnaround)",
      "Advanced Ad Campaign Management",
      "1 On-location Shoot Day included"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Quote",
    features: [
      "Full Content Studio Access",
      "24/7 Support Line",
      "Large Scale Influencer Budgets",
      "Multi-camera Productions",
      "Dedicated Creative Director"
    ]
  }
];

// Confirmed working High-Quality Assets
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // --- REAL ESTATE ---
  {
    id: "re-1",
    type: "video",
    src: "https://videos.pexels.com/video-files/7578544/7578544-hd_1080_1920_25fps.mp4", // Luxury interior
    alt: "Penthouse Walkthrough",
    platform: "Instagram",
    industry: "Real Estate",
    stats: { views: "4.2M", likes: "320K" },
    details: "Exclusive tour of a Downtown penthouse. Slow pans and detail shots emphasized the luxury finishes."
  },
  {
    id: "re-2",
    type: "image",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", // Modern Villa
    alt: "Palm Jumeirah Villa",
    platform: "Instagram",
    industry: "Real Estate",
    stats: { views: "1.2M", likes: "85K" },
    details: "Sunset views from a Palm Jumeirah villa. High contrast editing to showcase the golden hour."
  },
  {
    id: "re-3",
    type: "video",
    src: "https://videos.pexels.com/video-files/7034379/7034379-hd_1080_1920_25fps.mp4", // Pool
    alt: "Infinity Pool View",
    platform: "TikTok",
    industry: "Real Estate",
    stats: { views: "890K", likes: "62K" },
    details: "Showcasing the infinity pool features of a new development."
  },
  {
    id: "re-4",
    type: "image",
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop", // Modern living room
    alt: "Luxury Living Room",
    platform: "Instagram",
    industry: "Real Estate",
    stats: { views: "450K", likes: "22K" },
    details: "Detail-oriented static post focusing on luxury materials and finishes."
  },
  {
    id: "re-5",
    type: "image",
    src: "https://images.unsplash.com/photo-1512918760513-95f1929c5760?q=80&w=800&auto=format&fit=crop", // Dubai Apartment
    alt: "Downtown Apartment",
    platform: "Instagram",
    industry: "Real Estate",
    stats: { views: "670K", likes: "45K" },
    details: "High-floor apartment view overlooking the Burj Khalifa."
  },

  // --- F&B ---
  {
    id: "fb-1",
    type: "video",
    src: "https://videos.pexels.com/video-files/4125028/4125028-hd_1080_1920_25fps.mp4", // Chef Plating
    alt: "Michelin Plating",
    platform: "TikTok",
    industry: "F&B",
    stats: { views: "2.1M", likes: "150K" },
    details: "Chef's table experience featuring precise plating of a signature dish."
  },
  {
    id: "fb-2",
    type: "image",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", // Cocktail
    alt: "Signature Cocktail",
    platform: "Instagram",
    industry: "F&B",
    stats: { views: "300K", likes: "15K" },
    details: "Moody, flash-photography style shot of a signature cocktail at a speakeasy."
  },
  {
    id: "fb-3",
    type: "video",
    src: "https://videos.pexels.com/video-files/5947937/5947937-hd_1080_1920_30fps.mp4", // Coffee
    alt: "Latte Art",
    platform: "TikTok",
    industry: "F&B",
    stats: { views: "500K", likes: "45K" },
    details: "ASMR style coffee preparation video for a boutique cafe in DIFC."
  },
  {
    id: "fb-4",
    type: "image",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Luxury Food
    alt: "Fine Dining Spread",
    platform: "Instagram",
    industry: "F&B",
    stats: { views: "1.1M", likes: "90K" },
    details: "Bright, airy brunch spread at a popular beach club."
  },
  {
    id: "fb-5",
    type: "image",
    src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=800&auto=format&fit=crop", // Steak
    alt: "Gold Steak Experience",
    platform: "Instagram",
    industry: "F&B",
    stats: { views: "2.5M", likes: "180K" },
    details: "Capturing the famous gold steak experience."
  },

  // --- HOSPITALITY ---
  {
    id: "hosp-1",
    type: "video",
    src: "https://videos.pexels.com/video-files/3764258/3764258-hd_1080_1920_25fps.mp4", // Night Skyline
    alt: "Rooftop Lounge",
    platform: "Instagram",
    industry: "Hospitality",
    stats: { views: "3.5M", likes: "210K" },
    details: "High-energy recap of a weekend event at a luxury lounge."
  },
  {
    id: "hosp-2",
    type: "image",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", // Hotel Pool
    alt: "Resort Pool Day",
    platform: "Instagram",
    industry: "Hospitality",
    stats: { views: "1.8M", likes: "95K" },
    details: "Aerial view of a 5-star resort pool."
  },
  {
    id: "hosp-3",
    type: "video",
    src: "https://videos.pexels.com/video-files/3209828/3209828-hd_1080_1920_25fps.mp4", // Hotel Room
    alt: "Suite Tour",
    platform: "TikTok",
    industry: "Hospitality",
    stats: { views: "2.2M", likes: "180K" },
    details: "POV relaxation video in a presidential suite."
  },
  {
    id: "hosp-4",
    type: "image",
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop", // Luxury Resort
    alt: "Private Beach Villa",
    platform: "Instagram",
    industry: "Hospitality",
    stats: { views: "600K", likes: "40K" },
    details: "Interior showcase of a private beach villa."
  },
  {
    id: "hosp-5",
    type: "image",
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop", // Hotel Lobby
    alt: "Grand Lobby",
    platform: "Instagram",
    industry: "Hospitality",
    stats: { views: "850K", likes: "55K" },
    details: "Architectural appreciation of the grand lobby entrance."
  },

  // --- FASHION ---
  {
    id: "fash-1",
    type: "video",
    src: "https://videos.pexels.com/video-files/6064973/6064973-hd_1080_1920_25fps.mp4", // Fashion Walk
    alt: "Desert Editorial",
    platform: "TikTok",
    industry: "Fashion",
    stats: { views: "5.5M", likes: "400K" },
    details: "Cinematic fashion film shot in the Dubai desert dunes."
  },
  {
    id: "fash-2",
    type: "image",
    src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop", // High Heels / Luxury
    alt: "Luxury Footwear",
    platform: "Instagram",
    industry: "Fashion",
    stats: { views: "900K", likes: "75K" },
    details: "Close up product shot of designer footwear."
  },
  {
    id: "fash-3",
    type: "video",
    src: "https://videos.pexels.com/video-files/5630685/5630685-hd_1080_1920_25fps.mp4", // Beauty
    alt: "Beauty Reveal",
    platform: "Instagram",
    industry: "Fashion",
    stats: { views: "1.2M", likes: "110K" },
    details: "Product reveal video for a luxury cosmetics brand."
  },
  {
    id: "fash-4",
    type: "image",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop", // Fashion Editorial
    alt: "Urban Chic",
    platform: "Instagram",
    industry: "Fashion",
    stats: { views: "750K", likes: "55K" },
    details: "Street style photography in DIFC."
  },
  {
    id: "fash-5",
    type: "image",
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop", // Model
    alt: "Editorial Shoot",
    platform: "Instagram",
    industry: "Fashion",
    stats: { views: "1.5M", likes: "120K" },
    details: "High-fashion editorial shoot."
  },

  // --- TECH ---
  {
    id: "tech-1",
    type: "video",
    src: "https://videos.pexels.com/video-files/3192305/3192305-hd_1080_1920_25fps.mp4", // Phone
    alt: "App Demo",
    platform: "TikTok",
    industry: "Tech",
    stats: { views: "3.0M", likes: "200K" },
    details: "Fast-paced UI/UX demo for a new fintech app launch."
  },
  {
    id: "tech-2",
    type: "image",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop", // Coding/Setup
    alt: "Dev Workspace",
    platform: "Instagram",
    industry: "Tech",
    stats: { views: "500K", likes: "35K" },
    details: "Aesthetic workspace setup for productivity influencers."
  },
  {
    id: "tech-3",
    type: "video",
    src: "https://videos.pexels.com/video-files/8489704/8489704-hd_1080_1920_25fps.mp4", // VR
    alt: "Future Tech",
    platform: "TikTok",
    industry: "Tech",
    stats: { views: "1.5M", likes: "90K" },
    details: "Reaction video to a new Virtual Reality experience."
  },
  {
    id: "tech-4",
    type: "image",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Cyberpunk
    alt: "Cyber Aesthetic",
    platform: "Instagram",
    industry: "Tech",
    stats: { views: "400K", likes: "25K" },
    details: "Neon-soaked cyberpunk aesthetic photography."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: "Video",
    title: "Content Production",
    shortDesc: "High-end Reels and TikToks filmed and edited to perfection.",
    fullDesc: "Our Content Production service is the heartbeat of your digital presence. We don't just point and shoot; we craft cinematic experiences. From storyboarding and location scouting in Dubai's most iconic spots to high-end filming with cinema-grade cameras and drones. Our post-production includes fast-paced editing, color grading, sound design, and trending audio selection to ensure maximum retention.",
    features: ["4K Video Production", "Drone Cinematography", "Professional Color Grading", "Scripting & Storyboarding", "On-Location Direction"]
  },
  {
    icon: "BarChart",
    title: "Strategy & Growth",
    shortDesc: "Data-driven strategies tailored to the UAE market.",
    fullDesc: "Growth isn't an accident; it's a strategy. We dive deep into analytics to understand your audience's behavior, peak activity times, and content preferences. Our strategies are tailored specifically for the UAE market, leveraging local trends and cultural nuances to ensure your brand resonates authentically while expanding its reach.",
    features: ["Competitor Analysis", "Audience Persona Mapping", "Hashtag & Keyword Strategy", "Monthly Performance Audits", "Trend Forecasting"]
  },
  {
    icon: "Users",
    title: "Community Management",
    shortDesc: "We engage with your audience 24/7, turning followers into customers.",
    fullDesc: "Building a brand is about building relationships. Our community management goes beyond replying to comments. We actively engage with potential customers, manage DMs, handle crisis communication, and foster a loyal community around your brand. We act as your brand's digital concierge, ensuring every interaction is premium and helpful.",
    features: ["24/7 Comment Monitoring", "DM Management & Sales Support", "Proactive Engagement", "Crisis Management", "User Generated Content Campaigns"]
  },
  {
    icon: "Sparkles",
    title: "Paid Amplification",
    shortDesc: "Maximize your ROI with targeted ad campaigns on Meta and TikTok.",
    fullDesc: "Organic reach is powerful, but paid amplification is scalable. We design high-conversion ad creatives and manage your ad spend across Meta (Instagram/Facebook) and TikTok. Our focus is on lowering your CPA (Cost Per Acquisition) while increasing your ROAS (Return on Ad Spend) through precise targeting and A/B testing.",
    features: ["Ad Creative Production", "Campaign Setup & Optimization", "A/B Testing", "Pixel & Retargeting Setup", "Detailed ROI Reporting"]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How fast do you deliver an edit?",
    answer: "For standard social media packages, we deliver the first draft within 48-72 hours after the shoot. For priority clients and enterprise packages, we offer a 24-hour turnaround time."
  },
  {
    question: "Who owns the footage?",
    answer: "All final deliverables include commercial usage rights for social media. Raw footage ownership is optional and can be added to your package or purchased separately."
  },
  {
    question: "Do you handle paid ad budgets?",
    answer: "Yes, we manage ad campaigns. However, the ad spend budget is paid directly to the platforms (Meta/TikTok) by you. We charge a management fee for strategy, creative, and optimization."
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely. While our standard packages cover most needs, we specialize in bespoke solutions. Contact us for a custom quote tailored to your specific goals."
  },
  {
    question: "How do I book a shoot?",
    answer: "You can book a strategy call directly through our website or contact us via WhatsApp. Once we align on the scope, we'll schedule the shoot dates that work best for you."
  }
];
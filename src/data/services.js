import { Video, BarChart3, Magnet, Search } from "lucide-react";

export const coreServices = [
  {
    id: "poster-reels",
    title: "Poster & Reel Creation",
    icon: Video,
    description: "Stop the scroll with high-end visuals and short-form content designed for maximum engagement.",
    includes: ["Custom Instagram/TikTok Reels", "High-Converting Statics", "Platform-Specific Editing", "Monthly Content Calendar"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    platforms: ["Instagram", "TikTok", "YouTube Shorts"],
    deliverables: "15 Posts/Month + 4 Premium Reels",
    perfectFor: "Brands who want to stop the scroll and build a viral organic presence."
  },
  {
    id: "competitor-analysis",
    title: "Competitor Analysis",
    icon: Search,
    description: "Uncover the exact strategies your competitors are using to win, and learn how to beat them.",
    includes: ["SWOT Analysis", "Ad Creative Tear-down", "SEO Gap Analysis", "Pricing Strategy Review"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    platforms: ["Google", "Social Media", "Industry Specific"],
    deliverables: "Comprehensive 20-page Strategy Report + 1-hour Debrief",
    perfectFor: "Businesses entering a new market or struggling to gain market share."
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    icon: Magnet,
    description: "Build a highly profitable funnel that turns cold traffic into warm, qualified leads consistently.",
    includes: ["Funnel Architecture", "High-converting Landing Pages", "Lead Magnet Creation", "Email Automation Setup"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    platforms: ["Meta Ads", "LinkedIn Ads", "ActiveCampaign"],
    deliverables: "End-to-end Funnel + 3 Email Sequences",
    perfectFor: "B2B or High-Ticket B2C businesses wanting consistent inbound leads."
  },
  {
    id: "sem-google-ads",
    title: "Search Engine Marketing",
    icon: BarChart3,
    description: "Capture high-intent buyers exactly when they are searching for your product or service.",
    includes: ["Keyword Research", "Ad Copywriting", "Bid Management", "Conversion Tracking Setup"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    platforms: ["Google Search", "Google Display", "YouTube"],
    deliverables: "Managed Campaigns + Bi-weekly Performance Reporting",
    perfectFor: "Businesses wanting immediate traffic and highly measurable ROI."
  }
];

export const addonServices = [
  "Social Media Management",
  "Email Marketing Campaigns",
  "Technical SEO Audit",
  "Comprehensive Brand Strategy"
];

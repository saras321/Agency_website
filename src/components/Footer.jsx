import { Link } from "react-router-dom";
import { ArrowRight, Globe, Image, Video, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-bold text-3xl tracking-tighter text-white">
                Savi <span className="text-primary">Media</span>
              </span>
            </Link>
            <p className="text-textMuted text-sm leading-relaxed max-w-xs">
              We Make Your Brand Impossible to Ignore. Premium digital marketing for ambitious SMBs and startups.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-textMuted hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Image size={20} /></a>
              <a href="#" className="text-textMuted hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Globe size={20} /></a>
              <a href="#" className="text-textMuted hover:text-white transition-colors bg-white/5 p-2 rounded-full"><Video size={20} /></a>
              <a href="#" className="text-textMuted hover:text-white transition-colors bg-white/5 p-2 rounded-full"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-textMuted">
              <li><Link to="/services" className="hover:text-primary transition-colors">Poster & Reel Creation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Competitor Analysis</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Lead Generation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Search Engine Marketing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-textMuted">
              <li><Link to="/work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Agency</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Savi Media. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-textMuted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

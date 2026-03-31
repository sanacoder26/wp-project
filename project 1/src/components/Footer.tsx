import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">FinConsult</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Empowering businesses with strategic financial insights and actionable consulting solutions for sustainable growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-blue-500" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-blue-500" />
                <span>info@finconsult.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-blue-500" />
                <span>123 Business Ave, Suite 100, NY</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Financial Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Business Strategy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Market Research</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tax Planning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Investment Advisory</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter to get latest updates and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-sm focus:outline-none focus:border-blue-500 text-sm text-white"
              />
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-sm font-medium transition-colors text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} FinConsult. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

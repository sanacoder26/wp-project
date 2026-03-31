import { Phone, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight">FinConsult</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Home</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">About Us</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Services</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Projects</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Pages</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Call Us Anytime</p>
                <p className="text-sm font-bold">+1 (234) 567-890</p>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-600 hover:text-blue-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

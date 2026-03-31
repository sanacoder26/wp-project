import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-8">Client Feedback</div>
        
        <div className="mb-10">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic">
            "FinConsult helped us refine our strategy and improve operations across the board. Their insights were practical, timely, and made a real difference in our growth and decision making."
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img 
            src="https://randomuser.me/api/portraits/women/46.jpg" 
            alt="Sarah Jones" 
            className="w-20 h-20 rounded-full mb-4 border-4 border-gray-50"
          />
          <h4 className="font-bold text-lg text-slate-900">Sarah Jones</h4>
          <p className="text-sm text-slate-500 mb-3">CEO, TechStart</p>
          
          <div className="flex gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <button className="w-3 h-3 rounded-full bg-blue-600"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-colors"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition-colors"></button>
        </div>
      </div>
    </section>
  );
}

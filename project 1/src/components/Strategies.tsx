import { CheckCircle2 } from 'lucide-react';

export default function Strategies() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Strategy meeting" 
              className="rounded-sm w-full h-[500px] object-cover"
            />
            {/* Floating Chart Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-sm shadow-xl hidden md:block w-64">
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Revenue Growth</h4>
              <div className="flex items-end gap-2 h-24">
                <div className="w-1/5 bg-blue-100 h-1/3 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-200 h-1/2 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-400 h-3/4 rounded-t-sm"></div>
                <div className="w-1/5 bg-blue-600 h-full rounded-t-sm"></div>
                <div className="w-1/5 bg-slate-800 h-5/6 rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Business Strategy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Smart Strategies For Smarter Business
            </h2>
            <p className="text-slate-600 mb-8">
              We develop comprehensive strategies that align with your core objectives, helping you navigate market complexities and achieve sustainable competitive advantage.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                <span className="font-medium text-slate-800">Ensure Safety & Protection</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                <span className="font-medium text-slate-800">Cutting-Edge IT Solutions</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-sm border border-gray-100">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                <span className="font-medium text-slate-800">Expert Guidance & Assistance</span>
              </div>
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

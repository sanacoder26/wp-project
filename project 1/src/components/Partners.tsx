import { CheckCircle2 } from 'lucide-react';

export default function Partners() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Consulting" 
                className="rounded-sm w-full h-64 object-cover mt-12"
              />
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="rounded-sm w-full h-64 object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-6 rounded-sm shadow-xl flex items-center gap-4 w-64">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                25+
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-tight">Years of<br/>Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">About Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Strategic Partners In Financial Growth
            </h2>
            <p className="text-slate-600 mb-8">
              We believe in building long-term partnerships with our clients. Our approach is rooted in transparency, expertise, and a deep understanding of market dynamics to deliver solutions that drive real value.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="text-blue-600 mt-1">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Creative Solutions</h4>
                  <p className="text-sm text-slate-600">Innovative approaches to complex financial challenges, ensuring your business stays ahead of the curve.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-600 mt-1">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Actionable Strategies</h4>
                  <p className="text-sm text-slate-600">Practical, data-driven plans that can be implemented immediately for measurable results.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition-colors">
                Discover More
              </button>
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Michael David</p>
                  <p className="text-xs text-slate-500">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

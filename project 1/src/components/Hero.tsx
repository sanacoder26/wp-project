export default function Hero() {
  return (
    <section className="relative bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 border border-blue-500/30">
              Welcome to FinConsult
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Strategic Finance & Consulting Solutions for Lasting Impact.
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              We help businesses navigate complex financial landscapes with tailored strategies, expert insights, and actionable solutions for sustainable growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-sm font-medium transition-colors">
                Get Free Consultation
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-sm font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-white rounded-sm shadow-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book free consultation</h3>
              <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Service Required</label>
                  <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-600">
                    <option>Financial Consulting</option>
                    <option>Business Strategy</option>
                    <option>Market Research</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-sm font-medium transition-colors mt-2">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

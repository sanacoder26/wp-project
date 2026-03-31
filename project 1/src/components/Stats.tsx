export default function Stats() {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '850+', label: 'Global Clients' },
    { value: '120+', label: 'Expert Consultants' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="relative py-20 bg-slate-900">
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2">Company Facts</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              See How We Accelerate Your Growth.
            </h2>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition-colors whitespace-nowrap">
            Discover More
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-700/50">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center ${index === 0 ? '' : 'pl-8'}`}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

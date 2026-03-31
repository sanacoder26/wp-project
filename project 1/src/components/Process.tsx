export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Strategic Growth',
      description: 'We analyze your current position and identify key opportunities for sustainable expansion.'
    },
    {
      number: '02',
      title: 'Fast Innovation',
      description: 'Implement cutting-edge solutions to streamline operations and stay ahead of competitors.'
    },
    {
      number: '03',
      title: 'Financial Planning',
      description: 'Develop robust financial models to optimize resource allocation and maximize ROI.'
    },
    {
      number: '04',
      title: 'Sustainable Success',
      description: 'Establish long-term frameworks to ensure consistent growth and market resilience.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">Work Process</div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 max-w-2xl mx-auto">
          A Clear Look At How We Guide You To Success
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 mx-auto bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-600 transition-colors duration-300">
                <span className="text-3xl font-bold text-slate-200 group-hover:text-blue-600 transition-colors duration-300">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-slate-600">
          Innovate boldly, adapt quickly, and lead with confidence. <a href="#" className="text-blue-600 font-semibold hover:underline">Consult Now</a>
        </div>
      </div>
    </section>
  );
}

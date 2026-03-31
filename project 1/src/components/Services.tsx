import { ArrowRight, Briefcase, LineChart, PieChart } from 'lucide-react';

const services = [
  {
    icon: <Briefcase size={32} />,
    title: 'Branding Consulting',
    description: 'Build a strong, recognizable brand identity that resonates with your target audience and stands out in the market.',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <LineChart size={32} />,
    title: 'Financial Consulting',
    description: 'Optimize your financial operations, manage risks, and develop strategies for sustainable long-term growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <PieChart size={32} />,
    title: 'Market Research',
    description: 'Gain deep insights into market trends, consumer behavior, and competitive landscapes to make informed decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Financial Solutions.
            </h2>
            <p className="text-slate-400">
              We offer a wide range of consulting services designed to address your specific business needs and drive measurable results.
            </p>
          </div>
          <button className="hidden md:inline-flex bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-2.5 rounded-sm font-medium transition-colors whitespace-nowrap">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-800 rounded-sm overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 bg-blue-600 p-4 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-2.5 rounded-sm font-medium transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

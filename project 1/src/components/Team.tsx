import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Guy Hawkins',
      role: 'Financial Advisor',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Jacob Jones',
      role: 'Business Consultant',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Kristin Watson',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Bessie Cooper',
      role: 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">Expert Team</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Top Minds In Finance &<br/>Strategy
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm bg-white shadow-sm">
              <div className="h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Social Overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <a href="#" className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook size={14} />
                </a>
                <a href="#" className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 bg-white text-slate-900 flex items-center justify-center rounded-sm hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>

              <div className="p-6 text-center border-t border-gray-100">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      category: 'Business Strategy',
      title: 'Tech strategies for business growth',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Financial Consulting',
      title: 'Expert advice for confident decisions',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Market Research',
      title: 'Creative digital growth strategies',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Success Stories That Speak<br/>For Themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="overflow-hidden h-60 relative">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-slate-900 rounded-sm">
                  {story.category}
                </div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pr-12 group-hover:text-blue-600 transition-colors">
                  {story.title}
                </h3>
                <a href="#" className="absolute right-6 bottom-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

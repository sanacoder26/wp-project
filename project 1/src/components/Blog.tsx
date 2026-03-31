import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      date: 'Mar 15, 2024',
      category: 'Consulting',
      title: 'Top Trends in Business Consulting',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Mar 10, 2024',
      category: 'Strategy',
      title: 'How To Ensure Business Continuity',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'Mar 05, 2024',
      category: 'Finance',
      title: 'Boost Your Financial Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              News & Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Latest Industry News &<br/>Tips
            </h2>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-sm font-medium transition-colors whitespace-nowrap">
            View All Posts
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-blue-600 font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <a href="#" className="inline-flex items-center text-slate-900 font-medium text-sm group-hover:text-blue-600 transition-colors">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

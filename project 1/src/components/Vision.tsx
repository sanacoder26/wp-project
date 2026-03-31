import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Vision() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-2">Mission & Vision</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Vision For Lasting Success
            </h2>
            <p className="text-slate-600 mb-8">
              We are committed to empowering businesses with the knowledge, strategies, and tools they need to achieve sustainable growth and navigate complex challenges with confidence.
            </p>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                className={`pb-3 px-4 font-medium text-sm transition-colors relative ${activeTab === 'mission' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
                {activeTab === 'mission' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />}
              </button>
              <button 
                className={`pb-3 px-4 font-medium text-sm transition-colors relative ${activeTab === 'vision' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                onClick={() => setActiveTab('vision')}
              >
                Our Vision
                {activeTab === 'vision' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />}
              </button>
            </div>

            <div className="mb-8 min-h-[120px]">
              {activeTab === 'mission' ? (
                <div>
                  <p className="text-slate-600 mb-4 text-sm">To provide unparalleled financial consulting services that drive measurable results, foster innovation, and build long-term value for our clients.</p>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Client-Centric Approach</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Integrity & Transparency</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Continuous Improvement</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Delivering Excellence</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <p className="text-slate-600 mb-4 text-sm">To be the globally recognized leader in financial consulting, setting the standard for strategic excellence and transformative business solutions.</p>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Global Reach</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Industry Leadership</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Sustainable Impact</li>
                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="text-blue-600" /> Future-Ready Strategies</li>
                  </ul>
                </div>
              )}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Discover More
            </button>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className="rounded-sm w-full h-[500px] object-cover"
            />
            
            {/* Floating Stat Cards */}
            <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-6 rounded-sm shadow-xl flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">95%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Project Success</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">50k</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

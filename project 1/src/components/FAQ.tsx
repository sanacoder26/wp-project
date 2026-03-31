import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get started with Business Plan?',
    answer: 'Getting started is easy. Simply reach out to us via our contact form or call us directly. We will schedule an initial consultation to understand your needs and outline a tailored plan.'
  },
  {
    question: 'What services do you offer for new startups?',
    answer: 'We offer comprehensive startup consulting including business model validation, financial forecasting, market entry strategy, and pitch deck preparation.'
  },
  {
    question: 'What industries do you typically work with?',
    answer: 'We have extensive experience across various sectors including technology, healthcare, manufacturing, retail, and financial services.'
  },
  {
    question: 'Can I schedule a free consultation online?',
    answer: 'Yes, absolutely! You can use the booking form on our homepage or visit our contact page to select a time that works best for you.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2">Find Answers</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 mb-8">
              Find answers to common questions about our consulting services, processes, and how we can help your business thrive.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="FAQ" 
              className="rounded-sm w-full h-64 object-cover opacity-80"
            />
          </div>

          {/* Right Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-slate-700 rounded-sm overflow-hidden transition-colors ${openIndex === index ? 'bg-slate-800 border-slate-600' : 'bg-transparent'}`}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-medium ${openIndex === index ? 'text-blue-400' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

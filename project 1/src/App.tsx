import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import Vision from './components/Vision';
import Stats from './components/Stats';
import Process from './components/Process';
import SuccessStories from './components/SuccessStories';
import Strategies from './components/Strategies';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Vision />
        <Stats />
        <Process />
        <SuccessStories />
        <Strategies />
        <Team />
        <FAQ />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import LearningAreas from './components/LearningAreas';
import BioBot from './components/BioBot';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Mission />
        <LearningAreas />
        
        {/* CTA Banner */}
        <section className="py-8 bg-white border-y border-slate-100">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="rounded-full border-2 border-bio-400 p-1 inline-block w-full max-w-2xl shadow-sm">
                 <div className="rounded-full bg-white py-3 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span className="text-slate-800 font-medium text-sm sm:text-base">Precisa de um reforço específico?</span>
                    <a href="#contact" className="text-bio-600 font-bold hover:text-bio-700 flex items-center text-sm sm:text-base">
                       Agende uma aula particular <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                 </div>
              </div>
           </div>
        </section>

        <BioBot />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-bio-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-bio-100 text-bio-800 text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-bio-500 mr-2"></span>
              Aulas de Biologia & Ciências
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Desvendando a</span>{' '}
              <span className="block text-bio-600 xl:inline">Vida e a Natureza</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Bem-vindo ao portal da Prof. Janielly Oliveira. Aqui exploramos o fascinante mundo da biologia, desde as células microscópicas até os grandes ecossistemas.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
               <a href="#materials" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bio-600 hover:bg-bio-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Acessar Materiais
                  <ArrowRight className="ml-2 h-5 w-5" />
               </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md animate-float">
               {/* Placeholder for Teacher Image - Using a nature/biology related placeholder */}
               <div className="relative block w-full bg-white rounded-2xl overflow-hidden glass-card p-2">
                 <img
                    className="w-full rounded-xl"
                    src="https://picsum.photos/600/600"
                    alt="Biologia e Natureza"
                 />
                 <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl">
                    <p className="font-semibold text-slate-800">"A biologia é a única ciência onde a multiplicação significa o mesmo que a divisão."</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
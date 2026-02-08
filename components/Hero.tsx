import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-8 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative bg-white">
      <div className="max-w-7xl mx-auto relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mb-10 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-bio-50 text-bio-800 text-xs sm:text-sm font-medium mb-4 border border-bio-100">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-bio-500" />
              Explore o mundo da vida
            </div>
            <h1 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              Aprenda Biologia de forma <span className="text-bio-500">Simples</span> e <span className="text-bio-500">Fascinante</span>
            </h1>
            <p className="mt-3 text-base text-slate-600 sm:mt-4 sm:max-w-xl sm:mx-auto md:mt-4 md:text-lg lg:mx-0 leading-relaxed">
              Bem-vindo ao portal da Professora Janielly Oliveira. Descomplicamos a ciência da vida para você alcançar seus objetivos com excelência.
            </p>
            <div className="mt-6 sm:flex sm:justify-center lg:justify-start gap-3">
               <a href="#biobot" className="flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-bio-600 hover:bg-bio-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Tirar Dúvida com IA
                  <ArrowRight className="ml-2 h-4 w-4" />
               </a>
               <a href="#learning" className="flex items-center justify-center px-6 py-3 border border-slate-200 text-sm sm:text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow transition-all duration-300 mt-3 sm:mt-0">
                  Ver Conteúdos
               </a>
            </div>
          </div>

          {/* Image Content with Frame */}
          <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
               {/* Background Decorative Blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bio-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
               
               {/* The "Frame" Container */}
               <div className="relative bg-white p-3 sm:p-4 rounded-[2rem] shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-500 ease-out z-10 mx-auto lg:mr-0 lg:ml-auto w-[85%] sm:w-full">
                 <img
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/3]"
                    src="https://iili.io/fmggEhP.jpg"
                    alt="Prof. Janielly Oliveira"
                 />
                 
                 {/* Experience Badge - Optimized Position */}
                 <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-float">
                    <div className="bg-bio-100 p-2 rounded-lg">
                      <Sparkles className="w-5 h-5 text-bio-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Experiência</p>
                      <p className="text-sm sm:text-base font-bold text-slate-900">+10 Anos Ensinando</p>
                    </div>
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
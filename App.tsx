import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { FEATURES } from './constants';
import { Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features Section */}
        <section id="about" className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Metodologia de Ensino
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                Uma abordagem moderna e conectada com a realidade dos estudantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-bio-50/50 border border-bio-100">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials Preview Section */}
        <section id="materials" className="py-16 bg-slate-50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-bio-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="md:flex md:items-center md:justify-between mb-10">
                 <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-bold leading-7 text-slate-900 sm:text-4xl sm:truncate">
                       Materiais Recentes
                    </h2>
                 </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                 {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100">
                       <div className="h-48 bg-slate-200 relative">
                          <img src={`https://picsum.photos/400/300?random=${i}`} alt="Material thumbnail" className="w-full h-full object-cover" />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-semibold text-bio-700">
                             PDF
                          </div>
                       </div>
                       <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">Introdução à Citologia {i}</h3>
                          <p className="text-slate-600 mb-4 text-sm">Resumo completo sobre células procariontes e eucariontes, com esquemas visuais.</p>
                          <button className="text-bio-600 font-medium hover:text-bio-700 flex items-center text-sm">
                             Baixar Material <ExternalLink className="ml-1 w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-bio-50 to-white border border-bio-100">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Vamos Conversar?</h2>
                 <p className="text-slate-600 mb-8 text-lg">
                    Tem dúvidas sobre as aulas, materiais ou quer agendar uma monitoria? Entre em contato através das redes sociais.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-bio-600 hover:bg-bio-700 transition-colors">
                       <Mail className="w-5 h-5 mr-2" />
                       Enviar E-mail
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                       <Instagram className="w-5 h-5 mr-2 text-pink-600" />
                       Instagram
                    </a>
                     <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                       <Linkedin className="w-5 h-5 mr-2 text-blue-700" />
                       LinkedIn
                    </a>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
               <span className="text-xl font-bold text-bio-800">Prof. Janielly Oliveira</span>
               <p className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
               <a href="#" className="text-slate-400 hover:text-bio-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
               </a>
               <a href="#" className="text-slate-400 hover:text-bio-600 transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
               </a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
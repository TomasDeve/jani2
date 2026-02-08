import React from 'react';
import { Instagram, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
             <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Fale Comigo</h2>
             <p className="mt-2 text-base text-slate-500">
                Dúvidas, parcerias ou agendamento de aulas?
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
             {/* Contact Info */}
             <div className="space-y-6">
                <div className="flex items-start">
                   <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-bio-100 text-bio-600">
                         <Instagram className="h-5 w-5" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h3 className="text-base font-medium text-slate-900">Instagram</h3>
                      <p className="mt-0.5 text-sm text-slate-500">Dicas diárias</p>
                      <a href="#" className="mt-1 block text-sm text-bio-600 font-medium hover:text-bio-500">
                         @prof.janiellyoliveira
                      </a>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-bio-100 text-bio-600">
                         <Mail className="h-5 w-5" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h3 className="text-base font-medium text-slate-900">Email</h3>
                      <p className="mt-0.5 text-sm text-slate-500">Para contatos profissionais</p>
                      <a href="mailto:contato@janiellybio.com" className="mt-1 block text-sm text-bio-600 font-medium hover:text-bio-500">
                         contato@janiellybio.com
                      </a>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-bio-100 text-bio-600">
                         <MapPin className="h-5 w-5" />
                      </div>
                   </div>
                   <div className="ml-4">
                      <h3 className="text-base font-medium text-slate-900">Localização</h3>
                      <p className="mt-0.5 text-sm text-slate-500">Atendimento presencial e online.</p>
                   </div>
                </div>
             </div>

             {/* Form */}
             <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                         Nome
                      </label>
                      <input
                         type="text"
                         name="name"
                         id="name"
                         className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-bio-500 focus:ring-bio-500 text-sm px-3 py-2.5 border"
                         placeholder="Seu nome completo"
                      />
                   </div>

                   <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                         Email
                      </label>
                      <input
                         type="email"
                         name="email"
                         id="email"
                         className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-bio-500 focus:ring-bio-500 text-sm px-3 py-2.5 border"
                         placeholder="seu@email.com"
                      />
                   </div>

                   <div>
                      <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                         Mensagem
                      </label>
                      <textarea
                         id="message"
                         name="message"
                         rows={3}
                         className="block w-full rounded-lg border-slate-200 shadow-sm focus:border-bio-500 focus:ring-bio-500 text-sm px-3 py-2.5 border"
                         placeholder="Como posso te ajudar?"
                      />
                   </div>

                   <div>
                      <button
                         type="submit"
                         className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-bio-600 hover:bg-bio-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bio-500 transition-colors"
                      >
                         <Send className="w-4 h-4 mr-2" />
                         Enviar Mensagem
                      </button>
                   </div>
                </form>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Contact;
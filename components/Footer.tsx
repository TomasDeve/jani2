import React from 'react';
import { Instagram, Mail, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
             <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Leaf className="w-6 h-6 text-bio-500" />
                <span className="text-xl font-bold text-white">Prof. Janielly Oliveira</span>
             </div>
             <div className="flex space-x-8 text-sm font-medium">
                <a href="#home" className="hover:text-bio-400 transition-colors">Início</a>
                <a href="#about" className="hover:text-bio-400 transition-colors">Sobre</a>
                <a href="#learning" className="hover:text-bio-400 transition-colors">Aulas</a>
                <a href="#contact" className="hover:text-bio-400 transition-colors">Contato</a>
             </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col items-center">
             <p className="text-sm text-slate-500 text-center">
                © {new Date().getFullYear()} Tomas Eugênio Souto Maior. Todos os direitos reservados.
             </p>
             <p className="text-xs text-slate-600 mt-2 flex items-center">
                <span className="text-bio-600 mr-1">&lt;&gt;</span> Desenvolvido por <strong className="text-bio-500 ml-1">Tomas Eugênio Souto Maior</strong> <span className="text-slate-700 ml-1">(Desenvolvedor Full-Stack)</span>
             </p>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
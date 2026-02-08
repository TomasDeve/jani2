import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-bio-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bio-50 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8 border border-bio-100">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Minha Missão</h2>
            <p className="text-base text-slate-700 italic leading-relaxed">
              "Acredito que a biologia não é apenas uma disciplina escolar, mas a chave para entendermos a nós mesmos e o mundo ao nosso redor. Meu objetivo é despertar essa curiosidade científica em cada aluno, transformando aulas em jornadas de descoberta."
            </p>
            <div className="pt-3 border-t border-bio-200">
               <p className="text-bio-700 font-bold text-base text-right">- Janielly Oliveira</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img 
               src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Paisagem natural representando a biologia" 
               className="rounded-xl shadow-md w-full h-48 md:h-64 object-cover sepia-[.20]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
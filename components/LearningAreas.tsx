import React from 'react';
import { LEARNING_AREAS } from '../constants';

const LearningAreas: React.FC = () => {
  return (
    <section id="learning" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-bio-600 font-semibold tracking-wider text-xs uppercase">Áreas de Estudo</span>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl mt-1">
            O Que Você Vai Aprender
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-500 mx-auto">
            Uma abordagem completa dos principais temas da biologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEARNING_AREAS.map((area, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-bio-200 group">
              <div className="w-10 h-10 bg-bio-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-bio-100 transition-colors">
                {area.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{area.title}</h3>
              <p className="text-slate-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningAreas;
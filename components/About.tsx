import React from 'react';
import { FEATURES_ABOUT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Sobre a Professora
          </h2>
          <div className="mt-3 h-1 w-16 bg-bio-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES_ABOUT.map((feature, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-2xl hover:shadow-md transition-all duration-300 border border-slate-100 text-center group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className={`p-2.5 rounded-full ${index === 1 ? 'bg-bio-100' : index === 2 ? 'bg-purple-100' : 'bg-blue-100'}`}>
                   {React.cloneElement(feature.icon as React.ReactElement, {
                      className: `w-6 h-6 ${index === 1 ? 'text-bio-600' : index === 2 ? 'text-purple-600' : 'text-blue-600'}`
                   })}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
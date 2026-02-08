import React from 'react';
import { BookOpen, Microscope, GraduationCap, Users, Dna, Leaf, Activity, Brain } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Aulas', href: '#learning' },
  { name: 'BioBot IA', href: '#biobot' },
  { name: 'Contato', href: '#contact' },
];

export const FEATURES_ABOUT = [
  {
    title: 'Formação Acadêmica',
    description: 'Licenciada em Ciências Biológicas com especialização em Genética e Biologia Molecular. Constante atualização em congressos e simpósios.',
    icon: <GraduationCap className="w-8 h-8 text-bio-600" />,
  },
  {
    title: 'Metodologia Exclusiva',
    description: 'Uso de mapas mentais, gamificação e tecnologia para tornar o aprendizado leve, visual e eficiente para o ENEM e vestibulares.',
    icon: <Activity className="w-8 h-8 text-bio-600" />,
  },
  {
    title: 'Materiais Didáticos',
    description: 'Autora de apostilas focadas e listas de exercícios comentadas que já ajudaram centenas de alunos a atingirem suas metas.',
    icon: <BookOpen className="w-8 h-8 text-bio-600" />,
  },
];

export const LEARNING_AREAS = [
  {
    title: 'Genética',
    description: 'Desvendando os mistérios do DNA, hereditariedade e biotecnologia.',
    icon: <Dna className="w-8 h-8 text-bio-600" />,
  },
  {
    title: 'Ecologia',
    description: 'Compreendendo as relações entre os seres vivos e o meio ambiente.',
    icon: <Leaf className="w-8 h-8 text-bio-600" />,
  },
  {
    title: 'Citologia',
    description: 'O estudo das células, a unidade fundamental da vida.',
    icon: <Microscope className="w-8 h-8 text-bio-600" />,
  },
  {
    title: 'Fisiologia',
    description: 'Como funcionam os sistemas do corpo humano e animal.',
    icon: <Brain className="w-8 h-8 text-bio-600" />,
  },
];
import React from 'react';
import { BookOpen, Microscope, GraduationCap, Users } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Materiais', href: '#materials' },
  { name: 'Contato', href: '#contact' },
];

export const FEATURES = [
  {
    title: 'Aulas Interativas',
    description: 'Conteúdo dinâmico e envolvente para facilitar o aprendizado de biologia.',
    icon: <Users className="w-6 h-6 text-bio-600" />,
  },
  {
    title: 'Material Didático',
    description: 'Resumos, slides e listas de exercícios preparados com excelência.',
    icon: <BookOpen className="w-6 h-6 text-bio-600" />,
  },
  {
    title: 'Laboratório Virtual',
    description: 'Experiências práticas e demonstrações visuais de conceitos biológicos.',
    icon: <Microscope className="w-6 h-6 text-bio-600" />,
  },
  {
    title: 'Preparação ENEM',
    description: 'Foco nos conteúdos mais recorrentes nos vestibulares e ENEM.',
    icon: <GraduationCap className="w-6 h-6 text-bio-600" />,
  },
];
export const site = {
  name: 'Angel Villar-Corrales',
  shortName: 'AVC',
  role: 'Research Scientist at FAIR, Meta',
  location: 'Paris, France',
  email: 'angelvillarcorrales@gmail.com',
  academicEmail: 'villar@ais.uni-bonn.de',
  portrait: '/images/angel-villar-corrales.jpg',
  intro:
    'I build learning systems that understand objects, anticipate how scenes evolve, and turn visual experience into useful action.',
  about:
    'My research sits at the intersection of computer vision, object-centric learning, video prediction, and robotics. I am especially interested in structured world models: systems that can separate a scene into meaningful entities, reason about their interactions, and predict what could happen next.',
  personal:
    'Away from research, you can usually find me at a local metalcore concert, reading by the river, training for the next 10K, or catching up with friends at a nearby Biergarten.',
  quote: 'Un mundo que recorrer, un futuro que conquistar.',
  quoteSource: 'Riot Propaganda — El Peso del Tiempo',
  links: {
    github: 'https://github.com/angelvillar96',
    orcid: 'https://orcid.org/0000-0001-5805-2098',
    scholar:
      'https://scholar.google.com/scholar?q=%22Angel+Villar-Corrales%22',
    linkedin: 'https://www.linkedin.com/in/angel-villar-corrales/',
  },
} as const;

export const researchThemes = [
  {
    number: '01',
    title: 'Object-centric learning',
    description:
      'Learning structured representations that organize a visual scene into objects and their relationships.',
  },
  {
    number: '02',
    title: 'Video & world models',
    description:
      'Predicting plausible futures across space and time, from pixels to compact latent representations.',
  },
  {
    number: '03',
    title: 'Embodied intelligence',
    description:
      'Connecting perception, dynamics, and action so that robots can learn useful behavior from experience.',
  },
] as const;

export const expertise = [
  'Object-centric learning',
  'Video prediction',
  'Computer vision',
  'Deep learning',
  'Robot perception',
  'PyTorch',
] as const;

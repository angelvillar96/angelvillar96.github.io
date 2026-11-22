/**
 * Profile information shown across the site.
 * Text fields support [links](https://…), **bold**, and *italic*.
 */
export const site = {
  name: 'Angel Villar-Corrales',
  /** Spellings of your name that are highlighted in author lists. */
  authorAliases: ['Angel Villar-Corrales', 'Angel Villar Corrales', 'Ángel Villar-Corrales', 'A. Villar-Corrales'],
  role: 'Research Scientist',
  organization: 'FAIR at Meta',
  organizationUrl: 'https://ai.meta.com/research/',
  location: 'Paris, France',
  url: 'https://angelvillarcorrales.com',
  email: 'angelvillarcorrales@gmail.com',
  portrait: '/images/angel-villar-corrales.jpg',
  socialImage: '/images/social-card.png',
  description:
    'Research Scientist at FAIR (Meta) in Paris working on self-supervised speech and multimodal representation learning, world models, and video prediction.',
  bio: [
    'I am a **Research Scientist** at [FAIR at Meta](https://ai.meta.com/research/) in Paris, where I work on self-supervised **speech and multimodal representation learning**: models that learn efficiently from raw speech and naturalistic egocentric video. More broadly, I am interested in how machines can learn compact, structured representations of the world and use them to predict, plan, and act.',
    'Before joining FAIR, I was a doctoral researcher in the [Autonomous Intelligent Systems](https://www.ais.uni-bonn.de/) group at the University of Bonn, advised by [Prof. Sven Behnke](https://www.ais.uni-bonn.de/behnke/). There, I worked on **object-centric learning**, **video prediction**, and **world models**, and was part of team [NimbRo](https://www.ais.uni-bonn.de/nimbro/Humanoid/), which won the RoboCup Humanoid AdultSize soccer tournament in 2022 and 2023. Earlier, I studied at FAU Erlangen-Nürnberg and the University of Vigo.',
  ],
  interests: [
    'representation learning',
    'speech & multimodal learning',
    'world models',
    'object-centric learning',
    'video prediction',
    'robotics',
  ],
  links: {
    scholar: 'https://scholar.google.com/citations?user=NCUoKLMAAAAJ',
    github: 'https://github.com/angelvillar96',
    linkedin: 'https://www.linkedin.com/in/angel-villar-corrales/',
    orcid: 'https://orcid.org/0000-0001-5805-2098',
  },
} as const;

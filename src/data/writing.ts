export type Post = {
  title: string;
  date: string;
  year: number;
  description: string;
  tags: string[];
  href?: string;
};

export const posts: Post[] = [
  {
    title: 'TextOCVP: Text-Conditioned Object-Centric Video Generation',
    date: '24 February 2025',
    year: 2025,
    description: 'Introducing an object-centric model for image-to-video generation guided by textual descriptions, with a structured latent space for control and interpretation.',
    tags: ['Research', 'Object-centric learning', 'Video prediction'],
    href: 'https://play-slot.github.io/TextOCVP/',
  },
  {
    title: 'PlaySlot: Controllable Object-Centric Video Prediction',
    date: '12 February 2025',
    year: 2025,
    description: 'A video prediction model that infers object representations and latent actions from unlabeled video, enabling multiple controllable futures and learned policies.',
    tags: ['Research', 'Video prediction', 'Transformers'],
    href: 'https://play-slot.github.io/PlaySlot/',
  },
  {
    title: 'MCDS-VSS: Structured Video Segmentation with Self-Supervised Depth & Motion',
    date: '5 June 2024',
    year: 2024,
    description: 'A structured filtering model that uses self-supervised depth, ego-motion, and object motion to improve temporal consistency in automotive video segmentation.',
    tags: ['Research', 'Computer vision', 'Segmentation'],
    href: 'https://sites.google.com/view/mcds-vss/home',
  },
  {
    title: 'RoboCup Soccer 2023 Winner Paper',
    date: '20 January 2024',
    year: 2024,
    description: 'Our NimbRo platform paper covers the latest perception, kicking, and gait modules behind the 2023 Humanoid AdultSize win.',
    tags: ['Research', 'RoboCup', 'Robotics'],
    href: 'https://arxiv.org/abs/2401.05909',
  },
  {
    title: 'NimbRo Soccer at RoboCup 2023',
    date: '19 July 2023',
    year: 2023,
    description: 'A field note from Bordeaux, where team NimbRo won the AdultSize robot soccer competition with an aggregate score of 66–0.',
    tags: ['Life', 'RoboCup', 'Travel'],
    href: 'https://www.ais.uni-bonn.de/nimbro/Humanoid/',
  },
  {
    title: 'Object-Centric Video Prediction',
    date: '28 February 2023',
    year: 2023,
    description: 'Predictor transformers that decouple temporal dynamics and object interactions to learn consistent, interpretable scene representations.',
    tags: ['Research', 'Object-centric learning', 'Video prediction'],
    href: 'https://sites.google.com/view/ocvp-vp',
  },
  {
    title: 'MSPred: Hierarchical Video Prediction at Multiple Scales',
    date: '7 October 2022',
    year: 2022,
    description: 'A look at our BMVC 2022 model for forecasting future outcomes at different spatial and temporal levels of granularity.',
    tags: ['Research', 'Video prediction', 'PyTorch'],
    href: 'https://sites.google.com/view/mspred',
  },
  {
    title: 'TemplaTorch',
    date: '24 April 2022',
    year: 2022,
    description: 'A simple, effective project template for quick deep-learning prototyping and reproducible experimentation.',
    tags: ['Projects', 'Deep learning', 'PyTorch'],
    href: 'https://github.com/angelvillar96/TemplaTorch',
  },
  {
    title: 'Unsupervised Image Decomposition with Phase-Correlation Networks',
    date: '11 December 2021',
    year: 2021,
    description: 'Our work on decomposing images into object components with frequency-domain neural networks, accepted at VISAPP 2022.',
    tags: ['Research', 'Image decomposition', 'PyTorch'],
    href: 'https://arxiv.org/abs/2110.03473',
  },
  {
    title: 'Starting my PhD',
    date: '14 March 2021',
    year: 2021,
    description: 'Beginning doctoral studies with the Autonomous Intelligent Systems group at the University of Bonn, at the intersection of computer vision and representation learning.',
    tags: ['Life', 'About me'],
  },
  {
    title: 'Architectural Designs for Super-Resolution of Noisy Images',
    date: '13 February 2021',
    year: 2021,
    description: 'Investigating how denoising modules can be combined with strong super-resolution models across several noise settings.',
    tags: ['Research', 'Super-resolution', 'Signal processing'],
    href: 'https://github.com/angelvillar96/super-resolution-noisy-images',
  },
  {
    title: 'HackZurich 2020',
    date: '27 September 2020',
    year: 2020,
    description: 'Forty hours, one sponsor challenge, and an unconventional remote edition of one of Europe’s largest hackathons.',
    tags: ['Life', 'Hackathon', 'Travel'],
    href: 'https://github.com/angelvillar96/SeeFood-HackZurich2020',
  },
  {
    title: 'Cross-Version Retrieval of Music Recordings',
    date: '11 May 2020',
    year: 2020,
    description: 'Siamese neural networks, metric-learning losses, and a web demonstrator for searching across hundreds of hours of music.',
    tags: ['Projects', 'Music information retrieval', 'Signal processing'],
  },
  {
    title: 'Histopathologic Cancer Detection',
    date: '19 April 2020',
    year: 2020,
    description: 'Training convolutional networks to identify cancer directly from a large corpus of histopathology image patches.',
    tags: ['Projects', 'Computer vision', 'Kaggle'],
  },
  {
    title: 'Reading List 2020 — First Quarter',
    date: '5 April 2020',
    year: 2020,
    description: 'Short reviews of six very different books, from startup methodology to the modern novel.',
    tags: ['Life', 'Books', 'Reading'],
  },
  {
    title: 'Detecting Road Markings',
    date: '27 March 2020',
    year: 2020,
    description: 'Training a convolutional network on a custom synthetic dataset, then tuning it to generalize to real road scenes.',
    tags: ['Projects', 'Computer vision', 'PyTorch'],
  },
  {
    title: 'Tutorial on Autoencoders',
    date: '23 March 2020',
    year: 2020,
    description: 'A four-part, code-first introduction to dimensionality reduction, denoising, convolutional architectures, and variational autoencoders.',
    tags: ['Tutorials', 'Deep learning', 'Keras'],
    href: 'https://github.com/angelvillar96/Tutorial-on-Autoencoders',
  },
  {
    title: 'Review: Zero to One',
    date: '9 March 2020',
    year: 2020,
    description: 'Thoughts on Peter Thiel’s concise account of what helps a startup create something singular and enduring.',
    tags: ['Life', 'Books', 'Opinion'],
  },
  {
    title: 'In Defense of Local Music Scenes',
    date: '17 February 2020',
    year: 2020,
    description: 'A reflection on independent musicians, live music, and the cultural value of healthy local scenes.',
    tags: ['Life', 'Music', 'Opinion'],
  },
  {
    title: 'FaceEmoji: When Faces Become Emojis',
    date: '11 February 2020',
    year: 2020,
    description: 'A weekend project combining face detection and expression classification to replace faces with matching emoji.',
    tags: ['Projects', 'Computer vision', 'Image processing'],
    href: 'https://github.com/angelvillar96/FaceEmoji',
  },
];

export const postCategories = ['All', 'Research', 'Projects', 'Tutorials', 'Life'] as const;

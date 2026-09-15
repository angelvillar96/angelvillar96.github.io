export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  href: string;
  accent: 'blue' | 'green' | 'orange' | 'violet';
  group?: 'research' | 'other';
};

export const projects: Project[] = [
  {
    title: 'PlaySlot',
    kicker: 'World models · ICML 2025',
    description:
      'Controllable object-centric video prediction and planning through inverse latent dynamics.',
    tags: ['Object-centric', 'Video', 'Planning'],
    href: 'https://play-slot.github.io/PlaySlot/',
    accent: 'blue',
    group: 'research',
  },
  {
    title: 'TextOCVP',
    kicker: 'Language + vision · TMLR 2026',
    description:
      'Language-guided video generation through compositional object-centric scene representations.',
    tags: ['Language', 'Generation', 'Objects'],
    href: 'https://play-slot.github.io/TextOCVP/',
    accent: 'violet',
    group: 'research',
  },
  {
    title: 'MCDS-VSS',
    kicker: 'Scene understanding · BMVC 2024',
    description:
      'Video semantic segmentation for moving cameras using geometry and motion as self-supervision.',
    tags: ['Segmentation', 'Geometry', 'Motion'],
    href: 'https://sites.google.com/view/mcds-vss/home',
    accent: 'green',
    group: 'research',
  },
  {
    title: 'MSPred',
    kicker: 'Video prediction · BMVC 2022',
    description:
      'Hierarchical recurrent networks that forecast video at multiple spatial and temporal scales.',
    tags: ['Prediction', 'Multi-scale', 'PyTorch'],
    href: 'https://sites.google.com/view/mspred/home',
    accent: 'orange',
    group: 'research',
  },
  {
    title: 'NimbRoNet3',
    kicker: 'Robot perception · RoboCup',
    description:
      'Real-time visual perception for a humanoid robot competing on the soccer field.',
    tags: ['Robotics', 'Perception', 'Real-time'],
    href: 'https://github.com/angelvillar96/NimbRoNet3',
    accent: 'green',
    group: 'research',
  },
  {
    title: 'Object-Centric Video Prediction',
    kicker: 'Structured prediction · ICIP 2023',
    description:
      'Predictor transformers that decouple temporal dynamics from object interactions for consistent and interpretable forecasts.',
    tags: ['Object-centric', 'Transformers', 'Video'],
    href: 'https://sites.google.com/view/ocvp-vp',
    accent: 'blue',
    group: 'research',
  },
  {
    title: 'PCDNet',
    kicker: 'Image decomposition · VISAPP 2022',
    description:
      'Unsupervised image decomposition into transformed instances of learned object prototypes.',
    tags: ['Decomposition', 'Phase correlation', 'PyTorch'],
    href: 'https://github.com/AIS-Bonn/Unsupervised-Decomposition-PCDNet',
    accent: 'violet',
    group: 'research',
  },
  {
    title: 'Super-resolution of Noisy Images',
    kicker: 'Image restoration · ICASSP 2021',
    description:
      'Neural architectures that combine denoising with state-of-the-art image super-resolution.',
    tags: ['Super-resolution', 'Denoising', 'Vision'],
    href: 'https://github.com/angelvillar96/super-resolution-noisy-images',
    accent: 'orange',
    group: 'research',
  },
  {
    title: 'Music Version Retrieval',
    kicker: 'Music information retrieval',
    description:
      'Siamese networks and metric-learning losses for efficient cross-version retrieval of music recordings.',
    tags: ['Metric learning', 'Audio', 'Retrieval'],
    href: 'https://www.audiolabs-erlangen.de/',
    accent: 'green',
    group: 'research',
  },
  {
    title: 'TemplaTorch',
    kicker: 'Developer tools · PyTorch',
    description:
      'A simple project template for consistent, quick deep-learning prototyping and experimentation.',
    tags: ['PyTorch', 'Template', 'Open source'],
    href: 'https://github.com/angelvillar96/TemplaTorch',
    accent: 'blue',
    group: 'other',
  },
  {
    title: 'Road Lane Segmentation',
    kicker: 'Computer vision · Coursework',
    description:
      'A convolutional network trained on a custom synthetic dataset to recognize road-lane markings.',
    tags: ['Segmentation', 'Synthetic data', 'PyTorch'],
    href: 'https://github.com/angelvillar96',
    accent: 'orange',
    group: 'other',
  },
  {
    title: 'FaceEmoji',
    kicker: 'Weekend project · Computer vision',
    description:
      'Face detection and expression recognition that replaces each detected face with a matching emoji.',
    tags: ['Face detection', 'Classification', 'OpenCV'],
    href: 'https://github.com/angelvillar96/FaceEmoji',
    accent: 'violet',
    group: 'other',
  },
  {
    title: 'Cancer Detection',
    kicker: 'Kaggle · Top 5%',
    description:
      'Convolutional networks trained to identify cancer in histopathology image patches.',
    tags: ['Medical imaging', 'Classification', 'Kaggle'],
    href: 'https://www.kaggle.com/c/histopathologic-cancer-detection',
    accent: 'green',
    group: 'other',
  },
];

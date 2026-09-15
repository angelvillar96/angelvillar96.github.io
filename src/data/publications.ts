export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  tags: string[];
  paper: string;
  code?: string;
  project?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'SpidR-Adapt: A Universal Speech Representation Model for Few-Shot Adaptation',
    authors: 'M. Luthra, J. Shen, M. Poli, et al., A. Villar-Corrales, et al.',
    venue: 'ACL',
    year: 2026,
    tags: ['Representation learning', 'Speech'],
    paper: 'https://doi.org/10.18653/v1/2026.acl-long.1325',
  },
  {
    title: 'Slot-MPC: Goal-Conditioned Model Predictive Control with Object-Centric Representations',
    authors: 'J. Spieler, A. Villar-Corrales, S. Behnke',
    venue: 'Preprint',
    year: 2026,
    tags: ['Object-centric learning', 'Control'],
    paper: 'https://arxiv.org/abs/2605.14937',
  },
  {
    title: 'TextOCVP: Object-Centric Video Prediction with Language Guidance',
    authors: 'A. Villar-Corrales, G. Plepi, S. Behnke',
    venue: 'Transactions on Machine Learning Research',
    year: 2026,
    tags: ['Object-centric learning', 'Video prediction', 'Language'],
    paper: 'https://arxiv.org/abs/2502.11655',
    code: 'https://github.com/angelvillar96/TextOCVP',
    project: 'https://play-slot.github.io/TextOCVP/',
    featured: true,
  },
  {
    title: 'PlaySlot: Learning Inverse Latent Dynamics for Controllable Object-Centric Video Prediction and Planning',
    authors: 'A. Villar-Corrales, S. Behnke',
    venue: 'ICML',
    year: 2025,
    tags: ['Object-centric learning', 'Video prediction', 'Robotics'],
    paper: 'https://arxiv.org/abs/2502.07600',
    code: 'https://github.com/angelvillar96/PlaySlot',
    project: 'https://play-slot.github.io/PlaySlot/',
    featured: true,
  },
  {
    title: 'SOLD: Slot Object-Centric Latent Dynamics Models for Relational Manipulation Learning from Pixels',
    authors: 'M. Mosbach, J. N. Ewertz, A. Villar-Corrales, S. Behnke',
    venue: 'ICML',
    year: 2025,
    tags: ['Object-centric learning', 'Robotics'],
    paper: 'https://arxiv.org/abs/2410.08822',
  },
  {
    title: 'VideoPCDNet: Video Parsing and Prediction with Phase Correlation Networks',
    authors: 'N. J. R. Vicente, E. Lehner, A. Villar-Corrales, J. Nogga, S. Behnke',
    venue: 'ICANN',
    year: 2025,
    tags: ['Video prediction', 'Scene decomposition'],
    paper: 'https://arxiv.org/abs/2506.19621',
  },
  {
    title: 'MCDS-VSS: Moving Camera Dynamic Scene Video Semantic Segmentation by Filtering with Self-Supervised Geometry and Motion',
    authors: 'A. Villar-Corrales, M. Austermann, S. Behnke',
    venue: 'BMVC',
    year: 2024,
    tags: ['Video segmentation', 'Self-supervision'],
    paper: 'https://arxiv.org/abs/2405.19921',
    code: 'https://github.com/angelvillar96/MCDS-VSS',
    project: 'https://sites.google.com/view/mcds-vss/home',
    featured: true,
  },
  {
    title: 'RoboCup 2023 Humanoid AdultSize Winner NimbRo: NimbRoNet3 Visual Perception and Responsive Gait with Waveform In-Walk Kicks',
    authors: 'D. Pavlichenko, G. Ficht, A. Villar-Corrales, et al.',
    venue: 'RoboCup Symposium',
    year: 2024,
    tags: ['Robotics', 'Perception'],
    paper: 'https://arxiv.org/abs/2401.05909',
    code: 'https://github.com/angelvillar96/NimbRoNet3',
  },
  {
    title: 'Object-Centric Video Prediction via Decoupling of Object Dynamics and Interactions',
    authors: 'A. Villar-Corrales, I. Wahdan, S. Behnke',
    venue: 'IEEE ICIP',
    year: 2023,
    tags: ['Object-centric learning', 'Video prediction'],
    paper: 'https://arxiv.org/abs/2302.11850',
    code: 'https://github.com/AIS-Bonn/OCVP-object-centric-video-prediction',
  },
  {
    title: 'RoboCup 2022 AdultSize Winner NimbRo: Upgraded Perception, Capture Steps Gait and Phase-Based In-Walk Kicks',
    authors: 'D. Pavlichenko, G. Ficht, A. Amini, et al., A. Villar-Corrales, et al.',
    venue: 'RoboCup Symposium',
    year: 2023,
    tags: ['Robotics', 'Perception'],
    paper: 'https://arxiv.org/abs/2302.02956',
  },
  {
    title: 'Enhancing Human Pose Estimation in Ancient Vase Paintings via Perceptually-Grounded Style Transfer Learning',
    authors: 'P. Madhu, A. Villar-Corrales, R. Kosti, et al.',
    venue: 'ACM Journal on Computing and Cultural Heritage',
    year: 2022,
    tags: ['Pose estimation', 'Style transfer'],
    paper: 'https://arxiv.org/abs/2012.05616',
    code: 'https://github.com/angelvillar96/STLPose',
  },
  {
    title: 'MSPred: Video Prediction at Multiple Spatio-Temporal Scales with Hierarchical Recurrent Networks',
    authors: 'A. Villar-Corrales, A. Karapetyan, A. Boltres, S. Behnke',
    venue: 'BMVC',
    year: 2022,
    tags: ['Video prediction'],
    paper: 'https://arxiv.org/abs/2203.09303',
    code: 'https://github.com/angelvillar96/MSPred',
    project: 'https://sites.google.com/view/mspred/home',
    featured: true,
  },
  {
    title: 'Unsupervised Image Decomposition with Phase-Correlation Networks',
    authors: 'A. Villar-Corrales, S. Behnke',
    venue: 'VISAPP',
    year: 2022,
    tags: ['Scene decomposition', 'Unsupervised learning'],
    paper: 'https://arxiv.org/abs/2110.03473',
    code: 'https://github.com/angelvillar96/Unsupervised-Decomposition-PCDNet-1',
  },
  {
    title: 'Scattering Transform Based Image Clustering using Projection onto Orthogonal Complement',
    authors: 'A. Villar-Corrales, V. I. Morgenshtern',
    venue: 'ICMR Workshops',
    year: 2021,
    tags: ['Unsupervised learning'],
    paper: 'https://arxiv.org/abs/2011.11586',
  },
  {
    title: 'Deep Learning Architectural Designs for Super-Resolution of Noisy Images',
    authors: 'A. Villar-Corrales, F. Schirrmacher, C. Rieß',
    venue: 'IEEE ICASSP',
    year: 2021,
    tags: ['Super-resolution', 'Image restoration'],
    paper: 'https://arxiv.org/abs/2102.05105',
    code: 'https://github.com/angelvillar96/super-resolution-noisy-images',
  },
  {
    title: 'Tools for Semi-Automatic Bounding Box Annotation of Musical Measures in Sheet Music',
    authors: 'F. Zalkow, A. Villar-Corrales, T.-J. Tsai, V. Arifi-Müller, M. Müller',
    venue: 'ISMIR Late-Breaking Demo',
    year: 2019,
    tags: ['Computer vision', 'Music information retrieval'],
    paper: 'https://www.audiolabs-erlangen.de/resources/MIR/2019-ISMIR-LBD-Measures',
  },
];

export const publicationYears = [...new Set(publications.map(({ year }) => year))];

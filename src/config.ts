export const projects = [
  {
    title: 'Landing de Comercio Electrónico',
    description: 'Landing page para una tienda de comercio electrónico',
    technologies: ['React', 'Node.js', 'Bootstrap'],
    image: 'landing-template.png',
    demoUrl: 'https://ariel-paz1.github.io/template-landing/',
    codeUrl: ''
  },
  {
    title: 'Aplicación de Gestión de Gastos e Inversiones',
    description: 'Aplicación de gestión de gastos e inversiones',
    technologies: ['React', 'TypeScript', 'Firebase', 'Next.js', 'Mantine UI'],
    image: 'dash.png',
    images: ['dash1.png', 'dash2.png', 'dash3.png', 'dash4.png'],
    demoUrl: '',
    codeUrl: ''
  },
];

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Santander Tecnología Argentina',
    period: 'feb. 2023 - actualidad',
    description: 'Desarrollo de soluciones tecnológicas para el sector bancario, trabajando en el equipo de Custodia y utilizando tecnologías modernas.'
  },
  {
    title: 'Desarrollador Full Stack',
    company: 'Chat-Tonic',
    period: 'mar. 2020 - feb. 2023',
    description: 'Diseñando chatbots y entrenándolos con IA'
  },
];

export const navigationItems = [
  { label: 'Inicio', icon: 'home', value: 0 },
  { label: 'Sobre Mí', icon: 'person', value: 1 },
  { label: 'Experiencia', icon: 'work', value: 2 },
  { label: 'Proyectos', icon: 'code', value: 3 },
  { label: 'Contacto', icon: 'email', value: 4 }
];

// Configuración para descarga de CV
export const cvConfig = {
  driveFileId: '1v4t8elfD-nTtX0FG_htEUMIcUBWYoRYT',
  fileName: 'CV_Ariel_Paz.pdf',
  get downloadUrl() {
    return `https://drive.google.com/file/d/${this.driveFileId}/view?usp=sharing`;
  }
};

// Configuración de datos personales y contacto
export const personalInfo = {
  name: 'Ariel Paz',
  email: 'ariel.paz.dev@gmail.com',
  phone: '+54 11 1234-5678',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/ariel-paz/',
  github: 'https://github.com/ariel-paz1',
};

// Configuración de EmailJS
export const emailJSConfig = {
  serviceID: 'portfolio', // Reemplaza con tu Service ID
  templateID: 'template_u4t7hoq', // Reemplaza con tu Template ID
  publicKey: '9785hw3wyozLTsw4k' // Reemplaza con tu Public Key
};

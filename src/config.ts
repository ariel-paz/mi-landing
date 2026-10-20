export interface Project {
  title: string;
  tagline: string;
  description: string;
  featured?: boolean;
  isAiOrCloud?: boolean;
  category: 'Cloud & IA' | 'Full Stack' | 'Frontend';
  impactMetrics: string[];
  technologies: string[];
  image: string;
  images?: string[];
  demoUrl: string;
  codeUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Mis Gastos - Gestor Financiero & Inversiones',
    tagline: 'Plataforma Cloud de Tracking de Portafolios y Flujo de Caja',
    description:
      'Solución integral para gestión de patrimonio e inversiones en bonos y acciones. Diseñada con arquitectura Offline-First en Next.js, TypeScript y Firebase Cloud Firestore en tiempo real. Incorpora cálculo automatizado de rendimientos y módulo analítico inteligente.',
    featured: true,
    isAiOrCloud: true,
    category: 'Cloud & IA',
    impactMetrics: [
      'Sincronización en tiempo real y persistencia offline con Firebase',
      'Dashboard analítico con gráficos interactivos y métricas financieras',
      'Arquitectura reactiva con Next.js y Mantine UI'
    ],
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Firestore', 'Mantine UI', 'Chart.js'],
    image: 'dash.png',
    images: ['dash1.png', 'dash2.png', 'dash3.png', 'dash4.png'],
    demoUrl: 'https://dash-next-cash.vercel.app/',
    codeUrl: 'https://github.com/ariel-paz'
  },
  {
    title: 'Plataforma Inmobiliaria Piancatelli',
    tagline: 'Portal de Propiedades con Sincronización en Tiempo Real',
    description:
      'Portal inmobiliario de alto rendimiento integrado a la API REST de Tokko-Broker para catálogo en tiempo real. Optimizado con renderizado ultra-rápido, filtros multifacéticos y arquitectura frontend modular orientada a SEO y velocidad de conversión.',
    featured: false,
    isAiOrCloud: false,
    category: 'Full Stack',
    impactMetrics: [
      'Disminución del 45% en tiempo de carga inicial de catálogo',
      'Consumo y normalización de endpoints de brokers inmobiliarios',
      'UI 100% Mobile-first con navegación fluida'
    ],
    technologies: ['React', 'TypeScript', 'Tokko-Broker API', 'Bootstrap', 'Vite'],
    image: 'pianca.png',
    demoUrl: 'https://piancatelli-propiedades.com.ar/',
    codeUrl: ''
  },
  {
    title: 'E-Commerce Cloud Template',
    tagline: 'Arquitectura Frontend Escalable para Tiendas Digitales',
    description:
      'Plantilla modular de alto rendimiento para comercio electrónico con gestión de estado global, catálogo dinámico, carrito optimizado y flujos de checkout diseñados para máxima conversión.',
    featured: false,
    isAiOrCloud: false,
    category: 'Frontend',
    impactMetrics: [
      'Puntaje Lighthouse 95+ en Performance y Accesibilidad',
      'Estructura de componentes atómicos reusables'
    ],
    technologies: ['React', 'Node.js', 'Vite', 'CSS3 Moderno'],
    image: 'landing-template.png',
    demoUrl: 'https://ariel-paz.github.io/template-landing/',
    codeUrl: 'https://github.com/ariel-paz'
  }
];

export interface ExperienceItem {
  title: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlightBadge: string;
  achievements: string[];
  techStack: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    role: 'Acciones, Bonos & Custodia',
    company: 'Santander Tecnología Argentina',
    period: 'Feb. 2023 - Actualidad',
    location: 'Buenos Aires, Argentina (Híbrido)',
    highlightBadge: 'Inversiones & Custodia',
    achievements: [
      'Desarrollo de nuevas APIs y diseño de arquitecturas en NestJS, Node.js y TypeScript para la operatoria de acciones, bonos y custodia.',
      'Migración de monolitos y servicios legacy en Java hacia microservicios y APIs modernas con contratos OpenAPI / Swagger.',
      'Implementación del patrón BFF (Backend for Frontend) en NestJS para alimentar interfaces web desarrolladas en React.',
      'Procesamiento de mensajería y eventos asíncronos con colas y brokers de mensajería.',
      'Gestión y persistencia con Oracle Database y MongoDB, e implementación de Redis para caching y reducción de tiempos de respuesta.',
      'Aseguramiento de estándares de calidad y cobertura de código mediante análisis estático con SonarQube.'
    ],
    techStack: ['Node.js', 'NestJS', 'TypeScript', 'Java', 'React', 'Oracle', 'MongoDB', 'Redis', 'Eventos/Colas', 'SonarQube']
  },
  {
    title: 'Desarrollador Full Stack & Chatbots',
    role: 'Chatbot Developer & NLP',
    company: 'Chat-Tonic',
    period: 'Mar. 2020 - Feb. 2023',
    location: 'Buenos Aires, Argentina',
    highlightBadge: 'IA & Chatbots',
    achievements: [
      'Diseño, entrenamiento y puesta en producción de chatbots con procesamiento de lenguaje natural (NLP).',
      'Desarrollo de integraciones mediante webhooks y APIs REST con plataformas de mensajería y bases de datos NoSQL.',
      'Entrenamiento de modelos de intención y mantenimiento de flujos conversacionales.'
    ],
    techStack: ['Chatbots', 'NLP', 'Node.js', 'Python', 'MongoDB', 'Webhooks', 'REST APIs']
  }
];

export const skillsCategories = [
  {
    category: 'Backend & APIs',
    accentColor: '#34D399',
    skills: [
      { name: 'Node.js & NestJS', level: 'Producción' },
      { name: 'TypeScript & JavaScript', level: 'Avanzado' },
      { name: 'Java', level: 'Producción / Migraciones' },
      { name: 'APIs REST & Patrón BFF', level: 'Producción' },
      { name: 'Eventos & Mensajería Asíncrona', level: 'Producción' },
      { name: 'SonarQube (Calidad de Código)', level: 'Producción' }
    ]
  },
  {
    category: 'Bases de Datos & Cloud',
    accentColor: '#38BDF8',
    skills: [
      { name: 'Oracle Database', level: 'Producción (Santander)' },
      { name: 'MongoDB & NoSQL', level: 'Producción' },
      { name: 'Redis (Caching en Memoria)', level: 'Producción' },
      { name: 'Google Cloud Platform (GCP)', level: 'Intermedio' },
      { name: 'Firebase / Firestore', level: 'Avanzado' }
    ]
  },
  {
    category: 'Inteligencia Artificial & Chatbots',
    accentColor: '#818CF8',
    skills: [
      { name: 'Gemini API & Google AI Studio', level: 'Desarrollo / Integración' },
      { name: 'Diseño & Entrenamiento de Chatbots', level: '3 años de experiencia' },
      { name: 'NLP & Clasificación de Intenciones', level: 'Avanzado' },
      { name: 'Webhooks & Integraciones', level: 'Avanzado' }
    ]
  },
  {
    category: 'Frontend & UI',
    accentColor: '#F472B6',
    skills: [
      { name: 'React (Web Apps & BFF)', level: 'Producción' },
      { name: 'Next.js', level: 'Intermedio - Avanzado' },
      { name: 'Material-UI (MUI)', level: 'Avanzado' },
      { name: 'HTML5, CSS3 & Responsive Design', level: 'Avanzado' }
    ]
  }
];

export const navigationItems = [
  { label: 'Inicio', href: '#hero', id: 'hero' },
  { label: 'Sobre Mí', href: '#about', id: 'about' },
  { label: 'Skills & Stack', href: '#skills', id: 'skills' },
  { label: 'Experiencia', href: '#experience', id: 'experience' },
  { label: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Contacto', href: '#contact', id: 'contact' }
];

export const cvConfig = {
  driveFileId: '1v4t8elfD-nTtX0FG_htEUMIcUBWYoRYT',
  fileName: 'CV_Ariel_Paz.pdf',
  get downloadUrl() {
    return `https://drive.google.com/file/d/${this.driveFileId}/view?usp=sharing`;
  }
};

export const personalInfo = {
  name: 'Ariel Paz',
  roleTitle: 'Software Engineer',
  secondaryTitle: 'Backend, Cloud & IA | Santander Tecnología',
  email: 'ariel.paz.dev@gmail.com',
  phone: '+54 11 1234-5678',
  location: 'Buenos Aires, Argentina',
  linkedin: 'https://www.linkedin.com/in/ariel-paz/',
  github: 'https://github.com/ariel-paz',
  currentRoleBadge: 'Software Engineer @ Santander Tecnología (Inversiones & Custodia)'
};

export const emailJSConfig = {
  serviceID: 'portfolio',
  templateID: 'template_u4t7hoq',
  publicKey: '9785hw3wyozLTsw4k'
};

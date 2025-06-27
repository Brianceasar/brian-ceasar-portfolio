import {
  Code2,
  Paintbrush,
  Smartphone,
  Database,
  Settings2,
  Image as ImageIcon,
  LucideIcon,
} from 'lucide-react';

export type Project = {
  title: string;
  slug: string;
  img: string;
  link?: string;
  content: string;
  client?: string;
  techStack?: string[];
  achievement?: string;
};
export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  coverImage: string;
  content: string;
  samples: Project[];
  process: ProcessStep[];
  approach: string;
};

export const services: Service[] = [
  {
    slug: 'frontend-development',
    icon: Code2,
    title: 'Front-End Development',
    description: 'Responsive UI development using React, Next.js and Tailwind CSS.',
    color: '#d94da6',
    coverImage: '/assets/img/services/frontend-development.png',
    content: `
      I specialize in building high-performance user interfaces using React, Tailwind CSS, and Next.js.
      For each project, I focus on speed, accessibility, responsiveness, and clean component architecture.
    `,
    approach: 'Modern, component-driven development with a focus on accessibility, performance, and maintainability.',
    process: [
      { title: 'Consultation', description: 'Understand client needs and project goals.' },
      { title: 'Design', description: 'Create wireframes and UI mockups.' },
      { title: 'Development', description: 'Build responsive interfaces using React and Tailwind CSS.' },
      { title: 'Testing & Launch', description: 'QA, optimize, and deploy to production.' },
    ],
    samples: [
      {
        title: 'Studio 19 Website Development',
        slug: 'studio19',
        img: '/assets/img/s19-portfolio.png',
        link: 'https://studio19.co.tz',
        content: `
          Studio 19 wanted a slick, mobile-first website. I designed the layout in Figma and implemented it using Next.js and Tailwind CSS. The site was deployed on Vercel with a blazing-fast build time and smooth animations.
        `,
        client: 'Studio 19',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Figma'],
        achievement: 'Launched in 2 weeks with 99+ Lighthouse scores',
      },
      {
        title: 'Bahai wa Tanzania Website Development',
        slug: 'bahai-landing',
        img: '/assets/img/bahai-landing-page.png',
        link: 'https://bahai.or.tz',
        content: `
          For Wabahai wa Tanzania, I designed and built a clean, spiritual landing page optimized for mobile. I used semantic HTML5, CSS grid, and integrated a lightweight CMS for easy updates.
        `,
        client: 'Wabahai wa Tanzania',
        techStack: ['HTML5', 'CSS Grid', 'Next.js', 'CMS'],
        achievement: 'Mobile-first, 100% accessibility score',
      },
      {
        title: 'Imperium Opes Website',
        slug: 'imperium-opes',
        img: '/assets/img/imperium-opes.png',
        link: 'https://brianceasar.github.io/imperium-opes/',
        content: `
          Imperium Opes needed a financial services presence. I built a static site with HTML/CSS/JS, adding subtle animations and scroll triggers. Delivered fully responsive layout, asset compression, and SEO tags.
        `,
        client: 'Imperium Opes',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        achievement: 'SEO optimized, fast load, subtle animations',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces and experiences.',
    color: '#307ad5',
    coverImage: '/assets/img/services/ui-ux.png',
    content: `I design user-centric interfaces that are both visually appealing and easy to use. My process includes wireframing, prototyping, and user testing.`,
    approach: 'Empathize with users, iterate on feedback, and deliver delightful digital experiences.',
    process: [
      { title: 'Research', description: 'Gather requirements and analyze user needs.' },
      { title: 'Wireframing', description: 'Sketch layouts and user flows.' },
      { title: 'Prototyping', description: 'Build interactive prototypes for testing.' },
      { title: 'Design Handoff', description: 'Deliver final assets and specs to developers.' },
    ],
    samples: [
      {
        title: 'Fintech Dashboard',
        slug: 'fintech-dashboard',
        img: '/images/projects/fintech-dashboard.jpg',
        client: 'FintechPro',
        techStack: ['Figma', 'Adobe XD'],
        achievement: 'Reduced user onboarding time by 50%',
        content: 'Designed a dashboard for financial analytics and reporting.',
      },
      {
        title: 'E-commerce App UI',
        slug: 'ecommerce-app',
        img: '/images/projects/ecommerce-app.jpg',
        client: 'ShopEase',
        techStack: ['Figma'],
        achievement: 'Increased checkout conversion by 25%',
        content: 'Created a mobile-first UI for an e-commerce platform.',
      },
    ],
  },
  {
    slug: 'database-management',
    icon: Database,
    title: 'Database Management',
    description: 'Managing and optimizing SQL and NoSQL databases efficiently.',
    color: '#eab830',
    coverImage: '/images/services/database.jpg',
    content: `I design, implement, and maintain robust database solutions, ensuring data integrity, security, and performance.`,
    approach: 'Design scalable, secure, and high-performance databases tailored to business needs.',
    process: [
      { title: 'Assessment', description: 'Analyze current data infrastructure and requirements.' },
      { title: 'Design', description: 'Model and plan database schema and architecture.' },
      { title: 'Implementation', description: 'Set up, migrate, and optimize databases.' },
      { title: 'Maintenance', description: 'Monitor, backup, and tune for ongoing performance.' },
    ],
    samples: [
      {
        title: 'Inventory Database',
        slug: 'inventory-db',
        img: '/images/projects/inventory-db.jpg',
        client: 'RetailMart',
        techStack: ['PostgreSQL', 'Node.js'],
        achievement: 'Improved query speed by 300%',
        content: 'Migrated legacy inventory data to a scalable PostgreSQL solution.',
      },
      {
        title: 'Analytics NoSQL DB',
        slug: 'analytics-nosql',
        img: '/images/projects/analytics-nosql.jpg',
        client: 'DataInsights',
        techStack: ['MongoDB', 'Express.js'],
        achievement: 'Enabled real-time dashboarding for 1M+ records',
        content: 'Set up a MongoDB cluster for real-time analytics.',
      },
    ],
  },
  {
    slug: 'software-project-management',
    icon: Settings2,
    title: 'Software Project Management',
    description: 'Managing software projects and leading teams to deliver high-quality solutions.',
    color: '#B00D1C',
    coverImage: '/images/services/project-management.jpg',
    content: `I lead software teams to deliver robust, scalable, and maintainable solutions. My approach involves agile methodologies, clear communication, and a focus on quality and timely delivery.`,
    approach: 'Lead teams with agile practices, clear milestones, and transparent communication.',
    process: [
      { title: 'Planning', description: 'Define scope, timeline, and deliverables.' },
      { title: 'Team Coordination', description: 'Assign roles and manage progress.' },
      { title: 'Execution', description: 'Oversee development and resolve blockers.' },
      { title: 'Delivery', description: 'Ensure quality and deliver on schedule.' },
    ],
    samples: [
      {
        title: 'ERP Implementation',
        slug: 'acme-erp',
        img: '/images/projects/acme-erp.jpg',
        client: 'Acme Corp',
        techStack: ['Node.js', 'React', 'PostgreSQL'],
        achievement: 'Reduced operational costs by 20%',
        content: 'Oversaw the end-to-end implementation of a custom ERP system.',
      },
      {
        title: 'CRM Rollout',
        slug: 'globex-crm',
        img: '/images/projects/globex-crm.jpg',
        client: 'Globex Inc.',
        techStack: ['Django', 'Vue.js', 'MySQL'],
        achievement: 'Improved customer retention by 15%',
        content: 'Managed a team to deliver a CRM platform for sales and support.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    icon: ImageIcon,
    title: 'Graphic Design',
    description: 'Designing visual assets for digital/print using tools like Photoshop and Figma.',
    color: '#ff1949',
    coverImage: '/images/services/graphic-design.jpg',
    content: `I create compelling graphics for branding, marketing, and digital campaigns, ensuring consistency and creativity.`,
    approach: 'Blend creativity with brand strategy to deliver memorable visual assets.',
    process: [
      { title: 'Briefing', description: 'Understand brand and campaign goals.' },
      { title: 'Concepting', description: 'Sketch and propose creative directions.' },
      { title: 'Design', description: 'Produce high-quality graphics and layouts.' },
      { title: 'Delivery', description: 'Export assets for print and digital use.' },
    ],
    samples: [
      {
        title: 'Brand Kit',
        slug: 'brand-kit',
        img: '/images/projects/brand-kit.jpg',
        client: 'NovaBrand',
        techStack: ['Adobe Illustrator', 'Photoshop'],
        achievement: 'Brand recognized in 50+ publications',
        content: 'Developed a full brand kit including logo, palette, and typography.',
      },
      {
        title: 'Social Media Campaign',
        slug: 'social-campaign',
        img: '/images/projects/social-campaign.jpg',
        client: 'EcoLife',
        techStack: ['Figma', 'Photoshop'],
        achievement: 'Campaign reached 100k+ users',
        content: 'Designed graphics for a viral social media campaign.',
      },
    ],
  },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    description: 'Developing cross-platform and native mobile applications.',
    color: '#10bcc4',
    coverImage: '/images/services/app-dev.jpg',
    content: `I build robust mobile apps for iOS and Android, focusing on performance, usability, and scalability.`,
    approach: 'Deliver seamless mobile experiences with scalable, maintainable codebases.',
    process: [
      { title: 'Discovery', description: 'Define app goals and user stories.' },
      { title: 'Prototyping', description: 'Design app flows and wireframes.' },
      { title: 'Development', description: 'Build and test mobile apps for iOS/Android.' },
      { title: 'Launch & Support', description: 'Deploy to stores and provide ongoing updates.' },
    ],
    samples: [
      {
        title: 'Fitness Tracker App',
        slug: 'fitness-app',
        img: '/images/projects/fitness-app.jpg',
        client: 'FitTrack',
        techStack: ['React Native', 'Expo'],
        achievement: '10k+ downloads in first month',
        content: 'Developed a cross-platform fitness tracking app.',
        link: 'https://fittrack.example.com',
      },
      {
        title: 'Food Delivery App',
        slug: 'food-delivery',
        img: '/images/projects/food-delivery.jpg',
        client: 'QuickEats',
        techStack: ['Kotlin', 'Firebase'],
        achievement: 'Handled 5k+ orders/day at launch',
        content: 'Built a native Android app for food delivery.',
      },
    ],
  },
];

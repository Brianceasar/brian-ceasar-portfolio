import {
  Code2,
  Paintbrush,
  Smartphone,
  Database,
  Settings2,
  // Image as ImageIcon,
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
  organisation?: string;
  problem?: string;
  approach?: string;
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
  processSummary: string;
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
    processSummary: `
      My front-end development process ensures that every interface is responsive, accessible, and optimized for performance, from initial consultation through to final deployment.
    `,
    samples: [
      {
        title: 'Tanzania Film Festival and Awards Website Development',
        slug: 'Taffa',
        img: '/assets/img/taffa-hero.png',
        link: 'https://taffafestival.or.tz',
        content: `
          Byte Solution developed a bilingual, user-friendly website for TAFFA to streamline the film submission process and make it easier for participants and attendees to access festival information.
        `,
        client: 'Tanzania Film Festival and Awards (TAFFA)',
        organisation: `TAFFA (Tanzania Film Festival and Awards) is an annual national event organized by the Tanzania Film Board, aiming to harness the power of film for social, cultural, and economic development. It brings together creatives, studios, investors, government bodies, and the public to showcase, celebrate, and advance the Tanzanian film industry through screenings, forums, exhibitions, and awards.`,
        problem: `TAFFA needed a digital solution to simplify the film submission process, make the event program easily accessible, and ensure the site supported both English and Swahili users.`,
        approach: `1. Requirements Gathering with TAFFA stakeholders  
            2. Language Toggle System Planning (EN ↔ SW)  
            3. Bilingual UI Design using Figma  
            4. Integration of FilmFreeway submission system  
            5. Embedding event calendar with Elfsight  
            6. Form data collection via Tally  
            7. Testing and accessibility optimization  
            8. Go-live and stakeholder onboarding`,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        achievement: 'Successfully launched ahead of the festival, with over 1,000 submissions processed digitally and over 1,000 program views in both languages.',
      },
      {
        title: 'Counsenauth Website Development',
        slug: 'Counsenauth',
        img: '/assets/img/counsenauth-hero.png',
        link: 'https://counsenuth.or.tz',
        client: 'COUNSENUTH',
        content: `COUNSENUTH partnered with Byte Solution to modernize and maintain their official website. The site serves as a resource hub for the organization’s work in maternal and child nutrition across Tanzania. Our goal was to ensure the site reflected the ongoing programs, remained accessible to a diverse audience, and met current web standards.`,
  organisation: `COUNSENUTH is a Tanzanian NGO working to improve community health and nutrition, with a special focus on vulnerable groups including women, children, and adolescents. The organization collaborates with communities, government institutions, and development partners to deliver impactful programs and advocacy in maternal and child nutrition, education, and policy change.`,
  problem: `The existing COUNSENUTH website had broken links, outdated content, and poor mobile responsiveness. Key stakeholders could not easily find or trust the information provided. The site also lacked visual consistency and did not reflect the full scope of COUNSENUTH’s work, limiting the organization’s ability to engage the public, funders, and partners.`,
  approach: `1. Initial Audit and Site Assessment  
            2. Fix Broken Pages, Links, and Navigation Structure  
            3. Collect Updated Program and Organizational Content  
            4. Redesign Key Sections to Reflect Active Projects and Impact  
            5. Integrate Visual Assets for Better Storytelling  
            6. Implement Accessibility Improvements and Mobile Optimization  
            7. Perform SEO Optimization and Submit to Search Engines  
            8. Train COUNSENUTH Staff on Content Updates and Reporting  
            9. Set up Maintenance Workflow for Quarterly Reviews`,
  techStack: ['WordPress', 'PHP', 'JavaScript', 'Elementor', 'Yoast SEO'],
  achievement: 'Resolved over 30+ broken elements, optimized for SEO, improved performance across desktop and mobile, and restored stakeholder trust through an improved visual and content experience. The new website now serves as a dynamic tool for awareness, fundraising, and partnership development.'
      },
      {
        title: 'Zaobora Website Development',
        slug: 'Zaobora',
        img: '/assets/img/zaobora.png',
        link: 'https://zaobora.co.tz',
        content: `
          Zao Bora partnered with Byte Solution to develop a clean, responsive website that showcases their agricultural initiatives and boosts their online visibility. The platform was designed to support Zao Bora’s mission of empowering farmers through consultation, market linkage, and agroforestry with carbon market applications.
        `,
        organisation: `Zao Bora is a community-focused agricultural organization that supports sustainable farming practices across Tanzania. It offers farmers consultation, market access, and agroforestry solutions with carbon market potential. The organization bridges grassroots impact with investment opportunities, helping both rural farmers and global partners collaborate through digital transformation.`,

  problem: `Zao Bora needed an online platform to broaden its reach, build credibility, and simplify the connection between farmers and external stakeholders like donors, buyers, and carbon market investors. Previously reliant on manual outreach, Zao Bora lacked a centralized, accessible, and professional digital presence to communicate its value and scale impact.`,

  approach: `1. Project Initiation and Requirements Gathering with Stakeholders  
            2. User Persona Research (Farmers, Donors, Investors)  
            3. Minimalistic UI Design using Earth-Tone Palette  
            4. Sitemap Architecture for 6–8 Page Static Website  
            5. Content Creation: Services, Agroforestry, Testimonials  
            6. Development of Static Website with Mobile-First Layout  
            7. Domain Setup and Shared Hosting Configuration  
            8. Final Testing, Optimization, and Email Configuration  
            9. Handover and Support Guidelines`,
        client: 'Zaobora',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        achievement: 'Delivered a clean and responsive 8-page static website that clearly showcases Zao Bora’s mission and services. Enabled the client to begin engaging investors and donors within four weeks of launch while simplifying communication with farmers through a mobile-friendly, low-bandwidth interface.',
      },
      {
  title: 'Studio 19 Website Development',
  slug: 'studio19',
  img: '/assets/img/s19-portfolio.png',
  link: 'https://studio19.co.tz',
  client: 'Studio 19',
  content: `The project delivered a responsive, modern site showcasing Studio 19’s video production portfolio, team, and contact details.`,
  organisation: `Studio 19 is a creative media agency based in Tanzania, specializing in video production, media strategy, and digital storytelling for commercial and social impact campaigns.`,
  problem: `Studio 19 lacked a modern digital presence to reflect the quality of their work and had no centralized space for showcasing past projects, making it difficult for potential clients to assess their expertise.`,
  approach: `
            1. Project Initiation and Planning  
            2. Requirement Gathering and Wireframing  
            3. High-Fidelity UI Design in Figma  
            4. Frontend Development using Html, Javascript and Tailwind CSS  
            5. Content Integration   
            6. Testing (Mobile-first, Performance, Accessibility)  
            7. Deployment and Analytics Setup  
            `,
  techStack: ['Html', 'Javascript', 'Tailwind CSS', 'Figma'],
  achievement: 'The site launched within two weeks and significantly improved the client’s digital presence, including a 40% increase in inquiries through the contact form.'
},
{
  "title": "Dynamic Event Management Integration",
  "slug": "19events-dynamic-events",
  "img": "/assets/img/19-events-web-development.png",
  "link": "https://19events.co.tz",
  "client": "19Events Limited",
  "content": "Developed a static website enhancement allowing dynamic rendering of event pages using a centralized JSON file, enabling non-technical users to update events without backend support.",
  "organisation": "19Events Limited is a Tanzanian event production company offering comprehensive planning, organizing, and branding services for both private and corporate functions.",
  "problem": "The client struggled with updating events on their static website, requiring developer involvement for every change and lacking consistency across event pages.",
  "approach": "1. Project Initiation and Planning\n2. Requirement Gathering and Analysis\n3. JSON Schema Definition for Events\n4. Frontend Development with Vanilla JS, HTML, and CSS\n5. Dynamic Rendering of Event Pages\n6. Responsive UI Implementation\n7. Testing and Client Training",
  "techStack": ["HTML", "CSS", "JavaScript", "JSON"],
  "achievement": "Enabled the client to independently manage and publish new events via a single JSON file, reducing reliance on developers and improving site consistency."
},
{
  "title": "Bahai Reference Library ",
  "slug": "bahai-library",
  "img": "/assets/img/bahai-library.png",
  "link": "https://bahai.or.tz",
  "client": "Bahai Community of Tanzania",
  "content": "Developed a clean, static library page allowing visitors to search and access categorized Bahá’í writings via downloadable PDFs, enhancing spiritual learning and accessibility for community members.",
  "organisation": "The Bahai Community of Tanzania is a faith-based organization promoting spiritual education, unity, and service in communities throughout the country.",
  "problem": "The community lacked a digital resource that consolidated Bahá’í writings in one accessible place, making it hard for members to locate and engage with essential spiritual texts.",
  "approach": "1. Project Initiation and Scope Planning\n2. Content Organization and Reference Gathering\n3. UI Design Focused on Minimalism and Readability\n4. Frontend Development Using HTML, CSS, and JavaScript\n5. Search Function and Category Filters Implementation\n6. Integration of External PDF Resources\n7. Testing Across Devices and Deployment",
  "techStack": ["HTML", "CSS", "JavaScript"],
  "achievement": "The Library page launched on schedule, improving access to Bahá’í writings and allowing users to locate relevant texts easily via categorized links and a search interface."
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
    processSummary: `
      My UI/UX design process ensures that every interface is intuitive, visually appealing, and tailored to user needs, from research through to final handoff.
    `,
    samples: [
      
    ],
  },
  {
    slug: 'database-management',
    icon: Database,
    title: 'Database Management',
    description: 'Managing and optimizing SQL and NoSQL databases efficiently.',
    color: '#eab830',
    coverImage: '/assets/img/services/database.png',
    content: `I design, implement, and maintain robust database solutions, ensuring data integrity, security, and performance.`,
    approach: 'Design scalable, secure, and high-performance databases tailored to business needs.',
    process: [
      { title: 'Assessment', description: 'Analyze current data infrastructure and requirements.' },
      { title: 'Design', description: 'Model and plan database schema and architecture.' },
      { title: 'Implementation', description: 'Set up, migrate, and optimize databases.' },
      { title: 'Maintenance', description: 'Monitor, backup, and tune for ongoing performance.' },
    ],
    processSummary: `
      My database management process ensures that your data is secure, accessible, and optimized for performance, from initial assessment through to ongoing maintenance.
    `,
    samples: [
      
    ],
  },
  {
    slug: 'software-project-management',
    icon: Settings2,
    title: 'Software Project Management',
    description: 'Managing software projects and leading teams to deliver high-quality solutions.',
    color: '#B00D1C',
    coverImage: '/assets/img/services/project-management.png',
    content: `I lead software teams to deliver robust, scalable, and maintainable solutions. My approach involves agile methodologies, clear communication, and a focus on quality and timely delivery.`,
    approach: 'Lead teams with agile practices, clear milestones, and transparent communication.',
    process: [
      { title: 'Planning', description: 'Define scope, timeline, and deliverables.' },
      { title: 'Team Coordination', description: 'Assign roles and manage progress.' },
      { title: 'Execution', description: 'Oversee development and resolve blockers.' },
      { title: 'Delivery', description: 'Ensure quality and deliver on schedule.' },
    ],
    processSummary: `
      My project management process ensures that software projects are delivered on time, within scope, and to the highest quality standards, leveraging agile methodologies and effective team collaboration.
    `,
    samples: [
      
    ],
  },
  // {
  //   slug: 'graphic-design',
  //   icon: ImageIcon,
  //   title: 'Graphic Design',
  //   description: 'Designing visual assets for digital/print using tools like Photoshop and Figma.',
  //   color: '#ff1949',
  //   coverImage: '/images/services/graphic-design.jpg',
  //   content: `I create compelling graphics for branding, marketing, and digital campaigns, ensuring consistency and creativity.`,
  //   approach: 'Blend creativity with brand strategy to deliver memorable visual assets.',
  //   process: [
  //     { title: 'Briefing', description: 'Understand brand and campaign goals.' },
  //     { title: 'Concepting', description: 'Sketch and propose creative directions.' },
  //     { title: 'Design', description: 'Produce high-quality graphics and layouts.' },
  //     { title: 'Delivery', description: 'Export assets for print and digital use.' },
  //   ],
  //   processSummary: `
  //     My graphic design process combines creativity with strategic thinking to produce visual assets that resonate with audiences and elevate brand identity, from initial briefing through to final delivery.
  //   `,
  //   samples: [
  //     {
  //       title: 'Brand Kit',
  //       slug: 'brand-kit',
  //       img: '/images/projects/brand-kit.jpg',
  //       client: 'NovaBrand',
  //       techStack: ['Adobe Illustrator', 'Photoshop'],
  //       achievement: 'Brand recognized in 50+ publications',
  //       content: 'Developed a full brand kit including logo, palette, and typography.',
  //     },
  //     {
  //       title: 'Social Media Campaign',
  //       slug: 'social-campaign',
  //       img: '/images/projects/social-campaign.jpg',
  //       client: 'EcoLife',
  //       techStack: ['Figma', 'Photoshop'],
  //       achievement: 'Campaign reached 100k+ users',
  //       content: 'Designed graphics for a viral social media campaign.',
  //     },
  //   ],
  // },
  {
    slug: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    description: 'Developing cross-platform and native mobile applications.',
    color: '#10bcc4',
    coverImage: '/assets/img/services/app-dev.png',
    content: `I build robust mobile apps for iOS and Android, focusing on performance, usability, and scalability.`,
    approach: 'Deliver seamless mobile experiences with scalable, maintainable codebases.',
    process: [
      { title: 'Discovery', description: 'Define app goals and user stories.' },
      { title: 'Prototyping', description: 'Design app flows and wireframes.' },
      { title: 'Development', description: 'Build and test mobile apps for iOS/Android.' },
      { title: 'Launch & Support', description: 'Deploy to stores and provide ongoing updates.' },
    ],
    processSummary: `
      My app development process ensures that mobile applications are built to the highest standards of performance and user experience, from initial discovery through to launch and ongoing support.
    `,
    samples: [
      
    ],
  },
];

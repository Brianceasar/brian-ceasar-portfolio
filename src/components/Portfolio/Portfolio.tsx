'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';

type Project = {
  title: string;
  image: string;
  link: string;
  description?: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    title: 'Studio 19 Website Revamp',
    image: '/assets/img/s19-portfolio.jfif',
    link: 'https://studio19.co.tz/',
    description: 'Complete website redesign with modern UI/UX',
    tags: ['React', 'Next.js', 'Design'],
  },
  {
    title: 'Wabahai wa Tanzania Website',
    image: '/assets/img/bahai-landing-page.jfif',
    link: 'https://bahai.or.tz/',
    description: 'Community website with multilingual support',
    tags: ['Web Development', 'CMS', 'Responsive'],
  },
  {
    title: 'Wabahai Library Development',
    image: '/assets/img/bahai-library.png',
    link: 'https://bahai.or.tz/maktaba',
    description: 'Digital library platform with search functionality',
    tags: ['Full Stack', 'Database', 'Search'],
  },
  {
    title: 'Studio 19 Content Page',
    image: '/assets/img/s19-content-page-development.png',
    link: 'https://studio19.co.tz/works/content/',
    description: 'Dynamic content management system',
    tags: ['CMS', 'React', 'API'],
  },
  {
    title: '19 Events Website',
    image: '/assets/img/19-events-web-development.png',
    link: 'https://19events.co.tz/',
    description: 'Event management and booking platform',
    tags: ['Event Management', 'Booking', 'Payment'],
  },
  {
    title: 'Imperium Opes Website',
    image: '/assets/img/imperium-opes.png',
    link: 'https://brianceasar.github.io/imperium-opes/',
    description: 'Corporate website with modern animations',
    tags: ['Corporate', 'Animation', 'Branding'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// const itemVariants = {
//   hidden: { 
//     opacity: 0, 
//     y: 30,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(176,13,28,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16 relative"
        >
          <h4 className="text-sm uppercase tracking-widest text-[#B00D1C] font-semibold inline-block relative">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#B00D1C]"></span>
          </h4>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2 pt-5">
            My Latest Projects
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl leading-relaxed">
            Explore a collection of my recent work, showcasing modern web development and creative solutions.
          </p>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              // variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                        <Eye className="w-4 h-4" />
                        <span>View Project</span>
                      </div>
                      {project.tags && (
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#B00D1C] transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  )}
                  
                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-[#B00D1C]/10 hover:text-[#B00D1C] transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#B00D1C] font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B00D1C]/20 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Interested in working together? Let&#39;s create something amazing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#B00D1C] to-red-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-[#B00D1C]"
          >
            Get In Touch
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
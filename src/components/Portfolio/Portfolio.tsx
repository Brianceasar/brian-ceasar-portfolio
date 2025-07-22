'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/services';

type Project = {
  title: string;
  slug: string;
  service: string;
  img: string;
  link?: string;
  client: string;
  content: string;
  organisation: string;
  problem: string;
  approach: string;
  techStack: string[];
  achievement: string;
  description?: string;
  tags?: string[];
};

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
const projects: Project[] = services
  .filter(service => service.slug === 'frontend-development')
  .flatMap(service =>
    service.samples.map(project => ({
      ...project,
      service: service.slug,
      tags: project.techStack,
    }))
  );

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
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.img}
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

                  {/* View Project Link (internal route) */}
                  <Link
                    href={`/services/${project.service}/${project.slug}`}
                    className="inline-flex items-center gap-2 text-[#B00D1C] font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B00D1C]/20 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA for more projects */}
        {/* <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 bg-[#B00D1C] text-white rounded-full font-semibold hover:bg-[#B00D1C]/90 transition-colors"
          >
            See More Projects
          </Link>
        </div> */}
      </div>
    </section>
  );
}

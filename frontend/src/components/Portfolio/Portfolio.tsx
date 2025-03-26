'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  title: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Studio 19 Website Revamp',
    image: '/assets/img/s19-portfolio.jfif',
    link: 'https://studio19.co.tz/',
  },
  {
    title: 'Wabahai wa Tanzania Website',
    image: '/assets/img/bahai-landing-page.jfif',
    link: 'https://bahai.or.tz/',
  },
  {
    title: 'Wabahai Library Development',
    image: '/assets/img/bahai-library.png',
    link: 'https://bahai.or.tz/maktaba',
  },
  {
    title: 'Studio 19 Content Page',
    image: '/assets/img/s19-content-page-development.png',
    link: 'https://studio19.co.tz/works/content/',
  },
  {
    title: '19 Events Website',
    image: '/assets/img/19-events-web-development.png',
    link: 'https://19events.co.tz/',
  },
  {
    title: 'Imperium Opes Website',
    image: '/assets/img/imperium-opes.png',
    link: 'https://brianceasar.github.io/imperium-opes/',
  },
];

export default function Portfolio() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} 
    id="portfolio" 
    className="py-20 px-6 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-widest text-[#B00D1C] font-semibold">Portfolio</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">My Latest Projects</h2>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              href={project.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <h4 className="text-white text-lg font-semibold text-center px-2">{project.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

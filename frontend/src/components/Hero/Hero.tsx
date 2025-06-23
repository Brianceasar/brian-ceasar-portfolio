'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Tech icons for floating background
  const techIcons = [SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, FaJava, SiNodedotjs, SiPython, SiPostgresql];

  // Tech stack data
  const techStack = [
    { name: 'React', color: 'bg-blue-500', icon: SiReact },
    { name: 'TypeScript', color: 'bg-blue-600', icon: SiTypescript },
    { name: 'Next.js', color: 'bg-gray-800', icon: SiNextdotjs },
    { name: 'Tailwind', color: 'bg-cyan-500', icon: SiTailwindcss },
    { name: 'Java', color: 'bg-orange-600', icon: FaJava },
    { name: 'Node.js', color: 'bg-green-600', icon: SiNodedotjs },
    { name: 'Python', color: 'bg-yellow-500', icon: SiPython },
    { name: 'PostgreSQL', color: 'bg-blue-700', icon: SiPostgresql }
  ];

  // Fixed positions for floating icons to avoid hydration mismatch
  const floatingIconPositions = [
    { left: '10%', top: '20%', delay: 0.7, duration: 5 },
    { left: '85%', top: '30%', delay: 1.4, duration: 6 },
    { left: '25%', top: '70%', delay: 2.1, duration: 4 },
    { left: '70%', top: '15%', delay: 0, duration: 7 },
    { left: '15%', top: '50%', delay: 1.7, duration: 5.5 },
    { left: '60%', top: '80%', delay: 0.3, duration: 6.5 },
    { left: '40%', top: '25%', delay: 1.0, duration: 4.5 },
    { left: '90%', top: '60%', delay: 1.5, duration: 5 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating tech icons - Only render on client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {floatingIconPositions.map((pos, i) => {
            const IconComponent = techIcons[i % techIcons.length];
            return (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: pos.left,
                  top: pos.top,
                  animationDelay: `${pos.delay}s`,
                  animationDuration: `${pos.duration}s`
                }}
              >
                <IconComponent className="w-5 h-5 text-[#B00D1C]/15 rotate-12" />
              </div>
            );
          })}
        </div>
      )}

      {/* Binary code pattern - Fixed content to avoid hydration issues */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 text-xs font-mono text-gray-400 leading-relaxed transform rotate-12">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
              {i % 2 === 0 ? '10101010101010101010' : '01010101010101010101'}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="space-y-2 pt-5">
                <span className="text-[#B00D1C] text-lg font-semibold tracking-wide">Hello, I'm</span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Brian{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B00D1C] to-[#D51515]">
                    Ceasar
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-xl md:text-2xl font-medium text-gray-700">
                  <span>Front-End Engineer</span>
                </div>
                <p className="text-gray-500 font-medium">Based in Tanzania 🇹🇿</p>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              I craft exceptional digital experiences through clean code and innovative design. 
              Specializing in <span className="font-semibold text-[#B00D1C]">React</span>, 
              <span className="font-semibold text-[#B00D1C]"> TypeScript</span>, and 
              <span className="font-semibold text-[#B00D1C]"> modern web technologies</span> 
              to bring ideas to life.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B00D1C]">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B00D1C]">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B00D1C]">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="/assets/docs/Brian-Ceasar-CV.pdf"
                download
                className="group flex items-center gap-2 bg-[#B00D1C] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#D51515] hover:shadow-xl hover:shadow-[#B00D1C]/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </a>
              <Link
                href="#contact"
                className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-[#B00D1C]/20 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-[#B00D1C] hover:text-white hover:border-[#B00D1C] transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right content - Tech stack showcase */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Tech Stack</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200 group"
                  >
                    <div className={`w-8 h-8 ${tech.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm group-hover:animate-pulse`}>
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
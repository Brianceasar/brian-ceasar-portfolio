'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    id="home" 
    className="min-h-screen flex items-center bg-gradient-to-b from-[#e9f8ff] to-[#f7f5ff] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="pt-24">
          <span className="text-[#B00D1C] text-2xl font-medium">Hi, I'm</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2 mb-4">Brian Ceasar</h1>
          <h4 className="text-xl font-medium mb-4">A Front-End Engineer based in Tanzania</h4>
          <p className="text-gray-600 leading-relaxed max-w-xl">
            I am passionate about developing responsive and user-friendly web applications.
            With a strong background in front-end and back-end development,
            I bring a comprehensive approach to building seamless digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 space-x-4">
            <a
              href="/assets/docs/Brian-Ceasar-CV.pdf"
              download
              className="bg-[#D51515] text-white font-medium px-6 py-3 rounded-full border-2 border-[#B00D1C] hover:bg-white hover:text-[#D51515] transition"
            >
              Download CV
            </a>
            <Link
              href="#contact"
              className="bg-white border-2 border-[#B00D1C] text-[#0e0004] px-6 py-3 rounded-full font-medium hover:bg-[#D51515] hover:text-white transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Optional: Right Image */}
        {/* <div className="relative w-full h-[400px]">
          <Image
            src="/assets/img/brian-hero-bg.png"
            alt="Brian Ceasar"
            fill
            className="object-contain"
          />
        </div> */}
      </div>
    </motion.section>
  );
}

'use client';

import {
  Code2,
  Paintbrush,
  Smartphone,
  Database,
  Settings2,
  Image as ImageIcon,
  LucideIcon,
} from 'lucide-react';
import IconWrapper from '@/components/common/IconWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';


type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const services: Service[] = [
  {
    icon: Settings2,
    title: 'Software Project Management',
    description: 'Managing software projects and leading teams to deliver high-quality solutions.',
    color: '#B00D1C',
  },
  {
    icon: Code2,
    title: 'Front-end Development',
    description: 'Building responsive and user-friendly web apps using React and Tailwind CSS.',
    color: '#d94da6',
  },
  {
    icon: Paintbrush,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces and experiences.',
    color: '#307ad5',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Managing and optimizing SQL and NoSQL databases efficiently.',
    color: '#eab830',
  },
  {
    icon: ImageIcon,
    title: 'Graphic Design',
    description: 'Designing visual assets for digital/print using tools like Photoshop and Figma.',
    color: '#ff1949',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Developing cross-platform and native mobile applications.',
    color: '#10bcc4',
  },
];

export default function Services() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} 
    id="service" 
    className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase tracking-widest text-[#B00D1C] font-semibold">Top Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">This is how I can help you.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:-translate-y-1 transition-all"
            >
              <IconWrapper icon={service.icon} color={service.color} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-12">
            
              <button type="submit" className="bg-[#B00D1C] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#B00D1C] border border-[#B00D1C] transition">
                <Link href="/services">view All Services</Link>
              </button>
            
          </div>
      </div>
    </motion.section>
  );
}

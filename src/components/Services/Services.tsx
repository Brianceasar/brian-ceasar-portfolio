'use client';

import { services } from '@/data/services';
import IconWrapper from '@/components/common/IconWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} 
      id="service" 
      aria-labelledby="services-heading"
      className="py-20 bg-gradient-to-br from-gray-50 to-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12 relative">
          <h4 className="text-sm uppercase tracking-widest text-[#B00D1C] font-semibold inline-block relative">
            Top Services
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#B00D1C]"></span>
          </h4>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mt-2 pt-5">
            This is how I can help you.
          </h2>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 
                           hover:-translate-y-1 hover:shadow-lg hover:border-[color:var(--service-color)] 
                           transition-all"
                style={{ "--service-color": service.color } as React.CSSProperties}
              >
                <IconWrapper icon={service.icon} color={service.color} />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[color:var(--service-color)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <p className="text-sm font-medium text-[color:var(--service-color)]">
                  {service.samples.length} projects
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* <div className="text-center pt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B00D1C] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#B00D1C] 
                       border border-[#B00D1C] transition focus:outline-none focus:ring-2 
                       focus:ring-[#B00D1C] focus:ring-offset-2"
          >
            <Link href="/services">View All Services</Link>
          </motion.button>
        </div> */}
      </div>
    </motion.section>
  );
}
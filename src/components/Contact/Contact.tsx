'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, MessageSquare, AtSign, FileText } from 'lucide-react';

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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    info: '298 Ruhinde Road',
    subInfo: 'Dar es Salaam, Tanzania',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Phone,
    title: 'Telephone',
    info: '(+255) 679 787 157',
    subInfo: '(+255) 628 787 157',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: Mail,
    title: 'Send Email',
    info: 'brianceasar7@gmail.com',
    subInfo: 'Available 24/7',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(176,13,28,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-16 relative"
        >
          <h4 className="text-sm uppercase tracking-widest text-[#B00D1C] font-semibold inline-block relative">
            Contact
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#B00D1C]"></span>
          </h4>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-2 pt-5">
            Let&#39;s Work Together
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl leading-relaxed">
            Ready to bring your ideas to life? Get in touch and let&#39;s discuss how we can create something amazing together.
          </p>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-200 rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {/* Contact Info Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {contactInfo.map((contact, idx) => (
              <motion.div
                key={idx}
                
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Background accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${contact.bgColor} rounded-bl-2xl rounded-tr-2xl opacity-50`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B00D1C] to-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="text-white" size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B00D1C] transition-colors duration-300">
                      {contact.title}
                    </h4>
                    
                    <p className="text-gray-700 font-semibold mb-1">
                      {contact.info}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {contact.subInfo}
                    </p>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#B00D1C]/20 transition-colors duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <div className="text-left mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Send Your Message
              </h3>
              <p className="text-gray-600">
                Fill out the form below and I&#39;ll get back to you as soon as possible.
              </p>
            </div>

            <form
              className="space-y-8"
              action="https://script.google.com/macros/s/AKfycbxPBs4SCxi8ws9J-9hbqr8nTVlE0HPpTvI2oi1hPn-FccIm_J6k6owFmyI7do6497CF/exec"
              method="POST"
              target="_self"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <label className="block mb-2 text-sm font-semibold text-gray-700 group-focus-within:text-[#B00D1C] transition-colors duration-200">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input 
                    name="entry.2005620554" 
                    type="text" 
                    required 
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20 focus:border-[#B00D1C] transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-400" 
                    placeholder="Enter your full name" 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <label className="block mb-2 text-sm font-semibold text-gray-700 group-focus-within:text-[#B00D1C] transition-colors duration-200">
                    <AtSign className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input 
                    name="entry.1045781291" 
                    type="email" 
                    required 
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20 focus:border-[#B00D1C] transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-400" 
                    placeholder="Enter your email address" 
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700 group-focus-within:text-[#B00D1C] transition-colors duration-200">
                  <FileText className="inline w-4 h-4 mr-2" />
                  Subject
                </label>
                <input 
                  name="entry.839337160" 
                  type="text" 
                  required 
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20 focus:border-[#B00D1C] transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-400" 
                  placeholder="What's this about?" 
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <label className="block mb-2 text-sm font-semibold text-gray-700 group-focus-within:text-[#B00D1C] transition-colors duration-200">
                  <MessageSquare className="inline w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="entry.1166974658"
                  required
                  rows={6}
                  placeholder="Tell me about your project or how I can help you..."
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#B00D1C]/20 focus:border-[#B00D1C] transition-all duration-300 bg-gray-50 focus:bg-white placeholder:text-gray-400 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#B00D1C] to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-red-600 hover:to-[#B00D1C] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Message
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <p className="text-sm text-gray-500 mt-4">
                  I&#39;ll get back to you within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
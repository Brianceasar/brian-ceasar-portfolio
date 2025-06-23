'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} 
    id="contact" 
    className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Top contact info */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4 border-r md:border-r border-gray-200 px-4">
            <div className="flex justify-center">
              <MapPin className="text-[#B00D1C]" size={40} />
            </div>
            <h4 className="text-lg font-bold">Our Location</h4>
            <p className="text-sm text-gray-600">
              298 Ruhinde Road <br /> Dar es Salaam, Tanzania
            </p>
          </div>
          <div className="space-y-4 border-r md:border-r border-gray-200 px-4">
            <div className="flex justify-center">
              <Phone className="text-[#B00D1C]" size={40} />
            </div>
            <h4 className="text-lg font-bold">Telephone</h4>
            <p className="text-sm text-gray-600">
              (+255) 679 787 157 <br /> (+255) 628 787 157
            </p>
          </div>
          <div className="space-y-4 px-4">
            <div className="flex justify-center">
              <Mail className="text-[#B00D1C]" size={40} />
            </div>
            <h4 className="text-lg font-bold">Send Email</h4>
            <p className="text-sm text-gray-600">brianceasar7@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Send your message</h2>
          </div>

          <form
            className="max-w-4xl mx-auto space-y-6"
            action="https://script.google.com/macros/s/AKfycbxPBs4SCxi8ws9J-9hbqr8nTVlE0HPpTvI2oi1hPn-FccIm_J6k6owFmyI7do6497CF/exec"
            method="POST"
            target="_self"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input name="entry.2005620554" type="text" required className="input-field" placeholder="Your Name" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Your Email</label>
                <input name="entry.1045781291" type="email" required className="input-field" placeholder="Your Email" />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your Subject</label>
              <input name="entry.839337160" type="text" required className="input-field" placeholder="Subject" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Your Message</label>
              <textarea
                name="entry.1166974658"
                required
                rows={5}
                placeholder="Your Message"
                className="input-field resize-none"
              />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-[#B00D1C] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#B00D1C] border border-[#B00D1C] transition">
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </motion.section>
  );
}

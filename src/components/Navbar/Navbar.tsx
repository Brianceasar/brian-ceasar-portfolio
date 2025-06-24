'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#service' },
    { name: 'Works', href: '#portfolio' },
    // { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="relative group">
          <Image
            src="/assets/img/byte-logo-r.png"
            alt="Brian Ceasar Logo"
            width={180}
            height={56}
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-700 font-medium text-sm tracking-wide hover:text-[#B00D1C] transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B00D1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 bg-[#B00D1C] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#D51515] hover:shadow-lg hover:shadow-[#B00D1C]/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md px-6 py-6 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-700 text-base font-medium hover:text-[#B00D1C] transition-all duration-300 transform hover:translate-x-2 ${
                  isOpen ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#B00D1C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#D51515] transition-all duration-300 text-center mt-2"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
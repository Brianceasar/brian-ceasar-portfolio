'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#service' },
    { name: 'Works', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <Image
            src="/assets/img/byte-logo-r.png"
            alt="Logo"
            width={180}
            height={56}
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <nav className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install via: npm i lucide-react
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r  from-[#F8F8F8] to-[#858484] text-[#BFD7EA] font-poppins shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
         <Image
         src={require("../../../public/Logo.png")}
         alt='logo'
         height={200}
         width={200}
         />

        {/* Mobile Toggle */}
        <button
          className="md:hidden  text-[#BFD7EA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block mt-4' : 'hidden'
          } md:flex md:items-center md:space-x-8`}
        >
        <Link href="/" className="block text-2xl py-2 md:py-0 text-[#00072D]  hover:text-[#00072D]">
            Home
          </Link>
        <Link href="/About" className="block text-2xl py-2 md:py-0 text-[#00072D]  hover:text-[#00072D]">
           About
          </Link>
          <Link href="/Contact" className="block text-2xl py-2 md:py-0 text-[#00072D] hover:text-[#00072D]">
            Contact
          </Link>

        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/Contact"
            scroll
            className="bg-[#333333] text-[#FFFFFF] px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
          Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

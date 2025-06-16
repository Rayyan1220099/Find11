"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Pin, X, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-[#F8F8F8] to-[#858484] text-[#BFD7EA] font-poppins text-sm pt-12 pb-6 animate-fadeIn">
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease forwards;
    }
    .stagger-delay-1 {
      animation-delay: 0.2s;
    }
    .stagger-delay-2 {
      animation-delay: 0.4s;
    }
    .stagger-delay-3 {
      animation-delay: 0.6s;
    }
    .stagger-delay-4 {
      animation-delay: 0.8s;
    }
  `}</style>

  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#306BAC]/20 pb-8">

    {/* Logo & About */}
    <div className="opacity-0 animate-fadeIn stagger-delay-1">
      <Image
        src={require("../../../public/Logo.png")}
        alt="Logo"
        height={150}
        width={150}
        className="transition-transform duration-300 hover:scale-105"
      />
      <p className="mt-2 text-[#6d5e5d]">
        We are more than just a team. We're a community united by passion,
        discipline, and the love of the game.
      </p>
      <p className="mt-4 font-semibold text-black">FOLLOW US ON:</p>
      <div className="flex space-x-3 mt-2">
        <Link href="#"
           className="transition-transform duration-300 hover:scale-110 hover:text-[#306BAC]">
            <Pin className="w-5 h-5 text-black" />
        </Link>
        <Link href="#"
          className="transition-transform duration-300 hover:scale-110 hover:text-[#306BAC]">
            <X className="w-5 h-5 text-black" />
        </Link>
        <Link href="#"
         className="transition-transform duration-300 hover:scale-110 hover:text-[#306BAC]">
            <Facebook className="w-5 h-5 text-black" />
      
        </Link>
        <Link href="#"
         className="transition-transform duration-300 hover:scale-110 hover:text-[#306BAC]">
            <Instagram className="w-5 h-5 text-black" />
        </Link>
      </div>
    </div>

    {/* Quick Links */}
    <div className="opacity-0 animate-fadeIn stagger-delay-2">
      <h3 className="text-black font-bold mb-3">QUICK LINKS</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/"
           className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              Home
         
          </Link>
        </li>
        <li>
          <Link href="/about"
            className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              About Us
           
          </Link>
        </li>
        <li>
          <Link href="/services"
            className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              Services
          
          </Link>
        </li>
      </ul>
    </div>

    {/* Services */}
    <div className="opacity-0 animate-fadeIn stagger-delay-3">
      <h3 className="text-black font-bold mb-3">SERVICES</h3>
      <ul className="space-y-2">
        <li>
          <Link href="#"
            className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              Team Matchmaking
           
          </Link>
        </li>
        <li>
          <Link href="#"
            className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              Team & Player Profiles
          
          </Link>
        </li>
        <li>
          <Link href="#"
             className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              In-App Payments
            
          </Link>
        </li>
        <li>
          <Link href="#"
            className="text-[#6d5e5d] hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">
              Venue Management Dashboard
           
          </Link>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="opacity-0 animate-fadeIn stagger-delay-4">
      <h3 className="text-black font-bold mb-3">CLUB INFORMATION</h3>
      <div className="flex items-start gap-2 mb-3">
        <MapPin className="mt-1 text-[#306BAC]" />
        <div>
          <p className="font-bold text-black">OUR LOCATION</p>
          <p className='text-[#6d5e5d]'>Jl. Raya Pakisaji, No.78 Bendo, Pakisaji Malang</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Phone className="mt-1 text-[#306BAC]" />
        <div>
          <p className="font-bold text-black">PHONE NUMBER</p>
          <p className='text-[#6d5e5d]'>+ (91) – 123 456 789</p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-[#BFD7EA]/70 text-xs border-t border-[#306BAC]/20 pt-4">
    <p className="transition-opacity duration-300 hover:opacity-100 opacity-80">Copyright © 2025 All Rights Reserved.</p>
    <div className="flex space-x-4 mt-2 md:mt-0">
      <Link href="#"
       className="hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">Terms & Condition
      </Link>
      <Link href="#"
       className="hover:text-[#306BAC] transition-transform duration-300 hover:-translate-y-1">Privacy Policy
      </Link>
    </div>
  </div>
</footer>

  );
}

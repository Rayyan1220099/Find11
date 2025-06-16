'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r bg-black text-black font-poppins py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-lime-400  font-bold leading-tight mb-4">
            Your Game Starts Here.<br />
            <span className="text-lime-400">
              <Typewriter
                options={{
                  strings: ['Book', 'Join', 'Play'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className=" text-red-600 text-base mb-6 font-sans">
            FIND11 lets you join local football matches, book fields instantly, or form your dream team. No chat spam — just play.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-4 text-sm text-[#000000] mb-8">
            {['✅ Real-time Booking', '👥 Verified Teams', '⚽ Player Stats'].map((feature, i) => (
              <motion.span
                key={i}
                className="bg-white px-3 py-1 rounded-full border border-[#000000]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              href="/join"
              className="bg-[#333333] text-[#FFFFFF] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Join Now
            </Link>
            <Link
              href="/explore"
              className="border border-[#000000]  bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-[#BFD7EA] hover:text-[#00072D] transition"
            >
              Explore Matches
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={require("../../../public/player2.jpg")}
            alt="Football Player"
            width={800}
            height={800}
            className="mx-auto rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

'use client';
 
import { motion } from 'framer-motion';
import Image from 'next/image';
import ServiceSection from '../services/page';
import { div } from 'framer-motion/m';
import Vision from '../components/Vision';

export default function AboutPage() {
  return (
  <div>
    <div className="bg-gradient-to-br from-[#F8F8F8] to-[#858484] text-black font-poppins py-16 px-6">

      {/* About Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#222] mb-4">About Us</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Welcome to <span className="text-[#e63946] font-semibold">FootballZone</span> — where the passion for football lives every day.
            <br /><br />
            We provide high-quality turf fields, host friendly and competitive matches, and offer a space for players of all ages and skill levels to grow, connect, and play the beautiful game.
            <br /><br />
            Whether you're looking to join weekend matches, organize team events, or just play with your friends — FootballZone is your go-to destination. With smart tech, flexibility, and professionalism, we make finding games simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={require("../../../public/Ronaldo.jpg")} // Make sure image exists in /public
            alt="Football Team"
            width={600}
            height={400}
            className="rounded-xl shadow-lg border"
          />
        </motion.div>
      </div>

      {/* Vision Section */}

        <h2 className="text-4xl font-bold  text-center text-[#222] mb-6"></h2>
    <Vision/>
     <br/>
    </div>
     <div className='bg-black'>
      <ServiceSection/>
     </div>
    </div>


  );
}

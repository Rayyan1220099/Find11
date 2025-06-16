// ServiceSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceSection() {
  const services = [
    {
      title: 'Field Booking',
      img: '/services/field.jpg',
      desc: 'Reserve top-quality turf fields instantly for your match, training, or event.',
    },
    {
      title: 'Team Matchmaking',
      img: '/services/team.jpg',
      desc: 'Join open games or connect with verified players to form your squad.',
    },
    {
      title: 'Time-Based Plans',
      img: '/services/time.jpg',
      desc: 'Choose flexible hourly or daily plans that fit your play style and schedule.',
    },
    {
      title: 'Tournaments & Events',
      img: '/services/trophy.jpg',
      desc: 'Participate in thrilling tournaments and competitive leagues all year round.',
    },
        {
      title: 'Team & Player Profiles',
      img: '/services/player.jpg',
      desc: 'Players and teams can create profiles with stats, ratings, and preferences',
    },
    {
      title: 'In-App Payments',
      img: '/services/app.jpg',
      desc: 'Secure and easy payments for booking slots or upgrading to premium features.',

    },
    {
      title: 'Player Stats Tracking',
      img: '/services/stats.jpg',
      desc: 'Get real-time updates on your match stats including goals, assists, saves, and more. Build your player profile with performance insights.',
    },
    {
      title: 'Coach & Training Sessions',
      img: '/services/coach.jpg',
      desc: 'Book professional coaches for personalized or team training. Improve your tactics, fitness, and technique under expert guidance.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 font-poppins">
      <div className="max-w-8xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className='text-lime-400 font-Bold '>Our Services</p>
        </motion.h2>
        <p className="mt-4 text-lg text-white">
          Everything you need to get on the pitch, play, and win —<span className='text-red-600 text-2xl font-bold'> all in one platform</span> .
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative  h-96 rounded-xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Image
              src={service.img}
              alt={service.title}
              fill
              sizes="100%"
              className="object-cover group-hover:scale-105 transition-transform duration-500 text"
              priority
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 text-white p-4 flex flex-col justify-end transition-colors duration-500">
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-gray-200">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

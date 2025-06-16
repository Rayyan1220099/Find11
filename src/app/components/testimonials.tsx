// TestimonialSlider.tsx
'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';


const testimonials = [
  {
    name: "Robert Alan Turner",
    role: "Physiotherapist",
    image: "/Blog/testimonial1.jpg",
    text: "Football is more than just a game—it’s a global passion. At Footclub, we’ve built a platform that celebrates every match, every goal, and every fan.",
  },
  {
    name: "Emily Carter",
    role: "Youth Coach",
    image: "/Blog/testimonial2.jpg",
    text: "The Footclub community gives our players confidence. It’s the only platform that truly highlights both effort and talent.",
  },
  {
    name: "Liam Grant",
    role: "Football Analyst",
    image: "/Blog/testimonial3.jpg",
    text: "From match analysis to community support, Footclub is unmatched. It’s more than a site — it’s a football family.",
  },
];
const CounterBox = ({
  title,
  target,
  suffix,
  description,
  position,
  color,
}: {
  title: string;
  target: number;
  suffix: string;
  description: string;
  position: 'left' | 'right';
  color: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // fire when 30% visible
  });

  const animatedProps = useSpring({
    number: inView ? target : 0,
    config: { duration: 1500 },
  });

  return (
    <div
      ref={ref}
      className={`absolute bottom-4 ${
        position === 'left' ? 'left-4' : 'left-60'
      } ${color} text-white p-4 rounded-md w-36 shadow-md`}
    >
      <p className="text-xs font-semibold uppercase">{title}</p>
      <animated.h2 className="text-xl font-bold">
        {animatedProps.number.to((val) => `${Math.floor(val)}${suffix}`)}
      </animated.h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { name, role, image, text } = testimonials[index];

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="bg-[#000000] text-gray-900 py-20 px-6  font-heading">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Sliding Testimonial */}
        <div className="lg:w-1/2">
          <h4 className="text-red-600 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>⚽</span> What Our Fans Are Saying
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-4">
            The Best Football Blog — See What Our Followers Think
          </h2>
          <div className="flex text-red-500 mb-3 text-xl">★★★★★</div>

          <div className="relative min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <p className="text-white mb-6 leading-relaxed">{text}</p>
                <div className="flex items-center gap-4 mt-6">
                  <Image
                    src={image}
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt={name}
                  />
                  <div>
                    <h4 className="text-lg text-white font-bold">{name}</h4>
                    <p className="text-white text-sm">{role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
<div className="lg:w-1/2">
  <div className="relative w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
    <Image
      src={require('../../../public/test2.jpg')}
      height={200}
      width={400}
      alt="Boy"
    />

    <CounterBox
      title="Coaches"
      target={100}
      suffix="+"
      description="Responsibility for team"
      position="left"
      color="bg-red-600"
    />
    <CounterBox
      title="Match Wins"
      target={90}
      suffix="%"
      description="Coach with wins match"
      position="right"
      color="bg-[#0A122A]"
    />
  </div>
</div>

      </div>
    </section>
  );
}

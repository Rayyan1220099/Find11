import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Vision() {
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
   <Image
   src={require("../../../public/test1.jpg")}
   alt="Image"
   height={500}
   width={500}

   />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    
        <br className="hidden lg:inline-block" />
       Our Vission
      </h1>
     <p className="mb-8 leading-relaxed text-xl">
    At Footclub, we envision a world where football is not just a sport, but a shared celebration of community, ambition, and excellence.
We aim to bridge the gap between local talent and global opportunity through technology, teamwork, and transparent engagement.
Our mission is to empower players, coaches, and fans alike with the tools and platforms they need to thrive.
From grassroots games to grand stadiums, we believe every kick, every pass, and every goal tells a story worth sharing.
We see a future where booking a match, joining a team, or reviewing game stats is as easy as tapping a screen.
Our platform is built to elevate the experience—both on and off the field.
We are committed to fairness, inclusivity, and growth across all levels of the sport.
Innovation drives us, passion fuels us, and community sustains us.
Footclub isn’t just a service—it’s a movement.
Together, we’ll redefine how the world plays, watches, and loves football.
Because for us, the game never ends—it only evolves.
Welcome to the future of football. Welcome to Footclub.
      </p>
    </div>
  </div>
</section>

  )
}
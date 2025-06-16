import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Price() {
  return (

<section className="text-gray-600 body-font overflow-hidden bg-gradient-to-r from-[#F8F8F8] to-[#858484]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-5xl text-3xl font-extrabold text-[#2f2f2f] mb-4">
        Booking <span className="text-lime-500">Field</span>
      </h1>
      <p className="lg:w-2/3 mx-auto text-lg text-black font-medium">
        Choose Your Plan, Gather your Squad, and Hit the Pitch — <span className="text-red-500 text-2xl">Football Made Easy.</span> 
      </p>
    </div>
    
    {/* Grid with 4 columns on large screens */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Start", price: "Free", features: ["Basic Booking Access", "Limited Availability", "1 Squad Entry"], link: "/", badge: null },
        { title: "Pro", price: "$38/mo", features: ["Priority Booking", "Unlimited Squad Entries", "Match Highlights"], link: "/", badge: "POPULAR" },
        { title: "Business", price: "$56/mo", features: ["Team Management", "Advanced Stats", "24/7 Support"], link: "/", badge: null },
        { title: "Special", price: "$72/mo", features: ["Custom Jerseys", "Private Fields", "VIP Access"], link: "/", badge: null },
      ].map((plan, idx) => (
        <div key={idx} className="bg-white border-2 border-black p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 relative flex flex-col">
          {plan.badge && (
            <span className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-1 rounded-bl-md font-semibold">
              {plan.badge}
            </span>
          )}
          <h2 className="text-sm tracking-wide text-gray-600 font-medium uppercase mb-1">
            {plan.title}
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 border-b border-black pb-2">
            {plan.price}
          </h1>
          <ul className="flex-1 space-y-2 mb-6">
            {plan.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-center text-gray-800">
                <span className="w-5 h-5 mr-3 inline-flex items-center justify-center bg-black text-white rounded-full">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={plan.link}
            className="mt-auto inline-flex items-center justify-center bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Select Plan
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-xs text-gray-500 mt-3">
            No hidden fees. Cancel anytime.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


  )}

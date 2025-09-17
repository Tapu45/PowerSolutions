"use client";

import TrueFocus from "@/components/animation/focous-text";
import React, { useState } from "react";



// Service data
const SERVICES = [
  {
    name: "AEaas",
    img: "/assets/services/AEaas BG -N.png",
    bullets: [
      "Advanced analytics and insights",
      "Real-time performance monitoring",
      "Automated reporting solutions",
    ],
  },
  {
    name: "ATaas",
    img: "/assets/services/ATaas BG -N.png",
    bullets: [
      "Cloud infrastructure management",
      "Scalable technology solutions",
    ],
  },
  {
    name: "BAaas",
    img: "/assets/services/BAaas BG -N.png",
    bullets: ["Business process optimization", "Strategic consulting services"],
  },
  {
    name: "CMaas",
    img: "/assets/services/CMaas BG -N.png",
    bullets: [
      "Customer relationship management",
      "Engagement strategy development",
    ],
  },
  {
    name: "DMaas",
    img: "/assets/services/DMaas BG -N.png",
    bullets: ["Data management solutions", "Analytics and visualization"],
  },
  {
    name: "FAaas",
    img: "/assets/services/FAaas BG -N.png",
    bullets: ["Financial planning and analysis", "Risk assessment services"],
  },
  {
    name: "PAaas",
    img: "/assets/services/PAaas BG -N.png",
    bullets: [
      "Project management solutions",
      "Agile methodology implementation",
    ],
  },
  {
    name: "PMaas",
    img: "/assets/services/PMaas BG -N.png",
    bullets: ["Performance monitoring", "Optimization strategies"],
  },
  {
    name: "TMaas",
    img: "/assets/services/TMaas BG -N.png",
    bullets: ["Team management solutions", "Collaboration tools"],
  },
];

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-44 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-18">
          <TrueFocus
            words={[
              { word: "Identify.", color: "#0B8FD6" },
              { word: "Implement..", color: "#1BCDC5" },
              { word: "Intensify...", color: "#0B8FD6" },
            ]}
            manualMode={true}
            blurAmount={5}
            borderColor="#D6CE0B"
            glowColor="rgba(11, 143, 214, 0.6)"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Our Services
        </h2>

        <div className="flex justify-center mb-6">
          <div className="w-16 h-0.5 bg-teal-500"></div>
        </div>

        <p className="text-lg text-center mb-16 text-gray-600 max-w-5xl mx-auto leading-relaxed">
          At <span className="font-semibold text-gray-900">[solutions]ⁿ</span>,
          we offer a curated suite of micro-services across ERP, Business
          Applications, and Business Processes — designed to uncover the smaller
          metrics of failure often overlooked in broader scopes. Our approach
          helps clients transform narrow challenges into strategic wins,
          achieving macro impact and staying ahead of benchmarks.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.name}
              className="relative group rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

             

              {/* Hover Overlay with Bullets */}
              <div
                className={`absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center p-8 transition-all duration-300 ${
                  hovered === idx
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {service.name}
                  </h3>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-gray-700 text-sm leading-relaxed flex items-start"
                        style={{
                          animationDelay: `${i * 100}ms`,
                          animation:
                            hovered === idx
                              ? "fadeInUp 0.5s ease-out forwards"
                              : "none",
                        }}
                      >
                        <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{bullet.replace("• ", "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subtle border animation */}
              <div
                className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  hovered === idx ? "ring-2 ring-teal-500/20" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

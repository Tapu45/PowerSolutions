"use client";

import TrueFocus from "@/components/animation/focous-text";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Service data
// Update this section with the complete array

const SERVICES = [
  {
    name: "AEaas",
    img: "/assets/services/AEaas BG -N.png",
    color: "#0B8FD6", // Blue
    bullets: [
      "Advanced analytics and insights",
      "Real-time performance monitoring",
      "Automated reporting solutions",
      "Predictive modeling capabilities",
    ],
  },
  {
    name: "ATaas",
    img: "/assets/services/ATaas BG -N.png",
    color: "#1BCDC5", // Teal
    bullets: [
      "Cloud infrastructure management",
      "Scalable technology solutions",
      "DevOps automation",
      "Security compliance",
    ],
  },
  {
    name: "BAaas",
    img: "/assets/services/BAaas BG -N.png",
    color: "#D6CE0B", // Yellow
    bullets: [
      "Business process optimization",
      "Strategic consulting services",
      "Workflow automation",
      "Performance metrics analysis",
    ],
  },
  {
    name: "CMaas",
    img: "/assets/services/CMaas BG -N.png",
    color: "#FF6B35", // Orange
    bullets: [
      "Customer relationship management",
      "Engagement strategy development",
      "Multi-channel communication",
      "Customer journey mapping",
    ],
  },
  {
    name: "DMaas",
    img: "/assets/services/DMaas BG -N.png",
    color: "#7B4AE2", // Purple
    bullets: [
      "Data management solutions",
      "Analytics and visualization",
      "Data governance frameworks",
      "Real-time data processing",
    ],
  },
  {
    name: "FAaas",
    img: "/assets/services/FAaas BG -N.png",
    color: "#10B981", // Green
    bullets: [
      "Financial planning and analysis",
      "Risk assessment services",
      "Budget optimization",
      "Compliance monitoring",
    ],
  },
  {
    name: "PAaas",
    img: "/assets/services/PAaas BG -N.png",
    color: "#F43F5E", // Red
    bullets: [
      "Project management solutions",
      "Agile methodology implementation",
      "Resource allocation",
      "Timeline optimization",
    ],
  },
  {
    name: "PMaas",
    img: "/assets/services/PMaas BG -N.png",
    color: "#3B82F6", // Bright Blue
    bullets: [
      "Performance monitoring",
      "Optimization strategies",
      "KPI tracking",
      "Continuous improvement",
    ],
  },
  {
    name: "TMaas",
    img: "/assets/services/TMaas BG -N.png",
    color: "#8B5CF6", // Violet
    bullets: [
      "Team management solutions",
      "Collaboration tools",
      "Workflow coordination",
      "Productivity analytics",
    ],
  },
];

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);
const router = useRouter(); // Add this line

const handleServiceClick = (serviceName: string) => {
  // Navigate to service page
  router.push(`/services/${serviceName.toLowerCase()}`);
};

  return (
    <section className="py-47 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <TrueFocus
            words={[
              { word: "identify.", color: "#0B8FD6" },
              { word: "implement.", color: "#1BCDC5" },
              { word: "intensify.", color: "#0B8FD6" },
            ]}
            manualMode={true}
            blurAmount={5}
            borderColor="#D6CE0B"
            glowColor="rgba(11, 143, 214, 0.6)"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-3 text-center"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-center mb-20 text-gray-600 max-w-5xl mx-auto leading-relaxed"
        >
          At{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            [solutions]ⁿ
          </span>
          , we offer a curated suite of micro-services across ERP, Business
          Applications, and Business Processes — designed to uncover the smaller
          metrics of failure often overlooked in broader scopes. Our approach
          helps clients transform narrow challenges into strategic wins,
          achieving macro impact and staying ahead of benchmarks.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={service.name}
              className="relative group rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer h-80"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleServiceClick(service.name)}
              style={{
                boxShadow:
                  hovered === idx
                    ? `0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 2px ${service.color}30`
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Image Container - Always visible */}
              <div className="relative h-full w-full overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    hovered === idx ? "bg-black/20" : "bg-black/0"
                  }`}
                />
                <img
                  src={service.img}
                  alt={service.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hovered === idx
                      ? "scale-110 filter saturate-110"
                      : "scale-100"
                  }`}
                />

                {/* Service Name Overlay when not hovered */}
              </div>

              {/* Bottom Layer with Bullets */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-white/90  py-5 transition-all duration-500 ease-out transform ${
                  hovered === idx
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
                style={{
                  clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)",
                  borderTop: `3px solid ${service.color}70`,
                }}
              >
                <div className="p-5 pt-7">
                  {/* Service Title in Bottom Layer */}
                  <h3
                    className="text-xl font-bold mb-4 text-center"
                    style={{ color: service.color }}
                  >
                    {service.name}
                  </h3>

                  {/* Bullets */}
                  <div className="space-y-3">
                    {service.bullets.slice(0, 2).map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hovered === idx
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-gray-700 text-sm leading-relaxed font-medium">
                          {bullet}
                        </span>
                      </motion.div>
                    ))}

                    {/* Last bullet and arrow in one row */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hovered === idx
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-gray-700 text-sm leading-relaxed font-medium">
                          {service.bullets[2]}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                          hovered === idx
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0.8, opacity: 0 }
                        }
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex items-center justify-center w-10 h-10 rounded-full ml-2 transition-all duration-300 transform hover:scale-110 group/arrow"
                        style={{ backgroundColor: service.color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.name);
                        }}
                      >
                        <svg
                          className="w-5 h-5 text-white transition-transform duration-300 group-hover/arrow:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <motion.div
                animate={{
                  boxShadow:
                    hovered === idx
                      ? `0 0 25px 5px ${service.color}30, inset 0 0 0 1px ${service.color}40`
                      : "none",
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 5px 0px rgba(27, 205, 197, 0.3);
          }
          50% {
            box-shadow: 0 0 15px 5px rgba(27, 205, 197, 0.5);
          }
          100% {
            box-shadow: 0 0 5px 0px rgba(27, 205, 197, 0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

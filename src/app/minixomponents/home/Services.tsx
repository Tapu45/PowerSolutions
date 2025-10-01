"use client";

import TrueFocus from "@/components/animation/focous-text";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Service data
const SERVICES = [
  {
    name: "BAaas",
    img: "/assets/services/BAaas BG -N.png",
    color: "#D6CE0B",
    bullets: [
      "Save 50% of your expense on Business Analyst",
      "Engage Business Analyst with 20+ Years Experience",
      "Expose your Business Problems to 150 + Person Year  Consulting Forum",
    ],
  },
  {
    name: "FAaas",
    img: "/assets/services/FAaas BG -N.png",
    color: "#10B981",
    bullets: [
      "Assess before you invest on your Future Business Process",
      "Blend Feasibility Assessment with Industry insight & Alternative Solution",
      "Focus on scalability not on available competency",
    ],
  },
  {
    name: "PMaas",
    img: "/assets/services/PMaas BG -N.png",
    color: "#3B82F6",
    bullets: [
      "A logical GCC as a Service for your software products",
      "Pay as Use option for GCC as a Service Model",
      "Access to Industry Across Business Use Cases and Solutions",
    ],
  },
  {
    name: "DMaas",
    img: "/assets/services/DMaas BG -N.png",
    color: "#7B4AE2",
    bullets: [
      "100% Accuracy and availability of your data for your future business",
      "Aligned IT and Business Expectation from Transformation initiative",
      "Minimum Disruption in Business As Usual and bottlenecks for Project Timelines",
    ],
  },
  {
    name: "TMaas",
    img: "/assets/services/TMaas BG -N.png",
    color: "#8B5CF6",
    bullets: [
      "Strategic Parking Zone for your GCC Plan / New Transition In Partner",
      "Seamless Transition and Shared Accountability for gap between Transition Out and Transition In",
      "Process Knowledge Preservation and Mitigate Transition Risks",
    ],
  },
  {
    name: "ATaas",
    img: "/assets/services/ATaas BG -N.png",
    color: "#1BCDC5",
    bullets: [
      "Ensure your Business Application Deliver exactly what your users expect",
      "Don’t let Bugs or Blind Spots derail your go-lve",
      "Shift from feature validation to problem solving. Lets test what matters.",
    ],
  },
  {
    name: "CMaas",
    img: "/assets/services/CMaas BG -N.png",
    color: "#FF6B35",
    bullets: [
      "Where Skills meet Strategy - Empowering People, Enabling Process",
      "From Potential to Performance — Competency is the New Currency.",
      "Custom-built training modules for each levels of resources, aligned with real-time market needs",
    ],
  },
  {
    name: "AEaas",
    img: "/assets/services/AEaas BG -N.png",
    color: "#0B8FD6",
    bullets: [
      "Empower your transformation journey with data-driven insights",
      "Empower Your Workforce through inclusive evaluation",
      "Drive Sustainable Change with actionable recommendations",
    ],
  },
  {
    name: "PAaas",
    img: "/assets/services/PAaas BG -N.png",
    color: "#F43F5E",
    bullets: [
      "Helps businesses validate deliverables before releasing retention payments",
      "Early identification and control implementation for project risks",
      "Spot gaps in scope, missed requirements, and hidden risks before they become expensive problems.",
    ],
  },
];

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  const handleServiceClick = (serviceName: string) => {
    router.push(`/services/${serviceName.toLowerCase()}`);
  };

  return (
    <section className="premium-section premium-pattern relative py-4 pb-16 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/8 to-yellow-200/6 rounded-full blur-3xl premium-animate-float" />
      <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-yellow-200/6 to-teal-200/4 rounded-full blur-2xl premium-animate-float delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-teal-100/6 to-yellow-100/4 rounded-full blur-3xl premium-animate-float delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="text-4xl font-bold bg-black bg-clip-text text-transparent mb-3 text-center"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-400 mx-auto mb-6"
        />

        {/* Single matrix: first cell is text, then all cards fill the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch auto-rows-[15rem]">
          {/* Cell 1: Service content */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 premium-card flex flex-col justify-between h-60 sm:h-60 lg:row-span-2 lg:h-auto lg:min-h-[30rem]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,252,0.85) 50%, rgba(254,252,232,0.8) 100%)",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-6 w-1.5 rounded bg-teal-500" />
                <span className="uppercase tracking-wider text-sm font-semibold text-teal-700">
                  Services
                </span>
              </div>

              <p className="text-[0.95rem] leading-relaxed text-gray-700">
                At{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-yellow-600">
                  {/* Custom colored "solutions" as per logo */}
                  <span style={{ color: "#1BCDC5" }}>[</span>
                  <span style={{ color: "#D6CE0B" }}>solut</span>
                  <span style={{ color: "#0B8FD6" }}>i</span>
                  <span style={{ color: "#D6CE0B" }}>o</span>
                  <span style={{ color: "#8B2121" }}>n</span>
                  <span style={{ color: "#D6CE0B" }}>s</span>
                  <span style={{ color: "#1BCDC5" }}>]</span>
                  <span
                    style={{
                      color: "#0B8FD6",
                      fontSize: "1.1em",
                      verticalAlign: "super",
                    }}
                  >
                    n
                  </span>
                </span>
                , we offer a curated suite of micro-services across ERP,
                Business Applications, and Business Processes — designed to
                uncover the smaller metrics of failure often overlooked in
                broader scopes.
              </p>

              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Surface micro-metrics that drive macro results.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Turn narrow challenges into strategic wins.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    Stay ahead of benchmarks with focused execution.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 h-0.5 w-20 bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-400 rounded-full" />
          </motion.aside>

          {/* Remaining cells: all service cards */}
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 overflow-hidden border cursor-pointer h-60"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleServiceClick(service.name)}
              style={{
                background:
                  hovered === idx
                    ? `linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,253,252,0.9) 30%, rgba(254,252,232,0.85) 100%)`
                    : `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,253,252,0.75) 50%, rgba(254,252,232,0.7) 100%)`,
                borderColor:
                  hovered === idx
                    ? `${service.color}40`
                    : "rgba(20, 184, 166, 0.15)",
                boxShadow:
                  hovered === idx
                    ? `0 25px 50px -12px rgba(20, 184, 166, 0.15), 0 8px 32px -8px rgba(214, 206, 11, 0.1), 0 0 0 1px ${service.color}25`
                    : "0 8px 25px -5px rgba(20, 184, 166, 0.08), 0 4px 16px -4px rgba(214, 206, 11, 0.06), 0 0 0 1px rgba(20, 184, 166, 0.1)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}06 0%, rgba(20, 184, 166, 0.04) 50%, rgba(214, 206, 11, 0.03) 100%)`,
                }}
              />

              <div className="relative h-full w-full overflow-hidden">
                <div
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    hovered === idx
                      ? "bg-gradient-to-br from-teal-900/10 via-transparent to-yellow-900/5"
                      : "bg-gradient-to-br from-teal-900/5 via-transparent to-yellow-900/3"
                  }`}
                />
                <img
                  src={service.img}
                  alt={service.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hovered === idx
                      ? "scale-110 filter saturate-110 brightness-105"
                      : "scale-100 filter saturate-105"
                  }`}
                />
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 py-4 transition-all duration-500 ease-out transform ${
                  hovered === idx
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(240,253,252,0.9) 40%, rgba(254,252,232,0.88) 100%)`,
                  clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
                  borderTop: `2px solid ${service.color}50`,
                  boxShadow: `0 -4px 20px rgba(20, 184, 166, 0.08), 0 -2px 12px rgba(214, 206, 11, 0.05), inset 0 1px 0 rgba(255,255,255,0.9)`,
                }}
              >
                <div className="p-4 pt-7">
                  <div className="space-y-2.5">
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
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-gray-700 text-sm leading-relaxed font-medium">
                          {bullet}
                        </span>
                      </motion.div>
                    ))}

                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hovered === idx
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 shadow-sm"
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
                        className="flex items-center justify-center w-9 h-9 rounded-full ml-2 transition-all duration-300 transform hover:scale-110 group/arrow shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                          boxShadow: `0 4px 12px ${service.color}40, inset 0 1px 0 rgba(255,255,255,0.3)`,
                        }}
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

              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                  hovered === idx ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(20, 184, 166, 0.04) 0%, transparent 30%, rgba(214, 206, 11, 0.03) 70%, transparent 100%)`,
                }}
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

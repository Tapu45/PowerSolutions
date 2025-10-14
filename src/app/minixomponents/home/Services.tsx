"use client";

import TrueFocus from "@/components/animation/focous-text";
import React, { useState, useEffect } from "react";
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
  {
    name: "DSaaS",
    img: "/assets/services/DSaas.png", // Make sure this image exists or update the path
    color: "#0B8FD6",
    bullets: [
      "Establish consistent deliverable formats across all projects",
      "Reduce review cycles and accelerate stakeholder sign-off",
      "Ensure compliance and audit-readiness with standardized documentation",
    ],
  },
];

const Services = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleServiceClick = (serviceName: string, idx: number) => {
    if (isMobile) {
      setExpanded(expanded === idx ? null : idx);
    } else {
      router.push(`/services/${serviceName.toLowerCase()}`);
    }
  };

  return (
    <section className="premium-section premium-pattern relative md:py-26 pb-16 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/8 to-yellow-200/6 rounded-full blur-3xl premium-animate-float" />
      <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-yellow-200/6 to-teal-200/4 rounded-full blur-2xl premium-animate-float delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-teal-100/6 to-yellow-100/4 rounded-full blur-3xl premium-animate-float delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Desktop animated focus */}
          <div className="hidden md:block">
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
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4 text-center"
          style={{ color: "#D6CE0B" }}
          whileHover={{
            textShadow: [
              `0 0 0px #D6CE0B`,
              `0 0 30px #1BCDC530`,
              `0 0 0px #D6CE0B`,
            ],
          }}
        >
          Our Services
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 text-center">
          A curated suite of micro-services for strategic transformation
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-0.5 bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-400 mx-auto mb-6"
        />

        {/* Single matrix: first cell is text, then all cards fill the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch auto-rows-[15rem]">
          {/* Cell 1: Service content - Improved for mobile */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 premium-card flex flex-col justify-between h-auto sm:h-auto lg:row-span-2 lg:h-auto lg:min-h-[30rem]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,252,0.85) 50%, rgba(254,252,232,0.8) 100%)",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-6 w-1.5 rounded bg-teal-500" />
                <span className="uppercase tracking-wider text-sm font-semibold text-teal-700">
                  Services
                </span>
              </div>

              <p className="text-base sm:text-[0.9rem] leading-relaxed text-gray-700">
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
                broader scopes. Our approach helps clients transform narrow
                challenges into strategic wins, achieving macro impact and
                staying ahead of benchmarks.
              </p>
              <p className="text-base sm:text-[0.9rem] leading-relaxed text-gray-700 mt-3">
                The micro-services are focused to deliver and add value to
                transformation drive through:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 text-base sm:text-sm">
                <li>Granular Problem Solving</li>
                <li>Objective Oriented Analysis and Documentation</li>
                <li>Quality Delivery with 100% strategic alignment</li>
                <li>System Thinking and Overall Scope Validation</li>
              </ul>
            </div>
            <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-400 rounded-full" />
          </motion.aside>

          {/* Remaining cells: all service cards - Improved for mobile */}
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 overflow-hidden border cursor-pointer sm:h-60"
              style={{
                height: "auto", // Changed from fixed height to auto
                minHeight: "15rem", // Add minimum height to ensure consistent sizing
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
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleServiceClick(service.name, idx)}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}06 0%, rgba(20, 184, 166, 0.04) 50%, rgba(214, 206, 11, 0.03) 100%)`,
                }}
              />

              <div
                className="relative w-full overflow-hidden"
                style={{ height: "15rem" }}
              >
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
                  className={`w-full h-full object-contain transition-all duration-700 ${
                    hovered === idx
                      ? "scale-110 filter saturate-110 brightness-105"
                      : "scale-100 filter saturate-105"
                  }`}
                />
              </div>

              {/* Service name display always visible - NEW */}
              <div className="text-center py-3">
                <h3
                  className="font-semibold text-lg text-blue-700"
                  style={{ color: service.color }}
                >
                  {service.name === "BAaas"
                    ? "Business Analysis as a Service"
                    : service.name === "FAaas"
                    ? "Feasibility Assessment as a Service"
                    : service.name === "PMaas"
                    ? "Project Management as a Service"
                    : service.name === "DMaas"
                    ? "Data Migration as a Service"
                    : service.name === "TMaas"
                    ? "Transition Management as a Service"
                    : service.name === "ATaas"
                    ? "Application Testing as a Service"
                    : service.name === "CMaas"
                    ? "Competency Management as a Service"
                    : service.name === "AEaas"
                    ? "Application Evaluation as a Service"
                    : service.name === "PAaas"
                    ? "Project Audit as a Service"
                    : service.name}
                </h3>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 py-3 transition-all duration-500 ease-out transform ${
                  hovered === idx || (isMobile && expanded === idx)
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
                <div className="p-3 pt-6">
                  <div className="space-y-1.5 sm:space-y-2.5">
                    {service.bullets.slice(0, 2).map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hovered === idx || (isMobile && expanded === idx)
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                          {bullet}
                        </span>
                      </motion.div>
                    ))}

                    <div className="flex items-center justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          hovered === idx || (isMobile && expanded === idx)
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex items-start gap-2"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: service.color }}
                        />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">
                          {service.bullets[2]}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                          hovered === idx || (isMobile && expanded === idx)
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0.8, opacity: 0 }
                        }
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full ml-2 transition-all duration-300 transform hover:scale-110 group/arrow shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)`,
                          boxShadow: `0 4px 12px ${service.color}40, inset 0 1px 0 rgba(255,255,255,0.3)`,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(
                            `/services/${service.name.toLowerCase()}`
                          );
                        }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover/arrow:translate-x-0.5"
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

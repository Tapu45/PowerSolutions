"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
   {
    key: "BYOS",
    label: "Build Your Own Solution",
    img: "/assets/solutions/BYOS.png",
    description:
      "Unlock the power of customization with our flexible platform. Whether you have unique requirements or specialized workflows, our BYOS offering enables you to design, develop, and deploy solutions tailored precisely to your business needs. Enjoy the freedom to innovate without limitations, supported by our expert guidance at every step. Accelerate your digital transformation with tools that adapt as your business evolves.",
    benefits:
      "• Strategic Freedom for Visionary Leaders\n• You define the solution. We deliver the execution\n• With BYOS, your leadership team can focus on what matters most: the solution’s impact, not its implementation.",
    color: "#0B8FD6",
    path: "/usps/byos",
    cta: "Explore Resilient Outsourcing",
  },
  {
    key: "BYBS",
    label: "Bring Your Business Story",
    img: "/assets/solutions/BYBS.png",
    description:
      "Empower your business with a narrative-driven approach. We help you craft and communicate your unique business story, ensuring your brand stands out in a crowded marketplace. Our team works closely with you to identify your core values, strengths, and differentiators, transforming them into a compelling story that resonates with your audience and builds lasting relationships. Experience a holistic branding journey that elevates your market presence and fosters trust.",
    benefits:
      "• Every Business Has a Story. We Turn Yours Into a Solution through BYBS\n• Your Business Story. Our Blueprint for Transformation\n• No More One-Size-Fits-All. Your Story Leads. We Follow",
    color: "#1BCDC5",
    path: "/usps/bybs",
    cta: "Whiteboard Your Story",
  },
  {
    key: "BIBD",
    label: "Building Innovations & Business Disruptions",
    img: "/assets/solutions/BIBD.png",
    description:
      "Stay ahead of the curve with our innovation and disruption services. We transform your raw data into actionable insights using advanced analytics and AI-driven platforms. Our solutions empower you to make data-driven decisions, identify new opportunities, and adapt quickly to market changes, ensuring your business remains resilient and future-ready. Embrace innovation and turn disruption into your competitive advantage.",
    benefits:
      "• From Ideas to Impact – BIBD transforms innovation into disruptive business solutions\n• Explore solutions born from real-world challenges and visionary thinking.\n• Ideas Ignite Here. Disruption Begins Now",
    color: "#D6CE0B",
    path: "/usps/bibd",
    cta: "Acid test the Innovation",
  },
  {
    key: "RYRO",
    label: "Re-Engineer Your Retail Organizations",
    img: "/assets/solutions/RYRO.png",
    description:
      "Revolutionize your retail operations with our end-to-end management solution. From inventory and sales to customer experience and omnichannel capabilities, we provide the tools you need to optimize every aspect of your retail business. Our platform is designed to drive growth, enhance efficiency, and deliver exceptional value to your customers. Stay agile and responsive in a rapidly changing retail landscape.",
    benefits:
      "• Need transformation that aligns with business outcomes—not just trends\n• Identify core assets—people, processes, technologies—that are viable for transformation\n• Design a transformation roadmap using retained strengths as foundational pillars",
    color: "#0B8FD6",
    path: "/usps/ryro",
    cta: "Discover the RYRO Framework",
  },
];
//

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // For traveling underline
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
    color: string;
  }>({
    left: 0,
    width: 0,
    color: solutions[0].color,
  });

  // Auto-slide effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Manual navigation resets timer
  const handleManualNav = (idx: number) => {
    setActiveIndex(idx);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % solutions.length);
      }, 6000);
    }
  };

  // Update underline position and size on activeIndex change
  useEffect(() => {
    const currentBtn = navRefs.current[activeIndex];
    if (currentBtn && underlineRef.current) {
      const { left, width } = currentBtn.getBoundingClientRect();
      const parentLeft =
        currentBtn.parentElement?.getBoundingClientRect().left || 0;
      setUnderlineStyle({
        left: left - parentLeft,
        width,
        color: solutions[activeIndex].color,
      });
    }
  }, [activeIndex]);

  // Progress bar synced with 6s rotation
  const [progressKey, setProgressKey] = useState(0);
  useEffect(() => {
    // reset the CSS animation by changing key
    setProgressKey((k) => k + 1);
  }, [activeIndex]);

  const currentSolution = solutions[activeIndex];
  const benefits = currentSolution.benefits
    .split("\n")
    .map((b) => b.replace(/^•\s?/, ""))
    .slice(0, 3);

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Subtle animated background accents */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl"
        style={{ background: `${currentSolution.color}20` }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-24 w-80 h-80 rounded-full blur-3xl"
        style={{ background: `${currentSolution.color}15` }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold"
            style={{ color: "#0B8FD6" }}
            whileHover={{
              textShadow: [
                `0 0 0px #0B8FD6`,
                `0 0 30px #0B8FD630`,
                `0 0 0px #0B8FD6`,
              ],
            }}
            transition={{ duration: 1 }}
          >
            Our USPs
          </motion.h2>
          <div
            className="h-1 w-24 mx-auto mt-3"
            style={{ backgroundColor: "#0B8FD6" }}
          ></div>
        </motion.div>

        {/* Active Solution Display */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-12">
          {/* Left side - Image */}
          <motion.div
            key={currentSolution.key + "-image"}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-2/5 flex md:justify-start justify-center md:-ml-8"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: `0 30px 80px ${currentSolution.color}22`,
                  filter: "blur(12px)",
                }}
              />
              <Image
                src={currentSolution.img}
                alt={currentSolution.label}
                width={360}
                height={360}
                className="object-contain relative"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? "rotate(0deg)"
                      : "rotate(-90deg)",
                }}
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSolution.key + "-content"}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                <h3
                  className="text-4xl font-extrabold mb-2 tracking-tight"
                  style={{ color: currentSolution.color }}
                >
                  {currentSolution.label}
                </h3>
                <div
                  className="h-1 w-24 mb-6"
                  style={{ backgroundColor: currentSolution.color }}
                ></div>

                <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-snug font-medium">
                  {currentSolution.description.split(".")[0]}.
                </p>

                {/* Benefits - show 3 with stagger */}
                <ul className="list-none pl-0 text-base md:text-lg text-gray-700 space-y-3 mb-8">
                  {benefits.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${currentSolution.color}20`,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          style={{ color: currentSolution.color }}
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    href={currentSolution.path}
                    className="inline-flex items-center px-4 py-2 rounded-md font-semibold text-lg shadow-sm hover:shadow-md transition-colors"
                    style={{
                      backgroundColor: currentSolution.color,
                      color: "#fff",
                      minWidth: 0,
                      width: "fit-content",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    {currentSolution.cta}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: "#fff" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  {/* Progress indicator for auto-rotate */}
                  <div className="relative h-2 w-40 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      key={progressKey}
                      className="h-full"
                      style={{
                        backgroundColor: currentSolution.color,
                        width: "0%",
                        animation: "fillProgress 6s linear forwards",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Solution Navigation with traveling underline */}
        <div className="relative flex flex-wrap justify-center gap-10 md:gap-16 border-t pt-8">
          {solutions.map((sol, idx) => (
            <button
              key={sol.key}
              ref={(el) => {
                navRefs.current[idx] = el;
              }}
              className={`text-lg px-4 py-2 relative transition-colors duration-200 ${
                activeIndex === idx
                  ? "font-semibold"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              style={{
                color: activeIndex === idx ? sol.color : undefined,
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
              onClick={() => handleManualNav(idx)}
            >
              {sol.key}
            </button>
          ))}
          {/* Traveling Underline */}
          <div
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 rounded transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              backgroundColor: underlineStyle.color,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Credibility quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { k: "Clients", v: "120+" },
            { k: "Countries", v: "10+" },
            { k: "Avg ROI", v: "3.2x" },
            { k: "CSAT", v: "96%" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-xl border bg-white/60 backdrop-blur px-4 py-3 text-center"
              style={{ borderColor: `${currentSolution.color}30` }}
            >
              <div className="text-2xl font-extrabold">{s.v}</div>
              <div className="text-sm text-gray-600 font-medium">{s.k}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const solutions = [
  {
    key: "BYBS",
    label: "Bring Your Business Story",
    img: "/assets/solutions/BYBS.png",
    description:
      "Empower your business with a narrative-driven approach. We help you craft and communicate your unique business story, ensuring your brand stands out in a crowded marketplace. Our team works closely with you to identify your core values, strengths, and differentiators, transforming them into a compelling story that resonates with your audience and builds lasting relationships. Experience a holistic branding journey that elevates your market presence and fosters trust.",
    benefits:
      "• Reduce operational costs by 30% and improve efficiency across all departments.\n• Strengthen brand loyalty and customer engagement.\n• Gain a competitive edge with a memorable brand presence.\n• Seamless integration with your existing workflow for minimal disruption.\n• Personalized storytelling strategies tailored to your business vision.",
    color: "#1BCDC5",
    path: "/solutions/bybs",
  },
  {
    key: "BYOS",
    label: "Build Your Own Solution",
    img: "/assets/solutions/BYOS.png",
    description:
      "Unlock the power of customization with our flexible platform. Whether you have unique requirements or specialized workflows, our BYOS offering enables you to design, develop, and deploy solutions tailored precisely to your business needs. Enjoy the freedom to innovate without limitations, supported by our expert guidance at every step. Accelerate your digital transformation with tools that adapt as your business evolves.",
    benefits:
      "• Full customization control with 40% faster deployment than traditional development approaches.\n• Scalable architecture to grow with your business.\n• Access to a library of pre-built modules and integrations.\n• Dedicated support and training for your team.\n• Rapid prototyping and deployment for faster go-to-market.",
    color: "#0B8FD6",
    path: "/solutions/byos",
  },
  {
    key: "BIBD",
    label: "Building Innovations & Business Disruptions",
    img: "/assets/solutions/BIBD.png",
    description:
      "Stay ahead of the curve with our innovation and disruption services. We transform your raw data into actionable insights using advanced analytics and AI-driven platforms. Our solutions empower you to make data-driven decisions, identify new opportunities, and adapt quickly to market changes, ensuring your business remains resilient and future-ready. Embrace innovation and turn disruption into your competitive advantage.",
    benefits:
      "• Real-time analytics dashboards show ROI impact, helping clients improve decision-making by 25%.\n• Harness AI and machine learning for predictive insights.\n• Accelerate digital transformation and innovation cycles.\n• Reduce risk and uncover hidden growth opportunities.\n• Continuous improvement through data-driven experimentation.",
    color: "#D6CE0B",
    path: "/solutions/bibd",
  },
  {
    key: "RYRO",
    label: "Re-Engineer Your Retail Organizations",
    img: "/assets/solutions/RYRO.png",
    description:
      "Revolutionize your retail operations with our end-to-end management solution. From inventory and sales to customer experience and omnichannel capabilities, we provide the tools you need to optimize every aspect of your retail business. Our platform is designed to drive growth, enhance efficiency, and deliver exceptional value to your customers. Stay agile and responsive in a rapidly changing retail landscape.",
    benefits:
      "• Our retail clients see an average 18% increase in sales after implementation.\n• Streamline inventory and supply chain management.\n• Enhance customer experience with personalized engagement tools.\n• Real-time reporting and analytics for smarter business decisions.\n• Omnichannel integration for seamless customer journeys.",
    color: "#0B8FD6",
    path: "/solutions/ryro",
  },
];

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

  const currentSolution = solutions[activeIndex];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Solutions</h2>
          <div
            className="h-1 w-24 mx-auto mt-3"
            style={{ backgroundColor: currentSolution.color }}
          ></div>
        </div>

        {/* Active Solution Display */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-1 mb-16">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 flex md:justify-start justify-center md:-ml-8">
            <div className="relative">
              <Image
                src={currentSolution.img}
                alt={currentSolution.label}
                width={360}
                height={360}
                className="object-contain"
                style={{ transform: "rotate(-90deg)" }}
              />
            </div>
          </div>
          {/* Right side - Content */}
          <div className="w-full md:w-3/5 flex flex-col justify-center">
            <h3
              className="text-4xl font-extrabold mb-2 tracking-tight"
              style={{ color: currentSolution.color }}
            >
              {currentSolution.label}
            </h3>
            <div
              className="h-1 w-24 mb-8"
              style={{ backgroundColor: currentSolution.color }}
            ></div>
            <p className="text-2xl text-gray-800 mb-8 leading-snug font-medium">
              {currentSolution.description.split(".")[0]}.
            </p>
            <div className="mb-10">
              <ul className="list-none pl-0 text-lg text-gray-600 space-y-2">
                <li>
                  <span
                    className="font-semibold"
                    style={{ color: currentSolution.color }}
                  >
                    {currentSolution.benefits
                      .split("\n")[0]
                      .replace(/^•\s?/, "")}
                  </span>
                </li>
              </ul>
            </div>
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
              Learn More
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
      </div>
    </section>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

// Rotating messages for mobile
const mobileMessages = [
  "Granulize your problem statements and requirements to identify the most matured one for solution designing",
  "Discover the journey from real-world complexity to strategic clarity — from Problem Situation to Problem Statement.",
  "Overlooked services. Unmatched value. Rediscover what matters. Services are curated to produce reusable support.",
  "From your vision to our innovation — together, we craft the Ultimate Solution.",
];

const Hero: React.FC = () => {
  // Mobile rotating text state
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    // Only run on mobile (window width < 768px)
    const isMobile = () =>
      typeof window !== "undefined" && window.innerWidth < 768;
    if (!isMobile()) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % mobileMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-start pt-24 md:pt-32 text-center min-h-[56vh] md:min-h-[80vh] mb-8 md:mb-16">
      {/* Side rails - large screens only */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent z-[1] hidden md:block">
        {/* Left rail */}
        <div className="absolute left-6 top-24 bottom-24 flex flex-col items-center gap-3">
          <div className="w-px h-full bg-gradient-to-b from-cyan-200/40 via-yellow-200/30 to-blue-300/40" />
          <div className="pointer-events-auto flex flex-col items-center gap-3 -mt-full">
            <div className="rounded-xl border border-cyan-200/30 bg-white/60 backdrop-blur-md shadow-sm p-2 h-14 w-14 flex items-center justify-center">
              <img
                src="/assets/solutions/BYOS.png"
                alt="BYOS"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="rounded-xl border border-yellow-300/30 bg-white/60 backdrop-blur-md shadow-sm p-2 h-14 w-14 flex items-center justify-center">
              <img
                src="/assets/solutions/BYBS.png"
                alt="BYBS"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="rounded-xl border border-cyan-200/30 bg-white/60 backdrop-blur-md shadow-sm p-2 h-14 w-14 flex items-center justify-center">
              <img
                src="/assets/solutions/BIBD.png"
                alt="BIBD"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="rounded-xl border border-blue-300/30 bg-white/60 backdrop-blur-md shadow-sm p-2 h-14 w-14 flex items-center justify-center">
              <img
                src="/assets/solutions/RYRO.png"
                alt="RYRO"
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right rail - perfectly aligned with left, same size */}
        <div className="absolute right-6 top-24 bottom-24 flex flex-col items-center gap-3">
          <div className="w-px h-full bg-gradient-to-b from-blue-300/40 via-cyan-200/30 to-yellow-200/40" />
          <div className="pointer-events-auto flex flex-col items-center gap-3 -mt-full">
            <div className="rounded-xl border border-blue-300/30 bg-white/60 backdrop-blur-md shadow-sm h-14 w-14 flex items-center justify-center p-2">
              <span className="text-xs font-medium text-gray-700">ERP</span>
            </div>
            <div className="rounded-xl border border-cyan-200/30 bg-white/60 backdrop-blur-md shadow-sm h-14 w-14 flex items-center justify-center p-2">
              <span className="text-xs font-medium text-gray-700">
                Consulting
              </span>
            </div>
            <div className="rounded-xl border border-yellow-300/30 bg-white/60 backdrop-blur-md shadow-sm h-14 w-14 flex items-center justify-center p-2">
              <span className="text-xs font-medium text-gray-700">Apps</span>
            </div>
            <div className="rounded-xl border border-cyan-200/30 bg-white/60 backdrop-blur-md shadow-sm h-14 w-14 flex items-center justify-center p-2">
              <span className="text-xs font-medium text-gray-700">
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile heading and rotating subheading */}
      <div className="block md:hidden w-full max-w-xl mx-auto z-10 pt-2 pb-4">
        <h1 className="text-[1.85rem] leading-tight font-extrabold text-foreground mb-2 tracking-tight">
          Welcome to Power Solutions
        </h1>
        {/* Styled "identify. implement.. intensify..." as a button */}
        <div className="flex justify-center mb-4">
          <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#0B8FD6] to-[#1BCDC5] text-white font-semibold text-base shadow-md">
            identify. implement.. intensify...
          </span>
        </div>
        {/* Image from public folder */}
        <div className="flex justify-center mb-3">
          <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#1BCDC5] w-48 h-48 flex items-center justify-center bg-white">
            <img
              src="/assets/solutions/BYOS.png"
              alt="Power Solutions"
              className="object-cover w-full h-full"
            />
            {/* Optional: Green accent swoosh (simple circle/ellipse) */}
            <div
              className="absolute -left-6 -bottom-6 w-32 h-16 rounded-full border-4 border-[#1BCDC5] opacity-70"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
        {/* Rotating message below image */}
        <div className="min-h-12 mt-2 flex items-center justify-center">
          <p
            className="text-[0.95rem] text-muted-foreground/90 px-1"
            aria-live="polite"
          >
            {mobileMessages[currentMessageIndex]}
          </p>
        </div>
      </div>

      {/* Gemini animation with custom positioning - hidden on mobile */}
      <div className="relative z-0 w-full flex justify-center -mt-2 md:-mt-8 hidden md:flex">
        <GoogleGeminiEffect className="w-full max-w-full md:max-w-[1440px] h-[300px] md:h-[500px] pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;

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

// Typing animation config for subheading
const typingText = [
  { text: "identify.", color: "#0B8FD6" },
  { text: " implement..", color: "#1BCDC5" },
  { text: " intensify...", color: "#0B8FD6" },
];
const TYPING_SPEED = 80; // ms per character
const PAUSE_BETWEEN = 600; // ms pause between words

const Hero: React.FC = () => {
  // Mobile rotating text state
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Typing animation state for subheading
  const [typed, setTyped] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  // Typing animation effect for subheading
  useEffect(() => {
    // Only run on mobile (window width < 768px)
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;

    let timeout: NodeJS.Timeout;

    if (typingIndex < typingText.length) {
      const currentWord = typingText[typingIndex].text;
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setTyped((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setTypingIndex((prev) => prev + 1);
          setCharIndex(0);
        }, PAUSE_BETWEEN);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingIndex, charIndex]);

  // Reset typing animation when finished (loop)
  useEffect(() => {
    if (typingIndex === typingText.length) {
      const resetTimeout = setTimeout(() => {
        setTyped("");
        setTypingIndex(0);
        setCharIndex(0);
      }, 1800);
      return () => clearTimeout(resetTimeout);
    }
  }, [typingIndex]);

  // Helper to colorize the typed text
  const getColoredTyped = () => {
    let colored: React.ReactNode[] = [];
    let count = 0;
    for (let i = 0; i < typingText.length; i++) {
      const word = typingText[i].text;
      const color = typingText[i].color;
      const end = Math.min(typed.length, count + word.length);
      if (end > count) {
        colored.push(
          <span key={i} style={{ color }}>
            {typed.slice(count, end)}
          </span>
        );
      }
      count += word.length;
    }
    return colored;
  };

  return (
    <section className="relative flex flex-col items-center justify-start pt-10 md:pt-32 text-center min-h-[56vh] md:min-h-[80vh]  md:mb-16">
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

     
      {/* Mobile heading and typing subheading */}
      <div className="block md:hidden w-full max-w-xl mx-auto z-10 px-4 pt-8 pb-8 h-[calc(100vh-5rem)] flex flex-col justify-between bg-white">
        <div className="flex-1 flex flex-col justify-center">
          {/* Top image with gradient glow */}
          <div className="flex justify-center mb-2 relative">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0B8FD6]/20 via-[#1BCDC5]/20 to-[#0B8FD6]/20 blur-2xl rounded-full" /> */}
            <img
              src="/cube.png"
              alt="Cube"
              className="w-56 h-56 rounded-2xl object-cover  relative z-10"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[2.7rem] leading-tight font-extrabold text-foreground mb-4 tracking-tight">
            Welcome to <span className="text-[#0B8FD6]">Power</span>{" "}
            <span className="text-[#1BCDC5]">Solutions</span>
          </h1>

          {/* Typing subheading */}
          <p className="text-sm font-semibold tracking-wide text-gray-800 mb-6 min-h-[1.5em] font-mono">
            {getColoredTyped()}
            <span className="animate-pulse">|</span>
          </p>

          {/* Rotating message with background */}
          <div className="min-h-24 mt-2 flex items-center justify-center">
            <div className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-5 border border-cyan-100/50 shadow-sm">
              <p
                className="text-[0.95rem] leading-relaxed text-gray-700 font-medium"
                aria-live="polite"
              >
                {mobileMessages[currentMessageIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center gap-3 pt-6 pb-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0B8FD6]/10 to-[#1BCDC5]/10 border border-cyan-200/30 flex items-center justify-center backdrop-blur-sm">
            <img
              src="/assets/solutions/BYOS.png"
              alt="BYOS"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-100/50 to-cyan-100/50 border border-yellow-300/30 flex items-center justify-center backdrop-blur-sm">
            <img
              src="/assets/solutions/BYBS.png"
              alt="BYBS"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1BCDC5]/10 to-blue-300/10 border border-cyan-200/30 flex items-center justify-center backdrop-blur-sm">
            <img
              src="/assets/solutions/BIBD.png"
              alt="BIBD"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-200/30 to-[#0B8FD6]/10 border border-blue-300/30 flex items-center justify-center backdrop-blur-sm">
            <img
              src="/assets/solutions/RYRO.png"
              alt="RYRO"
              className="h-8 w-8 object-contain"
            />
          </div>
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

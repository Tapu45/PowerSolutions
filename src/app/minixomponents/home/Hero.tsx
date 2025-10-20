"use client";
import React, { useEffect, useState } from "react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";
import { motion } from "framer-motion";

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
    <section className="relative flex flex-col items-center justify-start pt-10 md:pt-32 text-center min-h-[56vh] md:min-h-[80vh] md:mb-16">
  
      {/* Side rails - large screens only */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent z-[1] hidden md:block">
        {/* Left rail */}
        <div className="absolute left-6 top-24 bottom-24 flex flex-col items-center gap-4">
          <motion.div
            className="w-px h-full bg-gradient-to-b from-cyan-200/40 via-yellow-200/30 to-blue-300/40"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="pointer-events-auto flex flex-col items-center gap-4 -mt-full">
            <motion.div
              className="rounded-2xl border-2 border-cyan-200/40 bg-white/80 backdrop-blur-md shadow-lg p-3 h-16 w-16 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                borderColor: "rgba(6, 182, 212, 0.6)",
                rotate: [0, -5, 5, 0],
              }}
            >
              <motion.img
                src="/assets/solutions/BYOS.png"
                alt="BYOS"
                className="h-10 w-10 object-contain"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-yellow-300/40 bg-white/80 backdrop-blur-md shadow-lg p-3 h-16 w-16 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
                borderColor: "rgba(251, 191, 36, 0.6)",
                rotate: [0, -5, 5, 0],
              }}
            >
              <motion.img
                src="/assets/solutions/BYBS.png"
                alt="BYBS"
                className="h-10 w-10 object-contain"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-cyan-200/40 bg-white/80 backdrop-blur-md shadow-lg p-3 h-16 w-16 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                borderColor: "rgba(6, 182, 212, 0.6)",
                rotate: [0, -5, 5, 0],
              }}
            >
              <motion.img
                src="/assets/solutions/BIBD.png"
                alt="BIBD"
                className="h-10 w-10 object-contain"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-blue-300/40 bg-white/80 backdrop-blur-md shadow-lg p-3 h-16 w-16 flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                borderColor: "rgba(59, 130, 246, 0.6)",
                rotate: [0, -5, 5, 0],
              }}
            >
              <motion.img
                src="/assets/solutions/RYRO.png"
                alt="RYRO"
                className="h-10 w-10 object-contain"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right rail - perfectly aligned with left, same size */}
        <div className="absolute right-6 top-24 bottom-24 flex flex-col items-center gap-4">
          <motion.div
            className="w-px h-full bg-gradient-to-b from-blue-300/40 via-cyan-200/30 to-yellow-200/40"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="pointer-events-auto flex flex-col items-center gap-4 -mt-full">
            <motion.div
              className="rounded-2xl border-2 border-blue-300/40 bg-white/80 backdrop-blur-md shadow-lg h-16 w-16 flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
                borderColor: "rgba(59, 130, 246, 0.6)",
                rotate: [0, 5, -5, 0],
              }}
            >
              <motion.span
                className="text-xs font-bold text-gray-700"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ERP
              </motion.span>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-cyan-200/40 bg-white/80 backdrop-blur-md shadow-lg h-16 w-16 flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                borderColor: "rgba(6, 182, 212, 0.6)",
                rotate: [0, 5, -5, 0],
              }}
            >
              <motion.span
                className="text-xs font-bold text-gray-700"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Consulting
              </motion.span>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-yellow-300/40 bg-white/80 backdrop-blur-md shadow-lg h-16 w-16 flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
                borderColor: "rgba(251, 191, 36, 0.6)",
                rotate: [0, 5, -5, 0],
              }}
            >
              <motion.span
                className="text-xs font-bold text-gray-700"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Apps
              </motion.span>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-cyan-200/40 bg-white/80 backdrop-blur-md shadow-lg h-16 w-16 flex items-center justify-center p-3 hover:scale-110 transition-all duration-300 hover:shadow-xl"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                borderColor: "rgba(6, 182, 212, 0.6)",
                rotate: [0, 5, -5, 0],
              }}
            >
              <motion.span
                className="text-xs font-bold text-gray-700"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                Innovation
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile heading and typing subheading */}
      <div className="block md:hidden w-full max-w-xl mx-auto z-10 px-4 pt-8 pb-8 h-[calc(100vh-5rem)] flex flex-col justify-between bg-white">
        <div className="flex-1 flex flex-col justify-center">
          {/* Top image with gradient glow */}
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B8FD6]/20 via-[#1BCDC5]/20 to-[#0B8FD6]/20 blur-2xl rounded-full" />
            <motion.img
              src="/cube.png"
              alt="Cube"
              className="w-56 h-56 rounded-2xl object-cover relative z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Heading */}
          <motion.h1
            className="text-[2.7rem] leading-tight font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="text-[#0B8FD6]">Power</span>{" "}
            <span className="text-[#1BCDC5]">Solutions</span>
          </motion.h1>

          {/* Typing subheading */}
          <motion.p
            className="text-sm font-semibold tracking-wide text-gray-800 mb-6 min-h-[1.5em] font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {getColoredTyped()}
            <span className="animate-pulse">|</span>
          </motion.p>

          {/* Rotating message with background */}
          <motion.div
            className="min-h-24 mt-2 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-5 border border-cyan-100/50 shadow-lg">
              <p
                className="text-[0.95rem] leading-relaxed text-gray-700 font-medium"
                aria-live="polite"
              >
                {mobileMessages[currentMessageIndex]}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          className="flex justify-center gap-3 pt-6 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0B8FD6]/10 to-[#1BCDC5]/10 border border-cyan-200/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
          >
            <img
              src="/assets/solutions/BYOS.png"
              alt="BYOS"
              className="h-8 w-8 object-contain"
            />
          </motion.div>
          <motion.div
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-100/50 to-cyan-100/50 border border-yellow-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)" }}
          >
            <img
              src="/assets/solutions/BYBS.png"
              alt="BYBS"
              className="h-8 w-8 object-contain"
            />
          </motion.div>
          <motion.div
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1BCDC5]/10 to-blue-300/10 border border-cyan-200/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
          >
            <img
              src="/assets/solutions/BIBD.png"
              alt="BIBD"
              className="h-8 w-8 object-contain"
            />
          </motion.div>
          <motion.div
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-200/30 to-[#0B8FD6]/10 border border-blue-300/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-all duration-300"
            whileHover={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          >
            <img
              src="/assets/solutions/RYRO.png"
              alt="RYRO"
              className="h-8 w-8 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Gemini animation with custom positioning - hidden on mobile */}
      <div className="relative z-0 w-full flex justify-center -mt-2 md:-mt-8 hidden md:flex">
        <GoogleGeminiEffect
          className="w-full max-w-full md:max-w-[1440px] h-[300px] md:h-[500px] pointer-events-none"
          title="Welcome to Power Solutions"
        />
      </div>
    </section>
  );
};

export default Hero;

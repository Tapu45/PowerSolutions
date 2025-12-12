"use client";
import React, { useEffect, useState, useRef } from "react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";
import { GoogleGeminiEffectMobile } from "@/components/animation/mobile-gemini";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// Rotating messages for mobile
const mobileMessages = [
  "Granulize your problem statements and requirements to identify the most matured one for solution designing",
  "Discover the journey from real-world complexity to strategic clarity — from Problem Situation to Problem Statement.",
  "Overlooked services. Unmatched value. Rediscover what matters. Services are curated to produce reusable support.",
  "From your vision to our innovation — together, we craft the Ultimate Solution.",
];

// Typing animation config
const typingText = [
  { text: "identify.", color: "#0B8FD6" },
  { text: " implement..", color: "#1BCDC5" },
  { text: " intensify...", color: "#D6CE0B" },
];
const TYPING_SPEED = 70;
const PAUSE_BETWEEN = 500;

// Magnetic button component
const MagneticButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated gradient border card
const GlowCard = ({
  children,
  className,
  borderColor = "#1BCDC5",
  delay = 0,
  direction = "left",
}: {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  delay?: number;
  direction?: "left" | "right";
}) => (
  <motion.div
    className={`relative rounded-2xl overflow-hidden ${className}`}
    initial={{ x: direction === "left" ? -200 : 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
  >
    {/* Animated border gradient */}
    <motion.div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${borderColor}40, transparent, ${borderColor}40)`,
        padding: "2px",
      }}
      animate={{
        background: [
          `linear-gradient(0deg, ${borderColor}40, transparent, ${borderColor}40)`,
          `linear-gradient(180deg, ${borderColor}40, transparent, ${borderColor}40)`,
          `linear-gradient(360deg, ${borderColor}40, transparent, ${borderColor}40)`,
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    {/* Inner content */}
    <div className="relative bg-white/90 dark:bg-black/80 backdrop-blur-xl rounded-2xl m-[2px] h-full">
      {children}
    </div>
  </motion.div>
);

// Floating particle component
const FloatingParticle = ({
  delay,
  x,
  y,
  size,
  color,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  color: string;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color}60, transparent)`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, -15, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Grid background component
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(#0B8FD6 1px, transparent 1px),
          linear-gradient(90deg, #0B8FD6 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-black/50 to-white dark:to-black" />
  </div>
);

// Solution icons data
const leftSolutions = [
  { src: "/assets/solutions/BYOS.png", alt: "BYOS", color: "#1BCDC5" },
  { src: "/assets/solutions/BYBS.png", alt: "BYBS", color: "#D6CE0B" },
  { src: "/assets/solutions/BIBD.png", alt: "BIBD", color: "#0B8FD6" },
  { src: "/assets/solutions/RYRO.png", alt: "RYRO", color: "#1BCDC5" },
];

const rightServices = [
  { label: "ERP", color: "#0B8FD6" },
  { label: "Consulting", color: "#1BCDC5" },
  { label: "Apps", color: "#D6CE0B" },
  { label: "Innovation", color: "#0B8FD6" },
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Mobile states
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile message rotation
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % mobileMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Typing animation for mobile
  useEffect(() => {
    if (!isMobile) return;
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
  }, [typingIndex, charIndex, isMobile]);

  // Reset typing animation
  useEffect(() => {
    if (typingIndex === typingText.length) {
      const resetTimeout = setTimeout(() => {
        setTyped("");
        setTypingIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [typingIndex]);

  // Helper to colorize typed text
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
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-start pt-16 md:pt-24 text-center min-h-[60vh] md:min-h-[90vh] overflow-hidden"
    >
      {/* Grid background */}
      <GridBackground />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} x="10%" y="20%" size={8} color="#1BCDC5" />
        <FloatingParticle delay={1} x="85%" y="30%" size={6} color="#D6CE0B" />
        <FloatingParticle delay={2} x="20%" y="60%" size={10} color="#0B8FD6" />
        <FloatingParticle delay={3} x="75%" y="70%" size={7} color="#1BCDC5" />
        <FloatingParticle delay={4} x="50%" y="40%" size={5} color="#D6CE0B" />
        <FloatingParticle delay={5} x="30%" y="80%" size={9} color="#0B8FD6" />
      </div>

      {/* Side rails - Desktop only */}
      <div className="hidden lg:block">
        {/* Left gradient line */}
        <motion.div
          className="absolute left-8 top-32 bottom-32 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, #1BCDC540, #D6CE0B40, #0B8FD640, transparent)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Left solution cards */}
        <div className="absolute left-4 xl:left-8 top-36 flex flex-col items-center gap-4 z-20">
          {leftSolutions.map((solution, index) => (
            <MagneticButton key={solution.alt}>
              <GlowCard
                borderColor={solution.color}
                delay={0.2 + index * 0.15}
                direction="left"
                className="h-16 w-16 xl:h-18 xl:w-18"
              >
                <div className="h-full w-full flex items-center justify-center p-3">
                  <motion.img
                    src={solution.src}
                    alt={solution.alt}
                    className="h-full w-full object-contain"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </GlowCard>
            </MagneticButton>
          ))}

          {/* Decorative dots */}
          <motion.div
            className="flex flex-col gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: ["#1BCDC5", "#D6CE0B", "#0B8FD6"][i] }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Right gradient line */}
        <motion.div
          className="absolute right-8 top-32 bottom-32 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, #0B8FD640, #1BCDC540, #D6CE0B40, transparent)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Right service cards */}
        <div className="absolute right-4 xl:right-8 top-36 flex flex-col items-center gap-4 z-20">
          {rightServices.map((service, index) => (
            <MagneticButton key={service.label}>
              <GlowCard
                borderColor={service.color}
                delay={0.2 + index * 0.15}
                direction="right"
                className="h-16 w-16 xl:h-18 xl:w-18"
              >
                <div className="h-full w-full flex items-center justify-center p-2">
                  <motion.span
                    className="text-[10px] xl:text-xs font-bold text-gray-700 dark:text-gray-200 text-center leading-tight"
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {service.label}
                  </motion.span>
                </div>
              </GlowCard>
            </MagneticButton>
          ))}

          {/* Decorative dots */}
          <motion.div
            className="flex flex-col gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: ["#0B8FD6", "#1BCDC5", "#D6CE0B"][i] }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile side indicators */}
      <div className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-8 rounded-full"
            style={{
              background: `linear-gradient(180deg, ${
                ["#1BCDC5", "#D6CE0B", "#0B8FD6", "#1BCDC5"][i]
              }60, transparent)`,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}
      </div>
      <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-8 rounded-full"
            style={{
              background: `linear-gradient(180deg, ${
                ["#0B8FD6", "#1BCDC5", "#D6CE0B", "#0B8FD6"][i]
              }60, transparent)`,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          />
        ))}
      </div>

      {/* Main content with parallax */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y, opacity, scale }}
      >
        {/* Desktop Gemini animation */}
        <div className="hidden md:flex relative w-full justify-center -mt-4">
          <GoogleGeminiEffect
            className="w-full max-w-[1440px] h-[520px] lg:h-[580px] pointer-events-none"
            title="Welcome to Power Solutions"
          />
        </div>

        {/* Mobile Gemini animation */}
        <div className="block md:hidden relative w-full">
          <GoogleGeminiEffectMobile className="min-h-[380px]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

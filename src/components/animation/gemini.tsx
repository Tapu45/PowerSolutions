"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import React, { useState, useEffect, useRef, useCallback } from "react";

// Particle component for path endpoints
const Particle = ({
  x,
  y,
  color,
  delay = 0,
}: {
  x: number;
  y: number;
  color: string;
  delay?: number;
}) => (
  <motion.circle
    cx={x}
    cy={y}
    r="3"
    fill={color}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.5, 1],
      opacity: [0, 1, 0.6],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  />
);

// Glowing orb component
const GlowingOrb = ({
  color,
  size,
  x,
  y,
  delay,
}: {
  color: string;
  size: number;
  x: string;
  y: string;
  delay: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
      filter: "blur(20px)",
    }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 20, -10, 0],
      y: [0, -15, 10, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Floating geometric shapes
const FloatingShape = ({
  type,
  color,
  size,
  x,
  y,
  delay,
}: {
  type: "circle" | "diamond" | "ring";
  color: string;
  size: number;
  x: string;
  y: string;
  delay: number;
}) => {
  const shapeStyles: Record<string, React.CSSProperties> = {
    circle: {
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${color}30, ${color}10)`,
      border: `1px solid ${color}40`,
    },
    diamond: {
      transform: "rotate(45deg)",
      background: `linear-gradient(135deg, ${color}20, transparent)`,
      border: `1px solid ${color}30`,
    },
    ring: {
      borderRadius: "50%",
      background: "transparent",
      border: `2px solid ${color}30`,
    },
  };

  return (
    <motion.div
      className="absolute pointer-events-none backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        ...shapeStyles[type],
      }}
      initial={{ scale: 0, opacity: 0, rotate: type === "diamond" ? 45 : 0 }}
      animate={{
        scale: [0.9, 1.1, 0.9],
        opacity: [0.4, 0.7, 0.4],
        rotate: type === "diamond" ? [45, 90, 45] : [0, 180, 360],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Aurora wave effect
const AuroraWave = ({ colors }: { colors: string[] }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden opacity-30"
    style={{
      background: `linear-gradient(180deg, transparent 0%, ${colors[0]}10 30%, ${colors[1]}15 50%, ${colors[2]}10 70%, transparent 100%)`,
    }}
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

export const GoogleGeminiEffect = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Word sets for cycling animation
  const wordSets = [
    {
      input: [
        "Complexity",
        "Challenges",
        "Requirements",
        "Problems",
        "Ambiguity",
      ],
      output: ["Clarity", "Solutions", "Innovation", "Strategy", "Excellence"],
      colors: ["#1BCDC5", "#D6CE0B", "#0B8FD6", "#D6CE0B", "#1BCDC5"],
    },
    {
      input: [
        "Consulting",
        "Development",
        "Transformation",
        "Support",
        "Analysis",
      ],
      output: ["Strategy", "Solutions", "Growth", "Success", "Insights"],
      colors: ["#0B8FD6", "#1BCDC5", "#D6CE0B", "#8B2121", "#0B8FD6"],
    },
    {
      input: ["BYOS", "BYBS", "BIBD", "RYRO", "Innovation"],
      output: ["Custom", "Story", "Disruption", "Retail", "Future"],
      colors: ["#0B8FD6", "#1BCDC5", "#D6CE0B", "#0B8FD6", "#8B2121"],
    },
    {
      input: ["Process", "Data", "Technology", "People", "Vision"],
      output: ["Efficiency", "Insights", "Innovation", "Growth", "Reality"],
      colors: ["#1BCDC5", "#D6CE0B", "#0B8FD6", "#8B2121", "#1BCDC5"],
    },
    {
      input: [
        "Planning",
        "Implementation",
        "Optimization",
        "Scaling",
        "Excellence",
      ],
      output: ["Success", "Delivery", "Performance", "Growth", "Achievement"],
      colors: ["#D6CE0B", "#0B8FD6", "#1BCDC5", "#8B2121", "#D6CE0B"],
    },
  ];

  // Rotating messages
  const messages = [
    "Granulize your problem statements and requirements to identify the most matured one for solution designing",
    "Discover the journey from real-world complexity to strategic clarity — from Problem Situation to Problem Statement.",
    "Overlooked services. Unmatched value. Rediscover what matters. Services are curated to produce reusable support.",
    "From your vision to our innovation — together, we craft the Ultimate Solution.",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentWordSetIndex, setCurrentWordSetIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse move handler for parallax effect
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) * 0.02);
      mouseY.set((e.clientY - centerY) * 0.02);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotate through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Rotate through word sets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordSetIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const currentSet = wordSets[currentWordSetIndex];
  const pathIds = ["path1", "path2", "path3", "path4", "path5"];

  // Path animation variants
  // Replace your pathVariants with:
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: [0, 1, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        pathLength: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" as any,
        },
        opacity: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" as any,
        },
      },
    },
  };

  const pathData = [
    "M-200 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1640 662.5",
    "M-200 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1640 588",
    "M-200 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1640 513.235",
    "M-200 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1639.5 439",
    "M-200.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1639 364",
  ];

  const strokeColors = ["#1BCDC5", "#D6CE0B", "#0B8FD6", "#D6CE0B", "#1BCDC5"];

  return (
    <div
      ref={containerRef}
      className={cn("sticky top-80 gemini-bg-fix overflow-hidden", className)}
    >
      {/* Aurora background effect */}
      <AuroraWave colors={["#1BCDC5", "#0B8FD6", "#D6CE0B"]} />

      {/* Floating orbs */}
      <GlowingOrb color="#1BCDC5" size={200} x="10%" y="20%" delay={0} />
      <GlowingOrb color="#D6CE0B" size={150} x="80%" y="30%" delay={2} />
      <GlowingOrb color="#0B8FD6" size={180} x="60%" y="60%" delay={4} />
      <GlowingOrb color="#1BCDC5" size={120} x="25%" y="70%" delay={6} />

      {/* Floating geometric shapes */}
      <div className="hidden md:block">
        <FloatingShape
          type="circle"
          color="#1BCDC5"
          size={40}
          x="5%"
          y="25%"
          delay={0}
        />
        <FloatingShape
          type="diamond"
          color="#D6CE0B"
          size={30}
          x="90%"
          y="35%"
          delay={1}
        />
        <FloatingShape
          type="ring"
          color="#0B8FD6"
          size={50}
          x="85%"
          y="65%"
          delay={2}
        />
        <FloatingShape
          type="circle"
          color="#D6CE0B"
          size={25}
          x="15%"
          y="75%"
          delay={3}
        />
        <FloatingShape
          type="diamond"
          color="#1BCDC5"
          size={35}
          x="75%"
          y="20%"
          delay={4}
        />
        <FloatingShape
          type="ring"
          color="#D6CE0B"
          size={45}
          x="20%"
          y="45%"
          delay={5}
        />
      </div>

      {/* Mobile floating shapes - smaller and fewer */}
      <div className="block md:hidden">
        <FloatingShape
          type="circle"
          color="#1BCDC5"
          size={25}
          x="5%"
          y="15%"
          delay={0}
        />
        <FloatingShape
          type="diamond"
          color="#D6CE0B"
          size={20}
          x="90%"
          y="25%"
          delay={1}
        />
        <FloatingShape
          type="ring"
          color="#0B8FD6"
          size={30}
          x="85%"
          y="75%"
          delay={2}
        />
      </div>

      {/* Decorative bottom glow */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[300px] md:w-[500px] h-[60px] md:h-[100px] rounded-full z-0"
        style={{
          background: "linear-gradient(90deg, #1BCDC520, #0B8FD630, #D6CE0B20)",
          filter: "blur(40px)",
        }}
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main heading content with parallax */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center py-4 md:py-7"
        style={{ x, y }}
      >
        {/* Premium badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(11,143,214,0.1), rgba(27,205,197,0.1))",
            border: "1px solid rgba(27,205,197,0.3)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-[#1BCDC5]"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Main headline with gradient animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-block"
            style={{ color: "#1BCDC5" }}
            animate={{
              textShadow: [
                "0 0 0px #1BCDC500",
                "0 0 30px #1BCDC540",
                "0 0 0px #1BCDC500",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Even there is{" "}
          </motion.span>
          <motion.span
            className="inline-block"
            style={{ color: "#0B8FD6" }}
            animate={{
              textShadow: [
                "0 0 0px #0B8FD600",
                "0 0 30px #0B8FD640",
                "0 0 0px #0B8FD600",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Need for a{" "}
          </motion.span>
          <motion.span
            className="inline-block relative"
            style={{ color: "#D6CE0B" }}
            animate={{
              textShadow: [
                "0 0 0px #D6CE0B00",
                "0 0 40px #D6CE0B50",
                "0 0 0px #D6CE0B00",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            solution
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #D6CE0B, #1BCDC5)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.2,
                delay: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          </motion.span>
        </motion.h1>

        {/* Rotating message with enhanced animation */}
        <motion.div
          className="min-h-16 md:min-h-24 flex items-center justify-center relative px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium max-w-3xl leading-relaxed"
          >
            {messages[currentMessageIndex].split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 15, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.03 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Animated accent line */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #1BCDC5, #0B8FD6, transparent)",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SVG Animation Container */}
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-20 md:-top-10 w-full pointer-events-none"
        style={{ minHeight: "300px" }}
      >
        <defs>
          {/* Gradient definitions for paths */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1BCDC5" stopOpacity="0" />
            <stop offset="50%" stopColor="#1BCDC5" stopOpacity="1" />
            <stop offset="100%" stopColor="#1BCDC5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D6CE0B" stopOpacity="0" />
            <stop offset="50%" stopColor="#D6CE0B" stopOpacity="1" />
            <stop offset="100%" stopColor="#D6CE0B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B8FD6" stopOpacity="0" />
            <stop offset="50%" stopColor="#0B8FD6" stopOpacity="1" />
            <stop offset="100%" stopColor="#0B8FD6" stopOpacity="0" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>

          {/* Path definitions */}
          {pathIds.map((id, index) => (
            <path key={id} id={id} d={pathData[index]} />
          ))}
        </defs>

        {/* Background blur paths */}
        {pathData.map((d, index) => (
          <path
            key={`blur-${index}`}
            d={d}
            stroke={strokeColors[index]}
            strokeWidth="4"
            fill="none"
            opacity="0.15"
            filter="url(#blurMe)"
          />
        ))}

        {/* Main animated paths with glow */}
        {pathData.map((d, index) => (
          <motion.path
            key={`main-${index}`}
            d={d}
            stroke={strokeColors[index]}
            strokeWidth="2.5"
            fill="none"
            filter="url(#glow1)"
            initial="hidden"
            animate="visible"
            custom={index}
            variants={pathVariants}
          />
        ))}

        {/* Secondary glow layer */}
        {pathData.map((d, index) => (
          <motion.path
            key={`glow-${index}`}
            d={d}
            stroke={strokeColors[index]}
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            filter="url(#glow2)"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}

        {/* Animated text along paths - Input words */}
        {currentSet.input.map((word, index) => (
          <motion.text
            key={`input-${currentWordSetIndex}-${index}`}
            fontSize="14"
            fontWeight="800"
            fill={currentSet.colors[index]}
            opacity="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{
              duration: 10,
              delay: index * 0.2,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
          >
            <textPath href={`#${pathIds[index]}`} startOffset="0%">
              <animate
                attributeName="startOffset"
                from="0%"
                to="50%"
                dur="10s"
                repeatCount="indefinite"
              />
              {word}
            </textPath>
          </motion.text>
        ))}

        {/* Animated text along paths - Output words */}
        {currentSet.output.map((word, index) => (
          <motion.text
            key={`output-${currentWordSetIndex}-${index}`}
            fontSize="14"
            fontWeight="800"
            fill={currentSet.colors[index]}
            opacity="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.9, 0.9, 0] }}
            transition={{
              duration: 20,
              delay: 5 + index * 0.2,
              repeat: Infinity,
            }}
            style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
          >
            <textPath href={`#${pathIds[index]}`} startOffset="50%">
              <animate
                attributeName="startOffset"
                from="50%"
                to="100%"
                dur="10s"
                repeatCount="indefinite"
                begin="5s"
              />
              {word}
            </textPath>
          </motion.text>
        ))}

        {/* Particle effects at path intersections */}
        <Particle x={720} y={510} color="#1BCDC5" delay={0} />
        <Particle x={720} y={510} color="#D6CE0B" delay={2} />
        <Particle x={720} y={510} color="#0B8FD6" delay={4} />
      </svg>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

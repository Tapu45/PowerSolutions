"use client";
import { cn } from "@/lib/utils";
import { easeInOut, motion } from "motion/react";
import React, { useState, useEffect } from "react";

// Simple floating dot SVG
const FloatingDot = ({ style }: { style: React.CSSProperties }) => (
  <span
    className="absolute rounded-full bg-cyan-200 opacity-30 blur-lg animate-float"
    style={style}
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
  // Word sets for cycling animation
  const wordSets = [
    // Set 1: Problem-focused words
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
    // Set 2: Service-focused words
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
    // Set 3: Solution-focused words
    {
      input: ["BYOS", "BYBS", "BIBD", "RYRO", "Innovation"],
      output: ["Custom", "Story", "Disruption", "Retail", "Future"],
      colors: ["#0B8FD6", "#1BCDC5", "#D6CE0B", "#0B8FD6", "#8B2121"],
    },
    // Set 4: Business-focused words
    {
      input: ["Process", "Data", "Technology", "People", "Vision"],
      output: ["Efficiency", "Insights", "Innovation", "Growth", "Reality"],
      colors: ["#1BCDC5", "#D6CE0B", "#0B8FD6", "#8B2121", "#1BCDC5"],
    },
    // Set 5: Outcome-focused words
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

  // Rotate through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Rotate through word sets - cycle every 20 seconds (matching animation duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordSetIndex((prevIndex) => (prevIndex + 1) % wordSets.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Synchronized animation configuration
  const animationConfig = {
    pathLength: [0, 1, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  // Generate floating dots for background
  const dots = Array.from({ length: 14 }, (_, i) => ({
    left: `${Math.random() * 90}%`,
    top: `${10 + Math.random() * 70}%`,
    width: 16 + Math.random() * 16,
    height: 16 + Math.random() * 16,
    delay: `${Math.random() * 8}s`,
    key: i,
  }));

  const currentSet = wordSets[currentWordSetIndex];
  const pathIds = ["path1", "path2", "path3", "path4", "path5"];

  return (
    <div className={cn("sticky top-80 gemini-bg-fix", className)}>
      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dots.map((dot) => (
          <FloatingDot
            key={dot.key}
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.width,
              height: dot.height,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[400px] h-[80px] bg-cyan-200/30 blur-2xl rounded-full z-0" />

      {/* Heading and subheading content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-7">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-3 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            textShadow: [
              `0 0 0px #0B8FD6`,
              `0 0 30px #0B8FD630`,
              `0 0 0px #0B8FD6`,
            ],
          }}
        >
          <span style={{ color: "#1BCDC5" }}>Even there is </span>
          <span style={{ color: "#0B8FD6" }}>Need for a </span>
          <span style={{ color: "#D6CE0B" }}>solution</span>
        </motion.h1>

        {/* smoother rotation with exit/enter */}
        <motion.div
          key={`wrapper-${currentMessageIndex}`}
          className="min-h-20 flex items-center justify-center relative"
        >
          <motion.p
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 px-2 font-medium relative"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.05)",
            }}
            aria-live="polite"
          >
            <span className="relative inline-block">
              {messages[currentMessageIndex].split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05 * i,
                    ease: "easeOut",
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.p>

          {/* Subtle gradient accent line below text */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          />
        </motion.div>
      </div>

      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-30 md:-top-10 w-full"
      >
        <defs>
          {/* Define paths for text animation */}
          <path
            id="path1"
            d="M-200 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1640 662.5"
          />

          <path
            id="path2"
            d="M-200 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1640 588"
          />

          <path
            id="path3"
            d="M-200 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1640 513.235"
          />

          <path
            id="path4"
            d="M-200 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1639.5 439"
          />

          <path
            id="path5"
            d="M-200.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1639 364"
          />
        </defs>

        {/* LEFT SIDE - Input words (Problems/Requirements) - All start at 0%, travel to 50% */}
        {currentSet.input.map((word, index) => (
          <motion.text
            key={`input-${currentWordSetIndex}-${index}`}
            fontSize="15"
            fontWeight="700"
            fill={currentSet.colors[index]}
            opacity="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
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

        {/* RIGHT SIDE - Output words (Solutions) - Hidden until inputs reach 50%, then travel to 100% */}
        {currentSet.output.map((word, index) => (
          <motion.text
            key={`output-${currentWordSetIndex}-${index}`}
            fontSize="15"
            fontWeight="700"
            fill={currentSet.colors[index]}
            opacity="0.8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 5.5 + index * 0.1 }}
          >
            <textPath href={`#${pathIds[index]}`} startOffset="50%">
              <animate
                attributeName="startOffset"
                from="50%"
                to="100%"
                dur="10s"
                repeatCount="indefinite"
                begin="10s"
              />
              {word}
            </textPath>
          </motion.text>
        ))}

        {/* Main animated paths */}
        <motion.path
          d="M-200 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1640 662.5"
          stroke="#1BCDC5"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animationConfig}
        />
        <motion.path
          d="M-200 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1640 588"
          stroke="#D6CE0B"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animationConfig}
        />
        <motion.path
          d="M-200 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1640 513.235"
          stroke="#0B8FD6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animationConfig}
        />
        <motion.path
          d="M-200 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1639.5 439"
          stroke="#D6CE0B"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animationConfig}
        />
        <motion.path
          d="M-200.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1639 364"
          stroke="#1BCDC5"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animationConfig}
        />

        {/* Gaussian blur for the background paths */}

        <path
          d="M-200 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1640 662.5"
          stroke="#1BCDC5"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
          stroke="#D6CE0B"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#0B8FD6"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
          stroke="#D6CE0B"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364"
          stroke="#1BCDC5"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
      </svg>

      {/* Floating animation keyframes */}
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0px);}
          50% { transform: translateY(-30px);}
          100% { transform: translateY(0px);}
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

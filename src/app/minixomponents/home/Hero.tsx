"use client";
import React from "react";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

const Hero: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      className="relative flex flex-col items-center justify-start bg-background pt-32 text-center"
      style={{
        minHeight: "90vh",
      }}
      ref={ref}
    >
     

      {/* Gemini animation with custom positioning */}
      <div className="relative z-0 w-full flex justify-center -mt-8">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="w-full max-w-[1440px] h-[400px] pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React from "react";
import Prism from "@/components/animation/Threads";// Import Prism from Threads.tsx

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-background pt-20 text-center"
      style={{
        height: "100vh",
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Prism
          animationType="hover"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Welcome to Power Solutions
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Innovating the future with granular problem-solving and transformative
          insights.
        </p>
      </div>
    </section>
  );
};

export default Hero;

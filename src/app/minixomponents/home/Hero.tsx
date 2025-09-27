"use client";
import React from "react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start  pt-32 text-center"
      style={{
        minHeight: "90vh",
        // Add margin-bottom to create space for the animation to fully render
        marginBottom: "10rem",
      }}
    >
      {/* Gemini animation with custom positioning */}
      <div className="relative z-0 w-full flex justify-center -mt-8">
        <GoogleGeminiEffect
          className="w-full max-w-[1440px] h-[500px] pointer-events-none"
          // Increased height to accommodate full animation
        />
      </div>
    </section>
  );
};

export default Hero;

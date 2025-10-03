"use client";
import React from "react";
import { GoogleGeminiEffect } from "@/components/animation/gemini";

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start pt-32 text-center"
      style={{
        minHeight: "90vh",
        marginBottom: "10rem",
      }}
    >
      {/* Side rails - large screens only */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent z-[1]">
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

      {/* Gemini animation with custom positioning */}
      <div className="relative z-0 w-full flex justify-center -mt-8">
        <GoogleGeminiEffect className="w-full max-w-[1440px] h-[500px] pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;

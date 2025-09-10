"use client";

import React from "react";

const NAVBAR_HEIGHT = "5rem"; // h-20 in Tailwind

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-background pt-20"
      style={{
        height: "100vh",
      }}
    >
      <video
        src="/Contact-Us.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default Hero;

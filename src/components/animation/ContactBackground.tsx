"use client";

import React from "react";

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* White base */}
      <div className="absolute inset-0 bg-white" />

      {/* SVG triangle/diamond pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.1 }}
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="trianglePattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Top triangle */}
            <polygon points="20,0 40,40 0,40" fill="#1BCDC5" />
            {/* Bottom triangle */}
            <polygon points="20,40 40,0 0,0" fill="#D6CE0B" opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#trianglePattern)" />
      </svg>

      {/* Gradient mask overlay for fade-out effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 80%, #fff 100%)",
        }}
      />
    </div>
  );
};

export default ContactBackground;

"use client";

import React from "react";
import RollingGallery from "@/components/animation/RollingGallery";

const Services: React.FC = () => {
  return (
    <section className="py-56 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-1 text-center">
          Our Services
        </h2>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
};

export default Services;

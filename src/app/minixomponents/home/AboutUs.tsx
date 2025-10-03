"use client";

import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-40 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0B8FD6] to-blue-400 rounded-full"></span>
          </h2>
        </div>

        {/* Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="relative space-y-8">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#0B8FD6] to-blue-400 rounded-full"></div>

            <p className="pl-6 text-lg text-gray-700 leading-relaxed">
              At{" "}
              <span className="font-bold text-[#0B8FD6]">
                [solutions]<sup>ⁿ</sup>
              </span>
              , we don’t just create solutions—we craft transformative
              experiences that are built to last and grow with you. Founded by a
              team of visionary thinkers with decades of expertise, we
              recognized early on that true solutions must be sustainable,
              scalable, and relentlessly forward-looking.
            </p>

            <p className="pl-6 text-lg text-gray-700 leading-relaxed">
              We believe every complex challenge deserves a layered response—a
              carefully designed composition of targeted solutions that address
              every detail and nuance. Our groundbreaking{" "}
              <span className="font-semibold text-[#0B8FD6]">3i approach</span>
              —Identify- Implement- Intensify—ensures that solutions not only
              solve problems but evolve continuously to exceed expectations and
              adapt to changing realities.
            </p>

            <p className="pl-6 text-lg text-gray-700 leading-relaxed">
              Too often, problem statements are incomplete or biased, leading to
              short-lived fixes or even new issues. That’s where{" "}
              <span className="font-bold text-[#0B8FD6]">
                [solutions]<sup>ⁿ</sup>
              </span>{" "}
              steps in: pioneering innovation, setting new benchmarks, and
              turning challenges into opportunities for lasting impact and
              wow-worthy customer satisfaction.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-100 via-transparent to-cyan-100 rounded-3xl blur-2xl"></div>
            <Image
              src="/about.png"
              alt="About [solutions]ⁿ"
              width={600}
              height={450}
              className="relative rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

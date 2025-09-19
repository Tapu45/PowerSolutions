"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with improved spacing */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-block relative">
            About Us
            <span
              className="block h-1.5 w-full mt-3"
              style={{ backgroundColor: "#0B8FD6" }}
            ></span>
          </h2>
        </div>

        {/* Content and Image Container with improved alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content with better spacing and formatting */}
          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Power Solutions is a{" "}
              <span style={{ color: "#0B8FD6" }} className="font-semibold">
                technology innovation partner
              </span>{" "}
              dedicated to transforming business challenges into opportunities
              through tailored digital solutions.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We combine deep industry expertise with cutting-edge technology to
              deliver solutions that drive real business impact. Our
              collaborative approach ensures we understand your unique needs and
              create customized strategies that align with your business goals.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a commitment to excellence and innovation, we've helped
              businesses across industries achieve measurable growth and
              establish strong foundations for future success.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border-2 rounded-md transition-all duration-300 text-base font-semibold shadow-sm hover:shadow-md"
                style={{
                  borderColor: "#0B8FD6",
                  color: "#0B8FD6",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0B8FD610")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Image with improved presentation */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/about.png"
                alt="About Power Solutions"
                width={600}
                height={450}
                className="w-full rounded-xl shadow-lg object-cover"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

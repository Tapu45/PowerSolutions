"use client";
import React from "react";
import Image from "next/image";

const Concept: React.FC = () => {
  return (
    <section className="py-1 pb-4 bg-background dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-19">
          {/* Left Side: Image */}
          <div className="flex-1">
            <div className="relative bg-white dark:bg-transparent rounded-xl p-4 dark:p-0">
              <Image
                src="/assets/home/concept.jpg"
                alt="Concept Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Right Side: Enhanced Content */}
          <div className="flex-1 space-y-8">
            {/* Header with accent */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-[#0B8FD6]"></div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight">
                  Our Concept
                </h2>
              </div>
              <div className="w-16 h-0.5 bg-[#0B8FD6] opacity-90"></div>
            </div>

            {/* Main Highlight - Multi-color tagline */}
            <div
              className="p-6 rounded-xl bg-gradient-to-br from-[#E6F9FB] to-[#DFF6FD] dark:bg-gradient-to-br dark:from-[#0f1821] dark:to-[#1a2633] border-l-4 border-[#0B8FD6] border-t border-r border-b border-[#0B8FD6]/20"
             
            >
              <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                <span
                  style={{ color: "#D6CE0B" }}
                  className="dark:text-[#D6CE0B]"
                >
                  N
                </span>
                <sup className="text-base text-[#8B2121] dark:text-[#8B2121]">
                  Powering
                </sup>{" "}
                <span
                  style={{ color: "#0B8FD6" }}
                  className="dark:text-[#0B8FD6]"
                >
                  Solutions
                </span>{" "}
                <span className="text-muted-foreground text-xl">for</span>{" "}
                <span
                  style={{ color: "#1BCDC5" }}
                  className="dark:text-[#1BCDC5]"
                >
                  dynamic granules
                </span>{" "}
                <span className="text-muted-foreground text-xl">of</span>{" "}
                <span
                  style={{ color: "#D6CE0B" }}
                  className="dark:text-[#D6CE0B]"
                >
                  Problem Statement
                </span>{" "}
                <span className="text-muted-foreground text-xl">and</span>{" "}
                <span
                  style={{ color: "#0B8FD6" }}
                  className="dark:text-[#0B8FD6]"
                >
                  Requirement
                </span>
              </p>
            </div>

            {/* Concise content */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[#E6F9FB] dark:bg-[#111827] border-l-4 border-[#0B8FD6] border-t border-r border-b border-[#0B8FD6]/12">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  <span className="font-semibold">
                    {/* Custom colored "solutions" as per logo */}
                    <span
                      style={{ color: "#1BCDC5" }}
                      className="dark:text-[#1BCDC5]"
                    >
                      [
                    </span>
                    <span
                      style={{ color: "#D6CE0B" }}
                      className="dark:text-[#D6CE0B]"
                    >
                      solut
                    </span>
                    <span
                      style={{ color: "#0B8FD6" }}
                      className="dark:text-[#0B8FD6]"
                    >
                      i
                    </span>
                    <span
                      style={{ color: "#D6CE0B" }}
                      className="dark:text-[#D6CE0B]"
                    >
                      o
                    </span>
                    <span
                      style={{ color: "#8B2121" }}
                      className="dark:text-[#8B2121]"
                    >
                      n
                    </span>
                    <span
                      style={{ color: "#D6CE0B" }}
                      className="dark:text-[#D6CE0B]"
                    >
                      s
                    </span>
                    <span
                      style={{ color: "#1BCDC5" }}
                      className="dark:text-[#1BCDC5]"
                    >
                      ]
                    </span>
                    <span
                      style={{
                        color: "#0B8FD6",
                        fontSize: "1.1em",
                        verticalAlign: "super",
                      }}
                      className="dark:text-[#0B8FD6]"
                    >
                      n
                    </span>
                  </span>{" "}
                  focuses on breaking down problems and requirements into
                  granules before designing solutions.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  By analyzing each{" "}
                  <span className="font-medium text-[#0B8FD6]">
                    problem granule
                  </span>
                  , we identify the right challenges to solve.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Solutions are built by{" "}
                  <span className="font-medium text-[#0B8FD6]">
                    consolidating granular results
                  </span>
                  , ensuring precision and effectiveness.
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-6 rounded-xl bg-[#DFF6FD] dark:bg-[#1a2633] border-l-4 border-[#0B8FD6]"
                style={{
                  boxShadow: "0 1px 0 rgba(11,143,214,0.03)",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  We add industry-specific insights to anticipate the impact of{" "}
                  <span className="font-semibold text-[#0B8FD6]">
                    future transformation
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

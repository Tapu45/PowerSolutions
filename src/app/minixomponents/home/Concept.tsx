// ...existing code...
"use client";
import React from "react";
import Image from "next/image";

const Concept: React.FC = () => {
  return (
    <section className="py-1 pb-4 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-19">
          {/* Left Side: Image */}
          <div className="flex-1">
            <div className="relative">
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
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: "#0B8FD6" }}
                ></div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight">
                  Our Concept
                </h2>
              </div>
              <div
                className="w-16 h-0.5"
                style={{ background: "#0B8FD6", opacity: 0.9 }}
              ></div>
            </div>

            {/* Concise content */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-xl dark:bg-[#111827]"
                style={{
                  background: "#E6F9FB",
                  borderLeft: "4px solid #0B8FD6",
                  borderTop: "1px solid rgba(11,143,214,0.12)",
                  borderRight: "1px solid rgba(11,143,214,0.12)",
                  borderBottom: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-yellow-600 dark:from-teal-400 dark:via-teal-300 dark:to-yellow-400">
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
                  <span className="font-medium" style={{ color: "#0B8FD6" }}>
                    problem granule
                  </span>
                  , we identify the right challenges to solve.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Solutions are built by{" "}
                  <span className="font-medium" style={{ color: "#0B8FD6" }}>
                    consolidating granular results
                  </span>
                  , ensuring precision and effectiveness.
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-6 rounded-xl dark:bg-[#1a2633]"
                style={{
                  background: "#DFF6FD",
                  borderLeft: "4px solid #0B8FD6",
                  boxShadow: "0 1px 0 rgba(11,143,214,0.03)",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  We add industry-specific insights to anticipate the impact of{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    future transformation
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Curved marquee related to this section */}
        {/* <div className="mt-2">
          <CurvedLoop
            marqueeText="Identify. Implement. Intensify. Precision in every granule — solutions engineered for measurable impact."
            speed={1.5}
            curveAmount={0}
            direction="left"
            interactive={false}
            className="text-[2.25rem] md:text-[3rem] tracking-tight"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Concept;


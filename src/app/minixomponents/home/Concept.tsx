import React from "react";
import Image from "next/image";

const Concept: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-19">
          {/* Left Side: Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src="/assets/home/concept.png"
                alt="Concept Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.06))" }}></div>
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
              <div className="w-16 h-0.5" style={{ background: "#0B8FD6", opacity: 0.9 }}></div>
            </div>

            {/* Enhanced content with better typography */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-xl border"
                style={{
                  // very subtle, low-saturation accent using env colors
                  background: "linear-gradient(90deg, rgba(27, 205, 196, 0.41), rgba(214,206,11,0.03))",
                  border: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    [solutions]ⁿ
                  </span>
                  , stands out for its approach of granulizing the problem
                  statements and business requirements, before designing the
                  solution.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  The focus on each{" "}
                  <span className="font-medium" style={{ color: "#0B8FD6" }}>
                    granule of problem statement
                  </span>{" "}
                  or requirement, helps us identifying the perfect problem
                  statement to be considered for solution designing.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Further, the solution designing is focused on each granule of
                  problem statement or requirement, to derive at the perfect
                  solution by{" "}
                  <span className="font-medium" style={{ color: "#0B8FD6" }}>
                    consolidating the granular result
                  </span>
                  .
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-6 rounded-xl"
                style={{
                  // minimal highlight: light teal wash + solid thin left accent
                  background: "rgba(27, 158, 205, 0.45)",
                  borderLeft: "4px solid #0B8FD6",
                  boxShadow: "0 1px 0 rgba(11,143,214,0.03)",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  Industry specific and influential objects are added to the
                  process to identify the possible impact during the{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    future transformation
                  </span>
                  .
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Empower your solution to handle a perfect problem statement and
                plan for
                <span className="font-semibold" style={{ color: "#0B8FD6" }}>
                  {" "}
                  Transformation Next
                </span>
                , with our industry experience and innovative services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

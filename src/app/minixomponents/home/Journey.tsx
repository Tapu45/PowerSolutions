import React from "react";
import Image from "next/image";

const Journey: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-19">
          {/* Left Side: Enhanced Content */}
          <div className="flex-1 space-y-8">
            {/* Header with accent */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: "#0B8FD6" }}
                ></div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight">
                  Our Journey
                </h2>
              </div>
              <div
                className="w-16 h-0.5"
                style={{ background: "#0B8FD6", opacity: 0.9 }}
              ></div>
            </div>

            {/* Timeline-inspired content */}
            <div className="relative">
              {/* Timeline line */}
              {/* <div
                className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(to bottom, #0B8FD6, #1BCDC5, #D6CE0B)",
                }}
              ></div> */}

              <div className="space-y-8 pl-16">
                {/* Journey milestone 1 */}
                <div className="relative">
                  {/* <div
                    className="absolute -left-10 top-2 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                    style={{ background: "#0B8FD6" }}
                  ></div> */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      borderLeft: "4px solid #0B8FD6",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Our Foundation
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our journey at{" "}
                      <span
                        style={{ color: "#0B8FD6" }}
                        className="font-semibold"
                      >
                        Power Solutions
                      </span>{" "}
                      began with a passion for innovation and a commitment to
                      excellence. From our humble beginnings, we have grown into
                      a trusted partner for businesses seeking transformative
                      technology solutions.
                    </p>
                  </div>
                </div>

                {/* Journey milestone 2 */}
                <div className="relative">
                  {/* <div
                    className="absolute -left-10 top-2 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                    style={{ background: "#1BCDC5" }}
                  ></div> */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      borderLeft: "4px solid #1BCDC5",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Growth & Expertise
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Through years of dedication, we have honed our expertise
                      in{" "}
                      <span className="text-foreground font-semibold">
                        ERP systems
                      </span>
                      ,{" "}
                      <span className="text-foreground font-semibold">
                        application development
                      </span>
                      , and{" "}
                      <span className="text-foreground font-semibold">
                        business consulting
                      </span>
                      . Our journey is marked by continuous learning and
                      adaptation to industry trends.
                    </p>
                  </div>
                </div>

                {/* Journey milestone 3 */}
                <div className="relative">
                  {/* <div
                    className="absolute -left-10 top-2 w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                    style={{ background: "#D6CE0B" }}
                  ></div> */}
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      borderLeft: "4px solid #D6CE0B",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Future Forward
                    </h3>
                    <p className="text-base text-foreground leading-relaxed">
                      As we move forward, we remain dedicated to pushing
                      boundaries and shaping the future of{" "}
                      <span
                        style={{ color: "#D6CE0B" }}
                        className="font-semibold"
                      >
                        technology-driven business success
                      </span>
                      , with a relentless focus on delivering value to our
                      clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enhanced Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src="/assets/home/journey.png"
                alt="Journey Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
              {/* Subtle overlay gradient */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

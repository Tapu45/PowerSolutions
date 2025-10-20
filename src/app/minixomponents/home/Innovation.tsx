import React from "react";
import Image from "next/image";

const Innovation: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px- sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-30">
          {/* Left Side: Enhanced Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src="/assets/home/innovation.jpg"
                alt="Innovation Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl "
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
                  Our Innovation
                </h2>
              </div>
              <div
                className="w-16 h-0.5"
                style={{ background: "#0B8FD6", opacity: 0.9 }}
              ></div>

              {/* New tagline with colors */}
              <p className="text-3xl font-bold text-foreground pt-2">
                <span style={{ color: "#1BCDC5" }}>Curated Services</span> and{" "}
                <span style={{ color: "#0B8FD6" }}>Crafted</span>{" "}
                <span style={{ color: "#D6CF0B" }}>Methodology</span>
              </p>
            </div>

            {/* Enhanced paragraph with better styling */}
            <div className="space-y-5">
              <div
                className="p-5 rounded-xl border"
                style={{
                  background: "rgba(11, 143, 214, 0.1)",
                  border: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Innovation is at the heart of{" "}
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
                  </span>
                  . We continuously push the boundaries of technology to deliver
                  cutting-edge solutions that redefine industry standards.
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(27, 205, 197, 0.15)",
                  borderLeft: "4px solid #0B8FD6",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  Our team of experts leverages the latest advancements in{" "}
                  <span className="text-foreground font-semibold">
                    ERP systems
                  </span>
                  ,{" "}
                  <span className="text-foreground font-semibold">
                    AI-driven analytics
                  </span>
                  , and{" "}
                  <span className="text-foreground font-semibold">
                    agile development methodologies
                  </span>{" "}
                  to create bespoke applications that drive efficiency and
                  growth.
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Through our innovative approaches like{" "}
                <span style={{ color: "#0B8FD6" }} className="font-semibold">
                  BYOS, BYBS, BIBD, and RIRO
                </span>
                , we empower businesses to stay ahead in a rapidly evolving
                digital landscape, ensuring they achieve{" "}
                <span className="text-foreground font-semibold">
                  sustainable competitive advantages
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;

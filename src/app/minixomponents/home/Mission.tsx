import React from "react";
import Image from "next/image";

const Mission: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Enhanced Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src="/assets/home/mission.jpg"
                alt="Mission Image"
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
                  style={{
                    background: "linear-gradient(to bottom, #0B8FD6, #1BCDC5)",
                  }}
                ></div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight">
                  Our Mission
                </h2>
              </div>
              <div
                className="w-16 h-0.5"
                style={{
                  background: "linear-gradient(to right, #0B8FD6, #1BCDC5)",
                }}
              ></div>

              {/* New tagline with colors */}
              <p className="text-3xl font-bold text-foreground pt-2">
                <span style={{ color: "#D6CF0B" }}>Macro Impact</span> through{" "}
                <span style={{ color: "#1BCDC5" }}>Micro Solutions</span>{" "}
                <span style={{ color: "#0B8FD6" }}>by Blue</span>
              </p>
            </div>

            {/* Mission statement with focus areas */}
            <div className="space-y-6">
              {/* Main mission statement */}
              <div
                className="p-6 rounded-xl border"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(11,143,214,0.08), rgba(11,143,214,0.04))",
                  border: "1px solid rgba(11,143,214,0.2)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Our mission at{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    Power Solutions
                  </span>{" "}
                  is to deliver exceptional technology solutions that drive
                  business success and innovation.
                </p>
              </div>

              {/* Mission pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(11,143,214,0.08), rgba(11,143,214,0.04))",
                    border: "1px solid rgba(11,143,214,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#0B8FD6" }}
                    ></div>
                    <h4 className="font-semibold text-foreground text-sm">
                      Comprehensive Services
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ERP consulting, application development, and business
                    transformation services tailored to unique client needs.
                  </p>
                </div>

                <div
                  className="p-4 rounded-lg border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(27,205,197,0.08), rgba(27,205,197,0.04))",
                    border: "1px solid rgba(27,205,197,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#1BCDC5" }}
                    ></div>
                    <h4 className="font-semibold text-foreground text-sm">
                      Proven Methodologies
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BYOS, BYBS, BIBD, and RIRO methodologies for rapid,
                    efficient, and scalable implementations.
                  </p>
                </div>
              </div>

              {/* Bottom section */}
              <div
                className="p-6 rounded-xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(214,206,11,0.08), rgba(214,206,11,0.04))",
                  borderLeft: "4px solid #D6CE0B",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  We ensure{" "}
                  <span style={{ color: "#D6CE0B" }} className="font-semibold">
                    maximum ROI
                  </span>{" "}
                  and foster long-term growth, building lasting partnerships
                  based on{" "}
                  <span className="text-foreground font-semibold">
                    trust, transparency, and mutual success
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

export default Mission;

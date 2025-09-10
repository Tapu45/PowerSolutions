import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
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
                  Our Vision
                </h2>
              </div>
              <div
                className="w-16 h-0.5"
                style={{ background: "#0B8FD6", opacity: 0.9 }}
              ></div>
            </div>

            {/* Enhanced content with better typography */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-xl border"
                style={{
                  // very subtle, low-saturation accent using env colors
                  background:
                    "linear-gradient(90deg, rgba(214, 207, 11, 0.41), rgba(27,205,197,0.06))",
                  border: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Our vision at{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    Power Solutions
                  </span>{" "}
                  is to be the leading provider of transformative technology
                  solutions, empowering businesses worldwide to achieve
                  <span className="text-foreground font-medium">
                    {" "}
                    unparalleled growth and innovation
                  </span>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">
                  We envision a future where seamless integration of
                  <span className="text-foreground font-medium">
                    {" "}
                    advanced ERP systems
                  </span>
                  , intelligent business strategies, and cutting-edge
                  application development drives sustainable success.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Through our commitment to excellence, we aim to
                  <span className="text-foreground font-medium">
                    {" "}
                    redefine industry standards
                  </span>{" "}
                  and foster long-term partnerships that propel our clients into
                  the forefront of their respective markets.
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-6 rounded-xl"
                style={{
                  // minimal highlight: light cyan wash + solid thin left accent
                  background: "rgba(26, 100, 96, 0.28)",
                  borderLeft: "4px solid #0B8FD6",
                  boxShadow: "0 1px 0 rgba(11,143,214,0.03)",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  We envision a future where seamless integration of advanced
                  ERP systems, intelligent business strategies, and cutting-edge
                  application development drives
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    {" "}
                    sustainable success
                  </span>
                  .
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Through our commitment to excellence, we aim to redefine
                industry standards and foster
                <span className="text-foreground font-semibold">
                  {" "}
                  long-term partnerships
                </span>{" "}
                that propel our clients into the forefront of their respective
                markets.
              </p>
            </div>
          </div>

          {/* Right Side: Enhanced Image */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src="/assets/home/vision.png"
                alt="Vision Image"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

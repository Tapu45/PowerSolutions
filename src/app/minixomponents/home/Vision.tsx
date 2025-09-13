import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section className=" bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-18">
          {/* Left Side: Enhanced Content */}
          <div className="flex-1 space-y-6">
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
            <div className="space-y-5">
              <div
                className="p-5 rounded-xl border"
                style={{
                  background: "rgba(214, 207, 11, 0.1)",
                  border: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  To be the leading provider of transformative technology
                  solutions, empowering businesses to achieve{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    unparalleled growth and innovation
                  </span>
                  .
                </p>
              </div>

              {/* Highlighted section */}
              <div
                className="p-5 rounded-xl"
                style={{
                  background: "rgba(26, 100, 96, 0.28)",
                  borderLeft: "4px solid #0B8FD6",
                }}
              >
                <p className="text-base text-foreground leading-relaxed">
                  We integrate advanced ERP systems, intelligent business
                  strategies, and cutting-edge application development to drive{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    sustainable success
                  </span>
                  .
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Through our commitment to excellence, we foster{" "}
                <span className="text-foreground font-semibold">
                  long-term partnerships
                </span>{" "}
                that propel our clients to the forefront of their markets.
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
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

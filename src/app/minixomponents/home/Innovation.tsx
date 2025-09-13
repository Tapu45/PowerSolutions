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
                src="/assets/home/innovation.png"
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
            </div>

            {/* Enhanced paragraph with better styling */}
            <div className="relative">
              <div
                className="p-8 rounded-xl border shadow-sm"
                style={{
                  // very subtle, low-saturation accent using env colors
                  background:
                    "linear-gradient(90deg, rgba(214,206,11,0.03), rgba(27,205,197,0.06))",
                  border: "1px solid rgba(11,143,214,0.12)",
                }}
              >
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  Innovation is at the heart of{" "}
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    Power Solutions
                  </span>
                  . We continuously push the boundaries of technology to deliver
                  cutting-edge solutions that redefine industry standards. Our
                  team of experts leverages the latest advancements in{" "}
                  <span className="text-foreground font-semibold">
                    ERP systems
                  </span>
                  ,
                  <span className="text-foreground font-semibold">
                    {" "}
                    AI-driven analytics
                  </span>
                  , and
                  <span className="text-foreground font-semibold">
                    {" "}
                    agile development methodologies
                  </span>{" "}
                  to create bespoke applications that drive efficiency and
                  growth. Through our innovative approaches like
                  <span style={{ color: "#0B8FD6" }} className="font-semibold">
                    {" "}
                    BYOS, BYBS, BIBD, and RIRO
                  </span>
                  , we empower businesses to stay ahead in a rapidly evolving
                  digital landscape, ensuring they achieve
                  <span className="text-foreground font-semibold">
                    {" "}
                    sustainable competitive advantages
                  </span>
                  .
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
                style={{ background: "#D6CE0B" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-40"
                style={{ background: "#1BCDC5" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;

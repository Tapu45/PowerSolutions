import React from "react";
import Image from "next/image";

const Innovation: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="flex-1">
            <Image
              src="/assets/home/innovation.png"
              alt="Innovation Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Paragraph Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovation is at the heart of Power Solutions. We continuously
              push the boundaries of technology to deliver cutting-edge
              solutions that redefine industry standards. Our team of experts
              leverages the latest advancements in ERP systems, AI-driven
              analytics, and agile development methodologies to create bespoke
              applications that drive efficiency and growth. Through our
              innovative approaches like BYOS, BYBS, BIBD, and RIRO, we empower
              businesses to stay ahead in a rapidly evolving digital landscape,
              ensuring they achieve sustainable competitive advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;

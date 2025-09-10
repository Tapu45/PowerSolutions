import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Paragraph Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision at Power Solutions is to be the leading provider of
              transformative technology solutions, empowering businesses
              worldwide to achieve unparalleled growth and innovation. We
              envision a future where seamless integration of advanced ERP
              systems, intelligent business strategies, and cutting-edge
              application development drives sustainable success. Through our
              commitment to excellence, we aim to redefine industry standards
              and foster long-term partnerships that propel our clients into the
              forefront of their respective markets.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1">
            <Image
              src="/assets/home/vision.png"
              alt="Vision Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

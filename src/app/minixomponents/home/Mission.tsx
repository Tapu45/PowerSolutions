import React from "react";
import Image from "next/image";

const Mission: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="flex-1">
            <Image
              src="/assets/home/mission.png"
              alt="Mission Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side: Paragraph Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission at Power Solutions is to deliver exceptional
              technology solutions that drive business success and innovation.
              We are committed to providing comprehensive ERP consulting,
              application development, and business transformation services that
              are tailored to meet the unique needs of each client. By
              leveraging our expertise in BYOS, BYBS, BIBD, and RIRO
              methodologies, we ensure rapid, efficient, and scalable
              implementations that maximize ROI and foster long-term growth. We
              strive to build lasting partnerships based on trust, transparency,
              and mutual success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

import React from "react";
import Image from "next/image";

const Journey: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Paragraph Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey at Power Solutions began with a passion for innovation
              and a commitment to excellence. From our humble beginnings, we
              have grown into a trusted partner for businesses seeking
              transformative technology solutions. Through years of dedication,
              we have honed our expertise in ERP systems, application
              development, and business consulting. Our journey is marked by
              continuous learning, adaptation to industry trends, and a
              relentless focus on delivering value to our clients. As we move
              forward, we remain dedicated to pushing boundaries and shaping the
              future of technology-driven business success.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1">
            <Image
              src="/assets/home/journey.png"
              alt="Journey Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

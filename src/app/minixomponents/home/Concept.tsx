import React from "react";
import Image from "next/image";

const Concept: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="flex-1">
            <Image
              src="/assets/home/concept.png"
              alt="Concept Image"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Side: Paragraph Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Concept
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              [solutions]ⁿ, stands out for it’s approach of granulizing the
              problem statements and business requirements, before designing the
              solution. The focus on each granule of problem statement or
              requirement, helps us identifying the perfect problem statement to
              be considered for solution designing. Further, the solution
              designing is focused on each granule of problem statement or
              requirement, to derive at the perfect solution by consolidating
              the granular result. Industry specific and influential objects are
              added to the process to identify the possible impact during the
              future transformation. Empower your solution to handle a perfect
              problem statement and plan for Transformation Next, with our
              industry experience and innovative services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;

import React from "react";
import Image from "next/image";

const innovations = [
  {
    name: "Artmart",
    logo: "/assets/innovation/Artmart logo.png",
  },
  {
    name: "DESH Analytics",
    logo: "/assets/innovation/DESH analytics logo.png",
  },
  {
    name: "ERPBUGS",
    logo: "/assets/innovation/erpbugs Logo.png",
  },
  {
    name: "Expex",
    logo: "/assets/innovation/expex.png",
  },
  {
    name: "HuKeHu",
    logo: "/assets/innovation/HuKeHu Logo.png",
  },
];

const Innovations: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-center mb-1">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#0B8FD6" }}
            >
              Our Innovations
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-teal-400 mx-auto mb-6 rounded-full"
              style={{ width: "4rem" }}
            />
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Products and ventures we’ve crafted. Designed to be practical,
              scalable, and delightful.
            </p>
          </div>
        </div>

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {innovations.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-xl border bg-card/50 hover:bg-card transition-colors duration-300"
              style={{ borderColor: "rgba(11,143,214,0.15)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(120px 80px at top right, rgba(11,143,214,0.18), transparent), radial-gradient(120px 80px at bottom left, rgba(214,207,11,0.16), transparent)",
                }}
              />
              <div className="relative flex flex-col items-center justify-center px-5 py-6">
                <div className="w-full aspect-[5/3] flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={320}
                    height={192}
                    className="w-full h-full object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                    priority={false}
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-foreground">
                    {item.name}
                  </p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-xl ring-1"
                style={{ boxShadow: "inset 0 0 0 1px rgba(11,143,214,0.08)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;

"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

type Competency = {
  name: string;
  color: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const palette = ["#0B8FD6", "#1BCDC5", "#D6CE0B"];

// Simple inline icons (no external deps)
const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.31 1.5A3.5 3.5 0 0 0 7 18z"
    />
  </svg>
);

const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12 2 9 5-9 5-9-5 9-5z"
    />
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 12 9 5 9-5"
    />
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3 17 9 5 9-5"
    />
  </svg>
);

const CubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 16V8l-9-5-9 5v8l9 5 9-5z"
    />
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.3 7.3 12 12l8.7-4.7"
    />
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 12v10"
    />
  </svg>
);

const HexagonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 2.5 3.5 6v6L9 15.5 14.5 12V6L9 2.5z"
      transform="translate(1.75 1.5) scale(1.15)"
    />
  </svg>
);

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="1.8" />
    <path
      strokeWidth="1.8"
      d="M7 12h2M11 12h2M15 12h2M7 16h2M11 16h2M15 16h2"
    />
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
    />
  </svg>
);

const WaveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 15c2 0 2-6 4-6s2 6 4 6 2-6 4-6 2 6 4 6"
    />
  </svg>
);

const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" strokeWidth="1.8" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" strokeWidth="1.8" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" strokeWidth="1.8" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" strokeWidth="1.8" />
  </svg>
);

const WrenchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4.5 4.5 0 0 1-6 6L4 15l5-4.7a4.5 4.5 0 0 1 6-6l-.3 2z"
    />
    <circle cx="5" cy="19" r="2" strokeWidth="1.8" />
  </svg>
);

const competencies: Competency[] = [
  { name: "Oracle E-Business Suite", color: palette[0], icon: BuildingIcon },
  { name: "Oracle Fusion Cloud", color: palette[1], icon: CloudIcon },
  { name: "IFS", color: palette[2], icon: CubeIcon },
  { name: "Oracle NetSuite", color: palette[0], icon: LayersIcon },
  { name: "SAP Business One", color: palette[1], icon: HexagonIcon },
  { name: "Microsoft Dynamics", color: palette[2], icon: WaveIcon },
  { name: "Odoo", color: palette[0], icon: GridIcon },
  { name: "Custom ERP Solutions", color: palette[1], icon: WrenchIcon },
];

const ITEM_W = 128; // w-32
const GAP = 40; // gap-10
const ONE_SET_W = (ITEM_W + GAP) * competencies.length;

const Compmetencies = () => {
  // Triple list to ensure seamless looping like IndustryScope
  const duplicated = [...competencies, ...competencies, ...competencies];

  return (
    <section className="py-1 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-slate-50 dark:from-slate-900/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-slate-50 dark:from-slate-900/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-1"
        >
          <motion.h2
            className="text-5xl font-bold mb-4"
            style={{ color: "#1BCDC5" }}
            whileHover={{
              textShadow: [
                `0 0 0px #1BCDC5`,
                `0 0 30px #1BCDC530`,
                `0 0 0px #1BCDC5`,
              ],
            }}
            transition={{ duration: 1 }}
          >
            Our Competencies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-blue-400 mx-auto mb-6 rounded-full"
          />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Expertise across leading ERP platforms to fit your unique business
            needs
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-10 will-change-transform"
              // Reverse direction, start shifted left so no empty space on the left
              animate={{ x: [-ONE_SET_W, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicated.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={`comp-${idx}-${c.name}`}
                    className="flex-shrink-0 w-32 relative group"
                    whileHover={{ scale: 1.08, rotate: -3 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: `${ITEM_W}px` }}
                    title={c.name}
                    aria-label={c.name}
                  >
                    <div
                      className="w-32 h-32 rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center"
                      style={{
                        border: `3px solid ${c.color}`,
                        boxShadow: `0 0 24px 0 ${c.color}55`,
                      }}
                    >
                      <Icon className="w-14 h-14 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div className="mt-3 text-center text-sm font-medium text-slate-700 dark:text-slate-200">
                      {c.name}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compmetencies;

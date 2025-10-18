"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { img: "/assets/iscope/a.png", color: "#0B8FD6" },
  { img: "/assets/iscope/dm.png", color: "#1BCDC5" },
  { img: "/assets/iscope/fmcg.png", color: "#D6CE0B" },
  { img: "/assets/iscope/h.png", color: "#0B8FD6" },
  { img: "/assets/iscope/e.png", color: "#1BCDC5" },
  { img: "/assets/iscope/gps.png", color: "#D6CE0B" },
  { img: "/assets/iscope/in.png", color: "#0B8FD6" },
  { img: "/assets/iscope/if.png", color: "#1BCDC5" },
  { img: "/assets/iscope/fp.png", color: "#D6CE0B" },
  { img: "/assets/iscope/lsc.png", color: "#0B8FD6" },
  { img: "/assets/iscope/it.png", color: "#1BCDC5" },
  { img: "/assets/iscope/hs.png", color: "#D6CE0B" },
  { img: "/assets/iscope/ong.png", color: "#0B8FD6" },
  { img: "/assets/iscope/r.png", color: "#1BCDC5" },
  { img: "/assets/iscope/im.png", color: "#D6CE0B" },
  { img: "/assets/iscope/t.png", color: "#0B8FD6" },
  { img: "/assets/iscope/tc.png", color: "#1BCDC5" },
  { img: "/assets/iscope/m.png", color: "#D6CE0B" },
];

const IndustryScope = () => {
  const duplicatedIndustries = [...industries, ...industries, ...industries];

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
            Industries in Scope
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-blue-400 mx-auto mb-6 rounded-full"
          />
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Empowering transformation across diverse sectors with tailored
            solutions and industry expertise
          </p>
        </motion.div>

        <div className="relative">
       

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-10"
              animate={{
                x: [0, -((120 + 40) * industries.length)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedIndustries.map((industry, idx) => (
                <motion.div
                  key={`industry-${idx}`}
                  className="flex-shrink-0 w-32 h-32 relative group rounded-full overflow-hidden"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    border: `3px solid ${industry.color}`,
                    boxShadow: `0 0 24px 0 ${industry.color}55`,
                    background: "#fff",
                  }}
                >
                  <Image
                    src={industry.img}
                    alt="Industry"
                    width={128}
                    height={128}
                    className="object-contain w-full h-full rounded-full transition-all duration-300 bg-white"
                    style={{ backgroundColor: "#fff" }}
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryScope;

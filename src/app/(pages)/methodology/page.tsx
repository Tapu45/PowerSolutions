"use client";

import React, { useState } from "react";
import { easeOut, motion } from "framer-motion";
import {
  Target,
  Cog,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  ArrowDown,
} from "lucide-react";
import CircularText from "@/components/animation/Circular-Text";
import Image from "next/image";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

const MethodologyPage: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const phases = [
    {
      id: "identify",
      icon: Target,
      title: "identify",
      tagline: "Diagnose with Precision. Define with Purpose.",
      description:
        "We dissect the problem statement into granular components, validate its relevance, and benchmark it against industry standards.",
      benefit:
        "Ensures we're solving the right problem—not just any problem. Precision leads to better outcomes.",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}15, ${YELLOW}05)`,
      steps: [
        {
          image: "/assets/methodology/identify-deconstruct.png",
          title:
            "Deconstruct the problem statement into its smallest actionable granules",
        },
        {
          image: "/assets/methodology/identify-validate.png",
          title:
            "Validate the core issue by benchmarking against industry archetypes and operational realities",
        },
        {
          image: "/assets/methodology/identify-ensure.png",
          title:
            "Ensure alignment with strategic priorities, stakeholder expectations, and transformation readiness",
        },
      ],
    },
    {
      id: "implement",
      icon: Cog,
      title: "implement",
      tagline: "Engineer Solutions That Endure",
      description:
        "In the Implement phase, we move from validated insight to action. Whether the solution is internally designed or sourced from a third-party vendor",
      benefit:
        "A robust, future-proof solution aligned with long-term business goals",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}15, ${TEAL}05)`,
      steps: [
        {
          image: "/assets/methodology/implement-conduct.png",
          title:
            "Conduct comprehensive due diligence across technical, operational, and strategic dimensions",
        },
        {
          image: "/assets/methodology/implement-stress.png",
          title:
            "Stress-test for sustainability, scalability, and future transformation compatibility",
        },
        {
          image: "/assets/methodology/implement.png",
          title:
            "Ensure interoperability and reusability, enabling seamless integration into evolving enterprise ecosystems",
        },
      ],
    },
    {
      id: "intensify",
      icon: TrendingUp,
      title: "intensify",
      tagline: "Maximize Value. Multiply Impact.",
      description:
        "Post-implementation, we help clients extract maximum value from the deployed solution. This phase is not a conclusion—it's a launchpad for the next cycle",
      benefit:
        "Continuous improvement, evolving benchmarks, and compounding ROI",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}15, ${BLUE}05)`,
      steps: [
        {
          image: "/assets/methodology/intensify-drive.png",
          title:
            "Drive adoption and utilization to unlock the full potential of the solution",
        },
        {
          image: "/assets/methodology/intensify-monitor.png",
          title:
            "Monitor performance and extract insights to inform continuous improvement",
        },
        {
          image: "/assets/methodology/intensify-reentre.png",
          title:
            "Re-enter the Identify phase to uncover the next layer of opportunity or challenge",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <motion.section
        className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-dashed opacity-10"
            style={{ borderColor: TEAL }}
          ></motion.div>
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-dashed opacity-10"
            style={{ borderColor: YELLOW }}
          ></motion.div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-slate-100 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Methodology
          </motion.h1>

          {/* Circular Text Animation */}
          <motion.div
            className="flex justify-center my-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <CircularText
              text="identify • implement • intensify • "
              onHover="speedUp"
              spinDuration={20}
              className="text-[#0B8FD6] bg-transparent"
              logoSrc="/logo-clean.png"
              logoAlt="Power Solutions Logo"
            />
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8"
            style={{ color: BLUE }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            3i a Cyclic Approach
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Every solution we deliver is powered by our proprietary 3i
            Methodology—a cyclic, continuous approach that ensures precision,
            sustainability, and transformation. Whether the engagement is
            short-term or long-term, the 3i framework remains constant, driving
            value at every stage.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Methodology Phases Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h3
            className="text-4xl sm:text-5xl font-bold text-center text-slate-900 dark:text-slate-100 mb-16"
            variants={itemVariants}
          >
            The 3i Process
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                onClick={() =>
                  setActivePhase(activePhase === phase.id ? null : phase.id)
                }
              >
                <motion.div
                  className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 25px 50px ${phase.color}25`,
                  }}
                  style={{
                    background:
                      hoveredStep === index ? phase.gradient : undefined,
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)`,
                    }}
                  ></motion.div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)`,
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full bg-white dark:bg-slate-700 rounded-2xl"></div>
                  </motion.div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto shadow-lg"
                      style={{ backgroundColor: `${phase.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <phase.icon
                        className="w-10 h-10"
                        style={{ color: phase.color }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-4">
                      {phase.title}
                    </h4>

                    {/* Tagline */}
                    <p
                      className="text-lg font-semibold text-center mb-4"
                      style={{ color: phase.color }}
                    >
                      {phase.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed mb-4">
                      {phase.description}
                    </p>

                    {/* Benefit */}
                    <div className="bg-slate-50 dark:bg-slate-600 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                        {phase.benefit}
                      </p>
                    </div>

                    {/* Click to explore indicator */}
                    <motion.div
                      className="flex items-center justify-center gap-2 text-sm font-medium"
                      style={{ color: phase.color }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Click to explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>

                    {/* Animated Underline */}
                    <motion.div
                      className="w-0 h-1 mx-auto mt-4 rounded-full"
                      style={{ backgroundColor: phase.color }}
                      whileHover={{ width: "60%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Phase Section */}
      {activePhase && (
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            {phases
              .filter((phase) => phase.id === activePhase)
              .map((phase) => (
                <div key={phase.id}>
                  {/* Phase Header */}
                  <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <motion.div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${phase.color}15` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <phase.icon
                          className="w-8 h-8"
                          style={{ color: phase.color }}
                        />
                      </motion.div>
                      <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100">
                        {phase.title}
                      </h3>
                    </div>
                    <p
                      className="text-2xl font-semibold mb-4"
                      style={{ color: phase.color }}
                    >
                      {phase.tagline}
                    </p>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>

                  {/* Phase Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {phase.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: stepIndex * 0.1, duration: 0.6 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-600 overflow-hidden hover:shadow-xl transition-all duration-300">
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)`,
                            }}
                          ></motion.div>

                          {/* Animated Border */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${phase.color}, ${phase.color}80)`,
                              padding: "2px",
                            }}
                          >
                            <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-2xl"></div>
                          </motion.div>

                          <div className="relative z-10">
                            {/* Step Image */}
                            <motion.div
                              className="w-full h-48 mb-6 relative rounded-lg overflow-hidden"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                className="object-cover"
                              />
                            </motion.div>

                            {/* Step Title */}
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                              {step.title}
                            </h4>

                            {/* Step Number */}
                            <div className="flex items-center justify-between mt-4">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                style={{ backgroundColor: phase.color }}
                              >
                                {stepIndex + 1}
                              </div>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <CheckCircle
                                  className="w-6 h-6"
                                  style={{ color: phase.color }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Close Button */}
                  <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={() => setActivePhase(null)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Close Details</span>
                    </motion.button>
                  </motion.div>
                </div>
              ))}
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, ${BLUE} 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h3
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover how our 3i methodology can drive your success.
          </motion.p>
          <motion.button
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              color: "white",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            ></motion.div>
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default MethodologyPage;

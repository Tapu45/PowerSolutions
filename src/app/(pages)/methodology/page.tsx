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
} from "lucide-react";
import CircularText from "@/components/animation/Circular-Text";
import Image from "next/image";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

const MethodologyPage: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      title: "Identify",
      tagline: "Diagnose with Precision",
      description:
        "Dissect problems into granular components, validate relevance, and benchmark against industry standards.",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}15, ${YELLOW}05)`,
      steps: [
        {
          image: "/assets/methodology/identify-deconstruct.png",
          title: "Deconstruct the problem into actionable components",
        },
        {
          image: "/assets/methodology/identify-validate.png",
          title: "Validate against industry archetypes and realities",
        },
        {
          image: "/assets/methodology/identify-ensure.png",
          title: "Ensure strategic alignment and transformation readiness",
        },
      ],
    },
    {
      id: "implement",
      icon: Cog,
      title: "Implement",
      tagline: "Engineer Solutions That Endure",
      description:
        "Move from validated insight to action. Build or source solutions aligned with long-term business goals.",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}15, ${TEAL}05)`,
      steps: [
        {
          image: "/assets/methodology/implement-conduct.png",
          title: "Conduct comprehensive due diligence across all dimensions",
        },
        {
          image: "/assets/methodology/implement-stress.png",
          title: "Stress-test for sustainability and scalability",
        },
        {
          image: "/assets/methodology/implement.png",
          title: "Ensure interoperability and enterprise ecosystem fit",
        },
      ],
    },
    {
      id: "intensify",
      icon: TrendingUp,
      title: "Intensify",
      tagline: "Maximize Value. Multiply Impact",
      description:
        "Extract maximum value from deployed solutions and prepare for continuous improvement cycles.",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}15, ${BLUE}05)`,
      steps: [
        {
          image: "/assets/methodology/intensify-drive.png",
          title: "Drive adoption and unlock full potential",
        },
        {
          image: "/assets/methodology/intensify-monitor.png",
          title: "Monitor performance and extract insights",
        },
        {
          image: "/assets/methodology/intensify-reentre.png",
          title: "Re-enter the cycle for continuous opportunities",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section - Compact */}
      <motion.section
        className="relative py-26 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 mb-4">
              Our Methodology
            </h1>
            <p className="text-2xl font-bold mb-2" style={{ color: BLUE }}>
              The 3i Cyclic Approach
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed -mb-17">
              Our proprietary 3i framework ensures precision, sustainability,
              and transformation at every stage. A cyclic approach that drives
              continuous value.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Methodology Phases Section - Compact Grid */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                className="relative group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                onClick={() =>
                  setActivePhase(activePhase === phase.id ? null : phase.id)
                }
              >
                <motion.div
                  className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full"
                  whileHover={{
                    scale: 1.01,
                    boxShadow: `0 20px 40px ${phase.color}20`,
                  }}
                  style={{
                    background:
                      hoveredStep === index ? phase.gradient : undefined,
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="flex items-center justify-center w-12 h-12 rounded-xl shadow-md"
                        style={{ backgroundColor: `${phase.color}15` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <phase.icon
                          className="w-7 h-7"
                          style={{ color: phase.color }}
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                          {phase.title}
                        </h4>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: phase.color }}
                        >
                          {phase.tagline}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium"
                      style={{ color: phase.color }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
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
          className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
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
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                        style={{ backgroundColor: `${phase.color}15` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <phase.icon
                          className="w-6 h-6"
                          style={{ color: phase.color }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                          {phase.title}
                        </h3>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: phase.color }}
                        >
                          {phase.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>

                  {/* Phase Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {phase.steps.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        className="group relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: stepIndex * 0.1, duration: 0.6 }}
                        whileHover={{ y: -3 }}
                      >
                        <div className="relative bg-slate-50 dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-600 overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                          <div className="relative z-10">
                            {/* Step Image */}
                            <motion.div
                              className="w-full flex items-center justify-center mb-4 relative rounded-lg overflow-hidden"
                              whileHover={{ scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image
                                src={step.image}
                                alt={step.title}
                                width={220} // set your actual image width
                                height={220} // set your actual image height
                                className="object-contain"
                              />
                            </motion.div>

                            {/* Step Title */}
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 leading-tight mb-3">
                              {step.title}
                            </h4>

                            {/* Step Number */}
                            <div className="flex items-center gap-2">
                              <div
                                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                style={{ backgroundColor: phase.color }}
                              >
                                {stepIndex + 1}
                              </div>
                              <CheckCircle
                                className="w-5 h-5"
                                style={{ color: phase.color }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Close Button */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={() => setActivePhase(null)}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Close</span>
                    </motion.button>
                  </motion.div>
                </div>
              ))}
          </div>
        </motion.section>
      )}

     
    </div>
  );
};

export default MethodologyPage;

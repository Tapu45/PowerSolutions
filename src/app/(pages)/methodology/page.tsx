"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Target, Cog, TrendingUp } from "lucide-react";
import CircularText from "@/components/animation/Circular-Text";

const MethodologyPage: React.FC = () => {
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

  const steps = [
    {
      icon: Target,
      title: "identify",
      description:
        "Identifying the perfect problem statement or the absolute requirement right at the time helps organization designing the solution approach.",
      color: "#D6CE0B",
    },
    {
      icon: Cog,
      title: "implement",
      description:
        "Implementation of a perfect solution is measured through its closeness to the benchmark.",
      color: "#1BCDC5",
    },
    {
      icon: TrendingUp,
      title: "intensify",
      description:
        "Intensification is a practice to set the new standards and opportunity to mine the new benchmark.",
      color: "#0B8FD6",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Methodology
          </motion.h1>
          {/* Circular Text Animation */}
          <div className="flex justify-center my-8">
            <CircularText
              text="identify • implement • intensify • "
              onHover="speedUp"
              spinDuration={20}
              className="text-[#0B8FD6] bg-transparent"
              logoSrc="/logo-clean.png"
              logoAlt="Power Solutions Logo"
            />
          </div>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            3i a Cyclic Approach
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Our approach 3i, is tested and very practical from achievement point
            of view. Through a continuous engagement, transformation is easier,
            faster and flexible.
          </motion.p>
        </div>
      </motion.section>

      {/* Steps Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16"
            variants={itemVariants}
          >
            The 3i Process
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: step.color, filter: "blur(20px)" }}
                />
                <div className="relative bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto"
                    style={{ backgroundColor: step.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-foreground text-center mb-4">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1"
                    style={{ backgroundColor: step.color }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Discover how our 3i methodology can drive your success.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default MethodologyPage;

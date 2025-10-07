"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import {
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Globe,
  Award,
  Play,
  ArrowDown,
} from "lucide-react";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function BAaaSPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about BAaaS.");
    setShowContactForm(false);
  };

  const features = [
    "Independent Stakeholder/SME/End User Interviews",
    "Business Process Mapping",
    "Gap Analysis & Transformation Readiness",
    "Industry Benchmarking",
    "Requirements Documentation",
    "Use Case & User Story Development",
  ];

  const deliverables = [
    "Business Process Mapping - Visualize your current state and identify transformation opportunities",
    "Gap Analysis & Readiness Assessment - Understand what's missing and what's needed to move forward",
    "Industry Benchmarking - Align your processes with best practices and standards",
    "Clear Documentation - From use cases to user stories—everything is structured, traceable, and actionable",
    "Problem Statement Identification - We help you define the real problems before jumping to solutions",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-4">
      {/* Unique Hero Section - Diagonal Split */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Diagonal Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${TEAL}08 0%, transparent 30%, transparent 70%, ${BLUE}08 100%)`,
          }}
        ></div>

        {/* Floating Geometric Shapes */}
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
            className="absolute top-20 right-20 w-32 h-32 border-2 border-dashed opacity-20"
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
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-dashed opacity-20"
            style={{ borderColor: YELLOW }}
          ></motion.div>
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-dashed opacity-20"
            style={{ borderColor: BLUE }}
          ></motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Takes 7 columns */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-7"
            >
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: TEAL }}
                ></div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Services
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold" style={{ color: BLUE }}>
                  BAaaS
                </span>
              </motion.div>

              {/* Main Title - Typography Focus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
                  <span className="block" style={{ color: TEAL }}>
                    Business
                  </span>
                  <span className="block" style={{ color: BLUE }}>
                    Analysis
                  </span>
                  <span
                    className="block text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    as a Service
                  </span>
                </h1>
              </motion.div>

              {/* Why Section - Inline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-1 h-16 rounded-full mt-2"
                    style={{ backgroundColor: TEAL }}
                  ></div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: TEAL }}
                    >
                      Why BAaaS?
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      In most IT and ERP projects, Business Analysis is bundled
                      into the overall service—often overlooked, underfunded,
                      and undervalued. This leads to vague requirements,
                      misaligned solutions, and costly rework.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    color: "white",
                  }}
                >
                  Get Started with BAaaS
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image - Takes 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <Image
                  src="/assets/services/separate/baas1.png"
                  alt="Business Analysis as a Service"
                  width={900}
                  height={900}
                  className="object-contain"
                  priority
                />

                {/* Animated Dots */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-10 right-10 w-4 h-4 rounded-full"
                  style={{ backgroundColor: TEAL }}
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-20 left-10 w-3 h-3 rounded-full"
                  style={{ backgroundColor: YELLOW }}
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 right-5 w-2 h-2 rounded-full"
                  style={{ backgroundColor: BLUE }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Timeline Style */}
      <section className="py-10 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: TEAL }}>
              Our Features
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive business analysis services designed to deliver
              clarity
            </p>
          </motion.div>

          {/* Timeline Style Features */}
          <div className="relative">
            {/* Central Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
              style={{ backgroundColor: TEAL }}
            ></div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className="inline-block px-6 py-3 rounded-full text-white font-semibold mb-3"
                    style={{ backgroundColor: index % 2 === 0 ? TEAL : BLUE }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {feature}
                  </h3>
                </div>

                {/* Center Dot */}
                <div
                  className="w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 z-10"
                  style={{ backgroundColor: index % 2 === 0 ? TEAL : BLUE }}
                ></div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver - List Style */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: BLUE }}>
              What We Deliver
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We engage stakeholders directly to capture real business
              needs—free from delivery bias
            </p>
          </motion.div>

          {/* Vertical List with Icons */}
          <div className="max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-6 mb-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${BLUE}15` }}
                >
                  <CheckCircle2 className="w-6 h-6" style={{ color: BLUE }} />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold" style={{ color: BLUE }}>
                      {item.split(" - ")[0]}
                    </span>
                    {item.includes(" - ") && (
                      <span className="text-slate-600 dark:text-slate-400">
                        {" - " + item.split(" - ")[1]}
                      </span>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits - Split Layout */}
      <section className="py-10 bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: YELLOW }}>
              Who Benefits?
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Customers */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col justify-start px-25"
            >
              <h3
                className="text-3xl font-bold mb-8 flex items-center gap-4"
                style={{ color: BLUE }}
              >
                <Users className="w-8 h-8" />
                Customers
              </h3>
              <div className="space-y-4">
                {[
                  "Gain clarity on transformation needs",
                  "Make informed decisions with confidence",
                  "Get requirements translated into business language.",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BLUE }}
                    ></div>
                    <span className="text-lg text-slate-600 dark:text-slate-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* IT/ERP Service Providers */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col justify-start"
            >
              <h3
                className="text-3xl font-bold mb-8 flex items-center gap-4"
                style={{ color: TEAL }}
              >
                <Shield className="w-8 h-8" />
                IT/ERP Service Providers
              </h3>
              <div className="space-y-4">
                {[
                  "Receive well-defined, validated requirements",
                  "Reduce rework and delivery delays",
                  "Enhance client trust and satisfaction",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: TEAL }}
                    ></div>
                    <span className="text-lg text-slate-600 dark:text-slate-300">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Models - Horizontal Layout */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: TEAL }}>
              Engagement Models
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Flexible engagement options to suit your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Direct Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="border-l-4 pl-8" style={{ borderColor: YELLOW }}>
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-8 h-8" style={{ color: YELLOW }} />
                  <h3 className="text-2xl font-bold" style={{ color: YELLOW }}>
                    Direct Engagement
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  You hire us independently to analyze your business before or
                  during your transformation journey.
                </p>
              </div>
            </motion.div>

            {/* Partner Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="border-l-4 pl-8" style={{ borderColor: TEAL }}>
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-8 h-8" style={{ color: TEAL }} />
                  <h3 className="text-2xl font-bold" style={{ color: TEAL }}>
                    Partner Engagement
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Your IT/ERP provider brings us in to ensure the analysis is
                  objective and comprehensive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: BLUE }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how BAaaS can bring clarity and strategic alignment
              to your next project.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with BAaaS
            </Button>

            {/* Contact Form */}
            {showContactForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <ContactForm
                  defaultUSP="baaas"
                  onSubmit={handleContactSubmit}
                  className="max-w-4xl mx-auto"
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

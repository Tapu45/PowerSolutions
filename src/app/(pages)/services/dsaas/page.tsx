"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Zap,
  ArrowDown,
  Building2,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  BarChart3,
  Clock,
  CheckCircle,
  Circle,
  ArrowUpRight,
  Play,
  Award,
  Globe,
} from "lucide-react";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function DSAAASPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about DSᵃᵃˢ .");
    setShowContactForm(false);
  };

  const features = [
    {
      title: "Professionally Designed Deliverables",
      description: "High-quality, structured documentation",
      icon: FileText,
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "Industry - Client Specific Standardization",
      description: "Tailored to your unique needs and standards",
      icon: Target,
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      title: "Focused on Phases and Interlinked",
      description: "Seamless connectivity across project stages",
      icon: BarChart3,
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      title: "Reusable Repository",
      description: "Centralized library for consistent reuse",
      icon: TrendingUp,
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "Future Project Friendly",
      description: "Designed for scalability and adaptability",
      icon: Lightbulb,
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
  ];

  const offerings = [
    {
      icon: "/services/dsaas/eelc.png",
      title: "End-to-End Lifecycle Coverage",
      description:
        "From scope definition to project closure—every phase is documented and standardized.",
    },
    {
      icon: "/services/dsaas/interlinked.png",
      title: "Interlinked Deliverables",
      description:
        "Each document connects to the next, ensuring seamless traceability across the lifecycle.",
    },
    {
      icon: "/services/dsaas/gcss.png",
      title: "Global & Customer-Specific Standards",
      description:
        "Aligns with industry best practices and internal frameworks for faster rollouts.",
    },
    {
      icon: "/services/dsaas/vcct.png",
      title: "Version Control & Change Tracking",
      description:
        "Every update is logged, making audits and transitions smooth and transparent.",
    },
    {
      icon: "/services/dsaas/rdr.png",
      title: "Reusable Documentation Repository",
      description:
        "Build once, reuse across rollouts, audits, and future transformations.",
    },
    {
      icon: "/services/dsaas/tpv.png",
      title: "Third-Party Validation",
      description: "Objective review ensures unbiased quality and compliance.",
    },
  ];

  const businessBenefits = [
    "Strategic Alignment: See your business goals reflected in every phase.",
    "Continuity Across Teams: No disruption even if vendors or internal teams change.",
    "Empowered SMEs: Clear, validated documents for testing, training, and transformation.",
    "Audit-Ready: Be prepared for internal reviews, external audits, or compliance checks.",
  ];

  const itBenefits = [
    "Delivery Confidence: Track progress, changes, and scope with clarity.",
    "Reduced Rework: Avoid starting from scratch during transitions or escalations.",
    "Stronger Client Trust: Transparent documentation builds credibility and accountability.",
    "Accelerated Rollouts: Standardized templates and formats speed up delivery.",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-6">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${TEAL}05 0%, transparent 30%, transparent 70%, ${BLUE}05 100%)`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
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
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-dashed opacity-10"
            style={{ borderColor: YELLOW }}
          ></motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
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
                  DSᵃᵃˢ
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-6xl font-black leading-none mb-4">
                  <span style={{ color: BLUE }}>Deliverable&nbsp;</span>
                  <span style={{ color: TEAL }}>Standardization</span>
                  <br />
                  <span
                    className="text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    as a Service
                  </span>
                </h1>
              </motion.div>

              {/* Overview */}
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
                      Overview
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      In IT product and project development, deliverables are
                      more than just documents—they are the evidence of
                      delivery, the blueprint of execution, and the foundation
                      for future transformation. Yet, many projects lose sight
                      of their importance mid-way, leading to fragmented
                      documentation, missed validations, and costly rework.
                      DSᵃᵃˢ ensures that every deliverable—from scope definition
                      to project completion—is standardized, traceable, and
                      reusable. Whether you're a customer or an IT partner, this
                      service helps maintain clarity, continuity, and control
                      throughout the lifecycle.
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
                  Get Started with DSᵃᵃˢ
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[430px] overflow-hidden rounded-3xl flex items-center justify-center">
                <Image
                  src="/services/dsaas.png"
                  alt="Deliverable Standardization as a Service"
                  fill
                  className="object-contain p-8"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none rounded-3xl" />
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
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - More Compact Design */}
      <section className="py-10 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${TEAL} 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-5xl font-bold mb-4"
              style={{ color: TEAL }}
              whileHover={{
                textShadow: [
                  `0 0 0px ${TEAL}`,
                  `0 0 30px ${TEAL}30`,
                  `0 0 0px ${TEAL}`,
                ],
              }}
              transition={{ duration: 1 }}
            >
              Our Standardization Process
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A systematic approach to deliverable standardization that delivers
              results
            </p>
          </motion.div>

          {/* More Compact Feature Grid with additional content */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                {/* Feature Icon with gradient background */}
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                  style={{
                    background: feature.gradient,
                    boxShadow: `0 5px 15px ${feature.color}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 25px ${feature.color}50`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </motion.div>

                {/* Feature Title - More Compact */}
                <h3
                  className="text-sm font-bold leading-tight max-w-[120px]"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Adding complementary content to fill space */}
        </div>
      </section>
      {/* What We Offer Section - Flip Cards */}
      <section className="py-7">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-5xl font-bold mb-3"
              style={{ color: BLUE }}
              whileHover={{
                textShadow: [
                  `0 0 0px ${BLUE}`,
                  `0 0 30px ${BLUE}30`,
                  `0 0 0px ${BLUE}`,
                ],
              }}
              transition={{ duration: 1 }}
            >
              What We Offer
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive services to ensure successful deliverable
              standardization
            </p>
          </motion.div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              // Cycle through colors for each card
              const cardColor =
                index % 3 === 0 ? TEAL : index % 3 === 1 ? BLUE : YELLOW;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group [perspective:1000px]"
                >
                  <div className="relative w-full h-64 transform-gpu transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                      <motion.div
                        className="w-26 h-26 mb-4 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={offering.icon || "/placeholder.svg"}
                          alt={offering.title}
                          fill
                          className="object-contain"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-25"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          style={{ backgroundColor: cardColor }}
                        />
                      </motion.div>
                      <h3
                        className="text-lg font-bold text-center text-slate-800 dark:text-slate-200"
                        style={{ color: cardColor }}
                      >
                        {offering.title}
                      </h3>
                    </div>

                    <div
                      className="absolute inset-0 w-full h-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, ${cardColor}10, transparent 70%),
                          radial-gradient(circle at 70% 80%, ${cardColor}15, transparent 70%)`,
                      }}
                    >
                      <h3
                        className="text-lg font-bold mb-3 text-center"
                        style={{ color: cardColor }}
                      >
                        {offering.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-md leading-relaxed text-center">
                        {offering.description}
                      </p>
                      <motion.div
                        className="w-12 h-1 mx-auto mt-4 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{ backgroundColor: cardColor }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Key Benefits Section */}
      <section className="py-7 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ color: YELLOW }}
              whileHover={{
                textShadow: [
                  `0 0 0px ${YELLOW}`,
                  `0 0 30px ${YELLOW}30`,
                  `0 0 0px ${YELLOW}`,
                ],
              }}
              transition={{ duration: 1 }}
            >
              Key Benefits
            </motion.h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
              Strategic advantages for different stakeholders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Business Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${BLUE}15` }}
                >
                  <Building2 className="w-5 h-5" style={{ color: BLUE }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: BLUE }}>
                  Benefits for Customers
                </h3>
              </div>
              <ul className="space-y-3">
                {businessBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      className="h-4 w-4 mt-0.5"
                      style={{ color: BLUE }}
                    />
                    <span className="text-slate-700 dark:text-slate-200">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* IT Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${TEAL}15` }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: TEAL }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: TEAL }}>
                  Benefits for IT / Implementation Partners
                </h3>
              </div>
              <ul className="space-y-3">
                {itBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Shield
                      className="h-4 w-4 mt-0.5"
                      style={{ color: TEAL }}
                    />
                    <span className="text-slate-700 dark:text-slate-200">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Models Section */}
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(30deg, ${TEAL} 1px, transparent 1px), linear-gradient(-30deg, ${TEAL} 1px, transparent 1px)`,
              backgroundSize: "25px 25px",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <motion.h2
              className="text-5xl font-bold mb-6"
              style={{ color: TEAL }}
              animate={{
                textShadow: [
                  `0 0 0px ${TEAL}`,
                  `0 0 30px ${TEAL}30`,
                  `0 0 0px ${TEAL}`,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Engagement Models
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Flexible engagement options to suit your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Partnered Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group flex flex-col h-full"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden flex flex-col h-full justify-between"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 30px 60px ${YELLOW}25`,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${YELLOW}, ${TEAL})`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                </motion.div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${YELLOW}15` }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: `${YELLOW}25`,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Users className="w-8 h-8" style={{ color: YELLOW }} />
                      </motion.div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: YELLOW }}
                        >
                          Partnered Service
                        </h3>
                        <motion.div
                          className="w-16 h-1 rounded-full"
                          style={{ backgroundColor: YELLOW }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "4rem" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        ></motion.div>
                      </div>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Embedded within IT vendor delivery frameworks.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Third-Party Extension */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group flex flex-col h-full"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden flex flex-col h-full justify-between"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 30px 60px ${TEAL}25`,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                </motion.div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${TEAL}15` }}
                        whileHover={{
                          scale: 1.1,
                          rotate: -5,
                          backgroundColor: `${TEAL}25`,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Globe className="w-8 h-8" style={{ color: TEAL }} />
                      </motion.div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: TEAL }}
                        >
                          Third-Party Extension
                        </h3>
                        <motion.div
                          className="w-16 h-1 rounded-full"
                          style={{ backgroundColor: TEAL }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "4rem" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        ></motion.div>
                      </div>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Independent validation and documentation for customers.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hybrid Model */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative group flex flex-col h-full"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden flex flex-col h-full justify-between"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 30px 60px ${BLUE}25`,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE}, ${YELLOW})`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                </motion.div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-6 mb-6">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: `${BLUE}15` }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          backgroundColor: `${BLUE}25`,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Award className="w-8 h-8" style={{ color: BLUE }} />
                      </motion.div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: BLUE }}
                        >
                          Hybrid Model
                        </h3>
                        <motion.div
                          className="w-16 h-1 rounded-full"
                          style={{ backgroundColor: BLUE }}
                          initial={{ width: 0 }}
                          whileInView={{ width: "4rem" }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        ></motion.div>
                      </div>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Collaborative model between customer and IT partner.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-7 bg-slate-50 dark:bg-slate-800">
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
              Let's discuss how DSᵃᵃˢ can bring clarity and standardization to
              your deliverables.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with DSᵃᵃˢ
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
                  defaultUSP="dsaas"
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

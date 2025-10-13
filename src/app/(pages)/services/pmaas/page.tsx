"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import {
  ArrowRight,
  Star,
  Shield,
  Zap,
  ArrowDown,
  Building2,
  Briefcase,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  BarChart3,
  Clock,
} from "lucide-react";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function PMAASPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about PMAAS.");
    setShowContactForm(false);
  };

  const features = [
    {
      title: "Accelerated Time-to-Value",
      description: "Rapid deployment and realization of product benefits",
      icon: Clock,
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "Reduced Operational Overhead",
      description: "Streamlined processes to minimize maintenance costs",
      icon: Target,
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      title: "Improved Product Quality",
      description:
        "Enhanced reliability and user satisfaction through rigorous management",
      icon: BarChart3,
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      title: "Scalable Engagement",
      description: "Flexible models to adapt to changing business needs",
      icon: TrendingUp,
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "Strategic Alignment",
      description:
        "Ensuring products align with business objectives and market trends",
      icon: FileText,
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      title: "Continuous Innovation",
      description: "Ongoing improvements and feature enhancements",
      icon: Lightbulb,
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
  ];

  const offerings = [
    {
      icon: "/services/pmaas/i.png",
      title: "Implementation",
      description: "Tailored deployment with stakeholder alignment",
    },
    {
      icon: "/services/pmaas/s.png",
      title: "Support",
      description: "Reliable, responsive assistance with clear accountability",
    },
    {
      icon: "/services/pmaas/e.png",
      title: "Enhancement",
      description:
        "Continuous feature evolution based on user feedback and business needs",
    },
    {
      icon: "/services/pmaas/m.png",
      title: "Modernization",
      description: "Architecture upgrades for scalability and performance",
    },
    {
      icon: "/services/pmaas/in.png",
      title: "Integration",
      description: "Seamless connectivity with internal and external systems",
    },
    {
      icon: "/services/pmaas/lm.png",
      title: "Lifecycle Management",
      description: "Governance-led oversight from ideation to retirement",
    },
  ];

  const businessBenefits = [
    "Reduced Operational Overhead",
    "Scalable Engagement",
    "Improved Governance & Visibility",
    "Accelerated Time-to-Value",
  ];

  const itBenefits = [
    "Integration Support",
    "Better Collaboration",
    "Enhanced Product Outcomes",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden pt-23 sm:pt-16">
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 w-full"
            >
              {/* Service Badge - hidden on mobile, visible on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden lg:inline-flex items-center gap-2 mb-6 sm:mb-8"
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
                  PMAAS
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 sm:mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-4">
                  <span style={{ color: TEAL }}>Product</span>{" "}
                  <span style={{ color: BLUE }}>Management</span>
                  <div
                    className="text-xl sm:text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    as a Service
                  </div>
                </h1>
              </motion.div>

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-1 h-12 sm:h-16 rounded-full mt-2"
                    style={{ backgroundColor: TEAL }}
                  ></div>
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: TEAL }}
                    >
                      Overview
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      Today technology is Business and Business is Technology.
                      It's a new normal for the Business to adapt the changes
                      and keep their IT Products and Applications upto date
                      chase in the Industry. We offer Product Management as a
                      Service to help businesses manage their ERP and business
                      applications with precision, agility, and strategic
                      foresight. Whether it's a packaged software product or a
                      custom-built solution, we take full ownership—from
                      implementation to modernization—so you can focus on
                      growing your business.
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
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    color: "white",
                  }}
                >
                  Get Started with PMAAS
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 w-full mb-8 lg:mb-0"
            >
              {/* Service Badge - visible only on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex lg:hidden items-center gap-2 mb-4"
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
                  PMAAS
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-3xl flex items-center justify-center">
                <Image
                  src="/services/pmaas.png"
                  alt="Product Management as a Service"
                  fill
                  className="object-contain"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{
                    background: `radial-gradient(600px 240px at 20% 20%, ${BLUE}22, transparent 60%),
          radial-gradient(600px 240px at 80% 80%, ${YELLOW}22, transparent 60%),
          radial-gradient(800px 260px at 60% 40%, ${TEAL}18, transparent 65%)`,
                  }}
                />
                {/* Animated Dots */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-10 right-10 w-4 h-4 rounded-full"
                  style={{ backgroundColor: TEAL }}
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                  className="absolute bottom-20 left-10 w-3 h-3 rounded-full"
                  style={{ backgroundColor: YELLOW }}
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
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

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
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
              Our Product Management Process
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A systematic approach to product management that delivers results
            </p>
          </motion.div>

          {/* More Compact Feature Grid with additional content */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-10">
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
              Comprehensive services to ensure successful product management
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
                  Benefits for Business
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
                    <Star className="h-4 w-4 mt-0.5" style={{ color: BLUE }} />
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
                  Benefits for Internal IT/IT Service Partner
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
        {/* Background Elements */}
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
            className="text-center mb-16"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced BYBS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative group"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-10 border border-slate-200 dark:border-slate-600 overflow-hidden"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 30px 60px ${YELLOW}25`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-8 right-8 w-24 h-24 border-2 border-dashed"
                    style={{ borderColor: YELLOW }}
                  ></motion.div>
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-8 left-8 w-16 h-16 border-2 border-dashed"
                    style={{ borderColor: YELLOW }}
                  ></motion.div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${YELLOW}, ${TEAL})`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                </motion.div>

                <div className="relative z-10">
                  {/* Enhanced Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${YELLOW}15` }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: `${YELLOW}25`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Star className="w-8 h-8" style={{ color: YELLOW }} />
                    </motion.div>
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: YELLOW }}
                      >
                        BYBS - Bring Your Business Story Model
                      </h3>
                      <motion.div
                        className="w-20 h-1 rounded-full"
                        style={{ backgroundColor: YELLOW }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    We take complete responsibility for your product—from
                    planning and implementation to support, enhancement, and
                    retirement. We collaborate with your internal teams, sharing
                    responsibilities across product strategy, execution, and
                    governance.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced BYOS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative group"
            >
              <motion.div
                className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-10 border border-slate-200 dark:border-slate-600 overflow-hidden"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 30px 60px ${TEAL}25`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-8 right-8 w-20 h-20 border-2 border-dashed"
                    style={{ borderColor: TEAL }}
                  ></motion.div>
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute bottom-8 left-8 w-14 h-14 border-2 border-dashed"
                    style={{ borderColor: TEAL }}
                  ></motion.div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                </motion.div>

                <div className="relative z-10">
                  {/* Enhanced Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: `${TEAL}15` }}
                      whileHover={{
                        scale: 1.1,
                        rotate: -5,
                        backgroundColor: `${TEAL}25`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Zap className="w-8 h-8" style={{ color: TEAL }} />
                    </motion.div>
                    <div>
                      <h3
                        className="text-2xl font-bold mb-2"
                        style={{ color: TEAL }}
                      >
                        BYOS - Bring Your Own Solution Model
                      </h3>
                      <motion.div
                        className="w-20 h-1 rounded-full"
                        style={{ backgroundColor: TEAL }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    Engage us for specific phases or challenges—modernization,
                    integration, enhancement—without long-term commitments. Our
                    experts integrate with your teams to drive product outcomes
                    while maintaining alignment with your business goals.
                  </p>
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
              Let's discuss how PMAAS can bring clarity and strategic alignment
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
              Get Started with PMAAS
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
                  defaultUSP="pmaas"
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

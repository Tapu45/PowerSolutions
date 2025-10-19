"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import {
  ArrowRight,
  ArrowDown,
  Target,
  TrendingUp,
  Database,
  Settings,
  Users,
  BarChart3,
  Lightbulb,
  Shield,
  Search,
  Layers,
  PlayCircle,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function ERPConsultingPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about ERP Consulting.");
    setShowContactForm(false);
  };

  const erpSystems = [
    {
      name: "Oracle E-Business Suite",
      icon: "/assets/services/erp/System Configuration.png",
    },
    {
      name: "Oracle Fusion Cloud",
      icon: "/assets/services/erp/FIT & GAP Analysis.png",
    },
    {
      name: "IFS",
      icon: "/assets/services/erp/Requirement Gathering.png",
    },
    {
      name: "Oracle NetSuite",
      icon: "/assets/services/erp/Conference Room Piloting.png",
    },
    {
      name: "SAP Business One",
      icon: "/assets/services/erp/User Training.png",
    },
    {
      name: "Microsoft Dynamics",
      icon: "/assets/services/erp/Cutover Planning.png",
    },
  ];

  const serviceOfferings = [
    {
      icon: "/services/aeaas.png",
      title: "Adaption Evaluation as a Service",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      icon: "/services/ataas.png",
      title: "Application Testing as a Service",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      icon: "/services/bsa.png",
      title: "Business Analysis as a Service",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      icon: "/services/cmaas.png",
      title: "Change Management as a Service",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      icon: "/services/dmaas.png",
      title: "Data Migration as a Service",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      icon: "/services/dsaas.png",
      title: "Data Strategy as a Service",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      icon: "/services/faaas.png",
      title: "Functional Analysis as a Service",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      icon: "/services/paaas.png",
      title: "Process Analysis as a Service",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      icon: "/services/pmaas.png",
      title: "Project Management as a Service",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      icon: "/services/tmaas.png",
      title: "Training Management as a Service",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
  ];

  const methodologySteps = [
    {
      id: "identify",
      title: "Identify",
      description: "Diagnose with Precision",
      icon: Target,
      color: YELLOW,
      logo: "/assets/methodology/identify.png",
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      id: "implement",
      title: "Implement",
      description: "Engineer Solutions That Endure",
      icon: Settings,
      color: TEAL,
      logo: "/assets/methodology/implement.png",
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      id: "intensify",
      title: "Intensify",
      description: "Maximize Value. Multiply Impact",
      icon: TrendingUp,
      color: BLUE,
      logo: "/assets/methodology/intensify.png",
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
  ];

  const engagementModels = [
    {
      title: "BYOS - Build Your Own Solution",
      description:
        "Custom ERP solutions tailored to your specific business needs",
      logo: "/solutions2/BYOS.png",
      link: "/solutions/byos",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "BYBS - Build Your Business Solution",
      description:
        "Comprehensive business solutions built around your ERP requirements",
      logo: "/solutions2/BYBS.png",
      link: "/solutions/bybs",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start lg:items-center overflow-hidden pt-24 sm:pt-16">
        {/* Background Elements */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${TEAL}05 0%, transparent 30%, transparent 70%, ${BLUE}05 100%)`,
          }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          />
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
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 w-full"
            >
              {/* Service Badge - hidden on mobile, visible on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="hidden lg:inline-flex items-center gap-2 mb-6 sm:mb-8"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: TEAL }}
                />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Services
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold" style={{ color: BLUE }}>
                  ERP Consulting
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none mb-4">
                  <span style={{ color: TEAL }}>ERP</span>{" "}
                  <span style={{ color: BLUE }}>Consulting</span>
                  <div
                    className="text-xl sm:text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    Liberate Your Business
                  </div>
                </h1>
              </motion.div>

              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-1 h-12 sm:h-16 rounded-full mt-2"
                    style={{ backgroundColor: TEAL }}
                  />
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: TEAL }}
                    >
                      Introduction
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      At [solutions]ⁿ, we don't just consult—we liberate. Our
                      ERP services are built to dismantle the rigidity, opacity,
                      and cost inflation of traditional consulting models.
                      Whether you're an enterprise or SMB, we help you reclaim
                      control, clarity, and confidence in your ERP journey.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    color: "white",
                  }}
                >
                  Get Started with ERP Consulting
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 w-full mb-8 lg:mb-0"
            >
              {/* Service Badge - visible only on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex lg:hidden items-center gap-2 mb-4"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: TEAL }}
                />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Services
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold" style={{ color: BLUE }}>
                  ERP Consulting
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[430px] overflow-hidden rounded-3xl flex items-center justify-center shadow-2xl">
                <Image
                  src="/assets/services/erp.png"
                  alt="ERP Consulting Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Competency Section */}
      <section className="py-10 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${TEAL} 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          />
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
              Our Competency
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              With a global presence and deep expertise across leading ERP
              systems, our team has successfully re-engineered and transformed
              over 150 customer organizations.
            </p>
          </motion.div>

          {/* ERP Systems Logos - Square backgrounds matching icon shape */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
            {erpSystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
                    boxShadow: `0 5px 15px ${BLUE}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 25px ${BLUE}50`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={system.icon}
                    alt={system.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
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
              Our Offerings
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Leveraging millions of hours analyzing the performance data and
              shortcomings of traditional ERP consulting, we radically
              reinvented our service model.
            </p>
          </motion.div>

          {/* Service Offerings Grid - Square backgrounds matching icon shape */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {serviceOfferings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
                  style={{
                    background: offering.gradient,
                    boxShadow: `0 5px 15px ${offering.color}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 25px ${offering.color}50`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={offering.icon}
                    alt={offering.title}
                    width={48}
                    height={48}
                    className="object-contain p-1"
                  />
                </motion.div>
                <h3
                  className="text-sm font-bold leading-tight max-w-[120px]"
                  style={{ color: offering.color }}
                >
                  {offering.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="py-7 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-5xl font-bold mb-4"
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
              Our Approach
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              The precision of our 3i Methodology is forged from extensive
              global experience. By mastering and integrating the core strengths
              of all leading frameworks.
            </p>
          </motion.div>

          {/* 3i Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-2">
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: step.gradient }}
                  />

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
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ borderColor: step.color }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Logo */}
                    <div className="w-20 h-20 mx-auto mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Image
                        src={step.logo}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm font-semibold group-hover:text-slate-200 transition-colors duration-300"
                      style={{ color: step.color }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
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
              Ultimate Solution Proposed
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We offer our clients to choose one of our Proprietary solutions
              that will address their need for ERP Consulting Services
            </p>
          </motion.div>

          {/* Engagement Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <Link href={model.link}>
                  <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Animated Background Elements */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: model.gradient }}
                    />

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
                      className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ borderColor: model.color }}
                    />

                    <div className="relative z-10 text-center">
                      {/* Logo */}
                      <div className="w-24 h-24 mx-auto mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Image
                          src={model.logo}
                          alt={model.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300"
                        style={{ color: model.color }}
                      >
                        {model.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {model.description}
                      </p>

                      {/* CTA Arrow */}
                      <div
                        className="flex items-center justify-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white"
                        style={{ color: model.color }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-7 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: BLUE }}
            >
              Ready to Liberate Your ERP Journey?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our ERP consulting services can help you reclaim
              control, clarity, and confidence in your ERP transformation.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with ERP Consulting
            </Button>

            {/* Contact Form */}
            {showContactForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <ContactForm
                  defaultUSP="erp-consulting"
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

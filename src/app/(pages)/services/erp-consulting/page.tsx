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
      logo: "/assets/services/oracle-ebs.png",
    },
    { name: "Oracle Fusion Cloud", logo: "/assets/services/oracle-fusion.png" },
    { name: "IFS", logo: "/assets/services/ifs.png" },
    { name: "Oracle NetSuite", logo: "/assets/services/netsuite.png" },
    { name: "SAP Business One", logo: "/assets/services/sap-b1.png" },
    { name: "Microsoft Dynamics", logo: "/assets/services/dynamics.png" },
    { name: "Odoo", logo: "/assets/services/odoo.png" },
    { name: "Custom ERP", logo: "/assets/services/custom-erp.png" },
  ];

  const serviceOfferings = [
    {
      icon: "/services/aeaas.png",
      title: "Adaption Evaluation as a Service",
      description:
        "Measure how effectively your organization embraces ERP transformation",
    },
    {
      icon: "/services/ataas.png",
      title: "Application Testing as a Service",
      description:
        "Ensure your ERP applications work flawlessly with business processes",
    },
    {
      icon: "/services/baaas.png",
      title: "Business Analysis as a Service",
      description:
        "Deep dive into business requirements and process optimization",
    },
    {
      icon: "/services/cmaas.png",
      title: "Change Management as a Service",
      description: "Guide your team through successful ERP adoption and change",
    },
    {
      icon: "/services/dmaas.png",
      title: "Data Migration as a Service",
      description: "Seamlessly migrate your data to new ERP systems",
    },
    {
      icon: "/services/dsaas.png",
      title: "Data Strategy as a Service",
      description: "Develop comprehensive data strategies for ERP success",
    },
    {
      icon: "/services/faaas.png",
      title: "Functional Analysis as a Service",
      description: "Analyze and optimize ERP functional requirements",
    },
    {
      icon: "/services/paaas.png",
      title: "Process Analysis as a Service",
      description: "Streamline and optimize business processes for ERP",
    },
    {
      icon: "/services/pmaas.png",
      title: "Project Management as a Service",
      description: "Expert project management for ERP implementations",
    },
    {
      icon: "/services/tmaas.png",
      title: "Training Management as a Service",
      description: "Comprehensive training programs for ERP success",
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
    },
    {
      id: "implement",
      title: "Implement",
      description: "Engineer Solutions That Endure",
      icon: Settings,
      color: TEAL,
      logo: "/assets/methodology/implement.png",
    },
    {
      id: "intensify",
      title: "Intensify",
      description: "Maximize Value. Multiply Impact",
      icon: TrendingUp,
      color: BLUE,
      logo: "/assets/methodology/intensify.png",
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
    },
    {
      title: "BYBS - Build Your Business Solution",
      description:
        "Comprehensive business solutions built around your ERP requirements",
      logo: "/solutions2/BYBS.png",
      link: "/solutions/bybs",
      color: BLUE,
    },
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
                  ERP Consulting
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
                  Get Started with ERP Consulting
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
                  ERP Consulting
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[430px] overflow-hidden rounded-3xl flex items-center justify-center">
                <Image
                  src="/assets/services/erp.jpg"
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

      {/* Our Competency Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
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
            className="text-center mb-12"
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
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              With a global presence and deep expertise across leading ERP
              systems, our team has successfully re-engineered and transformed
              over 150 customer organizations. Clients consistently laud the
              successful ERP transformation journey delivered by our
              specialists.
            </p>
          </motion.div>

          {/* ERP Systems Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
            {erpSystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-md group-hover:shadow-lg transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 25px ${BLUE}30`,
                  }}
                >
                  <Database className="w-8 h-8" style={{ color: BLUE }} />
                </motion.div>
                <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                  {system.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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
              Our Offerings
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              Leveraging millions of hours analyzing the performance data and
              shortcomings of traditional ERP consulting, we radically
              reinvented our service model. We now offer specialized, modular
              solutions to deliver unmatched transparency, flexibility, and
              affordability for every customer.
            </p>
          </motion.div>

          {/* Service Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {serviceOfferings.map((offering, index) => {
              const cardColor =
                index % 3 === 0 ? TEAL : index % 3 === 1 ? BLUE : YELLOW;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="relative w-full h-48 transform-gpu transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                      <motion.div
                        className="w-16 h-16 mb-3 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={offering.icon || "/placeholder.svg"}
                          alt={offering.title}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      <h3
                        className="text-sm font-bold text-center text-slate-800 dark:text-slate-200 leading-tight"
                        style={{ color: cardColor }}
                      >
                        {offering.title}
                      </h3>
                    </div>

                    {/* Back of card */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, ${cardColor}10, transparent 70%),
                          radial-gradient(circle at 70% 80%, ${cardColor}15, transparent 70%)`,
                      }}
                    >
                      <h3
                        className="text-sm font-bold mb-2 text-center leading-tight"
                        style={{ color: cardColor }}
                      >
                        {offering.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              The precision of our 3i Methodology is forged from extensive
              global experience. By mastering and integrating the core strengths
              of all leading frameworks—from AIM and OUM to Agile and
              Waterfall—we ensure every project phase is covered, resulting in a
              robust, transparent, and streamlined process for identifying
              needs, implementing solutions, and intensifying organizational
              impact.
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
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: `0 30px 60px ${step.color}25`,
                  }}
                >
                  {/* Animated Background */}
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
                      className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed"
                      style={{ borderColor: step.color }}
                    ></motion.div>
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Logo */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={step.logo}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm font-semibold"
                      style={{ color: step.color }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
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
              Ultimate Solution Proposed
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
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
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group"
              >
                <Link href={model.link}>
                  <motion.div
                    className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden cursor-pointer"
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: `0 30px 60px ${model.color}25`,
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
                        className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed"
                        style={{ borderColor: model.color }}
                      ></motion.div>
                    </div>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${model.color}, ${TEAL})`,
                        padding: "3px",
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl"></div>
                    </motion.div>

                    <div className="relative z-10 text-center">
                      {/* Logo */}
                      <motion.div
                        className="w-24 h-24 mx-auto mb-6 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={model.logo}
                          alt={model.title}
                          fill
                          className="object-contain"
                        />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-4"
                        style={{ color: model.color }}
                      >
                        {model.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {model.description}
                      </p>

                      {/* CTA Arrow */}
                      <motion.div
                        className="flex items-center justify-center gap-2 text-sm font-medium"
                        style={{ color: model.color }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: BLUE }}>
              Ready to Liberate Your ERP Journey?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our ERP consulting services can help you reclaim
              control, clarity, and confidence in your ERP transformation.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
                transition={{ duration: 0.5 }}
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

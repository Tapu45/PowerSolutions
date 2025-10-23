"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import {
  ArrowRight,
  ArrowDown,
  Target,
  TrendingUp,
  Settings,
} from "lucide-react";
import Link from "next/link";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

// Lazy Image Component with intersection observer
const LazyImage = ({ src, alt, width, height, className, ...props }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default function MaintenanceSupportPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about Maintenance & Support.");
    setShowContactForm(false);
  };

  const competencyIcons = [
    {
      name: "Cutover Support",
      icon: "/assets/services/support/Cutover Support.png",
    },
    {
      name: "Hypercare Support",
      icon: "/assets/services/support/Hypercare Support.png",
    },
    {
      name: "Implementation Support",
      icon: "/assets/services/support/Implementation Support.png",
    },
    {
      name: "Migration Support",
      icon: "/assets/services/support/Migration Support.png",
    },
    {
      name: "Production Support",
      icon: "/assets/services/support/Production Support.png",
    },
    {
      name: "Transition Support",
      icon: "/assets/services/support/Transition Support.png",
    },
    {
      name: "Warranty Support",
      icon: "/assets/services/support/Warranty Support.png",
    },
  ];

  const supportOfferings = [
    {
      title: "Implementation Support (Pre-Go-Live assistance)",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title:
        "Cutover Support and Transition Support (Ensuring seamless platform switchover)",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      title:
        "Go-Live Support (Immediate, high-intensity coverage during launch)",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      title: "Hyper Care Support (Intensive post-launch stabilization)",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "Warranty Support (Extended assurance period)",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
    {
      title: "Production Support (Ongoing issue resolution and stabilization)",
      color: YELLOW,
      gradient: `linear-gradient(135deg, ${YELLOW}20, ${YELLOW}05)`,
    },
    {
      title:
        "Migration Support (Expertise for platform upgrades and environment moves)",
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
      description: "Custom solutions tailored to your specific business needs",
      logo: "/solutions2/BYOS.png",
      link: "/usps/byos",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "BYBS - Build Your Business Solution",
      description: "Comprehensive business solutions for your requirements",
      logo: "/solutions2/BYBS.png",
      link: "/usps/bybs",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-4 sm:py-6">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-16 pb-12 sm:pb-0">
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
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 border-2 border-dashed opacity-10"
            style={{ borderColor: TEAL }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 sm:bottom-32 left-8 sm:left-16 w-16 sm:w-24 h-16 sm:h-24 border-2 border-dashed opacity-10"
            style={{ borderColor: YELLOW }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
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
                className="hidden lg:inline-flex items-center gap-2 mb-4 sm:mb-6 lg:mb-8"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: TEAL }}
                />
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Services
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                <span
                  className="text-xs sm:text-sm font-bold"
                  style={{ color: BLUE }}
                >
                  Support & Maintenance
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-4 sm:mb-6 lg:mb-8"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight sm:leading-none mb-2 sm:mb-4">
                  <span style={{ color: TEAL }}>Support</span>{" "}
                  <span style={{ color: BLUE }}>& Maintenance</span>
                  <div
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    Zero Downtime Assurance
                  </div>
                </h1>
              </motion.div>

              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-4 sm:mb-6 lg:mb-8"
              >
                <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                  <div
                    className="w-1 h-10 sm:h-12 lg:h-16 rounded-full mt-1 sm:mt-2 flex-shrink-0"
                    style={{ backgroundColor: TEAL }}
                  />
                  <div>
                    <h3
                      className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2"
                      style={{ color: TEAL }}
                    >
                      Introduction
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      You cannot afford downtime or complexity in your
                      mission-critical systems. The burden of managing and
                      optimizing complex IT Applications and ERP Systems can
                      distract your entire organization, from executive
                      leadership to the end-user. Our Support and Maintenance
                      Service is designed to eliminate this distraction,
                      delivering reliable, end-to-end operational assurance so
                      your business can focus 100% on its Core Business
                      Functions.
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
                  className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                    color: "white",
                  }}
                >
                  Get Started with Support & Maintenance
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 w-full mb-6 sm:mb-8 lg:mb-0"
            >
              {/* Service Badge - visible only on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex lg:hidden items-center gap-2 mb-3 sm:mb-4"
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: TEAL }}
                />
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                  Services
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                <span
                  className="text-xs sm:text-sm font-bold"
                  style={{ color: BLUE }}
                >
                  Support & Maintenance
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[430px] overflow-hidden rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <Image
                  src="/assets/services/maintenance.png"
                  alt="Support & Maintenance Services"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Commitment Section */}
      <section className="py-8 sm:py-12 lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 lg:mb-1"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: BLUE }}
            >
              Core Commitment
            </motion.h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Our core commitment is simple: Zero Downtime is our standard,
                and Business As Usual (BAU) is your reality. We provide
                comprehensive, full-lifecycle operational assurance, enabling
                your entire organization to focus on its core business
                functions. We divide our service into two specialized areas,
                covering every aspect of application and ERP health:
                Comprehensive Project & Phased Support, Technical System
                Maintenance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Competency Section */}
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 lg:mb-10"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: BLUE }}
            >
              Our Competency
            </motion.h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-300 px-4">
              With a global presence and deep expertise, our team ensures
              reliable support for your systems.
            </p>
          </motion.div>

          {/* Competency Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {competencyIcons.map((icon, index) => (
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
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mb-2 sm:mb-3 overflow-hidden"
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
                  <LazyImage
                    src={icon.icon}
                    alt={icon.name}
                    width={48}
                    height={48}
                    className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                  />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {icon.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 lg:mb-10"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: TEAL }}
            >
              Our Offerings
            </motion.h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-300 px-4">
              Comprehensive support services to ensure zero downtime and
              operational excellence.
            </p>
          </motion.div>

          {/* Support Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {supportOfferings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl"
                style={{
                  background: offering.gradient,
                  boxShadow: `0 5px 15px ${offering.color}30`,
                }}
                whileHover={{ y: -5 }}
              >
                <h3
                  className="text-xs sm:text-sm font-bold leading-tight"
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
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 lg:mb-10"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: YELLOW }}
            >
              Our Approach
            </motion.h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-300 px-4 max-w-5xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-2">
                  {/* Animated Background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: step.gradient }}
                  />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ borderColor: step.color }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <LazyImage
                        src={step.logo}
                        alt={step.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs sm:text-sm font-semibold group-hover:text-slate-200 transition-colors duration-300"
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
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 lg:mb-10"
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: BLUE }}
            >
              Ultimate Solution Proposed
            </motion.h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-300 px-4 max-w-4xl mx-auto">
              We offer our clients to choose one of our Proprietary solutions
              that will address their need for Support & Maintenance Services
            </p>
          </motion.div>

          {/* Engagement Models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                  <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-600 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Animated Background Elements */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: model.gradient }}
                    />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ borderColor: model.color }}
                    />

                    <div className="relative z-10 text-center">
                      {/* Logo */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <LazyImage
                          src={model.logo}
                          alt={model.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300"
                        style={{ color: model.color }}
                      >
                        {model.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-slate-200">
                        {model.description}
                      </p>

                      {/* CTA Arrow */}
                      <div
                        className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white"
                        style={{ color: model.color }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
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
      <section className="py-8 sm:py-10 lg:py-12 bg-slate-50 dark:bg-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
              style={{ color: BLUE }}
            >
              Ready to Ensure Zero Downtime?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how our Support & Maintenance services can deliver
              reliable operational assurance.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with Support & Maintenance
            </Button>

            {/* Contact Form */}
            {showContactForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 sm:mt-8"
              >
                <ContactForm
                  defaultUSP="maintenance-and-support"
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

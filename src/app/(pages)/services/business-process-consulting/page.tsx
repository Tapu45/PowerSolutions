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

export default function BusinessProcessConsultingPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about Business Process Consulting.");
    setShowContactForm(false);
  };

  const processFunctions = [
    {
      name: "Procure to Pay",
      icon: "/assets/services/process/Procure to Pay.png",
    },
    {
      name: "Order to Cash",
      icon: "/assets/services/process/Order to Cash.png",
    },
    {
      name: "Hire to Retire",
      icon: "/assets/services/process/Hire to Retire.png",
    },
    {
      name: "Record to Report",
      icon: "/assets/services/process/Record to Report.png",
    },
    {
      name: "Forecast to Plant",
      icon: "/assets/services/process/Forecast to Plant.png",
    },
    {
      name: "Source to Pay",
      icon: "/assets/services/process/Source to Pay.png",
    },
    {
      name: "Acquire to Retire",
      icon: "/assets/services/process/Acquire to Retire.png",
    },
    {
      name: "Plan to Forecast",
      icon: "/assets/services/process/Plan to Forecast.png",
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
      link: "/usps/byos",
      color: TEAL,
      gradient: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
    },
    {
      title: "BYBS - Build Your Business Solution",
      description:
        "Comprehensive business solutions for your ERP requirements",
      logo: "/solutions2/BYBS.png",
      link: "/usps/bybs",
      color: BLUE,
      gradient: `linear-gradient(135deg, ${BLUE}20, ${BLUE}05)`,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-6">
      {/* Hero Section - Simplified */}
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
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-dashed opacity-10"
            style={{ borderColor: TEAL }}
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-32 left-16 w-24 h-24 border-2 border-dashed opacity-10"
            style={{ borderColor: YELLOW }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6  relative z-10 w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content - Only first paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 w-full"
            >
              {/* Service Badge */}
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
                  Business Process Consulting
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
                  <span style={{ color: TEAL }}>Process</span>{" "}
                  <span style={{ color: BLUE }}>Consulting</span>
                  <div
                    className="text-xl sm:text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    Eliminate Grey Areas
                  </div>
                </h1>
              </motion.div>

              {/* First Paragraph Only */}
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
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      In the journey of digital transformation, a critical flaw
                      exists: the "grey area" between the theoretical ideal of a
                      designed process and the actual process followed by the
                      organization. This gap acts as a black hole, absorbing
                      value, undermining efficiency, and becoming the single
                      greatest barrier to transformation success. Our Process
                      Consulting Service is specifically engineered to eliminate
                      these grey areas and ensure total alignment between design
                      and execution.
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
                  Get Started with Process Consulting
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 w-full mb-8 lg:mb-0"
            >
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
                  Business Process Consulting
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[330px] overflow-hidden rounded-3xl flex items-center justify-center">
                <Image
                  src="/assets/services/process.png"
                  alt="Business Process Consulting Services"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
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

      {/* Our Competency Section - Reorganized */}
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
            >
              Our Competency
            </motion.h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Process Functions Icons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6">
                {processFunctions.map((func, index) => (
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
                      <LazyImage
                        src={func.icon}
                        alt={func.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </motion.div>
                    <h3
                      className="text-sm font-bold leading-tight"
                      style={{ color: BLUE }}
                    >
                      {func.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Second Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-1 h-full rounded-full min-h-[400px]"
                  style={{ backgroundColor: TEAL }}
                />
                <div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: TEAL }}
                  >
                    Successful Transformation
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    Successful transformation requires balancing the
                    organizational blueprint with the workforce experience. Our
                    approach ensures:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: BLUE }}
                      >
                        Optimal Functions
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        We align processes with the best, industry-proven
                        organizational Functions to ensure structural integrity
                        and the deployment of reliable solutions.
                      </p>
                    </div>

                    <div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: BLUE }}
                      >
                        Enabling Features
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        We focus on the system Features that empower the
                        workforce, driving faster process completion, higher
                        user satisfaction, and seamless adoption.
                      </p>
                    </div>

                    <div>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: BLUE }}
                      >
                        Measurable Optimization
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-3">
                        We optimize processes for measurable outputs and future
                        resilience, specifically targeting:
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            >
              Our Approach
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
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
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ borderColor: step.color }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Logo */}
                    <div className="w-20 h-20 mx-auto mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <LazyImage
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
            >
              Ultimate Solution Proposed
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We offer our clients to choose one of our Proprietary solutions
              that will address their need for Process Consulting Services
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
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ borderColor: model.color }}
                    />

                    <div className="relative z-10 text-center">
                      {/* Logo */}
                      <div className="w-24 h-24 mx-auto mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <LazyImage
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
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6  transition-colors duration-300">
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
              Ready to Eliminate Grey Areas?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our process consulting services can help you
              achieve total alignment between design and execution.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with Process Consulting
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
                  defaultUSP="business-process-consulting"
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

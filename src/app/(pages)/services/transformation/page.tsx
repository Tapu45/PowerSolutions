"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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

export default function TransformationConsultingPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about Transformation Consulting.");
    setShowContactForm(false);
  };

  const transformationAspects = [
    {
      name: "Necessity & Cost",
      description:
        "Determining if and when transformation is required, and accurately projecting the total cost and life expectancy of the transformed process.",
      icon: "/assets/transformation/necessity.png",
    },
    {
      name: "Readiness & Life Cycle",
      description:
        "Assessing the readiness of resources and mapping the expected life cycle, including anticipating the next necessary change.",
      icon: "/assets/transformation/readiness.png",
    },
    {
      name: "Impact & Monitoring",
      description:
        "Defining clear starting points, establishing effective stop points, and providing continuous monitoring to measure the true return on transformation.",
      icon: "/assets/transformation/impact.png",
    },
  ];

  const enterpriseSupports = [
    {
      name: "People Transformation",
      icon: "/assets/services/transformation/People Transformation.png",
    },
    {
      name: "Process Transformation",
      icon: "/assets/services/transformation/Process Transformation.png",
    },
    {
      name: "Digital Transformation",
      icon: "/assets/services/transformation/Digital Transformation.png",
    },
    {
      name: "Organization Transformation",
      icon: "/assets/services/transformation/organization.png",
    },
    {
      name: "Technology Transformation",
      icon: "/assets/services/transformation/technology.png",
    },
    {
      name: "Business Transformation",
      icon: "/assets/services/transformation/Business Transformation.png",
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
            {/* Left Content - First paragraph */}
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
                  Transformation Consulting
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
                  <span style={{ color: TEAL }}>Transformation</span>{" "}
                  <span style={{ color: BLUE }}>Consulting</span>
                  <div
                    className="text-xl sm:text-3xl md:text-4xl font-bold mt-2"
                    style={{ color: YELLOW }}
                  >
                    Strategic Clarity for Lasting Impact
                  </div>
                </h1>
              </motion.div>

              {/* First Paragraph */}
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
                      The term "transformation" has become a decorative
                      buzzword, often misinterpreted as simple change.
                      Organizations frequently rush into projects without
                      answering the essential questions: Is this transformation
                      necessary? What is the true cost? Are our resources truly
                      ready? What is the expected Return from the Transformation
                      (ROT)? This rush, driven by industry trends rather than
                      strategic analysis, often leads to wasted investment and
                      short-lived results.
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
                  Get Started with Transformation Consulting
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
                  Transformation Consulting
                </span>
              </motion.div>
              <div className="relative aspect-[5/4] w-full h-[220px] sm:h-[300px] lg:h-[430px] overflow-hidden rounded-3xl flex items-center justify-center">
                <Image
                  src="/assets/services/transformation.png"
                  alt="Transformation Consulting Services"
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

      {/* Transformation Consulting Aspects Section */}
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
              Our Transformation Consulting
            </motion.h2>
          </motion.div>

          {/* Second Paragraph and Three Aspects */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
                We intervene to guide our customers through the genuine process
                of transformation. Our service is not about implementing
                arbitrary change; it is about providing the strategic clarity
                needed to ensure every initiative delivers maximum, measurable
                impact. We consult on every vital aspect of the transformation
                journey:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transformationAspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group-hover:-translate-y-2">
                    {/* Animated Background */}

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
                      style={{ borderColor: BLUE }}
                    />

                    <div className="relative z-10 text-center">
                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300"
                        style={{ color: BLUE }}
                      >
                        {aspect.name}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {aspect.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support Across Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: TEAL }}>
              Support Across Your Entire Enterprise
            </h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {enterpriseSupports.map((support, index) => (
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
                    background: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
                    boxShadow: `0 5px 15px ${TEAL}30`,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 8px 25px ${TEAL}50`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <LazyImage
                    src={support.icon}
                    alt={support.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </motion.div>
                <h3
                  className="text-sm font-bold leading-tight"
                  style={{ color: TEAL }}
                >
                  {support.name}
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

      {/* Partner with Us Section */}
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
              Partner with Us
            </motion.h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Partner with us to transform strategically, monitoring the impact
              from start to finish, and guarantee a long-term return on your
              investment.
            </p>
          </motion.div>

          {/* RYRO Model */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Link href="/ryro">
                <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 max-w-md mx-auto">
                  {/* Animated Background Elements */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${TEAL}20, ${TEAL}05)`,
                    }}
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
                    style={{ borderColor: TEAL }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Logo */}
                    <div className="w-24 h-24 mx-auto mb-6 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <LazyImage
                        src="/assets/solutions/RYRO.png"
                        alt="RYRO"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300"
                      style={{ color: TEAL }}
                    >
                      RYRO
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                      Transform strategically with RYRO, monitoring impact from
                      start to finish for guaranteed long-term returns.
                    </p>

                    {/* CTA Arrow */}
                    <div
                      className="flex items-center justify-center gap-2 text-sm font-medium transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white"
                      style={{ color: TEAL }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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
              Ready for Strategic Transformation?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our transformation consulting services can
              provide the clarity and impact you need.
            </p>

            <Button
              onClick={() => setShowContactForm(!showContactForm)}
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                color: "white",
              }}
            >
              Get Started with Transformation Consulting
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
                  defaultUSP="transformation-consulting"
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

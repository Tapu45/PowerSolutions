"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Users,
  Lightbulb,
} from "lucide-react";
import { ContactForm } from "@/components/ui/Contact-Form";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function HuKeHu() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", company: "", message: "" });
    setOpen(false);
    alert("Thanks! We'll get back to you about HuKeHu.");
  };

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about HuKeHu.");
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-14">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <p
                className="text-xs uppercase tracking-wider mb-3 font-semibold"
                style={{ color: BLUE }}
              >
                innovations / HukeHu
              </p>

              <motion.h1
                className="text-3xl sm:text-3xl md:text-5xl font-extrabold mb-5 leading-tight"
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
                HuKeHu – The Voice of Common Man
              </motion.h1>

              <p className="text-lg font-semibold mb-4" style={{ color: BLUE }}>
                World's First Impact Measurement Platform
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg mb-6">
                HuKeHu is [solutions]ⁿ 's registered prototype and the world's
                first Impact Measurement Platform, designed to measure the
                impact of problem statements and solutions based on evidence. It
                stands as a technological commitment to veracity, transparency,
                and ethical leadership, distinguishing genuine social and
                business impact from noise and bias.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg mb-8">
                We challenge traditional, easily influenced reporting by
                focusing on The Voice of Common Man. Our methodology validates
                impact by bypassing the inherent bias found in paid or
                influenced voices. This allows for an unfiltered, true analysis
                of an initiative's reach and effect.
              </p>

              <Button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                }}
              >
                Learn More About HuKeHu
              </Button>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-visible flex items-center justify-center">
                {/* Corner gradient blobs - positioned at actual corners */}
                <div
                  className="absolute -top-8 -left-8 w-48 h-48 rounded-full opacity-60 blur-3xl z-0"
                  style={{
                    background: `radial-gradient(circle, ${TEAL}90 0%, ${TEAL}40 40%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-60 blur-3xl z-0"
                  style={{
                    background: `radial-gradient(circle, ${BLUE}90 0%, ${BLUE}40 40%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-60 blur-3xl z-0"
                  style={{
                    background: `radial-gradient(circle, ${YELLOW}80 0%, ${YELLOW}40 40%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-60 blur-3xl z-0"
                  style={{
                    background: `radial-gradient(circle, ${TEAL}80 0%, ${TEAL}40 40%, transparent 70%)`,
                  }}
                />

                {/* Main image with gradient border */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-20"
                  style={{
                    background: `linear-gradient(white, white) padding-box, 
                     linear-gradient(135deg, ${TEAL}, ${BLUE}, ${YELLOW}, ${TEAL}) border-box`,
                    border: "3px solid transparent",
                    animation: "gradientBorder 4s ease infinite",
                  }}
                >
                  {/* Animated gradient border effect */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-30"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${TEAL}30, transparent)`,
                      animation: "shimmer 3s infinite",
                    }}
                  />
                  <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 rounded-2xl z-10" />
                  <Image
                    src="/assets/innovation/HuKeHu Logo.png"
                    alt="HuKeHu"
                    fill
                    className="object-contain p-8 relative z-20"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
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
            Advanced Technology Design
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The platform is designed with multiple advanced technologies to
            analyze and measure impact from the perspective of problem
            statements and solutions that impact society as a whole.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "AI & Machine Learning",
              description:
                "Advanced artificial intelligence algorithms to process and analyze complex data patterns",
              color: BLUE,
            },
            {
              icon: Lightbulb,
              title: "Generative AI",
              description:
                "Creative AI capabilities to generate insights and identify novel impact measurements",
              color: TEAL,
            },
            {
              icon: Target,
              title: "Agent AI",
              description:
                "Autonomous AI agents that can independently assess and validate impact evidence",
              color: YELLOW,
            },
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${tech.color}08, ${tech.color}02)`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: tech.color }}
              >
                {tech.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
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
            Strategic Impact Assessment
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            HuKeHu ensures strategic clarity by assessing impact through two
            distinct, critical dimensions that provide comprehensive evaluation
            of social and business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Evidential Social Impact",
              description:
                "Analyzing the traceable evidence of how established facts or events have fundamentally impacted society. This dimension focuses on documented, verifiable changes that have occurred as a result of specific initiatives or solutions.",
              icon: TrendingUp,
              color: BLUE,
              features: [
                "Traceable documentation",
                "Historical impact analysis",
                "Evidence-based validation",
                "Societal transformation metrics",
              ],
            },
            {
              title: "Evidence of Social Impact",
              description:
                "Capturing the percentifiable, validated proof of social change generated by a specific statement, content piece, or organizational concept. This dimension measures the actual, measurable outcomes of initiatives.",
              icon: Shield,
              color: TEAL,
              features: [
                "Quantifiable metrics",
                "Validated outcomes",
                "Proof of change",
                "Measurable results",
              ],
            },
          ].map((dimension, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
              style={{
                background: `linear-gradient(135deg, ${dimension.color}08, ${dimension.color}02)`,
              }}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-xl mr-4 flex items-center justify-center"
                  style={{ backgroundColor: `${dimension.color}20` }}
                >
                  <dimension.icon
                    className="w-8 h-8"
                    style={{ color: dimension.color }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: dimension.color }}
                >
                  {dimension.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {dimension.description}
              </p>

              <ul className="space-y-2">
                {dimension.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <CheckCircle2
                      className="w-5 h-5 mr-3"
                      style={{ color: dimension.color }}
                    />
                    <span className="text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current State Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-2 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${YELLOW}20` }}
                >
                  <Users className="w-8 h-8" style={{ color: YELLOW }} />
                </div>
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: TEAL }}
                  >
                    The Blue Fox Inspiration
                  </h3>
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: YELLOW }}
                  />
                </div>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                The name{" "}
                <span className="font-semibold" style={{ color: BLUE }}>
                  HuKeHu
                </span>{" "}
                is a palindrome inspired by the moral story of the Blue Fox,
                embodying the principle that truth will always be unveiled
                through transparency and collective consensus.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                This vital innovation demonstrates{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-yellow-600 dark:from-teal-400 dark:via-teal-300 dark:to-yellow-400">
                  {/* Custom colored "solutions" as per logo */}
                  <span
                    style={{ color: "#1BCDC5" }}
                    className="dark:text-[#1BCDC5]"
                  >
                    [
                  </span>
                  <span
                    style={{ color: "#D6CE0B" }}
                    className="dark:text-[#D6CE0B]"
                  >
                    solut
                  </span>
                  <span
                    style={{ color: "#0B8FD6" }}
                    className="dark:text-[#0B8FD6]"
                  >
                    i
                  </span>
                  <span
                    style={{ color: "#D6CE0B" }}
                    className="dark:text-[#D6CE0B]"
                  >
                    o
                  </span>
                  <span
                    style={{ color: "#8B2121" }}
                    className="dark:text-[#8B2121]"
                  >
                    n
                  </span>
                  <span
                    style={{ color: "#D6CE0B" }}
                    className="dark:text-[#D6CE0B]"
                  >
                    s
                  </span>
                  <span
                    style={{ color: "#1BCDC5" }}
                    className="dark:text-[#1BCDC5]"
                  >
                    ]
                  </span>
                  <span
                    style={{
                      color: "#0B8FD6",
                      fontSize: "1.1em",
                      verticalAlign: "super",
                    }}
                    className="dark:text-[#0B8FD6]"
                  >
                    n
                  </span>
                </span>
                's unwavering commitment to data integrity, verifiable results,
                and ethical leadership in the digital age.
              </p>
            </div>

            <div className="flex items-center justify-center h-full">
              <div
                className="pl-6 py-6 rounded-lg border-l-4"
                style={{
                  borderColor: BLUE,
                  backgroundColor: `${BLUE}08`,
                  minWidth: "320px",
                  maxWidth: "400px",
                }}
              >
                <p
                  className="text-sm uppercase tracking-widest font-bold mb-3"
                  style={{ color: YELLOW }}
                >
                  Current Status
                </p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  Final Validation in Progress
                </p>
                <p className="text-base text-slate-700 dark:text-slate-300">
                  Launching to the public soon. Be part of the revolution.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle style={{ color: TEAL }}>
              Learn More About HuKeHu
            </DialogTitle>
            <DialogDescription>
              Get in touch to learn more about our revolutionary Impact
              Measurement Platform.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSubmit={handleContactSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

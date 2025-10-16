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
import { CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ui/Contact-Form";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function BYBSPage() {
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
    alert("Thanks! We’ll get back to you about BYBS.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-24">
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
                solutions / bybs
              </p>

              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
                style={{
                  color: TEAL,
                }}
              >
                Bring Your Business Story
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg">
                BYBS is our signature consulting approach that listens deeply to
                your business narrative — from boardroom vision to frontline
                realities — and turns it into a solution that's as unique as
                your journey. BYBS brings empathy into enterprise consulting —
                listening across levels, understanding your challenges, and
                crafting solutions that feel tailor-made because they are.
                <br />
                We start with your business story — not our products — and build
                solutions that align with your reality, not assumptions.
              </p>

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {[
                  { label: "Strategic Listening", color: BLUE },
                  { label: "Beyond Internal Views", color: TEAL },
                  { label: "End to End Ownership", color: YELLOW },
                  { label: "Bridge between the teams", color: BLUE },
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm"
                    style={{
                      background: `${chip.color}22`,
                      color: chip.color,
                      border: `1px solid ${chip.color}40`,
                    }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/bybs.png"
                  alt="Bring Your Business Solutions"
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
              </div>
            </motion.div>

            {/* Assurance Boxes - NOW OUTSIDE BOTH COLUMNS */}
            <div className="absolute left-0 right-0 -bottom-28 z-30 px-0 w-full overflow-hidden">
              <style jsx>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .marquee-container:hover .marquee-content {
                  animation-play-state: paused;
                }
                .marquee-content {
                  animation: marquee 30s linear infinite;
                }
              `}</style>
              <div className="marquee-container pb-4">
                <div className="flex gap-4 marquee-content">
                  {[
                    {
                      text: "Businesses planning ERP or business application transformation",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Leaders facing strategic ambiguity or cross-functional misalignment",
                      color: TEAL,
                      icon: "✓",
                    },
                    {
                      text: "Teams exploring multiple options but unsure of the right move",
                      color: YELLOW,
                      icon: "✓",
                    },
                    {
                      text: "Organizations with evolving, non-standard, or hybrid processes",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Companies that want clarity before commitment",
                      color: TEAL,
                      icon: "✓",
                    },
                    {
                      text: "Businesses planning ERP or business application transformation",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Leaders facing strategic ambiguity or cross-functional misalignment",
                      color: TEAL,
                      icon: "✓",
                    },
                    {
                      text: "Teams exploring multiple options but unsure of the right move",
                      color: YELLOW,
                      icon: "✓",
                    },
                    {
                      text: "Organizations with evolving, non-standard, or hybrid processes",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Companies that want clarity before commitment",
                      color: TEAL,
                      icon: "✓",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (i % 5) }}
                      className="flex-shrink-0 flex items-center gap-3 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-[320px]"
                      style={{ border: `1px solid ${item.color}40` }}
                    >
                      <span
                        className="text-lg font-bold flex-shrink-0"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl  py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-12">
          {[
            {
              title: "Strategic Alignment with Business DNA",
              desc: "Capture the full narrative — leadership vision, operational friction, and ground-level realities.",
              img: "/assets/bybs/sabd.png",
              color: BLUE,
            },
            {
              title: "Tailored, context-rich solutions",
              desc: "Tailored to your business processes, budget, and transformation goals.",
              img: "/assets/bybs/tcs.png",
              color: TEAL,
            },
            {
              title: "Clarity from Complexity",
              desc: "Helps you see the path through the noise.",
              img: "/assets/bybs/cfc.png",
              color: BLUE,
            },
            {
              title: "Decision Paralysis",
              desc: "Helps when multiple perspectives exist but no clear action emerges.",
              img: "/assets/bybs/dpw.png",
              color: YELLOW,
            },

            {
              title: "Reduced Internal Friction and Misalignment",
              desc: "Internal teams often miss cross-functional context or get stuck in silos.",
              img: "/assets/bybs/cba.png",
              color: TEAL,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                className="relative mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: step.color, filter: "blur(20px)" }}
                />
                <div
                  className="relative rounded-full shadow-lg bg-white/90 dark:bg-slate-800/80 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:shadow-2xl"
                  style={{ width: 80, height: 80 }} // Increased size from 60 to 80
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="object-contain transition-transform duration-300 group-hover:rotate-12"
                    style={{ width: 64, height: 64 }}
                  />
                </div>
              </motion.div>
              <h3
                className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors duration-300"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 sm:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10"
            style={{ color: TEAL }}
          >
            How BYBS Works
          </h2>
          <ol className="space-y-4 sm:space-y-7">
            <li className="flex flex-col md:flex-row items-start gap-3 sm:gap-5">
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: BLUE }}
              >
                <span className="sr-only">Step</span>
              </span>
              <div>
                <span
                  className="font-semibold text-lg sm:text-xl block mb-1"
                  style={{ color: BLUE }}
                >
                  Listen
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  We listen & capture the full business story across levels.
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-3 sm:gap-5">
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: TEAL }}
              >
                <span className="sr-only">Step</span>
              </span>
              <div>
                <span
                  className="font-semibold text-lg sm:text-xl block mb-1"
                  style={{ color: TEAL }}
                >
                  Granularize
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  The granulization expertise breaks down problem statements and
                  requirements to the lowest level for solution designing.
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-3 sm:gap-5">
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: YELLOW }}
              >
                <span className="sr-only">Step</span>
              </span>
              <div>
                <span
                  className="font-semibold text-lg sm:text-xl block mb-1"
                  style={{ color: YELLOW }}
                >
                  Design
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Build context-aware, impact-driven solutions for each of the
                  problem statements.
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-3 sm:gap-5">
              <span
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: BLUE }}
              >
                <span className="sr-only">Step</span>
              </span>
              <div>
                <span
                  className="font-semibold text-lg sm:text-xl block mb-1"
                  style={{ color: BLUE }}
                >
                  Deliver & Benchmark
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Execute with precision while enabling client focus and stay
                  engaged to monitor the solution is benchmarking.
                </span>
              </div>
            </li>
          </ol>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <Button
            onClick={() => setShowContactForm(!showContactForm)}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              color: "white",
            }}
          >
            Do you have a story for our whiteboard?
          </Button>
        </motion.div>

        {/* Contact Form - appears below the button */}
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <ContactForm
              defaultUSP="bybs"
              onSubmit={() => {
                alert("Thanks! We’ll get back to you about BYBS.");
                setShowContactForm(false);
              }}
              className="max-w-4xl mx-auto"
            />
          </motion.div>
        )}
      </section>
    </div>
  );
}

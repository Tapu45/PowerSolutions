"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/Contact-Form";
import { CheckCircle2 } from "lucide-react";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function BIBDPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                USP / bibd
              </p>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
                style={{
                  color: TEAL,
                }}
              >
                Building Innovations & Business Disruptions
              </h1>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg mb-4">
                Innovation drives disruption. BIBD is our way to turn ideas into
                impactful solutions that challenge norms and create real change.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg mb-4">
                As the core of our Ultimate Solution Proposed framework, BIBD
                helps startups, teams, and customers validate and grow ideas
                into practical, disruptive results.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg mb-4">
                We make innovation actionable.
              </p>

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {[
                  { label: "Innovative MVPs", color: BLUE },
                  { label: "Rapid prototyping", color: TEAL },
                  { label: "Market disruption", color: YELLOW },
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

              {/* Assurances */}
              <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                {[
                  { label: "Unique designs", color: BLUE },
                  { label: "Fast iterations", color: TEAL },
                  {
                    label: "Scalable foundations",
                    color: YELLOW,
                    dark: "#3a3a00",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/40 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <CheckCircle2
                      className="size-4 shrink-0"
                      style={{ color: item.color }}
                    />
                    <span
                      className="text-xs sm:text-sm"
                      style={{ color: item.dark ?? "inherit" }}
                    >
                      {item.label}
                    </span>
                  </div>
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
                  src="/solutions2/BYBD.png"
                  alt="Build It Build Different"
                  fill
                  className="object-contain p-4 sm:p-8"
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
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl  py-1">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {[
            {
              title: "Idea-to-Product Transformation",
              desc: "Turn concepts into deployable features or products.",
              img: "/assets/bibd/ipt.png",
              color: BLUE,
            },
            {
              title: "Industry Validation",
              desc: "Leverage our domain expertise to refine and strengthen innovations.",
              img: "/assets/bibd/iv.png",
              color: TEAL,
            },
            {
              title: "Collaborative Innovation",
              desc: "Co-create with external innovators to accelerate disruption.",
              img: "/assets/bibd/ce.png",
              color: YELLOW,
            },
            {
              title: "Customer-Centric Development",
              desc: "Build solutions grounded in real customer experiences.",
              img: "/assets/bibd/av.png",
              color: BLUE,
            },
            {
              title: "Scalable Innovation Lab",
              desc: "Incubate, test, and launch innovations in a structured environment.",
              img: "/assets/bibd/sila.png",
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
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl py-16 px-4 sm:px-0"
      >
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
            How BIBD Works
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
                  Submit Your Idea
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Startups, internal teams, and customers can submit ideas via
                  our portal.
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
                  Validate & Enhance
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  We assess feasibility, impact, and add missing elements.
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
                  Idea Lab Integration
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Your idea joins our innovation ecosystem.
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
                  Develop & Deploy
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  We build it into a feature, function, or product.
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
                  Feedback & Iterate
                </span>
                <span className="block text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200">
                  Continuous improvement based on real-world use.
                </span>
              </div>
            </li>
          </ol>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left mt-12"
        >
          <Button
            onClick={() => setShowContactForm(!showContactForm)}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              color: "white",
            }}
          >
            Register Your Idea. Disruption is in Progress
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
              defaultUSP="bibd"
              onSubmit={() => {
                alert("Thanks! We’ll get back to you about BIBD.");
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

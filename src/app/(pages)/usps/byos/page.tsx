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

export default function BYOSPage() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about BYOS.");
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-20">
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
                solutions / byos
              </p>

              <h1
                className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
                style={{
                  color: TEAL,
                }}
              >
                Bring Your Own Solutions
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg">
                BYOS - a modern consulting model where you bring the solution
                and we bring the execution muscle. You choose the solution that
                fits your business best - we bring the expertise to implement
                flawlessly. Our services are designed in a such as way, you can
                decide the execution method, timeline, quality etc. based on
                your requirement and budget.
              </p>

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "Execution Kick-start", color: BLUE },
                  { label: "Hold when you want", color: TEAL },
                  { label: "Pay as you use", color: YELLOW },
                  { label: "Choose whom you need", color: BLUE },
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-sm"
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

              {/* Assurances - Who */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { label: "Enterprise", color: BLUE },
                  { label: "SMB", color: TEAL },
                  { label: "IT & ITES", color: YELLOW, dark: "#3a3a00" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/70 dark:bg-slate-800/40 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <CheckCircle2
                      className="size-4 shrink-0"
                      style={{ color: item.color }}
                    />
                    <span style={{ color: item.dark ?? "inherit" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* When - Beautiful 5 points section */}
              <div className="mt-8">
              
                <div className="flex flex-wrap gap-3 justify-start">
                  {[
                    {
                      text: "Solution is ready",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Do not want to hire a team",
                      color: TEAL,
                      icon: "✓",
                    },
                    {
                      text: "Do not want to micro manage",
                      color: YELLOW,
                      icon: "✓",
                    },
                    {
                      text: "Looking for Faster ROI",
                      color: BLUE,
                      icon: "✓",
                    },
                    {
                      text: "Want to Control the outsource",
                      color: TEAL,
                      icon: "✓",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-3 bg-white/60 dark:bg-slate-800/30 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      <span
                        className="text-lg font-bold"
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
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl  ">
                <Image
                  src="/solutions2/BYOS.png"
                  alt="Bring Your Own Solutions"
                  fill
                  className="object-contain p-8"
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

      {/* Why Choose BYOS Heading */}
      <section className="mx-auto max-w-6xl px-6 mt-0 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: TEAL }}
          >
            Why Choose BYOS
          </h2>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {[
            {
              title: "Stay Solution Focused",
              desc: "Decision Makers Concentrate on Business Outcomes, not technical execution",
              img: "/assets/byos/ros.png",
              color: YELLOW,
            },
            {
              title: "Leverage Deep Expertise",
              desc: "Our Consultants bring decades of ERP and Business Application Experience to execute your vision",
              img: "/assets/byos/etv.png",
              color: TEAL,
            },
            {
              title: "Accelerate Time-to-Value",
              desc: "No Delays from vendor selection or solution design - Your solution gets implemented faster",
              img: "/assets/byos/ssf.png",
              color: BLUE,
            },
            {
              title: "Reduce Operational Stress",
              desc: "No need to manage timelines, resources or execution risks internally",
              img: "/assets/byos/rcga.png",
              color: YELLOW,
            },
            {
              title: "Retain Control, Gain Agility",
              desc: "You stay in control of the solution direction while we handle the complexity of delivery",
              img: "/assets/byos/lde.png",
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
              {/* Image container with hover effects - only the round image gets the color effect */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Blurred background effect only for the image */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: step.color, filter: "blur(20px)" }}
                />

                {/* Image container */}
                <div
                  className="relative rounded-full shadow-lg bg-white/90 dark:bg-slate-800/80 flex items-center justify-center p-3 transition-all duration-300 group-hover:shadow-2xl"
                  style={{ width: 80, height: 80 }}
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

              {/* Title with color on hover */}
              <h3
                className="text-lg font-semibold mb-3 transition-colors duration-300"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-10 border-t border-slate-200 dark:border-slate-800"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-10"
            style={{ color: TEAL }}
          >
            How BYOS Works
          </h2>
          <ol className="space-y-10">
            <li className="flex flex-col md:flex-row items-start gap-6">
              <span className="text-2xl font-bold" style={{ color: BLUE }}>
                1.
              </span>
              <div>
                <span
                  className="font-semibold text-xl block mb-1"
                  style={{ color: BLUE }}
                >
                  You Choose the Solution
                </span>
                <span className="block text-lg text-slate-700 dark:text-slate-200">
                  Whether it's ERP, CRM, or a custom business app—you bring the
                  blueprint
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-6">
              <span className="text-2xl font-bold" style={{ color: TEAL }}>
                2.
              </span>
              <div>
                <span
                  className="font-semibold text-xl block mb-1"
                  style={{ color: TEAL }}
                >
                  We Align and Plan
                </span>
                <span className="block text-lg text-slate-700 dark:text-slate-200">
                  Our team maps your solution to a delivery framework tailored
                  to your business
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-6">
              <span className="text-2xl font-bold" style={{ color: YELLOW }}>
                3.
              </span>
              <div>
                <span
                  className="font-semibold text-xl block mb-1"
                  style={{ color: YELLOW }}
                >
                  We Execute
                </span>
                <span className="block text-lg text-slate-700 dark:text-slate-200">
                  From configuration to deployment, we manage every detail
                </span>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-start gap-6">
              <span className="text-2xl font-bold" style={{ color: BLUE }}>
                4.
              </span>
              <div>
                <span
                  className="font-semibold text-xl block mb-1"
                  style={{ color: BLUE }}
                >
                  You Go Live with Confidence
                </span>
                <span className="block text-lg text-slate-700 dark:text-slate-200">
                  Your solution, implemented seamlessly—on time, on budget, and
                  with zero stress
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
          className="text-left"
        >
          <Button
            onClick={() => setShowContactForm(!showContactForm)}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
              color: "white",
            }}
          >
            You've Designed the Solution. Let's Deliver It.
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
              defaultUSP="byos"
              onSubmit={handleContactSubmit}
              className="max-w-4xl mx-auto"
            />
          </motion.div>
        )}
      </section>
    </div>
  );
}

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

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function RIROPage() {
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
    alert("Thanks! We’ll get back to you about RYRO.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                solutions / ryro
              </p>

              <h1
                className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight"
                style={{
                  color: TEAL,
                }}
              >
                Re-engineer Your Retained Organization
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-lg">
                Transform your existing products or processes with fresh
                perspectives. We help you re-engineer, innovate, and realize
                measurable outcomes through strategic digital solutions.
              </p>

              {/* Chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { label: "Digital transformation", color: BLUE },
                  { label: "Process optimization", color: TEAL },
                  { label: "Outcome-driven", color: YELLOW },
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

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setOpen(true)}
                  className="shadow-md text-white"
                  style={{
                    backgroundColor: BLUE,
                  }}
                >
                  Start Reimagining
                </Button>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium underline underline-offset-4 hover:opacity-80 transition"
                  style={{ color: TEAL }}
                >
                  Learn how it works
                </a>
              </div>

              {/* Assurances */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { label: "Strategic insights", color: BLUE },
                  { label: "Seamless integration", color: TEAL },
                  {
                    label: "Proven results",
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
                    <span style={{ color: item.dark ?? "inherit" }}>
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
              className="relative"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl  ">
                <Image
                  src="/solutions2/RYRO.png"
                  alt="Re-engineer Your Retained Organization"
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

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {[
            {
              title: "Assess & reimagine",
              desc: "Evaluate your current setup and brainstorm innovative ways to enhance it for better performance.",
              color: YELLOW,
            },
            {
              title: "Innovate & implement",
              desc: "Develop and integrate new technologies or processes to drive efficiency and growth.",
              color: TEAL,
            },
            {
              title: "Measure & realize",
              desc: "Track outcomes, optimize based on data, and achieve sustainable, measurable success.",
              color: BLUE,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center flex-1"
            >
              <div
                className="rounded-full p-4 mb-4 shadow-lg"
                style={{ background: `${step.color}22` }}
              >
                <CheckCircle2
                  size={36}
                  style={{ color: step.color }}
                  strokeWidth={2.5}
                />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-16 border-t border-slate-200 dark:border-slate-800"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{ color: TEAL }}
          >
            How RYRO Works
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-slate-700 dark:text-slate-200">
            In a fast-evolving digital landscape, staying ahead means rethinking
            what's possible.{" "}
            <span style={{ color: BLUE, fontWeight: 600 }}>RYRO</span> helps you
            reimagine your products and processes, innovate with purpose, and
            realize tangible outcomes that drive business growth.
          </p>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-slate-700 dark:text-slate-200">
            Through strategic analysis, creative problem-solving, and
            data-driven implementation, we transform challenges into
            opportunities, ensuring your solutions are future-proof and
            impactful.
          </p>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-slate-700 dark:text-slate-200">
            Expect collaborative sessions, iterative refinements, and continuous
            monitoring to maximize ROI and align with your strategic goals.
          </p>

          <h3
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: BLUE }}
          >
            What You Get
          </h3>
          <ul className="space-y-6">
            {[
              {
                title: "Strategic Reimagination",
                desc: "Fresh perspectives on your existing systems, identifying untapped potential and innovative improvements.",
                color: BLUE,
              },
              {
                title: "Innovative Solutions",
                desc: "Cutting-edge technologies and processes tailored to your needs, fostering efficiency and competitiveness.",
                color: TEAL,
              },
              {
                title: "Measurable Outcomes",
                desc: "Data-backed results with clear KPIs, ensuring your investments translate into real-world success and growth.",
                color: YELLOW,
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1"
                  size={28}
                  style={{ color: item.color }}
                />
                <div>
                  <span
                    className="font-semibold text-lg block mb-1"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </span>
                  <span className="block text-base md:text-lg text-slate-700 dark:text-slate-200">
                    {item.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us About RYRO</DialogTitle>
            <DialogDescription>
              Share your challenges, and let's reimagine and innovate together.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={onChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={onChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={onChange}
              className="w-full p-2 border rounded"
              rows={4}
              required
            />
            <DialogFooter>
              <Button type="submit">Send Message</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

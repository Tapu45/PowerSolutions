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
} from "@/components/ui/dialog";
import {
  CheckCircle2,
  Brain,
  Target,
  TrendingUp,
  Shield,
  Users,
  Lightbulb,
  BookOpen,
  Award,
  Zap,
  Cog,
  Globe,
} from "lucide-react";
import { ContactForm } from "@/components/ui/Contact-Form";

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export default function InnovationLabPage() {
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
    alert("Thanks! We'll get back to you about Innovation Lab.");
  };

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Thanks! We'll get back to you about Innovation Lab.");
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-black dark:via-black dark:to-black">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-14">
          <div className="relative grid grid-cols-1 items-start">
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
                innovations / Innovation Lab
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
                Innovation Lab
              </motion.h1>

              <p className="text-lg font-semibold mb-4" style={{ color: BLUE }}>
                BIBD - Building Innovations and Business Disruptions
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-4xl mb-6">
                BIBD - Building Innovations and Business Disruptions is the
                innovation lab of [solutions]ⁿ, through which we invest in our
                internal competency of Innovative Thinking, Granular Thinking
                and Design Thinking to develop innovative technological
                platforms that can bring Business Disruption. The innovations in
                Innovation Lab is not limited to Business Disruptions, we have
                many innovations that are focused on community development,
                social growth and good for the time. We validate all our
                innovations with existing solutions in the market to identify
                the uniqueness that will add value before we start working on
                it.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200 max-w-4xl mb-8">
                The innovations at [solutions]ⁿ are designed based on real time
                experience of problem statements and requirements. At Innovation
                Lab, we strictly follow the methodology before the outcome is
                published to the public for use. We identify the most relevant
                problem statement or requirement for innovation, validate if the
                same is a perfect one to be considered or not. We validate with
                similar solutions and check the benchmarking before we implement
                our prototype. Then the innovation is released for
                intensification.
              </p>

              <Button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                }}
              >
                Explore Our Innovations
              </Button>
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
            Innovation Methodology
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our rigorous process ensures every innovation adds unique value and
            meets real-world needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Problem Identification",
              description:
                "Identify the most relevant problem statements and requirements based on real-time experience",
              color: BLUE,
            },
            {
              icon: Shield,
              title: "Validation & Benchmarking",
              description:
                "Validate against existing solutions and check market benchmarking for uniqueness",
              color: TEAL,
            },
            {
              icon: Zap,
              title: "Prototype & Intensification",
              description:
                "Implement prototypes and release innovations for public intensification",
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
            Innovations in Development
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of the innovations in the innovation lab under
            implementation phase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ArtMart",
              description:
                "A digital marketplace empowering artists to showcase, sell, and collaborate globally.",
              logo: "/assets/innovation/Artmart logo.png",
              color: BLUE,
              status: "Prototype Phase",
            },
            {
              title: "Desh Analytics",
              description:
                "A data-driven platform for actionable insights in social, economic, and business domains.",
              logo: "/assets/innovation/DESH analytics logo.png",
              color: TEAL,
              status: "In Development",
            },
            {
              title: "Expex",
              description:
                "A next-gen expense management tool for seamless tracking, reporting, and compliance.",
              logo: "/assets/innovation/expex.png",
              color: YELLOW,
              status: "Beta Testing",
            },
          ].map((innovation, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${innovation.color}08, ${innovation.color}02)`,
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: `${innovation.color}20` }}
                >
                  <Image
                    src={innovation.logo}
                    alt={innovation.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3
                className="text-2xl font-bold text-center mb-3"
                style={{ color: innovation.color }}
              >
                {innovation.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-center mb-4">
                {innovation.description}
              </p>
              <div className="text-center">
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${innovation.color}20`,
                    color: innovation.color,
                  }}
                >
                  {innovation.status}
                </span>
              </div>
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
                  <Lightbulb className="w-8 h-8" style={{ color: YELLOW }} />
                </div>
                <div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: TEAL }}
                  >
                    Innovation Focus
                  </h3>
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: YELLOW }}
                  />
                </div>
              </div>
             
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                At{" "}
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
                , we believe in innovation that matters—creating technological
                platforms that not only disrupt businesses but also contribute
                positively to society and foster sustainable growth.
              </p>
            
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                At [solutions]ⁿ, we believe in innovation that matters—creating
                technological platforms that not only disrupt businesses but
                also contribute positively to society and foster sustainable
                growth.
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
                  Multiple Projects Active
                </p>
                <p className="text-base text-slate-700 dark:text-slate-300">
                  Innovation Lab is actively developing groundbreaking solutions
                  across various domains.
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
              Learn More About Innovation Lab
            </DialogTitle>
            <DialogDescription>
              Get in touch to explore our innovative projects and potential
              collaborations.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSubmit={handleContactSubmit} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

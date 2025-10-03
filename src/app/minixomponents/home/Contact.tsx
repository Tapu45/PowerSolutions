"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactBackground from "@/components/animation/ContactBackground";

// Service names for the selector (from Services page)
const SERVICE_OPTIONS = [
  "AEaas",
  "ATaas",
  "BAaas",
  "CMaas",
  "DMaas",
  "FAaas",
  "PAaas",
  "PMaas",
  "TMaas",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (API call or email)
    setSubmitted(true);
  };

  return (
    <section className="premium-section premium-pattern relative py-1 overflow-hidden">
      <ContactBackground />
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-teal-200/8 to-yellow-200/6 rounded-full blur-3xl premium-animate-float" />
      <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-yellow-200/6 to-teal-200/4 rounded-full blur-2xl premium-animate-float delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-gradient-to-r from-teal-100/6 to-yellow-100/4 rounded-full blur-3xl premium-animate-float delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-1"
        >
          <div className="flex items-center justify-center gap-3 mb-6 py-2">
            <span className="h-6 w-1.5 rounded bg-gradient-to-b from-teal-500 to-teal-600" />
            <span className="uppercase tracking-wider text-sm font-semibold text-teal-700">
              Get In Touch
            </span>
            <span className="h-6 w-1.5 rounded bg-gradient-to-b from-yellow-500 to-yellow-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Accelerate</span> Your
            Business?
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-0.5 bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-400 mx-auto"
          />

          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Request a call back and our experts will connect with you to discuss
            your automation needs. Let's transform your business together.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg- rounded-xl p-4 md:p-8 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/10 to-yellow-500/10" />
            </div>

            {/* Form content */}
            <div className="relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <input
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium ${
                        focusedField === "name"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <input
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium ${
                        focusedField === "company"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      value={form.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:row-span-2"
                  >
                    <textarea
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium resize-none h-full min-h-[112px] ${
                        focusedField === "message"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <input
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium ${
                        focusedField === "email"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <input
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium ${
                        focusedField === "location"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Location"
                      value={form.location}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("location")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="md:col-span-3 flex gap-4 md:gap-6"
                  >
                    <input
                      className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium ${
                        focusedField === "phone"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />

                    <select
                      className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base font-medium appearance-none cursor-pointer ${
                        focusedField === "service"
                          ? "border-teal-400 bg-teal-50/50 shadow-md"
                          : "border-gray-200 bg-gray-50 hover:bg-white hover:border-gray-300"
                      }`}
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="">Select Service</option>
                      {SERVICE_OPTIONS.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className="flex-1 px-4 py-3 rounded-lg font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: "#0B8FD6",
                        boxShadow: "0 4px 16px rgba(11, 143, 214, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0972A3";
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px rgba(11, 143, 214, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#0B8FD6";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(11, 143, 214, 0.3)";
                      }}
                    >
                      SUBMIT
                    </button>
                  </motion.div>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center p-6 rounded-lg bg-green-50 border border-green-200 mt-6"
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-green-800 font-semibold text-lg">
                        Thank you!
                      </span>
                    </div>
                    <p className="text-green-700 font-medium">
                      Your message has been sent successfully. Our team will get
                      back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { sendEmail, EmailData } from "@/lib/emaijs";

interface ContactFormProps {
  defaultUSP?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
  serviceType?: string; // Add this to identify which service/solution the form is for
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  usp: string;
  message: string;
}

const USPs = [
  { value: "byos", label: "BYOS - Bring Your Own Solutions" },
  { value: "bybs", label: "BYBS - Bring Your Own Business Solutions" },
  { value: "bibd", label: "BIBD - Bring Your Own Business Design" },
  { value: "ryro", label: "RYRO - Run Your Own Operations" },
];

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export function ContactForm({
  defaultUSP = "byos",
  onSubmit,
  className,
  serviceType = "General Inquiry",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    usp: defaultUSP,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUSPChange = (value: string) => {
    setFormData((prev) => ({ ...prev, usp: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const emailData: EmailData = {
        ...formData,
        service_type: serviceType,
      };

      const success = await sendEmail(emailData);

      if (success) {
        setSubmitStatus("success");
        onSubmit?.(formData);

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          usp: defaultUSP,
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Get In Touch
          </h3>
          <p className="text-slate-600 dark:text-slate-300">
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <p className="text-green-800 font-medium">
              ✅ Thank you! Your message has been sent successfully. We'll get
              back to you soon.
            </p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p className="text-red-800 font-medium">
              ❌ Sorry, there was an error sending your message. Please try
              again.
            </p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Select value={formData.usp} onValueChange={handleUSPChange}>
                <SelectTrigger className="bg-white text-slate-900 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {USPs.map((usp) => (
                    <SelectItem key={usp.value} value={usp.value}>
                      {usp.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg min-h-32 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <div className="flex justify-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 px-8 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                  }}
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

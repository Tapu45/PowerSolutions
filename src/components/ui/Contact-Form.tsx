"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
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

interface ContactFormProps {
  defaultUSP?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
  serviceType?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  service: string; // Changed from usp to service to match schema
  message: string;
}

const Services = [
  { value: "byos", label: "BYOS - Bring Your Own Solutions" },
  { value: "bybs", label: "BYBS - Bring Your Own Business Solutions" },
  { value: "bibd", label: "BIBD - Bring Your Own Business Design" },
  { value: "ryro", label: "RYRO - Run Your Own Operations" },
  { value: "other", label: "Other / General Inquiry" },
];

const YELLOW = "#D6CE0B";
const TEAL = "#1BCDC5";
const BLUE = "#0B8FD6";

export function ContactForm({
  defaultUSP = "byos",
  onSubmit,
  className,
  serviceType,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    service: defaultUSP,
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error);
      return result;
    },
    onSuccess: () => {
        onSubmit?.(formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            location: "",
            service: defaultUSP,
            message: "",
        });
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
    >
      <div className="premium-card p-8 rounded-2xl shadow-2xl border border-border">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Get In Touch
          </h3>
          <p className="text-muted-foreground">
            Ready to transform your business? Let's start the conversation.
          </p>
        </div>

        {/* Status Messages */}
        {mutation.isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
          >
            <p className="text-green-800 dark:text-green-300 font-medium">
              ✅ Thank you! Your message has been sent successfully. We'll get
              back to you soon.
            </p>
          </motion.div>
        )}

        {mutation.isError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          >
            <p className="text-red-800 dark:text-red-300 font-medium">
              ❌ {(mutation.error as Error).message || "Sorry, there was an error sending your message. Please try again."}
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
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
              <Input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="bg-input text-foreground border border-border rounded-lg h-12 focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {Services.map((svc) => (
                    <SelectItem key={svc.value} value={svc.value} className="text-foreground focus:bg-[#0B8FD6] focus:text-white">
                      {svc.label}
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
                className="bg-input text-foreground placeholder:text-muted-foreground border border-border rounded-lg min-h-32 resize-none focus:border-[#0B8FD6] focus:ring-2 focus:ring-[#0B8FD6]"
              />
              <div className="flex justify-start">
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="h-12 px-8 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                  }}
                >
                  {mutation.isPending ? "SENDING..." : "SUBMIT"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

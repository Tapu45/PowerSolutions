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

interface ContactFormProps {
  defaultUSP?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUSPChange = (value: string) => {
    setFormData((prev) => ({ ...prev, usp: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      usp: defaultUSP,
      message: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      {/* Background with site theme colors and subtle pattern */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${BLUE}15 0%, ${TEAL}10 50%, ${YELLOW}08 100%)`,
        }}
      >
        {/* Subtle geometric pattern using site colors */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 transform rotate-45"
            style={{ borderColor: TEAL }}
          ></div>
          <div
            className="absolute top-20 right-20 w-16 h-16 border-r-2 border-b-2 transform rotate-45"
            style={{ borderColor: YELLOW }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-12 h-12 border-l-2 border-t-2 transform rotate-45"
            style={{ borderColor: BLUE }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 transform rotate-45"
            style={{ borderColor: TEAL }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-8 h-8 border-l-2 border-t-2 transform rotate-45"
            style={{ borderColor: YELLOW }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-14 h-14 border-r-2 border-b-2 transform rotate-45"
            style={{ borderColor: BLUE }}
          ></div>
        </div>
      </div>

      {/* Form content */}
      <div className="relative z-10 p-8">
        <h2
          className="text-2xl font-bold text-center mb-8"
          style={{ color: BLUE }}
        >
          REQUEST A CALL BACK
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
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
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 placeholder:text-slate-500 border border-slate-200 rounded-lg h-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <Select value={formData.usp} onValueChange={handleUSPChange}>
                <SelectTrigger className="bg-white text-slate-900 border border-slate-200 rounded-lg h-12 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                  <SelectValue placeholder="Select USP" />
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
                  className="h-12 px-8 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${BLUE})`,
                  }}
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

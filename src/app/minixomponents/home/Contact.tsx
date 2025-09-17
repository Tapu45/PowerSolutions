"use client";

import React, { useState } from "react";

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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Request a call back and our experts will connect with you to discuss
            your automation needs.
          </p>
        </div>
        <form
          className="bg-gray-50 rounded-xl shadow p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <input
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base md:row-span-2"
              id="message"
              name="message"
              placeholder="Message"
              rows={3}
              required
              value={form.message}
              onChange={handleChange}
            />
            <input
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
            />
            <div className="flex gap-6">
              <input
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                value={form.phone}
                onChange={handleChange}
              />
              <select
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 text-base"
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-yellow-600 text-white font-bold py-3 rounded transition hover:bg-yellow-700 text-lg"
            >
              SUBMIT
            </button>
          </div>
          {submitted && (
            <div className="text-green-600 text-center mt-6">
              Thank you! Your message has been sent.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

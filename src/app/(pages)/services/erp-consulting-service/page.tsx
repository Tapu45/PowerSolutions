"use client";
import React, { useState } from "react";
import Image from "next/image";

const ERPConsultingService: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    serviceName: "ERP Consulting Service", // Default selected
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just clear the form
    setFormData({
      name: "",
      companyName: "",
      phone: "",
      email: "",
      location: "",
      serviceName: "ERP Consulting Service",
      message: "",
    });
    // Optionally, show a success message or alert
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-96 md:h-[400px]">
        <Image
          src="/assets/services/erp.jpg"
          alt="ERP Consulting Service Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Soft teal overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(13, 148, 136, 0.55)", // teal-500 with 45% opacity
            mixBlendMode: "multiply",
          }}
        />
        {/* Headline moved to bottom left */}
        <div className="absolute left-0 bottom-0 w-full flex items-end">
          <div className="p-6 md:p-10">
            <div className="text-white text-sm md:text-base opacity-80 mb-1">
              services / erp
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              ERP Consulting Service
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          {/* Left Side: Content */}
          <div className="flex-1 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-teal-600 mb-6">
              Technology Audit – A Strategic Enabler for Digital Transformation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our Technology Audit (TA) Services – delivered through the
              proprietary Business Impact Evaluation Framework (BIEF) – provide
              organizations with a structured methodology to assess, align, and
              optimize their IT landscape. Our framework has been recognized for
              its robust methodology in enabling businesses to unlock maximum
              value from their digital transformation initiatives.
            </p>

            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              ERP & IT Consulting and Project Management Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our ERP and IT Consulting & Project Management (PM) Services are
              designed as a complete hand-holding program for enterprises aiming
              to implement or upgrade their technology stack. We support
              organizations throughout the journey – from product/vendor
              selection to adoption and change management – ensuring maximum
              return on technology investments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Approach Covers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Vendor & Product Selection – Evaluating ERP solutions and IT
                products best aligned with business needs, scalability
                requirements, and budget.
              </li>
              <li>
                Implementation Roadmap – Designing a phased execution plan with
                clear milestones.
              </li>
              <li>
                Project Management Office (PMO) Setup – Establishing a dedicated
                governance and execution team for seamless implementation.
              </li>
              <li>
                Change Management & Training – Preparing teams for adoption of
                new systems through structured user enablement and support.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              What is ERP Consulting?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              ERP consulting goes beyond software installation – it is about
              aligning enterprise processes with technology for sustainable
              growth. Our consulting team shortlists ERP solutions from the
              market that are best suited to the client’s operational and
              strategic goals. We ensure that technology adoption is not only
              technically sound but also future-ready.
            </p>

            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Our Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Business & IT Assessment – Analyze existing processes and IT
                infrastructure to align with future goals.
              </li>
              <li>
                Requirement Analysis & Documentation – Capture business needs in
                detail to define project scope.
              </li>
              <li>
                Solution Evaluation – Compare ERP products and IT solutions for
                functionality, technology stack, scalability, and
                cost-effectiveness.
              </li>
              <li>
                Vendor Due Diligence – Assess vendor reliability, delivery
                capability, and long-term support.
              </li>
              <li>
                Cost & Value Optimization – Negotiate and ensure best-in-class
                pricing while balancing long-term value.
              </li>
              <li>
                Implementation & Rollout – Execute the chosen solution with
                continuous monitoring and user engagement.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-teal-600 mb-4">
              Benefits to Clients
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Access to the most suitable ERP/IT solution tailored to your
                industry and business requirements.
              </li>
              <li>
                Cost-effective implementation with focus on long-term ROI.
              </li>
              <li>
                Reduced risks through structured evaluation and vendor
                verification.
              </li>
              <li>
                Seamless adoption supported by change management and training
                programs.
              </li>
              <li>
                Alignment of technology investments with business growth
                strategy.
              </li>
            </ul>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="bg-teal-600 text-white text-center py-2 px-4 rounded-t-lg mb-4">
              <h3 className="text-xl font-semibold">Enquiry Now</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="serviceName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service Name
                </label>
                <select
                  id="serviceName"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="ERP Consulting Service">
                    ERP Consulting Service
                  </option>
                  <option value="Business Consulting Service">
                    Business Consulting Service
                  </option>
                  <option value="Application Development">
                    Application Development
                  </option>
                  <option value="Transformation Service">
                    Transformation Service
                  </option>
                  <option value="Maintenance and Development">
                    Maintenance and Development
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPConsultingService;

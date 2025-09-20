"use client";
import React, { useState } from "react";
import Image from "next/image";

const BusinessConsultingService: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    serviceName: "Business Consulting Service", // Default selected
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
      serviceName: "Business Consulting Service",
      message: "",
    });
    // Optionally, show a success message or alert
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="relative w-full h-96 md:h-[400px]">
        <Image
          src="/assets/services/consulting.jpg"
          alt="Business Consulting Service Banner"
          fill
          className="object-cover"
          priority
          style={{ objectPosition: "center 30%" }} // Move image down
        />
        {/* Soft custom blue overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(11, 143, 214, 0.55)", // #0B8FD6 with 45% opacity
            mixBlendMode: "multiply",
          }}
        />
        {/* Headline moved to bottom left */}
        <div className="absolute left-0 bottom-0 w-full flex items-end">
          <div className="p-6 md:p-10">
            <div className="text-white text-sm md:text-base opacity-80 mb-1">
              services / business
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              Business Consulting Service
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          {/* Left Side: Content */}
          <div className="flex-1 prose prose-lg max-w-none">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#0B8FD6" }}
            >
              Strategic Business Consulting – Driving Growth and Efficiency
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our Business Consulting Services provide expert guidance to help
              organizations navigate complex challenges, optimize operations,
              and achieve sustainable growth. Leveraging industry best practices
              and data-driven insights, we empower businesses to make informed
              decisions and stay ahead in a competitive landscape.
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#0B8FD6" }}
            >
              Comprehensive Business Consulting Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We offer end-to-end consulting services tailored to your business
              needs, from strategy development to implementation. Our team of
              seasoned consultants works closely with you to identify
              opportunities, mitigate risks, and drive transformative change.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Services Include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Strategic Planning – Developing long-term business strategies
                aligned with market trends and organizational goals.
              </li>
              <li>
                Operational Excellence – Streamlining processes to improve
                efficiency, reduce costs, and enhance productivity.
              </li>
              <li>
                Change Management – Guiding organizations through transitions
                with minimal disruption.
              </li>
              <li>
                Performance Optimization – Analyzing key metrics and
                implementing solutions for better outcomes.
              </li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#0B8FD6" }}
            >
              What is Business Consulting?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Business consulting involves partnering with experts to gain
              external perspectives on internal challenges. Our consultants
              bring fresh insights, specialized knowledge, and proven
              methodologies to help you solve problems, capitalize on
              opportunities, and achieve your objectives faster and more
              effectively.
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#0B8FD6" }}
            >
              Our Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Assessment and Analysis – Evaluating current business operations
                and identifying areas for improvement.
              </li>
              <li>
                Strategy Formulation – Crafting customized strategies based on
                data and stakeholder input.
              </li>
              <li>
                Implementation Planning – Developing actionable plans with clear
                timelines and responsibilities.
              </li>
              <li>
                Execution and Monitoring – Overseeing implementation and
                measuring progress against goals.
              </li>
              <li>
                Continuous Improvement – Providing ongoing support to refine
                strategies and adapt to changes.
              </li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#0B8FD6" }}
            >
              Benefits to Clients
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Enhanced decision-making through expert analysis and insights.
              </li>
              <li>Improved operational efficiency and cost savings.</li>
              <li>Accelerated growth and competitive advantage.</li>
              <li>Seamless change management and employee engagement.</li>
              <li>
                Long-term sustainability and adaptability in dynamic markets.
              </li>
            </ul>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <div
              className="text-white text-center py-2 px-4 rounded-t-lg mb-4"
              style={{ backgroundColor: "#0B8FD6" }}
            >
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
                >
                  <option value="Business Consulting Service">
                    Business Consulting Service
                  </option>
                  <option value="ERP Consulting Service">
                    ERP Consulting Service
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                  style={
                    {
                      "--tw-ring-color": "#0B8FD6",
                      boxShadow: "0 0 0 1px #0B8FD6",
                    } as React.CSSProperties
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={
                  {
                    backgroundColor: "#0B8FD6",
                    "--tw-ring-color": "#0B8FD6",
                  } as React.CSSProperties
                }
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

export default BusinessConsultingService;

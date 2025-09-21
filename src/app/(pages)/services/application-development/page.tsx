"use client";
import React, { useState } from "react";
import Image from "next/image";

const ApplicationDevelopmentService: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    location: "",
    serviceName: "Application Development", // Default selected
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
      serviceName: "Application Development",
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
          src="/assets/services/app.jpg"
          alt="Application Development Service Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Soft custom yellow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(214, 206, 11, 0.55)", // #D6CE0B with 45% opacity
            mixBlendMode: "multiply",
          }}
        />
        {/* Headline moved to bottom left */}
        <div className="absolute left-0 bottom-0 w-full flex items-end">
          <div className="p-6 md:p-10">
            <div className="text-white text-sm md:text-base opacity-80 mb-1">
              services / application-development
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
              Application Development Service
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
              style={{ color: "#D6CE0B" }}
            >
              Custom Application Development – Tailored Solutions for Your
              Business
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our Application Development Services focus on creating bespoke
              software solutions that align with your unique business
              requirements. From web and mobile apps to enterprise systems, we
              leverage cutting-edge technologies to deliver scalable, secure,
              and user-friendly applications that drive efficiency and
              innovation.
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#D6CE0B" }}
            >
              Comprehensive Application Development Offerings
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide full-cycle application development services, ensuring
              that every project is delivered on time and within budget. Our
              expert developers work closely with you to transform ideas into
              robust applications that enhance productivity and user experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Services Include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Web Application Development – Building responsive and dynamic
                web apps using modern frameworks.
              </li>
              <li>
                Mobile Application Development – Creating native and
                cross-platform mobile apps for iOS and Android.
              </li>
              <li>
                Enterprise Software Solutions – Developing complex systems for
                large-scale operations.
              </li>
              <li>
                API Integration and Development – Ensuring seamless connectivity
                between applications and services.
              </li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#D6CE0B" }}
            >
              What is Application Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Application development is the process of designing, building, and
              deploying software applications to meet specific business needs.
              Our team specializes in custom development, ensuring that each
              application is optimized for performance, security, and
              scalability, helping you stay competitive in a digital world.
            </p>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#D6CE0B" }}
            >
              Our Process
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Requirement Gathering – Understanding your needs and defining
                project scope.
              </li>
              <li>
                Design and Prototyping – Creating wireframes and prototypes for
                user feedback.
              </li>
              <li>
                Development and Testing – Building the application with rigorous
                quality assurance.
              </li>
              <li>
                Deployment and Maintenance – Launching the app and providing
                ongoing support.
              </li>
              <li>
                Continuous Updates – Ensuring the application evolves with your
                business needs.
              </li>
            </ul>

            <h3
              className="text-2xl font-semibold mb-4"
              style={{ color: "#D6CE0B" }}
            >
              Benefits to Clients
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>
                Customized solutions that perfectly fit your business processes.
              </li>
              <li>
                Enhanced user experience and engagement through intuitive
                designs.
              </li>
              <li>Improved operational efficiency and reduced manual tasks.</li>
              <li>
                Scalable and secure applications built with future-proof
                technologies.
              </li>
              <li>
                Ongoing support and maintenance to ensure long-term success.
              </li>
            </ul>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <div
              className="text-white text-center py-2 px-4 rounded-t-lg mb-4"
              style={{ backgroundColor: "#D6CE0B" }}
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
                    } as React.CSSProperties
                  }
                >
                  <option value="Application Development">
                    Application Development
                  </option>
                  <option value="ERP Consulting Service">
                    ERP Consulting Service
                  </option>
                  <option value="Business Consulting Service">
                    Business Consulting Service
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
                      "--tw-ring-color": "#D6CE0B",
                      boxShadow: "0 0 0 1px #D6CE0B",
                    } as React.CSSProperties
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={
                  {
                    backgroundColor: "#D6CE0B",
                    "--tw-ring-color": "#D6CE0B",
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

export default ApplicationDevelopmentService;

// ...existing code...
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (item: string) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

  const navItems = [
    { name: "About Us", subItems: [], route: "/about", color: "#0B8FD6" },
    {
      name: "Services",
      subItems: [
        "ERP Consulting Service",
        "Business Consulting Process",
        "Application Development",
        "Transformation Service",
        "Maintenance and Development",
      ],
      route: "/services",
      color: "#0B8FD6",
    },
    {
      name: "USPs",
      subItems: ["BYOS", "BYBS", "BIBD", "RIRO"],
      route: "/usps",
      color: "#0B8FD6",
    },
    {
      name: "Innovations",
      subItems: ["ERP Bugs", "Hukehu", "BIBD Labs"],
      route: "/innovations",
      color: "#0B8FD6",
    },
    {
      name: "Methodology",
      subItems: [],
      route: "/methodology",
      color: "#0B8FD6",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        // Cleaner glassmorphism - more subtle to match hero
        background: scrolled
          ? "rgba(255,255,255,0.85)"
          : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(12px) saturate(120%)",
        WebkitBackdropFilter: "blur(12px) saturate(120%)",
        borderBottom: scrolled
          ? "1px solid rgba(11,143,214,0.08)"
          : "1px solid rgba(11,143,214,0.04)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(11,143,214,0.06)"
          : "0 4px 20px rgba(11,143,214,0.03)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Enhanced for better visibility */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Power Solutions Logo"
                  className="h-12 w-auto transition-all duration-300 cursor-pointer drop-shadow-sm"
                />
                {/* Subtle glow for better visibility against animated background */}
                <div
                  className="absolute inset-0 -z-10 blur-sm opacity-30"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(11,143,214,0.3), rgba(11,143,214,0.1))",
                    borderRadius: "8px",
                    transform: "scale(1.1)",
                  }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav - Simplified and clean */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link href={item.route}>
                  <motion.button
                    className="relative px-5 py-2.5 text-foreground font-medium text-sm group flex items-center overflow-hidden rounded-lg transition-all duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      if (item.subItems.length > 0) {
                        e.preventDefault();
                        toggleDropdown(item.name);
                      }
                    }}
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {item.name}
                    </span>
                    {item.subItems.length > 0 && (
                      <motion.div
                        animate={{
                          rotate: dropdownOpen === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="ml-2 transition-colors duration-300 group-hover:text-white"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    )}

                    {/* Clean hover background effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: item.color }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.9 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </motion.button>
                </Link>

                <AnimatePresence>
                  {dropdownOpen === item.name && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full w-72 bg-white/90 border border-blue-200/30 rounded-xl shadow-xl backdrop-blur-md z-50 overflow-hidden mt-2"
                      style={{
                        backdropFilter: "blur(12px) saturate(120%)",
                        WebkitBackdropFilter: "blur(12px) saturate(120%)",
                      }}
                    >
                      <div className="p-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.button
                            key={subItem}
                            onClick={() =>
                              router.push(`${item.route}/${slugify(subItem)}`)
                            }
                            className="group flex items-center justify-between px-4 py-3 text-sm text-gray-700 rounded-lg transition-all duration-200 relative overflow-hidden w-full text-left hover:text-white"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <span className="relative z-10">{subItem}</span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10" />

                            {/* Clean hover background */}
                            <motion.div
                              className="absolute inset-0 rounded-lg"
                              style={{ backgroundColor: item.color }}
                              initial={{ scale: 0, opacity: 0 }}
                              whileHover={{ scale: 1, opacity: 0.9 }}
                              transition={{ duration: 0.2 }}
                            />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Nav - Simplified */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className="px-2 pt-4 pb-6 space-y-2 bg-white/80 backdrop-blur-md border-t border-blue-200/30"
                style={{
                  backdropFilter: "blur(12px) saturate(120%)",
                  WebkitBackdropFilter: "blur(12px) saturate(120%)",
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.subItems.length === 0 ? (
                      <Link href={item.route}>
                        <motion.button
                          className="w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-blue-600 rounded-lg font-medium transition-all duration-200 flex items-center justify-between group relative overflow-hidden"
                          whileHover={{ x: 4 }}
                        >
                          <span className="relative z-10">{item.name}</span>
                        </motion.button>
                      </Link>
                    ) : (
                      <motion.button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:text-white hover:bg-blue-600 rounded-lg font-medium transition-all duration-200 flex items-center justify-between group relative overflow-hidden"
                        whileHover={{ x: 4 }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <motion.div
                          animate={{
                            rotate: dropdownOpen === item.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </motion.button>
                    )}

                    <AnimatePresence>
                      {dropdownOpen === item.name &&
                        item.subItems.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <motion.button
                                key={subItem}
                                onClick={() =>
                                  router.push(
                                    `${item.route}/${slugify(subItem)}`
                                  )
                                }
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-200 relative overflow-hidden w-full text-left"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                whileHover={{ x: 8 }}
                              >
                                <span className="relative z-10">{subItem}</span>
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

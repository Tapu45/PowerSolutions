"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (item: string) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  const navItems = [
    { name: 'About Us', subItems: [] },
    {
      name: 'Services',
      subItems: [
        'ERP Consulting Service',
        'Business Consulting Process',
        'Application Development',
        'Transformation Service',
        'Maintenance and Development',
      ],
    },
    {
      name: 'USPs',
      subItems: [
        'BYOS',
        'BYBS',
        'BIBD',
        'RIRO',
      ],
    },
    {
      name: 'Innovations',
      subItems: [
        'ERP Bugs',
        'Hukehu',
        'BIBD Labs',
      ],
    },
    { name: 'Methodology', subItems: [] },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}
      style={{
        backgroundImage: scrolled 
          ? `radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.03) 0%, transparent 50%), 
             radial-gradient(circle at 80% 20%, rgba(var(--primary-rgb), 0.02) 0%, transparent 50%),
             linear-gradient(135deg, rgba(var(--muted-rgb), 0.1) 0%, transparent 100%)`
          : `radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.02) 0%, transparent 50%), 
             radial-gradient(circle at 80% 20%, rgba(var(--primary-rgb), 0.01) 0%, transparent 50%)`,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        backgroundPosition: '0 0, 0 0, 0 0',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/logo.png"
              alt="Power Solutions Logo"
              className="h-12 w-auto transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => toggleDropdown(item.name)}
                  className="relative px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium text-sm group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.subItems.length > 0 && (
                    <motion.div
                      animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </motion.div>
                  )}
                  
                  {/* Hover effect background */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen === item.name && item.subItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full mt-2 w-72 bg-card border border-border rounded-xl shadow-xl backdrop-blur-md z-50 overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(var(--card-rgb), 0.95) 0%, rgba(var(--card-rgb), 0.98) 100%)`,
                      }}
                    >
                      <div className="p-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.a
                            key={subItem}
                            href="#"
                            className="group flex items-center justify-between px-4 py-3 text-sm text-card-foreground hover:bg-accent rounded-lg transition-all duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            whileHover={{ x: 4 }}
                          >
                            <span>{subItem}</span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </motion.a>
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
              className="p-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div 
                className="px-2 pt-4 pb-6 space-y-2 bg-card/50 backdrop-blur-md border-t border-border"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(var(--card-rgb), 0.8) 0%, rgba(var(--card-rgb), 0.9) 100%)`,
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg font-medium transition-all duration-200 flex items-center justify-between group"
                      whileHover={{ x: 4 }}
                    >
                      <span>{item.name}</span>
                      {item.subItems.length > 0 && (
                        <motion.div
                          animate={{ rotate: dropdownOpen === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      )}
                    </motion.button>
                    
                    <AnimatePresence>
                      {dropdownOpen === item.name && item.subItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-2 space-y-1"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              whileHover={{ x: 8 }}
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;